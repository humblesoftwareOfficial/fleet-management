/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";

import { GetCommunesByDepartments, GetDepartmentsByRegions, GetStationsByCommunes } from "../../../Configuration/api";
import { FooterModal } from "../../../Styling/Modal";
import { Button, CollapsersStyle, DefaultButton, FilterOptionsContainer, FilterOptionsItem, Option, Select } from "../../../Styling/Shared";
import Collapse from "../../Shared/Collapse";
import Spinner from "../../Shared/Spinner";

export default function HeaderFiltersOptions({ regions = [], onValidate, onClose }) {
  const [departments, setDepartments] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDept, setIsLoadingDept] = useState(false);
  const [isLoadingStations, setIsLoadingStations] = useState(false);
  const [votingStations, setVotingStations] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedCommune, setSelectedCommune] = useState(null);

  useEffect(() => {
    if (departments) {
      setIsLoadingDept(false);
    }
  }, [departments]);

  useEffect(() => {
    if (communes) {
      setIsLoading(false);
    }
  }, [communes]);

  useEffect(() => {
    if (votingStations) {
      setIsLoadingStations(false);
    }
  }, [votingStations]);

  const renderRegionsOption = useCallback(
    () =>
      regions?.map((re, _index) => (
        <Option key={re?.code} value={re?.code}>
          {re?.name}
        </Option>
      )),
    [regions]
  );

  const renderDepartmentsOption = useCallback(
    () =>
      departments?.map((de, _index) => (
        <Option key={de?.code} value={de?.code}>
          {de?.name}
        </Option>
      )),
    [departments]
  );

  const renderommunesOption = useCallback(
    () =>
      communes?.map((co, _index) => (
        <Option key={co?.code} value={co?.code}>
          {co?.name}
        </Option>
      )),
    [communes]
  );

  const onChangeRegion = async (e) => {
    try {
      setSelectedRegion(regions.find((r) => r.code === e.target.value));
      setIsLoadingDept(true);
      const payload = {
        data: [{ region: e.target.value }],
      };
      const response = await GetDepartmentsByRegions(payload);
      const { success, data } = response.data;
      if (success) {
        setDepartments(data);
      } else {
        setDepartments([]);
        setIsLoadingDept(false);
      }
    } catch (error) {
      console.log({ error });
      setDepartments([]);
      setIsLoadingDept(false);
    }
  };

  const onChangeDepartment = async (e) => {
    try {
      setSelectedDept(departments.find((d) => d.code === e.target.value));
      setIsLoading(true);
      const payload = {
        data: [{ department: e.target.value }],
      };
      const response = await GetCommunesByDepartments(payload);
      const { success, data } = response.data;
      if (success) {
        setCommunes(data);
      } else {
        setCommunes([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log({ error });
      setCommunes([]);
      setIsLoading(false);
    }
  };

  const onChangeCommune = async (e) => {
    try {
      setSelectedCommune(communes.find((c) => c.code === e.target.value));
      setIsLoadingStations(true);
      const payload = {
        data: [{ commune: e.target.value }],
      };
      const response = await GetStationsByCommunes(payload);
      const { success, data } = response.data;
      if (success) {
        setVotingStations(data);
        console.log({ data });
      } else {
        setVotingStations([]);
        setIsLoadingStations(false);
      }
    } catch (error) {
      console.log({ error });
      setVotingStations([]);
      setIsLoadingStations(false);
    }
  };

  const onselectStation = (station) => {
    onValidate({
      region: selectedRegion,
      department: selectedDept,
      commune: selectedCommune,
      station,
    });
  };

  const renderStations = useCallback(
    () =>
      votingStations?.map((o, index) => (
        <Collapse
          name={o.location}
          key={index}
          data={o.stations}
          onSelectItem={onselectStation}
        />
      )),
    [votingStations]
  );

  return (
    <FilterOptionsContainer>
      <FilterOptionsItem>
        <Select
          defaultChecked={false}
          onChange={onChangeRegion}
          defaultValue="Choisir"
        >
          <Option value="Choisir" disabled hidden>
            Région(s)
          </Option>
          {renderRegionsOption()}
        </Select>
        {/* <SelectOptions options={regions}/> */}
      </FilterOptionsItem>
      {Boolean(departments?.length && !isLoadingDept) && (
        <FilterOptionsItem>
          <Select defaultValue="Choisir" onChange={onChangeDepartment}>
            <Option value="Choisir" disabled hidden>
              Departement(s)
            </Option>
            {renderDepartmentsOption()}
          </Select>
        </FilterOptionsItem>
      )}
      {Boolean(communes.length && !isLoading && !isLoadingDept) && (
        <FilterOptionsItem>
          <Select defaultValue="Choisir" onChange={onChangeCommune}>
            <Option value="Choisir" disabled hidden>
              Commune(s)
            </Option>
            {renderommunesOption()}
          </Select>
        </FilterOptionsItem>
      )}
      {Boolean(isLoading || isLoadingDept || isLoadingStations) && <Spinner />}
      {Boolean(votingStations?.length) && !isLoadingStations && (
        <>
          <h5 style={{ textAlign: "center" }}>Liste des bureaux de votes</h5>
          <CollapsersStyle>{renderStations()}</CollapsersStyle>
        </>
      )}
      <FooterModal>
        <DefaultButton
          onClick={() =>
            onValidate({
              region: selectedRegion,
              department: selectedDept,
              commune: selectedCommune,
            })
          }
        >
          Confirmer
        </DefaultButton>
        <Button borderColor="#E62B6F" onClick={() => onClose()}>Annuler</Button>
      </FooterModal>
    </FilterOptionsContainer>
  );
}

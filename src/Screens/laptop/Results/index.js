/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";

import { GetDepartmentsByRegions, GetRegionsList } from "../../../Configuration/api";
import { MainDashboard } from "../../../Styling/Dashboard";
import { GlobalLocationContainer, LocationContainer } from "../../../Styling/Repartition";
import { ContainerSection } from "../../../Styling/Shared";
import HeaderSection from "../../Shared/Header";
import Loading from "../../Shared/Loading";
import Spinner from "../../Shared/Spinner";
import ItemLocation from "./ItemLocation";
import LocationsResult from "./LocationsResult";

export default function Results({ ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [regions, setRegions] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [isLoadingDept, setIsLoadingDept] = useState(false);

  useEffect(() => {
    getAllRegions();
  }, []);

  useEffect(() => {
    if (regions?.length) {
      setIsLoading(false);
    }
  }, [regions]);

  useEffect(() => {
    if (departments?.length) {
      setIsLoadingDept(false);
    }
  }, [departments]);

  useEffect(() => {
    if (selectedRegions.length) {
      getDepartments();
    } else {
      setDepartments([]);
    }
    // setSelectedDepts([])
  }, [selectedRegions]);

  const getAllRegions = async () => {
    try {
      const response = await GetRegionsList();
      const { success, data } = response.data;
      if (success) setRegions(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const getDepartments = async () => {
    try {
      setIsLoadingDept(true);
      const regions = selectedRegions.flatMap((r) => ({ region: r }));
      const payload = {
        data: regions,
      };
      const response = await GetDepartmentsByRegions(payload);
      const { success, data } = response.data;
      if (success && data?.length) {
        setDepartments(data);
      } else {
        setIsLoadingDept(false);
      }
    } catch (error) {
      console.log({ error });
      setIsLoadingDept(false);
    }
  };

  const onSelectRegion = (region) => {
    const newArray = [...selectedRegions];
    const resultIndex = newArray?.findIndex((code) => code === region);
    if (resultIndex !== -1) {
      console.log("here");
      newArray.splice(resultIndex, 1);
    } else {
      newArray.push(region);
    }
    setSelectedRegions(newArray);
  };

  const onSelectDept = (department) => {
    const newArray = [...selectedDepts];
    const resultIndex = newArray?.findIndex((code) => code === department);
    if (resultIndex !== -1) {
      console.log("here");
      newArray.splice(resultIndex, 1);
    } else {
      newArray.push(department);
    }
    setSelectedDepts(newArray);
  };

  const renderRegions = useCallback(
    () =>
      regions?.map((reg) => (
        <ItemLocation
          key={reg?.code}
          region={reg}
          onPress={(code) => onSelectRegion(code)}
          isSelected={selectedRegions.includes(reg?.code)}
        />
      )),
    [regions, selectedRegions]
  );

  const renderDepartments = useCallback(
    () =>
      departments?.map((dept) => (
        <ItemLocation
          key={dept?.code}
          region={dept}
          onPress={(code) => onSelectDept(code)}
          isSelected={selectedDepts.includes(dept?.code)}
        />
      )),
    [departments, selectedDepts]
  );

  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Résultats par zone" />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <GlobalLocationContainer>
              <LocationContainer>{renderRegions()}</LocationContainer>
              <LocationContainer>
                {isLoadingDept ? <Spinner /> : renderDepartments()}
              </LocationContainer>
            </GlobalLocationContainer>
            <LocationsResult regions={selectedRegions} departments={selectedDepts} />
            {/* <RecapCards stats={stats}/>
            <Repartitions data={results}/>
            <EvolutionChart data={results}/>
            <DayLoaction /> */}
          </>
        )}
      </MainDashboard>
    </ContainerSection>
  );
}

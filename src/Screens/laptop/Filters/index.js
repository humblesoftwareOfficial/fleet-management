import React, { useEffect, useState } from "react";

import { GetRegionsList, GetResultsByLocations } from "../../../Configuration/api";
import { APP_COLORS } from "../../../Styling/Colors";
import { MainDashboard } from "../../../Styling/Dashboard";
import { Button, ContainerSection, FilterHeaderContainer } from "../../../Styling/Shared";
import HeaderSection from "../../Shared/Header";
import Loading from "../../Shared/Loading";
import Modal from "../../Shared/Modal";
import Spinner from "../../Shared/Spinner";
import EvolutionChart from "../Dashboard/EvolutionChart";
import RecapCards from "../Dashboard/RecapCards";
import Repartitions from "../Dashboard/Repartitions";
import RecapResultLocations from "../Results/RecapResultLocations";
import HeaderFiltersOptions from "./HeaderFiltersOptions";

export default function Filters({ ...props }) {
  const [openModal, setOpenModal] = useState(false);
  const [regions, setRegions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [results, setResults] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getAllRegions();
  }, []);

  useEffect(() => {
    if (regions) setIsLoading(false);
  }, [regions]);

  useEffect(() => {
    if (activeFilter) {
      if (activeFilter.station) {
        getResultByLocation(
          [{ station: activeFilter.station.code }],
          "stations"
        );
      } else if (activeFilter.commune) {
        getResultByLocation(
          [{ commune: activeFilter.commune.code }],
          "communes"
        );
      } else if (activeFilter.department) {
        getResultByLocation(
          [{ department: activeFilter.department.code }],
          "departments"
        );
      } else if (activeFilter.region) {
        getResultByLocation([{ region: activeFilter.region.code }], "regions");
      } else {
        setIsLoadingResults(false);
      }
      console.log({ activeFilter });
    }
  }, [activeFilter]);

  useEffect(() => {
    if (results) {
      setIsLoadingResults(false);
    }
  }, [results]);

  const getAllRegions = async () => {
    try {
      const response = await GetRegionsList();
      const { success, data } = response.data;
      if (success) setRegions(data);
      else setRegions([]);
    } catch (error) {
      console.log({ error });
      setRegions([]);
    }
  };

  const onClose = () => {
    setOpenModal(false);
  };

  const onValidateFilter = (filter) => {
    setOpenModal(false);
    setIsLoadingResults(true);
    setActiveFilter(filter);
  };

  const getResultByLocation = async (locations, prefix) => {
    try {
      const payload = {
        data: locations,
      };
      const response = await GetResultsByLocations(payload, prefix);
      const { success, data } = response.data;
      if (success) {
        setStats({
          voters_registered: data[0]?.voters_registered,
          voters_count: data[0]?.voters_count,
          voters_expressed: data[0]?.voters_expressed,
          voters_not_expressed: data[0]?.voters_not_expressed,
        });
        setResults(data);
      } else {
        setStats({
          voters_registered: 0,
          voters_count: 0,
          voters_expressed: 0,
          voters_not_expressed: 0,
        });
        setResults([]);
        setIsLoading(false);
      }
    } catch (error) {
      setStats({
        voters_registered: 0,
        voters_count: 0,
        voters_expressed: 0,
        voters_not_expressed: 0,
      });
      setResults([]);
      setIsLoading(false);
    }
  };

  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Filtres avancées" />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <FilterHeaderContainer>
              <Button borderColor="#001f3f" onClick={() => setOpenModal(true)}>
                Appliquer un filtre
              </Button>
              <Button borderColor={APP_COLORS.RED_COLOR.color}>
                Réinitialiser
              </Button>
            </FilterHeaderContainer>
            {Boolean(isLoadingResults) ? (
              <Spinner />
            ) : (
              <>
                <RecapResultLocations
                  region={activeFilter?.region}
                  department={activeFilter?.department}
                  commune={activeFilter?.commune}
                  station={activeFilter?.station}
                />
                <RecapCards stats={stats}/>
                <Repartitions data={results} />
                <EvolutionChart data={results}/>
              </>
            )}
          </>
        )}
      </MainDashboard>
      <Modal
        open={openModal}
        children={
          <HeaderFiltersOptions
            regions={regions}
            onValidate={onValidateFilter}
            onClose={onClose}
          />
        }
        onClose={onClose}
        title="Filtres"
        confirmText="Appliquer"
        color="#001f3f"
      />
    </ContainerSection>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { GetRegionsList, GetResultsByRegion } from "../../../Configuration/api";
import { MainDashboardMobile } from "../../../Styling/Dashboard";
import { ContainerSection } from "../../../Styling/Shared";
import Repartitions from "../../laptop/Dashboard/Repartitions";
import HeaderSection from "../../Shared/Header";
import Loading from "../../Shared/Loading";
import EvolutionChartMobile from "./EvolutionChartMobile";
import RecapCards from "./RecapCards";

export default function DashBoard() {
  const [isLoading, setIsLoading] = useState(true);
  const [regions, setRegions] = useState(null);
  const [results, setResults] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getAllRegions();
  }, []);

  useEffect(() => {
    if (regions?.length) {
      // setIsLoading(false);
      getResults();
    }
  }, [regions]);

  useEffect(() => {
    if (results?.length) {
      setIsLoading(false);
    }
  }, [results]);

  const getAllRegions = async () => {
    try {
      const response = await GetRegionsList();
      const { success, data } = response.data;
      if (success) setRegions(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const getResults = async () => {
     try {
      const allRegionsCodes = regions?.flatMap((r) => ({
        region: r.code,
      }));
      const payload = {
        data: allRegionsCodes,
      }
      const response = await GetResultsByRegion(payload);
      const { success, data } = response.data;
      if (success) {
        setStats({
          voters_registered: data[0]?.voters_registered,
          voters_count: data[0]?.voters_count,
          voters_expressed: data[0]?.voters_expressed,
          voters_not_expressed: data[0]?.voters_not_expressed,
        });
        setResults(data);
      }
     } catch (error) {
      console.log({ error });
      setResults([]);
     }
  }
  return (
    <ContainerSection>
      <MainDashboardMobile>
        <HeaderSection leftTitle="Home" isMobile/>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <RecapCards stats={stats}/>
            <Repartitions data={results}/>
            <EvolutionChartMobile data={results}/>
            {/* <DayLoaction /> */}
          </>
        )}
        {/* <RecapCards /> */}
        {/* <EvolutionChartMobile data={results}/>
        <DayLoactionMobile /> */}
      </MainDashboardMobile>
    </ContainerSection>
  );
}

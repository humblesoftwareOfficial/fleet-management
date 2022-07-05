/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GetResultsByDepartments, GetResultsByRegion } from "../../../Configuration/api";
import Loading from "../../Shared/Loading";
import EvolutionChart from "../Dashboard/EvolutionChart";
// import RecapCards from "../Dashboard/RecapCards";
import Repartitions from "../Dashboard/Repartitions";

export default function LocationsResult({ regions = [], departments = [] }) {
  const [results, setResults] = useState(null);
  // const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (departments?.length) {
      console.log("getting depts")
      getResultsByDepts();
    } else if (regions?.length) {
      console.log("getting regions")
      getResultsByRegions();
    }
  }, [regions, departments]);

  useEffect(() => {
    if (results) {
      setIsLoading(false);
    }
  }, [results]);

  const getResultsByRegions = async () => {
    try {
      setIsLoading(true);
      const allRegionsCodes = regions?.flatMap((r) => ({
        region: r,
      }));
      const payload = {
        data: allRegionsCodes,
      };
      const response = await GetResultsByRegion(payload);
      const { success, data } = response.data;
      if (success) {
        // setStats({
        //   voters_registered: data[0]?.voters_registered || 0,
        //   voters_count: data[0]?.voters_count || 0,
        //   voters_expressed: data[0]?.voters_expressed || 0,
        //   voters_not_expressed: data[0]?.voters_not_expressed || 0,
        // });
        setResults(data);
      }
    } catch (error) {
      console.log({ error });
      setResults([]);
    }
  };

  const getResultsByDepts = async () => {
    try {
      setIsLoading(true);
      const allDeptsCodes = departments?.flatMap((d) => ({
        department: d,
      }));
      const payload = {
        data: allDeptsCodes,
      };
      const response = await GetResultsByDepartments(payload);
      const { success, data } = response.data;
      if (success) {
        // setStats({
        //   voters_registered: data[0]?.voters_registered || 0,
        //   voters_count: data[0]?.voters_count || 0,
        //   voters_expressed: data[0]?.voters_expressed || 0,
        //   voters_not_expressed: data[0]?.voters_not_expressed || 0,
        // });
        setResults(data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.log({ error });
      setResults([]);
    }
  };

  return (
    <>
      {!Boolean(regions?.length) && !Boolean(departments?.length) && (
        <h2 style={{ textAlign: "center" }}>
          {`-< Selectionner une zone pour voir les résultats >-`}
        </h2>
      )}
      {Boolean(regions?.length) &&
        (isLoading ? (
          <Loading />
        ) : (
          <>
            <Repartitions data={results} />
            <EvolutionChart
              data={results}
              customTitle="Résultats combinés par zone"
            />
          </>
        ))}
    </>
  );
}

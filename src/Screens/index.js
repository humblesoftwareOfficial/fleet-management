import React, { useEffect, useState } from "react";
import { getToken, isMobileDevice } from "../utils";
import useToken from "../utils/useToken";
import Laptop from "./laptop";
import Mobile from "./mobile";
import Login from "./Shared/Login";
import Spinner from "./Shared/Spinner";

export default function Screens({ ...props }) {
  // const [isAuthentified, setIsAuthentified] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const token = getToken();
  //   if (token) {
     
  //     setIsAuthentified(true);
  //   } else {
  //     setIsAuthentified(false);
  //   }
  //   setIsLoading(false);
  // }, []);

  // const onAuthentified = (data) => {
  //   setIsAuthentified(true);
  // };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (!isAuthentified) {
  //   return <Login onAuthentified={onAuthentified} />;
  // }

  return <>{isMobileDevice() ? <Mobile /> : <Laptop />}</>;
}

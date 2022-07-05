import React, { useState } from "react";

import { Authentification } from "../../Configuration/api";
import {
  Circle,
  ContainerInputLogin,
  ErrorMessage,
  FormContainer,
  InfoEnterprise,
  InputLogin,
  LoginContainer,
  SubmitButton,
} from "../../Styling/Login";
import { saveToken } from "../../utils";
import Spinner from "./Spinner";

export default function Login({ onAuthentified }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangePhone = (e) => {
    setPhone(e.target.value);
    setError("");
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      if (phone?.length > 6 && password.length > 3) {
        const payload = {
          phone,
          password,
        };
        const response = await Authentification(payload);
        const { success, data, message } = response.data;

        console.log({ success });
        if (success) {
          saveToken(data.access_token);
          onAuthentified(data);
        } else {
          setError(message);
          setIsLoading(false);
        }
      } else {
        setError("Informations de connexions incorrectes. Réessayer");
        setIsLoading(false);
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Informations de connexions incorrectes. Réessayer"
      );
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Circle color="rgba(255, 235, 38, 0.8)"></Circle>
        <Circle
          color="rgba(225, 12, 12, 0.8)"
          style={{ marginLeft: "12vh" }}
        ></Circle>
        <Circle
          color="rgba(4, 120, 43, 0.8)"
          style={{ marginRight: "12vh" }}
        ></Circle>
        <h3>Welcome to A-Z Elections</h3>
        <ErrorMessage>{error}</ErrorMessage>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ContainerInputLogin>
              <InputLogin
                placeholder="Téléphone"
                value={phone}
                onChange={onChangePhone}
              />
            </ContainerInputLogin>
            <ContainerInputLogin>
              <InputLogin
                placeholder="Mot de passe"
                type="password"
                onChange={onPasswordChange}
                value={password}
              />
            </ContainerInputLogin>
            <ContainerInputLogin>
              <SubmitButton onClick={onSubmit}>Se connecter</SubmitButton>
            </ContainerInputLogin>
          </>
        )}
      </FormContainer>
      <InfoEnterprise>©️ 2022 Humble soft, Inc.</InfoEnterprise>
    </LoginContainer>
  );
}

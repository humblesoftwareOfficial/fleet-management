import React, { useMemo, useState } from "react";
import { ContainerForm, Form } from "../../../Styling/Reservation";
import Stepper from "../../Shared/Stepper";
import Chauffeur from "./StepsFormReservation/Chauffeur";
import Clauses from "./StepsFormReservation/Clauses";
import Client from "./StepsFormReservation/Client";
import Contrat from "./StepsFormReservation/Contrat";
import Vehicule from "./StepsFormReservation/Vehicule";

export default function FormReservation({ isMobile = false, onCancel }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Client", "Véhicule", "Contrat", "Chauffeur", "Clauses"];

  const StepsForm = {
    0: <Client />,
    1: <Vehicule />,
    2: <Contrat />,
    3: <Chauffeur />,
    4: <Clauses />,
  };
  const renderStepForm = useMemo(() => StepsForm[activeStep], [activeStep]);

  const renderForm = () => (
    <ContainerForm>
      <Form>{renderStepForm}</Form>
    </ContainerForm>
  );
  const onNext = () => {
    if (activeStep !== steps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const onBack = () => {
    if (activeStep) {
      setActiveStep(activeStep - 1);
    } else {
      onCancel();
    }
  };
  return (
    <Stepper
      steps={steps}
      activeStep={activeStep}
      stepComponent={renderForm()}
      onNext={onNext}
      onBack={onBack}
    />
  );
}

import React from "react";
import { Button, DefaultButton } from "../../../Styling/Shared";
import {
  DotStep,
  FooterStep,
  HeaderStepper,
  LabelStep,
  NameStep,
  StepperContainer,
} from "../../../Styling/Stepper";

export default function Stepper({
  steps,
  activeStep = 0,
  stepComponent,
  onNext,
  onBack,
}) {
  const getStepColor = (index) =>
    activeStep < index ? "#ABA6B1" : activeStep > index && "#54B30D";
  const renderSteps = () =>
    steps?.map((step, index) => (
      <LabelStep key={index}>
        <DotStep
          style={{
            backgroundColor: getStepColor(index),
            border: "none",
          }}
        >
          {index + 1}
        </DotStep>
        <NameStep style={{ color: activeStep === index && "#001f3f" }}>
          {step}
        </NameStep>
      </LabelStep>
    ));
  return (
    <StepperContainer>
      <HeaderStepper>{renderSteps()}</HeaderStepper>
      {stepComponent}

      <FooterStep>
        <Button
          borderColor={activeStep === 0 ? "#D01A0B" : "#ABA6B1"}
          onClick={onBack}
        >
          {activeStep > 0 ? "Retour" : "Annuler"}
        </Button>
        <DefaultButton borderColor="#001f3f" onClick={onNext}>
          Suivant
        </DefaultButton>
      </FooterStep>
    </StepperContainer>
  );
}

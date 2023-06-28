import {
  Box,
  Flex,
  Grid,
  HStack,
  SimpleGrid,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";

export function StepperFunctionOne() {
  const steps = [
    { title: "Step One", description: "Gather Information" },
    { title: "Step Two", description: "Setup Preferences" },
    { title: "Step Three", description: "Submission Confirmation" },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <SingleExample bg="background">
      <HStack justifyContent="space-evenly">
        <Stepper
          index={activeStep}
          display="flex"
          alignItems="flex-start"
          w="100%"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <VStack flex="1" justifyContent="flex-start">
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <VStack
                  w="33%"
                  flexShrink="0"
                  textAlign="center"
                  justifyContent="flex-start"
                >
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </VStack>

                <StepSeparator />
              </VStack>
            </Step>
          ))}
        </Stepper>
      </HStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionTwo() {
  const steps = [
    { title: "First", description: "Gather Information" },
    { title: "Second", description: "Setup Preferences" },
    { title: "Third", description: "Confirm Submission" },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <SingleExample bg="background">
      <Stepper index={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionThree() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function StepperFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function StepperFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function StepperFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function StepperFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

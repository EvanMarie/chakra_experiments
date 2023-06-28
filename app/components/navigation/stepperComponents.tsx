import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { StepperFunctionOne, StepperFunctionTwo } from "./stepperFunctions";

/* ********************************************************************** */

export function StepperOne() {
  return (
    <SectionContainer>
      <SectionHeading>Using the Stepper Component</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI provides a <Mono>useSteps</Mono> hook to help manage the
          state of the stepper and the active step index. Below is a practical
          example that displays a horizontal step indicator, with each step
          representing a different stage of a form completion process.
        </SectionDescription>
        <BasicText>
          In the following example, the steps array holds the different steps
          for our stepper. For each step, we provide a title and description,
          which are displayed in the <Mono>StepTitle</Mono> and{" "}
          <Mono>StepDescription</Mono> components respectively.
        </BasicText>
        <BasicText>
          We use the <Mono>useSteps</Mono> hook to manage the active step, with
          the index starting at 1. The <Mono>Stepper</Mono> component takes the{" "}
          <Mono>activeStep</Mono> as a prop to know which step to highlight.
          Inside the <Mono>StepIndicator</Mono>, we use the{" "}
          <Mono>StepStatus</Mono> component to render different content based on
          whether the step is complete, incomplete, or active.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Modifying the Stepper Orientation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Stepper component is highly customizable and allows changes in
          its orientation, size, color scheme, and step indicator's content.
        </SectionDescription>
        <BasicText>
          By default, the stepper component is displayed horizontally. However,
          you can change its orientation to vertical by passing the orientation
          prop as 'vertical'. You can also set the height and the gap between
          steps. The following stepper is identical to the first, only this time
          it is displayed vertically.
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperThree() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperFour() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperFive() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ComponentSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

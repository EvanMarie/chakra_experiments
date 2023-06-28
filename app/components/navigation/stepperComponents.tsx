import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  StepperFunctionEight,
  StepperFunctionFive,
  StepperFunctionFour,
  StepperFunctionOne,
  StepperFunctionSeven,
  StepperFunctionSix,
  StepperFunctionThree,
  StepperFunctionTwo,
} from "./stepperFunctions";

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
          you can change its orientation to vertical by passing the{" "}
          <Mono>orientation</Mono> prop as 'vertical'. You can also set the
          height and the gap between steps. The following stepper is almost
          identical to the first, only this time it is displayed vertically.
        </BasicText>
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
      <SectionHeading>Adjusting the size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you need to modify the size of the step indicator, provide the{" "}
          <Mono>size</Mono> prop to the <Mono>Stepper</Mono> component. This can
          be set to 'sm', 'md', or 'lg' as per your requirements.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperFour() {
  return (
    <SectionContainer>
      <SectionHeading>Color Variation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The stepper component's <Mono>colorScheme</Mono> is set to{" "}
          <Mono>blue</Mono> by default. If you wish to alter this, you can use
          the <Mono>colorScheme</Mono> prop within the <Mono>Stepper</Mono>{" "}
          component, setting it to any available one. The following has{" "}
          <Mono>colorScheme</Mono> set to <Mono>pink</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperFive() {
  return (
    <SectionContainer>
      <SectionHeading>Adjusting Content</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In certain scenarios, you may desire to display unique icons or
          elements inside the StepIndicator component. To accomplish this, you
          can use the StepStatus component, which allows for the display of
          custom React elements, depending on the status of the step.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperSix() {
  return (
    <SectionContainer>
      <SectionHeading>Setting Active Step</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Here's an example where we have a stepper with three steps. We're
          using <Mono>useSteps</Mono> to manage the active step and then using
          the <Mono>setActiveStep</Mono> function to change the active step when
          a step is clicked. In this example, the 'Second' step will be the
          active step when the component is first rendered because we're setting
          the initial index to 1 (arrays in JavaScript are zero-indexed). The
          active step will change to whatever step is clicked by the user.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StepperSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Progress Bar</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you wish to include a progress bar, the{" "}
          <Mono>StepSeparator</Mono> component can be swapped out for a custom
          progress indicator. For instance, the <Mono>Progress</Mono> component
          can provide a more personalized experience.
        </SectionDescription>
        <BasicText>
          Below is an example where a <Mono>Progress</Mono> component is added.
          The progress is updated based on the active step, which is managed by{" "}
          <Mono>useSteps</Mono>. Note that the progress bar is absolutely
          positioned within the Box that wraps the <Mono>Stepper</Mono>, so it
          will display underneath the step indicators.
        </BasicText>
        <BasicText>
          In this example, the 'Second' step will be the active step when the
          component is first rendered because we're setting the initial index to
          1. The progress bar will represent the progress through the steps as
          the user interacts with the stepper.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */
export function StepperEight() {
  return (
    <SectionContainer>
      <SectionHeading>Step Summary</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When the step labels are hidden, you can opt to display a summary of
          the current step below the step group. This practice is particularly
          useful for smaller screens or responsive mobile views, as it provides
          users with a clear understanding of the current step's label.
        </SectionDescription>
        <BasicText>
          In this interactive example, you'll notice the step summary displayed
          beneath the step group, making it easier to identify the current step
          even when the labels are not directly visible.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <StepperFunctionEight />
      </MyFlex>
    </SectionContainer>
  );
}

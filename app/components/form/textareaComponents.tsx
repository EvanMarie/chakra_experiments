import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  TextareaFunctionFive,
  TextareaFunctionFour,
  TextareaFunctionOne,
  TextareaFunctionSeven,
  TextareaFunctionSix,
  TextareaFunctionThree,
  TextareaFunctionTwo,
} from "./textareaFunctions";

/* ********************************************************************** */

export function TextAreaOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Using the <Mono>Textarea</Mono> component is very simple. It merely
          requires the the element itself. But you can also supply a placeholder
          text that takes the place of whatever text a user will later input.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TextareaFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TextAreaTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Controlled Textarea</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The controlled <Mono>Textarea</Mono> allows you to manage its value
          through state, i.e. a controlled textarea refers to a textarea input
          whose value is controlled and managed by the component's parent or
          container component.
        </SectionDescription>
        <BasicText>
          In a controlled textarea, the value of the textarea is not directly
          modified by user input. Instead, it is updated and synchronized with
          the component's state, allowing you to have full control over its
          value and behavior.
        </BasicText>
        <BasicText>
          In the following example, the <Mono>value</Mono> state variable is
          used to store the current value of the textarea. The{" "}
          <Mono>setValue</Mono> function allows us to update the value of the
          textarea by modifying the state.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <TextareaFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TextAreaThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customzing Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Textarea</Mono> component allows you to control the resize
          behavior. The <Mono>resize</Mono> property controls whether an element
          is draggable / resizable and in which directions.
        </SectionDescription>
        <BasicText>
          The Chakra <Mono>Textarea</Mono> component comes with built-in support
          for draggable textarea resizing. This means that the resizing behavior
          is already enabled by default without the need for additional CSS
          styles or customization.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <TextareaFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TextAreaFour() {
  return (
    <SectionContainer>
      <SectionHeading>Disabling a Textarea</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Textarea</Mono> component can be easily disabled to
          prevent user interaction. Use the <Mono>isDisabled</Mono> prop to
          achieve this functionality.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TextareaFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TextAreaFive() {
  return (
    <SectionContainer>
      <SectionHeading>Invalid Textarea</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To indicate an error state in the <Mono>Textarea</Mono>, use the{" "}
          <Mono>isInvalid</Mono> prop.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TextareaFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

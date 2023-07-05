import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  RadioFunctionFive,
  RadioFunctionFour,
  RadioFunctionOne,
  RadioFunctionSeven,
  RadioFunctionSix,
  RadioFunctionThree,
  RadioFunctionTwo,
} from "./radioFunctions";

/* ********************************************************************** */

export function RadioOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example showcases a basic <Mono>RadioGroup</Mono> with three
          options: "Choice A," "Choice B," and "Choice C." Users can select only
          one option at a time. The Radio buttons are visually styled, and the
          selected option is highlighted.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RadioFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RadioTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Colors</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, you can see the various <Mono>colorScheme</Mono>{" "}
          options available for the <Mono>RadioGroup</Mono> component. Each
          styled <Mono>Radio</Mono> component below has had its{" "}
          <Mono>colorScheme</Mono> prop set to the corresponsing{" "}
          <Mono>colorScheme</Mono> label beside it.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RadioFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RadioThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ These are the three available sizes for <Mono>Radio</Mono>
          buttons: small ("sm"), medium ("md"), and large ("lg"). Each{" "}
          <Mono>Radio</Mono> button has a different size and color scheme.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RadioFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RadioFour() {
  return (
    <SectionContainer>
      <SectionHeading>Disabling</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example demonstrates how to disable <Mono>Radio</Mono> buttons.
          The third <Mono>Radio</Mono> button is disabled, indicating a
          pre-selected option. The other <Mono>Radio</Mono> buttons can be
          selected by the user. This example can be used when certain options
          are not applicable or unavailable in specific scenarios.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RadioFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RadioFive() {
  return (
    <SectionContainer>
      <SectionHeading>Aligning Horizontally</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we align the <Mono>Radio</Mono> buttons
          horizontally using the <Mono>Stack</Mono> component. The Radio buttons
          are spaced evenly, and their alignment facilitates easier comparison
          and selection. This example can be used when you want to present the
          options in a horizontal layout for better visual scanning.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RadioFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RadioSix() {
  return (
    <SectionContainer>
      <SectionHeading>Invalid Radio Option</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example showcases an invalid <Mono>Radio</Mono> button. The{" "}
          Radio button appears visually different, indicating an error state.
          This example can be used to communicate validation errors or invalid
          selections to the user.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RadioFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RadioSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Further Customization</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In some cases, you might need to create components that work like
          radios but don't look like radios. Chakra UI exports the{" "}
          <Mono>useRadio</Mono> and <Mono>useRadioGroup</Mono> hooks to assist
          in this scenario. With these hooks, you can create custom radio button
          components that suit your specific design needs. This example
          demonstrates how to create a custom <Mono>RadioButtons</Mono>{" "}
          component using the <Mono>useRadio</Mono> hook and control a group of
          custom radios using the <Mono>useRadioGroup</Mono> hook.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RadioFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

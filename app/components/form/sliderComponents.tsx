import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  SliderFunctionFive,
  SliderFunctionFour,
  SliderFunctionOne,
  SliderFunctionSeven,
  SliderFunctionSix,
  SliderFunctionThree,
  SliderFunctionTwo,
} from "./sliderFunctions";

/* ********************************************************************** */

export function SliderOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The is the most basic use of the Slider, consisting of a{" "}
          <Mono>Slider</Mono>, <Mono>SliderTrack</Mono>,{" "}
          <Mono>SliderFilledTrack</Mono>, and <Mono>SliderThumb</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SliderFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SliderTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing the Color Scheme</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following example presents each <Mono>colorScheme</Mono> option
          available in Chakra applied to a simple slider. To create any of
          these, simply use its respective prop definition as labeled above the
          slider.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SliderFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SliderThree() {
  return (
    <SectionContainer>
      <SectionHeading>Slider Orientation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Slider</Mono> component supports vertical orientation by
          using the orientation prop. You can also adjust the minimum height of
          the slider track using the <Mono>minH</Mono> prop.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SliderFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SliderFour() {
  return (
    <SectionContainer>
      <SectionHeading>Slider Customization</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Slider component is designed to be easily customized. You can
          modify the background color of the <Mono>SliderTrack</Mono> and
          <Mono>SliderFilledTrack</Mono>, and even replace the{" "}
          <Mono>SliderThumb</Mono> with custom content.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SliderFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SliderFive() {
  return (
    <SectionContainer>
      <SectionHeading>Discrete Sliders</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Discrete sliders allow users to snap to predefined sets of values.
          This can be achieved by setting the step prop to define the interval
          between values.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SliderFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SliderSix() {
  return (
    <SectionContainer>
      <SectionHeading>Custom Labels</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can add custom labels and marks to the <Mono>Slider</Mono>{" "}
          component using the SliderMark subcomponent. The example below
          demonstrates adding custom labels at specific values and displaying
          the current value dynamically.
        </SectionDescription>
        <BasicText>
          Inside the Slider component, there are four SliderMark components used
          as custom labels and marks. Additionally, there is a SliderMark
          component with dynamic content to display the current value of the
          slider. It uses the <Mono>sliderValue</Mono> state variable as the
          <Mono>value</Mono> prop, displaying the current value dynamically.
        </BasicText>
      </Box>

      <MyFlex bg="sectionColor" mt={5}>
        <SliderFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SliderSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Using Tooltip</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can enhance the <Mono>Slider</Mono> component by adding a{" "}
          <Mono>Tooltip</Mono> to the SliderThumb. This can provide additional
          information or visual feedback to the user. This essentially creates a
          similar effect to the example above, but with a tooltip instead of a
          label, therefore it only shows up on hover with the settings used
          below.
        </SectionDescription>
      </Box>

      <MyFlex bg="sectionColor">
        <SliderFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

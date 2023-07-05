import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  RangeSliderFunctionFive,
  RangeSliderFunctionFour,
  RangeSliderFunctionOne,
  RangeSliderFunctionSix,
  RangeSliderFunctionThree,
  RangeSliderFunctionTwo,
} from "./rangeSliderFunctions";
import { Link } from "@remix-run/react";

/* ********************************************************************** */

export function RangeSliderOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example shows the basic usage of the <Mono>RangeSlider</Mono>{" "}
          component. The initial values for the range are set to <Mono>23</Mono>{" "}
          and <Mono>53</Mono>. The <Mono>defaultValue</Mono> prop is used to set
          the initial values of the range. The <Mono>defaultValue</Mono> prop
          accepts an array of two numbers.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <RangeSliderFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RangeSliderTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Color Scheme</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can easily override the default color scheme of the RangeSlider
          component by specifying a different color from the theme. The
          following example demonstrates a RangeSlider with a pink color scheme.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RangeSliderFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RangeSliderThree() {
  return (
    <SectionContainer>
      <SectionHeading>Vertical Slider Orientation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, the RangeSlider is horizontally oriented. However, you
          can change the orientation to vertical by specifying the orientation
          prop. The following example demonstrates a vertical{" "}
          <Mono>RangeSlider</Mono>. The <Mono>orientation</Mono> prop is set to
          'vertical', and the <Mono>minH</Mono> prop defines the minimum height
          of the RangeSlider component.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RangeSliderFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RangeSliderFour() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Styles</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>RangeSlider</Mono> component can be easily customized by
          composing it with other Chakra UI components. The following example
          showcases a customized RangeSlider with custom styles.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RangeSliderFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RangeSliderFive() {
  return (
    <SectionContainer>
      <SectionHeading>Discrete Slider</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Discrete sliders allow users to snap to predefined sets of values.
          This behavior can be achieved by using the step prop. The following
          example demonstrates a discrete <Mono>RangeSlider</Mono> with steps of
          30. In this example, the RangeSlider allows users to select values in
          increments of 30. The <Mono>RangeSliderThumbs</Mono> can snap to these
          predefined values, providing a more granular selection experience.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RangeSliderFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RangeSliderSix() {
  return (
    <SectionContainer>
      <SectionHeading>Capturing Slider Values</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following function provides the functionality to capture and
          display the selected range by utilizing state management and event
          handling. Within the component, a minimum value (min) of 23 and a
          maximum value (max) of 53 are defined, establishing the range within
          which users can make selections.
        </SectionDescription>
        <BasicText>
          To capture the final selected range, an <Mono>onChangeEnd</Mono> event
          handler is attached to the <Mono>RangeSlider</Mono> component. When
          the user finishes dragging the thumbs, this event handler updates the
          selectedRange state variable with the new values.
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <RangeSliderFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function RangeSliderSeven() {
  return (
    <SectionContainer>
      <SectionHeading>useRangeSlider Hook</SectionHeading>

      <SectionDescription>
        ⦾ The <Mono>useRangeSlider</Mono> hook is a powerful tool provided by
        Chakra UI that exports state and focus management logic. It enables
        developers to create customized range slider components tailored to
        their specific application requirements. By utilizing this hook,
        developers have the flexibility to build range sliders with custom
        behavior and styling. You can learn more about the{" "}
        <Mono>useRangeSlider</Mono> hook{" "}
        <Link
          to="https://chakra-ui.com/docs/hooks/use-range-slider"
          target="_blank"
        >
          here
        </Link>
        .
      </SectionDescription>
    </SectionContainer>
  );
}

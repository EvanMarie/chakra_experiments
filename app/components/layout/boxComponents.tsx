import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  BoxFunctionOne,
  BoxFunctionTwo,
  BoxFunctionThree,
  BoxFunctionFour,
  BoxFunctionFive,
  BoxFunctionSix,
  BoxFunctionSeven,
} from "./boxFunctions";

/* ********************************************************************** */

export function BoxOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following is one of the most simple and straight-forward uses of
          the <Mono>Box</Mono> component. It utilizes a specified width and
          padding, as well as colors for the background and text.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <BoxFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BoxTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Responsive Layout</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following example demonstrates this component's responsiveness
          by using an array of values for the <Mono>w</Mono> prop. This ensures
          that the <Mono>Box</Mono> component will have a width of 100% on small
          screens, 50% on medium screens, and 25% on large screens. By
          leveraging responsive props, you can create layouts that adapt to
          different screen sizes seamlessly.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <BoxFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BoxThree() {
  return (
    <SectionContainer>
      <SectionHeading>Shorthand Styling</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we see the <Mono>Box</Mono> component used with its
          shorthand styling props. By setting <Mono>bg</Mono> to "cyan" and{" "}
          <Mono>color</Mono> to "black," the <Mono>Box</Mono> component's{" "}
          background color and text color are customized. The <Mono>p</Mono>{" "}
          prop adds padding, while the <Mono>m</Mono> prop sets margin around
          the Box component. Additionally, the <Mono>borderRadius</Mono> prop
          gives the <Mono>Box</Mono> component rounded corners with a value of{" "}
          <Mono>md</Mono> (medium).
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <BoxFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BoxFour() {
  return (
    <SectionContainer>
      <SectionHeading>Box as a Button</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, the <Mono>Box</Mono> component is composed to
          create a custom button component. The component overrides the
          rendering of the <Mono>Box</Mono> component, rendering it as a button.
          It inherits the base styles from the <Mono>Box</Mono> component, such
          as the background color, text color, padding, and border radius, and
          adds hover styles using the <Mono>_hover</Mono> prop.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <BoxFunctionFour>Click Me</BoxFunctionFour>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BoxFive() {
  return (
    <SectionContainer>
      <SectionHeading>Complex Components</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example shows how a the simple <Mono>Box</Mono> component can
          be used in conjunction with other Chakra components to create very
          complex and intricate components for your UI.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <BoxFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

import {
  StackFunctionOne,
  StackFunctionTwo,
  StackFunctionThree,
  StackFunctionFour,
  StackFunctionFive,
  StackFunctionSix,
  StackFunctionSeven,
} from "./stackFunctions";

/* ********************************************************************** */

export function StackOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Stack Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we have a <Mono>Stack</Mono> component with a
          spacing of 24 pixels. Inside the <Mono>Stack</Mono>, there are three{" "}
          <Mono>Square</Mono> components. Each <Mono>Square</Mono> has a{" "}
          <Mono>size</Mono> of 100 pixels. The <Mono>Stack</Mono> component
          ensures that there is consistent spacing between the Box components,
          creating a visually appealing stacked layout.
        </SectionDescription>
        <BasicText>
          To stack items horizontally, you can use the direction prop and set it
          to 'row'. Additionally, you have the flexibility to adjust the
          alignment and distribution of the items using the <Mono>align</Mono>{" "}
          and <Mono>justify</Mono> props.{" "}
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <StackFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StackTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Basic HStack Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In the following example, the <Mono>HStack</Mono> allows us to
          horizontally stack elements with a specified spacing of 24 pixels.
          Within the <Mono>HStack</Mono> component, there are again three{" "}
          <Mono>Square</Mono> components. However, this time, by using the{" "}
          <Mono>HStack</Mono> component, we achieve a horizontal layout where
          the elements are evenly spaced with the specified spacing between
          them.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StackFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StackThree() {
  return (
    <SectionContainer>
      <SectionHeading>Basic VStack Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In the following example, we have our three <Mono>Square</Mono>{" "}
          components once again. Notice the difference however, between this
          example and the <Mono>Stack</Mono> example above.<Mono>VStack</Mono>{" "}
          and <Mono>Stack</Mono> are very similiar, however the key difference
          between them is their default alignment behavior. <Mono>VStack</Mono>{" "}
          centers its children vertically by default, while <Mono>Stack</Mono>{" "}
          does not apply any default alignment.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StackFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StackFour() {
  return (
    <SectionContainer>
      <SectionHeading>Responsive Direction</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ One of the powerful features of the Stack component is its ability
          to change the stack direction and spacing responsively. By passing an
          array of values to the <Mono>direction</Mono> prop, you can specify
          different directions for different screen sizes. This allows for
          flexible and adaptive layouts. This example will remain in a row
          direction until the screen size becomes small, at which point it will
          switch to a column direction.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StackFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StackFive() {
  return (
    <SectionContainer>
      <SectionHeading>Using Stack Dividers</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Stack</Mono> component allows you to easily add dividers
          by using the divider prop. You can provide the{" "}
          <Mono>StackDivider</Mono> component from Chakra UI as the value, or
          use any custom React element as the divider. This is an incredibly
          simple way to enhance the design of stacked content while at the same
          time providing an attactive design improvement when desired.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <StackFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StackSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <StackFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function StackSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <StackFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

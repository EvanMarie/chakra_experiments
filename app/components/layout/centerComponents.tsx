import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  CenterFunctionOne,
  CenterFunctionTwo,
  CenterFunctionThree,
  CenterFunctionFour,
  CenterFunctionFive,
  CenterFunctionSix,
  CenterFunctionSeven,
} from "./centerFunctions";

/* ********************************************************************** */

export function CenterOne() {
  return (
    <SectionContainer>
      <SectionHeading>Center</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Center component is the core of the centering capabilities in
          Chakra UI. It centers its child element both horizontally and
          vertically within itself. You can specify the width and height of the
          Center component to accommodate your design needs.
        </SectionDescription>
        <BasicText>
          In this example, the <Mono>Center</Mono> component is used to center
          some simple text on both axes.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <CenterFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CenterTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Square and Circle</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To simplify the process of achieving a perfect centering of child
          elements, such as icons, Chakra UI provides the <Mono>Square</Mono>{" "}
          and <Mono>Circle</Mono> components. The <Mono>Square</Mono> component
          centers its child element based on a specified size. The Circle
          component is simply a rounded <Mono>Square</Mono>.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <CenterFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CenterThree() {
  return (
    <SectionContainer>
      <SectionHeading>AbsoluteCenter</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>AbsoluteCenter</Mono> component is used to center an
          element horizontally and vertically relative to its parent's
          dimensions. It employs the "<Mono>position: absolute</Mono>" strategy.
          You can control the axis of centering using the axis prop, which can
          be set to "<Mono>both</Mono>" (default), "<Mono>horizontal</Mono>," or
          "<Mono>vertical</Mono>."
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <CenterFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

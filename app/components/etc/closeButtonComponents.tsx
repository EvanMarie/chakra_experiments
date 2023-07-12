import { Box, ModalCloseButton } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  CloseButtonFunctionFive,
  CloseButtonFunctionFour,
  CloseButtonFunctionOne,
  CloseButtonFunctionSix,
  CloseButtonFunctionThree,
  CloseButtonFunctionTwo,
} from "./closeButtonFunctions";

/* ********************************************************************** */

export function CloseButtonOne() {
  return (
    <SectionContainer>
      <SectionHeading>CloseButton Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>CloseButton</Mono> component is conveniently available in
          three sizes: <Mono>sm</Mono>, <Mono>md</Mono>, <Mono>lg</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <CloseButtonFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CloseButtonTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This basic example demonstrates how to use the{" "}
          <Mono>CloseButton</Mono> component in Chakra UI to create a
          dismissible alert. Alerts are commonly used to provide important
          information or notifications to users, and having the ability to close
          or dismiss them enhances the user experience. By incorporating the
          CloseButton component into an alert, users can easily remove or hide
          the alert when they no longer need it.
        </SectionDescription>
        <BasicText>
          Inside of an alert, the <Mono>CloseButton</Mono> must have its
          positioning specified within the <Mono>Alert</Mono> component.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <CloseButtonFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CloseButtonThree() {
  return (
    <SectionContainer>
      <SectionHeading>CloseButton Within a Modal</SectionHeading>
      <SectionDescription>
        ⦾ To include a <Mono>CloseButton</Mono> within a <Mono>Modal</Mono>,
        simply use the <Mono>ModalCloseButton</Mono> component.
      </SectionDescription>
      <MyFlex bg="background">
        <CloseButtonFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CloseButtonFour() {
  return (
    <SectionContainer>
      <SectionHeading>CloseButton Within a Toast</SectionHeading>
      <SectionDescription>
        ⦾ To include a <Mono>CloseButton</Mono> within a <Mono>Toast</Mono>, all
        you have to do is use the <Mono>isCloseable</Mono> prop set to{" "}
        <Mono>true</Mono>. The positioning of the <Mono>CloseButton</Mono> is
        automatically handled by the <Mono>Toast</Mono> component.
      </SectionDescription>
      <MyFlex bg="background">
        <CloseButtonFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CloseButtonFive() {
  return (
    <SectionContainer>
      <SectionHeading>CloseButton Within a Popover</SectionHeading>
      <SectionDescription>
        Within a <Mono>Popover</Mono>, the <Mono>CloseButton</Mono> is
        automatically positioned by using the <Mono>PopoverCloseButton</Mono>{" "}
        component.
      </SectionDescription>

      <MyFlex bg="background">
        <CloseButtonFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CloseButtonSix() {
  return (
    <SectionContainer>
      <SectionHeading>CloseButton Within a Drawer</SectionHeading>
      <SectionDescription>
        To insert a <Mono>CloseButton</Mono> inside of a <Mono>Drawer</Mono>,
        use the <Mono>DrawerCloseButton</Mono> component. The button is
        automatically positioned by the <Mono>Drawer</Mono> component.
      </SectionDescription>
      <MyFlex bg="background">
        <CloseButtonFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

import { Box } from "@chakra-ui/react";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  SwitchFunctionFive,
  SwitchFunctionFour,
  SwitchFunctionOne,
  SwitchFunctionSeven,
  SwitchFunctionSix,
  SwitchFunctionThree,
  SwitchFunctionTwo,
} from "./switchFunctions";

/* ********************************************************************** */

export function SwitchOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In the following example, we have a three <Mono>Switch</Mono>{" "}
          components wrapped inside a <Mono>FormControl</Mono> component, along
          with a label for each switch.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SwitchFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SwitchTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Switch component provides different sizes through the size prop.
          You can use <Mono>size='sm'</Mono> for small, <Mono>size='md'</Mono>{" "}
          for medium, and <Mono>size='lg'</Mono> for large. Here's an example
          that demonstrates the different sizes.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SwitchFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SwitchThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Color</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Switch</Mono> component allows you to customize the
          checked background color by using the <Mono>colorScheme</Mono> prop.
          You can pass different color schemes, any of the following, to change
          the background color.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SwitchFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SwitchFour() {
  return (
    <SectionContainer>
      <SectionHeading>State Behavior</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Switch</Mono> component has various states that affect its
          usability and styles. These states include <Mono>isDisabled</Mono>,
          <Mono>isChecked</Mono>, <Mono>isFocusable</Mono>,{" "}
          <Mono>isInvalid</Mono>, isReadOnly, and <Mono>isRequired</Mono>.
          However, the <Mono>isInvalid</Mono> and <Mono>isRequired</Mono> props
          don't impact the styles. Here's an example demonstrating these states
        </SectionDescription>
        <BulletBox>
          <ul>
            <li>
              <HL>isChecked</HL>: This state represents whether the{" "}
              <Mono>Switch</Mono> is checked or not. By setting the{" "}
              <Mono>isChecked</Mono> prop to true, the <Mono>Switch</Mono> will
              be initially checked.
            </li>
            <li>
              <HL>isDisabled</HL>: When the <Mono>isDisabled</Mono> prop is set
              to true, the <Mono>Switch</Mono> becomes disabled and cannot be
              interacted with. It is commonly used to indicate that a particular
              option or feature is not available or applicable in the current
              context.
            </li>
            <li>
              <HL>isFocusable</HL>: The <Mono>isFocusable</Mono> prop determines
              whether the <Mono>Switch</Mono> can receive focus or not. When
              both <Mono>isFocusable</Mono> and <Mono>isDisabled</Mono> are
              true, the <Mono>Switch</Mono> is visually disabled but can still
              receive focus. This can be useful for keyboard accessibility in
              certain scenarios.
            </li>
            <li>
              <HL>isInvalid</HL>: The <Mono>isInvalid</Mono> prop is used to
              indicate that the <Mono>Switch</Mono> has an invalid or erroneous
              value. It typically triggers error styling, such as displaying a
              red border or showing an error message nearby. This state is
              useful for form validation.
            </li>
            <li>
              <HL>isReadOnly</HL>: Setting the <Mono>isReadOnly</Mono> prop to
              true makes the <Mono>Switch</Mono> read-only, meaning the user
              cannot toggle its state. This is often used when displaying data
              or settings that cannot be modified.
            </li>
            <li>
              <HL>isRequired</HL>: The <Mono>isRequired</Mono> prop is used to
              mark the <Mono>Switch</Mono> as a required input field. It
              indicates that the user must interact with the <Mono>Switch</Mono>{" "}
              to fulfill a form submission or satisfy certain criteria.
            </li>
          </ul>
        </BulletBox>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <SwitchFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

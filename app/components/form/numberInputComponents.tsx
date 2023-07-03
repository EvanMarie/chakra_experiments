import {
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

/* ********************************************************************** */

export function NumberInputOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To use the <Mono>NumberInput</Mono> component, you can wrap it
          around its subcomponents to create a complete input field with
          increment and decrement buttons.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput maxWidth="100px">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Setting Limits</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you want to restrict the value entered within a specific range,
          you can utilize the <Mono>min</Mono> and <Mono>max</Mono> props. By
          setting the <Mono>min</Mono> prop, you define the lower limit, and by
          setting the <Mono>max</Mono> prop, you define the upper limit. The{" "}
          <Mono>NumberInput</Mono> component will then ensure that the value
          stays within the specified range.
        </SectionDescription>
      </Box>
      <BasicText>
        The following example has a <Mono>min</Mono> set to 23 and a{" "}
        <Mono>max</Mono> set to 53, so if you enter a value that is not between
        the limits, it will automatically be adjusted to the closest limit.
      </BasicText>

      <MyFlex bg="background">
        <>
          <NumberInput defaultValue={44} min={23} max={53} maxWidth="100px">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Increment and Decrement</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you want to customize the increment or decrement step when
          changing the value, you can use the step prop. By passing a value to
          the step prop, you can define the size of each step. By default, the
          value is rounded to match the number of decimals in the step.
        </SectionDescription>
        <BasicText>
          In the following example, the step size is set to 10, with a low end
          limit of 10 and a high end limit of 500.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput step={10} defaultValue={80} min={10} max={500}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputFour() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputFive() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

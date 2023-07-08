import { Box } from "@chakra-ui/react";
import { BasicText } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

import {
  ComponentFunctionOne, 
  ComponentFunctionTwo,
  ComponentFunctionThree,
  ComponentFunctionFour,
  ComponentFunctionFive,
  ComponentFunctionSix,
  ComponentFunctionSeven,
} from ./ComponentFunctions;

/* ********************************************************************** */

export function ComponentOne() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ComponentFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ComponentTwo() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ComponentFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ComponentThree() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ComponentFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ComponentFour() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ComponentFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ComponentFive() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ComponentFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ComponentSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ComponentFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ComponentSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ComponentFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

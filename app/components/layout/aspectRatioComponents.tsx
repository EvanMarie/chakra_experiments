import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  AspectRatioFunctionFive,
  AspectRatioFunctionFour,
  AspectRatioFunctionOne,
  AspectRatioFunctionSeven,
  AspectRatioFunctionSix,
  AspectRatioFunctionThree,
  AspectRatioFunctionTwo,
} from "./aspectRatioFunctions";

/* ********************************************************************** */

export function AspectRatioOne() {
  return (
    <SectionContainer>
      <SectionHeading>Embedding Videos</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To embed a video with a specific aspect ratio, you can utilize the
          <Mono>AspectRatio</Mono> component in conjunction with an iframe. The
          iframe's src attribute should point to the video link. By setting the{" "}
          <Mono>maxW</Mono> prop on the <Mono>AspectRatio</Mono> component, you
          can control the width of the video content.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <AspectRatioFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AspectRatioTwo() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <AspectRatioFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AspectRatioThree() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <AspectRatioFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AspectRatioFour() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <AspectRatioFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AspectRatioFive() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <AspectRatioFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AspectRatioSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <AspectRatioFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AspectRatioSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <AspectRatioFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

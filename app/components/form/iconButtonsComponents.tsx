import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { BasicText } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

/* ********************************************************************** */

export function IconButtonOne() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <IconButton aria-label="start search" icon={<SearchIcon />} />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconButtonTwo() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <IconButton
            colorScheme="cyan"
            aria-label="Start search"
            icon={<SearchIcon />}
          />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconButtonThree() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <IconButton
            colorScheme="purple"
            aria-label="Dial John"
            size="lg"
            icon={<PhoneIcon />}
          />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconButtonFour() {
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

export function IconButtonFive() {
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

export function IconButtonSix() {
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

export function IconButtonSeven() {
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

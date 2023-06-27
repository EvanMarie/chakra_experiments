import { Box, Code } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  LinkOverlayFunctionOne,
  LinkOverlayFunctionTwo,
} from "./linkOverlayFunctions";

/* ********************************************************************** */

export function LinkOverlayOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ consider a blog post card with a title, published date, and a brief
          summary. Here's how to use LinkBox and LinkOverlay. In this example,
          the entire blog post card is semantically linked, with the title being
          the primary clickable link.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <LinkOverlayFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function LinkOverlayTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Nested Links</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ LinkBox elevates any nested links to ensure proper keyboard
          navigation. Consider the following modification to the previous
          example, with an additional nested link. According to the HTML
          specification, a hyperlink (<Code>{`<a>`}</Code> tag) should not
          contain any other interactive elements, such as buttons, other links,
          or inputs.
        </SectionDescription>
        <BasicText>
          In the code for the example below, you can see a nested interactive
          element (a link represented by <Mono>Box as='a'</Mono>) inside a{" "}
          <Mono>LinkBox</Mono>, which itself contains a LinkOverlay serving as
          the main link. Chakra UI uses CSS stacking context (with z-index) to
          manage this complex interaction scenario properly. In essence, it
          "lifts" the nested link to the top, so it's independently clickable
          from the LinkOverlay.
        </BasicText>
        <BasicText>
          This allows the user to interact with each link separately – when you
          hover over or focus on the main linked area (covered by{" "}
          <Mono>LinkOverlay</Mono>), you get the URL specified in{" "}
          <Mono>LinkOverlay</Mono>. But when you hover over or focus on the
          inner link, you interact with the URL specified in the inner link.
        </BasicText>
        <BasicText>
          This ability to independently interact with each link despite the
          nesting is the interesting part of this example. It maintains proper
          HTML semantics while enhancing user experience, especially for
          keyboard users who rely on focus states for navigation.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <LinkOverlayFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function LinkOverlayThree() {
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

export function LinkOverlayFour() {
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

export function LinkOverlayFive() {
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

export function LinkOverlaySix() {
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

export function LinkOverlaySeven() {
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

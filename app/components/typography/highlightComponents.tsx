import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  HighlightFunctionOne,
  HighlightFunctionTwo,
  HighlightFunctionThree,
  HighlightFunctionFour,
  HighlightFunctionFive,
  HighlightFunctionSix,
  HighlightFunctionSeven,
} from "./highlightFunctions";

/* ********************************************************************** */

export function HighlightOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, the word "important" is highlighted with a green
          background, demonstrating how you can emphasize specific terms or
          phrases in your content. This is as simple as passing the word to be
          highlighted as a string to the <Mono>query</Mono> prop and specifying
          the styles to be applied.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HighlightFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HighlightTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Heading Highlights</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example demonstrates using the <Mono>Highlight</Mono> component
          within a Heading component. The word "Key" is highlighted with a
          purple background, illustrating how you can draw attention to key
          concepts or keywords within headings or titles.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HighlightFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HighlightThree() {
  return (
    <SectionContainer>
      <SectionHeading>Multi-Word Highlighting</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, the Highlight component is used to highlight
          multiple words: "efficiency," "accuracy," and "consistency." The
          highlighted words are styled with a cyan background, showcasing the
          ability to emphasize multiple terms simultaneously.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HighlightFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HighlightFour() {
  return (
    <SectionContainer>
      <SectionHeading>Substring Highlighting</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example shows how to highligh substrings within a block of
          text. The search query "product" is highlighted in two separate
          sentences. It demonstrates how you can accent specific substrings in
          search results or dynamic content.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HighlightFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HighlightFive() {
  return (
    <SectionContainer>
      <SectionHeading>Customization</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example utilizes the <Mono>useHighlight</Mono> hook to
          customize the rendering and styling of highlighted words. The words
          "collaboration" and "communication" within the text are styled
          differently, with a purple background to emphasize their significance.
          This example highlights the flexibility of the <Mono>Highlight</Mono>{" "}
          component in customizing rendered elements based on matches.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HighlightFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

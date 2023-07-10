import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  SimpleGridFunctionOne,
  SimpleGridFunctionTwo,
  SimpleGridFunctionThree,
  SimpleGridFunctionFour,
  SimpleGridFunctionFive,
  SimpleGridFunctionSix,
  SimpleGridFunctionSeven,
} from "./simpleGridFunctions";

/* ********************************************************************** */

export function SimpleGridOne() {
  return (
    <SectionContainer>
      <SectionHeading>Fixed Number of Columns</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we create a <Mono>SimpleGrid</Mono> with three
          columns and a spacing of 10 pixels. Each grid item is represented by a
          Box component a height of 80 pixels.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SimpleGridFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SimpleGridTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Responsive Columns</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we create a <Mono>SimpleGrid</Mono> with varying
          column numbers based on different screen sizes. The grid adapts to
          display two columns by default, three columns on medium-sized screens,
          and two columns again on small screens.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SimpleGridFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SimpleGridThree() {
  return (
    <SectionContainer>
      <SectionHeading>Auto-Responsive Grid</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Here, we utilize the auto-responsive behavior of{" "}
          <Mono>SimpleGrid</Mono> by specifying a minimum child width of 120
          pixels. The grid adjusts itself automatically based on the available
          space, ensuring that each child element meets the minimum width
          requirement.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SimpleGridFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SimpleGridFour() {
  return (
    <SectionContainer>
      <SectionHeading>Customized Spacing</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we modify the spacing between grid items by setting
          the <Mono>spacingX</Mono> and <Mono>spacingY</Mono> props. The grid
          consists of two columns, with 40 pixels of horizontal spacing and 20
          pixels of vertical spacing.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SimpleGridFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

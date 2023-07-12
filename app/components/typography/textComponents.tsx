import { Box, Code, Text } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  TextFunctionOne,
  TextFunctionTwo,
  TextFunctionThree,
} from "./textFunctions";

/* ********************************************************************** */

export function TextOne() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Font Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ One of the fundamental features of the <Mono>Text</Mono> component
          is the ability to adjust the font size. You can accomplish this by
          passing the <Mono>fontSize</Mono> prop. This example showcases the 10
          different predefined font sizes in Chakra.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TextFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TextTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Truncating Text</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you need to truncate text after a specific number of lines, you
          can use the <Mono>noOfLines</Mono> prop. This feature is useful when
          dealing with long paragraphs that may exceed the available space. This
          feature is also full responsive, so the <Mono>noOfLines</Mono> prop
          can take an array of values to truncate text at different screen
          sizes. In this example, you can experiment with how the text will
          render when the <Mono>numOfLines</Mono> property is set to different
          values.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TextFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TextThree() {
  return (
    <SectionContainer>
      <SectionHeading>Overriding the Text Style</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, the Text component renders as a <Code>{`<span>`}</Code>{" "}
          element. However, you can override this behavior by using the{" "}
          <Mono>as</Mono> prop. This allows you to render the text as a
          different HTML element.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TextFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

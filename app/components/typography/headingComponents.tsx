import { Box, Code } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  HeadingFunctionOne,
  HeadingFunctionTwo,
  HeadingFunctionThree,
  HeadingFunctionFour,
  HeadingFunctionFive,
  HeadingFunctionSix,
  HeadingFunctionSeven,
} from "./headingFunctions";

/* ********************************************************************** */

export function HeadingOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Heading</Mono> component is composed of the Box component,
          allowing you to utilize all the style props and responsive styles as
          well. By default, it renders an <Code>{`<h2>`}</Code> tag.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HeadingFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HeadingTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can easily adjust the visual size of the heading using the size
          prop. This prop ensures that the heading size automatically adjusts
          for smaller screens. The available sizes are <Mono>4xl</Mono>,{" "}
          <Mono>3xl</Mono>, <Mono>2xl</Mono>, <Mono>xl</Mono>, <Mono>lg</Mono>,{" "}
          <Mono>md</Mono>, <Mono>sm</Mono>, and <Mono>xs</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HeadingFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HeadingThree() {
  return (
    <SectionContainer>
      <SectionHeading>Heading Truncation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you want to truncate the heading after a specific number of
          lines, you can use the <Mono>noOfLines</Mono> prop. This will render
          an ellipsis when the heading exceeds the width of the viewport or{" "}
          <Mono>maxWidth</Mono> prop.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HeadingFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HeadingFour() {
  return (
    <SectionContainer>
      <SectionHeading>Overriding Default Styles</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can easily override the size of the Heading component by using
          the fontSize prop. This eliminates the need to write custom CSS or use
          the <Mono>styled()</Mono> function.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HeadingFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function HeadingFive() {
  return (
    <SectionContainer>
      <SectionHeading>Complex Layouts</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Heading component can be composed with other Chakra UI
          components to create more complex layouts.{" "}
        </SectionDescription>
        <BasicText>
          In this example, we have a Box component that serves as a container
          for our composition. Within the Box, we have a Heading component{" "}
          <Code>{`(<Heading as="h1">)`}</Code> with a size of <Mono>xl</Mono>,
          representing a larger heading. It introduces the main topic.
        </BasicText>
        <BasicText>
          The text sections below the heading offer additional information,
          followed by a button to lead users to more information. This is a
          simple and attractive layout achieved with just a few lines of code.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <HeadingFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

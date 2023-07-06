import { DownloadIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Stack, VStack } from "@chakra-ui/react";
import { MiniCode } from "~/styles/CodeDesignComponents";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  IconButtonFunctionFive,
  IconButtonFunctionFour,
  IconButtonFunctionOne,
  IconButtonFunctionThree,
  IconButtonFunctionTwo,
} from "./iconButtonFunctions";

/* ********************************************************************** */

export function IconButtonOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ An <Mono>IconButton</Mono> is essentially a derivative of the
          standard <Mono>Button</Mono> component; however, it solely displays an
          icon, rather than text or a mix of text and icon. Consequently, for
          screen reader accessibility, an <Mono>aria-label</Mono> prop must be
          supplied to ensure the button can be interpreted meaningfully. The
          icon can be inserted via the icon prop.{" "}
        </SectionDescription>
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
      <SectionHeading>Customizing Color</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>colorScheme</Mono> prop allows you to alter the{" "}
          <Mono>IconButton</Mono> 's color, drawing from the <Mono>Button</Mono>{" "}
          component's extensive range of color options. Below, an example
          demonstrates a variety of color options with a number of Chakra icons
          that can be used as an <Mono>IconButton</Mono>.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <IconButtonFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconButtonThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The size prop is another property borrowed from the Button
          component, granting you control over the IconButton's dimensions. It
          accepts various presets such as '<Mono>sm</Mono>', '<Mono>md</Mono>',
          '<Mono>lg</Mono>'.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <IconButtonFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconButtonFour() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing the Variant</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Passing the <Mono>variant</Mono> prop allows you to adjust the
          <Mono>IconButton</Mono>'s style, adopting the same range of options as
          the Button component.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <IconButtonFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconButtonFive() {
  return (
    <SectionContainer>
      <SectionHeading>isRound prop</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>isRound</Mono> prop when passed into the{" "}
          <Mono>IconButton</Mono> component, will render the button in a fully
          round shape, creating a unique visual style. This can be especially
          useful when you want to emphasize certain actions within your
          application. Below, you can see all size options set with the{" "}
          <Mono>isRound</Mono> prop.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <IconButtonFunctionFour />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconButtonSix() {
  return (
    <SectionContainer>
      <SectionHeading>isLoading</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>isLoading</Mono> prop comes in handy when you want to
          indicate a loading state for the button. When it's set to true, the{" "}
          <Mono>IconButton</Mono> will display a spinner in lieu of the icon,
          signaling to the user that an operation is currently being processed.
        </SectionDescription>
        <BasicText>
          The following example simulates a download operation, with the{" "}
          <Mono>isLoading</Mono> prop being set to true for 2 seconds after a
          user clicks.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <IconButtonFunctionFive />
        </>
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
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

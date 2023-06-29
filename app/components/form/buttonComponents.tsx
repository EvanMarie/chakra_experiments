import { DeleteIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Stack,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { ButtonFunctionOne, ButtonFunctionTwo } from "./buttonFunctions";

/* ********************************************************************** */

export function ButtonOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Below we have two buttons with the default settings. This is the
          most basic use of the <Mono>Button</Mono> component.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Button m={2}>Click Here</Button>
        <Button>Tap Here</Button>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ButtonTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Pre-defined Button Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Buttons can be displayed in different sizes using the 'size' prop.
          This property accepts four possible values: 'xs', 'sm', 'md', and
          'lg'. Below is an example demonstrating how to create buttons of
          various sizes. Each button's size is set using the 'size' prop, and
          all of them share the 'cyan' colorScheme.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <VStack spacing={2} alignItems="center" justifyContent="center">
          <Button colorScheme="cyan" size="xs">
            XS Button
          </Button>
          <Button colorScheme="cyan" size="sm">
            SM Button
          </Button>
          <Button colorScheme="cyan" size="md">
            MD Button
          </Button>
          <Button colorScheme="cyan" size="lg">
            LG Button
          </Button>
        </VStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ButtonThree() {
  return (
    <SectionContainer>
      <SectionHeading>Button Variants</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Buttons can also be displayed in different styles using the{" "}
          <Mono>variant</Mono> prop. This prop accepts four values: 'solid',
          'ghost', 'outline', and 'link'. Here's an example of buttons in
          different variants, again using the color scheme cyan.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Stack direction="row" spacing={2} align="center">
          <Button colorScheme="cyan" variant="solid">
            Solid
          </Button>
          <Button colorScheme="cyan" variant="outline">
            Outline
          </Button>
          <Button colorScheme="cyan" variant="ghost">
            Ghost
          </Button>
          <Button colorScheme="cyan" variant="link">
            Link
          </Button>
        </Stack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ButtonFour() {
  return (
    <SectionContainer>
      <SectionHeading>Variant, Color, and Style Combinations</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ It is only fair that I supply you with a way to try out any of the
          combinations of the above mentioned properties as you like. So below I
          am giving you just that. Select a value for each, and you can see what
          the combination would look like on a light and dark background.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <ButtonFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ButtonFive() {
  return (
    <SectionContainer>
      <SectionHeading>Buttons with Icons</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Button</Mono> component can have icons to its left and
          right, which are specified using the <Mono>leftIcon</Mono> and{" "}
          <Mono>rightIcon</Mono> props, respectively. Below are two examples of
          buttons with icons.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HStack gap={4}>
          <Button leftIcon={<EmailIcon />} colorScheme="cyan" variant="outline">
            Email
          </Button>
          <Button rightIcon={<DeleteIcon />} colorScheme="red" variant="solid">
            Delete
          </Button>
        </HStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ButtonSix() {
  return (
    <SectionContainer>
      <SectionHeading>Adding a Spinner</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we've created a button that toggles an{" "}
          <Mono>isLoading</Mono> state when clicked. The <Mono>isLoading</Mono>{" "}
          state is used in the <Mono>isLoading</Mono> prop of the{" "}
          <Mono>Button</Mono> component which, when true, shows a spinner and
          loading text (provided by the loadingText prop). We use{" "}
          <Mono>setTimeout</Mono> to simulate a delay (2000 milliseconds or 2
          seconds in this case) before resetting the isLoading state.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <ButtonFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

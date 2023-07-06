import { Box, Code } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  SelectFunctionFive,
  SelectFunctionFour,
  SelectFunctionOne,
  SelectFunctionSeven,
  SelectFunctionSix,
  SelectFunctionThree,
  SelectFunctionTwo,
} from "./selectFunctions";

/* ********************************************************************** */

export function SelectOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The basic usage of the Chakra UI <Mono>Select</Mono> component
          involves creating a select input with a list of predefined options for
          users to choose from. In the following example, we render render the{" "}
          <Mono>Select</Mono> component with a placeholder text.
        </SectionDescription>
        <BasicText>
          Inside the <Mono>Select</Mono> component, we provide a list of options
          using the <Code>{`<option>`}</Code> tag. Each option has a value
          attribute that represents the value associated with that option. The
          user can select one of these options, and the selected value will be
          displayed in the <Mono>Select</Mono> component. You can customize the
          appearance, size, and other aspects of the <Mono>Select</Mono>{" "}
          component using the various props.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <SelectFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SelectTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Select</Mono> component offers four different sizes: extra
          small (xs), small (sm), medium (md), and large (lg). By setting the{" "}
          <Mono>size</Mono> prop, you can control the size of the Select
          component.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SelectFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SelectThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Variants</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Similar to other Chakra UI components, the Select component supports
          different visual variants. You can choose from <Mono>outline</Mono>,{" "}
          <Mono>unstyled</Mono>, <Mono>flushed</Mono>, and <Mono>filled</Mono>{" "}
          variants. The <Mono>variant</Mono> prop controls the appearance of the
          <Mono>Select</Mono> component.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SelectFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SelectFour() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Arrow Icon</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI allows you to replace the default arrow icon used in the
          <Mono>Select</Mono> component with a custom icon. By passing the{" "}
          <Mono>icon</Mono> prop, you can specify the desired icon.
          Additionally, the <Mono>iconSize</Mono> prop allows you to adjust the
          size of the custom icon.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SelectFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function SelectFive() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Default Styles</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Select</Mono> component comes with predefined styles, but
          you have the flexibility to override these styles. You can modify
          various properties like <Mono>bg</Mono> (background color),{" "}
          <Mono>borderColor</Mono>, and <Mono>color</Mono> to suit your design
          requirements.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <SelectFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

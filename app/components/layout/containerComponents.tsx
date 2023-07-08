import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  ContainerFunctionOne,
  ContainerFunctionTwo,
  ContainerFunctionThree,
} from "./containerFunctions";

/* ********************************************************************** */

export function ContainerOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example demonstrates how to use the Container component to wrap
          your content and apply the width constraints.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <ContainerFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ContainerTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Container Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Container</Mono> component provides flexibility in setting
          the maximum width of the content. By default, it sets the{" "}
          <Mono>maxWidth</Mono> to 60 characters (60ch), but you can customize
          this by passing custom maxWidth values or using size tokens defined in
          the theme's sizes.container.
        </SectionDescription>
        <BasicText>
          In this example, we demonstrate different maxWidth values for the{" "}
          <Mono>Container</Mono> component. The first <Mono>Container</Mono> has
          a <Mono>maxW</Mono> of "<Mono>md</Mono>," the second has a{" "}
          <Mono>maxW</Mono> of "<Mono>550px</Mono>," and the third uses the{" "}
          <Mono>container.sm</Mono> size token. Feel free to adjust these values
          based on your specific design requirements.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ContainerFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ContainerThree() {
  return (
    <SectionContainer>
      <SectionHeading>Container Content Centering</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When the width of the content within the Container may is smaller
          than the container itself, you can utilize the{" "}
          <Mono>centerContent</Mono> prop to center the child components. The{" "}
          <Mono>Container</Mono> component will render a flexbox with{" "}
          <Mono>flexDirection</Mono> set to "<Mono>column</Mono>" and{" "}
          <Mono>alignItems</Mono> set to "<Mono>center</Mono>".
        </SectionDescription>
        <BasicText>
          In this code snippet, we have a <Mono>Container</Mono> component with{" "}
          <Mono>maxW</Mono> set to "<Mono>xl</Mono>" and the{" "}
          <Mono>centerContent</Mono> prop applied. Inside the{" "}
          <Mono>Container</Mono>, there's a <Mono>Box</Mono> component that
          contains the actual content. The <Mono>padding</Mono> and{" "}
          <Mono>maxW</Mono> properties are set to control the appearance of the
          content. The result is a centered content block within the container.
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <ContainerFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

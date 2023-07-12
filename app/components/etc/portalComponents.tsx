import { Box, Portal } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  PortalFunctionFour,
  PortalFunctionOne,
  PortalFunctionThree,
  PortalFunctionTwo,
} from "./portalFunctions";

/* ********************************************************************** */

export function PortalOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we have a <Mono>Box</Mono> component, within which
          we include a <Mono>Portal</Mono> component, and the text inside the
          Portal will be rendered at the end of the <Mono>document.body</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <PortalFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PortalTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Custom Container Portal</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Portal</Mono> component allows you to specify a custom
          container to render the portal contents instead of the default{" "}
          <Mono>document.body</Mono>. To achieve this, you can use the{" "}
          <Mono>containerRef</Mono> prop and set its value to the{" "}
          <Mono>ref</Mono> of the desired container.
        </SectionDescription>
        <BasicText>
          In this example, we have a <Mono>Box</Mono> component as the main
          container. Inside the <Mono>Box</Mono>, we have a <Mono>Portal</Mono>{" "}
          component with a custom container specified by the{" "}
          <Mono>containerRef</Mono> prop. The portal content will be rendered
          within the Box instead of the <Mono>document.body</Mono>, allowing for
          greater control over the rendering location.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <PortalFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PortalThree() {
  return (
    <SectionContainer>
      <SectionHeading>Nested Portals</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Portal</Mono> component also supports nesting, allowing
          you to create nested modals, popovers, and more.
        </SectionDescription>
        <BasicText>
          In this example, we have a parent <Mono>Portal</Mono> component and a
          child <Mono>Portal</Mono> component nested within it. This nesting
          creates a hierarchical structure, allowing for the creation of complex
          UI components like nested modals. The child portal content will be
          rendered within the parent portal's DOM hierarchy.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <PortalFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PortalFour() {
  return (
    <SectionContainer>
      <SectionHeading>Preventing Nested Portals</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In some cases, you may want to prevent portal nodes from being
          nested within their parent portals. The <Mono>Portal</Mono> component
          provides the <Mono>appendToParentPortal</Mono> prop to opt out of this
          nesting behavior. In this example, the child Portal component has the{" "}
          <Mono>appendToParentPortal</Mono> prop set to <Mono>false</Mono>,
          ensuring that the child portal content is rendered directly under{" "}
          <Mono>document.body</Mono> instead of being nested within the parent
          portal's DOM hierarchy.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <PortalFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

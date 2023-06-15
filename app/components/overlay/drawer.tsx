import { Box, Flex } from "@chakra-ui/react";

import { BasicText, Mono, colors } from "~/styles/DesignComponents";
import { DrawerFunctionOne } from "./drawerFunctions";
import {
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

export function DrawerOne() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Default Usage:</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following is a basic drawer.{" "}
        </SectionDescription>
        <BasicText>
          It first defines the <Mono>ComponentFunctionOne</Mono> functional
          component: <Mono>useDisclosure()</Mono> hook is used to get the
          necessary state and functions for managing the open/close state of the
          drawer. <Mono>btnRef</Mono> is a <Mono>useRef</Mono> reference to the
          Button component, which will be used as the reference for focusing
          when the drawer closes.{" "}
        </BasicText>
        <BasicText>
          The <Mono>Button</Mono> component is rendered with a <Mono>ref</Mono>
          assigned to <Mono>btnRef</Mono> and an <Mono>onClick</Mono> handler to
          open the drawer. The <Mono>Drawer</Mono> component is rendered with
          various props: <Mono>isOpen</Mono> controls the visibility of the
          drawer based on the state from <Mono>useDisclosure</Mono> hook.
          placement sets the position of the drawer (in this case, "right").{" "}
          <Mono>onClose</Mono> is the handler function for closing the drawer.{" "}
          <Mono>finalFocusRef</Mono> assigns the <Mono>btnRef</Mono> as the
          reference for focus when the drawer closes. Inside the{" "}
          <Mono>Drawer</Mono>, there are <Mono>DrawerOverlay</Mono>,{" "}
          <Mono>DrawerContent</Mono> , and related components that form the
          structure of the drawer. <Mono>DrawerHeader</Mono>,{" "}
          <Mono>DrawerBody</Mono>, and <Mono>DrawerFooter</Mono> components are
          used to define the content within the drawer. The <Mono>Input</Mono>
          component is used for text input within the drawer.
        </BasicText>
      </Box>

      <Box p={5}>
        <Box marginY={1}>
          <DrawerFunctionOne />
        </Box>
      </Box>
    </Box>
  );
}

export function ComponentTwo() {
  return (
    <Box marginTop="5px">
      <SectionHeading>HEADING</SectionHeading>
      <SectionDescription>⦾ DESCRIPTION</SectionDescription>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

export function ComponentThree() {
  return (
    <Box marginTop="5px">
      <SectionHeading>HEADING</SectionHeading>
      <SectionDescription>⦾ DESCRIPTION</SectionDescription>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

export function ComponentFour() {
  return (
    <Box marginTop="5px">
      <BasicText color={"accent_2"} size="18px" fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={"accent_3"}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

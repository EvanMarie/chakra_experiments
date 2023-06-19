import { Box, Flex } from "@chakra-ui/react";

import { BasicText, Mono, colors } from "~/styles/DesignComponents";
import { DrawerFunctionOne, DrawerFunctionTwo } from "./drawerFunctions";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

export function DrawerOne() {
  return (
    <SectionContainer>
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
          used to define the content within the drawer. The <Mono>Input</Mono>{" "}
          component is used for text input within the drawer.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <DrawerFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

export function DrawerTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Drawer Placement</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In the following example, the drawer placement is adjusted based on
          the value selected in the radio group. It displays a group of radio
          buttons corresponding to the four possible placements of the drawer:
          "Top", "Right", "Bottom", and "Left". This radio group allows the user
          to select the desired placement for the drawer. By default, the drawer
          placement is set to "right".
        </SectionDescription>
        <BasicText>
          The setPlacement function (which is part of the state returned by
          useState) is invoked with the new value whenever a different radio
          button is selected. This updates the state and triggers a re-render of
          the component, causing the drawer to open in the new direction when
          the "Open" button is clicked.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <DrawerFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

export function ComponentThree() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <DrawerFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

export function ComponentFour() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <DrawerFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

import { Box, Flex } from "@chakra-ui/react";

import { BasicText, Mono, colors } from "~/styles/DesignComponents";
import {
  DrawerFunctionFive,
  DrawerFunctionFour,
  DrawerFunctionOne,
  DrawerFunctionThree,
  DrawerFunctionTwo,
} from "./drawerFunctions";
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

export function DrawerThree() {
  return (
    <SectionContainer>
      <SectionHeading>Initial Focus</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When working with a form inside a drawer, it is sometimes necessary
          to focus on a specific element as soon as the drawer opens. This can
          be achieved by using the <Mono>initialFocusRef</Mono> prop. By passing
          this prop, you can designate which element should receive the initial
          focus when the drawer is opened. Without the{" "}
          <Mono>initialFocusRef</Mono> prop, the drawer will automatically set
          focus on the first focusable element within it when it is opened. This
          feature allows for improved accessibility and a more streamlined user
          experience when interacting with forms in drawers.
        </SectionDescription>
        <BasicText>
          In the following example, we have a drawer that contains a few input
          fields and a save and cancel button. The <Mono>initialFocusRef</Mono>{" "}
          is used to refer to the input element. When the drawer is opened, the
          useEffect hook is triggered, and it checks if the
          <Mono>initialFocusRef.current</Mono> exists. If it does, it sets focus
          to that input element. This ensures that when the drawer is opened,
          the input field will receive the initial focus.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <DrawerFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

export function DrawerFour() {
  return (
    <SectionContainer>
      <SectionHeading>Drawer Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following example is a component that demonstrates the usage of
          the <Mono>DraDrawer</Mono> from Chakra-UI. It provides a button for
          each size option and displays a drawer with corresponding contents
          when a button is clicked.
        </SectionDescription>
        <BasicText>
          Click on the buttons with the various drawer sizes below and see how
          each default property renders. On the full size, you can hit the ESC
          key to close the drawer. The drawer will also close when you click on
          the overlay.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <DrawerFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

export function DrawerFive() {
  return (
    <SectionContainer>
      <SectionHeading>Rendering a Form in a Drawer</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When using a form within a drawer, it may be necessary to
          incorporate a form validation library such as react-hook-form or
          Formik. This ensures efficient form handling and validation. The
          recommended approach for integrating a form in a drawer involves
          leveraging the native HTML form attribute and associating it with a
          button located outside the form. This allows for seamless form
          submission and validation.
        </SectionDescription>
        <BasicText>
          The following component demonstrates how to incorporate a form within
          a drawer using Chakra-UI. It showcases the recommended approach for
          handling form submission and validation within the context of a
          drawer, while leveraging the native HTML form attribute and separate
          button placement.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <DrawerFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

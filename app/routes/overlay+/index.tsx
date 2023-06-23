import { Box, VStack } from "@chakra-ui/react";
import { BsTextareaResize } from "react-icons/bs";
import { BasicText, FlexibleBox, HL, Mono } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components">
        Chakra UI: Overlay Components
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Overlay components in Chakra UI are used to create elements that
            float above the main application content. They are useful for
            displaying additional information or interactive content without
            navigating away from the current context. These components can
            provide a more intuitive and engaging user experience, as they allow
            users to stay in their current workflow while accessing extra
            features or information.
          </SectionDescription>

          <BasicText>
            Chakra UI's overlay components provide an extensive suite of tools
            to create interactive, engaging, and accessible web interfaces.
            They're versatile and highly customizable, so they can fit into
            almost any design.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>
            The following provides a brief overview of the Chakra UI Overlay
            component collection:
          </BasicText>
          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <HL>Alert Dialog</HL>: This is used to prompt user actions and
                  confirmations, often of a critical nature. Unlike regular
                  dialogs, alert dialogs are modal, meaning they must be
                  interacted with before the user can proceed.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Drawer</HL>: The <Mono>Drawer</Mono> is another overlay
                  component that typically slides in from one side of the
                  screen. It's a versatile component that can be used for
                  numerous applications, such as housing forms, displaying
                  additional information, or providing navigation options,
                  especially in mobile designs.
                </BasicText>

                <BasicText>
                  In Chakra UI, the <Mono>Drawer</Mono> component is highly
                  customizable. It provides a number of props that control the
                  size, placement, and behavior of the drawer. Drawer also
                  includes sub-components like <Mono>DrawerOverlay</Mono>,{" "}
                  <Mono>DrawerContent</Mono>, <Mono>DrawerCloseButton</Mono>,{" "}
                  <Mono>DrawerHeader</Mono>, <Mono>DrawerBody</Mono>, and{" "}
                  <Mono>DrawerFooter</Mono>, which allow you to structure the
                  content of your drawers effectively.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Menu</HL>: Thisi is an overlay component in Chakra UI
                  designed to display a list of choices or actions. These
                  choices typically appear over the main content, and the menu
                  itself is usually triggered by a button or other interactive
                  element. Once a choice is selected or the user clicks away,
                  the menu disappears.
                </BasicText>
                <BasicText>
                  The Menu component in Chakra UI is quite flexible and comes
                  with a number of sub-components like <Mono>MenuButton</Mono>,{" "}
                  <Mono>MenuList</Mono>, and <Mono>MenuItem</Mono> that allow
                  you to easily create and customize your menus.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Modal</HL>: Modal is a type of overlay component that is
                  typically used to command user attention for actions or input.
                  This dialog box or content overlay requires user interaction
                  and often disables interaction with the rest of the
                  application until it is dismissed.
                </BasicText>
                <BasicText>
                  Modals in Chakra UI are composed of several sub-components:{" "}
                  <Mono>ModalOverlay</Mono>, <Mono>ModalContent</Mono>,{" "}
                  <Mono>ModalHeader</Mono>, <Mono>ModalCloseButton</Mono>,{" "}
                  <Mono>ModalBody</Mono>, and <Mono>ModalFooter</Mono>. These
                  components allow you to structure and style your modals
                  effectively.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Popover</HL>: This is an overlay component that's similar
                  to <Mono>Menu</Mono>, but it can contain more complex content
                  than just a list of options. <Mono>Popover</Mono> can include
                  elements like form inputs, rich text, or interactive
                  components.
                </BasicText>
                Like the other overlay components, Popover in Chakra UI comes
                with several sub-components: <Mono>PopoverTrigger</Mono>,{" "}
                <Mono>PopoverContent</Mono>, <Mono>PopoverHeader</Mono>,{" "}
                <Mono>PopoverBody</Mono>, and <Mono>PopoverFooter</Mono>. You
                can control the placement, size, and triggering behavior of the
                popover using various props.
                <BasicText></BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Tooltip</HL>: This is a small piece of informational text
                  that appears when the user hovers over or focuses on an
                  element. It's a great way to provide extra guidance or
                  information about a feature without cluttering the interface.
                </BasicText>
                <BasicText>
                  In Chakra UI, <Mono>Tooltip</Mono> comes with a number of
                  properties that allow you to control its appearance and
                  behavior, such as the label (the tooltip's content), the
                  placement of the tooltip relative to its child, and whether it
                  should show an arrow pointing to the child.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
          <Box>
            <BasicText>
              Use the navigation menu to learn more about each component
              individually.
            </BasicText>
          </Box>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  MyLabel,
  SectionContainer,
  ImportBox,
  MainGrid,
  GridColumn,
  GridBoxOne,
  GridBoxThree,
  GridBoxTwo,
  HighlightColumn,
  MyFlex,
  SectionDescription,
  SingleExample,
  ViewCode,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Overlay from "~/mardownExamples/overlay/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  DrawerFive,
  DrawerFour,
  DrawerOne,
  DrawerThree,
  DrawerTwo,
} from "~/components/overlay/drawerComponents";
import {
  DrawerMultiStepForm,
  DrawerNestedNavigation,
  DrawerNotificationsPanel,
} from "~/components/overlay/drawerFunctions";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/drawer" size={28}>
        Drawer
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI Drawer component is a versatile component that
              provides a slide-in panel that can be used for various purposes
              such as displaying menus, sidebars, or modal-like content. It is
              commonly used to present additional options or information without
              taking up too much space on the screen.
            </SectionDescription>
            <BasicText>
              The Chakra Drawer component offers several features and
              customization options:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Placement</HL>: You can specify the placement of the
                  drawer, such as "left", "right", "top", or "bottom", to
                  determine from which direction it will slide into view.
                </li>
                <li>
                  <HL>Size</HL>: You can control the size of the drawer by
                  setting the size prop to values like "xs", "sm", "md", "lg",
                  or "xl", or you can provide custom values.
                </li>
                <li>
                  <HL>Overlay</HL>: The drawer component automatically adds an
                  overlay to the rest of the screen when it is open, making the
                  content outside the drawer less prominent. The overlay can be
                  customized with various properties such as opacity and
                  background color.{" "}
                </li>
                <li>
                  <HL>Animation</HL>: The drawer component provides smooth
                  animation when opening and closing. You can customize the
                  animation using CSS transitions or other animation libraries.{" "}
                </li>
                <li>
                  <HL>Controlled or Uncontrolled</HL>: You have the flexibility
                  to use the drawer as a controlled or uncontrolled component.
                  You can manually control its open/close state, or you can use
                  the <Mono>isOpen</Mono> and <Mono>onClose</Mono> props to let
                  Chakra UI handle the state for you.{" "}
                </li>
                <li>
                  <HL>Accessibility</HL>: : The Chakra Drawer component is built
                  with accessibility in mind. It ensures proper focus management
                  and screen reader compatibility.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                To use the Chakra Drawer component, you need to import it from
                the Chakra UI library and place its content inside the
                component. You can control the visibility of the drawer by
                toggling its open state using the <Mono>isOpen</Mono> prop.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <MiniCode>{`import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <DrawerOne />
                <ModalCode>
                  <Overlay.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <DrawerTwo />
                <ModalCode>
                  <Overlay.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <DrawerThree />
                <ModalCode>
                  <Overlay.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <DrawerFour />
                <ModalCode>
                  <Overlay.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <DrawerFive />
                <ModalCode>
                  <Overlay.E07 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Drawer with Nested Navigation</b>: The following example
              showcases a drawer that contains nested navigation links, allowing
              for a collapsible menu. It provides a compact and efficient way to
              display a hierarchical navigation structure. Here, clicking on the
              "Menu" button toggles the drawer's visibility. The drawer contains
              navigation links, and when the "Services" link is clicked, a
              collapsible submenu expands to reveal additional links.
            </HighlightText>
            <MyFlex>
              <DrawerNestedNavigation />
            </MyFlex>
            <ModalCode>
              <Overlay.H04 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Drawer with Multi-step Form</b>: This example demonstrates
              using a drawer for a multi-step form. It allows users to navigate
              through different form sections within the drawer, providing a
              streamlined and compact form experience.
            </HighlightText>
            <MyFlex>
              <DrawerMultiStepForm />
            </MyFlex>
            <ModalCode>
              <Overlay.H05 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Notifications Drawer</b>: In the following example, we have a
              button labeled "Open Notifications" that opens the drawer
              containing a list of notifications. The notifications are stored
              in the notifications state array. We use the <b>Stack</b>{" "}
              component from Chakra-UI to display the notifications as badges.
              If there are no notifications, we display a message stating "No
              notifications." Additionally, there's a button labeled "Add
              Notification" that adds a new notification to the list and
              displays a success toast notification using the <b>useToast</b>{" "}
              hook from Chakra-UI.
            </HighlightText>
            <MyFlex>
              <DrawerNotificationsPanel />
            </MyFlex>
            <ModalCode>
              <Overlay.H06 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

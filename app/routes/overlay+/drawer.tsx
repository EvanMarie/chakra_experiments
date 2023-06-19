import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  // Mono,
  // Flex,
  // Text,
  HL,
  Mono,
  MyDivider,
  colors,
} from "~/styles/DesignComponents";

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
import { DrawerOne, DrawerTwo } from "~/components/overlay/drawer";

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
                <Highlighter>{`import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <DrawerOne />
                <Overlay.E03 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <DrawerTwo />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono, NoteBox } from "~/styles/DesignComponents";

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
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Layout from "~/mardownExamples/layout/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Heading, Link } from "@chakra-ui/react";

import {
  StackOne,
  StackTwo,
  StackThree,
  StackFour,
  StackFive,
} from "~/components/layout/stackComponents";
import {
  StackFunctionEight,
  StackFunctionSeven,
  StackFunctionSix,
} from "~/components/layout/stackFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/stack" size={28}>
        Stack
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI <Mono>Stack</Mono> component is a powerful layout
              tool that allows you to group elements together and apply space
              between them. It provides a straightforward and efficient way to
              create stacked layouts in both horizontal and vertical directions.
              Additionally, Chakra UI offers two specialized components,{" "}
              <Mono>HStack</Mono> and <Mono>VStack</Mono>, for stacking elements
              exclusively in the horizontal and vertical directions,
              respectively.
            </SectionDescription>

            <BulletBox>
              <ul>
                <li>
                  <HL>Stack</HL>: the core component that can be used to stack
                  elements in either the horizontal or vertical direction. By
                  default, it applies space between its children using a
                  modified version of the{" "}
                  <Link
                    href="https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/"
                    isExternal
                  >
                    CSS lobotomized owl selector
                  </Link>{" "}
                  . This selector ensures consistent spacing between the stacked
                  elements, creating a visually appealing layout.
                </li>
                <li>
                  <HL>HStack</HL>: designed specifically for horizontally
                  stacking elements. It provides a cleaner and more semantic way
                  to achieve horizontal layouts. You can use the{" "}
                  <Mono>HStack</Mono> component to stack elements in a row, and
                  it automatically applies spacing between the items.
                </li>
                <li>
                  <HL>VStack</HL>: similar to the <Mono>HStack</Mono> component
                  but stacks elements vertically instead of horizontally. It
                  allows you to create vertical layouts with ease, applying
                  spacing between the items.
                </li>
                <li>
                  <HL>StackDivider</HL>: allows you to create dividers with
                  various styles and customization options. By default, it
                  renders a simple horizontal line as the divider.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <NoteBox>
                <Heading size="lg" color="sidebarBackground">
                  Stack - Flex Comparison:
                </Heading>
                <p>
                  The <b>Stack</b> component and the <b>Flex</b> component in
                  Chakra UI provide similar functionality for spacing out their
                  children, but they have some key differences to consider.
                </p>
                <p>
                  The <b>Stack</b> component is designed specifically for
                  stacking elements, either horizontally or vertically, with
                  consistent spacing between them. It is useful when you want to
                  create stacked layouts with predefined spacing. However, the{" "}
                  <b>Stack</b> component does not expand to fill the entire
                  width of its container.
                </p>
                <p>
                  On the other hand, the <b>Flex</b> component is more versatile
                  and powerful. It not only spaces out its children but also
                  expands to fill the entire width of its container. This makes
                  it ideal for creating flexible and responsive layouts. The{" "}
                  <b>Flex</b> component allows you to define how the available
                  space should be distributed among its children using the align
                  and justify props, which control alignment and distribution
                  along the main and cross axes.
                </p>
                <p>
                  The <b>Stack</b> component is great for creating stacked
                  layouts with consistent spacing, while the <b>Flex</b>{" "}
                  component is more suitable for creating flexible and adaptive
                  layouts that fill the available space. Consider using the{" "}
                  <b>Stack</b> component when you need a straightforward way to
                  stack elements, and use the <b>Flex</b> component when you
                  require more control over the layout and the ability to fill
                  available space.
                </p>
              </NoteBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The three <Mono>Stack</Mono> components can be imported as
                  follows:
                </BasicText>
                <Highlighter>{`import { 
    Stack, 
    HStack, 
    VStack,
    StackDivider } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <StackOne />
                <ModalCode>
                  <Layout.E16 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StackTwo />
                <ModalCode>
                  <Layout.E17 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StackThree />
                <ModalCode>
                  <Layout.E18 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StackFour />
                <ModalCode>
                  <Layout.E19 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StackFive />
                <ModalCode>
                  <Layout.E20 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Custom Tabs</b>: In this example, we're using the <b>HStack</b>{" "}
              component to create a custom tab layout. Each tab is represented
              by a <b>Box</b> component wrapped inside the <b>HStack</b>. By
              applying appropriate styling, such as background color, cursor,
              and other desired styles, we create visually appealing and
              interactive tabs.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex padding={0}>
                <StackFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H19 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Vertical Timeline</b>: You can create a vertical timeline using
              the <b>VStack</b> component. By stacking <b>Box</b> components
              with appropriate styling and applying a custom divider, you can
              construct an elegant and informative timeline interface.{" "}
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <StackFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              {" "}
              <Layout.H20 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Feature Cards</b>: These are UI elements used to highlight and
              present key features, services, or benefits of a product, service,
              or application. They are typically displayed as individual cards,
              each containing a concise title, a brief description, and
              sometimes an accompanying image or icon.
              <br />
              Feature cards are useful for information presentation, grabbing
              user attention, encouraging user engagement, and aiding in easy
              comparison between various items, concepts, or products.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <StackFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              {" "}
              <Layout.H21 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

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
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/button" size={28}>
        Button
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Button component in Chakra UI serves as a trigger to
              initiate an action or event. This can include submitting a form,
              launching a dialog box, aborting an ongoing action, or executing a
              delete operation. Together with the ButtonGroup component, these
              provide a set of accessible and customizable UI components for
              React applications. Here's an overview of the Button and
              ButtonGroup components:
            </SectionDescription>
            <BasicText>
              Here's an overview of the Button and ButtonGroup components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Button</HL>: This component is used to render a clickable
                  button element with various styles and configurations.
                  Variants include primary, secondary, outline, ghost, and more.
                  It provides built-in styles for different sizes, including
                  small, medium, and large. You can customize the appearance of
                  the button by applying different props such as{" "}
                  <Mono>color</Mono>, <Mono>variant</Mono>, <Mono>size</Mono>,
                  and more. It supports adding icons, loading spinners, and
                  tooltips to buttons. You can attach event handlers to handle
                  button clicks and other interactions.
                </li>
                <li>
                  <HL>ButtonGroup</HL>: This component is used to group multiple
                  buttons. It provides a convenient way to arrange and style
                  related buttons as a cohesive unit. Buttons within a{" "}
                  <Mono>ButtonGroup</Mono> can be automatically spaced and
                  styled using predefined or custom spacing. It supports
                  responsive behavior, allowing buttons to stack vertically on
                  smaller screens. You can apply additional styling and
                  configurations to the <Mono>ButtonGroup</Mono> component, such
                  as size, variant, and color.
                </li>
              </ul>
            </BulletBox>
            <BasicText>
              Both the <Mono>Button</Mono> and ButtonGroup components have
              extensive customization options and can be easily integrated into
              your React application. They follow best practices for
              accessibility and provide a consistent and user-friendly
              interface.
            </BasicText>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  Button, 
  ButtonGroup } from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

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
import * as Typography from "~/mardownExamples/typography/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Text, chakra } from "@chakra-ui/react";
import {
  TextOne,
  TextTwo,
  TextThree,
} from "~/components/typography/textComponents";
import {
  TextFunctionFive,
  TextFunctionFour,
  TextFunctionSix,
} from "~/components/typography/textFunctions";
import { TextareaFunctionSeven } from "~/components/form/textareaFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/text" size={28}>
        Text
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra-UI <Mono>Text</Mono> component is a versatile tool
              for rendering text and paragraphs within a user interface. It
              provides a wide range of functionality and customization options.
            </SectionDescription>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Text</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Text } from '@chakra-ui/react';`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>

          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TextOne />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TextTwo />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TextThree />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Gradient Text</b>: There are many ways to call attention to a
              particular block of text. This example shows you how to display
              text with a subtle gradient effect to add visual appeal and draw
              attention to important information, while at the same time not
              overwhelming the user visually.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <TextFunctionFive />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H08 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Dynamic Text</b>: This example showcases text in a carousel
              manner, engaging users and adding visual interest, which is great
              for any website or application. This method can be utilized to
              highlight key messages, display quotes or slogans, or present
              dynamic information in an eye-catching manner. So that you can try
              it out yourself, we offer you the ability to input three lines of
              text of your choosing and see the animation in action.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <TextFunctionFour />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H07 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Interactive Story</b>: One of the best uses of text is
              story-telling. This example creates an interactive storytelling
              experience for users. The story is navigated through a series of
              choices, which guide the narrative in different directions based
              on the user's selections.{" "}
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <TextFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H09 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

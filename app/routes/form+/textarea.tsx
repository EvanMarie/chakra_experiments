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
import * as Form from "~/mardownExamples/form/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  TextAreaFive,
  TextAreaFour,
  TextAreaOne,
  TextAreaThree,
  TextAreaTwo,
} from "~/components/form/textareaComponents";
import {
  TextareaFunctionEight,
  TextareaFunctionSeven,
  TextareaFunctionSix,
} from "~/components/form/textareaFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/textarea" size={28}>
        Textarea
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI <Mono>Textarea</Mono> component is a versatile
              tool for creating multi-line text inputs with ease. It is a
              wrapper that simplifies the creation of multi-line text inputs and
              offers various props for customization, theming, and additional
              functionality.
            </SectionDescription>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Textarea</Mono> component can be imported as
                  follows:
                </BasicText>
                <Highlighter>{`import { Textarea } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TextAreaOne />
                <ModalCode>
                  <Highlighter>{`<Textarea
  placeholder="I am some fantastic placeholder text!"
/>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TextAreaTwo />
                <ModalCode>
                  <Form.E46 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TextAreaThree />
                <ModalCode>
                  <Form.E45 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TextAreaFour />
                <ModalCode>
                  <Highlighter>{`<Textarea
  isDisabled
  placeholder="Enter your text here"
/>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TextAreaFive />
                <ModalCode>
                  <Highlighter>{`<Textarea
  isInvalid
  placeholder="Enter your text here"
/>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Auto-Expanding Textarea</b>: This example demonstrates how to
              create an auto-expanding textarea that adjusts its height
              automatically based on the content. With this feature, the
              textarea will dynamically adjust its height as the user types,
              providing a seamless experience without the need for scrollbars.
              Users can focus on their content while the textarea grows to
              accommodate it.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <TextareaFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H34 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Character Count Limit</b>: This example shows how to implement
              a character count limit for the <b>Textarea</b>, providing
              real-time feedback to users about the remaining characters they
              can enter. This way, users will be able to see how many characters
              they have remaining while typing or pasting their content, and you
              can easily enforce a character count limit.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <TextareaFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H35 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Tag Input</b>: You can implement tag input using a{" "}
              <b>Textarea</b> component. With this functionality, users can
              easily enter and manage tags for various purposes, such as
              categorizing items, adding keywords, or creating personalized
              labels. In the example below, we explore a <b>TagInput</b>{" "}
              component that allows users to enter tags and dynamically displays
              them as stylish labels. You can even set default tags to provide
              users with a starting point.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <TextareaFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H36 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

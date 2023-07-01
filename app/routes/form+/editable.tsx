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
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import {
  EditableFive,
  EditableFour,
  EditableOne,
  EditableThree,
  EditableTwo,
} from "~/components/form/editableComponents";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {
  EditableFunctionFive,
  EditableFunctionFour,
  EditableFunctionSix,
} from "~/components/form/editableFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/editable" size={28}>
        Editable
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI's <Mono>Editable</Mono> component serves a unique
              purpose - to facilitate the inline renaming of text. Under normal
              circumstances, it manifests as regular UI text. However, on user
              interaction, specifically when a click or focus is initiated, it
              transforms into a text input field. The purpose of the Editable
              component is to streamline the user experience by providing a
              smooth, dynamic interface that does not interrupt the flow of
              content.
            </SectionDescription>
            <BasicText>
              The Chakra UI Editable suite comprises four key components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Editable</HL>: This is the wrapper component that provides
                  context value.
                </li>
                <li>
                  <HL>EditableInput</HL>: This represents the edit view of the
                  component and becomes visible when a click or focus is given
                  to the text.
                </li>
                <li>
                  <HL>EditableTextarea</HL>: This component is used when
                  multiline text input is needed in an editable context.
                </li>
                <li>
                  <HL>EditablePreview</HL>: This is the read-only view of the
                  component.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <EditableOne />
                <ModalCode>
                  <Highlighter>{`<Editable defaultValue="Goodnight, Moon.">
  <EditablePreview />
  <EditableInput />
</Editable>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <EditableTwo />
                <ModalCode>
                  <Form.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <EditableThree />
                <ModalCode>
                  <Highlighter>{`<Box backgroundColor="gray.800" p={5} borderRadius="md" w="100%">
  <Editable defaultValue="Dark Themed Text" color="white">
    <EditablePreview />
    <EditableInput />
  </Editable>
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <EditableFour />
                <ModalCode>
                  <Highlighter>{`<Box backgroundColor="gray.800" p={5} borderRadius="md">
  <Editable defaultValue="Dark Themed Text" color="white">
    <EditablePreview />
    <EditableInput />
  </Editable>
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <EditableFive />
                <ModalCode>
                  <Form.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        {/* *********************************************************************
         */}
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Editable Color Picker</b>: You could use the <b>Editable</b>{" "}
              component as an input to create quality interactive experiences
              such as an editable color picker, allowing users to see a color
              preview and edit the color using a hex code. For design
              applications or tools where color management is crucial, an
              editable color picker can serve as a handy utility. The color box
              presents a visual preview of the selected color, and the hex code
              can be edited to change the color.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <EditableFunctionFour />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H04 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Inline Editing of Table Cells</b>: One interesting use case for
              Editable component is the inline editing of table cells. This can
              be incredibly useful for users as it can make the editing process
              much more user-friendly and convenient.
            </HighlightText>
            <HighlightExample h="120px">
              <MyFlex>
                <EditableFunctionFive />
              </MyFlex>
            </HighlightExample>
            <ModalCode></ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Editable Dates</b>: You can create an editable date component,
              allowing users to view and edit dates in a user-friendly manner.
              Dates are often viewed in a friendly format, such as "June 2,
              2023", but are more easily edited in a standardized format, like
              "2023-06-02". The Editable component can show the date in a
              friendly format, and switch to a date input for editing. Here is
              how you can do it.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <EditableFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H05 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

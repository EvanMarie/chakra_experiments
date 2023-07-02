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
  InputEight,
  InputFive,
  InputFour,
  InputNine,
  InputOne,
  InputSeven,
  InputSix,
  InputThree,
  InputTwo,
} from "~/components/form/inputComponents";
import {
  InputFunctionEight,
  InputFunctionNine,
  InputFunctionSeven,
} from "~/components/form/inputFunction";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/input" size={28}>
        Input
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Input fields are a key part of user interaction in web forms
              that allow users to enter information via a text field. Chakra
              UI's Input component enhances this essential element by providing
              a wide array of powerful features and customization options.
            </SectionDescription>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Input</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Input } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <InputOne />
                <ModalCode>
                  <Highlighter>{`<Input placeholder="Your message here" />`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputTwo />
                <ModalCode>
                  <Highlighter>{`<Stack spacing={3}>
  <Input placeholder='size="xs"' size="xs" />
  <Input placeholder='size="sm"' size="sm" />
  <Input placeholder='size="md"' size="md" />
  <Input placeholder='size="lg"' size="lg" />
</Stack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputThree />
                <ModalCode>
                  <Highlighter>{`<Input variant="outline" placeholder="Outlined" />
<Input variant="filled" placeholder="Filled" />
<Input variant="flushed" placeholder="Flushed" />
<Input variant="unstyled" placeholder="Unstyled" />`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputFour />
                <ModalCode>
                  <Form.E16 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputFive />
                <ModalCode>
                  <Form.E17 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputSix />
                <ModalCode>
                  <Form.E18 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputSeven />
                <ModalCode>
                  <Form.E19 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputEight />
                <ModalCode>
                  <Form.E20 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <InputNine />
                <ModalCode>
                  <Form.E21 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Real-Time Data Filtering</b>: You can utilize Chakra UI's{" "}
              <b>Input</b> component to create a live search or filter
              functionality in your application. It's quite simple and enhances
              the user experience significantly, especially when dealing with
              large sets of data. In this example, as the user types in the
              Input field, the list below gets updated in real-time, showing
              only items that include the text entered.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <InputFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H10 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Input With Autocomplete Functionality</b>: You can pair the{" "}
              <b>Input</b> component with the List component from Chakra UI to
              implement an autocomplete functionality. This can greatly enhance
              the user experience by providing users with potential matches as
              they type. In this example, as the user types in the <b>Input</b>{" "}
              field, a <b>List</b> of suggested words that match the input
              appears below. The list updates as the user continues to type.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <InputFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H11 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Password Strength Indicator</b>: You can create a password
              strength indicator using Chakra UI's <b>Input</b> and{" "}
              <b>Progress</b> components. This is a creative way to provide
              visual feedback about password strength, which can encourage users
              to choose stronger passwords. In this example, as the user types a
              password in the <b>Input</b> field, a <b>Progress</b> bar and a
              text indicating the strength of the password update in real-time.
              The color and text change based on the password strength (which is
              simply estimated by its length for simplicity and simulation in
              this case).
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <InputFunctionNine />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H09 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL } from "~/styles/DesignComponents";

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
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import {
  FormControlFive,
  FormControlFour,
  FormControlOne,
  FormControlThree,
  FormControlTwo,
} from "~/components/form/formControlComponents";
import {
  FormControlFunctionThree,
  // FormControlFunctionThree,
  FormControlFunctionTwo,
} from "~/components/form/formControlFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel
        link="https://chakra-ui.com/docs/components/form-control"
        size={28}
      >
        FormControl
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The FormControl component in Chakra UI is an essential building
              block that helps users create interactive and accessible forms. As
              a versatile container, it encompasses numerous subcomponents which
              make the creation of custom form inputs an intuitive and efficient
              process.
            </SectionDescription>
            <BasicText>
              FormControl features several useful subcomponents: All these
              subcomponents work collectively to facilitate a superior user
              experience in form handling.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>FormControl</HL>: This is the wrapper for the form
                  component. It provides context for all the other subcomponents
                  and is responsible for the form's accessibility.
                </li>
                <li>
                  <HL>FormLabel</HL>: This subcomponent offers a textual
                  description to the related form control, increasing the
                  usability of the form for users.
                </li>
                <li>
                  <HL>FormHelperText</HL>: This is a critical accessibility
                  feature providing additional information about the form field.
                  It aids users in correctly filling out the form.
                </li>
                <li>
                  <HL>FormErrorMessage</HL>: When form validation fails, this
                  subcomponent presents an error message to guide the user in
                  fixing the issue.
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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <FormControlOne />
                <ModalCode>
                  <Highlighter>{`<FormControl id="username" colorScheme="cyan" maxWidth="400px">
  <FormLabel>Name</FormLabel>
  <Input type="text" />
</FormControl>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FormControlTwo />
                <ModalCode>
                  <Form.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FormControlThree />
                <ModalCode>
                  <Form.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FormControlFour />
                <ModalCode>
                  <Form.E10 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FormControlFive />
                <ModalCode>
                  <Highlighter>{`<FormControl w="100%" maxWidth="100px" colorScheme="cyan">
  <FormLabel>Age</FormLabel>
  <NumberInput max={100} min={1}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Inline Forms</b>: While it's more common to see forms with
              labels and inputs stacked vertically, <b>FormControl</b> can also
              be used to create inline forms where the label and input are on
              the same line. This can help with space efficiency and improve the
              user experience on wide screens.
            </HighlightText>
            <HighlightExample h="100px">
              <MyFlex>
                {" "}
                <HStack width="100%" alignItems="center" spacing="24px">
                  <FormControl id="name" colorScheme="cyan">
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                </HStack>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<HStack width="100%" alignItems="center" spacing="24px">
          <FormControl id="name" colorScheme="cyan">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
        </HStack>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Form Feedback Icons</b>: You can provide visual feedback to
              users about their form inputs with feedback icons. For example,
              you can show a check icon for valid inputs and a warning icon for
              invalid ones.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <FormControlFunctionThree />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H07 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Dynamic Forms</b>: You can use the <b>FormControl</b> component
              to create dynamic forms. Dynamic forms are forms that can add or
              remove input fields based on user interaction. This can super
              handy in many real-world applications where the number of inputs
              can vary, such as adding ingredients to a recipe or adding team
              members to a project.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <FormControlFunctionTwo />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H06 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

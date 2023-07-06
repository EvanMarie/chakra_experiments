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
  SelectFive,
  SelectFour,
  SelectOne,
  SelectThree,
  SelectTwo,
} from "~/components/form/selectComponents";
import {
  SelectFunctionEight,
  SelectFunctionSeven,
  SelectFunctionSix,
} from "~/components/form/selectFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/select" size={28}>
        Select
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Select</Mono> component in Chakra UI is a versatile
              tool that allows users to pick a value from a set of predefined
              options. It is particularly useful when there are more than five
              options to choose from, offering an intuitive and efficient
              selection experience. In this blog post, we will delve into the
              various aspects of the Chakra UI <Mono>Select</Mono> component,
              including its subcomponents, props, theming options, and
              customization possibilities. By understanding and utilizing the{" "}
              <Mono>Select</Mono> component, you can create dynamic and
              user-friendly selection interfaces in your applications.
            </SectionDescription>
            <DescriptionBox>
              <ImportBox>
                <BasicText>
                  The <Mono>Slider</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Select } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SelectOne />
                <ModalCode>
                  <Highlighter>{`<Select placeholder="Select an option...>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SelectTwo />
                <ModalCode>
                  <Highlighter>{`<VStack spacing={3}>
  <Select placeholder="size='xs'" size="xs" />
  <Select placeholder="size='sm'" size="sm" />
  <Select placeholder="size='medium'" size="md" />
  <Select placeholder="size='large'" size="lg" />
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SelectThree />
                <ModalCode>
                  <Highlighter>{`<VStack spacing={3}>
  <Select variant="outline" placeholder="variant='outline'" />
  <Select variant="filled" placeholder="variant='filled'" />
  <Select variant="flushed" placeholder="variant='flushed'" />
  <Select variant="unstyled" placeholder="variant='unstyled'" />
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SelectFour />
                <ModalCode>
                  <Highlighter>{`<Select
  icon={<IoIosArrowDropdownCircle />}
  placeholder="IoIosArrowDropdownCircle"
/>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SelectFive />
                <ModalCode>
                  <Highlighter>{`<Select
  bg="pink"
  borderColor="cyan"
  placeholder="bg='pink' borderColor='cyan'"
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
              <b>Unique Customization</b>: Chakra makes it easy to take
              customization to the next level. In this example, the{" "}
              <b>Select</b> component is wrapped inside a <b>Box</b> component
              to provide a container for the dropdown menu. The{" "}
              <b>borderRadious</b> is set to "full" to create the pill shape of
              the <b>Select</b> component. The icon prop is used to replace the
              default arrow.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <SelectFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H25 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Multiple Selection</b>: You can use the <b>Select</b> component
              to create a controlled multiple selection feature. This can be
              useful when you want users to be able to select more than one
              option from a list.{" "}
            </HighlightText>
            <HighlightExample h="150px">
              <MyFlex>
                <SelectFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H26 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Dynamic Option Filtering</b>: You can use the <b>Select</b>{" "}
              component to create a dynamic filtering feature. Imagine a
              scenario where you have a large dataset and want to allow users to
              filter the options based on their input. You can achieve this by
              using the <b>Select</b> component's <b>onChange</b> event and
              combining it with a search input.{" "}
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <SelectFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H27 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

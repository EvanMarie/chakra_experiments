import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
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
  SwitchFour,
  SwitchOne,
  SwitchThree,
  SwitchTwo,
} from "~/components/form/switchComponents";
import {
  SwitchFunctionFive,
  SwitchFunctionSeven,
  SwitchFunctionSix,
} from "~/components/form/switchFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/switch" size={28}>
        Switch
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Switch</Mono> component in Chakra UI serves as an
              alternative to the <Mono>Checkbox</Mono> component. It allows
              users to toggle between enabled and disabled states. Similar to a
              checkbox, a <Mono>Switch</Mono> must always be accompanied by a
              label and follows the same keyboard workflow. Let's explore the
              different aspects and functionalities of the Switch component.
            </SectionDescription>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Switch</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Switch } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SwitchOne />
                <ModalCode>
                  <Highlighter>{`<FormControl display="flex" alignItems="center">
  <VStack align="flex-start">
    <HStack>
      <FormLabel htmlFor="friend-requests">
        Enable friend requests
      </FormLabel>
      <Switch id="friend-requests" />
    </HStack>
    <HStack>
      <FormLabel htmlFor="message-alerts">
        Enable message alerts
      </FormLabel>
      <Switch id="message-alerts" />
    </HStack>
    <HStack>
      <FormLabel htmlFor="party-mode">Enable party mode</FormLabel>
      <Switch id="party-mode" />
    </HStack>
  </VStack>
</FormControl>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SwitchTwo />
                <ModalCode>
                  <Highlighter>{`<FormControl display="flex" px={5}>
  <VStack align="flex-start" spacing={5}>
    <HStack>
      <FormLabel>Small</FormLabel>
      <Switch size="sm" />
    </HStack>
    <HStack>
      <FormLabel>Medium</FormLabel>
      <Switch size="md" />
    </HStack>
    <HStack>
      <FormLabel>Large</FormLabel>
      <Switch size="lg" />
    </HStack>
  </VStack>
</FormControl>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SwitchThree />
                <ModalCode>
                  <Highlighter>{`export function SwitchFunctionThree() {
  const colorSchemes = [
    "whiteAlpha",
    "blackAlpha",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
    "linkedin",
    "facebook",
    "messenger",
    "whatsapp",
    "twitter",
    "telegram",
  ];

  return (
    <SingleExample bg="background">
      <FormControl display="flex" px={5} w="fit-content">
        <VStack align="flex-start">
          {colorSchemes.map((colorScheme) => (
            <HStack key={colorScheme} spacing={5}>
              <FormLabel>{colorScheme}</FormLabel>
              <Switch colorScheme={colorScheme} isChecked />
            </HStack>
          ))}
        </VStack>
      </FormControl>
    </SingleExample>
  );
}`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SwitchFour />
                <ModalCode>
                  <Highlighter>{`export function SwitchFunctionFour() {
  const states = [
    "isChecked",
    "isDisabled",
    "isInvalid",
    "isFocusable",
    "isReadOnly",
    "isRequired",
  ];

  return (
    <SingleExample bg="background">
      <FormControl display="flex" px={5} w="fit-content">
        <VStack align="flex-start">
          {states.map((state) => (
            <HStack key={state} spacing={5}>
              <FormLabel>{state}</FormLabel>
              <Switch {...{ [state]: true }} />
            </HStack>
          ))}
        </VStack>
      </FormControl>
    </SingleExample>
  );
}`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Color Mode Toggle</b>: You can use the <b>Switch</b> component
              to create a <b>Dark Mode</b> toggle for your website. By utilizing
              the <b>Switch</b>'s <b>isChecked</b> prop and integrating it with
              your preferred theming solution, users can easily switch between
              light and dark themes.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <SwitchFunctionFive />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H31 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Language Selector</b>: Enhance your multilingual website by
              adding a language selector using the <b>Switch</b> component.
              Users can easily switch between different languages, triggering a
              language change event and updating the content accordingly.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <SwitchFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H32 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Event-Driven Effects</b>: This example illustrates how the
              <b>Switch</b> component can be used to drive visual changes on the
              screen. By toggling the switch, a color-altering effect, labeled
              here as "Rave Mode", is activated within the rave box. The colors
              alternate between cyan and deep pink every half second, creating a
              dynamic and lively visual. (There might be some music involved as
              well.) When Rave Mode is turned off, the container's colors
              transition back to a static black and gray. This demonstrates how
              user interactions can be utilized to control visual components on
              the screen.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <SwitchFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H33 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

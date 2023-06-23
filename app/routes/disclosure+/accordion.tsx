import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import * as Disclosure from "~/mardownExamples/disclosure/index";

import {
  BasicText,
  // Mono,
  // Flex,
  // Text,
  HL,
  Mono,
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
  HighlightExample,
  ViewCode,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  AccordionFive,
  AccordionFour,
  AccordionOne,
  AccordionThree,
  AccordionTwo,
} from "~/routes/disclosure+/disclosure_examples/accordion";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

const MotionBox = motion(Box);

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/accordion" size={28}>
        Accordion
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Accordion</Mono> component in Chakra UI is a versatile
              component that allows you to provide sections of content that can
              expand or collapse to reveal more information. It can be used to
              display a large amount of content in a compact and orderly manner.
            </SectionDescription>
            <BasicText>
              The Accordion component consists of several main parts:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Accordion</HL>: This is the main wrapper that holds all
                  the accordion items.
                </li>
                <li>
                  <HL>AccordionItem</HL>: This represents a single section of
                  the accordion. Each AccordionItem consists of an
                  AccordionButton and an AccordionPanel.
                </li>
                <li>
                  <HL>AccordionButton</HL>: This is the part of the
                  AccordionItem that users can interact with to expand or
                  collapse the AccordionPanel.
                </li>
                <li>
                  <HL>AccordionPanel</HL>: This is the content area that is
                  shown or hidden when a user interacts with the
                  AccordionButton.
                </li>
              </ul>
            </BulletBox>
            <BasicText>
              Some of the key features of the Accordion component include:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>allowMultiple</HL>: This prop allows more than one
                  AccordionPanel to be open at the same time.
                </li>
                <li>
                  <HL>allowToggle</HL>: This prop allows an AccordionPanel to be
                  collapsible. If this is set to true, clicking an open
                  AccordionButton will collapse its AccordionPanel.
                </li>
                <li>
                  <HL>defaultIndex</HL>: This prop allows you to define which
                  AccordionItem(s) should be open by default when the component
                  is first rendered.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                The <Mono>Accordion</Mono> component in Chakra UI is built with
                inclusivity in mind. The proper <Mono>ARIA</Mono> attributes are
                automatically applied, and the keyboard navigation (using the
                arrow keys, Home, and End buttons) is handled out of the box.
                This makes the Accordion component a robust choice for
                displaying chunked content or information in a more compact,
                user-friendly format.
              </BasicText>
              <BasicText>
                Pressing space or enter when focus is on the accordion panel
                header will toggle (expand or collapse) the accordion.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The Accordion components can be imported as follows:
                </BasicText>
                <MiniCode>{`import { 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon, } from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <AccordionOne />
                <ModalCode>
                  <Disclosure.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AccordionTwo />
                <ModalCode>
                  <Disclosure.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AccordionThree />
                <ModalCode>
                  <Disclosure.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                {" "}
                <AccordionFour />
                <ModalCode>
                  <Disclosure.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                {" "}
                <AccordionFive />
                <ModalCode>
                  <Disclosure.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Nested Accordions</b>: you can nest Accordions within
              Accordions for more complex data organization. It's a handy trick
              when you need to present multilayered information in a clear and
              orderly manner.
            </HighlightText>
            <MyFlex>
              <HighlightExample
                h="240px"
                alignItems="flex-start"
                justifyContent="flexstart"
              >
                <Accordion allowToggle w="100%" p={2}>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      Section 1 content
                      {/* Nested accordion */}
                      <Accordion allowToggle>
                        <AccordionItem>
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                              Nested Section 1 title
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            Nested Section 1 content
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Disclosure.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              One creative idea when working with Accordions could be to replace
              the default <b>AccordionIcon</b> with custom icons for an expanded
              and collapsed state. In the following example, instead of the
              default accordion icon, we're using the ArrowDownIcon from Chakra
              UI's inbuilt icons. It's important to note that to show a
              different icon when the accordion item is collapsed, it is
              necessary to create a custom AccordionButton component.
            </HighlightText>
            <MyFlex>
              <HighlightExample
                h="125px"
                alignItems="flex-start"
                justifyContent="flexstart"
              >
                <Accordion allowToggle w="100%" p={2}>
                  <AccordionItem>
                    <AccordionButton>
                      <HStack w="100%" justifyContent="space-between">
                        <Box>Section 1 Title</Box>
                        <Box>
                          <AccordionIcon as={ArrowDownIcon} boxSize={4} />
                        </Box>
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel pb={4}>Section 1 Content</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Disclosure.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Embedding components in an accordion</b>: you can embed any
              component in an accordion panel. In the following example, there
              is an embedded input form and button within the accordion.
            </HighlightText>
            <MyFlex>
              <HighlightExample
                h="135px"
                alignItems="flex-start"
                justifyContent="flexstart"
              >
                <Accordion allowToggle w="100%" p={2}>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Click for input form
                      </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Input placeholder="Type here..." />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Disclosure.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

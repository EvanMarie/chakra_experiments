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

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

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
                <Highlighter>{`import { 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon, } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <AccordionOne />
                <Disclosure.E01 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AccordionTwo />
                <Disclosure.E02 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AccordionThree />
                <Disclosure.E03 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                {" "}
                <AccordionFour />
                <Disclosure.E04 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                {" "}
                <AccordionFive />
                <Disclosure.E05 />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            Highlight coming soon!
            <MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            Highlight coming soon!<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxTwo>
          <GridBoxThree>
            Highlight coming soon!<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

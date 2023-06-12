import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";

import {
  ComponentHeadingsBar,
  DisclosureComponentBar,
  PageHeader,
} from "~/components/app_components/menuBars";
import {
  AccordionFive,
  AccordionFour,
  AccordionOne,
  AccordionThree,
  AccordionTwo,
} from "~/components/disclosure/accordion";
import {
  TabsEight,
  TabsEleven,
  TabsFifteen,
  TabsFive,
  TabsFour,
  TabsFourteen,
  TabsNine,
  TabsOne,
  TabsSeven,
  TabsSix,
  TabsSixteen,
  TabsTen,
  TabsThirteen,
  TabsThree,
  TabsTwelve,
  TabsTwo,
} from "~/components/disclosure/tabs";
import stylesUrl from "~/styles/global.css";
import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Disclosure from "~/mardownExamples/disclosure/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  HL,
  Mono,
  MyDivider,
  MyLabel,
  SectionContainer,
  colors,
} from "~/styles/reusableChakraComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <VStack>
        <ComponentHeadingsBar />
        <PageHeader
          title="Chakra Disclosure Components"
          href="/chakra_disclosure"
        />

        <DisclosureComponentBar />
      </VStack>

      <SectionContainer>
        <BasicText color={colors.mainAccent3}>
          Chakra UI offers two main components for Disclosure: accordions and
          tabs.
        </BasicText>
        <FlexibleBox bg={colors.myblue} p={4}>
          <BasicText>
            <HL>Accordions</HL> and <HL>tabs</HL> are user interface components
            that can be used to organize and display content in a structured and
            user-friendly way.{" "}
          </BasicText>
          <Box p={4}>
            <BasicText>
              In Chakra UI, the <Mono>Accordion</Mono> component is a wrapper
              that uses <Mono>cloneElement</Mono> to pass props to AccordionItem
              children, while the <Mono>AccordionItem</Mono> component is a
              child of the <Mono>Accordion</Mono> component that can be used to
              display content in a collapsible and expandable manner.{" "}
            </BasicText>
            <BasicText>
              The <Mono>Tabs</Mono> component, on the other hand, can be used to
              create tabbed interfaces in React applications, allowing users to
              switch between different sections of content without leaving the
              page. Both Accordions and Tabs can be used to improve the user
              experience by organizing content in a structured and
              easy-to-navigate way.
            </BasicText>
          </Box>
        </FlexibleBox>
      </SectionContainer>

      <div id="accordion" />
      <MyLabel link="https://chakra-ui.com/docs/components/accordion" size={28}>
        Accordion:
      </MyLabel>
      <Box p={3}>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2}>
          <BasicText color={colors.mainAccent3}>
            ⦾ The <Mono>Accordion</Mono> component in Chakra UI is a versatile
            component that allows you to provide sections of content that can
            expand or collapse to reveal more information. It can be used to
            display a large amount of content in a compact and orderly manner.
          </BasicText>
          <Box paddingX={7} paddingY={2}>
            <BasicText>
              The Accordion component consists of several main parts:
            </BasicText>
            <ul>
              <li>
                <HL>Accordion</HL>: This is the main wrapper that holds all the
                accordion items.
              </li>
              <li>
                <HL>AccordionItem</HL>: This represents a single section of the
                accordion. Each AccordionItem consists of an AccordionButton and
                an AccordionPanel.
              </li>
              <li>
                <HL>AccordionButton</HL>: This is the part of the AccordionItem
                that users can interact with to expand or collapse the
                AccordionPanel.
              </li>
              <li>
                <HL>AccordionPanel</HL>: This is the content area that is shown
                or hidden when a user interacts with the AccordionButton.
              </li>
            </ul>
          </Box>
          <MyDivider mt={2} mb={4} />
          <BasicText>
            Some of the key features of the Accordion component include:
          </BasicText>
          <Box paddingX={7} paddingY={2}>
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
                AccordionItem(s) should be open by default when the component is
                first rendered.
              </li>
            </ul>
          </Box>

          <Box paddingX={4} paddingY={2}>
            <BasicText>
              The <Mono>Accordion</Mono> component in Chakra UI is built with
              inclusivity in mind. The proper <Mono>ARIA</Mono> attributes are
              automatically applied, and the keyboard navigation (using the
              arrow keys, Home, and End buttons) is handled out of the box. This
              makes the Accordion component a robust choice for displaying
              chunked content or information in a more compact, user-friendly
              format.
            </BasicText>
            <BasicText>
              Pressing space or enter when focus is on the accordion panel
              header will toggle (expand or collapse) the accordion.
            </BasicText>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{`import { Accordion, AccordionItem, AccordionButton, 
    AccordionPanel, AccordionIcon, } from '@chakra-ui/react'`}</Highlighter>
            </SectionContainer>
          </Box>
        </SectionContainer>
      </Box>

      {/* COMPONENT EXAMPLES */}
      <Box p={3}>
        <SectionContainer>
          <AccordionOne />
          <Disclosure.E01 />
        </SectionContainer>
        <SectionContainer>
          <AccordionTwo />
          <Disclosure.E02 />
        </SectionContainer>
        <SectionContainer>
          <AccordionThree />
          <Disclosure.E03 />
        </SectionContainer>
        <SectionContainer>
          <AccordionFour />
          <Disclosure.E04 />
        </SectionContainer>
        <SectionContainer>
          <AccordionFive />
          <Disclosure.E05 />
        </SectionContainer>
      </Box>
      <br />
      <div id="tabs" />
      <MyLabel link="https://chakra-ui.com/docs/components/tabs" size={28}>
        Tabs:
      </MyLabel>
      <Box p={3}>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2}>
          <BasicText color={colors.mainAccent3}>
            ⦾ You can render any element within Tabs, but TabList should only
            have Tab as children, and <Mono>TabPanels</Mono> should have{" "}
            <Mono>TabPanel</Mono> as children.{" "}
          </BasicText>
          <BasicText>
            <Mono>Tabs</Mono> expects <Mono>TabList</Mono> and{" "}
            <Mono>TabPanels</Mono> as children. The order doesn't matter, you
            can have <Mono>TabList</Mono> at the top, at the bottom, or both.
          </BasicText>
          <Box paddingX={7} paddingY={3}>
            <ul>
              <li>
                <Mono>Tabs</Mono>: Provides context and state for all components
              </li>
              <li>
                <Mono>TabList</Mono>: Wrapper for the Tab components
              </li>
              <li>
                <Mono>Tab</Mono>: element that serves as a label for one of the
                tab panels and can be activated to display that panel.
              </li>
              <li>
                <Mono>TabPanels</Mono>: Wrapper for the TabPanel components
                TabPanel: element that contains the content associated with a
                tab
              </li>
            </ul>
          </Box>

          <Box paddingX={4} paddingY={2}>
            <BasicText>Some description</BasicText>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{`import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'`}</Highlighter>
            </SectionContainer>
          </Box>
        </SectionContainer>
      </Box>

      {/* COMPONENT EXAMPLES */}
      <Box p={3}>
        <SectionContainer>
          <TabsOne />
          <Disclosure.E06 />
        </SectionContainer>

        <SectionContainer>
          <TabsTwo />
          <Disclosure.E07 />
        </SectionContainer>

        <SectionContainer>
          <TabsThree />
          <Disclosure.E08 />
        </SectionContainer>

        <SectionContainer>
          <TabsFour />
          <Disclosure.E09 />
        </SectionContainer>

        <SectionContainer>
          <TabsFive />
          <Disclosure.E16 />
        </SectionContainer>

        <SectionContainer>
          <TabsSix />
          <Disclosure.E10 />
        </SectionContainer>

        <SectionContainer>
          <TabsSeven />
          <Disclosure.E11 />
        </SectionContainer>

        <SectionContainer>
          <TabsEight />
          <Disclosure.E12 />
        </SectionContainer>

        <SectionContainer>
          <TabsNine />
          <Disclosure.E21 />
        </SectionContainer>

        <SectionContainer>
          <TabsTen />
          <Disclosure.E13 />
        </SectionContainer>

        <SectionContainer>
          <TabsEleven />
          <Disclosure.E14 />
        </SectionContainer>

        <SectionContainer>
          <TabsTwelve />
          <Disclosure.E15 />
        </SectionContainer>

        <SectionContainer>
          <TabsThirteen />
          <Disclosure.E17 />
        </SectionContainer>

        <SectionContainer>
          <TabsFourteen />
          <Disclosure.E18 />
        </SectionContainer>

        <SectionContainer>
          <TabsFifteen />
          <Disclosure.E19 />
        </SectionContainer>

        <SectionContainer>
          <TabsSixteen />
          <Disclosure.E20 />
        </SectionContainer>
      </Box>

      <ComponentHeadingsBar />
    </BigBackgroundBox>
  );
}

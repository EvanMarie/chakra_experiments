import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  // Mono,
  // Flex,
  // Text,
  HL,
  Mono,
  MyDivider,
  colors,
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
import * as Disclosure from "~/mardownExamples/disclosure/index";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
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
} from "./disclosure_examples/tabs";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/tabs" size={28}>
        Tabs
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ You can render any element within Tabs, but TabList should only
              have Tab as children, and <Mono>TabPanels</Mono> should have{" "}
              <Mono>TabPanel</Mono> as children. <Mono>Tabs</Mono> expects{" "}
              <Mono>TabList</Mono> and <Mono>TabPanels</Mono> as children. The
              order doesn't matter, you can have <Mono>TabList</Mono> at the
              top, at the bottom, or both.
            </SectionDescription>

            <BulletBox>
              <ul>
                <li>
                  <Mono>Tabs</Mono>: Provides context and state for all
                  components
                </li>
                <li>
                  <Mono>TabList</Mono>: Wrapper for the Tab components
                </li>
                <li>
                  <Mono>Tab</Mono>: element that serves as a label for one of
                  the tab panels and can be activated to display that panel.
                </li>
                <li>
                  <Mono>TabPanels</Mono>: Wrapper for the TabPanel components
                  TabPanel: element that contains the content associated with a
                  tab
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
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TabsOne />
                <Disclosure.E06 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsTwo />
                <Disclosure.E07 />
                <TabsThree />
                <Disclosure.E08 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFour />
                <Disclosure.E09 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFive />
                <Disclosure.E16 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsSix />
                <Disclosure.E10 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsSeven />
                <Disclosure.E11 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsEight />
                <Disclosure.E12 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsNine />
                <Disclosure.E21 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsTen />
                <Disclosure.E13 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsEleven />
                <Disclosure.E14 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsTwelve />
                <Disclosure.E15 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsThirteen />
                <Disclosure.E17 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFourteen />
                <Disclosure.E18 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFifteen />
                <Disclosure.E19 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsSixteen />
                <Disclosure.E20 />
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

import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, Mono, PlaceholderImage } from "~/styles/DesignComponents";

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
import { EmailIcon, InfoIcon } from "@chakra-ui/icons";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

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
                <MiniCode>{`import { 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel } from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TabsOne />
                <ModalCode>
                  <Disclosure.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsTwo />
                <ModalCode>
                  <Disclosure.E07 />
                </ModalCode>
                <TabsThree />
                <ModalCode>
                  <Disclosure.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFour />
                <ModalCode>
                  <Disclosure.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFive />
                <ModalCode>
                  <Disclosure.E16 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsSix />
                <ModalCode>
                  <Disclosure.E10 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsSeven />
                <ModalCode>
                  <Disclosure.E11 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsEight />
                <ModalCode>
                  <Disclosure.E12 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsNine />
                <ModalCode>
                  <Disclosure.E21 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsTen />
                <ModalCode>
                  <Disclosure.E13 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsEleven />
                <ModalCode>
                  <Disclosure.E14 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsTwelve />
                <ModalCode>
                  <Disclosure.E15 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsThirteen />
                <ModalCode>
                  <Disclosure.E17 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFourteen />
                <ModalCode>
                  <Disclosure.E18 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsFifteen />
                <ModalCode>
                  <Disclosure.E19 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TabsSixteen />
                <ModalCode>
                  <Disclosure.E20 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Nested Tabs</b>: It is possible to nest tabs within other tabs.
              While this can be complex in many UI libraries, Chakra UI makes
              this quite straightforward.
            </HighlightText>
            <MyFlex>
              <HighlightExample>
                <Tabs colorScheme="cyan" w="100%" p={2} h="100%">
                  <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Tabs variant="enclosed" colorScheme="cyan">
                        <TabList>
                          <Tab>Nested Tab 1</Tab>
                          <Tab>Nested Tab 2</Tab>
                        </TabList>

                        <TabPanels>
                          <TabPanel>
                            <p>Nested Tab 1 Content</p>
                          </TabPanel>
                          <TabPanel>
                            <p>Nested Tab 2 Content</p>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </TabPanel>
                    <TabPanel>
                      <p>Tab 2 Content</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Disclosure.H04 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Orientation Control</b>: Chakra UI <b>Tabs</b> have support for
              both horizontal and vertical orientations. This might not be
              immediately apparent to many users, but it can help you create
              unique layouts.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="225px">
                <Tabs
                  orientation="vertical"
                  colorScheme="cyan"
                  w="100%"
                  p={2}
                  h="100%"
                >
                  <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel p={1}>
                      <Text m={0} lineHeight={1}>
                        Tab 1 Content
                      </Text>
                      <PlaceholderImage type={"circles"} colors={26} />
                    </TabPanel>
                    <TabPanel p={1}>
                      <Text m={0} lineHeight={1}>
                        Tab 2 Content
                      </Text>
                      <PlaceholderImage type={"triangles"} colors={26} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Disclosure.H05 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              Chakra UI allows you to use custom icons from any icon library or
              even your own SVG icons. This can be utilized to make your tabs
              more visually appealing and intuitive.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="175px">
                <Tabs colorScheme="cyan" w="100%" p={2} h="100%">
                  <TabList>
                    <Tab>
                      <HStack spacing={2}>
                        <EmailIcon boxSize={4} />
                        <span>Email</span>
                      </HStack>
                    </Tab>
                    <Tab>
                      <HStack spacing={2}>
                        <InfoIcon boxSize={4} />
                        <span>Info</span>
                      </HStack>
                    </Tab>
                  </TabList>
                </Tabs>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Disclosure.H06 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

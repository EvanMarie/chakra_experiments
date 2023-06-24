import {
  Badge,
  Box,
  Card,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
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
  ViewCode,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { PropCard } from "~/components/app_components/PropertiesPanel";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </SectionDescription>
            <BasicText></BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL></HL>: Description
                </li>
                <li>
                  <HL></HL>: Description
                </li>
                <li>
                  <HL></HL>: Description
                </li>
                <li>
                  <HL></HL>: Description
                </li>
                <li>
                  <HL></HL>: Description
                </li>
                <li>
                  <HL></HL>: Description
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>Some description</BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{``}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <Tabs
            position="relative"
            colorScheme="cyan"
            m={0}
            paddingX={0}
            w="100%"
            justifyContent="center"
            alignItems="center"
            isFitted
          >
            <TabList color="accent_2">
              <Tab>Highlights</Tab>
              <Tab>Props</Tab>
              <Tab>Three</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="accent_2"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel p={0}>
                <MyFlex p={0} m={0}>
                  <GridBoxOne>
                    <HighlightText>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?
                    </HighlightText>
                    <MyFlex></MyFlex>
                    <ViewCode></ViewCode>
                  </GridBoxOne>
                  <GridBoxTwo>
                    <HighlightText>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?
                    </HighlightText>
                    <MyFlex></MyFlex>
                    <ViewCode></ViewCode>
                  </GridBoxTwo>
                  <GridBoxThree>
                    <HighlightText>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?
                    </HighlightText>
                    <MyFlex></MyFlex>
                    <ViewCode></ViewCode>
                  </GridBoxThree>
                </MyFlex>
              </TabPanel>

              <TabPanel paddingX={0}>
                <MyFlex p={0} m={0}>
                  <PropCard
                    propName="isLazy"
                    propDescription="Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open."
                  />

                  <PropCard
                    propName="closeOnSelect"
                    propDescription="If true, the menu will close when a menu item is clicked."
                  />

                  <PropCard
                    propName="computePositionOnMount"
                    propDescription="Determines whether to compute the position on mount."
                  />

                  <PropCard
                    propName="defaultIsOpen"
                    propDescription="If true, the menu will be open by default."
                  />

                  <PropCard
                    propName="direction"
                    propDescription="Determines the direction of the menu placement."
                  />

                  <PropCard
                    propName="eventListeners"
                    propDescription="Determines whether the popper will reposition itself on scroll and resize of the window."
                  />

                  <PropCard
                    propName="flip"
                    propDescription="Determines if the popper will flip when it's about to overflow its boundary area."
                  />

                  <PropCard
                    propName="gutter"
                    propDescription="The distance or margin between the reference and popper."
                  />

                  <PropCard
                    propName="id"
                    propDescription="The unique identifier for the component."
                  />

                  <PropCard
                    propName="initialFocusRef"
                    propDescription="The ref of the element that should receive focus when the popover opens."
                  />

                  <PropCard
                    propName="isOpen"
                    propDescription="If true, the menu is open."
                  />

                  <PropCard
                    propName="lazyBehavior"
                    propDescription="Determines the lazy behavior of the menu's content when not visible."
                  />

                  <PropCard
                    propName="matchWidth"
                    propDescription="If true, the popper will match the width of the reference at all times."
                  />

                  <PropCard
                    propName="modifiers"
                    propDescription="An array of popper.js modifiers."
                  />

                  <PropCard
                    propName="offset"
                    propDescription="The offset to displace the popper element from its reference element."
                  />

                  <PropCard
                    propName="onClose"
                    propDescription="A function to be called when the menu is closed."
                  />

                  <PropCard
                    propName="onOpen"
                    propDescription="A function to be called when the menu is opened."
                  />

                  <PropCard
                    propName="placement"
                    propDescription="The placement of the popper relative to its reference."
                  />

                  <PropCard
                    propName="preventOverflow"
                    propDescription="Determines if the popper will prevent overflow and ensure visibility."
                  />

                  <PropCard
                    propName="strategy"
                    propDescription="The CSS positioning strategy to use."
                  />

                  <PropCard propName="MenuButton Props#" />

                  <PropCard propName="MenuList Props#" />

                  <PropCard
                    propName="motionProps"
                    propDescription="The framer-motion props to animate the menu list."
                  />

                  <PropCard
                    propName="rootProps"
                    propDescription="Props for the root element that positions the menu."
                  />

                  <PropCard propName="MenuItem Props#" />

                  <PropCard
                    propName="closeOnSelect"
                    propDescription="Overrides the parent menu's closeOnSelect prop."
                  />

                  <PropCard
                    propName="command"
                    propDescription="Right-aligned label text content, useful for displaying hotkeys."
                  />

                  <PropCard
                    propName="commandSpacing"
                    propDescription="The spacing between the command and menu item's label."
                  />

                  <PropCard
                    propName="icon"
                    propDescription="The icon to render before the menu item's label."
                  />
                </MyFlex>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

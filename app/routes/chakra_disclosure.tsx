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

import {
  BasicText,
  BigBackgroundBox,
  Mono,
  MyLabel,
  SectionContainer,
  colors,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
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

      <div id="accordion" />
      <MyLabel link="https://chakra-ui.com/docs/components/accordion" size={28}>
        Accordion:
      </MyLabel>
      <SectionContainer bg={colors.mainAccent4}>
        <BasicText>
          Pressing space or enter when focus is on the accordion panel header
          will toggle (expand or collapse) the accordion.
        </BasicText>
      </SectionContainer>

      <SectionContainer>
        <AccordionOne />
      </SectionContainer>
      <SectionContainer>
        <AccordionTwo />
      </SectionContainer>
      <SectionContainer>
        <AccordionThree />
      </SectionContainer>
      <SectionContainer>
        <AccordionFour />
      </SectionContainer>
      <SectionContainer>
        <AccordionFive />
      </SectionContainer>

      <br />
      <div id="tabs" />
      <MyLabel link="https://chakra-ui.com/docs/components/tabs" size={28}>
        Tabs:
      </MyLabel>

      <SectionContainer bg={colors.mainAccent4}>
        <Box paddingX={5}>
          <ul>
            <li>
              <b>Tabs</b>: Provides context and state for all components
            </li>
            <li>
              <b>TabList</b>: Wrapper for the Tab components
            </li>
            <li>
              <b>Tab</b>: element that serves as a label for one of the tab
              panels and can be activated to display that panel.
            </li>
            <li>
              <b>TabPanels</b>: Wrapper for the TabPanel components TabPanel:
              element that contains the content associated with a tab
            </li>
          </ul>
          <br />
          <p>
            You can render any element within Tabs, but TabList should only have
            Tab as children, and <Mono>TabPanels</Mono> should have{" "}
            <Mono>TabPanel</Mono> as children.{" "}
          </p>
          <br />
          <p>
            <Mono>Tabs</Mono> expects <Mono>TabList</Mono> and{" "}
            <Mono>TabPanels</Mono> as children. The order doesn't matter, you
            can have <Mono>TabList</Mono> at the top, at the bottom, or both.
          </p>
        </Box>
      </SectionContainer>
      <SectionContainer>
        <TabsOne />
      </SectionContainer>

      <SectionContainer>
        {" "}
        <TabsTwo />
      </SectionContainer>

      <SectionContainer>
        <TabsThree />
      </SectionContainer>

      <SectionContainer>
        <TabsFour />
      </SectionContainer>

      <SectionContainer>
        <TabsFive />
      </SectionContainer>

      <SectionContainer>
        <TabsSix />
      </SectionContainer>

      <SectionContainer>
        <TabsSeven />
      </SectionContainer>

      <SectionContainer>
        <TabsEight />
      </SectionContainer>

      <SectionContainer>
        <TabsNine />
      </SectionContainer>

      <SectionContainer>
        <TabsTen />
      </SectionContainer>

      <SectionContainer>
        <TabsEleven />
      </SectionContainer>

      <SectionContainer>
        <TabsTwelve />
      </SectionContainer>

      <SectionContainer>
        <TabsThirteen />
      </SectionContainer>

      <SectionContainer>
        <TabsFourteen />
      </SectionContainer>

      <SectionContainer>
        <TabsFifteen />
      </SectionContainer>

      <SectionContainer>
        <TabsSixteen />
      </SectionContainer>

      <ComponentHeadingsBar />
    </BigBackgroundBox>
  );
}

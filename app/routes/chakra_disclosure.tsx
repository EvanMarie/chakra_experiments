import { Box, HStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import { ComponentButtonBar } from "~/components/ButtonBar";
import {
  AccordionFive,
  AccordionFour,
  AccordionOne,
  AccordionThree,
  AccordionTwo,
} from "~/components/accordion";
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
} from "~/components/tabs";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BigBackgroundBox,
  MyButton,
  MyHeading,
  MyLabel,
  sectionMenuButtons,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <ComponentButtonBar />
      <MyHeading>Chakra Disclosure Components:</MyHeading>

      <HStack>
        <MyButton label="Accordion" href="#accordion" {...sectionMenuButtons} />
        <MyButton label="Tabs" href="#tags" {...sectionMenuButtons} />
      </HStack>

      <div id="accordion" />
      <MyLabel link="https://chakra-ui.com/docs/components/accordion" size={28}>
        Accordion:
      </MyLabel>
      <BasicText>
        Pressing space or enter when focus is on the accordion panel header will
        toggle (expand or collapse) the accordion.
      </BasicText>
      <AccordionOne />
      <AccordionTwo />
      <AccordionThree />
      <AccordionFour />
      <AccordionFive />
      <br />
      <div id="tags" />
      <MyLabel link="https://chakra-ui.com/docs/components/tabs" size={28}>
        Tabs:
      </MyLabel>

      <Box paddingX={5}>
        <ul>
          <li>Tabs: Provides context and state for all components</li>
          <li>TabList: Wrapper for the Tab components</li>
          <li>
            Tab: element that serves as a label for one of the tab panels and
            can be activated to display that panel.
          </li>
          <li>
            TabPanels: Wrapper for the TabPanel components TabPanel: element
            that contains the content associated with a tab
          </li>
        </ul>
        <p>
          You can render any element within Tabs, but TabList should only have
          Tab as children, and TabPanels should have TabPanel as children.{" "}
        </p>
        <br />
        <p>
          Tabs expects TabList and TabPanels as children. The order doesn't
          matter, you can have TabList at the top, at the bottom, or both.
        </p>
      </Box>
      <TabsOne />
      <TabsTwo />
      <TabsThree />
      <TabsFour />
      <TabsFive />
      <TabsSix />
      <TabsSeven />
      <TabsEight />
      <TabsNine />
      <TabsTen />
      <TabsEleven />
      <TabsTwelve />
      <TabsThirteen />
      <TabsFourteen />
      <TabsFifteen />
      <TabsSixteen />
      <ComponentButtonBar />
    </BigBackgroundBox>
  );
}

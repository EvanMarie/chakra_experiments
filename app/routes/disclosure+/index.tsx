import { LinkIcon } from "@chakra-ui/icons";
import { Box, Link, VStack } from "@chakra-ui/react";
import { BasicText, FlexibleBox, HL, Mono } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_disclosure() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components">
        Chakra UI: Disclosure
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Chakra UI's Disclosure components provide a set of accessible and
            reusable components that you can use to build common web
            interactions like accordions, tooltips, and menus. These components
            aim to follow the WAI-ARIA Disclosure Pattern, providing enhanced
            accessibility. At the core of these components are the concepts of
            disclosure and hiding content, or in simpler terms, showing and
            hiding parts of your UI based on user interactions.
          </SectionDescription>
          <BasicText>
            Chakra UI offers two main components for Disclosure: accordions and
            tabs. <Mono>Accordions</Mono> and <Mono>tabs</Mono> are user
            interface components that can be used to organize and display
            content in a structured and user-friendly way.{" "}
          </BasicText>
          <BasicText>
            In Chakra UI, the <Mono>Accordion</Mono> component is a wrapper that
            uses <Mono>cloneElement</Mono> to pass props to AccordionItem
            children, while the <Mono>AccordionItem</Mono> component is a child
            of the <Mono>Accordion</Mono> component that can be used to display
            content in a collapsible and expandable manner.{" "}
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/disclosure/accordion">
                    <HL>Accordion 🔗</HL>
                  </Link>
                  : a UI pattern where content panels are visible often at a
                  time. The Accordion component is a vertically stacked set of
                  interactive headings (or "panels") that each contain a title
                  and a section of content. The primary use case for this is to
                  collapse and expand content panels to provide a more
                  manageable view to the user and reduce information overload.
                  When a user clicks on a panel's title, the content section
                  expands to reveal the content. If another panel is clicked,
                  the previous panel often automatically closes, and the new
                  panel's content expands.
                </BasicText>{" "}
              </li>
              <li>
                <BasicText>
                  <Link href="/disclosure/tabs">
                    <HL>Tabs 🔗</HL>
                  </Link>
                  : can be used to create tabbed interfaces in React
                  applications, allowing users to switch between different
                  sections of content without leaving the page.{" "}
                  <Mono>Tabs</Mono> are also a common pattern for segmenting
                  identical data into multiple blocks. The <Mono>Tabs</Mono>{" "}
                  component is used to organize and allow navigation between
                  groups of content that are related and at the same level of
                  hierarchy. In essence, they are like "lightweight" pages
                  within a page. Each Tab is associated with{" "}
                  <Mono>TabPanel</Mono>, and only one <Mono>TabPanel</Mono> is
                  active and visible at a time. When a user clicks on a
                  different Tab, its associated <Mono>TabPanel</Mono> becomes
                  visible, and the previous TabPanel is hidden.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  Both Accordions and Tabs can be used to improve the user
                  experience by organizing content in a structured and
                  easy-to-navigate way.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
          <Box>
            <BasicText>
              Use the navigation menu to learn more about each component
              individually.
            </BasicText>
          </Box>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

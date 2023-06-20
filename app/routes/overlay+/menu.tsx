import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

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

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/menu" size={28}>
        Menu
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ <b>Unleashing the Potential of Chakra UI's Menu Component</b>:
              Dropdown menus are a common design pattern that adds functionality
              and interactivity to websites. If you're seeking an accessible and
              feature-rich solution to implement this pattern, look no further
              than Chakra UI's Menu component. With its focus management
              capabilities and versatile options, Chakra UI empowers you to
              create seamless and user-friendly menus.
            </SectionDescription>
            <BasicText>
              The <Mono>Menu</Mono> component in Chakra UI serves as a wrapper,
              providing essential context, state, and focus management for your
              menus. It acts as a central hub, facilitating the smooth operation
              of various menu-related elements. But the power of Chakra UI
              extends beyond the <Mono>Menu</Mono> component alone. Let's
              explore the components that complement and enhance its
              functionality:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>MenuList</HL>: This component serves as a container for
                  your menu items. It ensures proper structuring and
                  organization of your menu content. Remember, the{" "}
                  <Mono>MenuList</Mono> should always be a direct child of the{" "}
                  <Mono>Menu</Mono> component.
                </li>
                <li>
                  <HL>MenuButton</HL>: Acting as the trigger for the menu list,
                  the <Mono>MenuButton</Mono> handles the opening and closing of
                  the menu when interacted with. It simplifies the user
                  experience by providing a clear way to access the menu items.
                </li>
                <li>
                  <HL>MenuItem</HL>: As a direct child of the{" "}
                  <Mono>MenuList</Mono>, the <Mono>MenuItem</Mono> component
                  handles the selection logic for your menu. It allows users to
                  interact with the menu items effortlessly, making their
                  navigation more intuitive.
                </li>
                <li>
                  <HL>MenuGroup</HL>: If you have related menu items that need
                  to be grouped together, the <Mono>MenuGroup</Mono> component
                  comes in handy. It enables you to organize and categorize your
                  menu options, improving the overall user experience.
                </li>
                <li>
                  <HL>MenuDivider</HL>: Visual separators play a crucial role in
                  menu design, enhancing clarity and structure. The{" "}
                  <Mono>MenuDivider</Mono> component allows you to create
                  visually appealing menus by adding clear distinctions between
                  items and groups.
                </li>
                <li>
                  <HL>MenuOptionGroup</HL>: For menus with checkable items like
                  radio buttons or checkboxes, the <Mono>MenuOptionGroup</Mono>{" "}
                  component simplifies the process. It provides a wrapper to
                  group and manage these selectable options, making it easier
                  for users to make their choices.
                </li>
                <li>
                  <HL>MenuItemOption</HL>: This component works in conjunction
                  with the <Mono>MenuOptionGroup</Mono>, providing the checkable
                  menu item functionality. It allows users to make selections
                  within the menu, creating a cohesive and interactive
                  experience.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                Chakra UI's <Mono>Menu</Mono> component, along with its
                complementary components, offers a comprehensive set of tools to
                elevate your website's menu design. Furthermore, Chakra UI's
                theming capabilities ensure that your menus seamlessly integrate
                with your overall design aesthetic.
              </BasicText>

              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'`}</Highlighter>
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
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

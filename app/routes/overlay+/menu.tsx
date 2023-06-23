import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
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
  SectionHeading,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Overlay from "~/mardownExamples/overlay/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  MenuOne,
  MenuTwo,
  MenuThree,
  MenuFour,
  MenuFive,
  MenuSix,
  MenuSeven,
  MenuEight,
} from "~/components/overlay/menuComponents";
import {
  FormMenuExample,
  SplitMenuButton,
} from "~/components/overlay/menuFunctions";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
                <MiniCode>{`import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <MenuOne />
                <ModalCode>
                  <Overlay.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MenuTwo />
                <ModalCode>
                  <Overlay.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MenuThree />
                <ModalCode>
                  <Overlay.E10 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MenuFour />
                <ModalCode>
                  <Overlay.E11 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MenuFive />
                <ModalCode>
                  <Overlay.E12 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MenuSix />
                <ModalCode>
                  <Overlay.E13 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MenuSeven />
                <ModalCode>
                  <Overlay.E14 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MenuEight />
                <ModalCode>
                  <Overlay.E15 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SectionHeading>Additional functionality</SectionHeading>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Lazy Mounting of Menu Items</HL>: YBy default, the Menu
                    component in Chakra UI renders all children of the MenuList
                    to the DOM, even if they are not visible. However, there
                    might be situations where you want to defer the rendering of
                    each menu item until the menu is actually opened. To achieve
                    this, you can utilize the isLazy prop. This feature is
                    particularly useful if you aim to optimize the performance
                    of your Menu or if you need to make network calls or perform
                    certain actions on mount that should only occur when the
                    menu is displayed to the user.
                  </li>
                  <li>
                    <HL>Rendering Menu in a Portal</HL>: To achieve greater
                    flexibility and control over the placement and behavior of
                    menus, Chakra UI provides the option to render menus in a
                    portal. This is accomplished by importing the Portal
                    component and wrapping the MenuList within it. Let's explore
                    the benefits and use cases of rendering menus in a portal.
                    <BasicText>
                      By utilizing a portal, you gain the ability to render the
                      menu outside of its parent component's DOM hierarchy. This
                      allows you to control the menu's positioning and ensure it
                      appears exactly where desired, even in complex layouts or
                      nested components. It provides greater control over
                      z-index stacking and avoids potential overflow or clipping
                      issues that may occur within parent components.
                    </BasicText>
                    <BasicText>
                      This can be implemented simply by wrapping the{" "}
                      <Mono>MenuList</Mono> component inside of a{" "}
                      <Mono>Portal</Mono> component.
                    </BasicText>
                  </li>
                  <li>
                    <HL>Sorting and Filtering with Menu Option Groups</HL>: In
                    Chakra UI, you have the ability to compose a menu for table
                    headers that facilitates sorting and filtering operations.
                    This can be achieved by utilizing the MenuOptionGroup and
                    MenuItemOption components. Let's explore how to leverage
                    these components to create dynamic and interactive menu
                    option groups.
                    <BasicText>
                      The MenuOptionGroup component allows you to group related
                      menu options together. It acts as a wrapper for the
                      MenuItemOption components, which represent individual
                      options within the group. This approach is particularly
                      useful when dealing with table headers that require
                      sorting or filtering capabilities.
                    </BasicText>
                    <BasicText>
                      The following shows how to implement this functionality:
                    </BasicText>
                    <ModalCode>
                      <Highlighter>{`<Menu>
  <MenuButton>Open menu</MenuButton>
  <MenuList>
    <MenuOptionGroup defaultValue="name" type="radio">
      <MenuItemOption value="name">Sort by Name</MenuItemOption>
      <MenuItemOption value="date">Sort by Date</MenuItemOption>
      <MenuItemOption value="price">Sort by Price</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>`}</Highlighter>
                    </ModalCode>
                  </li>
                </ul>
              </BulletBox>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              Chakra UI's <b>Menu</b> component can be integrated seamlessly
              with form controls. By utilizing the <b>useDisclosure</b> hook
              from Chakra UI, you can create a menu that functions as a custom
              dropdown select component. Let's consider an example where we use
              a <b>Menu</b> to pick a fruit from a list and show the chosen
              fruit in a text box.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="120px">
                <FormMenuExample />
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Overlay.H07 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Custom Menu Divider</b>: In Chakra UI, you have the flexibility
              to style the <b>MenuDivider</b> to fit your design. You can change
              its color, thickness, margin, or add any other CSS properties. You
              can use the <b>_focus</b> property to change its color when it
              receives focus. In the following example, the color of the{" "}
              <b>MenuDivider</b> is set to <b>purple.500</b>, its thickness is
              set to <b>2px</b>, and the margin is set to <b>10px</b> on top and
              bottom.
            </HighlightText>
            <MyFlex>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="purple.500"
                  color="white"
                  _hover={{ bg: "purple.600" }}
                >
                  Actions
                </MenuButton>
                <MenuList color="black">
                  <MenuItem>Option 1</MenuItem>
                  <MenuDivider
                    borderColor="purple.500"
                    borderWidth={2}
                    m={2}
                    _focus={{ borderColor: "pink.500" }}
                  />
                  <MenuItem>Option 2</MenuItem>
                </MenuList>
              </Menu>
            </MyFlex>
            <ModalCode>
              <Overlay.H08 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Split Button Dropdown Menu</b>: This example is a variation of
              a split button, which is essentially a button with a default
              action, and an attached list of alternatives. The main button (the
              one on the left) displays the current action (initially 'Default
              Action'), and it performs this action when clicked. The smaller
              button (the one on the right with the chevron icon) opens a
              dropdown menu with alternative actions.
              <br />
              This saves space by grouping related actions in a compact UI
              component, making it beneficial for limited screen real estate.
              Additionally, it enables the dynamic updating of the default
              action based on the user's selection from the dropdown menu,
              allowing for efficient repetition of the most recent action.
            </HighlightText>
            <MyFlex>
              <SplitMenuButton />
            </MyFlex>
            <ModalCode>
              <Overlay.H09 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  ComponentHeadingsBar,
  FeedbackComponentBar,
  OverlayComponentBar,
  PageHeader,
} from "~/components/app_components/menuBars";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  HL,
  Mono,
  MyLabel,
  SectionContainer,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  AlertDialogueOne,
  AlertDialogueTwo,
} from "~/components/overlay/alertDialog";
import { DrawerOne } from "~/components/overlay/drawer";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import styles from "~/styles/codeMarkdown.css";
import * as Overlay from "~/mardownExamples/overlay/index";

hljs.registerLanguage("javascript", javascript);
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_overlay() {
  return (
    <BigBackgroundBox>
      <VStack>
        <ComponentHeadingsBar />
        <PageHeader title="Chakra Overlay Components" href="/chakra_overlay" />

        <OverlayComponentBar />
      </VStack>
      <SectionContainer>
        <BasicText color={colors.mainAccent3}>
          Overlay components in Chakra UI are used to create elements that float
          above the main application content. They are useful for displaying
          additional information or interactive content without navigating away
          from the current context. These components can provide a more
          intuitive and engaging user experience, as they allow users to stay in
          their current workflow while accessing extra features or information.
        </BasicText>
        <FlexibleBox bg={colors.myblue} p={4}>
          <Box>
            <BasicText>Here's an overview of each component:</BasicText>
          </Box>
          <Box p={4}>
            <ul>
              <li>
                <BasicText>
                  <HL>Alert Dialog</HL>: An Alert Dialog is a type of overlay
                  that seeks the user's immediate attention. It's often used for
                  critical alerts that require the user to respond before they
                  can proceed. The Alert Dialog cannot be dismissed by clicking
                  outside the dialog area, ensuring that the user has seen the
                  alert and acted upon it.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Drawer</HL>: Drawers provide a way to display content that
                  is not immediately visible but can be brought into view by the
                  user. They slide in from the edges of the screen, often used
                  for navigation menus on mobile devices or for additional
                  context that doesn't disrupt the main content flow.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Menu</HL>: A Menu is a list of options or actions that
                  appears over the main content. It's typically triggered by a
                  button or other interactive element, and disappears when an
                  option is selected or when the user clicks away.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Modal</HL> : A Modal is a dialog box or content overlay
                  that requires user interaction. It's used for tasks like
                  collecting input from the user or confirming actions. Modals
                  typically disable interaction with the rest of the application
                  until they are dismissed.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Popover</HL>: A Popover is similar to a Menu, but is often
                  used to contain more complex content than just a list of
                  options. Popovers can include things like form inputs, rich
                  text, or interactive components.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Tooltip</HL>: A Tooltip is a small piece of informational
                  text that appears when the user hovers over or focuses on an
                  element. Tooltips are useful for providing extra information
                  about a button or feature without cluttering the interface.
                </BasicText>
              </li>
            </ul>
          </Box>
        </FlexibleBox>
      </SectionContainer>
      <HStack wrap="wrap"></HStack>
      <div id="alert_dialog" />
      <MyLabel
        link="https://chakra-ui.com/docs/components/alert-dialog"
        size={28}
      >
        Alert Dialog:
      </MyLabel>
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>
            The Alert Dialog is a component that allows you to display a dialog
            box with a <Mono>title</Mono>, <Mono>description</Mono>, and{" "}
            <Mono>action</Mono> buttons. It is commonly used to confirm or
            reject an action.
          </BasicText>
          <BasicText>
            It is ued to interrupt the user with a mandatory confirmation or
            action.
          </BasicText>
          <BasicText>
            There are 7 different Alert Dialog related components:
          </BasicText>
          <Box paddingX={10}>
            <BasicText>
              1. <Mono>AlertDialog</Mono> used to create a dialog box with a{" "}
              <Mono>title</Mono>, <Mono>body</Mono>, <Mono>content</Mono>, and
              optional <Mono>footer</Mono>. It is typically used to display
              important messages or ask for user confirmation.
            </BasicText>
            <BasicText>
              2. <Mono>AlertDialogHeader</Mono> represents the header section of
              the <Mono>AlertDialog</Mono>. It typically contains the{" "}
              <Mono>title</Mono> or <Mono>heading</Mono> of the dialog.
            </BasicText>
            <BasicText>
              3. <Mono>AlertDialogBody</Mono> represents the main content area
              of the <Mono>AlertDialog</Mono>. It is used to display the main
              message or content within the dialog.
            </BasicText>
            <BasicText>
              4. <Mono>AlertDialogContent</Mono> a wrapper that contains the
              header, body, and footer components of the{" "}
              <Mono>AlertDialog</Mono>. It helps in structuring and styling the
              content within the dialog.
            </BasicText>
            <BasicText>
              5. <Mono>AlertDialogFooter</Mono> represents the{" "}
              <Mono>footer</Mono> section of the <Mono>AlertDialog</Mono>. It is
              typically used to display action buttons such as "Confirm" or
              "Cancel" for user interaction.
            </BasicText>

            <BasicText>
              6. <Mono>AlertDialogOverlay</Mono> a full-screen overlay that is
              rendered behind the <Mono>AlertDialog</Mono>. It helps to create a
              modal-like behavior by covering the rest of the UI and focusing
              the user's attention on the dialog.
            </BasicText>
            <BasicText>
              7. <Mono>AlertDialogCloseButton</Mono> is a close button typically
              placed in the top-right corner of the <Mono>AlertDialog</Mono>. It
              allows the user to close the dialog without taking any action.
            </BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>
              The statement "AlertDialog requires that you provide the{" "}
              <Mono>leastDestructiveRef</Mono> prop" means that when using the{" "}
              <Mono>AlertDialog</Mono> component from Chakra UI, it expects you
              to provide a reference to the least destructive element in the
              dialog using the {""}
              <Mono>leastDestructiveRef</Mono> prop.
            </BasicText>
            <BasicText>
              {" "}
              In the context of an <Mono>AlertDialog</Mono>, a "destructive
              action" refers to an action that may have significant consequences
              or irreversible effects, such as deleting data. To prevent users
              from accidentally confirming a destructive action, it is important
              to place the initial focus on the least destructive element within
              the dialog.
            </BasicText>
            <BasicText>
              {" "}
              By providing the <Mono>leastDestructiveRef</Mono> prop with a
              reference to the least destructive element, the{" "}
              <Mono>AlertDialog</Mono> {""}
              component ensures that when the dialog opens, the focus is
              automatically set to that element. This helps users navigate and
              interact with the dialog safely, reducing the likelihood of
              unintentional destructive actions.{" "}
            </BasicText>
            <BasicText>
              The requirement to provide the <Mono>leastDestructiveRef</Mono>{" "}
              prop aligns with the WAI-ARIA (Web Accessibility Initiative -
              Accessible Rich Internet Applications) specifications, which
              provide guidelines for creating accessible web content. Following
              these specifications helps ensure that dialogs are usable and
              accessible to all users, including those who rely on keyboard
              navigation or assistive technologies.{" "}
            </BasicText>
          </FlexibleBox>
        </SectionContainer>
        <SectionContainer>
          <AlertDialogueOne />
          <Overlay.E01 />
        </SectionContainer>
        <SectionContainer>
          <AlertDialogueTwo />
          <Overlay.E02 />
        </SectionContainer>
      </Box>
      <div id="drawer" />
      <MyLabel link="https://chakra-ui.com/docs/components/drawer" size={28}>
        Drawer:
      </MyLabel>
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>
            The Chakra UI Drawer component is a versatile component that
            provides a slide-in panel that can be used for various purposes such
            as displaying menus, sidebars, or modal-like content. It is commonly
            used to present additional options or information without taking up
            too much space on the screen.
          </BasicText>
          <Box paddingX={10}></Box>
          <FlexibleBox bg={colors.myblue}>
            <Box paddingX={7} paddingY={2} m={1}>
              <BasicText>
                The Chakra Drawer component offers several features and
                customization options:
              </BasicText>
            </Box>
            <Box paddingX={12} paddingY={1} m={1}>
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <BasicText>
                    <b>Placement</b>: You can specify the placement of the
                    drawer, such as "left", "right", "top", or "bottom", to
                    determine from which direction it will slide into view.
                  </BasicText>
                </li>{" "}
                <li>
                  <BasicText>
                    <b>Size</b>: You can control the size of the drawer by
                    setting the size prop to values like "xs", "sm", "md", "lg",
                    or "xl", or you can provide custom values.{" "}
                  </BasicText>
                </li>{" "}
                <li>
                  <BasicText>
                    <b>Overlay</b>: The drawer component automatically adds an
                    overlay to the rest of the screen when it is open, making
                    the content outside the drawer less prominent. The overlay
                    can be customized with various properties such as opacity
                    and background color.{" "}
                  </BasicText>
                </li>{" "}
                <li>
                  <BasicText>
                    <b>Animation</b>: The drawer component provides smooth
                    animation when opening and closing. You can customize the
                    animation using CSS transitions or other animation
                    libraries.{" "}
                  </BasicText>
                </li>{" "}
                <li>
                  <BasicText>
                    <b>Controlled or Uncontrolled</b>: You have the flexibility
                    to use the drawer as a controlled or uncontrolled component.
                    You can manually control its open/close state, or you can
                    use the <Mono>isOpen</Mono> and <Mono>onClose</Mono> props
                    to let Chakra UI handle the state for you.{" "}
                  </BasicText>
                </li>{" "}
                <li>
                  <BasicText>
                    Accessibility: The Chakra Drawer component is built with
                    accessibility in mind. It ensures proper focus management
                    and screen reader compatibility.
                  </BasicText>
                </li>
              </ul>
              <BasicText>
                To use the Chakra Drawer component, you need to import it from
                the Chakra UI library and place its content inside the
                component. You can control the visibility of the drawer by
                toggling its open state using the isOpen prop.
              </BasicText>
            </Box>
          </FlexibleBox>
        </SectionContainer>
        <SectionContainer>
          <DrawerOne />
        </SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>{" "}
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>Text</BasicText>

          <Box paddingX={10}>
            <BasicText>Text</BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>Text</BasicText>
          </FlexibleBox>
        </SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>{" "}
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>Text</BasicText>

          <Box paddingX={10}>
            <BasicText>Text</BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>Text</BasicText>
          </FlexibleBox>
        </SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
    </BigBackgroundBox>
  );
}

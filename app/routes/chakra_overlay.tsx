import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  ComponentHeadingsBar,
  FeedbackComponentBar,
  PageHeader,
} from "~/components/menuBars";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyLabel,
  SectionContainer,
} from "~/styles/reusableChakraComponents";
import { AlertDialogueOne } from "~/components/alertDialog";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_overlay() {
  return (
    <BigBackgroundBox>
      <VStack>
        <ComponentHeadingsBar />
        <PageHeader title="Chakra Overlay Components" href="/chakra_overlay" />

        <FeedbackComponentBar />
      </VStack>
      <HStack wrap="wrap"></HStack>
      <div id="alert_dialog" />
      <MyLabel
        link="https://chakra-ui.com/docs/components/alert-dialog"
        size={28}
      >
        Alert Dialog:
      </MyLabel>
      <Box>
        <SectionContainer>
          <BasicText>
            The Alert Dialog is a component that allows you to display a dialog
            box with a <b>title</b>, <b>description</b>, and <b>action</b>
            buttons. It is commonly used to confirm or reject an action.
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
              1. <b>AlertDialog</b> used to create a dialog box with a{" "}
              <b>title</b>,<b>body</b>, <b>content</b>, and optional{" "}
              <b>footer</b>. It is typically used to display important messages
              or ask for user confirmation.
            </BasicText>
            <BasicText>
              2. <b>AlertDialogHeader</b>represents the header section of the
              <b>AlertDialog</b>. It typically contains the <b>title</b> or
              <b>heading</b> of the dialog.
            </BasicText>
            <BasicText>
              3. <b>AlertDialogBody</b>represents the main content area of the
              <b>AlertDialog</b>. It is used to display the main message or
              content within the dialog.
            </BasicText>
            <BasicText>
              4. <b>AlertDialogContent</b> a wrapper that contains the header,
              body, and footer components of the <b>AlertDialog</b>. It helps in
              structuring and styling the content within the dialog.
            </BasicText>
            <BasicText>
              5. <b>AlertDialogFooter</b> represents the <b>footer</b> section
              of the
              <b>AlertDialog</b>. It is typically used to display action buttons
              such as "Confirm" or "Cancel" for user interaction.
            </BasicText>

            <BasicText>
              6. <b>AlertDialogOverlay</b> a full-screen overlay that is
              rendered behind the <b>AlertDialog</b>. It helps to create a
              modal-like behavior by covering the rest of the UI and focusing
              the user's attention on the dialog.
            </BasicText>
            <BasicText>
              7. <b>AlertDialogCloseButton</b> is a close button typically
              placed in the top-right corner of the <b>AlertDialog</b>. It
              allows the user to close the dialog without taking any action.
            </BasicText>
          </Box>
          <FlexibleBox p={3} m={3}>
            <BasicText color="black">
              The statement "AlertDialog requires that you provide the
              <b>leastDestructiveRef</b> prop" means that when using the <b></b>
              AlertDialog component from Chakra UI, it expects you to provide a
              reference to the least destructive element in the dialog using the{" "}
              {""}
              <b>leastDestructiveRef</b> prop.
            </BasicText>
            <BasicText color="black">
              {" "}
              In the context of an <b>AlertDialog</b>, a "destructive action"
              refers to an action that may have significant consequences or
              irreversible effects, such as deleting data. To prevent users from
              accidentally confirming a destructive action, it is important to
              place the initial focus on the least destructive element within
              the dialog.
            </BasicText>
            <BasicText color="black">
              {" "}
              By providing the <b>leastDestructiveRef</b> prop with a reference
              to the least destructive element, the <b>AlertDialog</b> {""}
              component ensures that when the dialog opens, the focus is
              automatically set to that element. This helps users navigate and
              interact with the dialog safely, reducing the likelihood of
              unintentional destructive actions.{" "}
            </BasicText>
            <BasicText color="black">
              The requirement to provide the <b>leastDestructiveRef</b> prop
              aligns with the WAI-ARIA (Web Accessibility Initiative -
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
        </SectionContainer>
        <SectionContainer>EX 2</SectionContainer>
        <SectionContainer>EX 3</SectionContainer>
        <SectionContainer>EX 4</SectionContainer>
        <SectionContainer>EX 5</SectionContainer>
      </Box>
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <Box>
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
      <Box>
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
      <Box>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
    </BigBackgroundBox>
  );
}

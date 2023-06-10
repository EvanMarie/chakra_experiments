import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  ComponentHeadingsBar,
  FeedbackComponentBar,
  PageHeader,
} from "~/components/app_components/menuBars";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  Mono,
  MyLabel,
  SectionContainer,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  AlertDialogueOne,
  AlertDialogueTwo,
} from "~/components/overlay/alertDialog";
import { Experiment } from "~/styles/codeExamples";

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
        </SectionContainer>
        <SectionContainer>
          <AlertDialogueTwo />
        </SectionContainer>
      </Box>
      <div id="drawer" />
      <MyLabel link="https://chakra-ui.com/docs/components/drawer" size={28}>
        Drawer:
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

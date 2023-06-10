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
  MyLabel,
  SectionContainer,
} from "~/styles/reusableChakraComponents";

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
      <SectionContainer>
        <BasicText>
          The Alert Dialog is a component that allows you to display a dialog
          box with a title, description, and action buttons. It is commonly used
          to confirm or reject an action.
        </BasicText>
        <BasicText>
          It is ued to interrupt the user with a mandatory confirmation or
          action.
        </BasicText>
        <BasicText>
          There are 7 different Alert Dialog related components:
          <Box>
            <BasicText>
              1. <b>AlertDialog</b> used to create a dialog box with a title,
              body content, and optional footer. It is typically used to display
              important messages or ask for user confirmation.
            </BasicText>
            <BasicText>
              2. <b>AlertDialogHeader</b>represents the header section of the
              <b>AlertDialog</b>. It typically contains the title or heading of
              the dialog.
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
              5. <b>AlertDialogFooter</b> represents the footer section of the
              <b>AlertDialog</b>. It is typically used to display action buttons
              such as "Confirm" or "Cancel" for user interaction.
            </BasicText>

            <BasicText>
              6. <b>AlertDialogOverlay</b> a full-screen overlay that is
              rendered behind the AlertDialog. It helps to create a modal-like
              behavior by covering the rest of the UI and focusing the user's
              attention on the dialog.
            </BasicText>
            <BasicText>
              7. <b>AlertDialogCloseButton</b> is a close button typically
              placed in the top-right corner of the <b>AlertDialog</b>. It
              allows the user to close the dialog without taking any action.
            </BasicText>
          </Box>
        </BasicText>
      </SectionContainer>

      <SectionContainer>EX 1</SectionContainer>
      <SectionContainer>EX 2</SectionContainer>
      <SectionContainer>EX 3</SectionContainer>
      <SectionContainer>EX 4</SectionContainer>
      <SectionContainer>EX 5</SectionContainer>
    </BigBackgroundBox>
  );
}

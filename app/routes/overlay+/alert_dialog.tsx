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
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  AlertDialogueOne,
  AlertDialogueTwo,
} from "~/components/overlay/alertDialogComponents";
import * as Overlay from "~/mardownExamples/overlay/index";
import {
  AgeVerificationDialog,
  RateUsDialog,
  UnsavedChangesAlert,
} from "~/components/overlay/alertDialogFunctions";
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
      <MyLabel
        link="https://chakra-ui.com/docs/components/alert-dialog"
        size={28}
      >
        Alert Dialog
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI's <Mono>AlertDialog</Mono> is a robust and flexible
              component designed to create accessible alert dialog boxes or
              modals. These dialog boxes, often used for confirming actions or
              displaying important messages, interrupt the user flow with a
              mandatory action or confirmation.
            </SectionDescription>
            <BasicText>
              The <Mono>AlertDialog</Mono> component in Chakra UI necessitates
              the use of the <Mono>leastDestructiveRef</Mono> property. This
              means that when using the <Mono>AlertDialog</Mono> component, you
              need to supply a reference to the least potentially harmful
              element in the dialog box.
            </BasicText>
            <BasicText>
              In the <Mono>AlertDialog</Mono>'s setting, a "destructive action"
              is any action that could have notable repercussions or
              irreversible results, such as the removal of data. It's crucial to
              focus initially on the least harmful element in the dialog to
              avoid users accidentally confirming a harmful action.
            </BasicText>
            <BasicText>
              When you supply the <Mono>leastDestructiveRef</Mono> property with
              a reference to the least potentially harmful element, the{" "}
              <Mono>AlertDialog</Mono>
              component ensures that focus is automatically given to this
              element when the dialog box opens. This makes the dialog box
              easier and safer to navigate and interact with, diminishing the
              chances of users unintentionally taking destructive actions.
            </BasicText>
            <BasicText>
              The need to provide the <Mono>leastDestructiveRef</Mono> property
              aligns with the guidelines given by the Web Accessibility
              Initiative - Accessible Rich Internet Applications (WAI-ARIA),
              which aim to facilitate the creation of web content that's
              accessible to all users. Adherence to these guidelines ensures
              that dialog boxes are both usable and accessible to all users,
              including those who depend on assistive technology or keyboard
              navigation.
            </BasicText>
            <BasicText>
              There are 7 different Alert Dialog related components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>AlertDialog</HL>: This is the parent component that holds
                  all the other elements of the alert dialog. When you use it,
                  you must provide a <Mono>leastDestructiveRef</Mono> prop. This
                  should be a reference to an element which, when focused or
                  clicked, performs a non-destructive action. This follows
                  WAI-ARIA guidelines, helping to prevent users from
                  accidentally confirming destructive actions.
                </li>
                <li>
                  <HL>AlertDialogHeader</HL>: This is used to display the title
                  or main heading of the alert dialog. This component is
                  optional, but recommended for providing context to the user
                  about the alert dialog's content or purpose.
                </li>
                <li>
                  <HL>AlertDialogBody</HL>: This serves to display the main
                  message or content of the alert dialog. This is often a brief
                  description or question, guiding the user's response to the
                  dialog.
                </li>
                <li>
                  <HL>AlertDialogContent</HL>: This serves as a wrapper for the{" "}
                  <Mono>AlertDialogHeader</Mono>, <Mono>AlertDialogBody</Mono>,
                  and <Mono>AlertDialogFooter</Mono> components. It helps in
                  structuring the dialog box and can also be styled to fit your
                  UI design requirements.
                </li>
                <li>
                  <HL>AlertDialogFooter</HL>: This is used for displaying
                  actionable elements, such as buttons, for the user to interact
                  with. For example, "Confirm" and "Cancel" buttons would reside
                  here.
                </li>
                <li>
                  <HL>AlertDialogOverlay</HL>: This is a full-screen overlay
                  that gets rendered behind the <Mono>AlertDialog</Mono>. This
                  overlay aids in focusing the user's attention on the dialog by
                  obscuring the rest of the user interface.
                </li>
                <li>
                  <HL>AlertDialogCloseButton</HL>: This is a specific component
                  for adding a close button to the <Mono>AlertDialog</Mono>.
                  This is typically placed in the top-right corner of the{" "}
                  <Mono>AlertDialog</Mono> and allows users to dismiss the
                  dialog without performing any action.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <MiniCode>{`import { AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <AlertDialogueOne />
                <ModalCode>
                  <Overlay.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AlertDialogueTwo />
                <ModalCode>
                  <Overlay.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Age Verification Dialog</b>: You can also us the{" "}
              <b>AlertDialog</b> to verify the user's age before allowing access
              to age-restricted content. This component serves a crucial role in
              ensuring age-restricted content is appropriately gated. When a
              user attempts to access the site or a certain section of it, this
              dialog box pops up asking if the user is above a certain age (18
              in this case). This is essential for websites that deal with
              age-sensitive content, such as alcohol sales, gambling, or adult
              content. It can also help in complying with legal and ethical
              guidelines related to the display and distribution of
              age-restricted material. It's worth noting that for truly secure
              age verification, more robust systems are needed, as self-reported
              checks can easily be bypassed.
            </HighlightText>
            <MyFlex>
              <AgeVerificationDialog />
            </MyFlex>
            <ModalCode>
              <Overlay.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Product Review Dialog</b>: You can use <b>AlertDialog</b> to
              ask users for a rating or review after they have used your app or
              website for a while. This component is designed to gather user
              feedback on a specific product in a structured and efficient
              manner. It presents a dialog box to the user with input fields to
              capture the title and body of the review, along with a star rating
              system for a numerical evaluation. This could be particularly
              useful on e-commerce platforms where user reviews play a vital
              role in influencing purchase decisions. The collected data can
              then be used to display testimonials or be analyzed for business
              insights.
            </HighlightText>
            <MyFlex>
              <RateUsDialog />
            </MyFlex>
            <ModalCode>
              <Overlay.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Unsaved Changes Alert</b>: You can use <b>AlertDialog</b> to
              warn users about unsaved changes when they're trying to navigate
              away from a form or a settings page. This component is designed to
              prevent users from accidentally losing their progress or changes
              made within a form or similar editable contexts. Whenever a user
              makes changes and attempts to navigate away or close the dialog
              box without saving, this alert dialog pops up warning them about
              the potential loss of unsaved data. It gives the user the option
              to either continue with their action (and potentially lose data),
              or cancel their action and go back to save their changes. This
              component can be incredibly useful in user interfaces where data
              entry is involved, such as content management systems,
              administrative dashboards, or complex forms. It improves the user
              experience by safeguarding against inadvertent data loss.
            </HighlightText>
            <MyFlex>
              <UnsavedChangesAlert />
            </MyFlex>
            <ModalCode>
              <Overlay.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

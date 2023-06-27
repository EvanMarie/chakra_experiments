import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, BlueBold, HL, Mono } from "~/styles/DesignComponents";

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
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Overlay from "~/mardownExamples/overlay/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  ModalOne,
  ModalTwo,
  ModalThree,
  ModalFour,
  ModalFive,
  ModalSix,
} from "~/components/overlay/modalComponents";
import {
  CustomCloseButtonModal,
  Magic8Modal,
  NestedModal,
} from "~/components/overlay/modalFunction";
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
      <MyLabel link="https://chakra-ui.com/docs/components/modal" size={28}>
        Modal
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Modals, also known as modal dialogs or modal windows, are a type
              of graphical user interface (GUI) element that force user
              interaction before they can return to the system. They are a way
              to prompt the user for a response or to deliver important
              information. For example, modals can be used to show error or
              success messages, to ask the user to confirm an action, or to
              collect form data.
            </SectionDescription>
            <BasicText>
              Modals have a few key characteristics: they are usually centered
              and overlay the primary content. This overlay, often a
              semi-transparent "dim" or "fade" of the background content, helps
              draw attention to the modal. They block interaction with the rest
              of the application. The user must interact with the modal (e.g.,
              close it, fill out a form, etc.) before they can return to the
              rest of the application. They are a separate "mode" that requires
              an explicit user action to enter and exit, hence the term "modal".
            </BasicText>
            <BasicText>
              Chakra UI's implementation of modals has several features that
              make it useful:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <BlueBold>Ease of Use</BlueBold>: Chakra provides several
                  built-in components for creating modals, including{" "}
                  <Mono>Modal</Mono>, <Mono>ModalOverlay</Mono>,{" "}
                  <Mono>ModalContent</Mono>, <Mono>ModalHeader</Mono>,{" "}
                  <Mono>ModalFooter</Mono>, <Mono>ModalBody</Mono>, and{" "}
                  <Mono>ModalCloseButton</Mono>. These components encapsulate
                  common modal patterns, making it easy to create modals without
                  having to build everything from scratch.
                </li>

                <li>
                  <BlueBold>Flexibility</BlueBold>: Chakra's modal components
                  are higBlueBoldy customizable. You can control their
                  appearance and behavior using props, and you can add custom
                  components to the modal body.
                </li>

                <li>
                  <BlueBold>Accessibility</BlueBold>: Chakra's modals are
                  designed with accessibility in mind. For example, when a modal
                  is open, focus is trapped within it, preventing users from
                  accidentally interacting with the rest of the application.
                  This is a key requirement for accessibility, and Chakra
                  handles it automatically.
                </li>

                <li>
                  <BlueBold>Integration</BlueBold>: Chakra's modals are designed
                  to work well with other Chakra components. For example, you
                  can use Chakra's <Mono>Button</Mono> component for the modal's
                  close button, or Chakra's <Mono>Text</Mono> component for the
                  modal's content.
                </li>

                <li>
                  <BlueBold>Theming</BlueBold>: Chakra's modals support Chakra's
                  theming system. This means you can easily adjust their
                  appearance to match your application's theme.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                The following are the various components that comprise Chakra's
                modal system:
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Modal</HL>: This is the main component that contains all
                    the other modal components. It's responsible for controlling
                    the state of the modal (whether it's open or not) and
                    providing context to its child components.
                  </li>
                  <li>
                    <HL>ModalOverlay</HL>: This is a semi-transparent layer that
                    covers the page content when the modal is open. It's often
                    used to focus the user's attention on the modal by obscuring
                    the rest of the page.
                  </li>
                  <li>
                    <HL>ModalContent</HL>: This component houses the actual
                    content of the modal. It can contain any number of other
                    components, such as text, forms, images, and more.
                  </li>
                  <li>
                    <HL>ModalHeader</HL>: This component is typically used to
                    give a title or a brief description of the modal's purpose.
                    It's placed at the top of the ModalContent.
                  </li>
                  <li>
                    <HL>ModalFooter</HL>: This is placed at the bottom of the{" "}
                    <Mono>ModalContent</Mono> and is typically used to house the
                    action buttons for the modal, such as "Save" or "Cancel"
                    buttons. The placement of these actions in a consistent
                    location helps users predict where they will be across
                    different modals.
                  </li>
                  <li>
                    <HL>ModalBody</HL>: This is where the main content for the
                    modal resides. It's located within the ModalContent, usually
                    between the ModalHeader and the <Mono>ModalFooter</Mono>. It
                    can contain text, forms, images, or other components,
                    depending on the purpose of the modal.
                  </li>
                  <li>
                    <HL>ModalCloseButton</HL>: This is a specialized button
                    designed for closing the modal. It's usually placed at the
                    top-right corner of the <Mono>ModalContent</Mono>, allowing
                    users to easily close the modal if they wish to dismiss it.
                  </li>
                </ul>
              </BulletBox>

              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <MiniCode>{`import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <ModalOne />
                <ModalCode>
                  <Overlay.E16 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ModalTwo />
                <ModalCode>
                  <Overlay.E17 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ModalThree />
                <ModalCode>
                  <Overlay.E18 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ModalFour />
                <ModalCode>
                  <Overlay.E19 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ModalFive />
                <ModalCode>
                  <Overlay.E20 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ModalSix />
                <ModalCode>
                  <Overlay.E21 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SectionHeading>Additional Functionality:</SectionHeading>
              <BulletBox>
                <ul>
                  <li>
                    <BlueBold>Block Scrolling Upon Opening</BlueBold>: When a
                    modal is active, it's typically a best practice to disable
                    scrolling on the main document to keep the user's focus on
                    the content within the modal. Chakra UI respects this
                    accessibility guideline and has this feature enabled by
                    default. However, there might be specific scenarios where
                    you'd want to allow users to scroll the main document while
                    the modal is open. In such cases, Chakra UI provides the{" "}
                    <Mono>blockScrollOnMount</Mono> prop, which you can set to{" "}
                    <Mono>false</Mono> to allow scrolling on the main document.
                  </li>
                  <li>
                    <BlueBold>Overlay Click Closes Modal</BlueBold>: by default,
                    clicking outside the modal content of a Chakra UI modal will
                    close it. This can be a useful feature for users who want to
                    quickly exit the modal without having to specifically click
                    a close button. However, you might want to prevent this
                    behavior in certain cases, such as when the modal contains a
                    form that users might accidentally click out of. Chakra UI
                    provides the <Mono>closeOnOverlayClick</Mono> prop for this
                    purpose. By setting it to <Mono>false</Mono>, the modal will
                    remain open when users click the overlay, requiring them to
                    explicitly click the <Mono>close</Mono> button or use the{" "}
                    <Mono>ESC</Mono> key to close the modal.
                  </li>
                  <li>
                    <BlueBold>Vertically Centered Modal</BlueBold>: In its
                    default state, a Chakra UI modal is positioned with a
                    vertical offset of <Mono>3.75rem</Mono> from the top.
                    However, for aesthetic or visibility reasons, you might want
                    the modal to be vertically centered on the page. Chakra UI
                    provides an easy way to do this with the{" "}
                    <Mono>isCentered</Mono> prop. When you pass the{" "}
                    <Mono>isCentered</Mono> prop to the <Mono>Modal</Mono>{" "}
                    component, the modal will be vertically centered on the
                    screen, regardless of the viewport height. If you wish to
                    adjust the default offset, you can pass a custom value to
                    the top prop in the <Mono>ModalContent</Mono>.
                  </li>
                  <li>
                    <BlueBold>Scroll Behavior</BlueBold>: Modal overflow
                    behavior refers to the way scrolling is handled when the
                    content within a modal exceeds the visible area of the
                    screen (viewport). To control the scrolling behavior in such
                    situations, the <Mono>scrollBehavior</Mono> property can be
                    utilized. When <Mono>scrollBehavior</Mono> is set to{" "}
                    <Mono>inside</Mono>, scrolling is limited to the{" "}
                    <Mono>ModalBody</Mono>. This means that if the content
                    within the modal exceeds the available space, a scrollbar
                    will appear within the modal body itself, allowing users to
                    scroll through the content without affecting the rest of the
                    page. This is useful when you want to keep the modal's
                    overall position fixed and maintain a consistent layout. On
                    the other hand, when <Mono>scrollBehavior</Mono> is set to{" "}
                    <Mono>outside</Mono>, the entire <Mono>ModalContent</Mono>,
                    including the modal header, body, and footer, will scroll
                    within the viewport. In this case, if the modal content
                    overflows, a scrollbar will appear at the edge of the
                    viewport, allowing users to scroll through the content. This
                    approach is suitable when you want the entire modal to be
                    scrollable, giving users the ability to view all the content
                    within the modal without any restrictions.
                  </li>
                  <li>
                    <BlueBold>Rendering Elements as Inactive</BlueBold>: When
                    the modal is active or open, it's displayed within a unique
                    portal, and all its sibling elements have the{" "}
                    <Mono>aria-hidden</Mono> attribute assigned as{" "}
                    <Mono>true</Mono>. This means that the only visible element
                    to screen readers is the modal. If you wish to alter this
                    behavior, you can deactivate it by setting the{" "}
                    <Mono>useInert</Mono> property to <Mono>false</Mono>.
                  </li>
                  <li>
                    <BlueBold>Disabling Focus Locking</BlueBold>: By default,
                    modal, alert dialog, and drawer components are designed to
                    lock the focus within them, as a standard accessibility
                    feature. This is generally encouraged to meet accessibility
                    standards, ensuring user interaction is concentrated within
                    these components. However, despite its impact on
                    accessibility, there could be certain scenarios where focus
                    trapping within the modal might not be ideal or necessary.
                    If you want to disable this focus trapping feature, you can
                    do so by setting the <Mono>trapFocus</Mono> property and
                    assigning its value to <Mono>false</Mono>. This change will
                    prevent the modal from locking user focus within itself.
                  </li>
                </ul>
              </BulletBox>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Nested Modals</b>: Chakra UI also supports the use of nested
              modals. If you find a need to launch a new modal from within an
              existing modal, you can do this by simply adding a new modal
              within your existing modal. Here is an example of how to implement
              a nested modal. Be cautious about using nested modals, as they can
              be confusing for users and are generally discouraged in UI/UX
              design.
            </HighlightText>
            <MyFlex>
              <NestedModal />
            </MyFlex>

            <ModalCode>
              <Overlay.H10 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Custom Close Button</b>: While the default close button that
              comes with Chakra UI's modal is functional and accessible, you
              might want to create a custom close button that fits better with
              your app's design. Here's an example of how you can replace the
              default close button with a custom one.
            </HighlightText>
            <MyFlex>
              <CustomCloseButtonModal />
            </MyFlex>

            <ModalCode>
              <Overlay.H11 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              Here's a fun and ingenious use of the Modal component in Chakra
              UI: creating a "Magic 8 Ball" game. The "Magic 8 Ball" is a
              popular toy that provides random answers to yes-or-no questions.
              With Chakra UI's <b>Modal</b> component, we can create a visually
              appealing and interactive version of the Magic 8 Ball.
            </HighlightText>
            <MyFlex>
              <Magic8Modal />
            </MyFlex>

            <ModalCode>
              <Overlay.H12 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

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
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import * as Overlay from "~/mardownExamples/overlay/index";
import javascript from "highlight.js/lib/languages/javascript";
import {
  PopoverFive,
  PopoverFour,
  PopoverOne,
  PopoverSix,
  PopoverThree,
  PopoverTwo,
} from "~/components/overlay/popoverComponents";
import {
  ControlledPopover,
  DynamicContentPopover,
  FormPopover,
} from "~/components/overlay/popoverFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/popover" size={28}>
        Popover
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Popover is a component that allows you to display additional
              content or information upon interacting with an element, such as a
              button or a link. The additional content typically appears in a
              small overlay on top of the main interface, which is why it's
              called a "Popover". This can be used for various purposes, such as
              tooltips, context menus, or even complex dialogues.
            </SectionDescription>
            <BasicText>
              Useful implementations of the <Mono>Popover</Mono> component
              include:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Tooltips</HL>: Popovers can be used to provide additional
                  information about an element when a user hovers over or
                  focuses on it. This can be useful for explaining complex UI
                  elements, providing hints, or showing more information about
                  an item without taking the user away from the current screen.
                </li>
                <li>
                  <HL>Contextual Menus</HL>: Popovers can also be used to create
                  context-specific menus. For example, if a user right-clicks on
                  an item, a popover could appear with actions relevant to that
                  item.
                </li>{" "}
                <li>
                  <HL>User Interaction Feedback</HL>: Popovers can be used to
                  provide instant feedback or extra details when a user performs
                  an action. For example, after a user submits a form, a popover
                  could appear confirming the submission and offering next
                  steps.
                </li>
                <li>
                  <HL>Form Inputs</HL>: Sometimes, a form field may require
                  additional inputs or complex interaction. In such cases, a
                  popover can be used to contain these interactions. For
                  example, a date picker input could show a calendar in a
                  popover.
                </li>
                <li>
                  <HL>Detail Previews</HL>: If a user interface contains a list
                  of items, a popover could be used to show a preview of each
                  item's details when the user hovers over or clicks the item.
                  This can be useful to provide more information without needing
                  to navigate away from the list.
                </li>
                <li>
                  <HL>Instructions/Guidance</HL>: A popover can be used to
                  provide step-by-step instructions or guidance for a complex
                  task, guiding the user through the process in a non-intrusive
                  way.
                </li>
              </ul>
            </BulletBox>
            <SectionHeading>Popover sub-components</SectionHeading>
            <BasicText>
              A Popover component consists of several sub-components that make
              it customizable and flexible for a variety of use cases. Here are
              the main sub-components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Popover</HL>: The wrapper component that encloses all the
                  other sub-components. It manages the state and interaction
                  logic of the popover. It also provides a context for the
                  sub-components to communicate with each other.
                </li>
                <li>
                  <HL>PopoverTrigger</HL>: This is the component that triggers
                  the opening and closing of the Popover content when interacted
                  with (e.g., clicked or hovered). It is typically a button or a
                  link, but it can also be any other element that can receive
                  focus.
                </li>
                <li>
                  <HL>PopoverContent</HL>: This component wraps the content that
                  will be displayed when the Popover is opened. It also
                  positions the content relative to the trigger element.
                </li>
                <li>
                  <HL>PopoverHeader</HL>: This is an optional component that can
                  be used to structure the content within the{" "}
                  <Mono>PopoverContent</Mono>. It is typically used to render a
                  title for the popover.
                </li>
                <li>
                  <HL>PopoverBody</HL>: This is also an optional component that
                  can be used to structure the content within the{" "}
                  <Mono>PopoverContent</Mono>. It is typically used to render
                  the main content of the popover.
                </li>
                <li>
                  <HL>PopoverAnchor</HL>: This component is used to wrap the
                  position-reference element. This is useful when you want to
                  position the popover relative to an element other than the
                  trigger element. For example, you can use this to position the
                  popover relative to the trigger's parent element.
                </li>
                <li>
                  <HL>PopoverCloseButton</HL>: A component that renders a button
                  to close the popover. It is typically rendered in the{" "}
                  <Mono>PopoverHeader</Mono> component.
                </li>
                <li>
                  <HL>PopoverArrow</HL>: This is an optional component that
                  renders an arrow pointing towards the trigger element. It is
                  typically rendered in the <Mono>PopoverContent</Mono>{" "}
                  component.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                The <Mono>Popover</Mono> component in Chakra UI also has various
                props to customize its behavior and appearance. For example, you
                can control the position and alignment of the popover, whether
                it should close when the user clicks outside of it, whether it
                should re-focus the trigger when it closes, and so on. We will
                explore more of this funcitonality and customization in the
                examples below.
              </BasicText>

              <BasicText>
                While popovers can be quite useful, it's also important to use
                them judiciously. Overuse of popovers can disrupt the user's
                experience, making it feel cluttered or overwhelming.
                Additionally, it's essential to ensure that popovers behave well
                on all devices, including touch devices where hover interactions
                are not available.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <PopoverOne />
                <Overlay.E22 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PopoverTwo />
                <Overlay.E23 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PopoverThree />
                <Overlay.E25 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PopoverFour />
                <Overlay.E24 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PopoverFive />
                <Overlay.E26 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PopoverSix />
                <Overlay.E27 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SectionHeading>
                Additional Functionality and Considerations:
              </SectionHeading>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Deferred Rendering of Popover</HL>: Usually, the Popover
                    component preloads all the child elements of PopoverContent
                    onto the DOM even if they are not immediately visible.
                    However, if you prefer that the popover content gets
                    rendered only when the Popover is activated, you can make
                    use of the isLazy property. This can be especially handy
                    when your PopoverContent needs to be highly efficient or if
                    it needs to perform network calls upon mounting, which
                    should only occur when the component is actually shown.
                  </li>
                  <li>
                    <HL>Ease of Use</HL>: Whenever the term "trigger" is
                    mentioned, it pertains to the elements contained within the
                    PopoverTrigger. Similarly, the term "content" refers to the
                    elements contained within the PopoverContent.
                  </li>
                  <li>
                    <HL>Keyboard Usage and Focus Management</HL>: Upon opening
                    the popover, the focus shifts to the PopoverContent. If the
                    initialFocusRef is specified, then the focus will go to the
                    respective element. When the popover is closed, the focus
                    reverts back to the trigger. If returnFocusOnClose is set to
                    false, this reversion won't occur. The opening and closing
                    of the popover can be controlled through both mouse
                    movements and keyboard inputs, and these interactions can be
                    configured based on whether the trigger is set to "hover" or
                    "click".
                  </li>
                  <li>
                    <HL>ARIA Roles and Properties</HL>: The{" "}
                    <Mono>PopoverContent</Mono> is assigned a role depending on
                    whether the trigger is set to "click" or "hover",
                    respectively corresponding to "dialog" and "tooltip".
                    Additionally, the <Mono>PopoverContent</Mono> has several
                    ARIA properties set to improve accessibility. These include
                    aria-labelledby which links to the{" "}
                    <Mono>PopoverHeader</Mono>'s id, aria-describedby pointing
                    to the id of the <Mono>PopoverBody</Mono>, and aria-hidden
                    that toggles depending on whether the popover is open or
                    closed. The trigger also has several ARIA attributes:
                    aria-haspopup indicating it activates a popover,
                    aria-controls linking to the id of the{" "}
                    <Mono>PopoverContent</Mono>, and aria-expanded reflecting
                    the open/closed state of the popover.
                  </li>
                </ul>
              </BulletBox>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Dynamic Content</b>: The content inside your <b>Popover</b> can
              be dynamic. This means you can alter the content based on user
              interactions or other state changes in your application. Let's
              consider an example where we display user details in a{" "}
              <b>Popover</b> upon clicking a user's name. Here's how you might
              do it
            </HighlightText>
            <MyFlex>
              <DynamicContentPopover />
            </MyFlex>
            <ViewCode>
              <Overlay.H13 />
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Popover Form</b>: You can include a form within a{" "}
              <b>Popover</b>. This can be useful when you need to collect simple
              information from a user without directing them to a new page.
              Here's an example of how to create a subscription form within a{" "}
              <b>Popover</b>.{" "}
            </HighlightText>
            <MyFlex>
              <FormPopover />
            </MyFlex>
            <ViewCode>
              <Overlay.H14 />
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Manual Control</b>: You can manually control the open and close
              state of a <b>Popover</b> using the <b>isOpen</b> and{" "}
              <b>onOpen</b>/<b>onClose</b> props. This could be useful when you
              need to trigger the popover from somewhere else in your component.
            </HighlightText>
            <MyFlex>
              <ControlledPopover />
            </MyFlex>
            <ViewCode>
              <Overlay.H15 />
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

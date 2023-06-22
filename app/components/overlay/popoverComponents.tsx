import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  PopoverFunctionFive,
  PopoverFunctionFour,
  PopoverFunctionOne,
  PopoverFunctionSix,
  PopoverFunctionThree,
  PopoverFunctionTwo,
} from "./popoverFunctions";

export function PopoverOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Popover</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In the following example, clicking on the "Trigger Me!" button will
          show the popover with the title "Popover Title" and the body content
          "This is the content of the popover." The popover can be closed by
          clicking on the close button or outside of the popover.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <PopoverFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

export function PopoverTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Portal Popover</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following example demonstrates the usage of a{" "}
          <Mono>Popover</Mono> component within a Portal in Chakra UI. This
          example consists of two similar
          <Mono>Popover</Mono> components. Both popovers have identical
          configurations and their <Mono>PopoverContent</Mono> is wrapped within
          a Portal.
        </SectionDescription>
        <BasicText>
          A Portal in Chakra UI is used to render components to a DOM node that
          exists outside the DOM hierarchy of the parent component. This is
          useful when the parent's CSS or stacking context could affect the
          positioning or visibility of the child components. By wrapping the
          <Mono>PopoverContent</Mono> in a Portal, you ensure that the popover
          is displayed on top of other elements, without being affected by any
          parent elements' z-index or overflow properties.
        </BasicText>
        <BasicText>
          In this specific example, when a user clicks the "Trigger" button, the
          <Mono>PopoverContent</Mono> appears. This content contains a{" "}
          <Mono>PopoverArrow</Mono>, a header (<Mono>PopoverHeader</Mono>), a
          close button (<Mono>PopoverCloseButton</Mono>), a body with a blue
          button (<Mono>PopoverBody</Mono>), and a footer (
          <Mono>PopoverFooter</Mono>).
        </BasicText>
        <BasicText>
          Since this <Mono>PopoverContent</Mono> is rendered within a{" "}
          <Mono>Portal</Mono>, you might not immediately see the change in the
          DOM hierarchy unless you inspect the element using a tool like the
          browser's DevTools. On inspection, you'll notice that the{" "}
          <Mono>PopoverContent</Mono> is actually rendered as a direct child of
          the tag, rather than nested within its parent components. This example
          contains two buttons and two popover examples; each button will
          trigger a unique popover when clicked.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <PopoverFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

export function PopoverThree() {
  return (
    <SectionContainer>
      <SectionHeading>Accessing the Internal State</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In the next example component, we see an effective use of the
          internal state provided by the Chakra UI <Mono>Popover</Mono>{" "}
          component to control its behavior and presentation.
        </SectionDescription>
        <BasicText>
          The component begins by creating a reference, <Mono>initRef</Mono>,
          which is a handle to a DOM element in the component - in this case,
          the "Close" button. This <Mono>useRef</Mono> hook from React is
          necessary to allow the <Mono>Popover</Mono> component to control focus
          placement when the popover is opened. The <Mono>closeOnBlur</Mono>{" "}
          prop is set to <Mono>false</Mono> to prevent the popover from
          automatically closing when a user clicks outside of the popover. The
          placement prop is set to "left" to control where the popover will
          appear in relation to the trigger button.
        </BasicText>
        <BasicText>
          The <Mono>initialFocusRef</Mono> prop is set to the initRef we created
          earlier, so that when the popover opens, the focus will immediately
          move to the close button inside the popover. The children of the
          <Mono>Popover</Mono> component is a render prop function, a function
          that takes an object argument and returns JSX. The object passed to
          this function contains properties that reflect the internal state of
          the <Mono>Popover</Mono> component, specifically <Mono>isOpen</Mono>{" "}
          (a boolean indicating whether the popover is open or closed) and{" "}
          <Mono>onClose</Mono> (a function to close the popover). These are used
          within the component to change the behavior and appearance based on
          the state of the popover. The <Mono>PopoverTrigger</Mono> contains a
          button that toggles the popover. Its label changes based on whether
          the popover is currently open or closed, by checking the{" "}
          <Mono>isOpen</Mono> state.
        </BasicText>
        <BasicText>
          The <Mono>PopoverContent</Mono> component, wrapped in a{" "}
          <Mono>Portal</Mono> for better positioning and stacking behavior,
          contains the content of the popover. It includes a header, a close
          button, a body with a greeting and a placeholder image, and a footer.
          The close button inside the popover uses the <Mono>onClose</Mono>{" "}
          function passed to the render prop to close the popover when clicked.
          By leveraging the internal state provided by the Chakra UI{" "}
          <Mono>Popover</Mono> component, this component achieves a high level
          of interactivity and control over the user experience.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <PopoverFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

export function PopoverFour() {
  return (
    <SectionContainer>
      <SectionHeading>Defining Focus</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following example component is a React function component that
          implements a popover functionality with a select option. The component
          displays an input field and a "Select" button. When the user interacts
          with the input field, a popover is triggered, showing a list of
          positive adjectives. The user can select an adjective from the list,
          and upon clicking the "Select" button, a modal appears with a
          confirmation message displaying the selected adjective.
        </SectionDescription>
        <BasicText>
          The use of <Mono>initialFocusRef</Mono> ensures that the input field
          inside the popover receives focus when the popover is opened.
          Additionally, the use of <Mono>ref</Mono> on the "Select" button
          enables focusing on the button after the popover is closed. This
          implementation provides a user-friendly and accessible way for users
          to seemlessly interact with the fewest number of clicks.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <PopoverFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

export function PopoverFive() {
  return (
    <SectionContainer>
      <SectionHeading>Popover Customization</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we will create a custom popover with a unique
          background color, arrow color, and button color, and we'll also
          specify its placement. The Popover's placement prop is set to
          "right-start", positioning it to the right of the trigger, aligning
          with the start edge of the trigger.
        </SectionDescription>
        <BasicText>
          The PopoverTrigger contains a Box which acts as the clickable area to
          toggle the popover. The Box has a tabIndex of 0, which allows it to be
          focusable and navigable via keyboard, a role of "button"
        </BasicText>
        <BasicText>
          By using the props available on each component as shown in this
          example, you can customize almost every aspect of the popover's
          appearance. This allows you to design a popover that perfectly fits
          your application's style and theme.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <PopoverFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

export function PopoverSix() {
  return (
    <SectionContainer>
      <SectionHeading>Popover Placement</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The purpose of this component is to show you the full range of
          possibilities, so you can choose the one that works best for your
          needs. You might want your popover to appear in a certain place to
          make it more noticeable, or to fit better with the layout of your
          page. Here you can see a visual representation of the different
          placements available for the popover component.
        </SectionDescription>
        <BasicText>
          Click on each button below and see a placed popover at the labeled
          position.{" "}
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <PopoverFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

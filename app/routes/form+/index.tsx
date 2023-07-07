import { Box, Link, VStack } from "@chakra-ui/react";
import { BsTextareaResize } from "react-icons/bs";
import { BasicText, FlexibleBox, HL, Mono } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components">
        Chakra UI: Form
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Building intuitive and user-friendly forms is an essential aspect of
            creating a seamless user interface. An effective form not only aids
            in collecting data from users but also serves as an interactive
            medium to engage users, making it important to the success of any
            web application. One of the key challenges faced by web developers
            today is creating user-friendly forms with a consistent look and
            feel across different platforms. That's where the Chakra UI library
            steps in to make our lives easier.
          </SectionDescription>

          <BasicText>
            Chakra UI is a simple, modular, and accessible component library
            that provides developers with a set of easy-to-use, flexible
            components that cater to almost all the UI requirements of modern
            web applications, including form components. Chakra UI components
            are built on top of React and have a broad user base due to their
            ease of use, extensive documentation, and the flexibility they
            provide to developers.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>Chakra-UI's Form Components: </BasicText>

          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/form/button">
                    <HL>Button 🔗</HL>
                  </Link>
                  : This is one of the most frequently used components in any UI
                  toolkit. In Chakra UI, a <Mono>Button</Mono> component
                  represents a clickable element, usually used for submitting
                  forms, and includes various states such as hover, active,
                  focus, and disabled.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/checkbox">
                    <HL>Checkbox 🔗</HL>
                  </Link>
                  : This component allows the user to make multiple selections
                  from a set of options. Chakra UI provides a customizable{" "}
                  <Mono>Checkbox</Mono> component that supports different sizes,
                  colors, and states.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/editable">
                    <HL>Editable 🔗</HL>
                  </Link>
                  : In Chakra UI this is an intuitive component that allows
                  users to edit content directly on the page without the need
                  for a separate form or modal. It's a perfect tool for enabling
                  in-place editing experiences on your website.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/form_control">
                    <HL>Form Control 🔗</HL>
                  </Link>
                  : This is a wrapper component that provides context and
                  functionality for all form components. It helps to manage form
                  states and group labels, form elements, and form helper text
                  together.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/icon_button">
                    <HL>Icon Button 🔗</HL>
                  </Link>
                  : This component allows users to take actions and make
                  choices, with a visual icon used to communicate the action to
                  the user. This component is usually used for buttons that
                  contain an icon without text.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/input">
                    <HL>Input 🔗</HL>
                  </Link>
                  : This is an essential form element that allows users to enter
                  text. Chakra UI provides a customizable <Mono>Input</Mono>{" "}
                  component with built-in styles and states for different
                  scenarios.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/number_input">
                    <HL>Number Input🔗</HL>
                  </Link>
                  : This is a component that allows users to input numerical
                  values, with optional controls for incrementing or
                  decrementing the value. It's handy for forms that require
                  numeric user input, like quantity, age, or rating.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/pin_input">
                    <HL>Pin Input 🔗</HL>
                  </Link>
                  : This is a specialized input component, used primarily for
                  input fields where the number of characters users should enter
                  is fixed, like OTPs, PINs, or password fields.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/radio">
                    <HL>Radio 🔗</HL>
                  </Link>
                  : This component allows the user to make a single selection
                  from a set of options. Chakra UI provides a <Mono>Radio</Mono>{" "}
                  and <Mono>RadioGroup</Mono> component to create a group of
                  radio buttons.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/range_slider">
                    <HL>Range Slider🔗</HL>
                  </Link>
                  : This component is a user input where the user selects a
                  value or range of values by dragging a slider thumb. This
                  component is typically used for filtering and specifying a
                  range of values.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/select">
                    <HL>Select 🔗</HL>
                  </Link>
                  : This allows users to choose one option from a list. It's a
                  staple in any form-based user interface and is used for
                  options that are too numerous to be efficiently represented by
                  radio buttons.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/slider">
                    <HL>Slider 🔗</HL>
                  </Link>
                  : Similar to the <Mono>Range Slider</Mono>, a{" "}
                  <Mono>Slider</Mono> is an input where the user selects a
                  single value by dragging a slider thumb. This component is
                  typically used for selecting a value on a continuum, like
                  volume or brightness.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/switch">
                    <HL>Switch 🔗</HL>
                  </Link>
                  : This is a checkbox with a physical toggle-like interaction
                  model. It's an ideal component for representing an on/off or
                  true/false selection.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  {/* <Link href="/form/textarea"> */}
                  <Link href="/on_my_way">
                    <HL>Textarea 🔗</HL>
                  </Link>
                  : This is an input component designed for multi-line text
                  input. It's used in scenarios where the user is expected to
                  provide more extended text entries, such as comments or
                  feedback.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

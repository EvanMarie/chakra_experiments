import { Box, Input, Stack } from "@chakra-ui/react";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  InputFunctionFive,
  InputFunctionFour,
  InputFunctionOne,
  InputFunctionSix,
  InputFunctionThree,
  InputFunctionTwo,
} from "./inputFunction";

/* ********************************************************************** */

export function InputOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In just a single line of code, we can create an input field with a
          placeholder text.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <Input
            placeholder="Your message here"
            maxWidth="400px"
            color="background"
          />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function InputTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra's Input component provides five different sizes: '
          <Mono>xs</Mono>', '<Mono>sm</Mono>', '<Mono>md</Mono>', '
          <Mono>lg</Mono>', and the default being '<Mono>md</Mono>'. These
          correspond to specific pixel heights for the input field (24px, 32px,
          40px, 48px respectively).
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <Stack spacing={3}>
            <Input placeholder='size="xs"' size="xs" />
            <Input placeholder='size="sm"' size="sm" />
            <Input placeholder='size="md"' size="md" />
            <Input placeholder='size="lg"' size="lg" />
          </Stack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function InputThree() {
  return (
    <SectionContainer>
      <SectionHeading>Variants</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI's Input component offers four distinct stylistic variants,
          each providing a unique visual appearance and user experience:
        </SectionDescription>
        <BulletBox>
          <ul>
            <li>
              <HL>outline</HL>: gives the input field a clean and modern look
              with a visible outline surrounding it. This variant is commonly
              used when you want to highlight the input field and make it stand
              out within the form.
            </li>
            <li>
              <HL>filled</HL>: fills the input field with a solid color,
              providing a visually distinct and prominent appearance. This
              variant is often used when you want to emphasize the input field,
              particularly in scenarios where the input is of high importance or
              requires immediate attention.
            </li>
            <li>
              <HL>flushed</HL>: removes the outline of the input field and
              positions the text directly within the container, creating a sleek
              and streamlined visual effect. This variant is frequently employed
              in scenarios where you want a more compact and integrated form
              design.
            </li>
            <li>
              <HL>unstyled</HL>: removes all default styling from the input
              field, resulting in a minimalistic and unadorned appearance. This
              variant is often used when you want to apply custom styling or
              integrate the input seamlessly into your own design system.
            </li>
          </ul>
        </BulletBox>
      </Box>

      <MyFlex bg="background">
        <>
          <Stack spacing={3}>
            <Input variant="outline" placeholder="Outlined" />
            <Input variant="filled" placeholder="Filled" />
            <Input variant="flushed" placeholder="Flushed" />
            <Input
              variant="unstyled"
              placeholder="Unstyled"
              color="background"
            />
          </Stack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function InputFour() {
  return (
    <SectionContainer>
      <SectionHeading>Addons and Elements in the Input</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI allows adding addons and elements to the left and right of
          the <Mono>Input</Mono> component. Chakra UI also provides the{" "}
          <Mono>InputGroup</Mono>,<Mono>InputLeftAddon</Mono>, and{" "}
          <Mono>InputRightAddon</Mono> subcomponents to manage these addons. By
          utilizing these components, you can extend the functionality and
          visual appeal of the <Mono>Input</Mono> component while maintaining a
          coherent and structured form layout.
        </SectionDescription>
        <BulletBox>
          <ul>
            <li>
              <HL>InputGroup</HL>: allows you to group related elements together
              with an <Mono>Input</Mono> component, providing a cohesive and
              structured layout. It acts as a container for the Input component
              and any accompanying elements, such as buttons, icons, or
              additional inputs.
            </li>
            <li>
              <HL>InputLeftAddon</HL>: used to place an add-on element on the
              left side of the <Mono>Input</Mono> component. This add-on can be
              an icon, a button, or any other HTML element that complements the
              input field. It is commonly used to provide additional context or
              actions related to the input. For example, you can use an{" "}
              <Mono>InputLeftAddon</Mono> to display a search icon or a currency
              symbol alongside a text input.
            </li>
            <li>
              <HL>InputRightAddon</HL>: allows you to place an add-on element on
              the right side of the <Mono>Input</Mono> component. This add-on
              element can be used to add supplementary information or actions to
              the input field. For instance, you can utilize the InputRightAddon
              to display a button for submitting the form or to show a character
              count indicator.
            </li>
          </ul>
        </BulletBox>
      </Box>

      <MyFlex bg="background">
        <>
          <InputFunctionOne />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function InputFive() {
  return (
    <SectionContainer>
      <SectionHeading>Password Input</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI offers a convenient way to create password input fields
          with built-in show/hide functionality, allowing users to toggle the
          visibility of their entered password. This feature adds an extra layer
          of flexibility and user control when dealing with sensitive
          information. In this example, 'Hide' and 'Show' are buttons used to
          toggle the visibility of the password typed in the input field.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <InputFunctionTwo />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function InputSix() {
  return (
    <SectionContainer>
      <SectionHeading>Controlled Input</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Controlled Input refers to a technique in React where the value of
          an input field is controlled and managed by the state of the
          component. In other words, the state variable is used to keep track of
          the input field's value, and any changes to the input are reflected in
          the state, allowing for a synchronized and controlled user input
          experience.
        </SectionDescription>
        <BasicText>
          The following example creates a controlled input field where the input
          value is stored in the component's state.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <InputFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function InputSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Styling</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Styling the <Mono>Input</Mono> component in Chakra UI is
          straightforward and offers convenient properties to customize the
          appearance, including the focus and error border colors. These
          properties allow you to ensure consistency with your application's
          design and provide visual cuInputyle the <Mono>Input</Mono> component
          in Chakra UI, you can utilize the following properties:
        </SectionDescription>
        <BulletBox>
          <ul>
            <li>
              <HL>focusBorderColor</HL>: allows you to specify the color of the
              border when the input field is in focus. You can set it to any
              valid color value or reference a color from Chakra UI's color
              palette.
            </li>
            <li>
              <HL>errorBorderColor</HL>: lets you define the color of the border
              when there is an error associated with the input field. Similar to{" "}
              <Mono>focusBorderColor</Mono>, you can set it to a valid color
              value or reference a color from the Chakra UI palette.
            </li>
          </ul>
        </BulletBox>
      </Box>

      <MyFlex bg="background">
        <>
          <InputFunctionFour />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */
export function InputEight() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Placeholder Text</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can style the placeholder of an input by using the{" "}
          <Mono>_placeholder</Mono> prop. By default, the placeholder has an
          opacity of <Mono>0.6</Mono>. If you want to specify a specific color
          for the placeholder, you may need to set the opacity to 1.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <InputFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */
export function InputNine() {
  return (
    <SectionContainer>
      <SectionHeading>Input Types</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Input component in Chakra UI provides support for various input
          types, allowing you to create input fields tailored to different data
          formats and requirements. These input types include{" "}
          <Mono>dateTime</Mono>, <Mono>color</Mono>, <Mono>search</Mono>,{" "}
          <Mono>file</Mono>, and more. Below, you will find a examples of many
          of the different input types.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <InputFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

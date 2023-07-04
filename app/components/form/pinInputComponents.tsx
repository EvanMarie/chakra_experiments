import { Box, Code, HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { PinInputFunctionOne } from "./pinInputFunctions";

export const pinInputStyles = {
  bg: "mainText",
  color: "background",
  _focus: {
    borderColor: "accent_1",
    bg: "tipBackground",
    color: "background",
  },
  _hover: {
    bg: "tipBackground",
    color: "background",
  },
};

/* ********************************************************************** */

export function PinInputOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example demonstrates a basic usage of the <Mono>PinInput</Mono>{" "}
          component with six input fields. The <Mono>PinInput</Mono> component{" "}
          is configured to accept a 6-digit PIN code. Each{" "}
          <Mono>PinInputField</Mono> represents a single digit of the PIN code.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <HStack>
          <PinInput>
            <PinInputField sx={pinInputStyles} />
            <PinInputField sx={pinInputStyles} />
            <PinInputField sx={pinInputStyles} />
            <PinInputField sx={pinInputStyles} />
            <PinInputField sx={pinInputStyles} />
            <PinInputField sx={pinInputStyles} />
          </PinInput>
        </HStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Alphanumeric PinInput</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example shows the usage of the <Mono>PinInput</Mono> component
          with four input fields, allowing alphanumeric values. By setting the
          type prop to '<Mono>alphanumeric</Mono>', the <Mono>PinInput</Mono>{" "}
          component accepts both numbers and letters as input.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <HStack>
            <PinInput type="alphanumeric">
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
            </PinInput>
          </HStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputThree() {
  return (
    <SectionContainer>
      <SectionHeading>One-Time Password (OTP) Fields</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we utilize the <Mono>otp</Mono> prop on the{" "}
          <Mono>PinInput</Mono> component to set the autocomplete attribute to
          "one-time-code" for all child <Mono>PinInputField</Mono> components.
          This feature enhances the user experience when entering a one-time
          password.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <HStack>
            <PinInput otp>
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
            </PinInput>
          </HStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputFour() {
  return (
    <SectionContainer>
      <SectionHeading>Masked PinInput</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In scenarios where privacy or sensitive information is collected
          using the PinInput, developers can utilize the mask prop to mask the
          entered value, similar to an{" "}
          <Code>{`<input type="password" />`}</Code> field.
        </SectionDescription>
        <BasicText>
          By passing the <Mono>mask</Mono> prop to the <Mono>PinInput</Mono>{" "}
          component, the input values are hidden, providing an extra layer of
          security. Users' inputs are visually obscured to protect sensitive
          information from unauthorized viewing.
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <HStack>
            <PinInput type="alphanumeric" mask>
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
            </PinInput>
          </HStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputFive() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>PinInput</Mono> component provides four different sizes to
          accommodate various design needs. The default size is 'md', but you
          can customize it by setting the size prop to one of the available
          options: 'xs' (24px), 'sm' (32px), 'md' (40px), or 'lg' (48px).
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <PinInputFunctionOne />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputSix() {
  return (
    <SectionContainer>
      <SectionHeading>Setting a Default Value</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>PinInput</Mono> component allows you to set a default
          value by using the <Mono>defaultValue</Mono> prop. You can specify the
          initial PIN code that should be pre-filled in the input fields.
        </SectionDescription>
        <BasicText>
          In this example, we pre-fill the <Mono>PinInput</Mono> with the
          default value '1234'. This feature is useful when users need to enter
          a PIN code repeatedly or when a default PIN code is required for
          specific scenarios. By providing a default value, you can streamline
          the user experience and reduce friction.
        </BasicText>
        <BasicText>
          To specify a partial value, i.e. fewer than the total number of input
          fields, you can pass a string with the desired value to the{" "}
          <Mono>defaultValue</Mono> prop. For example, if you want to pre-fill
          the first two input fields only, you can pass '12' to the defaultValue
          prop.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <HStack>
            <PinInput defaultValue="1234">
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
            </PinInput>
          </HStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing the Placeholder</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The PinInput component comes with a default placeholder character
          ('○') to represent empty input fields. However, you can customize the
          placeholder by using the placeholder prop and setting it to your
          desired value.
        </SectionDescription>
        <BasicText>
          For example, if you are feeling at peace with the universe, you can
          use "Om" as the placeholder, as shown below.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <HStack>
            <PinInput placeholder="🕉">
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
            </PinInput>
          </HStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputEight() {
  return (
    <SectionContainer>
      <SectionHeading>Disable Focus</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, the <Mono>PinInput</Mono> component moves focus
          automatically to the next input once a field is filled. It also
          transfers focus to a previous input when the <Mono>Delete</Mono> key
          is pressed with the focus on an empty input. To disable this behavior
          and prevent automatic focus management, you can set the manageFocus
          prop to false.
        </SectionDescription>
        <BasicText>
          In this examples, the <Mono>manageFocus</Mono> prop is set to false
          for the <Mono>PinInput</Mono> components. This means that the focus
          will remain on the current input field even after it is filled, and
          the focus won't be transferred to the next input automatically.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <HStack>
            <PinInput manageFocus={false}>
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
            </PinInput>
          </HStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function PinInputNine() {
  return (
    <SectionContainer>
      <SectionHeading>Copying, Pasting, and Autofill</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, when using the <Mono>PinInput</Mono> component, you can
          only change one input field at a time. However, if one of the input
          fields receives a longer string by pasting into it,{" "}
          <Mono>PinInput</Mono> attempts to validate the string and fills the
          other input fields accordingly.
        </SectionDescription>
        <BasicText>
          Here, the <Mono>PinInput</Mono> components are used without any
          additional props. You can try copying and pasting the value "1234"
          into any of the input fields, and you'll notice that PinInput will
          attempt to validate the input and fill the other fields accordingly.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <HStack>
            <PinInput>
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
              <PinInputField sx={pinInputStyles} />
            </PinInput>
          </HStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

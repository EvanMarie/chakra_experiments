import {
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  NumberInputFunctionFive,
  NumberInputFunctionFour,
  NumberInputFunctionOne,
  NumberInputFunctionSix,
  NumberInputFunctionThree,
  NumberInputFunctionTwo,
} from "./numberInputFunctions";
import { ModalCode } from "~/styles/CodeDesignComponents";
import * as Form from "~/mardownExamples/form/index";

/* ********************************************************************** */

export function NumberInputOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To use the <Mono>NumberInput</Mono> component, you can wrap it
          around its subcomponents to create a complete input field with
          increment and decrement buttons.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput maxWidth="100px">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Setting Limits</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you want to restrict the value entered within a specific range,
          you can utilize the <Mono>min</Mono> and <Mono>max</Mono> props. By
          setting the <Mono>min</Mono> prop, you define the lower limit, and by
          setting the <Mono>max</Mono> prop, you define the upper limit. The{" "}
          <Mono>NumberInput</Mono> component will then ensure that the value
          stays within the specified range.
        </SectionDescription>
      </Box>
      <BasicText>
        The following example has a <Mono>min</Mono> set to 23 and a{" "}
        <Mono>max</Mono> set to 53, so if you enter a value that is not between
        the limits, it will automatically be adjusted to the closest limit.
      </BasicText>

      <MyFlex bg="background">
        <>
          <NumberInput defaultValue={44} min={23} max={53} maxWidth="100px">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Increment and Decrement</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you want to customize the increment or decrement step when
          changing the value, you can use the step prop. By passing a value to
          the step prop, you can define the size of each step. By default, the
          value is rounded to match the number of decimals in the step.
        </SectionDescription>
        <BasicText>
          In the following example, the step size is set to 10, with a low end
          limit of 10 and a high end limit of 500.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput
            step={10}
            defaultValue={80}
            min={10}
            max={500}
            maxWidth="100px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputFour() {
  return (
    <SectionContainer>
      <SectionHeading>Adjusting Precision</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ There might be cases where you need the value to be rounded to a
          specific number of decimal points. To achieve this, you can use the{" "}
          <Mono>precision</Mono> prop. By passing the <Mono>precision</Mono>{" "}
          prop and setting it to the desired number of decimal points, the
          <Mono>NumberInput</Mono> component will automatically round the value
          accordingly.
        </SectionDescription>
        <BasicText>
          In the following example, the <Mono>NumberInput</Mono> component is
          configured with a default value of 23, a precision of 3 decimal
          points, and a step of 0.3. This means that the input value will be
          rounded to three decimal points, and each increment or decrement will
          change the value by 0.3.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput
            defaultValue={23}
            precision={3}
            step={0.3}
            maxWidth="100px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputFive() {
  return (
    <SectionContainer>
      <SectionHeading>clampValueOnBlur</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, when a user types a value that exceeds the maximum limit
          (max), the value is reset to the maximum value when the user moves
          away from the input field (on blur). To disable this behavior, you can
          use the <Mono>clampValueOnBlur</Mono> prop and set it to false.
        </SectionDescription>
        <BasicText>
          Instead of adjusting the value within the pre-defined limits, the
          input field will display an error outline. In the following example,
          the max is set to 123, and the minimum is at 23, the initial default
          value.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput
            defaultValue={23}
            min={23}
            max={123}
            clampValueOnBlur={false}
            maxWidth="100px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputSix() {
  return (
    <SectionContainer>
      <SectionHeading>Value Ranges</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In some cases, you may want to allow values that exceed the defined
          range. By using the <Mono>keepWithinRange</Mono> and{" "}
          <Mono>clampValueOnBlur</Mono> props and setting them to false, you can
          support this use case. When the value goes beyond the specified range
          (greater than max or less than min), the <Mono>NumberInput</Mono>{" "}
          component will internally set the isInvalid prop to true.
        </SectionDescription>
        <BasicText>
          In the following example, the max is set to 123, and the minimum is at
          23. But the <Mono>keepWithinRange</Mono> and{" "}
          <Mono>clampValueOnBlur</Mono> props are set to false. This means that
          the user may enter a range that exceeds the defined limits.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput
            defaultValue={23}
            max={123}
            keepWithinRange={false}
            clampValueOnBlur={false}
            maxWidth="100px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Formating Values</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>NumberInput</Mono> component allows you to format and
          parse the value according to your needs. You can provide custom
          formatting and parsing functions using the format and parse functions.
          The format function formats the value for display, while the parse
          function converts the formatted value back to its original form.
        </SectionDescription>
      </Box>
      <BasicText>
        The following example includes a format function that adds a{" "}
        <Mono>$</Mono> sign before the value and a parse function that removes
        the <Mono>$</Mono> sign from the value. The initial value is set to
        '1.23', and whenever the value changes, the <Mono>onChange</Mono>{" "}
        function updates the state after parsing the value.
      </BasicText>

      <MyFlex bg="background">
        <NumberInputFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputEight() {
  return (
    <SectionContainer>
      <SectionHeading>Input Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Similar to the <Mono>Input</Mono> component, you can adjust the size
          of the NumberInput component using the size prop. By providing
          different size values such as '<Mono>xs</Mono>', '<Mono>sm</Mono>', '
          <Mono>md</Mono>', or '<Mono>lg</Mono>', you can control the visual
          size of the input field.
        </SectionDescription>
        <BasicText>Here is a visual representation of these options:</BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInputFunctionTwo />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function NumberInputNine() {
  return (
    <SectionContainer>
      <SectionHeading>Styling</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You have the flexibility to customize the styles of various parts of
          the <Mono>NumberInput</Mono> component. By using style props such as{" "}
          <Mono>borderColor</Mono>, <Mono>bg</Mono>, and <Mono>_active</Mono>,
          you can modify the appearance of the input field and the stepper
          buttons. Additionally, you can change the icons used in the increment
          and decrement buttons by specifying custom children.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInput size="md" defaultValue={123} min={10} w="125">
            <NumberInputField borderColor="cyan" />
            <NumberInputStepper>
              <NumberIncrementStepper
                bg="accent_3"
                _active={{ bg: "accent_1" }}
                children="↑"
              />
              <NumberDecrementStepper
                bg="accent_3"
                _active={{ bg: "accent_1" }}
                children="↓"
              />
            </NumberInputStepper>
          </NumberInput>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */
export function NumberInputTen() {
  return (
    <SectionContainer>
      <SectionHeading>Mobile Number Input</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ If you need to create a mobile version of a number input, you can
          utilize the <Mono>useNumberInput</Mono> hook to build one. This hook
          provides convenient functions to handle the increment, decrement, and
          input functionalities.
        </SectionDescription>
        <BasicText>
          In the following example, the HookUsage component uses the{" "}
          <Mono>useNumberInput</Mono> hook to manage the state and behaviors of
          the number input. The hook is configured with various options such as
          <Mono>step</Mono>, <Mono>defaultValue</Mono>, <Mono>min</Mono>,{" "}
          <Mono>max</Mono>, and precision. The{" "}
          <Mono>getIncrementButtonProps</Mono>,{" "}
          <Mono>getDecrementButtonProps</Mono>, and <Mono>getInputProps</Mono>{" "}
          functions are used to retrieve the necessary props for the increment
          button, decrement button, and input field, respectively. These props
          are then spread onto the corresponding components (<Mono>Button</Mono>{" "}
          and <Mono>Input</Mono>) to enable the increment, decrement, and input
          functionalities.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <NumberInputFunctionThree />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */
export function NumberInputEleven() {
  return (
    <SectionContainer>
      <SectionHeading>Incorporating a Slider</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following two examples show two different ways you can integrate
          a number input with a slider component.
        </SectionDescription>
      </Box>

      <VStack w="100%" spacing={4}>
        <BasicText>
          This first example utilizes the <Mono>useNumberInput</Mono> hook from
          to manage the number input functionality. The value state is managed
          using useState and is initially set to the input value. Additionally,
          an effect is used to update the value state whenever the input value
          changes. The <Mono>handleSliderChange</Mono> function ensures
          synchronization between the <Mono>Slider</Mono> and the value state.
        </BasicText>
        <MyFlex bg="background">
          <>
            <NumberInputFunctionFour />
          </>
          <ModalCode>
            <Form.E25 />
          </ModalCode>
        </MyFlex>
        <BasicText>
          This following version manages the value state using useState,
          initializing it to 0. The <Mono>handleChange</Mono> function handles
          the updates to the value state when the <Mono>NumberInput</Mono> or{" "}
          <Mono>Slider</Mono> values change. The value prop of both the{" "}
          <Mono>NumberInput</Mono> and <Mono>Slider</Mono> is set to the value
          state, ensuring synchronization between them. The{" "}
          <Mono>focusThumbOnChange</Mono> prop of the <Mono>Slider</Mono> is set
          to false to prevent the <Mono>Slider</Mono> thumb from losing focus
          when the input value changes.
        </BasicText>
        <MyFlex bg="background">
          <>
            <NumberInputFunctionFive />
          </>
          <ModalCode>
            <Form.E26 />
          </ModalCode>
        </MyFlex>
        <BasicText>
          Both components above achieve the goal of combining a{" "}
          <Mono>NumberInput</Mono> and <Mono>Slider</Mono>, but with different
          approaches. The first example relies on the{" "}
          <Mono>useNumberInput</Mono> hook for managing the number input
          functionality, while second directly handles state management using{" "}
          <Mono>useState</Mono>. The former employs the <Mono>useEffect</Mono>{" "}
          hook to synchronize the value state with the input value, while the
          latter uses a single <Mono>handleChange</Mono> function to keep the
          value state in sync between the <Mono>NumberInput</Mono> and{" "}
          <Mono>Slider</Mono>.{" "}
        </BasicText>
      </VStack>
    </SectionContainer>
  );
}

/* ********************************************************************** */
export function NumberInputTwelve() {
  return (
    <SectionContainer>
      <SectionHeading>Mouse Scroll Control</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example shows how to enable the increment and decrement
          functionality using the mouse wheel events. The{" "}
          <Mono>allowMouseWheel</Mono> prop is set to true to activate this
          feature.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <NumberInput allowMouseWheel>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </MyFlex>
    </SectionContainer>
  );
}

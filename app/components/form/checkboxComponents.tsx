import { Box, Checkbox, CheckboxGroup, Flex, VStack } from "@chakra-ui/react";
import { BasicText, BlueBold, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { CheckboxFunctionOne } from "./checkboxFunctions";
import { BsFillStarFill } from "react-icons/bs";

/* ********************************************************************** */

export function CheckboxOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Here is an example of two checkboxes, one of which is initially
          checked, set with the <Mono>isChecked</Mono> prop.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <VStack alignItems="flex-start">
          <Checkbox isChecked>Subscribe to newsletter</Checkbox>
          <Checkbox>Agree to Terms and Conditions</Checkbox>
        </VStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Disabled Checkbox</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ For instances when you want to prevent user interaction with a
          checkbox, such as in view-only forms, you can use the{" "}
          <Mono>isDisabled</Mono> prop to disable the Checkbox. In this example,
          the <Mono>isDisabled</Mono> prop is used on both and the second
          checkbox is also set to <Mono>isChecked</Mono>. Notice the typography
          changes to indicate that the checkbox is disabled.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <VStack alignItems="flex-start">
          <Checkbox isDisabled>Notify me about updates</Checkbox>
          <Checkbox isDisabled isChecked>
            Share my data with partners
          </Checkbox>
        </VStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxThree() {
  return (
    <SectionContainer>
      <SectionHeading>Custom Color Schemes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can easily adjust the Checkbox's color scheme to match your
          application's design aesthetics. Just use the <Mono>colorScheme</Mono>{" "}
          prop. The following two examples use the <Mono>purple</Mono> and{" "}
          <Mono>pink</Mono> color schemes.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <VStack alignItems="flex-start">
            <Checkbox colorScheme="purple" isChecked>
              Enable push notifications
            </Checkbox>
            <Checkbox colorScheme="pink" isChecked>
              Opt in for emails
            </Checkbox>
          </VStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxFour() {
  return (
    <SectionContainer>
      <SectionHeading>Checkbox Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI provides three distinct sizes for its{" "}
          <Mono>Checkbox</Mono> component: '<Mono>sm</Mono>' (small), '
          <Mono>md</Mono>' (medium), and '<Mono>lg</Mono>' (large):
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <VStack alignItems="flex-start">
            <Checkbox size="sm" colorScheme="teal" isChecked>
              Small Teal Checkbox
            </Checkbox>
            <Checkbox size="md" colorScheme="pink" isChecked>
              Medium Pink Checkbox
            </Checkbox>
            <Checkbox size="lg" colorScheme="cyan" isChecked>
              Large Cyan Checkbox
            </Checkbox>
          </VStack>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxFive() {
  return (
    <SectionContainer>
      <SectionHeading>Invalid Checkbox</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>isInvalid</Mono> prop marks a checkbox as invalid. This is
          useful for form validation scenarios.
        </SectionDescription>
        <BasicText>Examples of use for this prop would be:</BasicText>
        <BulletBox>
          <ul>
            <li>
              <BlueBold>Form Validation</BlueBold>: If the checkbox is part of a
              form and there are specific validation rules associated with it,
              marking it as invalid visually communicates to the user that there
              is an issue with their selection. It can help prompt them to
              review and correct any errors before submitting the form.
            </li>
            <li>
              <BlueBold>Error Feedback</BlueBold>: If the checkbox selection is
              required and the user has not made a selection or has made an
              invalid choice, marking it as invalid helps provide clear feedback
              about the error. It helps users understand what needs to be
              corrected to proceed.
            </li>
            <li>
              <BlueBold>Accessibility</BlueBold>: Indicating the invalid state
              of a checkbox can improve accessibility by providing visual cues
              to users who may have difficulty perceiving or interpreting color.
              By combining visual indicators like the isInvalid prop with
              additional accessibility attributes, you can enhance the usability
              of your checkbox component for a wider range of users.
            </li>
            <li>
              <BlueBold>Visual Consistency</BlueBold>: Using the{" "}
              <Mono>isInvalid</Mono> prop ensures consistency in your UI design.
              When other form elements, such as text inputs or select boxes, are
              marked as invalid, having a consistent visual treatment for
              checkboxes can create a cohesive and intuitive user experience.
            </li>
          </ul>
        </BulletBox>
      </Box>

      <MyFlex bg="background">
        <>
          <Checkbox isInvalid>Accept terms and conditions</Checkbox>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxSix() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Spacing and Icon</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can modify the spacing between the <Mono>Checkbox</Mono> and
          label text using the spacing prop. Additionally, the{" "}
          <Mono>iconColor</Mono> prop allows you to customize the check icon's
          appearance. This why you can change the color of the checkmark that
          appears when a checkbox is checked.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <Checkbox iconColor="pink.500">I turn pink when checked</Checkbox>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Indeterminate Checkbox</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Indeterminate Checkbox</Mono> feature allows for a
          <Mono>Checkbox</Mono> to be in an intermediate state, neither checked
          nor unchecked. This is useful in scenarios such as a parent checkbox
          having multiple child checkboxes. An indeterminate checkbox means that
          it's neither checked nor unchecked, usually indicating that some of
          its associated nested checkboxes are checked but not all.
        </SectionDescription>
        <BasicText>
          In this component, there are three checkboxes. One parent checkbox and
          two child checkboxes. The state of the parent checkbox is derived from
          the states of the child checkboxes. If all children are checked, the
          parent checkbox will also be checked. If none of the children are
          checked, the parent will be unchecked. If only some of the children
          are checked, the parent will be in the indeterminate state.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <CheckboxFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxEight() {
  return (
    <SectionContainer>
      <SectionHeading>Checkbox Icon</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The checkbox component provides a way to use icons for the checkbox
          instead of the default checkmark. This is done by passing an icon prop
          to the <Mono>Checkbox</Mono> component. Here is an example of using
          the <Mono>icon</Mono> prop to pass in the <Mono>Star</Mono> icon from
          the <Mono>react-icons</Mono> library.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Checkbox colorScheme="cyan" size="lg" icon={<BsFillStarFill />}>
          I am a fancy checkbox!
        </Checkbox>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxNine() {
  return (
    <SectionContainer>
      <SectionHeading>CheckboxGroup</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ <Mono>CheckboxGroup</Mono> is a convenience component provided by
          Chakra UI that allows you to manage the state of multiple checkboxes
          as a group. It takes care of managing the checked state of its
          children checkboxes, so you don't have to do it manually. The
          defaultValue prop is used to define which checkboxes in the group are
          checked initially.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
          <VStack alignItems="flex-start">
            <Checkbox value="naruto">Princess Mononoke</Checkbox>
            <Checkbox value="sasuke">Spirited Away</Checkbox>
            <Checkbox value="kakashi">Howl's Moving Castle</Checkbox>
          </VStack>
        </CheckboxGroup>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CheckboxTen() {
  return (
    <SectionContainer>
      <SectionHeading>Hooks</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>useCheckbox</Mono> and <Mono>useCheckboxGroup</Mono> hooks
          are utility hooks provided by Chakra UI for managing state and focus
          for custom checkbox components. These hooks encapsulate the logic for
          handling the checked state and focus state of checkboxes, making it
          easier to build custom checkbox components.
        </SectionDescription>
      </Box>
    </SectionContainer>
  );
}

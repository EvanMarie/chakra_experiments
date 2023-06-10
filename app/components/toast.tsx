import { Box, Flex } from "@chakra-ui/react";
import {
  BasicText,
  FlexibleBox,
  Mono,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  ToastEightFunction,
  ToastFiveFunction,
  ToastFourFunction,
  ToastNineFunction,
  ToastOneFunction,
  ToastSevenFunction,
  ToastSixFunction,
  ToastThreeFunction,
  ToastTwoFunction,
} from "./toastFunctions";

export function ToastOne() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Simple Example
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The toast will close itself when the close button is clicked, or after
        a timeout. Toasts can be configured to appear at either the top or the
        bottom of an application window, and it is possible to have more than
        one toast onscreen at a time.
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={2}>
          <ToastOneFunction />
        </FlexibleBox>
      </Box>
      <BasicText>
        This is the code for my variation of the Chakra UI first example for
        toast. See an explanation of the code step-by-step below.{" "}
      </BasicText>

      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toastonecode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>

      <Box paddingX={6}>
        <ul>
          <li>
            The <b>useToast</b> hook is called to obtain the toast function,
            which can be used to display the toast notification.
          </li>
          <li>
            The component returns a <b>Button</b> component that triggers the
            toast notification when clicked.
          </li>
          <li>
            When the button is clicked, the toast function is called with an
            object that specifies the configuration for the toast notification.
            The configuration includes properties such as <b>title</b>,{" "}
            <b>description</b>,<b>status</b>, <b>duration</b>, and{" "}
            <b>isClosable</b>.
          </li>
          <li>
            The <b>title</b> property is set to "You did It!" to indicate a
            successful action.
          </li>
          <li>
            The <b>description</b> property provides additional details about
            the action, stating "You made toast! Great work!"
          </li>
          <li>
            The <b>status</b> property is set to "success" to determine the
            visual style of the toast.
          </li>
          <li>
            The <b>duration</b> property sets the duration for which the toast
            should be displayed on the screen. In this example, it is set to
            9000 milliseconds (9 seconds).
          </li>
          <li>
            The <b>isClosable</b> property allows the user to manually close the
            toast notification.
          </li>
          <li>The button's text is set as "Make Toast!".</li>
        </ul>
      </Box>
    </Box>
  );
}

export function ToastTwo() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Custom Component Toast:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ You can also create and display a custom component instead of the
        default Toast UI.
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={2}>
          <ToastTwoFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toasttwocode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

export function ToastThree() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Closing Toast Components:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Toasts can be closed imperatively, individually (via the <b>close</b>
        instance method) or all together (via the <b>closeAll</b> instance
        method).
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={4}>
          <ToastThreeFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toastthreecode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

export function ToastFour() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Updating Toast Components:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Toasts' options can be updated, by passing an id and the new options
        to the update instance method.
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={3}>
          <ToastFourFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toastfourcode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

export function ToastFive() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Toast Statuses
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ You can use status to change the overall representation of a toast.
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={2}>
          <ToastFiveFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toastfivecode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

export function ToastSix() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Variants on Toast
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The Toast component has the same types of variants as the Alert
        component does.
      </BasicText>
      <Box paddingX={6}>
        <ul>
          <li>
            <b>subtle</b>: A subtle variant with minimal visual impact.
          </li>
          <li>
            <b>solid</b>: A solid background color variant with a border.
          </li>
          <li>
            <b>left-accent</b>: A variant with a colored left accent border.
          </li>
          <li>
            <b>top-accent</b>: A variant with a colored top accent border.
          </li>
        </ul>
      </Box>
      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={2}>
          <ToastSixFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toastsixcode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

export function ToastSeven() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Customizing the Container of the Toast:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The <b>containerStyle</b> property is available to override the
        default styles for this aspect of the toast.
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={3}>
          <ToastSevenFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toastsevencode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

export function ToastEight() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Positioning the Toast:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The <b>position</b> property allows you to specify where the toast
        will popup from.
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={2}>
          <ToastEightFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toasteightcode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

export function ToastNine() {
  return (
    <Box marginTop="10px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Preventing Duplicate Toast:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ In some cases you might need to prevent duplicate of specific toasts.
        To achieve you need to pass an <b>id</b> and use the{" "}
        <b>toast.isActive</b> method to determine when to call <b>toast(...)</b>
        .
      </BasicText>

      <Box p={1}>
        <FlexibleBox bg={colors.sectionColor} padding={2}>
          <ToastNineFunction />
        </FlexibleBox>
      </Box>
      <FlexibleBox bg={colors.sectionColor} padding={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img src="./images/toastninecode.png" alt="skeleton" width="425px" />
        </Flex>
      </FlexibleBox>
    </Box>
  );
}

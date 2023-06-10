import { Box, Flex } from "@chakra-ui/react";

import { BasicText, colors } from "~/styles/reusableChakraComponents";
import { AlertDialogFunctionOne } from "./alertDialogFunctions";

export function AlertDialogueOne() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Default Usage
      </BasicText>
      <BasicText>
        This is is an example of how to use the <b>AlertDialog</b> component
        from Chakra UI. It renders a button labeled "Delete Customer" and opens
        an alert dialog when clicked. The alert dialog prompts the user to
        confirm the deletion action with the message "Are you sure? You can't
        undo this action afterwards." It provides two buttons for the user to
        choose from: "Cancel" and "Delete". The <b>useDisclosure</b> hook is
        used to control the open and close state of the dialog, and the{" "}
        <b>useRef</b> hook is used to reference the cancel button within the
        dialog.
      </BasicText>
      <Box p={5}>
        <Box marginY={1}>
          <AlertDialogFunctionOne />
        </Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <img
          src="./images/alertdialogcodeone.png"
          alt="skeleton"
          width="425px"
        />
      </Flex>
    </Box>
  );
}

export function AlertDialogueTwo() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

export function AlertDialogueThree() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

export function AlertDialogueFour() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

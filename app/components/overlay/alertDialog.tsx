import { Box, Flex } from "@chakra-ui/react";

import {
  BasicText,
  Mono,
  SectionDescription,
  SectionHeading,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  AlertDialogFunctionOne,
  AlertDialogFunctionTwo,
} from "./alertDialogFunctions";

export function AlertDialogueOne() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Default Usage</SectionHeading>
      <SectionDescription>
        ⦾ This is is an example of how to use the <Mono>AlertDialog</Mono>{" "}
        component from Chakra UI.
      </SectionDescription>{" "}
      <BasicText>
        It renders a button labeled "Delete Customer" and opens an alert dialog
        when clicked. The alert dialog prompts the user to confirm the deletion
        action with the message "Are you sure? You can't undo this action
        afterwards." It provides two buttons for the user to choose from:
        "Cancel" and "Delete". The <Mono>useDisclosure</Mono> hook is used to
        control the open and close state of the dialog, and the{" "}
        <Mono>useRef</Mono> hook is used to reference the cancel button within
        the dialog.
      </BasicText>
      <Box p={5}>
        <Box marginY={1}>
          <AlertDialogFunctionOne />
        </Box>
      </Box>
    </Box>
  );
}

export function AlertDialogueTwo() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Modifying the Animated Transition:</SectionHeading>
      <SectionDescription>
        ⦾ In Chakra UI, the <Mono>Modal</Mono> component has a default
        transition animation called "scale", which means it smoothly scales up
        and down when opening and closing.
      </SectionDescription>{" "}
      <BasicText>
        However, you can customize the transition animation by using the{" "}
        <Mono>motionPreset</Mono> prop. By setting the value of{" "}
        <Mono>motionPreset</Mono> to "slideInBottom", "slideInRight", or
        "scale", you can change the transition effect of the modal.
      </BasicText>
      <BasicText>
        For example, if you set <Mono>motionPreset="slideInRight"</Mono>, the
        modal will slide in from the right side of the screen when opening.
        Similarly, <Mono>motionPreset="slideInBottom"</Mono> will make the modal
        slide in from the bottom of the screen. If you want to retain the
        default scaling transition, you can simply omit the{" "}
        <Mono>motionPreset</Mono> prop.
      </BasicText>
      <Box p={5}>
        <Box marginY={1}>
          <AlertDialogFunctionTwo />
        </Box>
      </Box>
    </Box>
  );
}

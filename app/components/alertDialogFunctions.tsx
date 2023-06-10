import {
  Box,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useRef } from "react";

export function AlertDialogFunctionOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export function AlertDialogFunctionTwo() {
  return <Box>Function Logic</Box>;
}

export function AlertDialogFunctionThree() {
  return <Box>Function Logic</Box>;
}

export function AlertDialogFunctionFour() {
  return <Box>Function Logic</Box>;
}

export function AlertDialogFunctionFive() {
  return <Box>Function Logic</Box>;
}

export function AlertDialogFunctionSix() {
  return <Box>Function Logic</Box>;
}

export function AlertDialogFunctionSeven() {
  return <Box>Function Logic</Box>;
}

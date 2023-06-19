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
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";
import { colors } from "~/styles/DesignComponents";
import { ExampleContainer } from "~/styles/MainDesignComponents";

export function AlertDialogFunctionOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <ExampleContainer bg={colors.mainBackground}>
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
    </ExampleContainer>
  );
}

export function AlertDialogFunctionTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <ExampleContainer bg={colors.mainBackground}>
      <Button onClick={onOpen}>Are you sure?</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Just checking:</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Do you really want to give me that delicious cheeseburger 🍔 ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No way!
            </Button>
            <Button colorScheme="red" ml={3}>
              Of course!
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ExampleContainer>
  );
}

export const AgeVerificationDialog: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const verifyAge = () => {
    console.log("Age verified...");
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Enter Site</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Age Verification
            </AlertDialogHeader>

            <AlertDialogBody>
              This site contains age-restricted content. Are you over 18?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="green" onClick={verifyAge} ml={3}>
                Yes, I am over 18
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export const UnsavedChangesAlert: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const confirmNavigation = () => {
    console.log("Navigating away...");
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Navigate Away</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Unsaved Changes
            </AlertDialogHeader>

            <AlertDialogBody>
              You have unsaved changes. Are you sure you want to leave?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No, Keep Editing
              </Button>
              <Button colorScheme="red" onClick={confirmNavigation} ml={3}>
                Yes, Leave
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export const RateUsDialog: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const submitRating = () => {
    console.log("Rating submitted...");
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Rate Us</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Rate Us
            </AlertDialogHeader>

            <AlertDialogBody>
              We would appreciate your feedback. Could you rate us?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Not Now
              </Button>
              <Button colorScheme="green" onClick={submitRating} ml={3}>
                Rate Now
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

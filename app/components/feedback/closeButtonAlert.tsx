import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HighlightExample } from "~/styles/MainDesignComponents";

function CloseButtonAlert() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert status="success" color="black">
      <AlertIcon />
      <Box>
        <AlertTitle>WOO HOO!! What a success!</AlertTitle>
        <AlertDescription>
          This alert has a close button and a button you can click to open it
          back up.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="absolute"
        right={1}
        top={1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  );
}

export default CloseButtonAlert;

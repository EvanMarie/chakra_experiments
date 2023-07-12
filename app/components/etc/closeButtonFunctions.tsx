import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  CloseButton,
  Code,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  StackDivider,
  Text,
  Toast,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillMenuAppFill, BsMenuButtonFill } from "react-icons/bs";
import { SingleExample } from "~/styles/MainDesignComponents";

/* ********************************************************************** */

export function CloseButtonFunctionOne() {
  return (
    <SingleExample bg="background">
      <Center w="100%">
        <VStack
          spacing={4}
          py={3}
          bg="mainText"
          color="background"
          borderRadius="lg"
          px={4}
        >
          <HStack w="100%" spacing={0}>
            <Box w="250px">
              <Code
                fontSize={["13px", "15px"]}
              >{`<CloseButton size="sm" />`}</Code>
            </Box>
            <CloseButton size="sm" />
          </HStack>
          <HStack w="100%" spacing={0}>
            <Box w="250px">
              <Code
                fontSize={["13px", "15px"]}
              >{`<CloseButton size="md" />`}</Code>
            </Box>
            <CloseButton size="md" />
          </HStack>
          <HStack w="100%" spacing={0}>
            <Box w="250px">
              <Code
                fontSize={["13px", "15px"]}
              >{`<CloseButton size="lg" />`}</Code>
            </Box>
            <CloseButton size="lg" />
          </HStack>
        </VStack>
      </Center>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CloseButtonFunctionTwo() {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <Center h="125px" w="100%">
      {showAlert ? (
        <Alert
          status="info"
          color="background"
          borderRadius="lg"
          w="fit-content"
        >
          <HStack
            w="100%"
            alignItems="flex-start"
            spacing={4}
            justify="space-between"
          >
            <Center>
              <AlertIcon mt={4} boxSize="25px" />
            </Center>
            <VStack p={2} flex={1}>
              <Text mb={0}>You can close me.</Text>{" "}
              <Text mb={0}>But then I will be gone.</Text>
            </VStack>
            <Flex align="flex-start">
              <CloseButton onClick={handleClose} />
            </Flex>
          </HStack>
        </Alert>
      ) : (
        <Center w="100%" h="100%">
          <Button size="sm" onClick={() => setShowAlert(true)}>
            Reset Alert
          </Button>
        </Center>
      )}
    </Center>
  );
}

/* ********************************************************************** */

export function CloseButtonFunctionThree() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SingleExample bg="background">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg="tipBackground">
          <ModalHeader bg="accent_2">Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Modal Content</ModalBody>
          <ModalFooter>Modal Footer</ModalFooter>
        </ModalContent>
      </Modal>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CloseButtonFunctionFour() {
  const toast = useToast();
  return (
    <SingleExample bg="background">
      <Button
        onClick={() =>
          toast({
            title: "Toast Time.",
            description: "Congrats! Here's a Toast to you.",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CloseButtonFunctionFive() {
  return (
    <SingleExample bg="background">
      {" "}
      <Popover placement="top">
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent bg="accent_2" color="background">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Popover body content</PopoverBody>
        </PopoverContent>
      </Popover>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CloseButtonFunctionSix() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <SingleExample bg="background">
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open Drawer
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg="accent_2">Drawer Header</DrawerHeader>

            <DrawerBody bg="tipBackground" color="background">
              Drawer Content
            </DrawerBody>

            <DrawerFooter bg="accent_2">Drawer Footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CloseButtonFunctionSeven() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SingleExample bg="background">
      {" "}
      <VStack w="100%" h="150px">
        <Button size="sm" onClick={onOpen}>
          Show Notification
        </Button>
        <Box
          bg="accent_1"
          color="background"
          p={4}
          borderRadius="md"
          display={isOpen ? "block" : "none"}
          position="relative"
        >
          This is an important custom notification message!
          <CloseButton
            position="absolute"
            right={1}
            top={1}
            onClick={onClose}
          />
        </Box>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CloseButtonFunctionEight() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <SingleExample>
      <VStack
        p={1}
        borderRadius="lg"
        w="100%"
        align="flex-start"
        h="150px"
        divider={
          <StackDivider opacity="0.5" display={isOpen ? "block" : "none"} />
        }
      >
        <HStack w="100%" justify="flex-start">
          <IconButton
            boxSize={8}
            icon={isOpen ? <CloseButton /> : <AiOutlineMenuUnfold />}
            onClick={onToggle}
            aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
          />
          <Text
            mb={0}
            display={isOpen ? "block" : "none"}
            fontSize="lg"
            color="accent_2"
            fontWeight="bold"
          >
            Custom Sidebar
          </Text>{" "}
        </HStack>
        <VStack
          w="100%"
          spacing={1}
          display={isOpen ? "block" : "none"}
          pl="55px"
        >
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </VStack>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface CloseButtonFunctionNineProps {
  imageUrl: string;
}

export function CloseButtonFunctionNine({
  imageUrl,
}: CloseButtonFunctionNineProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SingleExample>
      <Image
        src={imageUrl}
        onClick={onOpen}
        boxSize={["125px", "200px", "75px"]}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="rgba(0,0,0,0.5)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <Image src={imageUrl} />
          <CloseButton
            position="absolute"
            top={2}
            right={3}
            onClick={onClose}
          />
        </ModalContent>
      </Modal>
    </SingleExample>
  );
}

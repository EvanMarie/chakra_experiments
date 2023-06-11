import { ExampleContainer, colors } from "~/styles/reusableChakraComponents";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Input } from "@chakra-ui/react";

export function DrawerFunctionOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <ExampleContainer bg={colors.mainBackground}>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ExampleContainer>
  );
}

export function ComponentFunctionTwo() {
  return (
    <ExampleContainer bg={colors.mainBackground}>
      {" "}
      Function Logic
    </ExampleContainer>
  );
}

export function ComponentFunctionThree() {
  return (
    <ExampleContainer bg={colors.mainBackground}>
      {" "}
      Function Logic
    </ExampleContainer>
  );
}

export function ComponentFunctionFour() {
  return (
    <ExampleContainer bg={colors.mainBackground}>
      {" "}
      Function Logic
    </ExampleContainer>
  );
}

export function ComponentFunctionFive() {
  return (
    <ExampleContainer bg={colors.mainBackground}>
      {" "}
      Function Logic
    </ExampleContainer>
  );
}

export function ComponentFunctionSix() {
  return (
    <ExampleContainer bg={colors.mainBackground}>
      {" "}
      Function Logic
    </ExampleContainer>
  );
}

export function ComponentFunctionSeven() {
  return (
    <ExampleContainer bg={colors.mainBackground}>
      {" "}
      Function Logic
    </ExampleContainer>
  );
}

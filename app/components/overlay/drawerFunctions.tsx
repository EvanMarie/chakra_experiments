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
  RadioGroup,
  Stack,
  Radio,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";

export function DrawerFunctionOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <SingleExample bg="background">
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
    </SingleExample>
  );
}

export function DrawerFunctionTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState<
    "top" | "right" | "bottom" | "left"
  >("right");

  return (
    <>
      <RadioGroup
        defaultValue={placement}
        onChange={(nextValue) =>
          setPlacement(nextValue as "top" | "right" | "bottom" | "left")
        }
      >
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>I am some contents in a paragraph.</p>
            <p>I am another paragraph utterly full of content.</p>
            <p>Wow, the content around here is astounding.</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function ComponentFunctionThree() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function ComponentFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function ComponentFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function ComponentFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function ComponentFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

import {
  VStack,
  Button,
  Collapse,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  Center,
  Box,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";

const transitionContainerStyle = {
  w: "100%",
  align: "center",
  bg: "mainText",
  color: "background",
  p: "4",
  borderRadius: "lg",
};

const transitionBoxStyle = {
  w: "250px",
  borderRadius: "lg",
  color: "background",
  bg: "accent_2",
  p: "4",
  border: "2px solid #444444",
  shadow: "xl",
};

export function TransitionsFunctionOne() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack w="100%" spacing={0}>
      <Button size="sm" onClick={onToggle}>
        Click Me
      </Button>
      <Center h="70px" w="100%">
        <Fade in={isOpen}>
          <Center sx={transitionBoxStyle}>Fade</Center>
        </Fade>
      </Center>
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionTwo() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack sx={transitionContainerStyle}>
      <Button size="sm" onClick={onToggle}>
        Click Me
      </Button>
      <Center h="70px" w="100%">
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Center sx={transitionBoxStyle}>ScaleFade</Center>
        </ScaleFade>
      </Center>
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionThree() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack sx={transitionContainerStyle}>
      <Button size="sm" onClick={onToggle}>
        Click Me
      </Button>
      <Center h="70px" w="100%">
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Center sx={transitionBoxStyle}>Slide</Center>
        </Slide>
      </Center>
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionFour() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack sx={transitionContainerStyle}>
      <Button size="sm" onClick={onToggle}>
        Click Me
      </Button>
      <Center h="70px" w="100%">
        <SlideFade in={isOpen} offsetY="20px">
          <Center sx={transitionBoxStyle}>SlideFade</Center>
        </SlideFade>
      </Center>
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionFive() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack sx={transitionContainerStyle}>
      <Button size="sm" onClick={onToggle}>
        Click Me
      </Button>
      <Center h="70px" w="100%">
        <Collapse in={isOpen} animateOpacity>
          <Center sx={transitionBoxStyle}>Collapse</Center>
        </Collapse>
      </Center>
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function TransitionsFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

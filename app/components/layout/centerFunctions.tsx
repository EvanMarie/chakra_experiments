import { PhoneIcon, SunIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Circle,
  HStack,
  Square,
  VStack,
} from "@chakra-ui/react";
import { CSSProperties, useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";

export function CenterFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <Center
        h="150px"
        w="100%"
        bg="accent_1"
        color="background"
        fontSize="lg"
        borderRadius="lg"
      >
        The Center.
      </Center>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CenterFunctionTwo() {
  return (
    <SingleExample bg="background">
      <VStack w="100%" align="center" spacing={4} color="background">
        <Circle size="80px" bg="accent_2">
          <SunIcon boxSize={33} />
        </Circle>
        <Square size="80px" bg="accent_1">
          <SunIcon boxSize={33} />
        </Square>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CenterFunctionThree() {
  return (
    <SingleExample bg="background">
      <Box position="relative" color="background" h="100px">
        <AbsoluteCenter bg="accent_1" p="4" axis="both">
          <SunIcon />
        </AbsoluteCenter>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function CenterFunctionFour() {
  const [isMoving, setIsMoving] = useState(false);

  const handleButtonClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <Center position="relative" height="175px">
      <Square
        size="75px"
        bg="accent_1"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(-40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.8s ease"
      />
      <Square
        size="75px"
        bg="accent_2"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.6s ease"
      />
      <Square
        size="75px"
        bg="accent_1"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, 40px) rotate(90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.4s ease"
        _hover={{ cursor: "pointer" }}
      />
      <Square
        size="75px"
        bg="accent_2"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(-40px, 40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.3s ease"
      />
      <Button
        size="sm"
        bg={isMoving ? "background" : "tipBackground"}
        color={isMoving ? "tipBackground" : "background"}
        borderRadius="md"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        onClick={handleButtonClick}
        _hover={{
          cursor: "pointer",
          bg: isMoving ? "tipBackground" : "background",
          color: isMoving ? "background" : "tipBackground",
        }}
      >
        {isMoving ? "Close" : "Open"}
      </Button>
    </Center>
  );
}

/* ********************************************************************** */

export function CenterFunctionFive() {
  const [isMoving, setIsMoving] = useState(false);

  const handleButtonClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <Center position="relative" height="175px">
      <Square
        size="75px"
        bgImage={`url('https://generative-placeholders.glitch.me/image?width=150&height=150&style=triangles&gap=15&colors=15')`}
        bgPosition="top left"
        bgSize="200% 200%"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(-40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.8s ease"
      />
      <Square
        size="75px"
        bgImage={`url('https://generative-placeholders.glitch.me/image?width=150&height=150&style=triangles&gap=15&colors=15')`}
        bgPosition="top right"
        bgSize="200% 200%"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.6s ease"
      />
      <Square
        size="75px"
        bgImage={`url('https://generative-placeholders.glitch.me/image?width=150&height=150&style=triangles&gap=15&colors=15')`}
        bgPosition="bottom right"
        bgSize="200% 200%"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, 40px) rotate(90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.4s ease"
        _hover={{ cursor: "pointer" }}
      />
      <Square
        size="75px"
        bgImage={`url('https://generative-placeholders.glitch.me/image?width=150&height=150&style=triangles&gap=15&colors=15')`}
        bgPosition="bottom left"
        bgSize="200% 200%"
        position="absolute"
        top="50%"
        left="50%"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(-40px, 40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.3s ease"
      />
      <Button
        size="sm"
        bg={isMoving ? "background" : "tipBackground"}
        color={isMoving ? "tipBackground" : "background"}
        borderRadius="md"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        onClick={handleButtonClick}
        _hover={{
          cursor: "pointer",
          bg: isMoving ? "tipBackground" : "background",
          color: isMoving ? "background" : "tipBackground",
        }}
      >
        {isMoving ? "Close" : "Open"}
      </Button>
    </Center>
  );
}

/* ********************************************************************** */

export function CenterFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

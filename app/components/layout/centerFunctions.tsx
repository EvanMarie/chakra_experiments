import { PhoneIcon, SunIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Circle,
  HStack,
  Heading,
  Square,
  Text,
  VStack,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import { CSSProperties, useEffect, useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { GiFlowerTwirl } from "react-icons/gi";

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

const squareDefaults = {
  size: "75px",
  borderRadius: "md",
  top: "50%",
  left: "50%",
};

export function CenterFunctionFour() {
  const [isMoving, setIsMoving] = useState(false);

  const handleButtonClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <Center position="relative" height="175px">
      <Square
        {...squareDefaults}
        bg="accent_1"
        position="absolute"
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(-40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.8s ease"
      />
      <Square
        bg="accent_2"
        position="absolute"
        {...squareDefaults}
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.6s ease"
      />
      <Square
        bg="accent_1"
        position="absolute"
        {...squareDefaults}
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, 40px) rotate(90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.4s ease"
        _hover={{ cursor: "pointer" }}
      />
      <Square
        bg="accent_2"
        position="absolute"
        {...squareDefaults}
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
        bgImage={`url('/images/squareImageTriangles.png')`}
        bgPosition="top left"
        bgSize="200% 200%"
        position="absolute"
        {...squareDefaults}
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(-40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.8s ease"
      />
      <Square
        bgImage={`url('/images/squareImageTriangles.png')`}
        bgPosition="top right"
        bgSize="200% 200%"
        position="absolute"
        {...squareDefaults}
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, -40px) rotate(-90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.6s ease"
      />

      <Square
        bgImage={`url('/images/squareImageTriangles.png')`}
        bgPosition="bottom right"
        bgSize="200% 200%"
        position="absolute"
        {...squareDefaults}
        transform={
          isMoving
            ? "translate(-50%, -50%) translate(40px, 40px) rotate(90deg)"
            : "translate(-50%, -50%)"
        }
        transition="transform 0.4s ease"
        _hover={{ cursor: "pointer" }}
      />
      <Square
        bgImage={`url('/images/squareImageTriangles.png')`}
        bgPosition="bottom left"
        bgSize="200% 200%"
        position="absolute"
        {...squareDefaults}
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
  const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

  const dotAnimation = (delay: number) => keyframes`
    0%, 20% { opacity: 0; }
    ${20 + delay}%, 100% { opacity: 1; }
  `;

  return (
    <SingleExample bg="background" position="relative">
      <HStack spacing={1}>
        <Circle
          size="fit-content"
          color="white"
          position="relative"
          animation={`${spinAnimation} 3s linear infinite`}
        >
          <GiFlowerTwirl size={27} color="cyan" />
        </Circle>
        <Heading as="span" size="md" color="accent_1">
          Loading
          <Box as="span" animation={`${dotAnimation(0)} 1.25s linear infinite`}>
            .
          </Box>
          <Box
            as="span"
            animation={`${dotAnimation(33)} 1.25s linear infinite`}
          >
            .
          </Box>
          <Box
            as="span"
            animation={`${dotAnimation(66)} 1.25s linear infinite`}
          >
            .
          </Box>
        </Heading>
      </HStack>
    </SingleExample>
  );
}
/* ********************************************************************** */

export function CenterFunctionSeven() {
  const [isHovered, setIsHovered] = useState(false);

  const circleColor = useColorModeValue(
    "rgba(0, 128, 128, 0.7)", // Adjust the opacity value (0.5 in this example)
    "rgba(0, 128, 128, 0.7)"
  );
  const textColor = useColorModeValue("mainText", "background");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Circle
      size="150px"
      borderRadius="50% / 30% 70%"
      bg={isHovered ? circleColor : "transparent"}
      color={textColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="background-color 0.7s ease"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button width="125px" fontSize="xl" fontWeight="bold">
        {isHovered ? "Hovered!" : "Hover Me!"}
      </Button>
    </Circle>
  );
}

/* ********************************************************************** */

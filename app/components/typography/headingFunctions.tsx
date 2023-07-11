import {
  Box,
  Button,
  Center,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGem } from "react-icons/fa";
import {
  GridStyles,
  boxColors,
  gridBoxStyles,
} from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function HeadingFunctionOne() {
  return (
    <SingleExample bg="background">
      <Heading>This is the as basic as a heading gets.</Heading>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HeadingFunctionTwo() {
  return (
    <SingleExample bg="background">
      <VStack spacing={6} {...GridStyles}>
        <Heading
          as="h1"
          size="4xl"
          noOfLines={1}
          {...gridBoxStyles}
          bg={boxColors.one}
          w="fit-content"
        >
          4xl as h1
        </Heading>
        <Heading
          as="h2"
          size="3xl"
          noOfLines={1}
          {...gridBoxStyles}
          bg={boxColors.two}
          w="fit-content"
        >
          3xl as h2
        </Heading>
        <Heading
          as="h2"
          size="2xl"
          {...gridBoxStyles}
          w="fit-content"
          bg={boxColors.three}
        >
          2xl as h2
        </Heading>
        <Heading
          as="h3"
          size="xl"
          {...gridBoxStyles}
          bg={boxColors.four}
          w="fit-content"
        >
          xl as h3
        </Heading>
        <Heading
          as="h4"
          size="lg"
          {...gridBoxStyles}
          bg={boxColors.five}
          w="fit-content"
        >
          lg as h4
        </Heading>
        <Heading
          as="h5"
          size="md"
          {...gridBoxStyles}
          bg={boxColors.six}
          w="fit-content"
        >
          md as h5
        </Heading>
        <Heading
          as="h6"
          size="sm"
          {...gridBoxStyles}
          bg={boxColors.one}
          w="fit-content"
        >
          sm as h6
        </Heading>
        <Heading
          as="h6"
          size="xs"
          {...gridBoxStyles}
          bg={boxColors.two}
          w="fit-content"
        >
          xs as h6
        </Heading>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HeadingFunctionThree() {
  return (
    <SingleExample bg="background">
      <Heading noOfLines={1}>
        This overly long heading will be truncated after one line.
      </Heading>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HeadingFunctionFour() {
  return (
    <SingleExample bg="background">
      <Heading size="lg" fontSize="50px">
        Style override has been applied.
      </Heading>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HeadingFunctionFive() {
  return (
    <SingleExample bg="background">
      <Box maxW="500px" {...GridStyles}>
        <Heading as="h1" size="xl" mb={4} {...gridBoxStyles} bg={boxColors.one}>
          Welcome to the World of Coding
        </Heading>
        <VStack
          spacing={0}
          divider={<StackDivider opacity="0.4" />}
          {...gridBoxStyles}
          bg={boxColors.three}
        >
          <Text fontSize="lg">
            Discover the endless possibilities of coding and unlock your
            potential to create amazing applications.
          </Text>

          <Text fontSize="lg" mt={4}>
            Whether you're a beginner or an experienced developer, we have
            resources and tutorials to help you level up your skills.
          </Text>
        </VStack>
        <Center w="100%">
          <Button size="sm" mt={3}>
            Get Started
          </Button>
        </Center>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HeadingFunctionSix() {
  const BouncingHeading = motion(Heading);
  return (
    <SingleExample bg="background">
      <Center w="100%" bg="accent_2" textAlign="center" borderRadius="lg" p={2}>
        <BouncingHeading
          as="h2"
          size="lg"
          whileHover={{ y: -10, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          bgGradient="linear(to-r, purple.500, pink.500)"
          bgClip="text"
        >
          Welcome to the Fun Zone!
        </BouncingHeading>
      </Center>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HeadingFunctionSeven() {
  return (
    <SingleExample bg="background">
      {" "}
      <Heading
        as="h3"
        size="md"
        display="flex"
        alignItems="center"
        bg="sectionColor"
        borderRadius="lg"
        w="100%"
        p={4}
        color="accent_2"
      >
        <Box color="accent_2" mr={2}>
          <FaGem size={20} style={{ marginRight: "0.5rem" }} />
        </Box>
        You're a Gem
      </Heading>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HeadingFunctionEight() {
  const [typedText, setTypedText] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined); // updated type
  const textToType = "Unleash Your Creativity!";

  useEffect(() => {
    const typingInterval = () => {
      if (typedText.length < textToType.length) {
        setTypedText(
          (prevText) => prevText + (textToType[prevText.length] || "")
        );
      }

      if (typedText.length >= textToType.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    };

    intervalRef.current = setInterval(typingInterval, 100);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [typedText]);

  const handleReplayAnimation = () => {
    setTypedText("");
  };

  return (
    <>
      <Box
        w="100%"
        bg="sidebarBackground"
        borderRadius="lg"
        p={3}
        mb={2}
        border="1px solid cyan"
      >
        <Box h="75px" w="100%">
          <Heading color="cyan" size="26px" fontFamily="monospace">
            {typedText}
          </Heading>
        </Box>
        <Text color="deeppink" fontSize="20px" textShadow="xl">
          Inquire about our special offers today!
        </Text>
      </Box>
      <Center w="100%">
        <Button size="sm" onClick={handleReplayAnimation}>
          Replay
        </Button>
      </Center>
    </>
  );
}

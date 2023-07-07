import {
  Badge,
  Box,
  Button,
  Code,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { HiFilm } from "react-icons/hi";
import { useState } from "react";
export function BoxFunctionOne() {
  return (
    <SingleExample bg="background">
      <Box bg="cyan" w="100%" p={4} color="black">
        <Text>This is a box, and to make it: </Text>
        <Code>{`<Box bg="cyan" w="100%" p={4} color="black">`}</Code>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function BoxFunctionTwo() {
  return (
    <SingleExample bg="background">
      {" "}
      <Box bg="cyan" w={["100%", "50%", "25%"]} p={4} color="black">
        This is a responsive Box with the following width specified:
        <Code>{`w={["100%", "50%", "25%"]}`}</Code>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function BoxFunctionThree() {
  return (
    <SingleExample bg="background">
      <Box bg="cyan" color="black" p={4} m={2} borderRadius="md">
        These styles are made using shorthand props.
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface BoxFunctionFourProps {
  children: React.ReactNode;
}

export function BoxFunctionFour({ children }: BoxFunctionFourProps) {
  return (
    <SingleExample bg="background">
      <Box
        as="button"
        bg="cyan"
        color="black"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{ bg: "darkgray", color: "cyan" }}
      >
        {children}
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function BoxFunctionFive() {
  const boxInfo = {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg/1280px-Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg",
    imageAlt: "Hayao Miyazaki",
    title: "Hayao Miyazaki",
    occupation: "Director, Animator, Screenwriter, Producer",
    description:
      "Hayao Miyazaki is a Japanese animator, filmmaker, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, a film and animation studio, he has attained international acclaim as a masterful storyteller and as a maker of anime feature films, and is widely regarded as one of the greatest animation directors.",
    notableWorks: [
      "Princess Mononoke",
      "Spirited Away",
      "Howl's Moving Castle",
      "Nausicaa of the Valley of the Wind",
    ],
  };
  return (
    <SingleExample bg="background">
      <Flex
        align="center"
        direction="column"
        justify="center"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        maxW="450px"
        p={4}
        bg="tipBackground"
        color="background"
      >
        <Image
          src={boxInfo.imageUrl}
          alt={boxInfo.imageAlt}
          maxW="200px"
          borderRadius="md"
          shadow="lg"
        />

        <Box px={10} pt={4}>
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" bg="accent_2">
              Best
            </Badge>
            <VStack
              align="start"
              spacing={1}
              color="background"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              <Box>
                <Heading size="md">{boxInfo.title} </Heading>
              </Box>
              <Box>{boxInfo.occupation}</Box>
            </VStack>
          </Box>

          <Box
            mt={3}
            fontWeight="semibold"
            lineHeight="tight"
            bg="sidebarBackground"
            color="mainText"
            borderRadius="md"
            p={2}
          >
            <VStack spacing={1} align="flex-start" px={4}>
              <Heading size="sm" color="accent_2">
                Notable Works
              </Heading>
              {boxInfo.notableWorks.map((work) => (
                <HStack key={work} pl={4}>
                  <IconButton
                    size="xs"
                    aria-label="film-icon"
                    icon={<HiFilm />}
                  />
                  <Box key={work} pl={1} fontSize="md">
                    {work}
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Box>
      </Flex>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function BoxFunctionSix() {
  return (
    <SingleExample bg="background">
      <Box
        bgGradient="linear(to-r, teal.500, blue.500)"
        w="150px"
        h="100%"
        borderRadius="md"
        color="white"
        p={2}
      >
        This Box has a gradient background!
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function BoxFunctionSeven() {
  return (
    <SingleExample bg="background">
      <Heading size="sm">Ragnarök</Heading>
      <Box
        border="0.5px solid rgba(134, 0, 67, 0.4)"
        w="100%"
        h="100%"
        borderRadius="md"
      >
        <Box
          overflowY="scroll"
          maxHeight="200px"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray.300",
              borderRadius: "full",
            },
          }}
        >
          <Box bg="sidebarBackground" p={1} borderRadius="md">
            <p>
              In a world of fur, where wonders unfurl,
              <br />
              There walks a Poodle, Ragnarök, a true pearl.
              <br /> With a coat of brown, he stands proud and tall,
              <br /> The best dog in the world, loved by all.
            </p>
            <p>
              {" "}
              His eyes sparkle with wisdom and grace,
              <br />A loyal companion, bringing joy to every place.
              <br /> With each wag of his tail, hearts are beguiled,
              <br /> Ragnarök, the embodiment of pure canine pride.{" "}
            </p>
            <p>
              From playful bounds to a gentle nudge,
              <br />
              He showers love and never holds a grudge. <br />
              Through days of sunshine or storms that whirl,
              <br />
              Ragnarök endures as the best dog in the world.
            </p>
          </Box>
        </Box>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface BoxFunctionEightProps {
  children: React.ReactNode;
}

export function BoxFunctionEight({ children }: BoxFunctionEightProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SingleExample bg="background">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Box
        display={isOpen ? "block" : "none"}
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(255, 255, 255, 0.3)"
        zIndex="9999"
        borderRadius="lg"
      >
        <Box
          position="absolute"
          bg="sectionColor"
          w="300px"
          h="400px"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          p={4}
          borderRadius="md"
          boxShadow="lg"
        >
          <VStack h="100%" w="100%" overflowY="scroll">
            <Flex align="center" justify="center" w="100%" h="370px">
              {children}
            </Flex>
            <Flex align="center" justify="center">
              <Button onClick={handleClose} mt={4}>
                Close
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </SingleExample>
  );
}

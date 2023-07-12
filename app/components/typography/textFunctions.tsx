import {
  Box,
  Button,
  Center,
  Code,
  HStack,
  Icon,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  StackDivider,
  Switch,
  Text,
  Textarea,
  VStack,
  theme,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  BsFillPauseBtnFill,
  BsFillPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";
import { FaArrowsAltH, FaPause, FaPlay } from "react-icons/fa";
import { GridStyles, textAreaStyling } from "~/styles/DesignComponents";
import { textareaStyles } from "~/styles/ExtendedTheme";
import { SingleExample } from "~/styles/MainDesignComponents";

export function TextFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <VStack spacing={4} {...GridStyles} color="background" p={6}>
        <Text fontSize="6xl">fontSize="6xl"</Text>
        <Text fontSize="5xl">fontSize="5xl"</Text>
        <Text fontSize="4xl">fontSize="4xl"</Text>
        <Text fontSize="3xl">fontSize="3xl"</Text>
        <Text fontSize="2xl">fontSize="2xl"</Text>
        <Text fontSize="xl">fontSize="xl"</Text>
        <Text fontSize="lg">fontSize="lg"</Text>
        <Text fontSize="md">fontSize="md"</Text>
        <Text fontSize="sm">fontSize="sm"</Text>
        <Text fontSize="xs">fontSize="xs"</Text>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextFunctionTwo() {
  const [noOfLines, setNoOfLines] = useState(3);
  const totalLines = 44;

  const handleSliderChange = (value: number) => {
    setNoOfLines(value);
  };

  return (
    <SingleExample bg="background">
      <VStack w="100%" spacing={4}>
        {/* <Text fontSize="md" color="accent_2">
          noOfLines = {noOfLines}
        </Text> */}

        <Code fontSize="lg">{`noOfLines = ${noOfLines}`}</Code>

        <Slider
          defaultValue={noOfLines}
          min={1}
          max={totalLines}
          onChange={handleSliderChange}
          maxW="400px"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6} bg="accent_1">
            <Box color="background" fontSize="sm">
              <FaArrowsAltH />
            </Box>
          </SliderThumb>
        </Slider>
        <Box
          color="background"
          bg="mainText"
          borderRadius="lg"
          p={5}
          fontSize={["md", "md", "lg"]}
        >
          <Text noOfLines={noOfLines}>
            Once upon a time, in the vast plains of Africa, there lived a
            magnificent rhinoceros named Ricardo. Ricardo was a gentle giant,
            known for his massive horn and calm demeanor. He roamed freely
            across the savannah, always mindful of his surroundings. Ricardo had
            a unique story that captured the hearts of all who encountered him.
            Born with a distinctive pattern on his tough skin resembling a
            constellation, he became a symbol of strength and beauty. Despite
            his immense size, Ricardo possessed a kind soul. He would often be
            seen mingling with other animals, offering protection and support
            whenever they needed it. His presence alone brought a sense of
            tranquility to the wilderness. One sunny day, while Ricardo grazed
            peacefully near a watering hole, he spotted a family of playful
            elephants. Intrigued by their jovial antics, he decided to join in
            their games. The elephants welcomed him with open hearts, and
            together they created memories that would last a lifetime. As time
            passed, news of Ricardo's gentle nature spread far and wide. People
            from distant lands yearned to catch a glimpse of this remarkable
            rhino. They traveled great distances to witness his majestic
            presence and learn from his serene aura. Ricardo's story served as a
            reminder that strength could coexist with compassion. His remarkable
            journey touched the lives of many, inspiring them to embrace their
            unique qualities and treat others with kindness. And so, Ricardo the
            rhino continued his adventures, traversing the plains and leaving a
            trail of wonder and awe in his wake. His legacy lived on, forever
            etched in the hearts of those who knew him, as a symbol of
            resilience, grace, and the extraordinary power of a gentle spirit.
          </Text>
        </Box>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextFunctionThree() {
  return (
    <SingleExample bg="background">
      <VStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="b">`}</Code>
          </Box>
          <Text as="b">Bold</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="i">`}</Code>
          </Box>{" "}
          <Text as="i">Italic</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="u">`}</Code>
          </Box>{" "}
          <Text as="u">Underline</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="abbr">`}</Code>
          </Box>{" "}
          <Text as="abbr">I18N</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="cite">`}</Code>
          </Box>{" "}
          <Text as="cite">Citation</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="del">`}</Code>
          </Box>{" "}
          <Text as="del">Deleted</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="em">`}</Code>
          </Box>{" "}
          <Text as="em">Emphasis</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="ins">`}</Code>
          </Box>{" "}
          <Text as="ins">Inserted</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="kbd">`}</Code>
          </Box>{" "}
          <Text as="kbd">Keyboard</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="mark">`}</Code>
          </Box>{" "}
          <Text as="mark">Mark</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="q">`}</Code>
          </Box>{" "}
          <Text as="q">Quote</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="s">`}</Code>
          </Box>
          <Text as="s">Strikethrough</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="samp">`}</Code>
          </Box>{" "}
          <Text as="samp">Sample</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="sub">`}</Code>
          </Box>{" "}
          <Text as="sub">Subscript</Text>
        </HStack>
        <HStack w="100%">
          <Box w="150px">
            <Code>{`<Text as="sup">`}</Code>
          </Box>{" "}
          <Text as="sup">Superscript</Text>
        </HStack>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextFunctionFour() {
  const [phrases, setPhrases] = useState([
    "Input 3 lines of text and",
    "you can make your own",
    "animated text too!",
  ]);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAnimationRunning) {
      interval = setInterval(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [phrases, isAnimationRunning]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputLines = event.target.value.split("\n");
    const newPhrases = inputLines.slice(0, 3);

    setPhrases(newPhrases);
    setCurrentPhraseIndex(0);
  };

  const handleToggleAnimation = () => {
    setIsAnimationRunning((prevState) => !prevState);
  };

  const buttonColor = isAnimationRunning ? "accent_1" : "accent_2";
  const icon = isAnimationRunning ? (
    <FaPause size={24} />
  ) : (
    <FaPlay size={36} />
  );

  return (
    <VStack w="100%" spacing={4}>
      <Textarea
        {...textAreaStyling}
        resize="none"
        rows={3}
        onChange={handleInputChange}
        placeholder="Enter three lines of text"
      />
      <Center
        w="100%"
        h="100px"
        my={3}
        color="accent_2"
        fontWeight="bold"
        p={4}
        bg="sidebarBackground"
        borderRadius="lg"
        border="1px solid"
        textAlign="center"
        overflow="hidden"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {phrases.map((phrase, index) => (
          <Box
            key={index}
            position="absolute"
            top={5}
            left={0}
            width="100%"
            height="100%"
            opacity={currentPhraseIndex === index ? 1 : 0}
            transition="opacity 0.3s ease"
          >
            <Text fontSize="26px">{phrase}</Text>
          </Box>
        ))}
      </Center>
      <Center w="100%">
        <HStack>
          <Button
            color="background"
            bg={buttonColor}
            w="50px"
            h="50px"
            borderRadius="full"
            size="lg"
            onClick={handleToggleAnimation}
            shadow="xl"
          >
            {isAnimationRunning ? (
              <Icon as={FaPause} boxSize={6} />
            ) : (
              <Icon as={FaPlay} boxSize={6} />
            )}
          </Button>
        </HStack>
      </Center>
    </VStack>
  );
}

/* ********************************************************************** */

export function TextFunctionFive() {
  return <SingleExample></SingleExample>;
}

/* ********************************************************************** */

export function TextFunctionSix() {
  return <SingleExample></SingleExample>;
}

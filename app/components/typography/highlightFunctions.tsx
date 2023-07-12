import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Input,
  Mark,
  Text,
  Textarea,
  VStack,
  color,
  useHighlight,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { textAreaStyling } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function HighlightFunctionOne() {
  return (
    <SingleExample bg="background">
      <Box w="100%" bg="mainText" color="background" p={4} borderRadius="lg">
        <Highlight
          query="important"
          styles={{ px: "2", py: "1", bg: "green.300" }}
        >
          It is crucial to prioritize important tasks in your workflow.
        </Highlight>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HighlightFunctionTwo() {
  return (
    <SingleExample>
      <Box w="100%" bg="mainText" color="background" p={4} borderRadius="lg">
        <Heading lineHeight="tall">
          <Highlight
            query="key"
            styles={{ px: "2", py: "1", rounded: "full", bg: "purple.400" }}
          >
            Key concepts
          </Highlight>{" "}
          should be clearly explained in your documentation.
        </Heading>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HighlightFunctionThree() {
  return (
    <SingleExample bg="background">
      <Box w="100%" bg="mainText" color="background" p={4} borderRadius="lg">
        <Heading lineHeight="tall">
          <Highlight
            query={["efficiency", "accuracy", "consistency"]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "cyan.300" }}
          >
            Ensuring efficiency, accuracy, and consistency in your work is
            essential.
          </Highlight>
        </Heading>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HighlightFunctionFour() {
  return (
    <SingleExample bg="background">
      <Box w="100%" bg="mainText" color="background" p={4} borderRadius="lg">
        <Text>Search results for: "product"</Text>
        <Text mt="6" fontWeight="bold">
          <Highlight query="product" styles={{ py: "1", fontWeight: "normal" }}>
            The new product launch has been well-received by customers.
          </Highlight>
        </Text>
        <Text fontWeight="bold">
          <Highlight query="product" styles={{ py: "1", fontWeight: "normal" }}>
            Improving the product quality is a top priority for our team.
          </Highlight>
        </Text>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HighlightFunctionFive() {
  const sections = useHighlight({
    text: "The project requires collaboration and effective communication among team members.",
    query: ["collaboration", "communication"],
  });
  return (
    <SingleExample bg="background">
      <Box w="100%" bg="mainText" color="background" p={4} borderRadius="lg">
        <Heading lineHeight="tall">
          {sections.map(({ match, text }) => {
            if (!match) return text;
            return (
              <Box
                key="text"
                as="span"
                px="2"
                py="1"
                borderRadius="md"
                bg={match ? "purple.200" : "transparent"}
                fontWeight={match ? "bold" : "normal"}
              >
                {text}
              </Box>
            );
          })}
        </Heading>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

const inputWidths = { base: "250px", sm: "300px", lg: "175px" };

export function HighlightFunctionSix() {
  const [inputValue, setInputValue] = useState("");
  const [keyword, setKeyword] = useState("wonderful");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 80) {
      setInputValue(value);
    }
  };

  const characterCount = inputValue.length;
  const remainingCharacters = 80 - characterCount;

  return (
    <SingleExample bg="background">
      <Box minH="300px" pt={2}>
        <VStack w="100%" spacing={3}>
          <VStack w="100%" spacing={1}>
            <Text mb="0">Word to highlight:</Text>
            <Input
              w={inputWidths}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter keyword"
            />
          </VStack>
          <VStack w="100%" spacing={1}>
            <Text mb="0">Type a sentence:</Text>
            <Textarea
              {...textAreaStyling}
              w={inputWidths}
              resize="none"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="The weather outside is wonderful today."
              rows={2}
              maxLength={80}
            />
            <Text fontSize="sm">
              Characters remaining: {remainingCharacters}
            </Text>
          </VStack>
        </VStack>

        <Text
          fontWeight="bold"
          w={inputWidths}
          whiteSpace="pre-wrap"
          wordBreak="break-word"
        >
          <Highlight query={keyword} styles={{ bg: "green.200" }}>
            {inputValue || "The weather outside is wonderful today."}
          </Highlight>
        </Text>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */
const documentContent = `
Once upon a time, in a small countryside village, there lived a cow named Felix. 
Felix was a happy and curious cow, always eager to explore the meadows and interact 
with other animals. Every day, Felix would wake up early in the morning and join 
the other cows for grazing in the lush green fields. Felix loved the feeling of 
the fresh grass beneath his hooves.

One sunny day, Felix decided to venture beyond the meadows and explore the nearby 
forest. As Felix wandered through the trees, he encountered various creatures, 
including squirrels, rabbits, and birds. Felix made many new friends and enjoyed 
the beauty of nature.

When the day turned to evening, Felix returned to the village with a heart full of 
excitement and stories to share. The other cows gathered around Felix, eager to
 hear about his adventures. Felix enthusiastically recounted every detail, 
 emphasizing how much he loved exploring the forest.

From that day onward, Felix became known as the adventurous cow who always had a 
fascinating story to tell. Whenever anyone mentioned the name Felix, it reminded 
them of the cow with a brave spirit and a thirst for exploration.

And so, the tale of Felix the adventurous cow spread throughout the village, 
ensuring that Felix's name would forever be associated with curiosity, courage, 
and remarkable journeys.
`;

export function HighlightFunctionSeven() {
  const [searchQuery, setSearchQuery] = useState("Felix");

  return (
    <SingleExample bg="background">
      <VStack w="100%" spacing={3}>
        <Text mb="0">Search term:</Text>
        <Input
          bg="mainText"
          w={inputWidths}
          color="background"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter a search term"
          mb="4"
        />
        <Box
          bg="mainText"
          w={inputWidths}
          h="300px"
          overflowY="auto"
          color="background"
          p="4"
          borderRadius="md"
        >
          {documentContent.split("\n").map((paragraph, index) => (
            <Highlight
              key={index}
              query={searchQuery}
              styles={{ bg: "cyan.200" }}
            >
              {paragraph}
            </Highlight>
          ))}
        </Box>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function HighlightFunctionEight() {
  const placeholder = "I am @EvanMarie and I am excited about #code";
  const [message, setMessage] = useState(placeholder);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const highlightMentionsAndHashtags = () => {
    if (message) {
      const regex = /[@#]\w+/g; // Match mentions and hashtags
      const matches = message.match(regex);
      if (matches) {
        return message.split(regex).flatMap((part, index) => {
          if (index === matches.length) {
            return part;
          }
          const match = matches[index];
          return [
            part,
            <Highlight key={index} query={match} styles={{ bg: "purple.200" }}>
              {match}
            </Highlight>,
          ];
        });
      }
    }
    return message;
  };

  return (
    <VStack direction="column" w="100%" align="center" spacing={4}>
      <Text fontSize="xl" fontWeight="bold">
        Tag Highlighter
      </Text>
      <VStack w="100%" spacing={0}>
        <Text>Write a message:</Text>
        <Textarea
          {...textAreaStyling}
          w={inputWidths}
          value={message}
          onChange={handleInputChange}
          placeholder={placeholder}
          rows={4}
          resize="none"
        />
      </VStack>
      <VStack w="100%" spacing={1}>
        <Box>
          <Text fontSize="md" fontWeight="bold">
            Highlighted Result:
          </Text>
          <Box
            bg="mainText"
            color="background"
            w={inputWidths}
            p={4}
            borderRadius="md"
            border="1px solid gray"
            minHeight="80px"
          >
            {highlightMentionsAndHashtags()}
          </Box>
        </Box>
      </VStack>
    </VStack>
  );
}

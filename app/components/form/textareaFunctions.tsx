import {
  Box,
  Flex,
  HStack,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { textareaStyles } from "~/styles/ExtendedTheme";
import { SingleExample } from "~/styles/MainDesignComponents";

export function TextareaFunctionOne() {
  return (
    <SingleExample bg="background">
      <Textarea
        placeholder="I am some fantastic placeholder text!"
        sx={textareaStyles}
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextareaFunctionTwo() {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <SingleExample bg="background">
      <VStack align="flex-start" w="100%">
        <Text mb="8px">Controlled Text Area: {value}</Text>{" "}
        <Flex w="100%" align="center" justify="center">
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Value is controlled by state."
            sx={textareaStyles}
          />{" "}
        </Flex>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextareaFunctionThree() {
  const [resize, setResize] = useState<"horizontal" | "vertical" | "none">(
    "horizontal"
  );

  const handleResizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResize(e.target.value as "horizontal" | "vertical" | "none");
  };
  return (
    <SingleExample bg="background">
      {" "}
      <VStack w="100%" align="center" justify="center">
        <HStack w="100%" spacing={4}>
          <Text>Resize:</Text>
          <Select
            value={resize}
            onChange={handleResizeChange}
            size="sm"
            maxWidth="200px"
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
            <option value="none">None</option>
          </Select>
        </HStack>

        <Textarea
          placeholder="Enter your text here"
          sx={textareaStyles}
          value="This is a longer initial value that exceeds the initial dimensions of the Textarea."
          resize={resize}
        />
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextareaFunctionFour() {
  return (
    <SingleExample bg="background">
      {" "}
      <Textarea
        isDisabled
        placeholder="Enter your text here"
        sx={textareaStyles}
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextareaFunctionFive() {
  return (
    <SingleExample bg="background">
      <Textarea
        isInvalid
        placeholder="Enter your text here"
        sx={textareaStyles}
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextareaFunctionSix() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <SingleExample bg="background">
      {" "}
      Function Logic
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder="Type to see the textarea expand..."
        minHeight="100px"
        resize="none"
        sx={textareaStyles}
      />
    </SingleExample>
  );
}

/* ********************************************************************** */
const MAX_CHARACTERS = 100;

export function TextareaFunctionSeven() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= MAX_CHARACTERS) {
      setValue(inputValue);
    }
  };

  return (
    <SingleExample bg="background">
      <>
        <Textarea
          value={value}
          onChange={handleChange}
          placeholder="Type here..."
          sx={textareaStyles}
          resize="none"
        />
        <Text
          mt={2}
          color={value.length > MAX_CHARACTERS ? "red.500" : "gray.500"}
        >
          {value.length}/{MAX_CHARACTERS} characters used
        </Text>
      </>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TextareaFunctionEight() {
  const [tags, setTags] = useState<string[]>([
    "One Tag",
    "Two Tag",
    "No Red Tag",
    "No Blue Tag",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <SingleExample>
      <VStack w="100%" spacing={4}>
        <Textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Enter tags (Press Enter to add)"
          sx={textareaStyles}
          resize="none"
        />
        <Flex mt={2} flexWrap="wrap">
          {tags.map((tag) => (
            <Tag
              key={tag}
              borderRadius="full"
              variant="solid"
              colorScheme="teal"
              mr={2}
              mb={2}
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => handleTagRemove(tag)} />
            </Tag>
          ))}
        </Flex>
      </VStack>
    </SingleExample>
  );
}

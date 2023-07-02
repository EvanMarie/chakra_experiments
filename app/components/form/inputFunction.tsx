import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  List,
  ListItem,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BlueBold } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function InputFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon
            children="+001"
            bg="tipBackground"
            color="background"
          />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup size="sm">
          <InputLeftAddon
            children="http://"
            bg="tipBackground"
            color="background"
          />

          <Input placeholder="yourdomain" />

          <InputRightAddon
            children=".org"
            bg="tipBackground"
            color="background"
          />
        </InputGroup>
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function InputFunctionTwo() {
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => setVisibility(!visibility);
  return (
    <SingleExample bg="background">
      <InputGroup size="md" w="100%" maxWidth="400px">
        <Input
          pr="4.5rem"
          type={visibility ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleVisibility}>
            {visibility ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function InputFunctionThree() {
  const [text, setText] = useState("");
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  return (
    <SingleExample bg="background">
      <HStack spacing={4} alignItems="flex-end">
        <Text lineHeight={1}>Value: {text}</Text>
        <Input
          value={text}
          onChange={handleTextChange}
          placeholder="Sample placeholder"
          maxWidth="400px"
        />
      </HStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function InputFunctionFour() {
  return (
    <SingleExample bg="background">
      <Stack spacing={3} w="100%" maxWidth="400px">
        <Input focusBorderColor="cyan" placeholder='focusBorderColor="cyan"' />
        <Input
          focusBorderColor="purple.300"
          placeholder='focusBorderColor="purple.300"'
        />
        <Input
          isInvalid
          errorBorderColor="yellow.200"
          placeholder='errorBorderColor="yellow.200"'
        />
        <Input
          isInvalid
          errorBorderColor="orange.400"
          placeholder='errorBorderColor="orange.400"'
        />
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function InputFunctionFive() {
  return (
    <SingleExample bg="background">
      {" "}
      <Stack spacing={3}>
        <Input placeholder="default placeholder" />
        <Input
          placeholder="custom placeholder"
          _placeholder={{ opacity: 1, color: "gray.100" }}
        />
        <Input
          color="cyan"
          placeholder="custom placeholder"
          _placeholder={{ color: "inherit" }}
        />
        <Input
          color="deeppink"
          placeholder="custom placeholder"
          _placeholder={{ opacity: 0.6, color: "inherit" }}
        />
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */
const InputSettings = {
  size: "md",
  maxWidth: "250px",
};

export function InputFunctionSix() {
  const InputSettings = {
    size: "md",
    bg: "mainText",
    color: "background",
    maxWidth: "250px",
  };
  return (
    <SingleExample bg="background">
      <VStack w="100%" spacing={4}>
        <VStack w="100%" spacing={1}>
          <BlueBold>Date / Time Selector</BlueBold>
          <Input
            type="datetime-local"
            placeholder="Select Date and Time"
            sx={InputSettings}
          />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Month</BlueBold>
          <Input type="month" placeholder="Select a month" sx={InputSettings} />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Week</BlueBold>
          <Input type="week" placeholder="Select a week" sx={InputSettings} />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Color Selector</BlueBold>
          <Input placeholder="Select a color" type="color" sx={InputSettings} />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>File Upload</BlueBold>
          <Input placeholder="Upload a file" type="file" sx={InputSettings} />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Email Address</BlueBold>
          <Input
            placeholder="Enter your email"
            type="email"
            sx={InputSettings}
          />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Number Input</BlueBold>
          <Input
            placeholder="Enter a number"
            type="number"
            sx={InputSettings}
          />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Search Input</BlueBold>
          <Input placeholder="Search" type="search" sx={InputSettings} />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Telephone Number</BlueBold>
          <Input
            placeholder="Enter your phone number"
            type="tel"
            sx={InputSettings}
          />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>URL</BlueBold>
          <Input placeholder="Enter a URL" type="url" sx={InputSettings} />
        </VStack>

        <VStack w="100%" spacing={1}>
          <BlueBold>Password</BlueBold>
          <Input
            placeholder="Enter your password"
            type="password"
            sx={InputSettings}
          />
        </VStack>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function InputFunctionSeven() {
  const dataList = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [query, setQuery] = useState("");

  const filteredData = dataList.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SingleExample bg="background">
      <VStack spacing={5}>
        <Input
          placeholder="Start typing to filter..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          sx={InputSettings}
          size="sm"
        />
        <VStack w="100%" spacing={0} h="110px">
          {filteredData.map((item, index) => (
            <Box key={index}>{item}</Box>
          ))}
        </VStack>
      </VStack>
      ;
    </SingleExample>
  );
}

/* ********************************************************************** */

const suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export function InputFunctionEight() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;

    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInputValue(userInput);
    setFilteredSuggestions(newFilteredSuggestions);
  };

  return (
    <SingleExample bg="background">
      <VStack w="100%" spacing={5}>
        <Input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Start typing..."
          sx={InputSettings}
          size="sm"
        />
        <VStack w="100%" spacing={0} h="110px">
          {filteredSuggestions.length && (
            <List>
              {filteredSuggestions.map((suggestion, index) => (
                <ListItem key={index}>{suggestion}</ListItem>
              ))}
            </List>
          )}
        </VStack>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function InputFunctionNine() {
  const [password, setPassword] = useState("");
  const passwordStrength =
    password.length * 10 > 100 ? 100 : password.length * 10;
  return (
    <SingleExample bg="background">
      <Box>
        <Input
          sx={InputSettings}
          size="sm"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Progress
          mt={2}
          value={passwordStrength}
          colorScheme={
            passwordStrength < 30
              ? "red"
              : passwordStrength < 70
              ? "yellow"
              : "green"
          }
        />
        <Text mt={2} fontSize="sm">
          {passwordStrength < 30
            ? "Weak"
            : passwordStrength < 70
            ? "Good"
            : "Strong"}{" "}
          Password
        </Text>
      </Box>
    </SingleExample>
  );
}

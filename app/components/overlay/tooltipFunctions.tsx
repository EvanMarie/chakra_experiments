/* eslint-disable react/display-name */
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Select,
  SimpleGrid,
  Tag,
  Tooltip,
  VStack,
  forwardRef,
} from "@chakra-ui/react";
import { useState } from "react";
import { VscSmiley } from "react-icons/vsc";
import { MyFlex, SingleExample } from "~/styles/MainDesignComponents";
import { TooltipSeven } from "./tooltipComponents";
import { Highlighter } from "../styling/highlighter";
import { ButtonStyles } from "~/styles/DesignComponents";

const TooltipContentStyles = {
  bg: "accent_1",
  color: "darkAccent_3",
  border: "1px solid accent_3",
  borderColor: "darText",
  p: 2,
  textAlign: "center",
  width: "250px",
};

export function TooltipFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <Tooltip
        sx={TooltipContentStyles}
        label="I am a simple and basic yet most intriguing tooltip. :)"
      >
        <Button sx={ButtonStyles}>Hover for Tooltip!</Button>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFunctionTwo() {
  return (
    <SingleExample bg="background">
      <Tooltip
        label="I am a tooltip with an open and close delay with a top placement."
        openDelay={500}
        closeDelay={500}
        placement="top"
        hasArrow
        sx={TooltipContentStyles}
      >
        <Button sx={ButtonStyles}>Fancier Tooltip</Button>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface TagProps {
  children: React.ReactNode;
}

const CustomTag = forwardRef(({ children, ...rest }: TagProps, ref) => (
  <Box p="3" sx={ButtonStyles} borderRadius="md">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

export function TooltipFunctionThree() {
  return (
    <SingleExample bg="background">
      <Tooltip
        label="I am a tooltip with a custom tag and a bottom placement."
        placement="bottom"
        hasArrow
        sx={TooltipContentStyles}
      >
        <CustomTag sx={ButtonStyles}>Custom Tag in a Box</CustomTag>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFunctionFour() {
  return (
    <SingleExample bg="background">
      <MyFlex bg="accent_2" w="fit-content" borderRadius="md">
        <Tooltip
          label="Have a great day!"
          fontSize="md"
          sx={TooltipContentStyles}
        >
          <span>
            <Icon boxSize={44} as={VscSmiley} color="darkAccent_2" />
          </span>
        </Tooltip>
      </MyFlex>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFunctionFive() {
  return (
    <SingleExample bg="background">
      {" "}
      <Tooltip sx={TooltipContentStyles} hasArrow label="Click to proceed">
        <Button sx={ButtonStyles}>Proceed</Button>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

type Placement =
  | "auto-start"
  | "auto"
  | "auto-end"
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "left-start"
  | "left"
  | "left-end";

const placements: Placement[] = [
  "auto-start",
  "auto",
  "auto-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
];

export function TooltipFunctionSix() {
  const [placement, setPlacement] = useState<Placement>("auto");

  return (
    <SingleExample bg="background">
      <SimpleGrid columns={{ base: 1, sm: 2 }} w="100%" gap={10}>
        <MyFlex p={1}>
          <Select
            bg="white"
            color="black"
            w="175px"
            placeholder="Placement Options"
            onChange={(e) => setPlacement(e.target.value as Placement)}
          >
            {placements.map((placement, index) => (
              <option key={index} value={placement}>
                {placement}
              </option>
            ))}
          </Select>
        </MyFlex>
        <MyFlex p={1}>
          <Tooltip
            sx={TooltipContentStyles}
            label={`${placement} placement`}
            hasArrow
            placement={placement}
          >
            <Button sx={ButtonStyles} w="175px" h="150px">
              Hover for Placement
            </Button>
          </Tooltip>
        </MyFlex>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */
const TinyContent = {
  bg: "accent_1",
  fontSize: "xs",
  color: "darkAccent_3",
  border: "1px solid accent_3",
  borderColor: "darkAccent_3",
  p: 1,
  textAlign: "center",
  width: "fit-content",
};

export function TooltipFunctionSeven() {
  return (
    <SingleExample bg="background">
      <SimpleGrid columns={2} gap={2}>
        <Box>
          <Tooltip label="Click to close me." sx={TinyContent}>
            <Button h="60px" w="160px" p={1} mb="16px" sx={ButtonStyles}>
              <Highlighter>{`closeOnClick=true`}</Highlighter>
            </Button>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip
            label="Clicking does nothing here."
            closeOnClick={false}
            sx={TinyContent}
          >
            <Button h="60px" p={1} mb="12px" sx={ButtonStyles}>
              <Highlighter>{`closeOnClick=false`}</Highlighter>{" "}
            </Button>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip
            label="Always open..."
            placement="left"
            isOpen
            sx={TinyContent}
          >
            <Button h="60px" w="160px" p={1} mb="16px" sx={ButtonStyles}>
              <Highlighter>{`isOpen`}</Highlighter>
            </Button>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip
            placement="right"
            sx={TinyContent}
            label="I am open by default"
            defaultIsOpen
          >
            <Button h="60px" w="160px" p={1} mb="16px" sx={ButtonStyles}>
              <Highlighter>{`defaultIsOpen`}</Highlighter>
            </Button>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip sx={TinyContent} label="Opened after 500ms" openDelay={500}>
            <Button h="60px" w="160px" p={1} mb="16px" sx={ButtonStyles}>
              <Highlighter>{`openDelay={500}`}</Highlighter>
            </Button>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip sx={TinyContent} label="Closed after 500ms" closeDelay={500}>
            <Button h="60px" w="160px" p={1} mb="16px" sx={ButtonStyles}>
              <Highlighter>{`closeDelay={500}`}</Highlighter>
            </Button>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip
            sx={TinyContent}
            label="I have 15px arrow"
            hasArrow
            arrowSize={15}
          >
            <Button h="60px" w="160px" p={1} mb="16px" sx={ButtonStyles}>
              <Highlighter>{`arrowSize={15}`}</Highlighter>
            </Button>
          </Tooltip>
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFormValidityCheck() {
  const [word, setWord] = useState("");
  const [number, setNumber] = useState("");
  const [isFormValid, setFormValid] = useState<boolean | null>(null);

  const handleCheckFormClick = () => {
    // Check if the word contains only alphabets and the number is a valid number
    if (/^[A-Za-z]+$/.test(word) && !isNaN(parseFloat(number))) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  let tooltipLabel;
  if (isFormValid === null) {
    tooltipLabel = "Press to validate the form";
  } else {
    tooltipLabel = isFormValid
      ? "Form is valid!"
      : "Form is invalid. Please check your inputs.";
  }

  return (
    <VStack spacing={1}>
      <FormControl id="word">
        <FormLabel mb={0}>Enter a word</FormLabel>
        <Input
          bg="white"
          type="text"
          value={word}
          onChange={handleWordChange}
        />
      </FormControl>
      <FormControl id="number">
        <FormLabel mb={0}>Enter a number</FormLabel>
        <Input
          bg="white"
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
      </FormControl>
      <Tooltip label={tooltipLabel} placement="top">
        <Button sx={ButtonStyles} onClick={handleCheckFormClick}>
          Check Form
        </Button>
      </Tooltip>
    </VStack>
  );
}

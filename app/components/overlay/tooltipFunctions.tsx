/* eslint-disable react/display-name */
import {
  Box,
  Button,
  HStack,
  Icon,
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

const ToolTipButtonStyles = {
  bg: "accent_3",
  color: "darkAccent_3",
  border: "1px solid",
  borderColor: "darText",
  _hover: {
    bg: "darkAccent_3",
    color: "accent_3",
  },
};

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
        <Button sx={ToolTipButtonStyles}>Hover for Tooltip!</Button>
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
        <Button sx={ToolTipButtonStyles}>Fancier Tooltip</Button>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface TagProps {
  children: React.ReactNode;
}

const CustomTag = forwardRef(({ children, ...rest }: TagProps, ref) => (
  <Box p="3" sx={ToolTipButtonStyles} borderRadius="md">
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
        <CustomTag sx={ToolTipButtonStyles}>Custom Tag in a Box</CustomTag>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFunctionFour() {
  return (
    <SingleExample bg="background">
      <MyFlex bg="accent_3" w="fit-content" borderRadius="md">
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
        <Button sx={ToolTipButtonStyles}>Proceed</Button>
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
      <HStack w="100%" justifyContent="space-evenly">
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
        <Tooltip
          sx={TooltipContentStyles}
          label={`${placement} placement`}
          hasArrow
          placement={placement}
        >
          <Button sx={ToolTipButtonStyles} w="175px" h="150px">
            Hover for Placement
          </Button>
        </Tooltip>
      </HStack>
    </SingleExample>
  );
}

export function TooltipFunctionSeven() {
  const ExampleBox = ({ children }: { children: React.ReactNode }) => (
    <Box
      bg="darkAccent_2"
      p="3"
      borderRadius="sm"
      color="mmainText"
      marginY="10px"
    >
      {children}
    </Box>
  );

  return (
    <SingleExample bg="background">
      <SimpleGrid columns={2}>
        <ExampleBox>
          <Tooltip label="I close on click">
            <Button>Close on Click - true(default)</Button>
          </Tooltip>
        </ExampleBox>

        <ExampleBox>
          <Tooltip label="I don't close on click" closeOnClick={false}>
            <Button>Close on Click - false</Button>
          </Tooltip>
        </ExampleBox>

        <ExampleBox>
          <Tooltip label="I am always open" placement="top" isOpen>
            <Button>Always Open</Button>
          </Tooltip>
        </ExampleBox>

        <ExampleBox>
          <Tooltip label="I am open by default" placement="left" defaultIsOpen>
            <Button>Open on startup</Button>
          </Tooltip>
        </ExampleBox>

        <ExampleBox>
          <Tooltip label="Opened after 500ms" openDelay={500}>
            <Button>Delay Open - 500ms</Button>
          </Tooltip>
        </ExampleBox>

        <ExampleBox>
          <Tooltip label="Closed after 500ms" closeDelay={500}>
            <Button>Delay Close - 500ms</Button>
          </Tooltip>
        </ExampleBox>

        <ExampleBox>
          <Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
            <Button>Arrow size - 15px</Button>
          </Tooltip>
        </ExampleBox>
      </SimpleGrid>
    </SingleExample>
  );
}

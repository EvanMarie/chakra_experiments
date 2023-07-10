import {
  Box,
  Center,
  HStack,
  Heading,
  Square,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  GridStyles,
  boxColors,
  gridBoxStyles,
} from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

const stackBoxStyles = {
  borderRadius: "lg",
  p: 2,
  shadow: "xl",
  color: "background",
  border: "2px solid #444444",
  fontWeight: "bold",
};

export function StackFunctionOne() {
  return (
    <SingleExample bg="background">
      <Stack spacing="24px" {...GridStyles}>
        <Square size="100px" {...stackBoxStyles} bg={boxColors.one}>
          1
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.two}>
          2
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.three}>
          3
        </Square>
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StackFunctionTwo() {
  return (
    <SingleExample bg="background">
      <HStack spacing="24px" {...GridStyles}>
        <Square size="100px" {...stackBoxStyles} bg={boxColors.one}>
          1
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.two}>
          2
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.three}>
          3
        </Square>
      </HStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StackFunctionThree() {
  return (
    <SingleExample bg="background">
      <VStack spacing="24px" {...GridStyles}>
        <Square size="100px" {...stackBoxStyles} bg={boxColors.one}>
          1
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.two}>
          2
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.three}>
          3
        </Square>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StackFunctionFour() {
  return (
    <SingleExample bg="background">
      <Stack direction={["column", "row"]} spacing="24px" {...GridStyles}>
        <Square size="100px" {...stackBoxStyles} bg={boxColors.one}>
          1
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.two}>
          2
        </Square>
        <Square {...stackBoxStyles} size="100px" bg={boxColors.three}>
          3
        </Square>
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StackFunctionFive() {
  return (
    <SingleExample bg="background">
      <VStack
        {...GridStyles}
        divider={<StackDivider borderColor="tipBackground" />}
        spacing={4}
        align="stretch"
      >
        <Box h="100px" {...stackBoxStyles} bg={boxColors.one}>
          1
        </Box>
        <Box {...stackBoxStyles} h="100px" bg={boxColors.two}>
          2
        </Box>
        <Box {...stackBoxStyles} h="100px" bg={boxColors.three}>
          3
        </Box>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

const tabBoxStyles = {
  ...stackBoxStyles,
  paddingX: 2,
  paddingY: 0,
  borderBottomRadius: "none",
  _hover: {
    bg: "linkColor",
    color: "white",
  },
};

export function StackFunctionSix() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };

  return (
    <SingleExample bg="background">
      <VStack w="100%" spacing={0}>
        <HStack spacing={1}>
          <Box
            {...tabBoxStyles}
            bg={boxColors.one}
            cursor="pointer"
            onClick={() => handleTabClick(1)}
          >
            <Text mb={0}>Tab 1</Text>
          </Box>
          <Box
            {...tabBoxStyles}
            bg={boxColors.two}
            cursor="pointer"
            onClick={() => handleTabClick(2)}
          >
            <Text mb={0}>Tab 2</Text>
          </Box>
          <Box
            {...tabBoxStyles}
            bg={boxColors.three}
            cursor="pointer"
            onClick={() => handleTabClick(3)}
          >
            <Text mb={0}>Tab 3</Text>
          </Box>
        </HStack>
        <Center
          w="100%"
          bg="mainText"
          p={2}
          color="background"
          borderRadius="sm"
        >
          <Text>
            {selectedTab !== 0
              ? `You clicked Tab ${selectedTab}`
              : "Click a tab!"}
          </Text>{" "}
        </Center>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StackFunctionSeven() {
  return (
    <SingleExample bg="background">
      <VStack
        spacing={4}
        divider={<StackDivider borderColor="gray.700" />}
        {...GridStyles}
      >
        <Heading size="md" color="background">
          Events
        </Heading>
        <Box>
          <Box {...tabBoxStyles} bg={boxColors.one}>
            Event 1
          </Box>
          <Box {...stackBoxStyles} borderTopRadius="none">
            Event description 1
          </Box>
        </Box>
        <Box>
          <Box {...tabBoxStyles} bg={boxColors.two}>
            Event 2
          </Box>
          <Box {...stackBoxStyles} borderTopRadius="none">
            Event description 2
          </Box>
        </Box>
        <Box>
          <Box {...tabBoxStyles} bg={boxColors.three}>
            Event 3
          </Box>
          <Box {...stackBoxStyles} borderTopRadius="none">
            Event description 3
          </Box>
        </Box>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface FeatureProps {
  title: string;
  desc: string;
  color: string;
}

export function StackFunctionEight() {
  function Feature({ title, desc, color, ...rest }: FeatureProps) {
    return (
      <VStack
        {...rest}
        {...stackBoxStyles}
        bg={color}
        p={5}
        spacing={0}
        divider={<StackDivider />}
      >
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </VStack>
    );
  }
  return (
    <VStack spacing={4} {...GridStyles}>
      <Feature
        color={boxColors.one}
        title="Real-Time Analytics"
        desc="Get instant insights and track performance with our powerful real-time analytics dashboard."
      />
      <Feature
        color={boxColors.two}
        title="Seamless Integration"
        desc="Easily integrate our platform with your existing systems and workflows for a seamless experience."
      />
      <Feature
        color={boxColors.three}
        title="Advanced Security"
        desc="Rest assured knowing that your data is protected with our robust security measures and encryption protocols."
      />
    </VStack>
  );
}

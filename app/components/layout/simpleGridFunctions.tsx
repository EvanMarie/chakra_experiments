import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  GridStyles,
  boxColors,
  gridBoxStyles,
} from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function SimpleGridFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <SimpleGrid columns={3} spacing={10} {...GridStyles}>
        <Box bg={boxColors.one} height="80px" {...gridBoxStyles}>
          Container 1
        </Box>
        <Box bg={boxColors.two} height="80px" {...gridBoxStyles}>
          Container 2
        </Box>
        <Box bg={boxColors.three} height="80px" {...gridBoxStyles}>
          Container 3
        </Box>
        <Box bg={boxColors.four} height="80px" {...gridBoxStyles}>
          Container 4
        </Box>
        <Box bg={boxColors.five} height="80px" {...gridBoxStyles}>
          Container 5
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SimpleGridFunctionTwo() {
  return (
    <SingleExample bg="background">
      <SimpleGrid columns={[2, null, 3]} spacing="40px" {...GridStyles}>
        <Box bg={boxColors.one} height="80px" {...gridBoxStyles}>
          Container 1
        </Box>
        <Box bg={boxColors.two} height="80px" {...gridBoxStyles}>
          Container 2
        </Box>
        <Box bg={boxColors.three} height="80px" {...gridBoxStyles}>
          Container 3
        </Box>
        <Box bg={boxColors.four} height="80px" {...gridBoxStyles}>
          Container 4
        </Box>
        <Box bg={boxColors.five} height="80px" {...gridBoxStyles}>
          Container 5
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SimpleGridFunctionThree() {
  return (
    <SingleExample bg="background">
      <SimpleGrid minChildWidth="120px" spacing="40px" {...GridStyles}>
        <Box bg={boxColors.one} height="80px" {...gridBoxStyles}>
          Container 1
        </Box>
        <Box bg={boxColors.two} height="80px" {...gridBoxStyles}>
          Container 2
        </Box>
        <Box bg={boxColors.three} height="80px" {...gridBoxStyles}>
          Container 3
        </Box>
        <Box bg={boxColors.four} height="80px" {...gridBoxStyles}>
          Container 4
        </Box>
        <Box bg={boxColors.five} height="80px" {...gridBoxStyles}>
          Container 5
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SimpleGridFunctionFour() {
  return (
    <SingleExample bg="background">
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px" {...GridStyles}>
        <Box bg={boxColors.one} height="80px" {...gridBoxStyles}>
          Container 1
        </Box>
        <Box bg={boxColors.two} height="80px" {...gridBoxStyles}>
          Container 2
        </Box>
        <Box bg={boxColors.three} height="80px" {...gridBoxStyles}>
          Container 3
        </Box>
        <Box bg={boxColors.four} height="80px" {...gridBoxStyles}>
          Container 4
        </Box>
        <Box bg={boxColors.five} height="80px" {...gridBoxStyles}>
          Container 5
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SimpleGridFunctionFive() {
  return (
    <SingleExample bg="background">
      <SimpleGrid columns={[1, null, 3, 1]} spacing="20px">
        <Box>
          <Image
            src="https://placebear.com/300/300"
            alt="Image 1"
            width="100%"
            borderRadius="md"
          />
        </Box>
        <Box>
          <Image
            src="http://placekitten.com/300/300"
            alt="Image 2"
            width="100%"
            borderRadius="md"
          />
        </Box>
        <Box>
          <Image
            src="https://place-puppy.com/300x300"
            alt="Image 3"
            width="100%"
            borderRadius="md"
          />
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */
const headingSizes = ["xl", "lg", "md", "lg"];
const textSizes = ["15px", "16px", "13px", "15px"];
const buttonSizes = ["sm", "sm", "xs", "sm"];
const boxPadding = [4, 8, 1, 2];
const listSizes = ["13px", "14px", "11px", "13px"];

export function SimpleGridFunctionSix() {
  return (
    <SingleExample bg="background" padding={0}>
      <SimpleGrid
        columns={[1, null, 3, 1]}
        spacing="40px"
        {...GridStyles}
        w="100%"
        p={[2, 8, 1, 2]}
      >
        <Box {...gridBoxStyles} bg={boxColors.one} p={boxPadding}>
          <Heading as="h3" size={headingSizes}>
            Basic
          </Heading>
          <Text fontSize={textSizes}>$9.99/mo</Text>
          <VStack
            w="100%"
            fontSize={listSizes}
            spacing={0}
            mb={2}
            align="flex-start"
            px={2}
          >
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 1</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 2</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 3</span>
            </HStack>
          </VStack>
          <Center w="100%">
            <Button size={buttonSizes}>Select Plan</Button>
          </Center>
        </Box>
        <Box {...gridBoxStyles} bg={boxColors.four} p={boxPadding}>
          <Heading as="h3" size={headingSizes}>
            Pro
          </Heading>
          <Text fontSize={textSizes}>$19.99/mo</Text>
          <VStack
            w="100%"
            fontSize={listSizes}
            spacing={0}
            mb={2}
            align="flex-start"
            px={2}
          >
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 1</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 2</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 3</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 4</span>
            </HStack>
          </VStack>
          <Center w="100%">
            <Button size={buttonSizes}>Select Plan</Button>
          </Center>
        </Box>
        <Box {...gridBoxStyles} bg={boxColors.five} p={boxPadding}>
          <Heading as="h3" size={headingSizes}>
            Premium
          </Heading>
          <Text fontSize={textSizes}>$29.99/mo</Text>
          <VStack
            w="100%"
            fontSize={listSizes}
            spacing={0}
            mb={2}
            align="flex-start"
            px={2}
          >
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 1</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 2</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 3</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 4</span>
            </HStack>
            <HStack>
              <ArrowForwardIcon />
              <span>Feature 5</span>
            </HStack>
          </VStack>
          <Center w="100%">
            <Button size={buttonSizes}>Select Plan</Button>
          </Center>
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface DataCardProps {
  title: string;
  value: string;
}

export function SimpleGridFunctionSeven() {
  const DataCard = ({ title, value }: DataCardProps) => (
    <Box {...gridBoxStyles} p={boxPadding} bg={boxColors.four}>
      <Text fontSize={headingSizes} fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text fontSize={textSizes} fontWeight="semibold">
        {value}
      </Text>
      <Button size={buttonSizes} mt={2}>
        See Data
      </Button>
    </Box>
  );
  return (
    <SingleExample bg="background" p={0}>
      {" "}
      <SimpleGrid columns={[1, 2, 4, 1]} spacing="20px" {...GridStyles}>
        <Box>
          <DataCard title="Users" value="1,500" />
        </Box>
        <Box>
          <DataCard title="Revenue" value="$50,000" />
        </Box>
        <Box>
          <DataCard title="Sales" value="500" />
        </Box>
        <Box>
          <DataCard title="Rate" value="25%" />
        </Box>
      </SimpleGrid>
    </SingleExample>
  );
}

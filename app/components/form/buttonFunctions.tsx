import { SingleExample } from "~/styles/MainDesignComponents";
import {
  Box,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Select,
  Radio,
  RadioGroup,
  SimpleGrid,
  Flex,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { ButtonStyles } from "~/styles/DesignComponents";

export function ButtonFunctionOne() {
  const [variant, setVariant] = useState("solid");
  const [color, setColor] = useState("blue");
  const [size, setSize] = useState("md");
  const [fontColor, setFontColor] = useState("light");

  return (
    <SingleExample bg="background">
      <VStack spacing={4}>
        <HStack spacing={4}>
          <Flex>
            <FormControl>
              <FormLabel>Variant</FormLabel>
              <Select
                borderRadius="md"
                size="sm"
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
                <option value="link">Link</option>
                <option value="unstyled">Unstyled</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex justify="center" align="center">
            <FormControl>
              <FormLabel>Color</FormLabel>
              <Select
                borderRadius="md"
                size="sm"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                {/* Add more colors as needed */}
                <option value="whiteAlpha">White Alpha</option>
                <option value="blackAlpha">Black Alpha</option>
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="teal">Teal</option>
                <option value="blue">Blue</option>
                <option value="cyan">Cyan</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="facebook">Facebook</option>
                <option value="messenger">Messenger</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="twitter">Twitter</option>
                <option value="telegram">Telegram</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex justify="center" align="center">
            <FormControl>
              <FormLabel>Size</FormLabel>
              <Select
                borderRadius="md"
                size="sm"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </Select>
            </FormControl>
          </Flex>
        </HStack>
        <SimpleGrid w="100%" gap={2} columns={2}>
          <Flex
            bg="gray.200"
            p={4}
            rounded="md"
            w="full"
            h="80px"
            align="center"
            justify="center"
          >
            <Button variant={variant} colorScheme={color} size={size}>
              Button
            </Button>
          </Flex>

          <Flex
            bg="gray.800"
            p={4}
            rounded="md"
            w="full"
            h="80px"
            align="center"
            justify="center"
          >
            <Button variant={variant} colorScheme={color} size={size}>
              Button
            </Button>
          </Flex>
        </SimpleGrid>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ButtonFunctionTwo() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <SingleExample bg="background">
      <VStack>
        <Button
          w="100px"
          colorScheme="cyan"
          isLoading={isLoading}
          onClick={handleClick}
          loadingText="Loading"
          spinner={<Spinner color="white" />}
        >
          Click me
        </Button>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ButtonFunctionThree() {
  const [isActive, setIsActive] = useState(false);
  return (
    <SingleExample bg="background">
      <Button
        width="120px"
        colorScheme={isActive ? "green" : "red"}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "Active" : "Inactive"}
      </Button>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ButtonFunctionFour() {
  const [count, setCount] = useState(10);

  const handleClick = () => {
    if (count === 10) {
      const countdown = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(countdown);
            return 10;
          } else {
            return prevCount - 1;
          }
        });
      }, 1000);
    }
  };

  return (
    <SingleExample bg="background">
      <Button
        sx={ButtonStyles}
        width="145px"
        onClick={handleClick}
        isDisabled={count !== 10}
      >
        {count === 10 ? "Start Countdown" : count}
      </Button>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ButtonFunctionFive() {
  return (
    <SingleExample bg="background">
      <Tooltip
        label="This button saves your changes."
        bg="accent_2"
        color="background"
        fontSize="md"
        placement="top"
      >
        <Button sx={ButtonStyles}>Save</Button>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ButtonFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function ButtonFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  useNumberInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MiniCode } from "~/styles/CodeDesignComponents";
import { BasicText } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function NumberInputFunctionOne() {
  const format = (val: string) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  const [value, setValue] = useState("1.23");
  return (
    <SingleExample bg="background">
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        max={53}
        maxWidth="100px"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function NumberInputFunctionTwo() {
  const sizeOptions = ["xs", "sm", "md", "lg"];

  return (
    <SingleExample bg="background">
      <VStack spacing={3} w="100%">
        {sizeOptions.map((size) => (
          <VStack key={size} w="100%">
            <MiniCode>{`size=${size}`}</MiniCode>
            <NumberInput
              w="100px"
              key={size}
              size={size}
              defaultValue={13}
              min={-23}
              max={23}
              step={3}
              clampValueOnBlur={false}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
        ))}
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function NumberInputFunctionThree() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.23,
      defaultValue: 1.23,
      min: 1,
      max: 6,
      precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <SingleExample bg="background">
      <HStack maxW="200px">
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
      </HStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function NumberInputFunctionFour() {
  const inputDetails = {
    step: 0.23,
    defaultValue: 1.23,
    min: -20,
    max: 20,
    precision: 2,
  };

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput(inputDetails);

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const [value, setValue] = useState(input.value);

  useEffect(() => {
    setValue(input.value);
  }, [input.value]);

  const handleSliderChange = (sliderValue: number) => setValue(sliderValue);

  return (
    <SingleExample bg="background">
      <VStack maxWidth="300px">
        <HStack>
          <Button {...dec}>-</Button>
          <Input {...input} value={value} w="125px" />
          <Button {...inc}>+</Button>
        </HStack>
        <Slider
          flex="1"
          value={value}
          min={inputDetails.min}
          max={inputDetails.max}
          onChange={handleSliderChange}
        >
          {" "}
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb
            fontSize="sm"
            boxSize="32px"
            children={value}
            bg="tipBackground"
            color="background"
          />
        </Slider>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function NumberInputFunctionFive() {
  const [value, setValue] = useState(0);
  const handleChange = (value: string | number) => setValue(Number(value));
  return (
    <SingleExample bg="background">
      {" "}
      <VStack maxWidth="300px">
        <NumberInput
          maxW="125px"
          mr="2rem"
          value={value}
          onChange={handleChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          flex="1"
          focusThumbOnChange={false}
          value={value}
          onChange={handleChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb
            fontSize="sm"
            boxSize="32px"
            children={value}
            bg="tipBackground"
            color="background"
          />
        </Slider>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function NumberInputFunctionSix() {
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (value: string) => {
    setFontSize(Number(value));
  };
  return (
    <SingleExample bg="background">
      <VStack w="100%">
        <HStack w="100%" align="center" justify="center">
          <Text>Font Size:</Text>
          <NumberInput
            w="75px"
            value={fontSize}
            size="sm"
            onChange={handleChange}
            min={10}
            max={35}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Flex
          w="100%"
          bg="mainText"
          color="background"
          borderRadius="md"
          h="100px"
          justify="center"
          align="center"
          p={{ base: 2, sm: 3, lg: 1 }}
        >
          <p style={{ fontSize: `${fontSize}px` }}>Adjustable Text Size</p>
        </Flex>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function NumberInputFunctionSeven() {
  const [opacity, setOpacity] = useState(1);

  const handleChange = (value: string) => {
    setOpacity(Number(value));
  };
  return (
    <SingleExample bg="background">
      <VStack w="100%" spacing={4}>
        <HStack w="100%" align="center" justify="center">
          <Text>Opacity:</Text>
          <NumberInput
            w="75px"
            value={opacity}
            onChange={handleChange}
            step={0.1}
            min={0}
            max={1}
          >
            <NumberInputField maxWidth="100px" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Box>
          <img
            src="https://placebear.com/g/200/200"
            alt="very precious bear"
            style={{ opacity: opacity }}
          />
        </Box>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function NumberInputFunctionEight() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelsiusChange = (value: string) => {
    setCelsius(Number(value));
    setFahrenheit((Number(value) * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (value: String) => {
    setFahrenheit(Number(value));
    setCelsius((Number(value) * 5) / 9);
  };

  return (
    <SingleExample>
      <VStack w="100%" spacing={4}>
        <HStack w="100%" spacing={3} justify="center">
          <NumberInput
            size="sm"
            value={celsius}
            onChange={handleCelsiusChange}
            maxWidth="100px"
          >
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
            <NumberInputField />
          </NumberInput>
          <span>°C</span>
        </HStack>
        <HStack w="100%" spacing={3} justify="center">
          <NumberInput
            maxWidth="100px"
            size="sm"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          >
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
            <NumberInputField />
          </NumberInput>
          <span>°F</span>
        </HStack>
      </VStack>
    </SingleExample>
  );
}

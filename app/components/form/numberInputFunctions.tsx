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
  VStack,
  useNumberInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MiniCode } from "~/styles/CodeDesignComponents";
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
    console.log(input),
    (
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
    )
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
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function NumberInputFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

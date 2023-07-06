import {
  Box,
  Code,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { BsSliders } from "react-icons/bs";
import { useState } from "react";

export function SliderFunctionOne() {
  return (
    <SingleExample bg="background">
      Test
      <Slider aria-label="basic_slider" defaultValue={88} maxWidth="400px">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </SingleExample>
  );
}

/* ********************************************************************** */
export function SliderFunctionTwo() {
  const colorSchemes = [
    "whiteAlpha",
    "blackAlpha",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
    "linkedin",
    "facebook",
    "messenger",
    "whatsapp",
    "twitter",
    "telegram",
  ];

  const countdown = 100;
  let initialValue = 95;

  return (
    <SingleExample bg="background">
      <VStack spacing={8} w="100%">
        {colorSchemes.map((colorScheme) => {
          initialValue -= 4;
          return (
            <VStack key={colorScheme} w="100%" align="center" spacing={0}>
              <Code>{`colorScheme="${colorScheme}"`}</Code>
              <Slider
                aria-label="slider-rainbow"
                colorScheme={colorScheme}
                defaultValue={countdown * (initialValue / 100)}
                maxWidth="400px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </VStack>
          );
        })}
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SliderFunctionThree() {
  return (
    <SingleExample bg="background">
      <Slider
        aria-label="vertical-slider"
        defaultValue={88}
        orientation="vertical"
        minH="200px"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SliderFunctionFour() {
  return (
    <SingleExample bg="background">
      <Slider aria-label="custom-slider" defaultValue={88} maxWidth="400px">
        <SliderTrack bg="mainText">
          <SliderFilledTrack bg="accent_2" />
        </SliderTrack>
        <SliderThumb boxSize={6} bg="sidebarBackground">
          <Box color="accent_1" as={BsSliders} />
        </SliderThumb>
      </Slider>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SliderFunctionFive() {
  return (
    <SingleExample bg="background">
      <Slider defaultValue={88} min={0} max={300} step={30} maxWidth="400px">
        <SliderTrack bg="accent_1">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="accent_2" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SliderFunctionSix() {
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <Flex w="100%" justify="center" align="center">
      {" "}
      <Slider
        aria-label="marked-slider"
        onChange={(val) => setSliderValue(val)}
        maxWidth="300px"
      >
        <SliderMark value={20} {...labelStyles}>
          20%
        </SliderMark>
        <SliderMark value={40} {...labelStyles}>
          40%
        </SliderMark>
        <SliderMark value={60} {...labelStyles}>
          60%
        </SliderMark>
        <SliderMark value={80} {...labelStyles}>
          80%
        </SliderMark>
        <SliderMark value={100} {...labelStyles}>
          100%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          borderRadius="full"
          textAlign="center"
          bg="accent_2"
          color="background"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
}

/* ********************************************************************** */
export function SliderFunctionSeven() {
  const [sliderValue, setSliderValue] = useState(25);
  const [showTooltip, setShowTooltip] = useState(false);
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Flex align="center" justify="center" w="100%">
      <Slider
        id="slider"
        defaultValue={25}
        min={0}
        max={100}
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        maxWidth="300px"
      >
        <SliderMark value={20} {...labelStyles}>
          20%
        </SliderMark>
        <SliderMark value={40} {...labelStyles}>
          40%
        </SliderMark>
        <SliderMark value={60} {...labelStyles}>
          60%
        </SliderMark>
        <SliderMark value={80} {...labelStyles}>
          80%
        </SliderMark>
        <SliderMark value={100} {...labelStyles}>
          100%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="accent_2"
          borderRadius="full"
          color="background"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Flex>
  );
}

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
  Image,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import {
  BsFillPlayCircleFill,
  BsFillVolumeUpFill,
  BsSliders,
  BsStopBtnFill,
} from "react-icons/bs";
import { useRef, useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";

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

/* ********************************************************************** */
export function ImageGallerySlider() {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    "https://placebear.com/300/300",
    "http://placekitten.com/300/300",
    "https://place-puppy.com/300x300",
  ];

  const handleSliderChange = (value: number) => {
    setSelectedImage(value);
  };

  return (
    <VStack w="100%" spacing={6}>
      <Slider
        maxWidth={{ base: "300px", sm: "400px", lg: "150px" }}
        aria-label="image-gallery-slider"
        defaultValue={selectedImage}
        min={0}
        max={images.length - 1}
        step={1}
        onChange={handleSliderChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        {images.map((image, index) => (
          <SliderThumb key={index} boxSize={5} bg="accent_1">
            <Box color="background" as={FaArrowsAltH} />
          </SliderThumb>
        ))}
      </Slider>
      <Image
        src={images[selectedImage]}
        alt={`Image ${selectedImage + 1}`}
        w={{ base: "250px", sm: "300px", lg: "150px" }}
        objectFit="cover"
      />
    </VStack>
  );
}

/* ********************************************************************** */

export function ColorPickerSlider() {
  const [selectedColor, setSelectedColor] = useState("#44EAFA");

  const handleSliderChange = (value: number) => {
    const hue = Math.floor((value / 100) * 360);
    setSelectedColor(`hsl(${hue}, 100%, 50%)`);
  };

  return (
    <VStack w="100%" spacing={5}>
      <Slider
        maxWidth={{ base: "300px", sm: "400px", lg: "150px" }}
        aria-label="color-picker-slider"
        defaultValue={0}
        min={0}
        max={100}
        step={1}
        onChange={handleSliderChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={5} bg="accent_1">
          <Box color="background" as={FaArrowsAltH} />
        </SliderThumb>
      </Slider>
      <Box width="150px" height="150px" bg={selectedColor}></Box>
    </VStack>
  );
}

/* ********************************************************************** */

export function VolumeControlSlider() {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSliderChange = (value: number) => {
    setVolume(value);
    // Adjust the volume of the audio player
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <VStack w="100%" spacing={8}>
      <VStack w="100%" spacing={4}>
        <audio ref={audioRef}>
          <source
            src="https://diviextended.com/wp-content/uploads/2021/10/sound-of-waves-marine-drive-mumbai.mp3"
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
        <HStack spacing={6}>
          <IconButton
            aria-label="play-audio"
            onClick={handlePlay}
            disabled={isPlaying}
            icon={<BsFillPlayCircleFill size={25} />}
          >
            Play
          </IconButton>
          <IconButton
            aria-label="stop-audio"
            onClick={handleStop}
            disabled={!isPlaying}
            icon={<BsStopBtnFill size={25} />}
          >
            Stop
          </IconButton>
        </HStack>
        <Slider
          aria-label="volume-control-slider"
          defaultValue={volume}
          min={0}
          max={100}
          step={1}
          onChange={handleSliderChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={5} bg="accent_1">
            <Box color="background" as={BsFillVolumeUpFill} />
          </SliderThumb>
        </Slider>
        <Box w="100%">Volume: {volume}%</Box>
      </VStack>
    </VStack>
  );
}

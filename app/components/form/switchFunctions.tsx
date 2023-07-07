import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Switch,
  VStack,
  Text,
  useColorMode,
  useColorModeValue,
  useInterval,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { SingleExample } from "~/styles/MainDesignComponents";

export function SwitchFunctionOne() {
  return (
    <SingleExample bg="background">
      <FormControl display="flex" px={5} w="fit-content">
        <VStack align="flex-start" spacing={5}>
          <HStack spacing={5}>
            <FormLabel htmlFor="friend-requests">
              Enable friend requests
            </FormLabel>
            <Switch id="friend-requests" />
          </HStack>
          <HStack spacing={5}>
            <FormLabel htmlFor="message-alerts">
              Enable message alerts
            </FormLabel>
            <Switch id="message-alerts" />
          </HStack>
          <HStack spacing={5}>
            <FormLabel htmlFor="party-mode">Enable party mode</FormLabel>
            <Switch id="party-mode" />
          </HStack>
        </VStack>
      </FormControl>{" "}
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SwitchFunctionTwo() {
  return (
    <SingleExample bg="background">
      <FormControl display="flex" px={5} w="fit-content">
        <VStack align="flex-start" spacing={5}>
          <HStack spacing={5}>
            <FormLabel>Small</FormLabel>
            <Switch size="sm" />
          </HStack>
          <HStack spacing={5}>
            <FormLabel>Medium</FormLabel>
            <Switch size="md" />
          </HStack>
          <HStack spacing={5}>
            <FormLabel>Large</FormLabel>
            <Switch size="lg" />
          </HStack>
        </VStack>
      </FormControl>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SwitchFunctionThree() {
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

  return (
    <SingleExample bg="background">
      <FormControl display="flex" px={5} w="fit-content">
        <VStack align="flex-start">
          {colorSchemes.map((colorScheme) => (
            <HStack key={colorScheme} spacing={5}>
              <FormLabel>{colorScheme}</FormLabel>
              <Switch colorScheme={colorScheme} isChecked />
            </HStack>
          ))}
        </VStack>
      </FormControl>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SwitchFunctionFour() {
  const states = [
    "isChecked",
    "isDisabled",
    "isInvalid",
    "isFocusable",
    "isReadOnly",
    "isRequired",
  ];

  return (
    <SingleExample bg="background">
      <FormControl display="flex" px={5} w="fit-content">
        <VStack align="flex-start">
          {states.map((state) => (
            <HStack key={state} spacing={5}>
              <FormLabel>{state}</FormLabel>
              <Switch {...{ [state]: true }} />
            </HStack>
          ))}
        </VStack>
      </FormControl>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SwitchFunctionFive() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SingleExample bg="background">
      <Flex align="center" justify="center" w="100%">
        <VStack align="center" justify="center">
          <HStack w="100%" spacing={4}>
            <BsFillSunFill size={25} color="#FFA500" />
            <Switch
              id="dark-mode-toggle"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
              size="lg"
            />
            <BsFillMoonStarsFill size={25} color="#FFFFA7" />
          </HStack>
          <Box
            mt={4}
            p={4}
            rounded="md"
            bg={colorMode === "dark" ? "gray.700" : "gray.200"}
            color={colorMode === "dark" ? "white" : "black"}
          >
            {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
          </Box>
        </VStack>
      </Flex>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SwitchFunctionSix() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = () => {
    setSelectedLanguage(selectedLanguage === "en" ? "fr" : "en");
  };

  const getContentByLanguage = () => {
    if (selectedLanguage === "en") {
      return "Welcome to our wonderful place on the web, where dreams come true and today is always just the beginning!";
    } else if (selectedLanguage === "fr") {
      return "Bienvenue dans notre merveilleux espace en ligne, où les rêves se réalisent et où aujourd'hui est toujours le début!";
    }
  };

  return (
    <SingleExample bg="background">
      <VStack spacing={4}>
        <HStack spacing={5}>
          <Text fontSize="4xl">🇬🇧</Text>
          <Switch
            id="language-selector"
            isChecked={selectedLanguage === "fr"}
            onChange={handleLanguageChange}
            size="lg"
          />
          <Text fontSize="4xl">🇫🇷</Text>
        </HStack>
        <Flex bg="sidebarBackground" p={3}>
          <h3>{getContentByLanguage()}</h3>
        </Flex>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SwitchFunctionSeven() {
  const [raveMode, setRaveMode] = useState(false);
  const [isRave, setIsRave] = useState(false);
  const [musicLink, setMusicLink] = useState(
    "https://mydatabucky.s3.amazonaws.com/rave.mp3"
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleRaveMode = () => {
    if (!raveMode) {
      // If rave mode is currently off, it means we're turning it on
      if (audioRef.current) {
        audioRef.current.play(); // Start the music
      }
    } else {
      // If rave mode is currently on, it means we're turning it off
      if (audioRef.current) {
        audioRef.current.pause(); // Stop the music
        audioRef.current.currentTime = 0; // Optional: rewind the audio
      }
    }

    setRaveMode(!raveMode); // Toggle the rave mode
  };

  // Interval for rave effect
  useInterval(
    () => {
      if (raveMode) {
        setIsRave(!isRave);
      }
    },
    raveMode ? 500 : null
  );

  // Reset when rave mode is turned off
  useEffect(() => {
    if (!raveMode) {
      setIsRave(false);
      audioRef.current?.pause(); // Stop the music
    } else {
      audioRef.current?.play(); // Start the music
    }
  }, [raveMode]);

  const bg = isRave ? "cyan" : "deeppink";
  const color = isRave ? "deeppink" : "cyan";
  const raveEmoji = isRave ? "🌟" : "🦄";

  return (
    <VStack spacing={4}>
      <HStack spacing={5}>
        <Text fontSize="4xl">😐</Text>
        <Switch
          id="rave-mode-toggle"
          isChecked={raveMode}
          onChange={toggleRaveMode}
          size="lg"
        />
        <Text fontSize="4xl">🪩</Text>
      </HStack>

      <Box
        bg={raveMode ? bg : "black"}
        color={raveMode ? color : "lightgray"}
        p={5}
        h="250px"
        textAlign="center"
        borderRadius="lg"
      >
        {raveMode ? (
          <VStack spacing={4} w="100%" h="100%" justify="space-around">
            <HStack justify="space-between" w="100%">
              <Text fontSize="4xl">{raveEmoji}</Text>
              <Text fontSize="4xl">{raveEmoji}</Text>
            </HStack>

            <h2>You clicked!!!</h2>
            <h2>You better dance!</h2>

            <HStack justify="space-between" w="100%">
              <Text fontSize="4xl">{raveEmoji}</Text>
              <Text fontSize="4xl">{raveEmoji}</Text>
            </HStack>
          </VStack>
        ) : (
          <VStack spacing={4} w="100%" h="100%" justify="space-around">
            <HStack justify="space-between" w="100%">
              <Text fontSize="4xl">⛔️</Text>
              <Text fontSize="4xl">⛔️</Text>
            </HStack>

            <h2>Caution: There is a rave in this box.</h2>

            <HStack justify="space-between" w="100%">
              <Text fontSize="4xl">⛔️</Text>
              <Text fontSize="4xl">⛔️</Text>
            </HStack>
          </VStack>
        )}
      </Box>
      <audio
        ref={audioRef}
        src={"https://mydatabucky.s3.amazonaws.com/rave.mp3"}
        loop
        hidden
      />
    </VStack>
  );
}

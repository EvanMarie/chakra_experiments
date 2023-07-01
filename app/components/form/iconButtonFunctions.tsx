import {
  AddIcon,
  ChatIcon,
  CheckIcon,
  DeleteIcon,
  DownloadIcon,
  EmailIcon,
  PhoneIcon,
  PlusSquareIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { createElement, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import { BasicText, Mono } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function IconButtonFunctionOne() {
  const colors = ["cyan", "teal", "green", "orange", "purple", "pink"];
  const icons = [
    SearchIcon,
    EmailIcon,
    DeleteIcon,
    PhoneIcon,
    PlusSquareIcon,
    ChatIcon,
  ];

  return (
    <SingleExample bg="background">
      <VStack spacing={3} alignItems="center">
        {colors.map((color, index) => (
          <HStack w="100%" key={color} spacing={4} justify="flex-start">
            <IconButton
              key={color}
              colorScheme={color}
              aria-label="Start search"
              icon={createElement(icons[index])}
            />
            <BasicText>
              {color} <Mono>colorScheme</Mono>
            </BasicText>
          </HStack>
        ))}
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function IconButtonFunctionTwo() {
  const sizes = ["xs", "sm", "md", "lg"];

  return (
    <SingleExample bg="background">
      <VStack spacing={3} alignItems="center">
        {sizes.map((size, index) => (
          <HStack w="100%" key={size} spacing={4} justify="flex-start">
            <IconButton
              key={size}
              colorScheme="pink"
              aria-label="Call a friend"
              size={size}
              icon={<PhoneIcon />}
            />
            <BasicText>
              {size} <Mono>size</Mono>
            </BasicText>
          </HStack>
        ))}
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function IconButtonFunctionThree() {
  const variants = ["outline", "solid", "ghost", "link"];
  return (
    <SingleExample bg="background">
      <VStack spacing={3} alignItems="center">
        {variants.map((variant, index) => (
          <HStack w="100%" key={variant} spacing={4} justify="flex-start">
            <IconButton
              key={variant}
              colorScheme="cyan"
              aria-label="Call a friend"
              variant={variant}
              icon={<PhoneIcon />}
            />
            <BasicText>
              {variant} <Mono>variant</Mono>
            </BasicText>
          </HStack>
        ))}
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function IconButtonFunctionFour() {
  const sizes = ["xs", "sm", "md", "lg"];

  return (
    <SingleExample bg="background">
      <HStack spacing={5} alignItems="center">
        {sizes.map((size, index) => (
          <IconButton
            key={size}
            isRound
            colorScheme="pink"
            aria-label="Call a friend"
            size={size}
            icon={<ChatIcon />}
          />
        ))}
      </HStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function IconButtonFunctionFive() {
  const [loading, setLoading] = useState(false);
  const handleDownload = () => {
    setLoading(true);

    // Simulating a download operation. Replace with actual functionality.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <SingleExample bg="background">
      <IconButton
        isLoading={loading}
        aria-label="Download data"
        icon={<DownloadIcon />}
        onClick={handleDownload}
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function IconButtonFunctionSix() {
  const [hovered, setHovered] = useState(false);
  return (
    <SingleExample bg="background">
      <IconButton
        aria-label="Add item"
        icon={hovered ? <CheckIcon /> : <AddIcon />}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function IconButtonFunctionSeven() {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <SingleExample bg="background">
      <IconButton
        aria-label="Mute volume"
        icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        onClick={() => setIsMuted(!isMuted)}
      />
    </SingleExample>
  );
}

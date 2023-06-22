/* eslint-disable react/display-name */
/* eslint-disable react/style-prop-object */
import { MyFlex, SingleExample } from "~/styles/MainDesignComponents";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Portal,
  PopoverFooter,
  PopoverArrow,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
} from "@chakra-ui/react";
import { PlaceholderImage } from "~/styles/DesignComponents";
import React, { useEffect, useRef, useState } from "react";

import { BiHappy } from "react-icons/bi";

const PopoverButtonStyles = {
  bg: "accent_3",
  color: "darkAccent_3",
  border: "1px solid",
  borderColor: "darText",
  _hover: {
    bg: "darkAccent_3",
    color: "accent_3",
  },
};

const PopoverContentStyles = {
  bg: "accent_3",
  color: "darkAccent_3",
  border: "1px solid accent_3",
  borderColor: "darText",
};

const PopoverHeaderStyles = {
  bg: "accent_1",
  color: "darkAccent_3",
  borderBottom: "1px solid",
  borderColor: "darText",
};

const PopoverBodyStyles = {
  bg: "Accent_3",
  color: "darkAccent_3",
};

/* ******************************* ONE ************************************ */

export function PopoverFunctionOne() {
  return (
    <SingleExample bg="background">
      <Popover>
        <PopoverTrigger>
          <Button sx={PopoverButtonStyles}>Trigger Me!</Button>
        </PopoverTrigger>
        <PopoverContent sx={PopoverContentStyles}>
          <PopoverHeader sx={PopoverHeaderStyles}>Popover Title</PopoverHeader>
          <PopoverCloseButton color="darkAccent_2" />
          <PopoverBody sx={PopoverBodyStyles}>
            This is the content of the popover.
            <MyFlex>
              <PlaceholderImage />{" "}
            </MyFlex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </SingleExample>
  );
}

/* ******************************* TWO ************************************ */

export function PopoverFunctionTwo() {
  return (
    <SingleExample bg="background">
      <Popover>
        <PopoverTrigger>
          <Button sx={PopoverButtonStyles}>Popover Trigger 1</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent sx={PopoverContentStyles}>
            <PopoverArrow />
            <PopoverHeader sx={PopoverHeaderStyles}>
              Popover Title 1
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="teal">Popover Button</Button>
              <PlaceholderImage colors={24} style={"cubic-disarray"} />{" "}
            </PopoverBody>
            <PopoverFooter sx={PopoverHeaderStyles}>
              Popover Footer 1
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button sx={PopoverButtonStyles}>Popover Trigger 2</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent sx={PopoverContentStyles}>
            <PopoverArrow />
            <PopoverHeader sx={PopoverHeaderStyles}>
              Popover Title 2
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="teal">Popover Button</Button>
              <PlaceholderImage style={"circles"} colors={95} />{" "}
            </PopoverBody>
            <PopoverFooter sx={PopoverHeaderStyles}>
              Popover Footer 2
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </SingleExample>
  );
}

/* ******************************* THREE ************************************ */

export function PopoverFunctionThree() {
  const initRef = useRef<HTMLButtonElement>(null);
  return (
    <SingleExample bg="background">
      <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button sx={PopoverButtonStyles}>
                {isOpen ? "Close" : "Open"}
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader sx={PopoverHeaderStyles}>
                  The Very Kind Popover
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody sx={PopoverContentStyles}>
                  <Box>
                    Hello. Would you like some art?
                    <PlaceholderImage style={"circles"} colors={33} />
                  </Box>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    onClick={onClose}
                    ref={initRef}
                  >
                    Close
                  </Button>
                </PopoverBody>
                <PopoverFooter sx={PopoverHeaderStyles}>
                  Thanks for stopping by!
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </SingleExample>
  );
}

/* ******************************* FOUR ************************************ */

const positiveAdjectives = [
  "Amazing",
  "Brilliant",
  "Caring",
  "Delightful",
  "Energetic",
  "Fantastic",
  "Genuine",
  "Happy",
  "Incredible",
  "Joyful",
  "Kind",
  "Lively",
  "Magnificent",
  "Optimistic",
  "Passionate",
  "Radiant",
  "Spectacular",
  "Terrific",
  "Unforgettable",
  "Vibrant",
];

export function PopoverFunctionFour() {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdjective, setSelectedAdjective] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filteredAdjectives, setFilteredAdjectives] =
    useState(positiveAdjectives);

  useEffect(() => {
    inputRef.current?.addEventListener("keydown", (e) => {
      setIsOpen(true);
    });

    setFilteredAdjectives(
      positiveAdjectives.filter((adjective) =>
        adjective.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  const handleClick = (adjective: string) => {
    setValue(adjective);
    buttonRef.current?.focus();
    setIsOpen(false);
  };

  const handleSelect = (adjective: string) => {
    if (value !== "") {
      setSelectedAdjective(adjective);
      // setIsOpen(false);
      setModalIsOpen(true);
    }
  };

  const handleClose = () => {
    setValue("");
    setSelectedAdjective("");
    setIsOpen(false);
    setModalIsOpen(false);
  };

  return (
    <SingleExample bg="background">
      <h2>I am</h2>
      <Popover
        initialFocusRef={inputRef}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
      >
        <PopoverTrigger>
          <Input
            w="200px"
            bg="white"
            color="black"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </PopoverTrigger>
        <PopoverContent
          w="200px"
          h="300px"
          overflowY="scroll"
          sx={PopoverContentStyles}
        >
          <PopoverArrow />
          <PopoverCloseButton onClick={() => handleClose()} />
          <PopoverBody sx={PopoverBodyStyles}>
            <Stack>
              {filteredAdjectives.map((adjective) => (
                <Button
                  w="150px"
                  size="sm"
                  key={adjective}
                  onClick={() => handleClick(adjective)}
                  variant="ghost"
                >
                  {adjective}
                </Button>
              ))}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Button
        sx={PopoverButtonStyles}
        variant="solid"
        ref={buttonRef}
        _focus={{ bg: "pink" }}
        onClick={() => handleSelect(value)}
      >
        Select
      </Button>
      <Modal isOpen={modalIsOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MyFlex textAlign="center">
              <BiHappy size={60} color="deeppink" />
              <h2>
                Why, yes, you are SO VERY {selectedAdjective.toUpperCase()}!
              </h2>
            </MyFlex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SingleExample>
  );
}

/* ******************************* FIVE ************************************ */

export function PopoverFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ******************************* SIX ************************************ */

export function PopoverFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

// /* ******************************* SEVEN ************************************ */
// export function PopoverFunctionSeven() {
//   return <SingleExample bg="background"> Function Logic</SingleExample>;
// }

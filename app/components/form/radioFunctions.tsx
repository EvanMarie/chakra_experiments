import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  UseRadioProps,
  VStack,
  useDisclosure,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { motion } from "framer-motion";

export function RadioFunctionOne() {
  const [value, setValue] = useState("1");

  return (
    <SingleExample>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="column">
          <Radio value="1">Choice A</Radio>
          <Radio value="2">Choice B</Radio>
          <Radio value="3">Choice C</Radio>
        </Stack>
      </RadioGroup>
    </SingleExample>
  );
}
/* ********************************************************************** */

export function RadioFunctionTwo() {
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

  const halfLength = Math.ceil(colorSchemes.length / 2);
  const columnOne = colorSchemes.slice(0, halfLength);
  const columnTwo = colorSchemes.slice(halfLength);

  return (
    <SingleExample bg="background">
      <RadioGroup>
        <Stack direction="row" spacing={8}>
          <Stack direction="column">
            {columnOne.map((colorScheme) => (
              <Radio key={colorScheme} colorScheme={colorScheme} defaultChecked>
                {colorScheme}
              </Radio>
            ))}
          </Stack>
          <Stack direction="column">
            {columnTwo.map((colorScheme) => (
              <Radio key={colorScheme} colorScheme={colorScheme} defaultChecked>
                {colorScheme}
              </Radio>
            ))}
          </Stack>
        </Stack>
      </RadioGroup>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RadioFunctionThree() {
  return (
    <SingleExample bg="background">
      {" "}
      <Stack>
        <Radio size="sm" name="1" colorScheme="pink">
          Small Radio
        </Radio>
        <Radio size="md" name="1" colorScheme="purple">
          Medium Radio
        </Radio>
        <Radio size="lg" name="1" colorScheme="cyan" defaultChecked>
          Large Radio
        </Radio>
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RadioFunctionFour() {
  return (
    <SingleExample bg="background">
      {" "}
      <RadioGroup defaultValue="3">
        <Stack>
          <Radio value="1" isDisabled>
            Not Selected
          </Radio>
          <Radio value="2">Not Selected</Radio>
          <Radio value="3">Selected</Radio>
        </Stack>
      </RadioGroup>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RadioFunctionFive() {
  return (
    <SingleExample bg="background">
      {" "}
      <RadioGroup defaultValue="1">
        <Stack spacing={4} direction="row">
          <Radio value="1" isDisabled>
            No. 1
          </Radio>
          <Radio value="2">No. 2</Radio>
          <Radio value="3">No. 3</Radio>
        </Stack>
      </RadioGroup>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RadioFunctionSix() {
  return (
    <SingleExample bg="background">
      <Radio isInvalid>I have been canceled.</Radio>
    </SingleExample>
  );
}

/* ********************************************************************** */

function RadioButtons(props: UseRadioProps & { children: ReactNode }) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const inputProps = getInputProps();
  const radioProps = getRadioProps();

  return (
    <Box as="label">
      <input {...inputProps} />
      <Box
        {...radioProps}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="full"
        w="150px"
        textAlign="center"
        bg="sectionColor"
        borderColor="accent_2"
        boxShadow="md"
        _checked={{
          bg: "accent_2",
          color: "background",
          borderColor: "accent_1",
          fontWeight: "bold",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export function RadioFunctionSeven() {
  const options = ["Thor", "Chihiro", "Mononoke", "Ragnarök"];
  const [selectedValue, setSelectedValue] = useState<string>("Ragnarök");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const petAlert = (value: string) => {
    setSelectedValue(value);
    onOpen();
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Pet",
    defaultValue: "Ragnarök",
    onChange: petAlert,
  });

  const group = getRootProps();

  return (
    <VStack {...group} spacing={4}>
      <h2>Choose a pet:</h2>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioButtons key={value} {...radio}>
            {value}
          </RadioButtons>
        );
      })}
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="accent_2" color="background" textAlign="center">
          <DrawerCloseButton />
          <DrawerBody>
            <h1>You chose {selectedValue}.</h1>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
}

/* ********************************************************************** */

export function EmojiRating() {
  const ratings = ["😞", "😐", "😊", "😃", "🤩"];
  const [selectedRating, setSelectedRating] = useState("");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "rating",
    defaultValue: "",
    onChange: setSelectedRating,
  });

  const group = getRootProps();

  return (
    <VStack {...group} spacing={1}>
      <h3>Rate your experience:</h3>
      {ratings.map((rating) => (
        <Radio
          key={rating}
          value={rating}
          {...getRadioProps({ value: rating })}
        >
          {rating}
        </Radio>
      ))}
      <Box w="100%">
        <p>Your selected rating: {selectedRating}</p>{" "}
      </Box>
    </VStack>
  );
}

/* ********************************************************************** */

export function CustomRadioToggles() {
  const colors = ["pink", "purple", "cyan", "green", "yellow", "orange"];
  const [selectedOption, setSelectedOption] = useState("");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "colors",
    defaultValue: "",
    onChange: setSelectedOption,
  });

  const group = getRootProps();

  return (
    <VStack w="100%" align="center">
      <h2>Which color?</h2>
      <HStack w="100%" spacing={0} justify="space-around">
        <VStack {...group} alignItems="flex-start" spacing={0}>
          {colors.map((color) => (
            <Radio
              key={color}
              value={color}
              {...getRadioProps({ value: color })}
            >
              {color}
            </Radio>
          ))}
        </VStack>
        <Box bg={selectedOption} w="75px" h="100px" />
      </HStack>
    </VStack>
  );
}

/* ********************************************************************** */

export function RadioCarousel() {
  const slides = [
    {
      title: "A Bear",
      image: "https://placebear.com/150/150",
    },
    {
      title: "A Kitten",
      image: "http://placekitten.com/150/150",
    },
    {
      title: "A Puppy",
      image: "https://place-puppy.com/300x300",
    },
  ];
  const [selectedSlide, setSelectedSlide] = useState("");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "carousel",
    defaultValue: "",
    onChange: setSelectedSlide,
  });

  const group = getRootProps();

  return (
    <VStack {...group} align="center" spacing={4} w="100%">
      <VStack w="100%" align="flex-start">
        <Flex justify="center">
          <h2>Select a slide:</h2>
        </Flex>
        {slides.map((slide) => (
          <Radio
            key={slide.title}
            value={slide.title}
            {...getRadioProps({ value: slide.title })}
          >
            {slide.title}
          </Radio>
        ))}
      </VStack>
      <Box h="175px">
        {selectedSlide && (
          <motion.div
            key={selectedSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "backIn" }}
          >
            {selectedSlide && (
              <img
                src={
                  slides.find((slide) => slide.title === selectedSlide)?.image
                }
                alt={selectedSlide}
                style={{ width: "150px" }}
              />
            )}
          </motion.div>
        )}
      </Box>
    </VStack>
  );
}

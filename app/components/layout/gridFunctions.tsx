import {
  Avatar,
  Box,
  Center,
  Code,
  Container,
  Flex,
  Grid,
  GridItem,
  GridItemProps,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { GridStyles, boxColors, gridBoxStyles } from "./gridComponents";
import { Highlighter } from "../styling/highlighter";
import { CalendarIcon, EmailIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";

const SelectStyles = {
  size: "sm",
  width: "150px",
};

export function GridFunctionOne() {
  const [columnCount, setColumnCount] = useState<number>(3);

  const colorVariants = [
    boxColors.one,
    boxColors.two,
    boxColors.three,
    boxColors.four,
    boxColors.five,
    boxColors.six,
  ];

  const handleColumnCountChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setColumnCount(Number(event.target.value));
  };

  const generateGridItems = () => {
    const items = [];
    for (let i = 0; i < columnCount; i++) {
      const colorVariant = `${colorVariants[i]}`;
      items.push(
        <GridItem key={i} {...gridBoxStyles} bg={colorVariant}>
          <Text size="xs">Col {i + 1}</Text>
        </GridItem>
      );
    }
    return items;
  };

  return (
    <VStack w="100%" spacing={5}>
      <HStack w="100%" justify="space-evenly">
        <Select
          {...SelectStyles}
          width="150px"
          value={columnCount}
          onChange={handleColumnCountChange}
        >
          <option value={1}>1 Column</option>
          <option value={2}>2 Columns</option>
          <option value={3}>3 Columns</option>
          <option value={4}>4 Columns</option>
          <option value={5}>5 Columns</option>
          <option value={6}>6 Columns</option>
        </Select>
      </HStack>

      <Container w="100%" bg="mainText" p={4}>
        <Grid w="100%" templateColumns={`repeat(${columnCount}, 1fr)`} gap={4}>
          {generateGridItems()}
        </Grid>
      </Container>
    </VStack>
  );
}

/* ********************************************************************** */

export function GridFunctionTwo() {
  return (
    <SingleExample bg="background">
      {" "}
      <Center w="100%" h="100%">
        <VStack spacing={0}>
          <Code fontSize="xs">{`templateRows="repeat(2, 1fr)"`}</Code>
          <Code fontSize="xs">{`templateColumns="repeat(5, 1fr)"`}</Code>
        </VStack>
      </Center>
      <Grid
        {...GridStyles}
        h="200px"
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} {...gridBoxStyles} bg={boxColors.one}>
          <Center w="100%" h="100%">
            <VStack spacing={0}>
              <Code fontSize="xs">{`rowSpan={2}`}</Code>
              <Code fontSize="xs">{`colSpan={1}`}</Code>
            </VStack>
          </Center>
        </GridItem>
        <GridItem colSpan={4} {...gridBoxStyles} bg={boxColors.two}>
          <Center w="100%" h="100%">
            <Code fontSize="xs">{`colSpan={4}`}</Code>
          </Center>
        </GridItem>
        <GridItem colSpan={2} {...gridBoxStyles} bg={boxColors.three}>
          <Center w="100%" h="100%">
            <Code fontSize="xs">{`colSpan={2}`}</Code>
          </Center>
        </GridItem>
        <GridItem colSpan={2} {...gridBoxStyles} bg={boxColors.four}>
          <Center w="100%" h="100%">
            <Code fontSize="xs">{`colSpan={2}`}</Code>
          </Center>
        </GridItem>
      </Grid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function GridFunctionThree() {
  return (
    <SingleExample bg="background">
      <VStack w="100%" align="center" spacing={6}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
          {...GridStyles}
          gap={4}
        >
          <Box
            gridRow="1 / 3"
            gridColumn="1 / 3"
            {...gridBoxStyles}
            bg={boxColors.one}
          >
            Element A
          </Box>
          <Box
            gridRow="2 / 4"
            gridColumn="2 / 4"
            {...gridBoxStyles}
            bg={boxColors.two}
          >
            Element B
          </Box>
          <Box {...gridBoxStyles} bg={boxColors.three}>
            Element C
          </Box>
        </Grid>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function GridFunctionFour() {
  return (
    <SingleExample bg="background">
      <Grid
        templateColumns="repeat(auto-fit, minmax(90px, 1fr))"
        templateRows="repeat(2, 125px)"
        {...GridStyles}
        gap={4}
      >
        <Box
          gridRow="1 / span 2"
          gridColumn="1 / span 1"
          {...gridBoxStyles}
          bg={boxColors.one}
        >
          Element A
        </Box>
        <Box
          gridRow="1 / 2"
          gridColumn="2 / 4"
          {...gridBoxStyles}
          bg={boxColors.two}
        >
          Element B
        </Box>
        <Box
          gridRow="2 / 3"
          gridColumn="2 / 3"
          {...gridBoxStyles}
          bg={boxColors.three}
        >
          Element C
        </Box>
        <Box
          gridRow="2 / 3"
          gridColumn="3 / 4"
          {...gridBoxStyles}
          bg={boxColors.four}
        >
          Element D
        </Box>
      </Grid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function GridFunctionFive() {
  return (
    <SingleExample bg="background">
      <Highlighter>{`templateAreas="
  'header header header'
  'sidebar content content'
  'footer footer footer'
"`}</Highlighter>
      <Grid
        {...GridStyles}
        gap={1}
        templateAreas="
  'header header header'
  'sidebar content content'
  'footer footer footer'
"
      >
        <Box gridArea="header" {...gridBoxStyles} bg={boxColors.one}>
          Header
        </Box>
        <Box gridArea="sidebar" {...gridBoxStyles} bg={boxColors.two}>
          Sidebar
        </Box>
        <Box gridArea="content" {...gridBoxStyles} bg={boxColors.three}>
          Content
        </Box>
        <Box gridArea="footer" {...gridBoxStyles} bg={boxColors.four}>
          Footer
        </Box>
      </Grid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function GridFunctionSix() {
  const avatars = [
    {
      name: "Jasper Jenkins",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    },
    {
      name: "Sheila Norris",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    },
    {
      name: "Manny Parker",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
    },
    {
      name: "Joseph Duncan",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704h",
    },
    {
      name: "Lori Perez",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704i",
    },
    {
      name: "Felix Miles",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704j",
    },
  ];

  const [avatarsWithSize, setAvatarsWithSize] = useState(
    avatars.map((avatar, index) => ({
      ...avatar,
      scale: index % 2 === 0 ? 1.1 : 1, // Using scale property instead of Avatar size prop
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAvatarsWithSize((prevAvatars) => {
        let updatedAvatars = prevAvatars.map((avatar, index) => ({
          ...avatar,
          scale: avatar.scale === 1.1 ? 0.9 : 1.1, // Toggle between 1.1 and 1
        }));
        return updatedAvatars;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Grid templateColumns="repeat(auto-fill, minmax(100px, 1fr))" gap={4}>
        {avatarsWithSize.map((avatar, index) => (
          <VStack key={index} w="100%" align="center">
            <Box
              textAlign="center"
              gridColumnStart={index % 2 === 0 ? "span 2" : "auto"}
              transition="transform 4s ease-in-out" // Transition is now applied on the transform property
              transform={`scale(${avatar.scale})`} // Using transform: scale CSS property
            >
              <Avatar size="lg" name={avatar.name} src={avatar.image} />
            </Box>
            <Text mt={2}>{avatar.name}</Text>
          </VStack>
        ))}
      </Grid>
    </div>
  );
}

/* ********************************************************************** */

export function GridFunctionSeven() {
  return (
    <SingleExample bg="background">
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        templateRows="repeat(2, 1fr)"
        templateAreas={`"top top" "middle middle" "bottom bottom" "widget widget"`}
        gap={4}
      >
        <Box gridArea="top" bg={boxColors.one} {...gridBoxStyles}>
          <Text fontSize="lg" fontWeight="bold">
            Bienvenue!
          </Text>
          <Text>
            Welcome to Louise the Llama's website! Discover the adventures of
            Louise, the most fashionable llama in the world.
          </Text>
          <Center w="100%">
            <Image
              src="/images/louise_llama2.png"
              alt="Louise the Llama"
              boxSize="100px"
              borderRadius="lg"
            />
          </Center>
        </Box>
        <Box gridArea="middle" bg={boxColors.two} {...gridBoxStyles}>
          <Text fontSize="lg" fontWeight="bold">
            Stay Tuned!
          </Text>
          <Text>
            Follow Louise as she conquers the fashion industry with her unique
            sense of style and irresistible charm. Stay tuned for llama fashion
            tips, behind-the-scenes drama, and exclusive interviews with other
            stylish animals.
          </Text>
          <HStack w="100%" justify="space-evenly" color="sidebarkBackground">
            <EmailIcon boxSize={8} />
            <CalendarIcon boxSize={6} />
            <PhoneIcon boxSize={6} />
            <LinkIcon boxSize={6} />
          </HStack>
        </Box>
        <Box gridArea="bottom" bg={boxColors.four} {...gridBoxStyles}>
          <Text fontSize="lg" fontWeight="bold">
            Connect!
          </Text>
          <Text>
            Join Louise's fan club and receive exclusive llama-themed goodies.
          </Text>
          <Center w="100%">
            <Avatar
              name="Louise the Llama"
              src={"/images/louise_llama.png"}
              size="xl"
            />
          </Center>
        </Box>
      </Grid>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function GridFunctionEight() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  const colorKeys = Object.keys(boxColors);

  return (
    <SingleExample bg="background">
      <Grid
        templateColumns="repeat(auto-fit, minmax(60px, 1fr))"
        {...GridStyles}
        gap={4}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            {...gridBoxStyles}
            h="120px"
            bg={boxColors[colorKeys[index] as keyof typeof boxColors]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gridColumn={index % 2 === 0 ? "1 / 2" : "2 / 3"}
          >
            <Center w="100%">
              <Text fontSize="lg" fontWeight="bold">
                {item}
              </Text>
            </Center>
          </Box>
        ))}
      </Grid>
    </SingleExample>
  );
}

import {
  Box,
  Grid,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { CatsBouncing } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";
import { Link as ReactLink } from "react-router-dom";
import { BiBorderRadius } from "react-icons/bi";

export function LinkOverlayFunctionOne() {
  return (
    <SingleExample bg="background">
      <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
        <Box as="time" dateTime="2023-06-27 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href={CatsBouncing} isExternal>
            Exploring AI: The Roadmap Ahead
          </LinkOverlay>
        </Heading>
        <Text>
          Uncover what the future holds for AI and learn about the latest
          advancements in the field.
        </Text>
      </LinkBox>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function LinkOverlayFunctionTwo() {
  return (
    <SingleExample bg="background">
      <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
        <Box as="time" dateTime="2023-06-27 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href={CatsBouncing} isExternal>
            Exploring AI: The Roadmap Ahead
          </LinkOverlay>
        </Heading>
        <Text mb="3">
          Uncover what the future holds for AI and learn about the latest
          advancements in the field.
        </Text>
        <Box
          as="a"
          color="teal.400"
          href="http://endless.horse/"
          target="_blank"
          fontWeight="bold"
        >
          Read More
        </Box>
      </LinkBox>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function LinkOverlayFunctionThree() {
  return (
    <SingleExample bg="background">
      <LinkBox as="article">
        <h2>
          <LinkOverlay as={ReactLink} href="#">
            AI Advancements 2023
          </LinkOverlay>
        </h2>
        <p>
          Get an in-depth analysis of the most significant AI advancements made
          in 2023.
        </p>
        <a href={CatsBouncing}>Continue Reading</a>
      </LinkBox>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ImageCard() {
  return (
    <LinkBox as="figure" maxW="sm">
      <Image
        src="https://loremflickr.com/g/200/200/paris?lock=53"
        alt="Paris"
      />
      <Text as="figcaption" mt="2">
        <LinkOverlay href={CatsBouncing} isExternal>
          I love Paris.
        </LinkOverlay>
      </Text>
    </LinkBox>
  );
}

/* ********************************************************************** */

export function GridCard() {
  const BoxStyles = {
    minHeight: "70px",
    borderRadius: "lg",
    fontWeight: "bold",
    fontSize: { base: "md", sm: "md", md: "sm", lg: "xs" },
    textAlign: "center",
    p: 2,
  };
  return (
    <LinkBox as={Grid} templateColumns="repeat(2, 1fr)" gap={4}>
      <Box
        bgImage="https://generative-placeholders.glitch.me/image?width=100&height=100&colors=88&style=circles"
        sx={BoxStyles}
      />
      <Box bg="accent_2" sx={BoxStyles}>
        <LinkOverlay href={CatsBouncing} isExternal>
          Link to somewhere interesting
        </LinkOverlay>
      </Box>
      <Box bg="accent_2" sx={BoxStyles}>
        <LinkOverlay href="http://endless.horse/" isExternal>
          Link to somewhere else interesting
        </LinkOverlay>
      </Box>
      <Box
        bgImage="https://generative-placeholders.glitch.me/image?width=100&height=100&colors=26&style=circles"
        sx={BoxStyles}
      />
    </LinkBox>
  );
}

/* ********************************************************************** */

export function NavigationList() {
  return (
    <List spacing={3} styleType="circle" w="100%" p={2}>
      <ListItem>
        <LinkBox>
          <LinkOverlay href="#">Home</LinkOverlay>
        </LinkBox>
      </ListItem>
      <ListItem>
        <LinkBox>
          <LinkOverlay href="#">About</LinkOverlay>
        </LinkBox>
      </ListItem>
      <ListItem>
        <LinkBox>
          <LinkOverlay href="#">Contact</LinkOverlay>
        </LinkBox>
      </ListItem>
    </List>
  );
}

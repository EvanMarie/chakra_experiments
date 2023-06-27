import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { CatsBouncing } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

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
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function LinkOverlayFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function LinkOverlayFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function LinkOverlayFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function LinkOverlayFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

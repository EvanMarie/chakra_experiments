import {
  Box,
  Center,
  Code,
  Hide,
  Show,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Mono } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function ShowHideFunctionOne() {
  return (
    <SingleExample bg="background">
      <Center w="100%" p={3} borderRadius="lg" bg="mainText" color="background">
        <VStack
          w="100%"
          align="center"
          spacing={4}
          divider={<StackDivider borderColor="background" />}
        >
          <VStack w="100%" align="center" spacing={0}>
            <Text mb={0}>
              <b>Box One</b>:{" "}
              <Code>{`<Show breakpoint="(max-width: 700px)">`}</Code>
            </Text>
            <Text mb={0}>
              This box shows only on screens 700px and smaller and disappears on
              screens 701px and larger.
            </Text>
            <Box h="75px">
              <Show breakpoint="(max-width: 700px)">
                <Center
                  bg="accent_2"
                  borderRadius="lg"
                  h="60px"
                  w="250px"
                  p={3}
                  border="2px solid #444444"
                >
                  <b>Box One</b>
                </Center>
              </Show>
            </Box>
          </VStack>
          <VStack w="100%" align="center" spacing={0}>
            <Text mb={0}>
              <b>Box Two</b>:{" "}
              <Code>{`<Hide breakpoint="(max-width: 700px)">`}</Code>
            </Text>
            <Text mb={0}>
              This box hides on screens 700px and smaller and shows on screens
              701px and larger.
            </Text>
            <Box h="75px">
              <Hide breakpoint="(max-width: 700px)">
                <Center
                  bg="accent_1"
                  borderRadius="lg"
                  h="60px"
                  p={3}
                  w="250px"
                  border="2px solid #444444"
                >
                  <b>Box Two</b>
                </Center>
              </Hide>
            </Box>
          </VStack>
        </VStack>
      </Center>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ShowHideFunctionTwo() {
  return (
    <SingleExample bg="background">
      {" "}
      <Center w="100%" p={3} borderRadius="lg" bg="mainText" color="background">
        <VStack
          w="100%"
          align="center"
          spacing={4}
          divider={<StackDivider borderColor="background" />}
        >
          <VStack w="100%" align="center" spacing={0}>
            <Text mb={0}>
              <b>Box One</b>: <Code>{`<Show above="sm">`}</Code>
            </Text>
            <Text mb={0}>
              This box shows when the screen width is equal to or greater than
              the "sm" breakpoint.
            </Text>
            <Box h="75px">
              <Show above="sm">
                <Center
                  bg="accent_2"
                  borderRadius="lg"
                  h="60px"
                  w="250px"
                  p={3}
                  border="2px solid #444444"
                >
                  <b>Box One</b>
                </Center>
              </Show>
            </Box>
          </VStack>
          <VStack w="100%" align="center" spacing={0}>
            <Text mb={0}>
              <b>Box Two</b>: <Code>{`<Hide below="md"`}</Code>
            </Text>
            <Text mb={0}>
              This box hides when the screen width is equal to or smaller than
              the "md" breakpoint.
            </Text>
            <Box h="75px">
              <Hide below="md">
                <Center
                  bg="accent_1"
                  borderRadius="lg"
                  h="60px"
                  p={3}
                  w="250px"
                  border="2px solid #444444"
                >
                  <b>Box Two</b>
                </Center>
              </Hide>
            </Box>
          </VStack>
        </VStack>
      </Center>
    </SingleExample>
  );
}

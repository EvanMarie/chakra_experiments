import {
  Box,
  Code,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { pinInputStyles } from "./pinInputComponents";

export function PinInputFunctionOne() {
  const sizes = ["xs", "sm", "md", "lg"];

  return (
    <SingleExample bg="background">
      <VStack alignItems="left" spacing={4}>
        {sizes.map((size) => (
          <Stack
            key={size}
            direction={["column", "row"]}
            justify={["center", "flex-start"]}
            align={["center", "flex-start"]}
            spacing={[2, 4]}
          >
            <Box>
              <Code fontSize={["sm", "md"]}>{`size="${size}"`}</Code>
            </Box>
            <HStack>
              <PinInput size={size}>
                <PinInputField sx={pinInputStyles} />
                <PinInputField sx={pinInputStyles} />
                <PinInputField sx={pinInputStyles} />
                <PinInputField sx={pinInputStyles} />
              </PinInput>{" "}
            </HStack>
          </Stack>
        ))}
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function PinInputFunctionTwo() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function PinInputFunctionThree() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function PinInputFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function PinInputFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function PinInputFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function PinInputFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import {
  MyButton,
  homeIconColor,
  mainMenuButtons,
} from "~/styles/reusableChakraComponents";
import { BiHome } from "react-icons/bi";

const labelFontSize = "13px";

export function FullButtonBar() {
  return (
    <Box m={2} p={3}>
      <HStack w="100%" align="center" justify="center">
        <VStack w="100%" align="left" justify="center">
          <HStack align="flex-end" spacing={1}>
            <Text fontSize={labelFontSize} fontWeight="bold">
              Styling:{" "}
            </Text>
            <HStack align="center" justify="center" spacing={1}>
              <MyButton
                label="Style Basics"
                href="/chakra_styling_basic"
                {...mainMenuButtons}
              />
              <MyButton
                label="Display"
                href="/chakra_styling_display"
                {...mainMenuButtons}
              />
              <MyButton
                label="Borders"
                href="/chakra_styling_borders"
                {...mainMenuButtons}
              />
              <MyButton
                label="Filters & Misc."
                href="/chakra_styling_misc"
                {...mainMenuButtons}
              />
            </HStack>
          </HStack>
          <HStack align="flex-end" spacing={1}>
            <Text fontSize={labelFontSize} fontWeight="bold">
              Components:{" "}
            </Text>
            <HStack align="center" justify="center">
              <MyButton
                label="Disclosure"
                href="/chakra_disclosure"
                {...mainMenuButtons}
              />
              <MyButton
                label="Feedback"
                href="/chakra_feedback"
                {...mainMenuButtons}
              />
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export function StyleButtonBar() {
  return (
    <Box m={2} p={3}>
      <HStack w="100%" align="center" justify="flex-end">
        <Box marginRight="10px">
          <Link href="/">
            <BiHome size="24px" color={homeIconColor} />
          </Link>
        </Box>
        <VStack w="100%" align="left" justify="center">
          <HStack align="flex-end" spacing={1}>
            <Text fontSize={labelFontSize} fontWeight="bold">
              Styling:
            </Text>
            <HStack align="center" justify="center" spacing={1}>
              <MyButton
                label="Style Basics"
                href="/chakra_styling_basic"
                {...mainMenuButtons}
              />
              <MyButton
                label="Display"
                href="/chakra_styling_display"
                {...mainMenuButtons}
              />
              <MyButton
                label="Borders"
                href="/chakra_styling_borders"
                {...mainMenuButtons}
              />
              <MyButton
                label="Filters & Misc."
                href="/chakra_styling_misc"
                {...mainMenuButtons}
              />
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export function ComponentButtonBar() {
  return (
    <Box m={2} p={3}>
      <HStack w="100%" align="center" justify="center">
        <Box marginRight="10px">
          <Link href="/">
            <BiHome size="24px" color={homeIconColor} />
          </Link>
        </Box>
        <VStack w="100%" align="left" justify="center">
          <HStack align="flex-end">
            <Text fontSize={labelFontSize} fontWeight="bold">
              Components:{" "}
            </Text>
            <HStack align="center" justify="center">
              <MyButton
                label="Disclosure"
                href="/chakra_disclosure"
                {...mainMenuButtons}
              />
              <MyButton
                label="Feedback"
                href="/chakra_feedback"
                {...mainMenuButtons}
              />
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

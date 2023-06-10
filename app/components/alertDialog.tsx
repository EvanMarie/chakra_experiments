import { Box } from "@chakra-ui/react";

import { BasicText, colors } from "~/styles/reusableChakraComponents";

export function ComponentOne() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

export function ComponentTwo() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

export function ComponentThree() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

export function ComponentFour() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
    </Box>
  );
}

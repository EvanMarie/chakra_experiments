import { Box } from "@chakra-ui/react";

import { BasicText, colors } from "~/styles/reusableChakraComponents";

export function ComponentOne() {
  return (
    <Box marginTop="5px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <img src="./images/codeimage.png" alt="skeleton" width="425px" />
      </Flex>
    </Box>
  );
}

export function ComponentTwo() {
  return (
    <Box marginTop="5px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <img src="./images/codeimage.png" alt="skeleton" width="425px" />
      </Flex>
    </Box>
  );
}

export function ComponentThree() {
  return (
    <Box marginTop="5px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <img src="./images/codeimage.png" alt="skeleton" width="425px" />
      </Flex>
    </Box>
  );
}

export function ComponentFour() {
  return (
    <Box marginTop="5px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        HEADING
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ DESCRIPTION</BasicText>

      <Box p={5}>
        <Box marginY={1}>COMPONENT</Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <img src="./images/codeimage.png" alt="skeleton" width="425px" />
      </Flex>
    </Box>
  );
}

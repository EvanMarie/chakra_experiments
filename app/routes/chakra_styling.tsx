import { Box, Flex, Link, Text } from "@chakra-ui/react";
import {
  BigBackgroundBox,
  MyButton,
  MyLabel,
  colors,
} from "~/styles/reusableChakraComponents";

export default function chakra_disclosure() {
  return (
    <BigBackgroundBox>
      <MyButton label="Back" href="/" />
      <Text mb={3} fontWeight="bold" color="cyan" fontSize="33px">
        Chakra Styles
      </Text>
      <MyLabel>Boxes and their properties:</MyLabel>
      <Box p={2} bg={colors.mainAccent2} mb={3}>
        This <b>Box</b> has a padding setting of
        <b>
          <i>p={2}</i>
        </b>
      </Box>
      <Box m={4} bg={colors.mainAccent2} mb={3}>
        This <b>Box</b> has a margin setting of{" "}
        <b>
          <i>m={4}</i>
        </b>
      </Box>

      <MyLabel>Background and Font Colors:</MyLabel>
      {/* Begin the examples */}
      <Box bg="tomato" p={2} mb={3}>
        This <b>Box</b> has a <b>bg of tomato</b>.
      </Box>

      <Box bg="green.200" p={2} mb={3} color="black">
        This <b>Box</b> has a <b>bg of green.200</b> and a{" "}
        <b>color (font) of "black"</b>.
      </Box>

      <Box backgroundColor="red.400" p={2} mb={3} color="#444444">
        This <b>Box</b> has a <b>backgroundColor of red.400</b> and a{" "}
        <b>color (font) of "#444444"</b>.
      </Box>

      <MyLabel>Gradients:</MyLabel>
      <Box
        w="100%"
        p={2}
        mb={3}
        bgGradient={"linear(to-t, green.200, pink.500)"}
        borderRadius={"sm"}
        color="black"
      >
        This <b>Box</b> has a <b>linear gradient</b> background.
      </Box>

      <Box
        w="100%"
        p={2}
        bgGradient="radial(cyan, yellow.400, pink.200)"
        color="black"
      >
        This <b>Box</b> has a <b>radial gradient</b> background.
      </Box>
    </BigBackgroundBox>
  );
}

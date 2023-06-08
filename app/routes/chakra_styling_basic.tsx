import { Box, Text } from "@chakra-ui/react";
import {
  BasicText,
  BigBackgroundBox,
  MyLabel,
  colors,
  FlexibleBox,
  MyHeading,
} from "~/styles/reusableChakraComponents";

import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { StyleButtonBar } from "~/components/ButtonBar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <StyleButtonBar />
      <MyHeading>Basic Chakra Styling:</MyHeading>
      <BasicText>
        Padding, Margin, Background, Font Color, Font Effects, Width, and
        Height.
      </BasicText>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#margin-and-padding">
        Padding and Margin:
      </MyLabel>
      <Box p={2} bg={colors.mainAccent2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a padding setting of
        <b>
          <i>p={2}</i>
        </b>
      </Box>
      <Box m={4} bg={colors.mainAccent2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a margin setting of{" "}
        <b>
          <i>m={4}</i>
        </b>
      </Box>

      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#color-and-background-color">
        Background and Font Colors:
      </MyLabel>
      {/* Begin the examples */}
      <Box bg="tomato" p={2} mb={3}>
        This <b>Box</b> has a <b>bg of tomato</b>.
      </Box>

      <Box bg="green.200" p={2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a <b>bg of green.200</b> and a{" "}
        <b>color (font) of "black"</b>.
      </Box>

      <Box backgroundColor="red.400" p={2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a <b>backgroundColor of red.400</b> and a{" "}
        <b>color (font) of "#444444"</b>.
      </Box>

      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#gradient">
        Gradients:
      </MyLabel>
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

      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#typography">
        Font Effects:
      </MyLabel>
      <Box
        paddingX={3}
        paddingY={1}
        bg={colors.secondaryBackground}
        borderRadius="sm"
      >
        <ul style={{ margin: "0px 10px" }}>
          <li>
            <Text fontSize={32}>fontSize={32}</Text>
          </li>
          <li>
            <Text fontSize="1.5em">fontSize="1.5em"</Text>
          </li>
          <li>
            <Text fontSize="md">fontSize="md"</Text>
          </li>
          <li>
            <Text textTransform="uppercase">textTransform="uppercase"</Text>
          </li>
          <li>
            <Text textTransform="lowercase">textTransform="lowercase"</Text>
          </li>
          <li>
            <Text textDecoration="underline">textDecoration="underline"</Text>
          </li>
          <li>
            <Text textDecoration="overline">textDecoration="overline"</Text>
          </li>
          <li>
            <Text textDecoration="line-through">
              textDecoration="line-through"
            </Text>
          </li>
        </ul>
      </Box>

      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height">
        Width & Height:
      </MyLabel>

      <FlexibleBox width="100%" height={12}>
        width="100% height={12}
      </FlexibleBox>
      <FlexibleBox w="100%" h="32px">
        w="100%" h="32px"{" "}
      </FlexibleBox>
      <FlexibleBox boxSize="sm">boxSize="sm"</FlexibleBox>
      <FlexibleBox w={256}>w={256}</FlexibleBox>
      <FlexibleBox w="40px">w='40px'</FlexibleBox>
      <StyleButtonBar />
    </BigBackgroundBox>
  );
}

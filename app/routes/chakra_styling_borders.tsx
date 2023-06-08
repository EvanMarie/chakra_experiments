import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import ButtonBar from "~/ButtonBar";
import stylesUrl from "~/styles/global.css";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyButton,
  MyHeading,
  MyLabel,
  colors,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <ButtonBar />
      <MyHeading>Chakra Borders & Shadows Styling:</MyHeading>
      <BasicText>
        Borders, Border Radius, Position, Shadow, and Text with Shadows.
      </BasicText>
      <MyLabel>Borders: </MyLabel>
      <Box>
        <BasicText>Hi!</BasicText>
      </Box>
    </BigBackgroundBox>
  );
}

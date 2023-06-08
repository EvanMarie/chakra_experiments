import { extendTheme } from "@chakra-ui/react";
import { colors } from "./reusableChakraComponents";

const color1 = colors.mainAccent;
const color2 = colors.mainAccent2;
const color3 = colors.mainAccent3;
const color4 = colors.mainAccent4;

const theme = extendTheme({
  // components: {
  //   Tabs: {
  //     baseStyle: {
  //       tab: {
  //         color: "black",
  //         borderColor: color1,
  //       },
  //       bg: color2,
  //       _selected: {
  //         color: "red",
  //         borderColor: color3,
  //         bg: color4,
  //       },
  //     },
  //   },
  // },
});

export default theme;

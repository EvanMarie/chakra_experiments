import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      a: {
        color: "deeppink",
        _hover: {
          color: "cyan",
        },
      },
    },
  },

  breakpoints: {
    sm: "30em", // 480px
    md: "50em", // 800px
    lg: "75em", // 1200px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
});
export default theme;

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "50em", // 800px
    lg: "69em", // 1100px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
});

export default theme;

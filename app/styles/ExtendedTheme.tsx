import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "0em", // 0px
    sm: "37em", // ~600px
    md: "50em", // 800px
    lg: "75em", // 1200px
    xl: "80em", // 1280px
  },

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

  fonts: {
    sizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
    },
  },
});

export default theme;

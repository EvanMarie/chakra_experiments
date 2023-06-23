import { extendTheme } from "@chakra-ui/react";
import { tabsTheme } from "./tabStyles";

// const CovertCandyScheme = {
//   50: "#f7e6c1", // mainText
//   100: "#fc65e6", // codeText
//   200: "#a7d5fa", // accent_2
//   300: "#faa5b9", // accent_1,
//   400: "#05fce8", // accent_3
//   450: "#fc6598", // linkColor
//   500: "#532291", // darkAccent_1
//   600: "#3d3145", // sectionColor
//   700: "#370a42", // darkAccent_2
//   800: "#0c2b45", // sidebarBackground, darkAccent_3
//   850: "#26231a", // darkText
//   900: "#211421", // background
// };

const CovertCandyScheme = {
  50: "#E0DEBF", // mainText * adobe
  200: "#44EAFA", // accent_2
  250: "#aa9ab5", // TipBackground
  300: "#FFA6AA", // accent_1, * adobe
  400: "#a7d5fa", // accent_3 * old accent 2
  450: "#E26BB2", // linkColor *
  500: "#532291", // darkAccent_1
  600: "#5E515B", // sectionColor *adobe
  700: "#370a42", // darkAccent_2
  800: "#433A47", // sidebarBackground, darkAccent_3 * adobe
  850: "#26231a", // darkText
  // 900: "#383640", // background *adobe
  900: "#2D2B38", // background *adobe
  999: "#121114", // newDarkText
};

const theme = extendTheme({
  colors: {
    CovertCandyScheme,
    mainText: CovertCandyScheme[50],
    accent_2: CovertCandyScheme[200],
    tipBackground: CovertCandyScheme[250],
    accent_1: CovertCandyScheme[300],
    accent_3: CovertCandyScheme[400],
    darkAccent_1: CovertCandyScheme[500],
    sectionColor: CovertCandyScheme[600],
    darkAccent_2: CovertCandyScheme[700],
    sidebarBackground: CovertCandyScheme[800],
    darkText: CovertCandyScheme[850],
    background: CovertCandyScheme[900],
    linkColor: CovertCandyScheme[450],
    darkAccent_3: CovertCandyScheme[800],
    highlightExampleBackground: "gray.700",
    veryDark: CovertCandyScheme[999],
  },

  breakpoints: {
    base: "0em", // 0px
    sm: "37em", // ~600px
    md: "53em", // 848px
    lg: "75em", // 1200px
    xl: "80em", // 1280px
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

  components: {
    Tabs: {
      colorScheme: "red",
    },
  },
});

export default theme;

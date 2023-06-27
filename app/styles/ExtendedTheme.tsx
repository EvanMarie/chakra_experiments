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
  220: "#1FD4D5", // exampleBlue
  240: "#1FE098", // exampleGreen
  250: "#aa9ab5", // TipBackground
  300: "#FFA6AA", // accent_1, * adobe
  400: "#a7d5fa", // accent_3 * old accent 2
  425: "#7D3080", // examplePurple
  450: "#D667A4", // linkColor *
  475: "#B8264D", // exampleRed
  500: "#532291", // darkAccent_1
  600: "#5E515B", // sectionColor *adobe
  800: "#433A47", // sidebarBackground, darkAccent_3 * adobe
  850: "#26231a", // darkText
  900: "#2D2B38", // background *adobe
};

const theme = extendTheme({
  colors: {
    CovertCandyScheme,
    mainText: CovertCandyScheme[50],
    accent_2: CovertCandyScheme[200],
    exampleBlue: CovertCandyScheme[220],
    exampleGreen: CovertCandyScheme[240],
    tipBackground: CovertCandyScheme[250],
    accent_1: CovertCandyScheme[300],
    accent_3: CovertCandyScheme[400],
    examplePurple: CovertCandyScheme[425],
    exampleRed: CovertCandyScheme[475],
    darkAccent_1: CovertCandyScheme[500],
    sectionColor: CovertCandyScheme[600],
    sidebarBackground: CovertCandyScheme[800],
    darkText: CovertCandyScheme[850],
    background: CovertCandyScheme[900],
    linkColor: CovertCandyScheme[450],
    darkAccent_3: CovertCandyScheme[800],
  },
  // mode: {
  //     dark: {
  //       // Define dark mode colors
  //       primary: "background",
  //       secondary: "#718096",
  //       background: "#1a202c",
  //       text: "mainText",
  //     },
  //   },

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

  a: {
    baseStyle: {
      color: "linkColor",
      _hover: {
        color: "accent_3",
        textDecoration: "none",
      },
    },
  },

  components: {
    Tabs: {
      colorScheme: "red",
    },
    Kbd: {
      baseStyle: {
        bg: "background",
        color: "accent_2",
        p: "0.1rem 0.4rem",
        marginX: "0.2rem",
      },
    },
    Code: {
      baseStyle: {
        bg: "sidebarBackground",
        color: "accent_2",
        paddingX: "0.2rem",
        marginY: "0.2rem",
        borderRadius: "0.2rem",
        fontSize: "0.8rem",
      },
    },
    Table: {
      baseStyle: {
        container: {
          magin: 0,
        },
        table: {
          margin: 0,
          borderRadius: "lg",
          overflow: "auto",
          maxWidth: {
            base: "325px",
            sm: "450px",
            md: "600px",
            lg: "700px",
            xl: "900px",
          },
          th: {
            bg: "tipBackground",
            whiteSpace: "pre-wrap",
            color: "background",
            fontSize: {
              xs: "10px",
              sm: "0.75rem", // 14px
              md: "1rem", // 16px
              lg: "1.125rem", // 18px
              xl: "1.25rem", // 20px
            },
          },
          tr: {
            bg: "mainText",
            color: "background",
            whiteSpace: "pre-wrap",
          },
          td: {
            bg: "mainText",
            paddingX: "0.5rem",
            paddingY: "0.5rem",
            color: "background",
            whiteSpace: "pre-wrap",
            fontSize: {
              base: "12px",
              sm: "0.75rem", // 14px
              md: "1rem", // 16px
              lg: "1rem", // 18px
              xl: "1rem", // 20px
            },
          },
          caption: {
            color: "mainText",
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: "linkColor",
        _hover: {
          color: "accent_3",
          textDecoration: "none",
        },
      },
    },
    BreadcrumbLink: {
      baseStyle: {
        color: "linkColor",
        _hover: {
          color: "accent_3",
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;

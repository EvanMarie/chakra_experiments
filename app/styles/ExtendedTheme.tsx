import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
  withDefaultProps,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";

export const transparentBackground = "rgba(45, 43, 56, 0.93)";
export const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

/* ********************************* BUTTON ************************************ */

export const ButtonBackground = "accent_2";
export const ButtonHoverBG = "accent_1";

const myButtonStyles = defineStyle({
  bg: ButtonBackground,
  color: "background",
  border: "2px solid",
  borderColor: "darText",
  _hover: {
    bg: ButtonHoverBG,
    color: "background",
    transition: "all 0.4s ease-in-out",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { myButtonStyles },
  defaultProps: {
    size: "md",
    variant: "myButtonStyles",
  },
});

/* ********************************* RANGE SLIDER ************************************ */

const rangeSliderStyles = {
  filledTrack: {
    bg: "mainText",
  },
  thumb: {
    bg: "mainText",
  },
  track: {
    bg: "mainText",
  },
};

/* ********************************* TEXTAREA ************************************ */

export const textareaStyles = {
  field: {
    w: "100%",
    maxWidth: "500px",
    bg: "mainText",
    color: "background",
    border: "2px solid",
    borderColor: "tipBackground",
    borderRadius: "lg",
    _hover: {
      bg: "mainText",
      color: "background",
    },
    focusBorderColor: "accent_2",
    _focus: {
      field: {
        bg: "mainText",
        color: "background",
        borderColor: "accent_2",
        focusBorderColor: "accent_2",
      },
    },
    _placeholder: {
      color: "background",
      opacity: 0.7,
    },
  },
};

/* ********************************* FIELDS ************************************ */

const formVariants = {
  field: {
    bg: "mainText",
    color: "background",
    borderRadius: "lg",
    _hover: {
      bg: "mainText",
      color: "background",
    },
    _placeholder: {
      color: "background",
      opacity: 0.7,
    },
    _focus: {
      bg: "mainText",
      color: "background",
      borderColor: "accent_2",
      focusBorderColor: "accent_2",
    },
    errorBorderColor: "accent_1",
  },
  addon: {
    bg: "tipBackground",
    color: "background",
  },
  icon: {
    color: "background",
    size: "xl",
  },
};

const defaultStyles = {
  baseStyle: {
    bg: "mainText",
    color: "background",
  },
  variants: {
    outline: formVariants,
    filled: formVariants,
    flushed: formVariants,
    unstyled: formVariants,
  },
  iconColor: "background",
};

/* ********************************* COLORS ************************************ */

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
  800: "rgba(67, 58, 71, 0.8)", // sidebarBackground, darkAccent_3 * adobe
  850: "#26231a", // darkText
  900: "#2D2B38", // background *adobe
};

/* ********************************* THEME ************************************ */

const theme = extendTheme(
  {
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
  },
  withDefaultColorScheme({
    colorScheme: "cyan",
  }),
  withDefaultVariant({
    variant: "filled",
    components: [
      "Input",
      "Select",
      "Textarea",
      "Checkbox",
      "Radio",
      "PinInput",
      "NumberInput",
      "RangeSlider",
      "Tag",
    ],
  }),
  withDefaultProps({
    defaultProps: {
      bg: "mainText",
      color: "background",
    },

    components: [
      "Button",
      "Tag",
      "Input",
      "Select",
      "Textarea",
      "Checkbox",
      "Radio",
      "PinInput",
      "NumberInput",
      "RangeSlider",
    ],
  }),

  {
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
            margin: 0,
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
      Textarea: textareaStyles,
      RangeSlider: rangeSliderStyles,
      Button: buttonTheme,
      Input: defaultStyles,
      NumberInput: defaultStyles,
      PinInputField: defaultStyles,
      PinInput: defaultStyles,
      Select: defaultStyles,
      Checkbox: defaultStyles,
      Radio: defaultStyles,
      Tab: defaultStyles,
      Switch: defaultStyles,
      Slider: defaultStyles,
      Progress: defaultStyles,
      // Skeleton: defaultStyles,
      // Spinner: defaultStyles,
      // LinkBox: defaultStyles,
      // LinkOverlay: defaultStyles,
      // Menu: defaultStyles,
      // MenuItem: defaultStyles,
      // MenuButton: defaultStyles,
      // MenuList: defaultStyles,
      // MenuGroup: defaultStyles,
      // MenuCommand: defaultStyles,
      // MenuOptionGroup: defaultStyles,
      // MenuIcon: defaultStyles,
      // Modal: defaultStyles,
      // ModalOverlay: defaultStyles,
      // ModalContent: defaultStyles,
      // ModalHeader: defaultStyles,
      // ModalFooter: defaultStyles,
      // ModalBody: defaultStyles,
    },
  }
);

export default theme;

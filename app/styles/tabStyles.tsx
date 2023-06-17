import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tabpanel: {
    fontFamily: "mono", // change the font family
  },
});

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle });

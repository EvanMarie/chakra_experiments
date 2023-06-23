import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { useIsCurrentNavRoute } from "./navigation";

const fontSizeMain = "xl";
const fontSizeSub = "lg";

const AccordionLink = chakra("span", {
  baseStyle: {
    flex: "1",
    textAlign: "left",
    w: "100%",
  },
});

// Scoot text to right
const navHover = {
  _hover: {
    fontWeight: "bold", // Original
    transform: "translateX(5px)",
    color: "accent_2",
    transition:
      "transform 0.6s ease-in-out, bold 0.6s ease-in-out, color 0.3s ease-in-out",

    // fontWeight: "bold",
    // boxShadow: "0px 0px 10px 0px cyan", // glow from under, kinda weird
    // transform: "translateY(-3px)",
    // transition: "transform 0.3s, box-shadow 0.3s",

    // backgroundImage: "linear-gradient(to top, accent_1, transparent)", // Glows
    // transition: "background-image 0.6s",

    // fontWeight: "bold",                   // Weird border animation
    // borderColor: "cyan",
    // borderWidth: "4px",
    // borderImage: "linear-gradient(to top, cyan, transparent) 1",
    // borderImageSlice: "1",
    // transition: "border-color 0.3s, border-width 0.3s",
    // color: "cyan",

    // fontWeight: "bold", // Weird slow burn animation
    // color: "cyan",
    // boxShadow: "0px 0px 5px 2px cyan",
    // transition: "color 0.9s, box-shadow 0.9s",
  },
};

interface AccordionMainProps {
  link: string;
  label: string;
  hasIcon?: boolean;
}

const currentRouteStyle = {
  fontWeight: "bold",
  background: "accent_2",
  color: "background",
  ...navHover,
  _hover: {
    color: "linkColor",
  },
};

const notCurrentRouteStyle = {
  fontWeight: "normal",
  background: "sidebarBackground",
  color: "linkColor",
  ...navHover,
};

export const AccordionMain = ({
  link,
  label,
  hasIcon = true,
}: AccordionMainProps) => {
  const isCurrentRoute = useIsCurrentNavRoute(link);

  return (
    <Box
      paddingY={1}
      paddingLeft={1}
      bg={isCurrentRoute ? "accent_2" : "sidebarBackground"}
    >
      <AccordionButton
        {...navHover}
        color={isCurrentRoute ? "background" : "linkColor"}
        fontWeight={isCurrentRoute ? "bold" : "normal"}
      >
        <HStack w="100%" justifyContent={"space-between"}>
          <Link to={link}>
            <AccordionLink
              fontSize={fontSizeMain}
              {...navHover}
              {...(isCurrentRoute ? currentRouteStyle : notCurrentRouteStyle)}
            >
              {label}
            </AccordionLink>
          </Link>
          <AccordionIcon
            boxSize={6}
            color={isCurrentRoute ? "background" : "accent_2"}
          />
        </HStack>
      </AccordionButton>
    </Box>
  );
};

/* ************************************************************************************* */

interface AccordionSubProps {
  link: string;
  label: string;
  fontSize?: string;
}

export const AccordionSub = ({ link, label }: AccordionSubProps) => {
  const isCurrentRoute = useIsCurrentNavRoute(link);
  return (
    <Link to={link}>
      <AccordionPanel
        {...navHover}
        paddingY={1}
        {...(isCurrentRoute ? currentRouteStyle : notCurrentRouteStyle)}
      >
        <AccordionLink paddingLeft={5} w="100%" fontSize={fontSizeSub}>
          {label}
        </AccordionLink>
      </AccordionPanel>
    </Link>
  );
};

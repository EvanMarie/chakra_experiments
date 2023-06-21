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
    fontWeight: "bold",
    transform: "translateX(10px)",
    transition: "transform 0.3s ease-in-out",
    color: "cyan",
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

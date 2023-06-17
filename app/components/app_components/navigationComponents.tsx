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
  },
};

interface AccordionMainProps {
  link: string;
  label: string;
  hasIcon?: boolean;
}

export const AccordionMain = ({
  link,
  label,
  hasIcon = true,
}: AccordionMainProps) => {
  const isCurrentRoute = useIsCurrentNavRoute(link);

  return (
    <Box
      {...navHover}
      color={isCurrentRoute ? "background" : "linkColor"}
      bg={isCurrentRoute ? "accent_2" : "sidebarBackground"}
      paddingY={1}
      paddingLeft={1}
    >
      <AccordionButton>
        <HStack w="100%" justifyContent={"space-between"}>
          <Link to={link}>
            <AccordionLink
              fontSize={fontSizeMain}
              fontWeight={isCurrentRoute ? "bold" : "normal"}
            >
              {label}
            </AccordionLink>
          </Link>
          <AccordionIcon boxSize={4} color={"accent_2"} />
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
        color={isCurrentRoute ? "background" : "linkColor"}
        bg={isCurrentRoute ? "accent_2" : "sidebarBackground"}
        fontWeight={isCurrentRoute ? "bold" : "normal"}
      >
        <AccordionLink paddingLeft={5} w="100%" fontSize={fontSizeSub}>
          {label}
        </AccordionLink>
      </AccordionPanel>
    </Link>
  );
};

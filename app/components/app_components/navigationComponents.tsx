import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { colors } from "~/styles/DesignComponents";
import { Link } from "@remix-run/react";
import { useIsCurrentNavRoute } from "./navigation";

const fontSizeMain = "20px";
const fontSizeSub = "16px";

const AccordionLink = chakra("span", {
  baseStyle: {
    flex: "1",
    textAlign: "left",
    w: "100%",
  },
});

// Scoot text to right
const navHoverMain = {
  _hover: {
    transform: "translateX(12px)",
    transition: "transform 0.2s ease-in-out",
    color: "accent_2",
  },
};

const navHoverMini = {
  _hover: {
    transform: "translateX(10px)",
    transition: "transform 0.2s ease-in-out",
    color: "accent_2",
  },
};

interface AccordionMainProps {
  link: string;
  label: string;
  hasIcon?: boolean;
  fontSize?: string;
}

export const AccordionMain = ({
  link,
  label,
  hasIcon = true,
  fontSize = fontSizeMain,
}: AccordionMainProps) => {
  const isCurrentRoute = useIsCurrentNavRoute(link);
  return (
    <Box color="linkColor" {...navHoverMain} paddingLeft={1}>
    <AccordionButton>
      <HStack w="100%" justifyContent={"space-between"}>
        <Link to={link} {...navHoverMain}>
            <AccordionLink fontSize={fontSize}>{label}</AccordionLink>
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
        color="linkColor"
        {...navHoverMini}
        pb={0}
        bg={isCurrentRoute ? "background" : "sidebarBackground"}
      >
        <AccordionLink paddingLeft={5} w="100%" fontSize={fontSizeSub}>
          {label}
        </AccordionLink>
      </AccordionPanel>
    </Link>
  );
};

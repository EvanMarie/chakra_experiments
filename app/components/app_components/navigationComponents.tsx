import { AddIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  //Link,
} from "@chakra-ui/react";
import { colors } from "~/styles/reusableChakraComponents";
import { Link } from "@remix-run/react";

const fontSizeMain = "18px";
const fontSizeSub = "15px";

// Scoot text to right
const navHoverMain = {
  _hover: {
    transform: "translateX(12px)",
    transition: "transform 0.2s ease-in-out",
  },
};

const navHoverMini = {
  _hover: {
    transform: "translateX(10px)",
    transition: "transform 0.2s ease-in-out",
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
  if (hasIcon) {
    return (
      <Box {...navHoverMain}>
        <AccordionButton>
          <HStack w="100%" justifyContent={"space-between"}>
            <Link  to={link} {...navHoverMain}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                marginRight={10}
                fontSize={fontSize}
              >
                {label}
              </Box>
            </Link>
            <AccordionIcon boxSize={4} color={colors.mainAccent2} />
          </HStack>
        </AccordionButton>
      </Box>
    );
  } else {
    return (
      <Box fontSize={fontSizeMain} {...navHoverMain}>
        <AccordionItem>
          <AccordionButton>
            <Link  to={link} {...navHoverMain}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                marginRight={10}
                w="100%"
                fontSize={fontSize}
              >
                {label}
              </Box>
            </Link>
          </AccordionButton>
        </AccordionItem>
      </Box>
    );
  }
};

/* ************************************************************************************* */

interface AccordionSubProps {
  link: string;
  label: string;
}

export const AccordionSub = ({ link, label }: AccordionSubProps) => {
  return (
    <Box {...navHoverMini}>
      <AccordionPanel pb={2}>
        <Link to={link} {...navHoverMini}>
          <Box w="100%" fontSize={fontSizeSub}>
            {label}
          </Box>
        </Link>
      </AccordionPanel>
    </Box>
  );
};

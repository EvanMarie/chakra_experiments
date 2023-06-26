import { Highlighter } from "~/components/styling/highlighter";
import { MyFlex } from "./MainDesignComponents";
import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";

import javascript from "highlight.js/lib/languages/javascript";
import { DiCode } from "react-icons/di";
import { ButtonHoverBG, ButtonStyles } from "./DesignComponents";
hljs.registerLanguage("javascript", javascript);

/* ******************************EXPANDABLE******************************* */

interface ModalCodeProps {
  children?: React.ReactNode;
  style?: object;
}

export const ModalCode = ({ children }: ModalCodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(true);
  };

  const handleCloseModal = () => {
    setIsExpanded(false);
  };

  const ViewCodeButtonStyles = {
    bg: "darkAccent_3",
    color: "accent_3",
    fontSize: "12px",
    lineHeight: "0.5",
    border: "2px solid",
    borderColor: "darText",
    padding: "0px 0px",
    paddingRight: "6px",
    borderRadius: "0.25rem",
    cursor: "pointer",
    _hover: {
      bg: ButtonHoverBG,
      color: "background",
      transition: "all 0.4s ease-in-out",
      border: "2px solid",
    },
  };

  return (
    <>
      <MyFlex p={0}>
        <Box
          {...ViewCodeButtonStyles}
          onClick={handleExpandClick}
          display="flex"
          alignItems="center"
        >
          <HStack m={0} p={0} spacing={0}>
            <DiCode size={23} style={{ verticalAlign: "middle" }} />
            <p style={{ margin: 0, verticalAlign: "middle", lineHeight: "1" }}>
              Code
            </p>
          </HStack>
        </Box>
      </MyFlex>
      <Portal>
        <Modal
          allowPinchZoom={true}
          isOpen={isExpanded}
          onClose={handleCloseModal}
          size="2xl"
        >
          <ModalOverlay
            bg="rgba(0,0,0,0.5)"
            backdropFilter="blur(3px) hue-rotate(23deg)"
          />
          <ModalContent bg="tipBackground">
            <ModalHeader bg="background" color="accent_1">
              Example in Code:
            </ModalHeader>
            <ModalCloseButton top={1} insetEnd={1} color="accent_1" />
            <ModalBody>
              <Box p={3}>{children}</Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Portal>
    </>
  );
};

/* ******************************MINI CODE******************************* */

interface MiniCodeProps {
  children?: React.ReactNode;
  style?: object;
  [key: string]: any;
}

const MiniCodeStyle = { maxWidth: "375px", padding: "6px 8px" };

export function MiniCode({ style = MiniCodeStyle, children }: MiniCodeProps) {
  return <Highlighter style={style}>{children}</Highlighter>;
}

/* ******************************CODE BLOCK******************************* */

export function CBlock({ children }: MiniCodeProps) {
  return (
    <VStack alignItems="left" spacing={0}>
      {children}
    </VStack>
  );
}

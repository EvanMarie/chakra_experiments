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
  ModalOverlay,
  Portal,
  Text,
} from "@chakra-ui/react";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";

import javascript from "highlight.js/lib/languages/javascript";
import { DiCode } from "react-icons/di";
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
      bg: "accent_3",
      color: "darkAccent_3",
      transition: "all 0.3s ease-in-out",
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
              View Code
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
          colorScheme="teal"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
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

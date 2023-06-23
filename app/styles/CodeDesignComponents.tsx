import { Highlighter } from "~/components/styling/highlighter";
import { MyFlex } from "./MainDesignComponents";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Portal,
} from "@chakra-ui/react";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";

import javascript from "highlight.js/lib/languages/javascript";
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

  return (
    <>
      <MyFlex p={0}>
        <Button
          size="sm"
          fontSize="sm"
          paddingX={2}
          onClick={handleExpandClick}
          bg="darkAccent_3"
          color="linkColor"
          _hover={{ bg: "sectionColor" }}
        >
          View Code
        </Button>
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

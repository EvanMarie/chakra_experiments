import {
  Box,
  Button,
  Code,
  Modal,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";

export function PortalFunctionOne() {
  return (
    <SingleExample bg="background">
      <Box bg="accent_2" color="background" p={2} borderRadius="md">
        The portaled text inside will not show up here.
        <Portal>This text is portaled at the end of document.body!</Portal>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function PortalFunctionTwo() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box bg="accent_1" color="background" p={3} borderRadius="md">
      Parent of the Portal.
      <Portal containerRef={ref}>
        This text is portaled to the blue box from the Parent by the clever use
        of <Code>{`<Portal>`}</Code>!
      </Portal>
      <Box
        p={3}
        borderRadius="md"
        ref={ref as React.RefObject<HTMLDivElement>}
        bg="accent_2"
      >
        <div>Container to which the Portal is portaled!</div>
      </Box>
    </Box>
  );
}

/* ********************************************************************** */

export function PortalFunctionThree() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <SingleExample bg="background">
      {" "}
      <div>
        <Portal containerRef={ref}>
          <Box bg="accent_1" color="background" p={3} borderRadius="md">
            The first portal, Parent.
            <Portal>Nested child portal</Portal>
          </Box>
        </Portal>
        <Box
          bg="accent_2"
          color="background"
          p={3}
          borderRadius="md"
          ref={ref}
        />
      </div>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function PortalFunctionFour() {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <SingleExample bg="background">
      <div>
        <Portal containerRef={ref}>
          <Box bg="accent_2" color="background" p={3} borderRadius="md">
            Parent Portal with child Portal set to render to{" "}
            <Code>document.body</Code>
            <Portal appendToParentPortal={false}>
              Child, which will render to document.body
            </Portal>
          </Box>
        </Portal>
        <div style={{ background: "accent_1" }} ref={ref} />
      </div>
    </SingleExample>
  );
}

/* ********************************************************************** */

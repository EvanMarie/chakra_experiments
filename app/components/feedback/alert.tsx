import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Mono } from "~/styles/DesignComponents";
import CloseButtonAlert from "./closeButtonAlert";
import * as Feedback from "~/mardownExamples/feedback/index";
import {
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { Highlighter } from "../styling/highlighter";
import { FaRegLaughBeam } from "react-icons/fa";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

export function AlertOne() {
  return (
    <Box marginTop="10px">
      <SectionHeading>General Usage</SectionHeading>
      <SectionDescription>
        ⦾ The alert below uses <Mono>Alert</Mono>, <Mono>AlertIcon</Mono>,{" "}
        <Mono>AlertTitle</Mono>, and <Mono>AlertDescription</Mono>. In{" "}
        <Mono>Alert</Mono>, the status is set to "error". And the rest is simple
        text input.
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <Alert status="error">
            <VStack w="100%" justifyContent="center">
              <Flex justifyContent="center">
                {" "}
                <HStack w="100%">
                  <AlertIcon />
                  <AlertTitle color="black">
                    This is a very important Warning!
                  </AlertTitle>
                </HStack>
              </Flex>

              <AlertDescription color="black">
                Be on edge immediately!
              </AlertDescription>
            </VStack>
          </Alert>
        </Box>
      </Box>
      <ModalCode>
        <Feedback.E01 />
      </ModalCode>
    </Box>
  );
}

export function AlertTwo() {
  return (
    <Box marginTop="10px">
      <SectionHeading>Status</SectionHeading>
      <SectionDescription>
        ⦾ You can modify the status of the alerts by supplying a{" "}
        <Mono>status</Mono> prop. This adjustment will influence the color
        scheme and the icon utilized. The Alert supports statuses such as{" "}
        <Mono>error</Mono>, <Mono>success</Mono>, <Mono>warning</Mono>, and
        info. The following examples employ only the <Mono>Alert</Mono> and{" "}
        <Mono>AlertIcon</Mono> components.
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <Stack spacing={3}>
            <Alert status="error" color="black">
              <AlertIcon />
              This is a status "error" alert. You done messed up.
            </Alert>
            <ModalCode>
              <Highlighter>{`<Alert status="error" color="black">
  <AlertIcon />
  This is a status "error" alert. You done messed up.
</Alert>`}</Highlighter>
            </ModalCode>
            <Alert status="success" color="black">
              <AlertIcon />
              This is a status "success" alert. You are a golden god.
            </Alert>{" "}
            <ModalCode>
              <Highlighter>{`<Alert status="success" color="black">
  <AlertIcon />
  This is a status "success" alert. You are a golden god.
</Alert>`}</Highlighter>
            </ModalCode>
            <Alert status="warning" color="black">
              <AlertIcon />
              This is a status "warning" alert. Oh no, something might happen.
            </Alert>
            <ModalCode>
              <Highlighter>{`<Alert status="warning" color="black">
  <AlertIcon />
  This is a status "warning" alert. Oh no, something might happen.
</Alert>`}</Highlighter>
            </ModalCode>
            <Alert status="info" color="black">
              <AlertIcon />
              This is an status "info" alert. You should always be informed.
            </Alert>
            <ModalCode>
              <Highlighter>{`<Alert status="info" color="black">
  <AlertIcon />
  This is an status "info" alert. You should always be informed.
</Alert>`}</Highlighter>
            </ModalCode>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export function AlertThree() {
  return (
    <Box marginTop="10px">
      <SectionHeading>Variants</SectionHeading>
      <SectionDescription>
        ⦾ Alert has 4 variant styles you can use. Pass the variant prop and use
        either <Mono>subtle</Mono>, <Mono>solid</Mono>, <Mono>left-accent</Mono>{" "}
        or <Mono>top-accent</Mono>.
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <Stack spacing={3}>
            <Alert status="success" variant="subtle" color="black">
              <AlertIcon />
              This is an alert with a "subtle" variant. You can barely tell.
            </Alert>
            <ModalCode>
              <Highlighter>{`<Alert status="success" variant="subtle" color="black">
  <AlertIcon />
  This is an alert with a "subtle" variant. You can barely tell.
</Alert>`}</Highlighter>
            </ModalCode>

            <Alert status="success" variant="solid" color="black">
              <AlertIcon />
              This is an alert with a "solid" variant. It's pretty solid.
            </Alert>
            <ModalCode>
              <Highlighter>{`<Alert status="success" variant="solid" color="black">
  <AlertIcon />
  This is an alert with a "solid" variant. It's pretty solid.
</Alert>`}</Highlighter>
            </ModalCode>

            <Alert status="success" variant="left-accent" color="black">
              <AlertIcon />
              This is an alert with a "left-accent" variant. See that little
              accent on the left?
            </Alert>
            <ModalCode>
              <Highlighter>{`<Alert status="success" variant="left-accent" color="black">
  <AlertIcon />
  This is an alert with a "left-accent" variant. See that little accent on the left?
</Alert>`}</Highlighter>
            </ModalCode>

            <Alert status="success" variant="top-accent" color="black">
              <AlertIcon />
              This is an alert with a "top-accent" variant. It's like it is
              wearing a hat!
            </Alert>
            <ModalCode>
              <Highlighter>{`<Alert status="success" variant="top-accent" color="black">
  <AlertIcon />
  This is an alert with a "top-accent" variant. It's like it is wearing a hat!
</Alert>`}</Highlighter>
            </ModalCode>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export function AlertFour() {
  return (
    <Box marginTop="10px">
      <SectionHeading>Composition</SectionHeading>
      <SectionDescription>
        ⦾ There are numerous layouts possible with <Mono>Alert</Mono>. The
        following alert has these properties:
      </SectionDescription>
      <Box p={5}>
        <Box marginY={1}>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            color="black"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              You did it!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for being a part of making this very exciting alert happen.
              I love alerting you to things!.
            </AlertDescription>
          </Alert>
        </Box>
      </Box>
    </Box>
  );
}

export function AlertFive() {
  return (
    <Box marginTop="10px">
      <SectionHeading>Adding a Close Button</SectionHeading>
      <SectionDescription>
        ⦾ The <Mono>Alert</Mono> component can also integrate other elements
        from Chakra. Here's an illustration of an alert thaCloseButton
        <Mono>CloseButton</Mono> component for straightforward closure
        functionality, along with text in the description that wraps:
      </SectionDescription>

      <Box p={5}>
        <Box h="75px">
          <CloseButtonAlert />
        </Box>
      </Box>
    </Box>
  );
}

interface MessageProps {
  status: "info" | "warning" | "success" | "error" | "loading";
  children: React.ReactNode;
}

export function Message({ status, children }: MessageProps) {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon as={FaRegLaughBeam} boxSize="40px" />
      <Box as="span" pt={2} fontSize="lg">
        {children}
      </Box>
    </Alert>
  );
}

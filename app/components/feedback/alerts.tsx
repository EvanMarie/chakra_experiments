import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BasicText,
  Mono,
  SectionDescription,
  SectionHeading,
  colors,
} from "~/styles/reusableChakraComponents";
import CloseButtonAlert from "./closeButtonAlert";

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
            <AlertIcon />
            <AlertTitle color="black">
              This is a very important Warning!
            </AlertTitle>
            <AlertDescription color="black">
              Be on edge immediately!
            </AlertDescription>
          </Alert>
        </Box>
      </Box>
    </Box>
  );
}

export function AlertTwo() {
  return (
    <Box marginTop="10px">
      <SectionHeading>Status</SectionHeading>
      <SectionDescription>
        ⦾ Change the status of the alerts by passing the status prop. This
        affects the color scheme and icon used. Alert supports{" "}
        <Mono>error</Mono>, <Mono>success</Mono>, <Mono>warning</Mono>, and{" "}
        <Mono>info</Mono> statuses. The following use only the{" "}
        <Mono>Alert</Mono> and <Mono>AlertIcon</Mono> components.
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <Stack spacing={3}>
            <Alert status="error" color="black">
              <AlertIcon />
              This is a status "error" alert. You done messed up.
            </Alert>

            <Alert status="success" color="black">
              <AlertIcon />
              This is a status "success" alert. You are a golden god.
            </Alert>

            <Alert status="warning" color="black">
              <AlertIcon />
              This is a status "warning" alert. Oh no, something might happen.
            </Alert>

            <Alert status="info" color="black">
              <AlertIcon />
              This is an status "info" alert. You should always be informed.
            </Alert>
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

            <Alert status="success" variant="solid" color="black">
              <AlertIcon />
              This is an alert with a "solid" variant. It's pretty solid.
            </Alert>

            <Alert status="success" variant="left-accent" color="black">
              <AlertIcon />
              This is an alert with a "left-accent" variant. See that little
              accent on the left?
            </Alert>

            <Alert status="success" variant="top-accent" color="black">
              <AlertIcon />
              This is an alert with a "top-accent" variant. It's like it is
              wearing a hat!
            </Alert>
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
      <SectionHeading>Incorporating a Close Button</SectionHeading>
      <SectionDescription>
        ⦾ Alert can also incorporate other Chakra components. Here's an example
        of an alert with wrapping description text and the{" "}
        <Mono>CloseButton</Mono> component with simple close functionality:
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <CloseButtonAlert />
        </Box>
      </Box>
    </Box>
  );
}

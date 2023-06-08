import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Stack,
} from "@chakra-ui/react";
import { BasicText, Mono, colors } from "~/styles/reusableChakraComponents";

export function AlertOne() {
  return (
    <Box marginTop="40px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        General Usage
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The alert below uses <b>Alert</b>, <b>AlertIcon</b>, <b>AlertTitle</b>
        , and <b>AlertDescription</b>. In <b>Alert</b>, the status is set to
        "error". And the rest is simple text input.
      </BasicText>

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
    <Box marginTop="40px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Status
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Change the status of the alerts by passing the status prop. This
        affects the color scheme and icon used. Alert supports <b>error</b>,{" "}
        <b>success</b>,<b>warning</b>, and <b>info</b> statuses. The following
        use only the <b>Alert</b> and <b>AlertIcon</b> components.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Stack spacing={3}>
            <Alert status="error" color="black">
              <AlertIcon />
              This is an status <b>error</b> alert. You done messed up.
            </Alert>

            <Alert status="success" color="black">
              <AlertIcon />
              This is a status <b>success</b> alert. You are a golden god.
            </Alert>

            <Alert status="warning" color="black">
              <AlertIcon />
              This is a status <b>warning</b> alert. Oh no, something might
              happen.
            </Alert>

            <Alert status="info" color="black">
              <AlertIcon />
              This is an status <b>info</b> alert. You should always be
              informed.
            </Alert>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export function AlertThree() {
  return (
    <Box marginTop="40px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Title
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ Descirption</BasicText>

      <Box p={5}>
        <Box marginY={1}>Component</Box>
      </Box>
    </Box>
  );
}

export function AlertFour() {
  return (
    <Box marginTop="40px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Title
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ Descirption</BasicText>

      <Box p={5}>
        <Box marginY={1}>Component</Box>
      </Box>
    </Box>
  );
}

export function AlertFive() {
  return (
    <Box marginTop="40px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Title
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ Descirption</BasicText>

      <Box p={5}>
        <Box marginY={1}>Component</Box>
      </Box>
    </Box>
  );
}

export function AlertSix() {
  return (
    <Box marginTop="40px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Title
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ Descirption</BasicText>

      <Box p={5}>
        <Box marginY={1}>Component</Box>
      </Box>
    </Box>
  );
}

export function AlertSeven() {
  return (
    <Box marginTop="40px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Title
      </BasicText>
      <BasicText color={colors.mainAccent3}>⦾ Descirption</BasicText>

      <Box p={5}>
        <Box marginY={1}>Component</Box>
      </Box>
    </Box>
  );
}

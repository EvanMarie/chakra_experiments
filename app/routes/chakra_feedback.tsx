import {
  Box,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import { ComponentButtonBar } from "~/components/ButtonBar";
import {
  AlertFive,
  AlertFour,
  AlertOne,
  AlertSeven,
  AlertSix,
  AlertThree,
  AlertTwo,
} from "~/components/alerts";

import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BigBackgroundBox,
  MyButton,
  MyHeading,
  MyLabel,
  sectionMenuButtons,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <ComponentButtonBar />
      <MyHeading>Chakra Disclosure Components:</MyHeading>

      <HStack>
        <MyButton label="Alert" href="#alert" {...sectionMenuButtons} />
      </HStack>

      <div id="alert" />
      <MyLabel link="https://chakra-ui.com/docs/components/alert" size={28}>
        Alert:
      </MyLabel>
      <Box p={3}>
        <BasicText>
          <b>⦾ Alert</b>: The wrapper for alert components.{" "}
        </BasicText>
        <BasicText>
          <b>⦾ AlertIcon</b>: The visual icon for the alert that changes based
          on the status prop.{" "}
        </BasicText>
        <BasicText>
          <b>⦾ AlertTitle</b>: The title of the alert to be announced by screen
          readers.
        </BasicText>
        <BasicText>
          <b>⦾ AlertDescription</b>: The description of the alert to be
          announced by screen readers.
        </BasicText>
      </Box>

      <Box>
        <AlertOne />
        <AlertTwo />
        <AlertThree />
        <AlertFour />
        <AlertFive />
        <AlertSix />
        <AlertSeven />
      </Box>
    </BigBackgroundBox>
  );
}

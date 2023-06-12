import type { V2_MetaFunction } from "@remix-run/node";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyHeading,
  SectionContainer,
  SectionDescription,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  OverlayComponentBar,
  menuBarWidth,
} from "~/components/app_components/menuBars";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import {
  DisclosureComponentBar,
  FeedbackComponentBar,
  StyleMenuBar,
} from "~/components/app_components/menuBars";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Chakra UI Work" },
    {
      name: "description",
      content: "Mixing Chakra learning and Remix Learning!",
    },
  ];
};

export default function Index() {
  return (
    <BigBackgroundBox>
      <MyHeading color={colors.mainAccent2}>
        Explorations with Chakra-UI
      </MyHeading>
      <SectionContainer>
        <SectionDescription>
          Chakra UI is a popular, modern, and accessible component library for
          React that enables developers to quickly build high-quality,
          accessible user interfaces. Chakra UI uses a responsive, theme-based
          design system that allows for a great deal of customizability and
          flexibility.
        </SectionDescription>
      </SectionContainer>
      <SectionContainer>
        <BasicText>
          The examples shown here are taken from the Chakra examples in their
          documentation. These are my own personal explorations and experiments
          with the various possibilities that Chakra-UI offers as a means of
          getting to know Chakra better. With every example, you can find the
          link to the Chakra Documentation for the specific component or
          subject. I hope you are as impressed with the libary as I am!{" "}
        </BasicText>{" "}
        <BasicText color={colors.mainAccent2}>
          <b>Enjoy! And never stop learning!</b>
        </BasicText>
        <BasicText>
          <i>~ Evan Marie Carr</i>
        </BasicText>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

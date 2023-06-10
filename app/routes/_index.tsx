import type { V2_MetaFunction } from "@remix-run/node";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyHeading,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  OverlayComponentBar,
  menuBarWidth,
} from "~/components/app_components/menuBars";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { Flex, Link, VStack } from "@chakra-ui/react";
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
      <Flex justifyContent={"center"} alignItems={"center"}>
        <MyHeading color={colors.mainAccent2}>
          Explorations with Chakra-UI
        </MyHeading>
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"}>
        <FlexibleBox
          bg={colors.mainAccent3}
          p={3}
          borderRadius="sm"
          width={menuBarWidth}
        >
          <BasicText color="black" size={16}>
            The examples shown here are taken from the Chakra examples in their
            documentation. These are my own personal explorations with the
            various possibilities that Chakra-UI offers as a means of getting to
            know Chakra better. Below, you can find links to all the various
            components Chakra has to offer. I hope you are as impressed with the
            libary as I am!{" "}
          </BasicText>{" "}
          <BasicText color="black" size={16}>
            <b>Enjoy! And never stop learning!</b>
          </BasicText>
          <BasicText color="black" size={16}>
            <i>~ Evan Marie Carr</i>
          </BasicText>
        </FlexibleBox>
      </Flex>
      <VStack>
        <Flex>
          <Link href="/chakra_styling">
            <MyHeading size={20} mb={0.5} color="deeppink">
              Styling
            </MyHeading>
          </Link>
        </Flex>

        <StyleMenuBar />
        <Flex>
          <Link href="/chakra_disclosure">
            <MyHeading size={20} mb={0.5} color="deeppink">
              Disclosure Components
            </MyHeading>
          </Link>
        </Flex>
        <DisclosureComponentBar />
        <Flex>
          <Link href="/chakra_feedback">
            <MyHeading size={20} mb={0.5} color="deeppink">
              Feedback Components
            </MyHeading>
          </Link>
        </Flex>
        <FeedbackComponentBar />
        <Flex>
          <Link href="/chakra_overlay">
            <MyHeading size={20} mb={0.5} color="deeppink">
              Overlay Components
            </MyHeading>
          </Link>
        </Flex>
        <OverlayComponentBar />
      </VStack>
    </BigBackgroundBox>
  );
}

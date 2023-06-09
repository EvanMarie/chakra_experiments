import type { V2_MetaFunction } from "@remix-run/node";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  colors,
} from "~/styles/reusableChakraComponents";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { Flex, VStack } from "@chakra-ui/react";
import { FullButtonBar, StyleMenuBar } from "~/components/MenuBars";

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
      <VStack>
        <StyleMenuBar />
      </VStack>
      <FullButtonBar />
      <Flex justifyContent={"center"} alignItems={"center"}>
        <FlexibleBox
          bg={colors.mainAccent2}
          p={4}
          borderRadius="sm"
          width="80%"
        >
          <BasicText color="black" size={16}>
            The examples shown here are taken from the Chakra examples in their
            documentation. These are my explorations with the various
            possibilities that Chakra-UI offers, expressed in a way that
            communicates clearly to me. <b>Enjoy! And never stop learning!</b>
          </BasicText>
          <br />
          <BasicText color="black" size={16}>
            <i>~ Evan Marie Carr</i>
          </BasicText>
        </FlexibleBox>
      </Flex>
    </BigBackgroundBox>
  );
}

import type { V2_MetaFunction } from "@remix-run/node";
import {
  BigBackgroundBox,
  MyButton,
  colors,
} from "~/styles/reusableChakraComponents";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { Box } from "@chakra-ui/react";
import ButtonBar from "~/ButtonBar";

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
      <ButtonBar />
      {/* <Box
        bg={colors.secondaryBackground}
        w="100%"
        h="75px"
        borderRadius="sm"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
      ></Box> */}
    </BigBackgroundBox>
  );
}

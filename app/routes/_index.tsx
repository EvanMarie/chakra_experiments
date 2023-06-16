import type { V2_MetaFunction } from "@remix-run/node";
import { BasicText, MyDivider, MyHeading } from "~/styles/DesignComponents";

import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  BigBackgroundBox,
  DescriptionBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";
import { Box, HStack, Link, Text } from "@chakra-ui/react";

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
      <MyHeading color={"accent_2"}>Chakra-UI Explorations</MyHeading>
      <MyDivider mt={0} />
      <Box fontSize="18px">
        <SectionContainer p={5}>
          <SectionDescription>
            Chakra UI is a powerful, modern, and accessible React component
            library. Designed to assist developers in rapidly crafting
            top-notch, accessible user interfaces, Chakra UI leverages a
            responsive, theme-based design system that provides a considerable
            degree of customization and adaptability.
          </SectionDescription>
          <br />
          <BasicText>
            The examples showcased here are a mix of references from Chakra's
            comprehensive documentation and my own explorations. These serve as
            a testament to my ongoing journey of understanding the nuances of
            Chakra and Remix, enhancing my HTML and CSS prowess, and balancing
            multiple tasks simultaneously.
          </BasicText>
          <br />
          <BasicText>
            Each example includes a link to the detailed Chakra Documentation
            for the respective component or topic. I'm confident that you'll
            find the library as valuable and impressive as I have.{" "}
          </BasicText>{" "}
          <br />
          <BasicText color={"accent_2"}>
            <b>
              Enjoy the exploration, and remember: the learning journey never
              ends!
            </b>
          </BasicText>
          <BasicText>
            <i>~ Evan Marie Carr</i>
          </BasicText>
        </SectionContainer>
        <HStack
          spacing={8}
          p={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="accent_3"
          fontWeight="bold"
        >
          <Link href="https://chakra-ui.com/" target="_blank">
            Chakra-ui.com
          </Link>

          <Link href="https://remix.run/" target="_blank">
            Remix.run
          </Link>
        </HStack>
      </Box>
    </BigBackgroundBox>
  );
}

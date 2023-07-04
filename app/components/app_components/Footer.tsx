import {
  Code,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LinksFunction } from "@remix-run/node";
import { IHeartComponents, Mono } from "~/styles/DesignComponents";
import { MyFlex, linkStyle } from "~/styles/MainDesignComponents";
import stylesUrl from "~/styles/global.css";
import Logo from "./Logo";
import { FooterCrumbs } from "./breadCrumbs";
import { transparentBackground } from "~/styles/ExtendedTheme";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

const Footer = () => {
  return (
    <Flex
      w="100%"
      flex="1"
      color="mainText"
      marginRight={0}
      marginLeft={0}
      mt={0}
      mb={0}
      p={0}
      textAlign="center"
    >
      <VStack w="100%" justifyContent="center" spacing={0} sx={linkStyle}>
        <Flex mb={0} textAlign="center" paddingX={2}>
          <FooterCrumbs />
        </Flex>

        <MyFlex mb={0} textAlign="center" paddingX={2}>
          <HStack spacing={3} w="100%" justify="center">
            <Text m={0}>
              copyright © 2023{" "}
              <Link href="http://www.iheartcomponents.com" target="_blank">
                <IHeartComponents fontSize="12px">
                  IHeartComponents
                </IHeartComponents>
              </Link>{" "}
              |{" "}
              <Link href="https://evanmarie.com" target="_blank">
                <Code sx={linkStyle}>{`evanmarie.com`}</Code>
              </Link>
            </Text>
          </HStack>

          <Stack direction={["column", "row"]} spacing={0} w="100%">
            <Text m={0}>
              created with love by the <Logo /> team using
            </Text>{" "}
            <HStack w="100%" spacing={4} textAlign="center" justify="center">
              <Link
                color="linkColor"
                href="https://chakra-ui.com/"
                target="_blank"
              >
                Chakra-UI
              </Link>{" "}
              <Link color="linkColor" href="https://remix.run/" target="_blank">
                Remix
              </Link>
            </HStack>
          </Stack>
          <Text fontSize="sm">
            Special thanks to{" "}
            <Link
              color="linkColor"
              href="https://stefanbohacek.online/@stefan"
              target="_blank"
            >
              Stefan Bohacek /
            </Link>{" "}
            <Link
              color="linkColor"
              href="https://generative-placeholders.glitch.me/"
              target="_blank"
            >
              Generative Placeholders.
            </Link>
          </Text>
        </MyFlex>
      </VStack>
    </Flex>
  );
};

export default Footer;

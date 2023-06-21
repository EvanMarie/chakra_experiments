import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import { LinksFunction } from "@remix-run/node";
import { IHeartComponents, Mono } from "~/styles/DesignComponents";
import { MyFlex } from "~/styles/MainDesignComponents";
import stylesUrl from "~/styles/global.css";
import Logo from "./Logo";
import { FooterCrumbs } from "./breadCrumbs";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

const Footer = () => {
  return (
    <Flex
      w="100%"
      flex="1"
      bg="background"
      color="mainText"
      marginRight={0}
      marginLeft={0}
      mt={0}
      mb={1}
      p={0}
      textAlign="center"
    >
      <VStack w="100%" justifyContent="center" spacing={0}>
        <Flex mb={0} textAlign="center" paddingX={10}>
          <FooterCrumbs />
        </Flex>
        <MyFlex mb={0} textAlign="center" paddingX={10}>
          <Text m={0}>
            copyright © 2023{" "}
            <Link href="http://www.iheartcomponents.com" target="_blank">
              <IHeartComponents>IHeartComponents</IHeartComponents>
            </Link>
          </Text>
          <Text m={0}>
            created with love by the <Logo /> team using{" "}
            <Link
              color="linkColor"
              href="https://chakra-ui.com/"
              target="_blank"
            >
              Chakra-UI
            </Link>{" "}
            and{" "}
            <Link color="linkColor" href="https://remix.run/" target="_blank">
              Remix
            </Link>
          </Text>
        </MyFlex>
      </VStack>
    </Flex>
  );
};

export default Footer;

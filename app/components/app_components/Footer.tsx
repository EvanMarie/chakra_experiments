import { Link, Text } from "@chakra-ui/react";
import { LinksFunction } from "@remix-run/node";
import { Kode, Mono } from "~/styles/DesignComponents";
import { MyFlex } from "~/styles/MainDesignComponents";
import stylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

const Footer = () => {
  return (
    <MyFlex
      bg="background"
      color="mainText"
      mt={0}
      mb={2}
      p={0}
      textAlign="center"
    >
      <MyFlex mb={0} textAlign="center" paddingX={10}>
        <Text m={0}>
          copyright © 2023 <Kode>IHeartComponents</Kode>
        </Text>
        <Text m={0}>
          created with love by the <Kode>I♥️Components</Kode> team using{" "}
          <Link color="linkColor" href="https://chakra-ui.com/" target="_blank">
            Chakra-UI
          </Link>{" "}
          and{" "}
          <Link color="linkColor" href="https://remix.run/" target="_blank">
            Remix
          </Link>
        </Text>
      </MyFlex>
    </MyFlex>
  );
};

export default Footer;

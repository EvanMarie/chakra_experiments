import {
  Box,
  ChakraProvider,
  Flex,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import globalStylesUrl from "~/styles/global.css";
import theme from "./styles/ExtendedTheme";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MyFlex, SectionHeading } from "./styles/MainDesignComponents";
import MainNavigation from "./components/app_components/navigation";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "./components/app_components/breadCrumbs";
import NavMenu from "./components/app_components/navMenu";
import Footer from "./components/app_components/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "I♥️Components: Chakra UI" },
    {
      name: "description",
      content: "A deep-dive into Chakra-UI!",
    },
  ];
};

export default function App() {
  const [navIndex, setNavIndex] = useState<number | undefined>(undefined);
  const navMenuWidth = { base: "0px", md: "225px", lg: "275px" };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Flex
            width="100%"
            h="100%"
            overflowX="hidden"
            justifyContent="flex-start"
            alignItems="center"
            bg="background"
            direction="column"
            bgImage="url('/images/cyan_traingles.png')"
            bgPosition="center"
            position="fixed"
            // bgRepeat="repeat"
            padding={{ base: 1, md: 4 }}
          >
            <Flex
              bg="background"
              width="100%" //SPans the whole page
              maxWidth={{ base: "100%", lg: "1300px" }} // keeps it from getting too wide
              flexDirection="column" // separates nav from body
              borderRadius="lg" // trying to enclose footer too
              flex="1"
              justifyContent="flex-start"
              overflow-x="hidden"
            >
              <Flex
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow-x="hidden"
                bg="background"
                borderRadius="lg"
              >
                <Box
                  height="100%"
                  overflow-x="hidden"
                  display={["none", "none", "block"]}
                  pb={3}
                  bg="background"
                  paddingLeft={3}
                  paddingTop={2}
                  borderRadius="lg"
                >
                  <Box
                    mt={2}
                    // bg="darkAccent_3"
                    // height="100%"
                    // display={["none", "none", "block"]} // moved higher up
                    width={navMenuWidth}
                    borderRadius="md"
                    pb={3}
                  >
                    <VStack
                      spacing={1}
                      position="fixed"
                      // maxHeight="93vh"
                      height="93vh"
                      overflowY="scroll"
                      w={navMenuWidth}
                      bg="darkAccent_3"
                      borderRadius="md"
                      pb={3}
                    >
                      <MyFlex>
                        <SectionHeading mb={0}>
                          <Link href="https://chakra-ui.com/" target="_blank">
                            Chakra-UI
                          </Link>
                        </SectionHeading>
                      </MyFlex>

                      <MainNavigation
                        initialIndex={navIndex}
                        onChange={setNavIndex}
                      />
                    </VStack>
                  </Box>
                </Box>
                <Flex
                  flex="1"
                  justifyContent="flex-start"
                  alignItems="center"
                  direction="column"
                  overflow-x="hidden"
                  borderRadius="lg"
                >
                  <Flex
                    direction="column"
                    width="100%"
                    bg="background"
                    overflow="hidden"
                    paddingX={1}
                    maxWidth="100%"
                    justifyContent="center"
                    alignItems="center"
                    overflow-x="hidden"
                    borderRadius="lg"
                  >
                    <Flex w="100%" paddingX={5}>
                      <HStack justify="space-between">
                        <BreadCrumbs />
                        <Box position="fixed" top="13px" right="30px">
                          <NavMenu />
                        </Box>
                      </HStack>
                    </Flex>

                    <Outlet />
                  </Flex>
                  <Footer />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

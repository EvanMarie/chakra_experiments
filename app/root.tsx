import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  Grid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
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
import { colors } from "./styles/DesignComponents";
import { MyFlex, SectionHeading } from "./styles/MainDesignComponents";
import MainNavigation from "./components/app_components/navigation";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "./components/app_components/breadCrumbs";
import NavMenu from "./components/app_components/navMenu";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
];

export default function App() {
  const [navIndex, setNavIndex] = useState<number | undefined>(undefined);
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
            minH="100vh"
            overflow-x="hidden"
            justifyContent="flex-start"
            alignItems="flex-start"
            bg={colors.mainBackground}
            direction="column"
            flex="1"
          >
            <Flex
              width="100%"
              // maxWidth={["400px", "1600px"]}
              justifyContent="center"
              overflow-x="hidden"
            >
              <Flex
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow-x="hidden"
              >
                <Box height="100%" paddingBottom="13px" overflow-x="hidden">
                  <Box
                    bg={"darkAccent_3"}
                    display={["none", "none", "block"]}
                    height="100%"
                    width="210px"
                    overflowY="hidden"
                  >
                    <VStack height="100%" spacing={1}>
                      <MyFlex>
                        <SectionHeading mb={1}>Chakra-UI</SectionHeading>
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
                >
                  <Flex
                    direction="column"
                    width="100%"
                    bg={colors.mainBackground}
                    overflow="hidden"
                    paddingX={1}
                    maxWidth="100%"
                    justifyContent="center"
                    alignItems="center"
                    overflow-x="hidden"
                  >
                    <Flex w="100%" paddingX={5}>
                      <HStack justify="space-between">
                        <BreadCrumbs />
                        <Box position="fixed" top="7px" right="30px">
                          <NavMenu />
                        </Box>
                      </HStack>
                    </Flex>

                    <Outlet />
                  </Flex>
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

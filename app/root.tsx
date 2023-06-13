import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  Grid,
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
import { SectionHeading } from "./styles/MainDesignComponents";
import MainNavigation from "./components/app_components/navigation";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "./components/app_components/breadCrumbs";

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
            justifyContent="center"
            alignItems="center"
            bg={colors.mainBackground}
            direction="column"
          >
            <Flex width="100%" maxWidth="1500px" justifyContent="center">
              <Flex justifyContent="flex-start" alignItems="flex-start">
                {" "}
                {/* Changed this line */}
                <Box
                  bg={colors.myblue}
                  display={["none", "none", "block"]}
                  height="100%"
                  width="210px"
                  overflowY="hidden"
                >
                  <VStack height="100%" spacing={3} padding={3}>
                    <SectionHeading>Chakra-UI</SectionHeading>
                    <MainNavigation
                      initialIndex={navIndex}
                      onChange={setNavIndex}
                    />
                  </VStack>
                </Box>
                <Flex
                  flex="1"
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                >
                  <Flex
                    direction="column"
                    width="100%"
                    bg={colors.mainBackground}
                    overflow="hidden"
                    paddingX={2}
                    maxWidth="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BreadCrumbs />
                    <Outlet />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ChakraProvider>

        {/*  OLDER GRID VERSION that would never center the content
        
        <ChakraProvider theme={theme}>
          <Flex
            width="100%"
            minH="100vh"
            justifyContent={"center"}
            bg={colors.mainBackground}
          >
            <Flex width="100%" height="100%" overflowX="hidden">
              <Grid
                templateColumns={["1fr", "1fr", "210px 1px 1fr"]}
                gap={2}
                width="100%"
                height="100%"
              >
                <Box
                  bg={colors.myblue}
                  display={["none", "none", "block"]}
                  width="100%"
                  height="100%"
                  overflow="scroll"
                >
                  <VStack>
                    <Box paddingY={3}>
                      <SectionHeading>Chakra-UI</SectionHeading>
                    </Box>
                    <MainNavigation
                      initialIndex={navIndex}
                      onChange={setNavIndex}
                    />
                  </VStack>
                </Box>
                <Divider
                  orientation="vertical"
                  height="100%"
                  colorScheme="linkedin"
                />
                <Flex
                  bg={colors.mainBackground}
                  w="100%"
                  direction="column"
                  align="center"
                  overflow={"hidden"}
                  paddingX={2}
                >
                  <BreadCrumbs />
                  <Outlet />
                </Flex>
              </Grid>
            </Flex>
          </Flex>
        </ChakraProvider> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

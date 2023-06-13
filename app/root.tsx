import { Box, ChakraProvider, Flex, Grid } from "@chakra-ui/react";
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
import MainNavigation from "./components/app_components/navigation";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "./components/app_components/breadCrumbs";
import NavMenu from "./components/app_components/navMenu";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
];

export default function App() {
  const [ navIndex, setNavIndex ] = useState<number | undefined>(undefined);
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
            justifyContent="center"
            alignItems="center"
            bg={colors.mainBackground}
            direction="column"
          >
            <Flex width="100%" height="100%" maxWidth="1400px">
              <Grid
                templateColumns={["1fr", "1fr", "210px 1px 1fr"]}
                gap={2}
                width="100%"
                height="100%"
              >
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
            <Flex width="100%" height="100%" maxWidth="1400px">
              <Grid
                templateColumns={["1fr", "1fr", "250px 1fr"]}
                gap={1}
                width="100%"
              >
                {/* /* The display prop of the first Box component is set to ["none",
              "none", "block"]. This means that for the first two screen sizes,
              the Box component will not be displayed (none value for display).
              However, for the third screen size, it will be displayed as a
              block element (block value for display). */}
                <Box bg={colors.myblue} display={["none", "none", "block"]}>
                  <MainNavigation initialIndex={navIndex} onChange={setNavIndex}  />
                </Box>
                <Flex
                  bg={colors.mainBackground}
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <BreadCrumbs />
                  <NavMenu />
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

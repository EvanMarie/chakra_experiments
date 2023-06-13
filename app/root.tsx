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
import { colors } from "./styles/reusableChakraComponents";
import MainNavigation from "./components/app_components/navigation";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
];

export default function App() {
  const [ navIndex, setNavIndex ] = useState<number | undefined>(undefined);
  useEffect(() => {
    console.log("navIndex: ", navIndex);
  }, [navIndex]);

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
            justifyContent={"center"}
            bg={colors.mainBackground}
          >
            <Flex width="100%" maxWidth="1300px">
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
                  <Outlet />
                </Flex>
              </Grid>
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

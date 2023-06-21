import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "@remix-run/react";
import { navElements } from "~/components/app_components/navigation";
import type { NavElement } from "~/components/app_components/navigation";

import { getLabelForUrl } from "~/components/app_components/navigation";

import Logo from "./Logo";
const StyledBreadcrumbLink = chakra(BreadcrumbLink, {
  baseStyle: {
    color: "linkColor",
    _hover: {
      color: "accent_2",
    },
  },
});

const fontSizes = {
  base: "15px",
  sm: "16px",
  md: "16px",
  lg: "16px",
  xl: "16px",
};

export function BreadCrumbs() {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);
  const fontSize = useBreakpointValue(fontSizes);

  return (
    <Grid
      templateColumns={{ base: "auto", md: "auto 1fr" }}
      gap={0}
      mt={2}
      mb={0}
    >
      <GridItem w="150px">
        <Box>
          <Logo fontSize={fontSize} />
        </Box>
      </GridItem>

      {/* <Text color="white"> | </Text> */}

      <GridItem mt={0.5}>
        <Breadcrumb
          alignSelf="flex-start"
          spacing="5px"
          separator={<ChevronRightIcon color="gray.500" />}
          // fontSize="sm"
        >
          <BreadcrumbItem>
            <StyledBreadcrumbLink as={Link} to="/">
              Main
            </StyledBreadcrumbLink>
          </BreadcrumbItem>

          {path.map((link, index) => {
            const url = `/${path.slice(0, index + 1).join("/")}`;
            return (
              <BreadcrumbItem key={url}>
                <StyledBreadcrumbLink as={Link} to={url} fontSize={fontSize}>
                  {getLabelForUrl(url, navElements)}
                </StyledBreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </GridItem>
    </Grid>
  );
}

export function FooterCrumbs() {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);
  const fontSize = useBreakpointValue(fontSizes);

  return (
    <Breadcrumb
      alignSelf="flex-end"
      spacing="5px"
      separator={<ChevronRightIcon color="gray.500" />}
      // fontSize="sm"
    >
      <BreadcrumbItem>
        <StyledBreadcrumbLink as={Link} to="/">
          Main
        </StyledBreadcrumbLink>
      </BreadcrumbItem>

      {path.map((link, index) => {
        const url = `/${path.slice(0, index + 1).join("/")}`;
        return (
          <BreadcrumbItem key={url}>
            <StyledBreadcrumbLink as={Link} to={url} fontSize={fontSize}>
              {getLabelForUrl(url, navElements)}
            </StyledBreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

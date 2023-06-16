import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "@remix-run/react";
import { navElements } from "~/components/app_components/navigation";
import type { NavElement } from "~/components/app_components/navigation";

import { getLabelForUrl } from "~/components/app_components/navigation";

import { colors } from "~/styles/DesignComponents";
const StyledBreadcrumbLink = chakra(BreadcrumbLink, {
  baseStyle: {
    color: "linkColor",
    _hover: {
      color: "accent_2",
    },
  },
});

export function BreadCrumbs() {
  const location = useLocation();

  const path = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      // fontSize="sm"
      mt={2}
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
            <StyledBreadcrumbLink as={Link} to={url}>
              {getLabelForUrl(url, navElements)}
            </StyledBreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link, useLocation } from "@remix-run/react";

import { navElements } from "~/components/app_components/navigation";

import type { NavElement } from "~/components/app_components/navigation";

const getLabelforUrl = (
  url: string,
  navElements: NavElement[]
): string | null => {
  // search recursively through navElements for a link that matches url, and return the label
  for (const navElement of navElements) {
    if (navElement.link === url) {
      return navElement.label;
    } else if (navElement.subElements) {
      const label = getLabelforUrl(url, navElement.subElements);
      if (label) {
        return label;
      }
    }
  }
  return null;
};

export function BreadCrumbs() {
  const location = useLocation();

  const path = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      fontSize="sm"
      mb={8}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Main
        </BreadcrumbLink>
      </BreadcrumbItem>

      {path.map((link, index) => {
        const url = `/${path.slice(0, index + 1).join("/")}`;
        return (
          <BreadcrumbItem key={url}>
            <BreadcrumbLink as={Link} to={url}>
              {getLabelforUrl(url, navElements)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

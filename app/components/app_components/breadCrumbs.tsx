import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "@remix-run/react";
import { navElements } from "~/components/app_components/navigation";
import type { NavElement } from "~/components/app_components/navigation";
import { getNavElementForUrl, getLabelForUrl } from "~/components/app_components/navigation";


export function BreadCrumbs() {
  const location = useLocation();

  const path = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      fontSize="sm"
      mt={2}
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
              {getLabelForUrl(url, navElements)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

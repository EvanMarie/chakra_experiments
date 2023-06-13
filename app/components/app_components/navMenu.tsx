import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineHome } from "react-icons/ai";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Link,
  MenuItem,
} from "@chakra-ui/react";

import type { NavElement } from "~/components/app_components/navigation";
import { navElements } from "~/components/app_components/navigation";

import { Link as RemixLink, useLocation } from "@remix-run/react";

import { getNavElementForUrl } from "~/components/app_components/navigation";

export function makeNavMenu({ navElements }: { navElements: NavElement[] }) {
  // use a Chakra menu to render a dropdown menu for mobile.
  //
  return () => {
    const location = useLocation();
    const nav = getNavElementForUrl(location.pathname, navElements);
    let expand: string | undefined = undefined;
    if (nav) {
      expand = nav._parent?.label || nav.label;
    }
    const navItems: Array<NavElement & { subItem: boolean }> = [];
    navElements.map((navElement) => {
      navItems.push({ ...navElement, subItem: false });
      if (expand === navElement.label) {
        navElement.subElements?.map((subElement) => {
          navItems.push({ ...subElement, subItem: true });
        });
      }
    });

    return (
      <Menu>
        <MenuButton
          as={HamburgerIcon}
          w={10}
          h={10}
          borderRadius="full"
          _hover={{ bg: "blue.600" }}
        />
        <MenuList>
          <MenuItem as={RemixLink} to="/">
            <AiOutlineHome />
          </MenuItem>
          {navItems.map((navItem) => {
            return (
              <MenuItem
                transform={navItem.subItem ? "translateX(12px)" : ""}
                as={RemixLink}
                key={navItem.label}
                to={navItem.link}
              >
                {navItem.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  };
}

export default makeNavMenu({ navElements });

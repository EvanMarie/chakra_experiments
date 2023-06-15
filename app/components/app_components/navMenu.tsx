/* eslint-disable react/display-name */
import { ImMenu } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";

import type { NavElement } from "~/components/app_components/navigation";
import { navElements } from "~/components/app_components/navigation";

import { Link as RemixLink, useLocation } from "@remix-run/react";

import { getNavElementForUrl } from "~/components/app_components/navigation";
import { colors } from "~/styles/DesignComponents";

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

    const isSelected = (navElement: NavElement) =>
      nav && nav.label === navElement.label;

    const selectedStyles = {
      bg: "accent_3",
      color: colors.mainBackground,
      _hover: {
        color: "linkColor",
      },
    };

    const unselectedStyles = {
      bg: "darkAccent_3",
      color: "linkColor",
    };

    const isMediumScreen = useBreakpointValue({
      base: true,
      small: true,
      md: false,
    });

    if (!isMediumScreen) {
      return null; // Do not render the button on larger screens
    }

    return (
      <Menu>
        <MenuButton color={"linkColor"} _hover={{ color: "accent_2" }}>
          <ImMenu size={30} />
        </MenuButton>
        <MenuList bg={"darkAccent_3"} overflow="hidden">
          <MenuItem as={RemixLink} to="/" w="210px" bg={"darkAccent_3"}>
            <AiOutlineHome size={30} color={colors.linkColor} />
          </MenuItem>
          {navItems.map((navItem) => {
            return (
              <MenuItem
                transform={navItem.subItem ? "translateX(18px)" : ""}
                as={RemixLink}
                key={navItem.label}
                to={navItem.link}
                {...(isSelected(navItem) ? selectedStyles : unselectedStyles)}
                h="20px"
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

/* eslint-disable react/display-name */
import { ImMenu } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  HStack,
  IconButton,
  Button,
} from "@chakra-ui/react";

import type { NavElement } from "~/components/app_components/navigation";
import { navElements } from "~/components/app_components/navigation";

import { Link as RemixLink, useLocation } from "@remix-run/react";

import { getNavElementForUrl } from "~/components/app_components/navigation";
import { colors } from "~/styles/DesignComponents";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { StyledHomeIcon } from "~/components/app_components/navigation";

export function makeNavMenu({ navElements }: { navElements: NavElement[] }) {
  
  // use a Chakra menu to render a dropdown menu for mobile.
  //
  return () => {
    const [shouldExpand, setShouldExpand] = useState<string | undefined>("");
    const [shouldHide, setShouldHide] = useState<string | undefined>("");
    const [menuOpen, setMenuOpen] = useState(false);


    const location = useLocation();
    const nav = getNavElementForUrl(location.pathname, navElements) as NavElement;
    console.log(location.pathname);
    console.log(navElements);
    const expand = nav ? nav._parent?.label || nav.label : "";

    const [navItems, setNavItems] = useState<Array<
      NavElement & { subItem: boolean; expanded?: boolean }>>([]);

    useEffect(() => {
      console.log("shouldHide ", shouldHide);
      console.log("shouldExpand ", shouldExpand);
      console.log("expand ", expand);

      const _newNavItems: Array<
        NavElement & { subItem: boolean; expanded?: boolean }> = [];

      navElements.map((navElement) => {
        _newNavItems.push({ ...navElement, subItem: false, expanded: false });
        if (
          (expand === navElement.label || shouldExpand === navElement.label) &&
          shouldHide !== navElement.label && navElement.subElements
        ) {
          _newNavItems[_newNavItems.length - 1].expanded = true;
          navElement.subElements?.map((subElement) => {
            _newNavItems.push({ ...subElement, subItem: true });
          });
        }
      });
      setNavItems(_newNavItems);
    }, [navElements, location, shouldHide, shouldExpand]);

    const isSelected = (navElement: NavElement) =>
      nav && nav.label === navElement.label;

    const selectedStyles = {
      bg: "accent_3",
      fontSize: "lg",
      color: "background",
      fontWeight: "bold",
      _hover: {
        color: "linkColor",
      },
    };

    const unselectedStyles = {
      bg: "darkAccent_3",
      fontSize: " lg",
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
      <Menu isOpen={menuOpen}>
        <MenuButton color={"linkColor"} _hover={{ color: "accent_2" }} onClick={()=>setMenuOpen(!menuOpen)}>
          <ImMenu size={30} />
        </MenuButton>
        <MenuList bg={"darkAccent_3"} overflow="hidden">
          <MenuItem as={RemixLink} to="/" w="210px" bg={"darkAccent_3"}>
            <StyledHomeIcon size={30} />
          </MenuItem>
          {navItems.map((navItem) => {
            return (
              <MenuItem
                transform={navItem.subItem ? "translateX(18px)" : ""}
                key={navItem.label}
                {...(isSelected(navItem) ? selectedStyles : unselectedStyles)}
                h="30px"
              >
                <HStack width={"100%"} justifyContent={"space-between"}>
                  <RemixLink to={navItem.link} onClick={()=>setMenuOpen(false)}>{navItem.label}</RemixLink>
                  {!navItem.subItem ? 
                      <IconButton
                        aria-label="Hide section sub items."
                        icon={navItem.expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        size="xs"
                        onClick={(e) => {
                          e.preventDefault();
                          navItem.expanded ? setShouldHide(navItem.label) : setShouldExpand(navItem.label);
                        }}
                      />
                    : <Button variant="unstyled" />}
                </HStack>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  };
}

export default makeNavMenu({ navElements });

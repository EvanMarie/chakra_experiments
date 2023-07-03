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
  Portal,
  Box,
  Flex,
} from "@chakra-ui/react";

import type { NavElement } from "~/components/app_components/navigation";
import { navElements } from "~/components/app_components/navigation";
import { Link as RemixLink, useLocation } from "@remix-run/react";
import { getNavElementForUrl } from "~/components/app_components/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { StyledHomeIcon } from "~/components/app_components/navigation";

type NavItemArray = Array<
  NavElement & { subItem: boolean; expanded?: boolean }
>;

const navMainItemFontStyles = {
  fontWeight: "bold",
  fontSize: "xl",
};

const navSubItemFontStyles = {
  fontWeight: "normal",
  fontSize: "lg",
};

export function makeNavMenu({ navElements }: { navElements: NavElement[] }) {
  // use a Chakra menu to render a dropdown menu for mobile.
  //
  return () => {
    const [shouldExpand, setShouldExpand] = useState<string>("");
    const [shouldHide, setShouldHide] = useState<string>("");
    const [expanded, setExpanded] = useState<string[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const nav = getNavElementForUrl(
      location.pathname,
      navElements
    ) as NavElement;

    const [navItems, setNavItems] = useState<NavItemArray>([]);

    const handleOpen = () => {
      const expand = nav ? nav._parent?.label || nav.label : "";
      if (expand !== "") {
        setShouldExpand(expand);
      }
      setExpanded([]);
    };

    useEffect(() => {
      // remove shouldHide from expanded
      if (shouldExpand != "") {
        setExpanded((prev) => [...prev, shouldExpand]);
      }

      if (shouldHide != "") {
        setExpanded((prev) => prev.filter((item) => item !== shouldHide));
      }

      const _newNavItems: NavItemArray = [];

      navElements.map((navElement) => {
        _newNavItems.push({ ...navElement, subItem: false, expanded: false });
        if (expanded.includes(navElement.label) && navElement.subElements) {
          _newNavItems[_newNavItems.length - 1].expanded = true;
          navElement.subElements?.map((subElement) => {
            _newNavItems.push({ ...subElement, subItem: true });
          });
        }
      });

      setNavItems(_newNavItems);
      setShouldHide("");
      setShouldExpand("");
    }, [navElements, location, shouldHide, shouldExpand]);

    const isSelected = (navElement: NavElement) =>
      nav && nav.label === navElement.label;

    const selectedStyles = {
      bg: "accent_2",
      fontSize: "lg",
      color: "background",
      fontWeight: "bold",
      _hover: {
        color: "linkColor",
      },
    };

    const unselectedStyles = {
      bg: "#433A47",
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
      <Menu isOpen={menuOpen} onOpen={handleOpen}>
        <MenuButton
          color={"linkColor"}
          _hover={{ color: "accent_2" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ImMenu size={30} />
        </MenuButton>
        <Portal>
          <MenuList bg={"#433A47"} overflow="hidden">
            <MenuItem
              as={RemixLink}
              to="/"
              w="300px"
              bg={"darkAccent_3"}
              onClick={() => setMenuOpen(false)}
            >
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
                    <Box
                      w="100%"
                      {...(navItem.subItem
                        ? navSubItemFontStyles
                        : navMainItemFontStyles)}
                    >
                      <RemixLink
                        to={navItem.link}
                        onClick={() => setMenuOpen(false)}
                      >
                        {" "}
                        <Box w="100%">{navItem.label}</Box>
                      </RemixLink>
                    </Box>

                    {
                      !navItem.subItem ? (
                        <IconButton
                          w="30%"
                          alignSelf="right"
                          variant="unstyled"
                          aria-label="Hide section sub items."
                          icon={
                            navItem.expanded ? (
                              <ChevronUpIcon boxSize={7} />
                            ) : (
                              <ChevronDownIcon boxSize={7} />
                            )
                          }
                          size="xs"
                          onClick={(e) => {
                            e.preventDefault();
                            navItem.expanded
                              ? setShouldHide(navItem.label)
                              : setShouldExpand(navItem.label);
                          }}
                        />
                      ) : null
                      // <Button variant="unstyled" />
                    }
                  </HStack>
                </MenuItem>
              );
            })}
          </MenuList>
        </Portal>
      </Menu>
    );
  };
}

export default makeNavMenu({ navElements });

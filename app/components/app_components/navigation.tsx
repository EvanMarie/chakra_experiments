/* eslint-disable react/display-name */
import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  Box,
  Flex,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  chakra,
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";
import { AccordionMain, AccordionSub } from "./navigationComponents";
import { useLocation, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export type NavElement = {
  link: string;
  label: string;
  subElements?: Array<NavElement>;
  _parent?: NavElement | null;
};

export const StyledHomeIcon = chakra(AiOutlineHome, {
  baseStyle: {
    color: "linkColor",
    _hover: {
      color: "accent_2",
    },
  },
});

export const navElements: NavElement[] = [
  {
    link: "/styling",
    label: "Styling",
    subElements: [
      {
        link: "/styling/padding_margin",
        label: "Padding & Margin",
      },
      {
        link: "/styling/color",
        label: "Color",
      },
      {
        link: "/styling/gradients",
        label: "Gradients",
      },
      {
        link: "/styling/typography",
        label: "Typography",
      },
      {
        link: "/styling/layout",
        label: "Layout",
      },
      {
        link: "/styling/display",
        label: "Display",
      },
      {
        link: "/styling/flexbox",
        label: "Flexbox",
      },
      {
        link: "/styling/grid_layout",
        label: "Grid Layout",
      },
      {
        link: "/styling/background",
        label: "Background",
      },
      {
        link: "/styling/borders",
        label: "Borders",
      },
      {
        link: "/styling/border_radius",
        label: "Border Radius",
      },
      {
        link: "/styling/position",
        label: "Position",
      },
      {
        link: "/styling/shadow",
        label: "Shadow",
      },
      {
        link: "/styling/filter",
        label: "Filter",
      },
      {
        link: "/styling/pseudo",
        label: "Pseudo Props",
      },
      {
        link: "/styling/as_prop",
        label: 'The "as" Prop',
      },
    ],
  },
  {
    link: "/disclosure",
    label: "Disclosure",
    subElements: [
      {
        link: "/styling/padding_margin",
        label: "Padding & Margin",
      },
      {
        link: "/styling/color",
        label: "Color",
      },
      {
        link: "/styling/css",
        label: "CSS",
      },
    ],
  },
  {
    link: "/feedback",
    label: "Feedback",
    subElements: [
      {
        link: "/styling/padding_margin",
        label: "Padding & Margin",
      },
      {
        link: "/styling/color",
        label: "Color",
      },
      {
        link: "/styling/css",
        label: "CSS",
      },
    ],
  },
  {
    link: "/overlay",
    label: "Overlay",
  },
];

export const getNavElementForUrl = (
  url: string,
  navElements: NavElement[]
): NavElement | null => {
  // search recursively through navElements for a link that matches url, and return the navElement
  for (const navElement of navElements) {
    if (navElement.link === url) {
      navElement._parent = null;
      return navElement;
    } else if (navElement.subElements) {
      const _navElement = getNavElementForUrl(
        url,
        navElement.subElements as NavElement[]
      );
      if (_navElement) {
        _navElement._parent = navElement;
        return _navElement;
      }
    }
  }
  return null;
};

export const getLabelForUrl = (
  url: string,
  navElements: NavElement[]
): string | null => {
  const navElement = getNavElementForUrl(url, navElements);
  if (navElement) {
    return navElement.label;
  } else {
    return null;
  }
};

export const useIsCurrentNavRoute = (ownPath: string) => {
  const location = useLocation();
  const [isCurrentNavRoute, setIsCurrentNavRoute] = useState(false);
  useEffect(() => {
    const basePath = location.pathname;
    setIsCurrentNavRoute(basePath === ownPath);
  }, [location]);
  return isCurrentNavRoute;
};

export function makeSideNav({ navElements }: { navElements: NavElement[] }) {
  return ({
    initialIndex = undefined,
    onChange,
  }: {
    initialIndex?: number;
    onChange: (index: number) => void;
  }) => {
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    useEffect(() => {
      const basePath = location.pathname.split("/")[1];
      const activeIndex = navElements.findIndex((navElement) => {
        return navElement.link.split("/")[1] === basePath;
      });
      setCurrentIndex(activeIndex);
    }, [location]);
    const onIndexChange = (index: number) => {
      setCurrentIndex(index);
      onChange(index);
    };
    return (
      <Flex w="100%" h="100vh" alignItems={"flex-start"}>
        <VStack w="100%" alignItems={"flex-start"}>
          <Link to="/">
            <Box w="100%>" paddingLeft={15}>
              <StyledHomeIcon size={30} />
            </Box>
          </Link>
          <Accordion
            allowToggle
            w="100%"
            index={currentIndex}
            onChange={onIndexChange}
          >
            {navElements.map((navElement) => {
              return (
                <AccordionItem key={navElement.label}>
                  <AccordionMain
                    link={navElement.link}
                    label={navElement.label}
                  />
                  {navElement.subElements?.map((subElement) => {
                    return (
                      <AccordionSub
                        key={subElement.label}
                        link={subElement.link}
                        label={subElement.label}
                      />
                    );
                  })}
                </AccordionItem>
              );
            })}
          </Accordion>
        </VStack>
      </Flex>
    );
  };
}

export default makeSideNav({ navElements });

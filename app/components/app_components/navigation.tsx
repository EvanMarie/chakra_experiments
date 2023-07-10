/* eslint-disable react/display-name */

import {
  Accordion,
  AccordionItem,
  Box,
  Flex,
  HStack,
  VStack,
  chakra,
} from "@chakra-ui/react";

import { AiFillAlert, AiOutlineHome } from "react-icons/ai";
import { AccordionMain, AccordionSub } from "./navigationComponents";
import { useLocation, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

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
        link: "/disclosure/accordion",
        label: "Accordion",
      },
      {
        link: "/disclosure/tabs",
        label: "Tabs",
      },
    ],
  },
  {
    link: "/feedback",
    label: "Feedback",
    subElements: [
      {
        link: "/feedback/alert",
        label: "Alert",
      },
      {
        link: "/feedback/circular_progress",
        label: "Circular Progress",
      },
      {
        link: "/feedback/progress",
        label: "Progress",
      },
      {
        link: "/feedback/skeletons",
        label: "Skeletons",
      },
      {
        link: "/feedback/spinners",
        label: "Spinners",
      },
      {
        link: "/feedback/toast",
        label: "Toast",
      },
    ],
  },
  {
    link: "/overlay",
    label: "Overlay",
    subElements: [
      {
        link: "/overlay/alert_dialog",
        label: "Alert Dialog",
      },
      {
        link: "/overlay/drawer",
        label: "Drawer",
      },
      {
        link: "/overlay/menu",
        label: "Menu",
      },
      {
        link: "/overlay/modal",
        label: "Modal",
      },
      {
        link: "/overlay/popover",
        label: "Popover",
      },
      {
        link: "/overlay/tooltip",
        label: "Tooltip",
      },
    ],
  },
  {
    link: "/media_icons",
    label: "Media & Icons",
    subElements: [
      {
        link: "/media_icons/avatar",
        label: "Avatar",
      },
      {
        link: "/media_icons/icon",
        label: "Icon",
      },
      {
        link: "/media_icons/image",
        label: "Image",
      },
    ],
  },
  {
    link: "/data_display",
    label: "Data Display",
    subElements: [
      {
        link: "/data_display/badge",
        label: "Badge",
      },
      {
        link: "/data_display/card",
        label: "Card",
      },
      {
        link: "/data_display/code",
        label: "Code",
      },
      {
        link: "/data_display/divider",
        label: "Divider",
      },
      {
        link: "/data_display/keyboard",
        label: "Keyboard",
      },
      {
        link: "/data_display/list",
        label: "List",
      },
      {
        link: "/data_display/statistics",
        label: "Statistics",
      },
      {
        link: "/data_display/table",
        label: "Table",
      },
      {
        link: "/data_display/tag",
        label: "Tag",
      },
    ],
  },
  {
    link: "/navigation",
    label: "Navigation",
    subElements: [
      {
        link: "/navigation/breadcrumb",
        label: "Breadcrumb",
      },
      {
        link: "/navigation/link",
        label: "Link",
      },
      {
        link: "/navigation/link_overlay",
        label: "Link Overlay",
      },
      {
        link: "/navigation/skipnav",
        label: "Skip Nav",
      },
      {
        link: "/navigation/stepper",
        label: "Stepper",
      },
    ],
  },
  {
    link: "/form",
    label: "Form",
    subElements: [
      {
        link: "/form/button",
        label: "Button",
      },
      {
        link: "/form/checkbox",
        label: "Checkbox",
      },
      {
        link: "/form/editable",
        label: "Editable",
      },
      {
        link: "/form/form_control",
        label: "Form Control",
      },
      {
        link: "/form/icon_button",
        label: "Icon Button",
      },
      {
        link: "/form/input",
        label: "Input",
      },
      {
        link: "/form/number_input",
        label: "Number Input",
      },
      {
        link: "/form/pin_input",
        label: "Pin Input",
      },
      {
        link: "/form/radio",
        label: "Radio",
      },
      {
        link: "/form/range_slider",
        label: "Range Slider",
      },
      {
        link: "/form/select",
        label: "Select",
      },
      {
        link: "/form/slider",
        label: "Slider",
      },
      {
        link: "/form/switch",
        label: "Switch",
      },
      {
        link: "/form/textarea",
        label: "Textarea",
      },
    ],
  },
  {
    link: "/layout",
    label: "Layout",
    subElements: [
      {
        link: "/layout/box",
        label: "Box",
      },
      {
        link: "/layout/center",
        label: "Center",
      },
      {
        link: "/layout/container",
        label: "Container",
      },
      {
        link: "/layout/flex",
        label: "Flex",
      },
      {
        link: "/layout/grid",
        label: "Grid",
      },
      {
        link: "/layout/simple_grid",
        label: "Simple Grid",
      },
      {
        link: "/layout/stack",
        label: "Stack",
      },
      {
        link: "/layout/wrap",
        label: "Wrap",
      },
    ],
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
      <Flex w="100%" alignItems={"flex-start"}>
        <VStack w="100%" alignItems={"flex-start"}>
          <HStack paddingRight={2} justifyContent="space-between" w="100%">
            <Link to="/">
              <Box w="100%>" paddingLeft={15}>
                <StyledHomeIcon size={30} />
              </Box>
            </Link>
          </HStack>

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

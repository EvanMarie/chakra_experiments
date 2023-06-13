import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  Box,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";
import { AccordionMain, AccordionSub } from "./navigationComponents";
import { useLocation, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export type NavElement = {
  link: string;
  label: string;
  subElements?: Array<NavElement>;
};

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
        label: "The as Prop",
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
      <Flex w="100%" h="100vh" alignItems={"flex-start"} p={2}>
        <VStack w="100%" alignItems={"flex-start"} p={2}>
          <Link to="/">
            <Box w="100%>" paddingLeft={15}>
              <AiOutlineHome size={30} />
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

/*
const MainNavigation = () => {
  return (
    <Flex w="100%" h="100vh" alignItems={"flex-start"} p={2}>
      <VStack w="100%" alignItems={"flex-start"} p={2}>
        <Link href="/">
          <Box w="100%>" paddingLeft={15}>
            <AiOutlineHome size={30} />
          </Box>
        </Link>
        <Accordion allowToggle w="100%">
          <AccordionItem>
            <AccordionMain link="/styling" label="Styling" />
            <AccordionSub
              link="/styling/padding_margin"
              label="Padding & Margin"
            />
            <AccordionSub link="/styling/color" label="Color" />
            <AccordionSub link="/styling/gradients" label="Gradients" />
            <AccordionSub link="/styling/typography" label="Typography" />
            <AccordionSub link="/styling/layout" label="Layout" />
            <AccordionSub link="/styling/display" label="Display" />
            <AccordionSub link="/styling/flexbox" label="Flexbox" />
            <AccordionSub link="/styling/grid_layout" label="Grid Layout" />
            <AccordionSub link="/styling/page" label="New" />
          </AccordionItem>

          <AccordionItem>
            <AccordionMain link="/disclosure" label="Disclosure" />
            <AccordionSub link="/styling/chakra" label="Chakra" />
            <AccordionSub link="/styling/tailwind" label="Tailwind" />
            <AccordionSub link="/styling/css" label="CSS" />
          </AccordionItem>

          <AccordionItem>
            <AccordionMain link="/feedback" label="Feedback" />
            <AccordionSub link="/styling/chakra" label="Chakra" />
            <AccordionSub link="/styling/tailwind" label="Tailwind" />
            <AccordionSub link="/styling/css" label="CSS" />
          </AccordionItem>

          <AccordionItem>
            <AccordionMain link="/overlay" label="Overlay" />
            <AccordionSub link="/styling/chakra" label="Chakra" />
            <AccordionSub link="/styling/tailwind" label="Tailwind" />
            <AccordionSub link="/styling/css" label="CSS" />
          </AccordionItem>
        </Accordion>
      </VStack>
    </Flex>
  );
};
*/

export default makeSideNav({ navElements });

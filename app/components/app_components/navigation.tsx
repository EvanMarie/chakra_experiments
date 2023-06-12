import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Link,
  VStack,
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";
import { AccordionMain, AccordionSub } from "./navigationComponents";

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
            <AccordionSub link="/styling/css" label="CSS" />
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

export default MainNavigation;

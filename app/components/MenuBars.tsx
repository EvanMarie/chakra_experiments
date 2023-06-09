import { Flex, Text, HStack, Box, VStack, Link } from "@chakra-ui/react";
import {
  MyButton,
  sectionMenuButtons,
  colors,
  mainMenuButtons,
  MyHeading,
} from "~/styles/reusableChakraComponents";
import { BiHome } from "react-icons/bi";

const labelFontSize = "13px";

interface PageHeaderProps {
  title: string;
  href: string;
}

export function PageHeader({ title, href }: PageHeaderProps) {
  return (
    <HStack align="center" justifyContent="center" spacing={3}>
      <Link href="/">
        <BiHome size="36px" color="deeppink" />
      </Link>
      <Link href={href}>
        <MyHeading>{title}</MyHeading>
      </Link>
    </HStack>
  );
}

export function FullButtonBar() {
  return (
    <Box m={2} p={3}>
      <HStack w="100%" align="center" justify="center">
        <VStack w="100%" align="left" justify="center">
          <StyleMenuBar />
          <HStack align="flex-end" spacing={1}>
            <Text fontSize={labelFontSize} fontWeight="bold">
              Components:{" "}
            </Text>
            <HStack align="center" justify="center">
              <MyButton
                label="Disclosure"
                href="/chakra_disclosure"
                {...mainMenuButtons}
              />
              <MyButton
                label="Feedback"
                href="/chakra_feedback"
                {...mainMenuButtons}
              />
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export function StyleMenuBar() {
  return (
    <Flex
      bg={colors.myblue}
      w="650px"
      paddingY="3px"
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <HStack wrap="wrap" justifyContent={"center"} spacing={0.25}>
        <MyButton
          label="Padding / Margin"
          href="#padding"
          {...sectionMenuButtons}
        />
        <MyButton label="Colors" href="#colors" {...sectionMenuButtons} />
        <MyButton label="Gradients" href="#gradients" {...sectionMenuButtons} />
        <MyButton label="Font Effects" href="#fonts" {...sectionMenuButtons} />
        <MyButton
          label="Width / Height"
          href="#width_height"
          {...sectionMenuButtons}
        />
        <MyButton label="Display" href="#display" {...sectionMenuButtons} />
        <MyButton label="Flexbox" href="#flexbox" {...sectionMenuButtons} />
        <MyButton label="Grid" href="#grid" {...sectionMenuButtons} />
        <MyButton
          label="Background"
          href="#background"
          {...sectionMenuButtons}
        />
        <MyButton label="Borders" href="#borders" {...sectionMenuButtons} />
        <MyButton label="Position" href="#position" {...sectionMenuButtons} />
        <MyButton label="Shadow" href="#shadow" {...sectionMenuButtons} />
        <MyButton label="Filter" href="#filter" {...sectionMenuButtons} />
        <MyButton label="Pseudo" href="#pseudo" {...sectionMenuButtons} />
        <MyButton label="The as Prop" href="#as_prop" {...sectionMenuButtons} />
      </HStack>{" "}
    </Flex>
  );
}

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
export const menuBarWidth = "675px";

interface PageHeaderProps {
  title: string;
  href: string;
}

export function PageHeader({ title, href }: PageHeaderProps) {
  return (
    <Flex w="100%" justifyContent={"center"} alignItems={"center"}>
      <HStack align="center" spacing={3}>
        <Link href="/">
          <BiHome size="40px" color="deeppink" />
        </Link>
        <Link href={href}>
          <MyHeading size={35}>{title}</MyHeading>
        </Link>
      </HStack>
    </Flex>
  );
}

export function StyleMenuBar() {
  return (
    <Flex
      bg={colors.myblue}
      w={menuBarWidth}
      paddingY="3px"
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      borderRadius="sm"
    >
      <HStack wrap="wrap" justifyContent={"center"} spacing={0.25}>
        <MyButton
          label="Padding / Margin"
          href="/chakra_styling#padding"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Colors"
          href="/chakra_styling#colors"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Gradients"
          href="/chakra_styling#gradients"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Font Effects"
          href="/chakra_styling#fonts"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Width / Height"
          href="#width_height"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Display"
          href="/chakra_styling#display"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Flexbox"
          href="/chakra_styling#flexbox"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Grid"
          href="/chakra_styling#grid"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Background"
          href="#background"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Borders"
          href="/chakra_styling#borders"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Position"
          href="/chakra_styling#position"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Shadow"
          href="/chakra_styling#shadow"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Filter"
          href="/chakra_styling#filter"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Pseudo"
          href="/chakra_styling#pseudo"
          {...sectionMenuButtons}
        />
        <MyButton
          label="The as Prop"
          href="/chakra_styling#as_prop"
          {...sectionMenuButtons}
        />
      </HStack>{" "}
    </Flex>
  );
}

export function DisclosureComponentBar() {
  return (
    <Flex
      bg={colors.myblue}
      w={menuBarWidth}
      paddingY="3px"
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      borderRadius="sm"
    >
      <HStack wrap="wrap" justifyContent={"center"} spacing={0.25}>
        <MyButton
          label="Accordion"
          href="/chakra_disclosure#accordion"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Tabs"
          href="/chakra_disclosure#tabs"
          {...sectionMenuButtons}
        />
      </HStack>{" "}
    </Flex>
  );
}

export function FeedbackComponentBar() {
  return (
    <Flex
      bg={colors.myblue}
      w={menuBarWidth}
      paddingY="3px"
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      borderRadius="sm"
    >
      <HStack wrap="wrap" justifyContent={"center"} spacing={0.25}>
        <MyButton
          label="Alert"
          href="/chakra_feedback#alert"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Circular Progress"
          href="/chakra_feedback#circular-progress"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Progress"
          href="/chakra_feedback#progress"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Skeletons"
          href="/chakra_feedback#skeletons"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Spinners"
          href="/chakra_feedback#spinners"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Toast"
          href="/chakra_feedback#toast"
          {...sectionMenuButtons}
        />
      </HStack>{" "}
    </Flex>
  );
}

export function OverlayComponentBar() {
  return (
    <Flex
      bg={colors.myblue}
      w={menuBarWidth}
      paddingY="3px"
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      borderRadius="sm"
    >
      <HStack wrap="wrap" justifyContent={"center"} spacing={0.25}>
        <MyButton
          label="Alert Dialog"
          href="/chakra_overlay#alert_dialog"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Drawer"
          href="/chakra_overlay#drawer"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Menu"
          href="/chakra_overlay#menu"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Modal"
          href="/chakra_overlay#modal"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Popover"
          href="/chakra_overlay#popover"
          {...sectionMenuButtons}
        />
        <MyButton
          label="Tooltip"
          href="/chakra_overlay#tooltip"
          {...sectionMenuButtons}
        />
      </HStack>{" "}
    </Flex>
  );
}

export function IndexMenuBar() {
  return (
    <VStack>
      <MyHeading>Chakra-UI Styling</MyHeading>
      <StyleMenuBar />
      <MyHeading>Chakra-UI Components:</MyHeading>
      <DisclosureComponentBar />
      <FeedbackComponentBar />
    </VStack>
  );
}

export function ComponentHeadingsBar() {
  return (
    <Flex>
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
        <MyButton label="Overlay" href="/chakra_overlay" {...mainMenuButtons} />
      </HStack>
    </Flex>
  );
}

// export function MenuBarTemplate() {
//   return (
//     <Flex
//       bg={colors.myblue}
//       w="650px"
//       paddingY="3px"
//       justifyContent={"center"}
//       alignItems={"center"}
//       alignSelf={"center"}
//     >
//       <HStack wrap="wrap" justifyContent={"center"} spacing={0.25}>
//         <MyButton label="" href="#" {...sectionMenuButtons} />
//         <MyButton label="" href="#" {...sectionMenuButtons} />
//         <MyButton label="" href="#" {...sectionMenuButtons} />
//         <MyButton label="" href="#" {...sectionMenuButtons} />
//         <MyButton label="" href="#" {...sectionMenuButtons} />
//         <MyButton label="" href="#" {...sectionMenuButtons} />
//         <MyButton label="" href="#" {...sectionMenuButtons} />
//       </HStack>{" "}
//     </Flex>
//   );
// }

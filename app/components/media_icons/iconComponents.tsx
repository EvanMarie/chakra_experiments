import { HStack, Icon, Link } from "@chakra-ui/react";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
  SingleExample,
} from "~/styles/MainDesignComponents";
import { Highlighter } from "../styling/highlighter";
import {
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  CloseIcon,
  EmailIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { IconCircleExample, IconCirlceCreateIcon } from "./iconFunctions";
import {
  FaAppStoreIos,
  FaBluetooth,
  FaCodepen,
  FaGooglePlay,
  FaKickstarterK,
} from "react-icons/fa";

/* ********************************************************************** */

export function IconOne() {
  return (
    <SectionContainer>
      <SectionHeading>Chakra's Built-In Icons</SectionHeading>
      <SectionDescription>
        ⦾ Chakra UI comes with its own set of icons. To use them, import the
        icon you need and pass it to the as prop of the <Mono>Icon</Mono> Icon.
        To see a full list of Chakra's built-in icons, visit the{" "}
        <Link
          color="accent_1"
          href="https://chakra-ui.com/docs/media-and-icons/icon"
          target="_link>"
        >
          Chakra Docs
        </Link>
        . The following icons are used at their default sizes and color, which
        is the default color of this site.
      </SectionDescription>
      <SingleExample>
        <SingleExample>
          <MyFlex bg="background">
            <HStack spacing={4}>
              <Icon as={EmailIcon} />
              <Icon as={ChatIcon} />
              <Icon as={CalendarIcon} />
              <Icon as={CheckIcon} />
              <Icon as={CloseIcon} />
              <Icon as={HamburgerIcon} />
            </HStack>
          </MyFlex>
        </SingleExample>
        <ModalCode>
          <Highlighter>{`import { Icon } from "@chakra-ui/react";
import {
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  CloseIcon,
  EmailIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";;

<HStack spacing={4}>
  <Icon as={EmailIcon} boxSize={6} />
  <Icon as={ChatIcon} boxSize={6} />
  <Icon as={CalendarIcon} boxSize={6} />
  <Icon as={CheckIcon} boxSize={6} />
  <Icon as={CloseIcon} boxSize={6} />
  <Icon as={HamburgerIcon} boxSize={6} />
</HStack>`}</Highlighter>
        </ModalCode>
      </SingleExample>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Using External Icons</SectionHeading>
      <SectionDescription>
        ⦾ Chakra UI's Icon component can also take in icons from external
        libraries like <Mono>react-icons</Mono>. For these icon examples, I have
        increased the size to <Mono>boxSize={9}</Mono>. And I have specified
        colors for each.
      </SectionDescription>
      <BasicText>
        Utilizing third-party icon libraries, such as react-icons, within Chakra
        UI can be accomplished in a few straightforward steps. Initially, you
        need to import the Icon component from <Mono>@chakra-ui/react</Mono>.
        Subsequently, you can specify the icon from your preferred external
        library by assigning it to the <Mono>as</Mono> prop of the imported{" "}
        <Mono>Icon</Mono> component.
      </BasicText>
      <SingleExample>
        <SingleExample>
          <MyFlex bg="background">
            <HStack spacing={4}>
              <Icon as={FaAppStoreIos} boxSize={9} color="pink.400" />
              <Icon as={FaBluetooth} boxSize={9} color="yellow.400" />
              <Icon as={FaCodepen} boxSize={9} color="purple.400" />
              <Icon as={FaGooglePlay} boxSize={9} color="orange.400" />
              <Icon as={FaKickstarterK} boxSize={9} color="red.400" />
            </HStack>
          </MyFlex>
        </SingleExample>
        <ModalCode>
          <Highlighter>{`import { Icon } from "@chakra-ui/react";
import { TbLollipop } from "react-icons/Tb";
import { TiBell } from "react-icons/Ti";
import { SiAdobe } from "react-icons/Si";
import { TfiApple } from "react-icons/Tfi";
import { WiDayLightning } from "react-icons/Wi";

<HStack spacing={4}>
  <Icon as={FaAppStoreIos} boxSize={9} color="pink.400" />
  <Icon as={FaBluetooth} boxSize={9} color="yellow.400" />
  <Icon as={FaCodepen} boxSize={9} color="purple.400" />
  <Icon as={FaGooglePlay} boxSize={9} color="orange.400" />
  <Icon as={FaKickstarterK} boxSize={9} color="red.400" />
</HStack>
`}</Highlighter>
        </ModalCode>
      </SingleExample>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconThree() {
  return (
    <SectionContainer>
      <SectionHeading>Creating Custom Icons</SectionHeading>
      <SectionDescription>
        ⦾ Creating your own custom icons in Chakra UI can open up a world of
        personalized design possibilities. This can be achieved through two
        methods provided by Chakra UI: using the <Mono>Icon</Mono> component or
        using the <Mono>createIcon</Mono> function. These methods can be
        imported from <Mono>@chakra-ui/react</Mono>. They both offer the
        flexibility to style your icon with style props as required.
      </SectionDescription>
      <SingleExample>
        <br />
        <BasicText>
          ⦾ <HL>Using the Icon Component</HL>: The <Mono>Icon</Mono> component
          is an SVG element that allows you to create your own SVG paths. Here's
          an example where I have created a function that produces a custom
          icon, which implement in the same way as Chakra icons or react-icons.
        </BasicText>
        <SingleExample>
          <MyFlex bg="background">
            <HStack spacing={4}>
              <IconCircleExample color="accent_1" />
              <IconCircleExample color="purple.200" boxSize={7} />
              <IconCircleExample color="accent_2" boxSize={9} />
            </HStack>
          </MyFlex>
          <ModalCode>
            <Highlighter>{`import { Icon, IconProps, createIcon } from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";

export function IconCircleExample(props: IconProps) {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}

<HStack spacing={4}>
  <IconCircleExample color="accent_1" />
  <IconCircleExample color="purple.200" boxSize={7} />
  <IconCircleExample color="accent_2" boxSize={9} />
</HStack>`}</Highlighter>
          </ModalCode>
        </SingleExample>
      </SingleExample>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconFour() {
  return (
    <SectionContainer>
      <SectionHeading>Using the createIcon Function</SectionHeading>
      <BasicText>
        ⦾ The <Mono>createIcon</Mono> function is a convenient way to generate
        icons. It wraps around the <Mono>Icon</Mono> component and offers
        similar functionality with less effort.
      </BasicText>
      <BasicText>
        The <Mono>createIcon</Mono> function provides a streamlined way to
        create icons in your Chakra UI powered applications, and can often lead
        to cleaner, more maintainable code. Here are a few reasons why it may be
        preferred:
      </BasicText>
      <BulletBox>
        <ul>
          <li>
            <HL>Code Clarity</HL>: <Mono>createIcon</Mono> provides a clear and
            simple way to define an icon. It encapsulates the underlying SVG
            structure and abstracts it into a simple object-based structure. The
            function takes care of setting up the SVG for you, and you just need
            to specify the path data and viewBox. This makes your icon
            definitions more compact and easier to read and understand.
          </li>
          <li>
            <HL>Better Typing for TypeScript</HL>: If you're using TypeScript,
            <Mono>createIcon</Mono> allows for better type safety as it defines
            what a Chakra UI Icon should be. The <Mono>IconProps</Mono> used in{" "}
            <Mono>createIcon</Mono> make it easier for TypeScript to infer the
            correct types and provide better autocompletion and error checking
            in your IDE.
          </li>
          <li>
            <HL>Less Boilerplate</HL>: With <Mono>createIcon</Mono>, you do not
            need to write the common SVG attributes every time you want to
            define a new icon. It takes care of the repetitive tasks for you,
            keeping your code DRY (Don't Repeat Yourself).
          </li>
          <li>
            <HL>Default Props</HL>: <Mono>createIcon</Mono> allows you to set
            default props for your icons. For example, you can set a default
            color for your icon using the defaultProps attribute. This is more
            difficult to achieve if you are creating icons using the Icon
            component directly.
          </li>
          <li>
            <HL>Consistency</HL>: Using <Mono>createIcon</Mono> helps to
            maintain consistency across your application as all icons are
            created in a similar manner.
          </li>
        </ul>
      </BulletBox>

      <SingleExample>
        <MyFlex bg="background">
          <HStack spacing={4}>
            <IconCirlceCreateIcon color="accent_1" />
            <IconCirlceCreateIcon boxSize={6} color="accent_2" />
            <IconCirlceCreateIcon boxSize={8} color="deeppink" />
            <IconCirlceCreateIcon boxSize={10} color="cyan" />
          </HStack>
        </MyFlex>
        <ModalCode>
          <Highlighter>{`export const IconCirlceCreateIcon = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 200 200",
  path: (
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  ),
});

<HStack spacing={4}>
  <IconCirlceCreateIcon color="accent_1" />
  <IconCirlceCreateIcon boxSize={6} color="accent_2" />
  <IconCirlceCreateIcon boxSize={8} color="deeppink" />
  <IconCirlceCreateIcon boxSize={10} color="cyan" />
</HStack>`}</Highlighter>
        </ModalCode>
      </SingleExample>
    </SectionContainer>
  );
}

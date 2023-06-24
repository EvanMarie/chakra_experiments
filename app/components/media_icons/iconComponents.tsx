import { Box, HStack, Icon, Link } from "@chakra-ui/react";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
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
import { TbLollipop } from "react-icons/Tb";
import { TiBell } from "react-icons/Ti";
import { SiAdobe } from "react-icons/Si";
import { TfiApple } from "react-icons/Tfi";
import { WiDayLightning } from "react-icons/Wi";
import { IconCircleExample, IconExampleTwo } from "./iconFunctions";

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
              <Icon as={TbLollipop} boxSize={9} color="pink.400" />
              <Icon as={TiBell} boxSize={9} color="yellow.400" />
              <Icon as={SiAdobe} boxSize={9} color="purple.400" />
              <Icon as={TfiApple} boxSize={9} color="orange.400" />
              <Icon as={WiDayLightning} boxSize={9} color="red.400" />
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
  <Icon as={TbLollipop} boxSize={9} color="pink.400" />
  <Icon as={TiBell} boxSize={9} color="yellow.400" />
  <Icon as={SiAdobe} boxSize={9} color="purple.400" />
  <Icon as={TfiApple} boxSize={9} color="orange.400" />
  <Icon as={WiDayLightning} boxSize={9} color="red.400" />
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
      <SingleExample>
        <br />
        <BasicText>
          ⦾ <HL>Using the createIcon Function</HL>: The <Mono>createIcon</Mono>{" "}
          function is a convenient way to generate icons. It wraps around the
          <Mono>Icon</Mono> component and offers similar functionality with less
          effort.
        </BasicText>
        <SingleExample>
          <MyFlex bg="background">
            <IconExampleTwo color="accent_1" />
          </MyFlex>
          <ModalCode>
            <Highlighter>{`Code`}</Highlighter>
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
      <SectionHeading></SectionHeading>
      <SectionDescription>⦾</SectionDescription>
      <SingleExample>
        <SingleExample>
          <MyFlex bg="background">Example</MyFlex>
        </SingleExample>
        <ModalCode>
          <Highlighter>{`Code`}</Highlighter>
        </ModalCode>
      </SingleExample>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconFive() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <SectionDescription>⦾</SectionDescription>
      <SingleExample>
        <SingleExample>
          <MyFlex bg="background">Example</MyFlex>
        </SingleExample>
        <ModalCode>
          <Highlighter>{`Code`}</Highlighter>
        </ModalCode>
      </SingleExample>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <SectionDescription>⦾</SectionDescription>
      <SingleExample>
        <SingleExample>
          <MyFlex bg="background">Example</MyFlex>
        </SingleExample>
        <ModalCode>
          <Highlighter>{`Code`}</Highlighter>
        </ModalCode>
      </SingleExample>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function IconSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <SectionDescription>⦾</SectionDescription>
      <SingleExample>
        <SingleExample>
          <MyFlex bg="background">Example</MyFlex>
        </SingleExample>
        <ModalCode>
          <Highlighter>{`Code`}</Highlighter>
        </ModalCode>
      </SingleExample>
    </SectionContainer>
  );
}

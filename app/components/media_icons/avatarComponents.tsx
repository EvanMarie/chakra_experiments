import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  AvatarFunctionFour,
  AvatarFunctionOne,
  AvatarFunctionThree,
  AvatarFunctionTwo,
} from "./avatarFunctions";

/* ********************************************************************** */

export function AvatarOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Avatar Implementation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Our first example illustrates a basic use case of the{" "}
          <Mono>Avatar</Mono> component, creating a row of six avatars, each
          with their respective images. If an image fails to load, the component
          falls back to showing the initials of the person's name. This approach
          is commonly used in chat interfaces, contact lists, or anywhere you
          need to display a list of users or contributors.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Sizing for Avatars</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In Chakra UI, the <Mono>Avatar</Mono> component supports various
          pre-defined sizes including "xs" (extra small), "sm" (small), "md"
          (medium), "lg" (large), "xl" (extra large), and "2xl" (double extra
          large). You can set the size by passing one of these values to the
          size prop of the Avatar component, allowing you to easily control the
          dimensions of the avatar images in your application. There are six
          avatars in this layout, each representing a different person and
          assigned a unique size from "xs" to "2xl".
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarThree() {
  return (
    <SectionContainer>
      <SectionHeading>Fallback for Loading Errors</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Avatar</Mono> component in Chakra UI provides flexible and
          robust fallback mechanisms for situations where an avatar image fails
          to load. The following is a demonstration that showcases these
          fallback mechanisms, as well as customization of the fallback avatar.
          This level of customization make the Avatar component an excellent
          choice for handling user avatars in your application.
        </SectionDescription>
        <BasicText>
          In this example, we have an <Mono>Avatar</Mono> component for three
          different people, each with a different size and a broken link for the
          <Mono>src</Mono> prop, hence the images will not load. This provides
          us with an opportunity to explore the fallbacks provided by the{" "}
          <Mono>Avatar</Mono> component.
        </BasicText>
        <BasicText>
          The first two avatars have a name prop, which the Avatar component
          uses to generate initials to display in the absence of an image.
          Additionally this, the <Mono>bg</Mono> prop is used to customize the
          background color of the fallback avatar. The <Mono>icon</Mono> prop is
          used to display a custom icon (from the <Mono>react-icons</Mono>{" "}
          library in this case) in place of the initials.
        </BasicText>
        <BasicText>
          For the third avatar, we don't provide a <Mono>name</Mono> prop. In
          this case, Chakra UI will use the custom icon and background color
          specified by the <Mono>icon</Mono> and <Mono>bg</Mono> props as the
          fallback avatar.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarFour() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarFive() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

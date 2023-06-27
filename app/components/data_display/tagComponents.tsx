import { AddIcon, LinkIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { TagFunctionOne } from "./tagFunctions";

/* ********************************************************************** */

export function TagOne() {
  return (
    <SectionContainer>
      <SectionHeading>Tag Basics</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The most straightforward way to use the <Mono>Tag</Mono> component
          is by simply wrapping the text with <Mono>Tag</Mono> tags.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Tag>Premium Content</Tag>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TagTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Color and Size Variation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Tag</Mono> component also provides flexibility in size and
          color. For instance, let's create three tags with different sizes and
          a consistent color scheme. This will produce small, medium, and large
          tags, all with a solid color scheme.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HStack spacing={4}>
          <Tag size="sm" variant="solid" colorScheme="purple">
            Small Purple
          </Tag>
          <Tag size="md" variant="solid" colorScheme="cyan">
            Medium Cyan
          </Tag>
          <Tag size="lg" variant="solid" colorScheme="pink">
            Large Pink
          </Tag>
        </HStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TagThree() {
  return (
    <SectionContainer>
      <SectionHeading>Tag Variant Options</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The default variant style is "subtle", but there are two others to
          choose from: "solid" and "outline". Below you can see the differences
          between the three.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HStack spacing={4}>
          <Tag size="md" variant="subtle" colorScheme="cyan">
            Subtle Variant
          </Tag>
          <Tag size="md" variant="solid" colorScheme="cyan">
            Solid Variant
          </Tag>
          <Tag size="md" variant="outline" colorScheme="cyan">
            Outline Variant
          </Tag>
        </HStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TagFour() {
  return (
    <SectionContainer>
      <SectionHeading>Left Icon</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can easily incorporate an icon on the left side of the tag by
          using the <Mono>TagLeftIcon</Mono>. This is very convenient, as the
          icon is automatically spaced well within the tag. The following
          example shows the three different sizes of tags each with a left{" "}
          <Mono>SunIcon</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (
            <Tag size={size} key={size} variant="subtle" colorScheme="yellow">
              <TagLeftIcon boxSize="12px" as={SunIcon} />
              <TagLabel>Sunshine</TagLabel>
            </Tag>
          ))}
        </HStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TagFive() {
  return (
    <SectionContainer>
      <SectionHeading>Right Icon</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To create a similar component but with the icon on the right side,
          all we need do is use the <Mono>TagRightIcon</Mono>.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (
            <Tag size={size} key={size} variant="outline" color="accent_2">
              <TagLabel>Link</TagLabel>
              <TagRightIcon as={LinkIcon} />
            </Tag>
          ))}
        </HStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TagSix() {
  return (
    <SectionContainer>
      <SectionHeading>Close Button</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To make a tag dismissable, all you need do is add a{" "}
          <Mono>TagCloseButton</Mono>. The example below has three closable
          buttons. If you want to keep closing them, you can reset them and make
          them reappear!
        </SectionDescription>
      </Box>

      <MyFlex bg="background" h="140px">
        <TagFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TagSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Adding a Custom Element</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can customize your tags even further by adding unique elements
          like an avatar.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Tag size="lg" colorScheme="blue" borderRadius="full">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
            size="xs"
            name="Jasper Jenkins"
            ml={-1}
            mr={2}
          />
          <TagLabel>Jasper Jenkins</TagLabel>
        </Tag>
      </MyFlex>
    </SectionContainer>
  );
}

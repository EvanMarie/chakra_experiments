import {
  Avatar,
  Badge,
  Box,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

/* ********************************************************************** */

export function BadgeOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, the badge is light gray with a small amount of padding
          around the text. However, Chakra UI allows for extensive customization
          of the Badge component. Here is how you can add a default badge to
          your application.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Badge>Default Badge</Badge>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BadgeTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Badge Color</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can change the color of the badge by using the{" "}
          <Mono>colorScheme</Mono> prop. This prop can take any color key that
          exists in the theme colors. In this example, each badge is given a
          different color scheme, making it easy to differentiate between them.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <VStack spacing={4}>
          <Badge>Default Badge</Badge>
          <Badge colorScheme="pink">Pink Badge: Caution</Badge>
          <Badge colorScheme="green">Green Badge: Success</Badge>
          <Badge colorScheme="purple">Purple Badge: Lovely</Badge>
        </VStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BadgeThree() {
  return (
    <SectionContainer>
      <SectionHeading>Badge Variants</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Badges in Chakra UI come with three variant styles: 'outline',
          'solid', and 'subtle'. By changing the <Mono>variant</Mono> prop, you
          can easily switch between these styles. In the following example, each
          badge uses the 'purple' color scheme but displays a different variant.{" "}
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <VStack spacing={4}>
          <Badge variant="outline" colorScheme="purple">
            Outline Variant
          </Badge>
          <Badge variant="solid" colorScheme="purple">
            Solid Variant
          </Badge>
          <Badge variant="subtle" colorScheme="purple">
            Subtle Variant
          </Badge>
        </VStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BadgeFour() {
  return (
    <SectionContainer>
      <SectionHeading>Incorporating Badges</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ One of the strengths of Chakra UI is the ease with which its
          components can be combined. Badges can be easily integrated with other
          components to create complex UI elements. In the following example,
          the <Mono>Badge</Mono> is used alongside the <Mono>Avatar</Mono>,{" "}
          <Mono>Box</Mono>, <Mono>Flex</Mono>, <Mono>VStack</Mono>,{" "}
          <Mono>HStack</Mono>, and <Mono>Text</Mono> components. Here, a badge
          indicating 'New' is attached next to a user's name, showing that the
          user is a new addition to the team.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Flex bg="sectionColor" px={3} py={1} borderRadius="md">
          <HStack>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
              size="lg"
            />
            <Box ml="3">
              <HStack>
                <VStack spacing={0}>
                  <HStack>
                    <Text alignSelf="left" fontWeight="bold" m={0}>
                      Jasper Jenkins
                    </Text>
                    <Badge ml="1" colorScheme="red">
                      New
                    </Badge>
                  </HStack>
                  <Flex justifyContent="left" w="100%">
                    <Text m={0} fontSize="sm">
                      Rabble Rouser
                    </Text>
                  </Flex>
                </VStack>
              </HStack>
            </Box>
          </HStack>
        </Flex>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function BadgeFive() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Badge Size</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can easily adjust the size of the badge by passing a value to
          the <Mono>fontSize</Mono> prop. In this example, the badge is smaller
          than the surrounding text, offering a more subtle presentation.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Text fontSize="xl" fontWeight="bold">
          Jasper Jenkins
          <Badge ml="3" fontSize="0.5em" colorScheme="pink">
            New
          </Badge>
        </Text>
      </MyFlex>
    </SectionContainer>
  );
}

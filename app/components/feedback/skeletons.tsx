import {
  BasicText,
  FlexibleBox,
  HL,
  Mono,
  colors,
} from "~/styles/DesignComponents";
import {
  Box,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import FadeDurationSkeleton from "./skeletonFadeDuration";
import {
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { useState } from "react";

export function SkeletonOne() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Basic Usage::</SectionHeading>
      <SectionDescription>
        ⦾ Let's start with a simple yet functional application. Here's an
        example of a stack of three skeleton components, all having a set
        height. Until your actual content is ready, these will create an
        engaging placeholder to keep your design's flow intact.
      </SectionDescription>
      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.mainBackground} padding={5}>
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonTwo() {
  return (
    <Box marginTop="5px">
      <SectionHeading>The Invisible Wrapper::</SectionHeading>
      <SectionDescription>
        ⦾ This example perfectly demonstrates how the <Mono>Skeleton</Mono>{" "}
        component can wrap around any content, making it invisible until it's
        fully loaded. A real game-changer for suspenseful content reveals!
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.mainBackground} padding={5}>
            <Skeleton>
              <div>contents wrapped</div>
              <div>won't be visible</div>
            </Skeleton>
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonThree() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Waiting on Remote Data:</SectionHeading>
      <SectionDescription>
        ⦾ Skeletons serve as great placeholders while your app is fetching
        remote data. Watch how in the following code, the Skeleton maintains the
        visual structure of the content until the actual data is ready.
      </SectionDescription>
    </Box>
  );
}

export function SkeletonFour() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Skeleton Shapes and Text:</SectionHeading>
      <SectionDescription>
        ⦾ In addition to regular bar-like placeholders, Chakra UI provides
        <Mono>SkeletonCircle</Mono> and <Mono>SkeletonText</Mono> for more
        variety. Check out how they work in the following snippet.
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.mainBackground} padding={5}>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonFive() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Color-Changing Skeleton:</SectionHeading>
      <SectionDescription>
        ⦾ With <Mono>startColor</Mono> and <Mono>endColor</Mono> properties, you
        can create dynamic, color-changing skeletons. It's like a fun little
        light show while the user waits for content to load.
      </SectionDescription>
      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.mainBackground} padding={5}>
            <Skeleton startColor="pink.500" endColor="blue.500" height="20px" />
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonSix() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Using isLoaded Prop:</SectionHeading>
      <SectionDescription>
        ⦾ Control the rendering of the skeleton with the <Mono>isLoaded</Mono>{" "}
        prop. If you don't want a skeleton, this is the way to do it.
      </SectionDescription>
      <Box p={5}>
        <Box marginY={1}>
          <Skeleton isLoaded>
            <span>A world with no skeletons.</span>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonSeven() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Controlling Fade Duration::</SectionHeading>
      <SectionDescription>
        ⦾ <Mono>FadeDuration</Mono> prop lets you control the speed of your
        content fade-in. The number you pass is the duration in seconds for the
        animation. By default, it's 0.4 seconds. Try it out with{" "}
        <Mono>isLoaded</Mono> prop set to true!
      </SectionDescription>

      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.mainBackground} padding={2}>
            <FadeDurationSkeleton />
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

export function ImageWithSkeleton() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <Skeleton isLoaded={hasLoaded} boxSize="200px">
      <Image
        src="https://generative-placeholders.glitch.me/image?width=200&height=200&style=circles&colors=33"
        onLoad={() => setHasLoaded(true)}
        alt="Kinda looks like bubbles..."
      />
    </Skeleton>
  );
}

export function DataTableSkeleton() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th color="white">Name</Th>
          <Th color="white">Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {[...Array(3)].map((_, i) => (
          <Tr key={i}>
            <Td>
              <Skeleton height="20px" speed={1.7} />
            </Td>
            <Td>
              <Skeleton height="20px" speed={1.7} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

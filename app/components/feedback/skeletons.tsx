import {
  BasicText,
  FlexibleBox,
  HL,
  Mono,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import FadeDurationSkeleton from "./skeletonFadeDuration";

export function SkeletonOne() {
  return (
    <Box marginTop="5px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        As a stand alone component:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The contains three of the most simple use cases for the Skeleton:
      </BasicText>
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
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Wrapping a Component:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The contents of the component will not be seen. This will be seen
        until the contents are loaded.
      </BasicText>

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
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Fetching Remote Data:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Skeletons can load and give visual structure to content while waiting
        for the actual content to load. See code below.
      </BasicText>
    </Box>
  );
}

export function SkeletonFour() {
  return (
    <Box marginTop="5px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Circle and Text Skeleton:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ This example uses two additional elements: <Mono>SkeletonCircle</Mono>{" "}
        and <Mono>SkeletonText</Mono>
      </BasicText>

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
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Color-Changing Skeleton:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ use <Mono>startColor</Mono> and <Mono>endColor</Mono> to create
        color-changing skeletons.
      </BasicText>
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
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        isLoaded prop:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ to prevent the skeleton from rendering, use <Mono>isLoaded</Mono> as
        shown below.
      </BasicText>
      <Box p={5}>
        <Box marginY={1}>
          <Skeleton isLoaded>
            <span>No skeleton to see here.</span>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonSeven() {
  return (
    <Box marginTop="5px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        fadeDuration prop:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ <Mono>fadeDuration</Mono> allows you to control the speed at which the
        content fades into view. The number passed is the number of seconds for
        the <Mono>animation</Mono> style prop to render. Default is 0.4 seconds.
        This is best viewd with the <Mono>isLoaded</Mono> prop set to{" "}
        <Mono>true</Mono>.{" "}
      </BasicText>

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

import {
  BasicText,
  FlexibleBox,
  Mono,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import FadeDurationSkeleton from "./skeletonFadeDuration";

export function SkeletonOne() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        As a stand alone component:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The following component has this code times three:
      </BasicText>
      <Mono>Skeleton height="20px"</Mono>
      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.secondaryBackground} padding={5}>
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
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Wrapping a Component:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The contents of the component will not be seen. This will be seen
        until the contents are loaded.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.secondaryBackground} padding={5}>
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
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Fetching Remote Data:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Skeletons can load and give visual structure to content while waiting
        for the actual content to load. See code below.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.secondaryBackground} padding={5}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <img
                src="./images/remotedataskeleton.png"
                alt="skeleton"
                width="425px"
              />
            </Flex>
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonFour() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Circle and Text Skeleton:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ This example uses two additional elements: <b>SkeletonCircle</b> and{" "}
        <b>SkeletonText</b>
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.secondaryBackground} padding={5}>
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
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Color-Changing Skeleton:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ use <b>startColor</b> and <b>endColor</b> to create color-changing
        skeletons. The following code produces the skeleton below.
      </BasicText>
      <Mono>
        Skeleton startColor="pink.500" endColor="blue.500" height="20px"
      </Mono>
      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.secondaryBackground} padding={5}>
            <Skeleton startColor="pink.500" endColor="blue.500" height="20px" />
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

export function SkeletonSix() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        isLoaded prop:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ to prevent the skeleton from rendering, use <b>isLoaded</b> as shown
        below.
      </BasicText>
      <FlexibleBox bg={colors.secondaryBackground} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <img
            src="./images/skeletonisloaded.png"
            alt="skeleton"
            width="425px"
          />
        </Flex>
      </FlexibleBox>
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
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        fadeDuration prop:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ <b>fadeDuration</b> allows you to control the speed at which the
        content fades into viewl. The number passed is the number of seconds for
        the <b>animation</b> style prop to render. Default is 0.4 seconds. This
        is best viewd with the <b>isLoaded</b> prop set to <b>true</b>.{" "}
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <FlexibleBox bg={colors.secondaryBackground} padding={2}>
            <FadeDurationSkeleton />
          </FlexibleBox>
        </Box>
      </Box>
    </Box>
  );
}

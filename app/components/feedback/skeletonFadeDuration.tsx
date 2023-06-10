import { Box, Button, Skeleton, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "~/styles/reusableChakraComponents";

function FadeDurationSkeleton() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Stack
      padding={4}
      spacing={1}
      color="black"
      fontWeight="bold"
      fontFamily="monospace"
      textAlign="center"
      fontSize="18px"
    >
      <Skeleton height="40px" isLoaded={isLoaded} bg={colors.mainAccent}>
        <Box>I hope</Box>
      </Skeleton>
      <Skeleton
        height="40px"
        isLoaded={isLoaded}
        bg={colors.mainAccent2}
        fadeDuration={1}
      >
        <Box>that you</Box>
      </Skeleton>
      <Skeleton
        height="40px"
        isLoaded={isLoaded}
        fadeDuration={4}
        bg={colors.mainAccent3}
      >
        <Box>have a great day!</Box>
      </Skeleton>

      <Box textAlign="center">
        <Button marginTop={2} onClick={() => setIsLoaded((v) => !v)}>
          Press!
        </Button>
      </Box>
    </Stack>
  );
}

export default FadeDurationSkeleton;

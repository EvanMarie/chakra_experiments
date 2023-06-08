import { Box, Flex, VStack } from "@chakra-ui/react";
import { BasicText, Mono, colors } from "~/styles/reusableChakraComponents";

export default function BackdropFilters() {
  const outerBoxStyles = {
    boxSize: "250px",
    p: "10",
    background:
      "url(https://picsum.photos/id/1068/200/300) center/cover no-repeat",
  };

  const innerBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "full",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
  };
  return (
    <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
      {/* adding backdrop-filter property to the element */}
      <VStack>
        <Mono>backdropFilter="invert(100%)"</Mono>
        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="invert(100%)">
            Box with Backdrop Filter
          </Box>
        </Box>
      </VStack>
      {/* adding backdrop-blur property to the element */}
      <VStack>
        <Mono>backdropFilter="auto" backdropBlur="8px"</Mono>
        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="8px">
            Box with Backdrop Blur
          </Box>
        </Box>
      </VStack>
      {/* adding backdrop-contrast property to the element */}
      <VStack>
        <Mono>backdropFilter="auto" backdropContrast="30%"</Mono>
        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="30%">
            Box with Backdrop Contrast
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}

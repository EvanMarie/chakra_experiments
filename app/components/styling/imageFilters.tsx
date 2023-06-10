import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { BasicText, Mono, colors } from "~/styles/reusableChakraComponents";

export function Filters() {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "250px",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background:
      "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
  };
  return (
    <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly" m={5}>
      {/* adding filter property to the element */}
      <VStack>
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Mono>filter="grayscale(80%)"</Mono>
          <Box sx={basicBoxStyles} filter="grayscale(80%)">
            Box with Filter
          </Box>
        </Flex>
      </VStack>
      {/* adding blur property to the element */}
      <VStack>
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Mono>filter="auto" blur="2px"</Mono>
          <Box sx={basicBoxStyles} filter="auto" blur="2px">
            Box with Blur
          </Box>
        </Flex>
      </VStack>
      {/* adding brightness property to the element */}
      <VStack>
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Mono>filter="auto" brightness="40%"</Mono>
          <Box sx={basicBoxStyles} filter="auto" brightness="40%">
            Box with Brightness
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}

export function BackdropFilters() {
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
    <Flex
      flexWrap="wrap"
      gap="24px"
      justifyContent="space-evenly"
      fontSize={15}
    >
      {/* adding backdrop-filter property to the element */}
      <VStack>
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Mono>backdropFilter="invert(100%)"</Mono>
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles} backdropFilter="invert(100%)">
              Box with Backdrop Filter
            </Box>
          </Box>
        </Flex>
      </VStack>
      {/* adding backdrop-blur property to the element */}
      <VStack>
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Mono>backdropFilter="auto" backdropBlur="8px"</Mono>
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="8px">
              Box with Backdrop Blur
            </Box>
          </Box>
        </Flex>
      </VStack>
      {/* adding backdrop-contrast property to the element */}
      <VStack>
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Mono>backdropFilter="auto" backdropContrast="30%"</Mono>
          <Box sx={outerBoxStyles}>
            <Box
              sx={innerBoxStyles}
              backdropFilter="auto"
              backdropContrast="30%"
            >
              Box with Backdrop Contrast
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}

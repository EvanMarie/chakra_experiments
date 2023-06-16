import { Box, Flex, Text, VStack, keyframes } from "@chakra-ui/react";
import { Highlighter } from "./highlighter";
import { MyFlex } from "~/styles/MainDesignComponents";

const boxSizes = {
  base: "200px",
  md: "300px",
  lg: "250px",
  xl: "300px",
};

const basicBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxSize: boxSizes,
  color: "white",
  textShadow: "0 0 20px black",
  fontWeight: "bold",
  fontSize: "20px",
  px: 4,
  marginTop: "5px",
  background:
    "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
};

export function Filters() {
  return (
    <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly" m={3}>
      {/* adding blur property to the element */}
      <VStack>
        <Flex
          flexDirection="column"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Highlighter>filter="auto" blur="2px"</Highlighter>
          <Box sx={basicBoxStyles} filter="auto" blur="2px"></Box>
        </Flex>
      </VStack>
      {/* adding brightness property to the element */}
      <VStack>
        <MyFlex>
          <Highlighter>filter="auto" brightness="40%"</Highlighter>
          <Box sx={basicBoxStyles} filter="auto" brightness="40%"></Box>
        </MyFlex>
      </VStack>
      {/* adding brightness property to the element */}
      <VStack>
        <MyFlex>
          <Highlighter>filter="contrast(130%)"</Highlighter>
          <Box sx={basicBoxStyles} filter="contrast(130%)"></Box>
        </MyFlex>
      </VStack>
      {/* adding filter property to the element */}
      <VStack>
        <MyFlex>
          <Highlighter>filter="grayscale(80%)"</Highlighter>
          <Box sx={basicBoxStyles} filter="grayscale(80%)"></Box>
        </MyFlex>
      </VStack>
      <VStack>
        <MyFlex>
          <Highlighter>filter="hue-rotate(90deg)"</Highlighter>
          <Box sx={basicBoxStyles} filter="hue-rotate(90deg)"></Box>
        </MyFlex>
      </VStack>
      <VStack>
        <MyFlex>
          <Highlighter>filter="invert(100%)"</Highlighter>
          <Box sx={basicBoxStyles} filter="invert(100%)"></Box>
        </MyFlex>
      </VStack>
      <VStack>
        <MyFlex>
          <Highlighter>filter="opacity(50%)"</Highlighter>
          <Box sx={basicBoxStyles} filter="opacity(50%)"></Box>
        </MyFlex>
      </VStack>
      <VStack>
        <MyFlex>
          <Highlighter>filter="saturate(200%)"</Highlighter>
          <Box sx={basicBoxStyles} filter="saturate(200%)"></Box>
        </MyFlex>
      </VStack>
      <VStack>
        <MyFlex>
          <Highlighter>filter="sepia(100%)"</Highlighter>
          <Box sx={basicBoxStyles} filter="sepia(100%)"></Box>
        </MyFlex>
      </VStack>
    </Flex>
  );
}

export function BackdropFilters() {
  const outerBoxStyles = {
    boxSize: boxSizes,
    p: "10",
    marginTop: "5px",
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
        <MyFlex>
          <Highlighter>backdropFilter="invert(100%)"</Highlighter>
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles} backdropFilter="invert(100%)">
              Box with Backdrop Filter
            </Box>
          </Box>
        </MyFlex>
      </VStack>
      {/* adding backdrop-blur property to the element */}
      <VStack>
        <MyFlex>
          <Highlighter>backdropFilter="auto" backdropBlur="8px"</Highlighter>
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="8px">
              Box with Backdrop Blur
            </Box>
          </Box>
        </MyFlex>
      </VStack>
      {/* adding backdrop-contrast property to the element */}
      <VStack>
        <MyFlex>
          <Highlighter>
            backdropFilter="auto" backdropContrast="30%"
          </Highlighter>
          <Box sx={outerBoxStyles}>
            <Box
              sx={innerBoxStyles}
              backdropFilter="auto"
              backdropContrast="30%"
            >
              Box with Backdrop Contrast
            </Box>
          </Box>
        </MyFlex>
      </VStack>
    </Flex>
  );
}

const highlightboxSizes = {
  base: "200px",
  sm: "300px",
  lg: "175px",
};

const highlightBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxSize: highlightboxSizes,
  color: "white",
  textShadow: "0 0 20px black",
  fontWeight: "bold",
  fontSize: "20px",
  px: 4,
  marginTop: "5px",
  background:
    "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
};

export function FilterTipOne() {
  return (
    <VStack>
      <MyFlex>
        <Box
          sx={highlightBoxStyles}
          filter="grayscale(100%)"
          _hover={{
            filter: "grayscale(0%)",
            transition: "filter 0.3s",
          }}
        ></Box>
        <Highlighter>{`<Box
  sx={basicBoxStyles}
  filter="grayscale(100%)"
  _hover={{
    filter: "grayscale(0%)",
    transition: "filter 0.3s",
  }}
>`}</Highlighter>
      </MyFlex>
    </VStack>
  );
}

export function FilterTipTwo() {
  return (
    <VStack>
      <MyFlex>
        <Box
          sx={highlightBoxStyles}
          filter="blur(2px) sepia(30%) contrast(130%)"
        ></Box>
        <Highlighter>{`<Box
  filter="blur(2px) 
  sepia(30%) 
  contrast(130%)"
>`}</Highlighter>
      </MyFlex>
    </VStack>
  );
}

export function FilterTipThree() {
  const pulse = keyframes`
  0% { filter: brightness(100%); }
  50% { filter: brightness(150%); }
  100% { filter: brightness(100%); }
`;

  return (
    <MyFlex>
      <Box sx={highlightBoxStyles} animation={`${pulse} 3s infinite`}></Box>
    </MyFlex>
  );
}

import React from "react";
import { keyframes } from "@emotion/react";
import { Flex, FlexProps, Text, VStack } from "@chakra-ui/react";
import { LayoutGroup } from "framer-motion";
import Logo from "./Logo";

const color01 = "sectionColor";
const color02 = "background";
const animationTime = "3s";
const textFontSize = { base: "30px", sm: "40px", md: "42px", lg: "48px" };
const logoFontSize = { base: "40px", sm: "50px", md: "50px", lg: "64px" };

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }`;

const animateBoxShadow = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(255, 166, 170, 0); 
  }
  50% {
    box-shadow: 0 0 13px rgba(255, 166, 170, 0.4);
  }
  100% {
    box-shadow: 0 0 0 rgba(255, 166, 170, 0);
  }
`;

interface AnimatedGradientProps extends FlexProps {
  children: React.ReactNode;
}

export function AnimatedGradient({ children }: AnimatedGradientProps) {
  return (
    <Flex
      w="100%"
      bgGradient={`linear(to-l, ${color01}, ${color02},)`}
      borderRadius="lg"
      backgroundSize="200% 200%"
      animation={`${gradient} 8s ease-in-out infinite, ${animateBoxShadow} 8s linear infinite`}
      fontWeight="bold"
      color="white"
      alignSelf="center"
    >
      {children}
    </Flex>
  );
}

function WelcomeBanner() {
  return (
    <Flex
      bgImage="url('/images/calm_triangles_vignette.png')"
      bgSize="cover"
      justifyContent="center"
      alignItems="center"
      p={1}
      borderRadius="lg"
      mb={2}
    >
      <AnimatedGradient>
        <VStack textAlign="center" p={5} w="100%" m={0}>
          <Text fontSize={textFontSize}>welcome to </Text>
          <Logo fontSize={logoFontSize} />
        </VStack>
      </AnimatedGradient>
    </Flex>
  );
}

export default WelcomeBanner;

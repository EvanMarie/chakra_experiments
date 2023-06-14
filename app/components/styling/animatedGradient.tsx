import { Box, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { colors } from "~/styles/DesignComponents";
import { MyFlex } from "~/styles/MainDesignComponents";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

interface AnimatedGradientProps {
  children: React.ReactNode;
}

export function AnimatedGradient({ children }: AnimatedGradientProps) {
  return (
    <MyFlex>
      <Box
        p={3}
        bgGradient={`linear(to-l, ${colors.mainAccent}, ${colors.mypurple})`}
        backgroundSize="200% 200%"
        animation={`${gradient} 2s ease infinite`}
        height="80px"
        width="200px"
        fontWeight="bold"
        color="white"
        alignSelf="center"
      >
        {children}
      </Box>
    </MyFlex>
  );
}

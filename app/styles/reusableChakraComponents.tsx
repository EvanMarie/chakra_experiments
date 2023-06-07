import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const colors = {
  mainBackground: "#333333",
  mainText: "white",
  mainAccent: "cyan",
  mainAccent2: "deeppink",
  mainAccent3: "yellow",
  secondaryBackground: "#71797E",
};

interface BigBackgroundBoxProps {
  children: React.ReactNode;
}

export function BigBackgroundBox({ children }: BigBackgroundBoxProps) {
  return (
    <Box
      p={4}
      w="100%"
      h="100%"
      bg={colors.mainBackground}
      color={colors.mainText}
    >
      <Flex justifyContent={"center"}>
        <Box p={1} width="800px" display="flex" flexDirection="column">
          {children}
        </Box>
      </Flex>
    </Box>
  );
}

interface MyButtonProps {
  label: string;
  href: string;
}

export function MyButton({ label, href }: MyButtonProps) {
  return (
    <Link
      color={colors.mainAccent}
      href={href}
      fontWeight="bold"
      mb={4}
      bg={colors.secondaryBackground}
      w="100px"
      p={2}
      borderRadius="sm"
      textAlign={"center"}
      _hover={{ bg: "cyan", color: `${colors.mainAccent2}` }}
    >
      {label}
    </Link>
  );
}

interface MyLabelProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
}

export function MyLabel({
  size = 16,
  color = colors.mainText,
  children,
}: MyLabelProps) {
  return (
    <>
      <Box
        my={3}
        h="1px"
        w="100%"
        bgGradient={`linear(to-t, ${colors.mainAccent2}, cyan)`}
      />
      <Text fontSize={size} color={color} mb={3} fontWeight="bold">
        {children}
      </Text>
    </>
  );
}

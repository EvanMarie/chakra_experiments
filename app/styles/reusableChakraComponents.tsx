import { Box, BoxProps, Flex, Link, Text } from "@chakra-ui/react";

// export const colors = {
//   mainBackground: "#333333",
//   lightFont: "white",
//   darkFont: "black",
//   mainAccent: "cyan",
//   mainAccent2: "deeppink",
//   mainAccent3: "yellow",
//   secondaryBackground: "#71797E",
// };

export const colors = {
  mainBackground: "#141114",
  mainText: "#f7e6c1",
  secondaryText: "#26231a",
  mainAccent: "#faa5b9",
  mainAccent2: "#a7d5fa",
  mainAccent3: "#9ffccc",
  mainAccent4: "#4d185c",
  secondaryBackground: "#460b47",
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

interface MyHeadingProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
}

export function MyHeading({
  children,
  size = 33,
  color = colors.mainAccent2,
}: MyHeadingProps) {
  return (
    <Text fontSize={size} color={color} mb={3} fontWeight="bold">
      {children}
    </Text>
  );
}

interface MyButtonProps {
  label: string;
  href: string;
  width?: string;
  fontWeight?: string;
}

export function MyButton({
  label,
  href,
  width = "140px",
  fontWeight = "normal",
}: MyButtonProps) {
  return (
    <Link
      color={colors.mainAccent}
      href={href}
      fontWeight={fontWeight}
      bg={colors.secondaryBackground}
      w={width}
      mx={1}
      p={1}
      border={`1px solid ${colors.mainBackground}`}
      borderBottom={"0px"}
      borderRadius="sm"
      boxShadow="0 -1px -4px rgba(160, 160, 160, 0.5)"
      textAlign={"center"}
      _hover={{
        bg: `${colors.mainAccent}`,
        color: `${colors.mainBackground}`,
        boxShadow: "0 2px 4px rgba(200, 200, 200, 0.5)",
      }}
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
        mb={2}
        mt={6}
        h="1px"
        w="100%"
        bgGradient={`linear(to-t, ${colors.mainAccent2}, ${colors.mainAccent})`}
      />
      <Text fontSize={size} color={color} mb={3} fontWeight="bold">
        {children}
      </Text>
    </>
  );
}

interface BasicTextProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  fontWeight?: string;
}

export function BasicText({
  size = 16,
  color = colors.mainText,
  fontWeight = "normal",
  children,
}: BasicTextProps) {
  return (
    <Text fontSize={size} color={color} mb={3} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}

interface FlexibleBoxProps extends BoxProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function FlexibleBox({ children, ...restProps }: FlexibleBoxProps) {
  const defaultBoxProps = {
    p: 1,
    mb: 3,
    bg: colors.mainAccent3,
    color: colors.secondaryText,
  };

  return (
    <Box {...defaultBoxProps} {...restProps}>
      {children}
    </Box>
  );
}

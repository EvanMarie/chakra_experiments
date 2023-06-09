import {
  Box,
  BoxProps,
  Flex,
  Grid,
  HStack,
  Link,
  Text,
  chakra,
} from "@chakra-ui/react";

export const colors = {
  mainBackground: "#141114",
  mainText: "#f7e6c1",
  secondaryText: "#26231a",
  mainAccent: "#faa5b9",
  mainAccent2: "#a7d5fa",
  mainAccent3: "#9ffccc",
  mainAccent4: "#4d185c",
  secondaryBackground: "#460b47",
  codeText: "#ff5ee7",
};

export const mainMenuButtons = {
  bg: colors.mainAccent4,
  color: colors.mainAccent2,
  hoverbg: colors.mainAccent3,
  hovercolor: colors.mainBackground,
  width: "120px",
  fontWeight: "bold",
  fontSize: "13px",
  p: 1,
  mx: 0,
};

export const sectionMenuButtons = {
  bg: colors.mainAccent2,
  color: colors.mainBackground,
  hoverbg: colors.mainAccent3,
  hovercolor: colors.mainAccent4,
  width: "120px",
  fontWeight: "bold",
  fontSize: "11px",
  p: 0.5,
  mx: 0,
};

export const homeIconColor = colors.mainAccent;

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
  bg?: string;
  color?: string;
  label: string;
  href: string;
  width?: string;
  fontWeight?: string;
  fontSize?: string;
  p?: number;
  mx?: number;
  hoverbg?: string;
  hovercolor?: string;
}

export function MyButton({
  label,
  href,
  bg = colors.secondaryBackground,
  color = colors.mainAccent,
  width = "120px",
  fontWeight = "bold",
  fontSize = "13px",
  p = 1,
  mx = 0,
  hoverbg = colors.mainAccent,
  hovercolor = colors.mainBackground,
}: MyButtonProps) {
  return (
    <Link
      color={color}
      href={href}
      fontWeight={fontWeight}
      fontSize={fontSize}
      bg={bg}
      w={width}
      mx={mx}
      p={p}
      border={`1px solid ${colors.mainBackground}`}
      borderBottom={"0px"}
      borderRadius="sm"
      boxShadow="0 -1px -4px rgba(160, 160, 160, 0.5)"
      textAlign={"center"}
      _hover={{
        bg: hoverbg,
        color: hovercolor,
        boxShadow: "0 2px 4px rgba(200, 200, 200, 0.5)",
      }}
    >
      {label}
    </Link>
  );
}

interface MyLabelProps {
  children?: React.ReactNode;
  size?: number;
  labelColor?: string;
  linkColor?: string;
  link?: string;
}

const CustomLink = chakra(Link, {
  baseStyle: {
    _hover: {
      color: colors.mainAccent3,
      textDecoration: "underline",
    },
  },
});

export function MyLabel({
  size = 16,
  labelColor = colors.mainAccent,
  linkColor = colors.mainAccent2,
  link = "",
  children,
}: MyLabelProps) {
  if (link === "") {
    return (
      <>
        <Box
          mb={2}
          mt={6}
          h="1px"
          w="100%"
          bgGradient={`linear(to-t, ${colors.mainAccent2}, ${colors.mainAccent})`}
        />
        <Text fontSize={size} color={labelColor} mb={3} fontWeight="bold">
          {children}
        </Text>
      </>
    );
  } else {
    return (
      <>
        <Box
          mb={2}
          mt={6}
          h="1px"
          w="100%"
          bgGradient={`linear(to-t, ${colors.mainAccent2}, ${colors.mainAccent})`}
        />
        <HStack spacing={3} alignItems="flex-end">
          <Text fontSize={size} color={labelColor} mb={3} fontWeight="bold">
            {children}
          </Text>
          <CustomLink
            href={link}
            target="blank"
            fontSize={size - 3}
            color={linkColor}
            mb={3}
          >
            / Chakra Docs /
          </CustomLink>
        </HStack>
      </>
    );
  }
}

interface BasicTextProps {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  fontWeight?: string;
}

export function BasicText({
  size = 14,
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

interface MonoProps {
  children?: React.ReactNode;
  fontSize?: string;
  width?: string;
}

export function Mono({
  children,
  fontSize = "14px",
  width = "100%",
}: MonoProps) {
  const monoStyle = {
    fontFamily: "monospace !important",
    color: colors.codeText,
    fontSize: `${fontSize} !important`,
    width: `${width} !important`,
  };
  return <span style={monoStyle}>{children}</span>;
}

interface CompWithLabelProps {
  children: React.ReactNode[];
  fontSize?: string;
  split?: string;
}
export function CompWithLabel({
  children,
  fontSize = "15px",
  split = "40% 60%",
}: CompWithLabelProps) {
  return (
    <Grid w="100%" templateColumns={split}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        {children[0]}
      </Flex>
      <Flex fontSize={fontSize} alignItems={"center"}>
        {children[1]}
      </Flex>
    </Grid>
  );
}

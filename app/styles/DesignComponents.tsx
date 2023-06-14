import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  HStack,
  Link,
  ResponsiveValue,
  Text,
  TextProps,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BasicTextSize } from "./MainDesignComponents";

export const colors = {
  mainBackground: "#211421",
  mainText: "#f7e6c1",
  secondaryText: "#26231a",
  mainAccent: "#faa5b9",
  mainAccent2: "#a7d5fa",
  mainAccent3: "#05fce8",
  mainAccent4: "#370a42",
  secondaryBackground: "#460b47",
  myblue: "#0c2b45",
  mygrayblue: "#23394a",
  mypurple: "#532291",
  codeText: "#faafef",
  sectionColor: "#3d3145",
  highlighterColor: "#a7d5fa",
  linkColor: "deeppink",
};

interface MyHeadingProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  mb?: number;
  mt?: number;
}

export function MyHeading({
  children,
  size = 33,
  mb = 3,
  mt = 3,
  color = colors.mainAccent2,
}: MyHeadingProps) {
  return (
    <Text fontSize={size} color={color} mb={mb} mt={mt} fontWeight="bold">
      {children}
    </Text>
  );
}

interface HorizontalLineProps {
  bg?: string | undefined;
  mb?: string | number;
  mt?: string | number;
  h?: string | number;
  w?: string | number;
  opacity?: string | number;
  bgGradient?: string | undefined;
}

export function HorizontalLine({
  bg = undefined,
  mb = 2,
  mt = 6,
  h = "1px",
  w = "100%",
  opacity = 0.3,
  bgGradient = `linear(to-t, ${colors.mainAccent2}, ${colors.mainAccent})`,
}: HorizontalLineProps) {
  return (
    <Box
      mb={mb}
      mt={mt}
      h={h}
      w={w}
      opacity={opacity}
      bgGradient={bgGradient}
      bg={bg}
    />
  );
}

interface BasicTextProps extends TextProps {
  children?: React.ReactNode;
  size?: ResponsiveValue<string>;
  color?: string;
  fontWeight?: string | number;
  mb?: number | string;
  mt?: number | string;
  [key: string]: any;
}

export function BasicText({
  size = BasicTextSize,
  color = colors.mainText,
  fontWeight = "normal",
  mb = 1,
  mt = 1,
  children,
}: BasicTextProps) {
  return (
    <Text fontSize={size} color={color} mb={mb} mt={mt} fontWeight={fontWeight}>
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
    paddingY: 1,
    paddingX: 5,
    borderRadius: "sm",
    bg: colors.mainAccent3,
    color: colors.secondaryText,
  };

  return (
    <Box {...defaultBoxProps} {...restProps}>
      {children}
    </Box>
  );
}

interface CompWithLabelProps {
  children: React.ReactNode[];
  fontSize?: string | number;
  split?: string;
  leftColAlign?: string;
  rightColAlign?: string;
}
export function CompWithLabel({
  children,
  fontSize = BasicTextSize,
  split = "40% 60%",
  leftColAlign = "center",
  rightColAlign = "left",
}: CompWithLabelProps) {
  return (
    <Box w="100%">
      <Grid templateColumns={split}>
        <Flex
          w="100%"
          justifyContent={"center"}
          overflow="scroll"
          alignItems={leftColAlign}
        >
          {children[0]}
        </Flex>
        <Flex
          w="100%"
          fontSize={fontSize}
          overflow="scroll"
          justifyContent={rightColAlign}
          alignItems={"center"}
        >
          {children[1]}
        </Flex>
      </Grid>
    </Box>
  );
}

interface MyDividerProps {
  h?: string | number;
  mb?: string | number;
  mt?: string | number;
  bg?: string | undefined;
  w?: string | number;
  opacity?: string | number;
  bgGradient?: string | undefined;
}

export function MyDivider({
  bg = undefined,
  mb = 2,
  mt = 6,
  h = "1px",
  w = "100%",
  opacity = 0.3,
  bgGradient = `linear(to-t, ${colors.mainAccent2}, ${colors.mainAccent})`,
}: MyDividerProps) {
  return (
    <HorizontalLine
      mb={mb}
      mt={mt}
      h={h}
      w={w}
      opacity={opacity}
      bgGradient={bgGradient}
      bg={bg}
    />
  );
}

interface HighlightMeProps {
  children?: React.ReactNode;
  color?: string;
  fontWeight?: string;
  size?: string | number;
}

export function HL({
  children,
  color = colors.highlighterColor,
  size = "16px",
  fontWeight = "bold",
}: HighlightMeProps) {
  return (
    <Text as="span" color={color} fontSize={size} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}

interface MonoProps {
  children?: React.ReactNode;
  fontSize?: string | number;
  width?: string;
  marginY?: number;
  lineHeight?: string;
  fontWeight?: string;
}

export function Mono({
  children,
  fontSize = BasicTextSize,
  width = "100%",
  marginY = 0,
  lineHeight = "1",
  fontWeight = "normal",
}: MonoProps) {
  const monoStyle = {
    fontFamily: "monospace !important",
    fontWeight: fontWeight,
    marginY: `${marginY} !important`,
    lineheight: `${lineHeight} !important`,
    color: colors.codeText,
    fontSize: `${fontSize} !important`,
    width: `${width} !important`,
  };
  return <span style={monoStyle}>{children}</span>;
}

interface StackedExampleProps extends FlexProps {
  children?: React.ReactNode;
  bg?: string | undefined;
  w?: string;
  spacing?: number;
  [key: string]: any;
}

export function StackedExample({
  children,
  spacing = 3,
  ...restProps
}: StackedExampleProps) {
  const defaultFlexProps = {
    p: 3,
    fontSize: BasicTextSize,
    w: "100%",
    bg: undefined,
    justifyContent: "center",
    alignItems: "left",
    borderRadius: "sm",
  };

  return (
    <Box
      {...defaultFlexProps}
      flexDirection={{ base: "column" }}
      {...restProps}
    >
      <VStack spacing={spacing} align="center">
        {children}
      </VStack>
    </Box>
  );
}

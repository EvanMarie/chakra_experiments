import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  HStack,
  Image,
  Link,
  ResponsiveValue,
  Text,
  TextProps,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { MyFlex } from "./MainDesignComponents";
// import { BasicTextSize } from "./MainDesignComponents";

export const colors = {
  mainBackground: "#211421",
  mainText: "#f7e6c1",
  secondaryText: "#26231a",
  mainAccent: "#faa5b9",
  mainAccent2: "#a7d5fa",
  accent_3: "#05fce8",
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
  mb = 5,
  mt = 3,
  color = "accent_2",
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
  bgGradient = `linear(to-t, ${"accent_2"}, ${"accent_1"})`,
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
  color = "mainText",
  fontWeight = "normal",
  mb = 3,
  mt = 1,
  children,
}: BasicTextProps) {
  return (
    <Text w="100%" color={color} mb={mb} mt={mt} fontWeight={fontWeight}>
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
    bg: "accent_3",
    color: "darkText",
  };

  return (
    <Box overflow-x="hidden" {...defaultBoxProps} {...restProps}>
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
  bgGradient = `linear(to-t, ${"accent_2"}, ${"accent_1"})`,
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
  color = "accent_2",
  // color = colors.highlighterColor,
  fontWeight = "bold",
}: HighlightMeProps) {
  return (
    <Text as="span" color={color} fontWeight={fontWeight}>
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
  width = "100%",
  marginY = 0,
  lineHeight = "1",
  fontWeight = "normal",
}: MonoProps) {
  const monoStyle = {
    fontWeight: fontWeight,
    marginY: `${marginY} !important`,
    lineheight: `${lineHeight} !important`,
    color: "codeText",
    width: `${width} !important`,
  };
  return <chakra.span {...monoStyle}>{children}</chakra.span>;
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

interface CollapsibleExampleProps {
  children: React.ReactNode[];
  fontSize?: string | number;
  split?: string;
  leftColAlign?: string;
  rightColAlign?: string;
}

export function CollapsibleExample({
  children,
  split = "40% 60%",
  leftColAlign = "center",
  rightColAlign = "left",
}: CollapsibleExampleProps) {
  const responsiveSplit = useBreakpointValue({ base: "100%", sm: split });
  const responsiveAlign = useBreakpointValue({
    base: "center",
    sm: rightColAlign,
  });

  return (
    <Box w="100%" paddingY={3}>
      <Grid templateColumns={responsiveSplit} gap={3}>
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
          overflow="scroll"
          justifyContent={responsiveAlign}
          alignItems={"center"}
        >
          {children[1]}
        </Flex>
      </Grid>
    </Box>
  );
}

interface IHeartComponentProps extends TextProps {
  children?: React.ReactNode;
  fontFamily?: string;
  fontSize?: string | number;
  bgGradient?: string | undefined;
  [key: string]: any;
}

export function IHeartComponents({
  children,
  fontFamily = "monospace",
  fontSize = "1.25rem",
  bgGradient = "linear(to-l, #05fce8, #a7d5fa, deeppink, #faa5b9)",
}: IHeartComponentProps) {
  return (
    <chakra.span
      fontSize={fontSize}
      bgGradient={bgGradient}
      fontFamily={fontFamily}
      bgClip="text"
      _hover={{
        bgGradient: "linear(to-l, #faa5b9, deeppink, #a7d5fa, #05fce8)",
        textDecor: "none",
      }}
    >
      {children}
    </chakra.span>
  );
}

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  colors?: number;
  style?: string;
  gap?: number;
}

export function PlaceholderImage({
  width = 200,
  height = 150,
  colors = 26,
  style = "triangles",
  gap = 100,
}: PlaceholderImageProps) {
  return (
    <MyFlex>
      <Image
        src={`https://generative-placeholders.glitch.me/image?width=${width}&height=${height}&style=${style}&gap=${gap}&colors=${colors}`}
      />
    </MyFlex>
  );
}

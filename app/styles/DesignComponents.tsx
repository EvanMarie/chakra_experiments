import {
  Box,
  BoxProps,
  Code,
  CodeProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  HStack,
  Highlight,
  Image,
  ImageProps,
  Link,
  ResponsiveValue,
  Skeleton,
  Text,
  TextProps,
  VStack,
  chakra,
  useBreakpointValue,
  useHighlight,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { HighlightText, MyFlex, linkStyle } from "./MainDesignComponents";
import { useState } from "react";
// import { BasicTextSize } from "./MainDesignComponents";
import styles from "~/styles/codeMarkdown.css";
import stylesUrl from "~/styles/global.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

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

export const GridStyles = {
  bg: "mainText",
  borderRadius: "lg",
  p: 2,
  w: "100%",
  h: "fit-content",
  gap: 1,
};

export const gridBoxStyles = {
  borderRadius: "lg",
  p: 2,
  w: "100%",
  shadow: "xl",
  color: "background",
  border: "2px solid #444444",
  fontWeight: "bold",
};

export const boxColors = {
  one: "accent_1",
  two: "accent_2",
  three: "purple.200",
  four: "yellow.200",
  five: "green.200",
  six: "orange.200",
};

export const textAreaStyling = {
  borderRadius: "lg",
  bg: "mainText",
  color: "background",
  _focus: {
    bg: "mainText",
    color: "background",
    focusBorderColor: "accent_2",
  },
  _hover: {
    bg: "mainText",
    color: "background",
    focusBorderColor: "accent_2",
  },
};

export const ButtonBackground = "accent_2";
export const ButtonHoverBG = "accent_1";
export const CatsBouncing = "https://cat-bounce.com/";

export const ButtonStyles = {
  bg: ButtonBackground,
  color: "background",
  border: "2px solid",
  borderColor: "darText",
  _hover: {
    bg: ButtonHoverBG,
    color: "background",
    transition: "all 0.4s ease-in-out",
  },
};

/*  ************************************************************************* */

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

/*  ************************************************************************* */

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
      sx={linkStyle}
    />
  );
}

/*  ************************************************************************* */

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

/*  ************************************************************************* */

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
    <Box sx={linkStyle} overflow-x="hidden" {...defaultBoxProps} {...restProps}>
      {children}
    </Box>
  );
}

/*  ************************************************************************* */

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
    <Box w="100%" sx={linkStyle}>
      <Grid templateColumns={split}>
        <Flex
          w="100%"
          justifyContent={"center"}
          overflow="hidden"
          alignItems={leftColAlign}
        >
          {children[0]}
        </Flex>
        <Flex
          w="100%"
          overflow="hidden"
          justifyContent={rightColAlign}
          alignItems={"center"}
        >
          {children[1]}
        </Flex>
      </Grid>
    </Box>
  );
}

/* ************************************************************************* */

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
  opacity = 0.5,
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

/* ************************************************************************* */

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
      sx={linkStyle}
    >
      <VStack spacing={spacing} align="center">
        {children}
      </VStack>
    </Box>
  );
}

/* ************************************************************************* */

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
      <Grid templateColumns={responsiveSplit} gap={3} sx={linkStyle}>
        <Flex
          w="100%"
          justifyContent={"center"}
          overflow="hidden"
          alignItems={leftColAlign}
        >
          {children[0]}
        </Flex>
        <Flex
          w="100%"
          overflow="hidden"
          justifyContent={responsiveAlign}
          alignItems={"center"}
        >
          {children[1]}
        </Flex>
      </Grid>
    </Box>
  );
}

/* ***************************************************************************************** */

interface IHeartComponentProps extends TextProps {
  children?: React.ReactNode;
  fontFamily?: string;
  fontSize?: string | number | object;
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
      sx={linkStyle}
      _hover={{
        bgGradient: "linear(to-l, #faa5b9, deeppink, #a7d5fa, #05fce8)",
        textDecor: "none",
      }}
    >
      {children}
    </chakra.span>
  );
}

/* ***************************************************************************************** */

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  colors?: number;
  type?: string;
  gap?: number;
}

export function PlaceholderImage({
  width = 200,
  height = 150,
  colors = 26,
  type = "triangles",
  gap = 100,
}: PlaceholderImageProps) {
  return (
    <MyFlex>
      <Image
        src={`https://generative-placeholders.glitch.me/image?width=${width}&height=${height}&style=${type}&gap=${gap}&colors=${colors}`}
      />
    </MyFlex>
  );
}

/* ***************************************************************************************** */

interface BlueBoldProps {
  children?: React.ReactNode;
  color?: string;
  fontWeight?: string;
  size?: string | number;
}

export function BlueBold({
  children,
  color = "accent_2",
  fontWeight = "bold",
}: BlueBoldProps) {
  return (
    <Text
      as="span"
      // bg={"sidebarBackground"}
      // p="3px"
      // borderRadius="sm"
      color={color}
      fontWeight={fontWeight}
    >
      {children}
    </Text>
  );
}

/* *************************************************************************** */

interface HighlightMeProps extends CodeProps {
  children?: React.ReactNode;
  fontweight?: string;
  fontSize?: string | object | number;
  background?: string;
  color?: string;
}

export function HL({ children, fontWeight = "normal" }: HighlightMeProps) {
  const HLSizes = useBreakpointValue({
    base: "1em",
    sm: "1em",
    md: "1em",
    lg: "1em",
    xl: "1em",
  });
  return (
    <Code
      sx={linkStyle}
      fontWeight={fontWeight}
      bg="background"
      color="accent_2"
      fontSize={HLSizes}
    >{`${children}`}</Code>
  );
}

/* *************************************************************************** */

interface NoteBoxProps extends FlexProps {
  children?: React.ReactNode;
}

export function NoteBox({ children, ...restProps }: NoteBoxProps) {
  return (
    <Flex w="100%" px={8}>
      <Flex
        direction="column"
        w="100%"
        bg="tipBackground"
        color="background"
        borderRadius="lg"
        p={4}
      >
        {children}
      </Flex>
    </Flex>
  );
}

/* *************************************************************************** */
interface MonoProps {
  children?: React.ReactNode;
  fontSize?: string | number;
  width?: string;
  marginY?: number;
  lineHeight?: string;
  fontWeight?: string;
}

// export function Mono({
//   children,
//   width = "100%",
//   marginY = 0,
//   lineHeight = "1",
//   fontWeight = "normal",
// }: MonoProps) {
//   const monoStyle = {
//     fontWeight: fontWeight,
//     width: `${width} !important`,
//     marginY: `${marginY} !important`,
//     lineheight: `${lineHeight} !important`,
//     color: "mainText",
//     textShadow: "0 2px 3px rgba(242, 5, 238, 0.8)",
//     // color: "#ffbddd",
//     // textShadow: "0 0 0.75rem black",
//   };
//   return <chakra.span {...monoStyle}>{children}</chakra.span>;
// }

/* *************************************************************************** */

const highlightColor = "rgba(48, 29, 44, 0.5)";

interface HighlightProps extends BoxProps {
  children?: string;
  highlighting?: string;
}

export function Mono({
  children,
  highlighting = highlightColor,
  ...rest
}: HighlightProps) {
  return (
    <chakra.span
      bg={highlighting}
      color="#fccacc"
      borderRadius="sm"
      paddingX="2px"
      paddingY="0.15px"
      lineHeight={1}
    >
      {children}
    </chakra.span>
  );
}

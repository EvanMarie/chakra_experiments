import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  HStack,
  Link,
  ResponsiveValue,
  Text,
  TextProps,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";

export const colors = {
  mainBackground: "#211421",
  mainText: "#f7e6c1",
  secondaryText: "#26231a",
  mainAccent: "#faa5b9",
  mainAccent2: "#a7d5fa",
  // mainAccent3: "#5de8a0",
  mainAccent3: "#05fce8",
  mainAccent4: "#370a42",
  secondaryBackground: "#460b47",
  // myblue: "#034880",
  myblue: "#0c2b45",
  mygrayblue: "#23394a",
  // mypurple: "#892aa3",
  mypurple: "#532291",
  codeText: "#faafef",
  sectionColor: "#3d3145",
  highlighterColor: "#a7d5fa",
};

export const mainMenuButtons = {
  bg: colors.mainAccent4,
  hoverbg: colors.mypurple,
  width: "120px",
  fontWeight: "bold",
  fontSize: "13px",
  p: 1,
  mx: 0,
};

export const sectionMenuButtons = {
  bg: colors.myblue,
  hoverbg: colors.mygrayblue,
  width: "130px",
  fontWeight: "bold",
  fontSize: "13px",
  border: "0px",
  p: "2px",
  mx: 0,
};

export const BasicTextSize = "16px";
export const MainWidth = "100%";
export const MainMaxWidth = "1000px";

interface BigBackgroundBoxProps {
  children: React.ReactNode;
}

export function BigBackgroundBox({ children }: BigBackgroundBoxProps) {
  return (
    <Box
      p={2}
      w={MainWidth}
      maxWidth={MainMaxWidth}
      bg={colors.mainBackground}
      color={colors.mainText}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box margin="auto 0">
        <Box p={1} width={MainWidth} display="flex" flexDirection="column">
          {children}
        </Box>
      </Box>
    </Box>
  );
}

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

interface MyButtonProps {
  bg?: string;
  color?: string;
  label: string;
  href: string;
  width?: string;
  fontWeight?: string;
  fontSize?: string;
  p?: string | number;
  mx?: number;
  border?: string;
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
  border = `1px solid ${colors.mainBackground}`,
  p = "2px",
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
      border={border}
      borderBottom={"0px"}
      borderRadius="sm"
      boxShadow="0 -1px -4px rgba(160, 160, 160, 0.5)"
      textAlign={"center"}
      _hover={{
        bg: hoverbg,
        color: hovercolor,
      }}
    >
      {label}
    </Link>
  );
}

const CustomLink = chakra(Link, {
  baseStyle: {
    _hover: {
      color: colors.mainAccent3,
      textDecoration: "underline",
    },
  },
});

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

interface MyLabelProps {
  children?: React.ReactNode;
  size?: number;
  labelColor?: string;
  linkColor?: string;
  link?: string;
}

export function MyLabel({
  size = 28,
  labelColor = colors.mainAccent,
  linkColor = colors.mainAccent2,
  link = "",
  children,
}: MyLabelProps) {
  if (link === "") {
    return (
      <>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={size}
            color={labelColor}
            fontWeight="bold"
            lineHeight="2em"
          >
            {children}
          </Text>
          <Link href="/">
            <AiOutlineHome size="40px" color="deeppink" />
          </Link>
        </Flex>
        <MyDivider mt={2} mb={2} />
      </>
    );
  } else {
    return (
      <>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={size} color={labelColor} fontWeight="bold">
            {children}
          </Text>
          <HStack
            w="300px"
            spacing={3}
            paddingX={3}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Text fontSize="28px">|</Text>
            <CustomLink
              href={link}
              target="blank"
              fontSize={size - 10}
              color={linkColor}
            >
              Chakra Docs
            </CustomLink>
            <Text fontSize="28px">|</Text>
            <Link href="/">
              <AiOutlineHome size="25px" color="deeppink" />
            </Link>
            <Text fontSize="28px">|</Text>
          </HStack>
        </Flex>
        <MyDivider mt={2} mb={2} />
      </>
    );
  }
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

interface SectionContainerProps extends FlexProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function SectionContainer({
  children,
  ...restProps
}: SectionContainerProps) {
  const defaultFlexProps = {
    paddingY: 3,
    paddingX: 5,
    // overflow: "auto",
    fontSize: BasicTextSize,
    marginY: 3,
    bg: colors.sectionColor,
    justifyContent: "center",
    alignItems: "left",
    borderRadius: "sm",
    width: "100%",
  };

  return (
    <Flex
      {...defaultFlexProps}
      flexDirection={{ base: "column" }}
      {...restProps}
    >
      {children}
    </Flex>
  );
}

interface ExamplenContainerProps extends FlexProps {
  children?: React.ReactNode;
  bg?: string;
  w?: string;
  [key: string]: any;
}

export function ExampleContainer({
  children,
  ...restProps
}: ExamplenContainerProps) {
  const defaultFlexProps = {
    p: 4,
    // overflow: "auto",
    fontSize: BasicTextSize,
    w: "100%",
    bg: colors.mainAccent2,
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
      {children}
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

interface SectionHeadingProps {
  children?: React.ReactNode;
  size?: string;
  color?: string;
  mb?: number | string;
  mt?: number | string;
}

export function SectionHeading({
  children,
  size = "23px",
  mb = 3,
  mt = 0,
  color = colors.mainAccent2,
}: SectionHeadingProps) {
  return (
    <BasicText size={size} color={color} mb={mb} mt={mt} fontWeight="bold">
      {children}
    </BasicText>
  );
}

interface SectionDescriptionProps {
  children?: React.ReactNode;
  size?: string;
  color?: string;
  mb?: number | string;
  mt?: number | string;
}

export function SectionDescription({
  children,
  size = BasicTextSize,
  mb = 1,
  mt = 1,
  color = colors.mainAccent3,
}: SectionDescriptionProps) {
  return (
    <BasicText size={size} color={color} mb={mb} mt={mt}>
      {children}
    </BasicText>
  );
}

interface BulletBoxProps extends BoxProps {
  children?: React.ReactNode;
  paddingX?: number | string;
  paddingY?: number | string;
  [key: string]: any;
}

export function BulletBox({
  children,
  paddingX = 7,
  paddingY = 3,
}: BulletBoxProps) {
  return (
    <Box paddingX={paddingX} paddingY={paddingY}>
      {children}
    </Box>
  );
}

interface DescriptionBoxProps extends BoxProps {
  children?: React.ReactNode;
  paddingX?: number | string;
  paddingY?: number | string;
  [key: string]: any;
}

export function DescriptionBox({
  children,
  paddingX = 4,
  paddingY = 2,
}: DescriptionBoxProps) {
  return (
    <Box paddingX={paddingX} paddingY={paddingY}>
      {children}
    </Box>
  );
}

interface ExampleBoxProps extends BoxProps {
  children?: React.ReactNode;
  paddingX?: number | string;
  paddingY?: number | string;
  [key: string]: any;
}

export function ExampleBox({
  children,
  paddingX = 5,
  paddingY = 0,
}: ExampleBoxProps) {
  return (
    <Box paddingX={paddingX} paddingY={paddingY}>
      <BasicText color={colors.mainAccent2} size="23px" mt={3}>
        <b>
          <i>Examples</i>
        </b>
        :
      </BasicText>
      {children}
    </Box>
  );
}

interface ImportBoxProps extends BoxProps {
  children?: React.ReactNode;
  paddingX?: number | string;
  paddingY?: number | string;
  [key: string]: any;
}

export function ImportBox({
  children,
  paddingX = 5,
  paddingTop = 5,
  marginBottom = 1,
}: ImportBoxProps) {
  return (
    <Box
      paddingX={paddingX}
      paddingTop={paddingTop}
      marginBottom={marginBottom}
    >
      {children}
    </Box>
  );
}

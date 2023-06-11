import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  HStack,
  Link,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { BiHome } from "react-icons/bi";

export const colors = {
  mainBackground: "#211421",
  mainText: "#f7e6c1",
  secondaryText: "#26231a",
  mainAccent: "#faa5b9",
  mainAccent2: "#a7d5fa",
  mainAccent3: "#5de8a0",
  mainAccent4: "#370a42",
  secondaryBackground: "#460b47",
  myblue: "#034880",
  mygrayblue: "#23394a",
  mypurple: "#892aa3",
  codeText: "#faafef",
  sectionColor: "#3d3145",
  highlighterColor: "#faa5b9",
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

export const BasicTextSize = 16;

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
  color?: string | undefined;
  mb?: string | number;
  mt?: string | number;
  h?: string | number;
  w?: string | number;
  bgGradient?: string | undefined;
}

export function HorizontalLine({
  color = undefined,
  mb = 2,
  mt = 6,
  h = "1px",
  w = "100%",
  bgGradient = `linear(to-t, ${colors.mainAccent2}, ${colors.mainAccent})`,
}: HorizontalLineProps) {
  return <Box mb={mb} mt={mt} h={h} w={w} bgGradient={bgGradient} bg={color} />;
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
        <HorizontalLine />
        <Flex justifyContent={"space-between"}>
          <Text fontSize={size} color={labelColor} fontWeight="bold">
            {children}
          </Text>
          <Link href="/">
            <BiHome size="40px" color="deeppink" />
          </Link>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <HorizontalLine />
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
              <BiHome size="25px" color="deeppink" />
            </Link>
            <Text fontSize="28px">|</Text>
          </HStack>
        </Flex>
      </>
    );
  }
}

interface BasicTextProps {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  fontWeight?: string;
  mb?: number;
}

export function BasicText({
  size = BasicTextSize,
  color = colors.mainText,
  fontWeight = "normal",
  mb = 2,
  children,
}: BasicTextProps) {
  return (
    <Text fontSize={size} color={color} mb={mb} fontWeight={fontWeight}>
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
          justifyContent={"center"}
          overflow="scroll"
          alignItems={leftColAlign}
        >
          {children[0]}
        </Flex>
        <Flex
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
    p: 5,
    // overflow: "auto",
    fontSize: BasicTextSize,
    marginY: 3,
    bg: colors.sectionColor,
    justifyContent: "center",
    alignItems: "left",
    borderRadius: "sm",
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

export function MyDivider() {
  return <HorizontalLine h="0.35px" mb="1px" mt="1px" />;
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
    p: 4,
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

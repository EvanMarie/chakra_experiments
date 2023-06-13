import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  HStack,
  Link,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { BasicText, MyDivider } from "./DesignComponents";

const colors = {
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

export const BasicTextSize = "16px";
export const MainWidth = "100%";
export const MainMaxWidth = "1000px";

const CustomLink = chakra(Link, {
  baseStyle: {
    _hover: {
      color: colors.mainAccent3,
      textDecoration: "underline",
    },
  },
});

/* *********************************BACKGROUND*************************************** */
interface BigBackgroundBoxProps {
  children: React.ReactNode;
}

export function BigBackgroundBox({ children }: BigBackgroundBoxProps) {
  return (
    <Box
      p={1}
      w={MainWidth}
      maxWidth={MainMaxWidth}
      bg={colors.mainBackground}
      color={colors.mainText}
      justifyContent={"center"}
      alignItems={"center"}
      overflow="auto"
    >
      <Box margin="auto 0">
        <Box width={MainWidth} display="flex" flexDirection="column">
          {children}
        </Box>
      </Box>
    </Box>
  );
}

/* **********************************MAIN GRID************************************** */
interface MainGridProps extends GridProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function MainGrid({ children, ...rest }: MainGridProps) {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "70% 30%" }}
      gap={2}
      alignItems="start"
      width="100%"
      {...rest}
    >
      <VStack>{children}</VStack>
      <Flex width="100%" justify="Left" align="center">
        Column 2
      </Flex>
    </Grid>
  );
}

/* *********************************GRID COLUMN*************************************** */
interface GridColumnProps extends BoxProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function GridColumn({ children, ...rest }: GridColumnProps) {
  return (
    <VStack width="100%" justify="left" align="center" {...rest}>
      {children}
    </VStack>
  );
}

// interface ColumnTwoProps extends BoxProps {
//   children?: React.ReactNode;
//   [key: string]: any;
// }

// export function ColumnTwo({ children, ...rest }: ColumnTwoProps) {
//   return (
//     <VStack width="100%" justify="left" align="center" {...rest}>
//       {children}
//     </VStack>
//   );
// }

interface GridBoxProps extends BoxProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function GridBoxOne({ children, ...rest }: GridColumnProps) {
  return (
    <Box bg={colors.mainAccent2} color={colors.secondaryText}>
      {children}
    </Box>
  );
}

export function GridBoxTwo({ children, ...rest }: GridColumnProps) {
  return (
    <Box bg={colors.mainAccent3} color={colors.mainText}>
      {children}
    </Box>
  );
}

export function GridBoxThree({ children, ...rest }: GridColumnProps) {
  return (
    <Box bg={colors.mainAccent4} color={colors.mainText}>
      {children}
    </Box>
  );
}

/* ********************************MAIN LABEL**************************************** */
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
            justifyContent={"right"}
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
          </HStack>
        </Flex>
        <MyDivider mt={2} mb={2} />
      </>
    );
  }
}

/* *******************************DESCR BOX***************************************** */
interface DescriptionBoxProps extends BoxProps {
  children?: React.ReactNode;
  paddingX?: number | string;
  paddingY?: number | string;
  [key: string]: any;
}

export function DescriptionBox({
  children,
  paddingX = 0,
  paddingY = 2,
}: DescriptionBoxProps) {
  return (
    <Box paddingX={paddingX} paddingY={paddingY}>
      {children}
    </Box>
  );
}

/* ********************************BULLET BOX**************************************** */
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

/* *************************************IMPORT BOX*********************************** */
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

/* *****************************SECTION CONTAINER*********************************** */
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
    overflow: "auto",
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

/* *******************************EXAMPLE BOX***************************************** */
interface ExampleBoxProps extends BoxProps {
  children?: React.ReactNode;
  paddingX?: number | string;
  paddingY?: number | string;
  [key: string]: any;
}

export function ExampleBox({
  children,
  paddingX = 0,
  paddingY = 0,
  width = "100%",
}: ExampleBoxProps) {
  return (
    <Box paddingX={paddingX} paddingY={paddingY} w={width}>
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

/* *********************************SECTION HEADING*************************************** */
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

/* ****************************SECTION DESCRIPTION************************************ */
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

/* ********************************EXAMPLE CONTAINER************************************ */
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

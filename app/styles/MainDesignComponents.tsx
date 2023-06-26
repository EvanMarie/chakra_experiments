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
  Spacer,
  useBreakpointValue,
  GridItem,
  Divider,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  CodeProps,
  Code,
} from "@chakra-ui/react";
import { BasicText, MyDivider } from "./DesignComponents";
import { RiBookmark3Line } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";

const usefulTipColor = "tipBackground";
const usefulTipLightbulb = "cyan";

export const MainWidth = "100%";
export const MainMaxWidth = "1000px";
export const SectionHeadingSize = "23px";

const CustomLink = chakra(Link, {
  baseStyle: {
    _hover: {
      color: "accent_3",
      textDecoration: "underline",
    },
  },
});

/* *********************************BACKGROUND*************************************** */
interface BigBackgroundBoxProps extends BoxProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function BigBackgroundBox({ children }: BigBackgroundBoxProps) {
  return (
    <Box
      p="5px"
      w={MainWidth}
      maxWidth={MainMaxWidth}
      bg="background"
      color={"mainText"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow-x="hidden"
    >
      <Box margin="auto 0" overflow-x="hidden">
        <Box
          width={MainWidth}
          display="flex"
          flexDirection="column"
          overflow-x="hidden"
        >
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
      alignItems="start"
      width="100%"
      {...rest}
    >
      {children}
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
    <GridItem p="7px" height="100%">
      <VStack
        width="100%"
        justify="center"
        overflow-x="hidden"
        align="center"
        {...rest}
      >
        {children}
      </VStack>
    </GridItem>
  );
}

export function HighlightColumn({ children, ...rest }: GridColumnProps) {
  const fontSizes = useBreakpointValue({
    base: "14px",
    small: "16px",
    md: "16px",
    lg: "14px",
  });
  return (
    <GridItem
      p="7px"
      height="100%"
      overflow-x="hidden"
      justifyContent={"center"}
    >
      <Box height="100%" width="100%" overflow-x="hidden">
        <Box
          bg={{ base: "darkAccent_3", md: "darkAccent_2", lg: "darkAccent_3" }}
          p={3}
          borderRadius="sm"
          height="100%"
          fontSize={fontSizes}
        >
          <VStack width="100%" justify="left" align="center" {...rest}>
            <Flex>
              <HStack>
                <RiBookmark3Line
                  size="25px"
                  color={"accent_3"}
                  style={{ marginBottom: "10px" }}
                />
                <Text fontWeight="bold" fontSize="20px">
                  Did you know?
                </Text>
              </HStack>
            </Flex>
            {children}
          </VStack>
        </Box>
      </Box>
    </GridItem>
  );
}

/* *******************************GRID BOXES************************************** */

interface GridBoxProps extends FlexProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const GridBoxDefaults = {
  width: "100%",
  maxWidth: { base: "450px", sm: "500px", md: "600px", lg: "300px" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginY: 2,
  color: "black",
  borderRadius: "md",
  boxShadow: "lg",
  bg: "tipBackground",
};

export const GridBoxPaddingValues = {
  base: "5px 10px",
  small: "20px",
  md: "10px 20px",
  lg: "10px",
};

export function GridBoxOne({ children, ...rest }: GridBoxProps) {
  // const SmallTextSize = useBreakpointValue(GridBoxTextSizes);
  const PaddingValues = useBreakpointValue(GridBoxPaddingValues);

  return (
    <Flex {...GridBoxDefaults} flexDirection="column" padding={PaddingValues}>
      <HStack>
        <Flex h="20px" justify="left" mb={2}>
          <HiLightBulb
            size={23}
            style={{ marginRight: "5px", color: usefulTipLightbulb }}
          />
          <Text fontWeight="bold" fontSize="16px">
            Useful Tip No. 1
          </Text>
        </Flex>
      </HStack>{" "}
      {children}
    </Flex>
  );
}

export function GridBoxTwo({ children, ...rest }: GridBoxProps) {
  // const SmallTextSize = useBreakpointValue(GridBoxTextSizes);
  const PaddingValues = useBreakpointValue(GridBoxPaddingValues);

  return (
    <Flex {...GridBoxDefaults} flexDirection="column" padding={PaddingValues}>
      <HStack>
        <Flex h="20px" justify="left" mb={2}>
          <HiLightBulb
            size={23}
            style={{ marginRight: "5px", color: usefulTipLightbulb }}
          />
          <Text fontWeight="bold" fontSize="16px">
            Useful Tip No. 2
          </Text>
        </Flex>
      </HStack>{" "}
      {children}
    </Flex>
  );
}

export function GridBoxThree({ children, ...rest }: GridBoxProps) {
  // const SmallTextSize = useBreakpointValue(GridBoxTextSizes);
  const PaddingValues = useBreakpointValue(GridBoxPaddingValues);

  return (
    <Flex {...GridBoxDefaults} flexDirection="column" padding={PaddingValues}>
      <HStack>
        <Flex h="20px" justify="left" mb={2}>
          <HiLightBulb
            size={23}
            style={{ marginRight: "5px", color: usefulTipLightbulb }}
          />
          <Text fontWeight="bold" fontSize="16px">
            Useful Tip No. 3
          </Text>
        </Flex>
      </HStack>{" "}
      {children}
    </Flex>
  );
}

/* ********************************MAIN LABEL**************************************** */

interface MyLabelProps {
  children?: React.ReactNode;
  size?: number;
  labelColor?: string;
  link?: string;
}

export function MyLabel({
  size = 33,
  labelColor = "accent_1",
  link = "",
  children,
}: MyLabelProps) {
  return (
    <Flex overflow-x="hidden" direction="column">
      <Flex w="100%" justifyContent="center">
        <Flex
          w="60%"
          paddingLeft={2}
          overflow-x="hidden"
          justifyContent="flex-end"
        >
          <Text
            w="100%"
            fontSize={["24px", "27px", "30px", "36px"]}
            color={labelColor}
            fontWeight="bold"
          >
            {children}
          </Text>
        </Flex>
        <Flex w="40%" justifyContent="flex-end" paddingRight={2}>
          <HStack spacing={3} alignItems="center" justifyContent="right" pr={3}>
            <Text fontSize="28px">|</Text>
            <Flex justify="center" align="center" pb={1.5}>
              <CustomLink
                href={link}
                target="_blank"
                fontSize={["sm", "md", size - 12]}
                color="linkColor"
              >
                Chakra Docs
              </CustomLink>
            </Flex>
            <Text fontSize="28px">|</Text>
          </HStack>
        </Flex>
      </Flex>
      <MyDivider mt={0} mb={2} />
    </Flex>
  );
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
    marginBottom: 0,
    bg: "sectionColor",
    justifyContent: "center",
    alignItems: "left",
    borderRadius: "sm",
    width: "100%",
  };

  return (
    <Flex
      overflow-x="hidden"
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
  paddingBottom = 0,
  paddingTop = 3,
  width = "100%",
}: ExampleBoxProps) {
  return (
    <Box
      paddingX={paddingX}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      w={width}
      overflow-x="hidden"
    >
      <h1>
        <BasicText color="accent_2" mb={0} fontWeight="bold">
          Examples
        </BasicText>
      </h1>
      <MyDivider mb={3} mt={0} />
      <VStack w="100%" spacing={3} overflow-x="hidden">
        {children}
      </VStack>
    </Box>
  );
}

/* *********************************SECTION HEADING*************************************** */
interface SectionHeadingProps {
  children?: React.ReactNode;
  size?: string;
  color?: string;
  width?: string;
  alignSelf?: string;
  mb?: number | string;
  mt?: number | string;
}

export function SectionHeading({
  children,
  size = SectionHeadingSize,
  mb = 3,
  mt = 0,
  width = "100%",
  color = "accent_2",
}: SectionHeadingProps) {
  return (
    <Box w="100%" justifyContent="left" textAlign="left">
      <h2>
        <BasicText size={size} color={color} mb={mb} mt={mt}>
          {children}
        </BasicText>
      </h2>

      <Divider color="mainText" opacity="0.3" variant="dashed" mb={3} mt={0} />
    </Box>
  );
}

/* ****************************SECTION DESCRIPTION************************************ */
interface SectionDescriptionProps extends BoxProps {
  children?: React.ReactNode;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  color?: string;
  width?: string;
  [key: string]: any;
}

export function SectionDescription({
  children,
  paddingTop = "10px",
  paddingBottom = "10px",
  color = "veryDarkText",
  width = "100%",
}: SectionDescriptionProps) {
  return (
    //size={size}
    <Box color={color} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {children}
    </Box>
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
    w: "100%",
    bg: "accent_2",
    justifyContent: "center",
    alignItems: "left",
    borderRadius: "sm",
  };

  return (
    <Box
      overflow-x="hidden"
      {...defaultFlexProps}
      flexDirection={{ base: "column" }}
      {...restProps}
    >
      {children}
    </Box>
  );
}

/* ******************************SINGLE EXAMPLE******************************* */

interface SingleExampleProps extends BoxProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function SingleExample({ children }: SingleExampleProps) {
  return (
    <VStack w="100%" spacing={2} verticalAlign="middle">
      {children}
    </VStack>
  );
}

/* ******************************MY FLEX******************************* */

interface MyFlexProps extends FlexProps {
  children?: React.ReactNode;
  bg?: string;
  [key: string]: any;
}

export function MyFlex({ children, ...restProps }: MyFlexProps) {
  return (
    <Flex
      overflow-x="hidden"
      w="98%"
      justify="center"
      align="center"
      p={3}
      m={1}
      borderRadius="3px"
      flexDirection={{ base: "column" }}
      {...restProps}
    >
      {children}
    </Flex>
  );
}

/* ******************************HIGHLIGHT TEXT******************************* */

interface HighlightTextProps extends BoxProps {
  children?: React.ReactNode;
  bg?: string;
  p?: number;
  color?: string;
  height?: string;
  [key: string]: any;
}

export function HighlightText({
  children,
  w = "100%",
  paddingX = { base: 2, sm: 4, md: 4, lg: 1 },
  paddingY = { base: 2, sm: 4, md: 4, lg: 1 },
  color = "darkText",
  borderRadius = "sm",
  maxWidth = { base: "450px", sm: "500px", md: "600px", lg: "300px" },
  ...restProps
}: HighlightTextProps) {
  return (
    <Box
      textAlign="left"
      w={w}
      px={paddingX}
      py={paddingY}
      color={color}
      borderRadius={borderRadius}
      maxWidth={maxWidth}
      {...restProps}
    >
      {children}
    </Box>
  );
}

/* ******************************HIGHLIGHT EXAMPLE******************************* */

interface HighlightExampleProps extends BoxProps {
  children?: React.ReactNode;
  bg?: string;
  p?: number;
  color?: string;
  height?: string;
  [key: string]: any;
}

export function HighlightExample({
  children,
  h = "200px",
  w = "100%",
  bg = "background",
  p = 2,
  color = "white",
  borderRadius = "md",
  maxWidth = { base: "300px", sm: "400px", md: "400px", lg: "250px" },
  ...restProps
}: HighlightExampleProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={borderRadius}
      h={h}
      w={w}
      bg={bg}
      p={p}
      color={color}
      maxWidth={maxWidth}
      {...restProps}
    >
      {children}
    </Box>
  );
}

/* ******************************EXPANDABLE******************************* */

interface ViewCodeProps {
  children?: React.ReactNode;
}

export const ViewCode = ({ children }: ViewCodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(true);
  };

  const handleCloseModal = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <MyFlex p={0}>
        <Button
          size="sm"
          fontSize="sm"
          paddingX={2}
          onClick={handleExpandClick}
          bg="darkAccent_3"
          color="linkColor"
          _hover={{ bg: "sectionColor" }}
        >
          View Code
        </Button>
      </MyFlex>
      <Modal
        allowPinchZoom={true}
        isOpen={isExpanded}
        onClose={handleCloseModal}
        size="2xl"
        colorScheme="teal"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box p={3}>{children}</Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

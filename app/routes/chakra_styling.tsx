import {
  Box,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  FlexibleBox,
  // Mono,
  // Flex,
  // Text,
  HL,
  HorizontalLine,
  Mono,
  MyDivider,
  colors,
} from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
  MyLabel,
  SectionContainer,
  ExampleContainer,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

import { BackdropFilters, Filters } from "~/components/styling/imageFilters";

hljs.registerLanguage("javascript", javascript);
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <VStack></VStack>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props">
        Chakra UI Styling System:
      </MyLabel>
      <SectionContainer>
        <BasicText color={colors.mainAccent3}>
          The Chakra UI Styling system is a comprehensive and intuitive approach
          to styling React applications using Chakra UI. It provides a set of
          utility functions, components, and design tokens that make it easy to
          create visually appealing and consistent user interfaces.{" "}
        </BasicText>
        <FlexibleBox bg={colors.myblue} p={4}>
          <Box>
            <BasicText>
              Here are the key aspects of the Chakra UI Styling system:{" "}
            </BasicText>
          </Box>
          <Box p={4}>
            <BasicText>
              <HL>Design Tokens</HL>: Chakra UI defines a set of design tokens
              such as colors, spacing, typography, and shadows. These tokens are
              used consistently throughout the application to maintain a
              cohesive visual style.{" "}
            </BasicText>
            <BasicText>
              <HL>Component-based approach</HL>: Chakra UI offers a wide range
              of customizable components that follow best practices and provide
              consistent styling out of the box. These components can be easily
              composed together to build complex UIs.{" "}
            </BasicText>
            <BasicText>
              <HL>Utility Props</HL>: Chakra UI introduces utility props that
              allow you to apply common styles directly to components without
              writing CSS. For example, you can set margin, padding, color, and
              more using intuitive prop names.{" "}
            </BasicText>
            <BasicText>
              <HL>Responsive Styles</HL>: Chakra UI provides a responsive design
              system, allowing you to define styles that adapt to different
              screen sizes. You can use breakpoint modifiers to specify
              different styles for various screen sizes.{" "}
            </BasicText>
            <BasicText>
              <HL>Theming</HL>: Chakra UI offers a powerful theming system that
              allows you to customize the design tokens and default styles
              according to your application's needs. You can create and extend
              themes to achieve a consistent and branded look.{" "}
            </BasicText>
            <BasicText>
              <HL>Style Props and CSS Prop</HL>: Chakra UI introduces style
              props and the CSS prop, allowing you to apply inline styles
              directly to components. This provides flexibility for custom
              styling while leveraging the benefits of the Chakra UI system.{" "}
            </BasicText>
          </Box>
          <Box>
            <BasicText>
              The Chakra UI Styling system simplifies the process of styling
              React components by providing a robust and flexible set of tools,
              making it easier to build beautiful and consistent user
              interfaces.
            </BasicText>
          </Box>
        </FlexibleBox>
      </SectionContainer>

      <div id="padding" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#margin-and-padding">
        Padding & Margin:
      </MyLabel>
      <SectionContainer>
        <Box p={2} bg={colors.mypurple} mb={3}>
          This <Mono>Box</Mono> has a padding setting of{" "}
          <Mono>
            <i>p={2}</i>
          </Mono>
        </Box>
        <Highlighter>{`<Box p={2} mb={3}>`}</Highlighter>
        <Box m={4} bg={colors.myblue} mb={3}>
          This <Mono>Box</Mono> has a margin setting of{" "}
          <Mono>
            <i>m={4}</i>
          </Mono>
        </Box>

        <Highlighter>{`<Box m={4} mb={3}>`}</Highlighter>
      </SectionContainer>

      <div id="colors" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#color-and-background-color">
        Background and Font Colors:
      </MyLabel>
      <SectionContainer>
        <VStack alignItems="left" spacing={4}>
          <Box bg="blue" p={2}>
            This <Mono>Box</Mono> has a <Mono>bg</Mono> of "blue".
          </Box>

          <Highlighter>{`<Box bg="blue">`}</Highlighter>

          <Box bg="green.700" p={2} color="white">
            This <Mono>Box</Mono> has a <Mono>bg of green.700</Mono> and a{" "}
            <Mono>color</Mono> (font) of "white".
          </Box>

          <Highlighter>{`<Box bg="green.700" color="white">`}</Highlighter>

          <Box backgroundColor="red.700" p={2}>
            This <Mono>Box</Mono> has a <Mono>backgroundColor</Mono> of{" "}
            <Mono>red.700</Mono> and a <Mono>color</Mono>. "#444444"
          </Box>
          <Highlighter>{`<Box backgroundColor="red.700">`}</Highlighter>
        </VStack>
      </SectionContainer>
      <div id="gradients" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#gradient">
        Gradients:
      </MyLabel>
      <SectionContainer>
        <VStack alignItems="left" spacing={4}>
          <Box
            w="100%"
            p={2}
            mb={3}
            bgGradient={"linear(to-t, green.700, pink.700)"}
            borderRadius={"sm"}
          >
            This <Mono>Box</Mono> has a <Mono>linear gradient</Mono> background.
          </Box>
          <Highlighter>{`<Box bgGradient={"linear(to-t, green.700, pink.700)"}>`}</Highlighter>

          <Box w="100%" p={2} bgGradient="radial(blue, yellow.700, pink.700)">
            This <Mono>Box</Mono> has a <Mono>radial gradient</Mono> background.
          </Box>
          <Highlighter>{`<Box bgGradient="radial(blue, yellow.700, pink.700)">`}</Highlighter>
        </VStack>
      </SectionContainer>
      <div id="fonts" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#typography">
        Font Effects:
      </MyLabel>
      <SectionContainer p={8}>
        <ExampleContainer bg={colors.mainBackground}>
          <VStack spacing={3} fontFamily="monospace" color="deeppink">
            <Text fontSize={32}>fontSize={32}</Text>
            <Highlighter>{`<Text fontSize={32}>`}</Highlighter>
            <Text fontSize="1.5em">fontSize="1.5em"</Text>
            <Highlighter>{`<Text fontSize="1.5em">`}</Highlighter>
            <Text fontSize="md">fontSize="md"</Text>
            <Highlighter>{`<Text fontSize="md">`}</Highlighter>
            <Text textTransform="uppercase">textTransform="uppercase"</Text>
            <Highlighter>{`<Text textTransform="uppercase">`}</Highlighter>
            <Text textTransform="capitalize">textTransform="capitalize"</Text>
            <Highlighter>{`<Text textTransform="capitalize">`}</Highlighter>
            <Text textTransform="lowercase">textTransform="lowercase"</Text>
            <Highlighter>{`<Text textTransform="lowercase">`}</Highlighter>
            <Text fontWeight="bold">fontWeight="bold"</Text>
            <Highlighter>{`<Text fontWeight="bold">`}</Highlighter>
            <Text textDecoration="underline">textDecoration="underline"</Text>
            <Highlighter>{`<Text textDecoration="underline">`}</Highlighter>
            <Text textDecoration="overline">textDecoration="overline"</Text>
            <Highlighter>{`<Text textDecoration="overline">`}</Highlighter>
            <Text textDecoration="line-through">
              textDecoration="line-through"
            </Text>
            <Highlighter>{`<Text textDecoration="line-through">`}</Highlighter>
          </VStack>
        </ExampleContainer>
      </SectionContainer>
      <div id="width_height" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height">
        Width & Height:
      </MyLabel>
      <SectionContainer>
        <FlexibleBox width="100%" height={12} bg={colors.myblue} paddingX={2}>
          <Mono>width="100%" height={12}</Mono>
        </FlexibleBox>
        <FlexibleBox w="100%" h="32px" bg={colors.myblue} paddingX={2}>
          <Mono> w="100%" h="32px"</Mono>{" "}
        </FlexibleBox>
        <FlexibleBox boxSize="sm" bg={colors.myblue} paddingX={2}>
          <Mono>boxSize="sm"</Mono>
        </FlexibleBox>
        <FlexibleBox w={256} bg={colors.myblue} paddingX={2}>
          <Mono>w={256}</Mono>
        </FlexibleBox>
        <FlexibleBox w="80px" bg={colors.myblue} paddingX={2} fontSize={12}>
          <Mono>w='80px'</Mono>
        </FlexibleBox>
      </SectionContainer>
      <div id="display" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#display">
        Display:
      </MyLabel>
      <Box>
        <SectionContainer>
          <BasicText>
            <Mono>display='none'</Mono> makes an element not appear. (The
            following element does not appear.)
          </BasicText>
        </SectionContainer>
        <FlexibleBox display="none">display='none'</FlexibleBox>
        <SectionContainer>
          <BasicText>
            The following only appears on medium and larger screens
          </BasicText>
          <FlexibleBox
            hideFrom="md"
            h="100px"
            bg={colors.mainBackground}
          ></FlexibleBox>

          <FlexibleBox
            display={{ base: "none", md: "block" }}
            h="100px"
            bg={colors.myblue}
            color={colors.mainText}
          >
            <Mono>base: "none", md: "block" </Mono>configuration sets the
            display property to "none" for smaller screens and "block" for
            screens that meet or exceed the <Mono>md</Mono> breakpoint. This
            allows for responsive behavior where the element is hidden on
            smaller screens and displayed as a block on larger screens.
          </FlexibleBox>
        </SectionContainer>

        <SectionContainer>
          <FlexibleBox
            h="125px"
            bg={colors.mainBackground}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <BasicText>
              The following small bar expands once the screen size reaches{" "}
              <b>md</b> or above.
            </BasicText>
            <FlexibleBox bg={colors.myblue} color={colors.mainText}>
              <Box hideBelow="md">
                <Mono>hideBelow='md'</Mono> prop on a Box component is a custom
                prop used to conditionally hide the component on screens smaller
                than the md breakpoint. This is the one that is creating the
                small bar that expands to be this text once the screen size
                reaches md or above.
              </Box>
            </FlexibleBox>
          </FlexibleBox>
        </SectionContainer>
        <SectionContainer>
          <BasicText>
            The following boxes only show on screens that are medium or smaller
          </BasicText>
          <FlexibleBox
            h="90px"
            bg={colors.mainBackground}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FlexibleBox
              display={{ base: "block", md: "none" }}
              bg={colors.myblue}
              color={colors.mainText}
            >
              <Mono>base: "block", md: "none"</Mono> - hide the element from
              'md' up
            </FlexibleBox>
            <FlexibleBox
              hideFrom="md"
              bg={colors.myblue}
              color={colors.mainText}
            >
              This box complete disappears at sizes of medium and higher.
            </FlexibleBox>
          </FlexibleBox>
        </SectionContainer>
      </Box>
      <div id="flexbox" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#flexbox">
        Flexbox:
      </MyLabel>
      <Box>
        <SectionContainer>
          <Highlighter>
            {`display="flex" alignItems="center" justifyContent="space-between"`}
          </Highlighter>

          <FlexibleBox
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
            bg={colors.myblue}
            color={colors.mainText}
          >
            <Text>Child One</Text>
            <Text>Child Two</Text>
            <Text>Child Three</Text>
          </FlexibleBox>
          <Flex
            bg={colors.mainAccent2}
            color="black"
            h="100px"
            align="center"
            justify="center"
          >
            <Highlighter>{`align="center" and justify="center"`}</Highlighter>{" "}
          </Flex>
        </SectionContainer>
        <div id="grid" />
        <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#grid-layout">
          Grid Layout
        </MyLabel>
        <FlexibleBox
          bg={colors.sectionColor}
          color={colors.mainText}
          display="grid"
          gridGap={2}
          gridAutoFlow="row dense"
          paddingX={4}
          paddingY={2}
          margin={4}
        >
          <BasicText>This container has the following values:</BasicText>
          <Highlighter>{`<Grid display="grid" gridGap={2} gridAutoFlow="row dense">`}</Highlighter>

          <p>
            <Mono>display="grid"</Mono>: This prop sets the display property of
            the Box component to "grid", enabling grid layout on the container.
          </p>
          <p>
            <Mono>
              gridGap=
              {2}
            </Mono>
            : This prop specifies the gap (or spacing) between grid items inside
            the container. The value 2 represents the spacing in Chakra UI's
            spacing scale, where 2 corresponds to 0.5rem by default.
          </p>
          <p>
            <Mono>gridAutoFlow="row dense"</Mono>: This prop controls how the
            grid items are automatically placed within the grid. Setting{" "}
            <Mono>gridAutoFlow</Mono>
            to <Mono>"row dense"</Mono> specifies that the grid items should be
            placed in rows, and the dense packing algorithm is used to fill the
            grid. The dense packing algorithm tries to fill empty spaces in the
            grid, ensuring a more compact layout. You can adjust the values of
            these props according to your specific layout requirements.
          </p>
          <p>
            Additionally, you can add child elements inside the Box component to
            represent the individual grid items within the grid layout.
          </p>
        </FlexibleBox>
        <Grid
          margin={4}
          gap={2}
          autoFlow="row dense"
          p={2}
          bg={colors.myblue}
          color={colors.mainText}
        >
          Grid using Chakra shorthand:{" "}
          <Highlighter>{`<Grid gap={2} autoFlow="row dense">`}</Highlighter>
        </Grid>
        <div id="background" />
        <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#background">
          Background
        </MyLabel>
        <SectionContainer>
          <Box>
            <p>The Following is a Box with background properties: </p>
            <Box paddingX={4} paddingBottom={4}>
              <Highlighter>{`backgroundImage="url('URL.png')"
backgroundPosition="center"
backgroundRepeat="no-repeat"
backgroundSize="cover"
h="200px"`}</Highlighter>
            </Box>
          </Box>

          <FlexibleBox
            backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            h="200px"
          ></FlexibleBox>
        </SectionContainer>

        <SectionContainer>
          <Box>
            <p>The Following is a the short hand version of the same: </p>
            <Box paddingX={4} paddingBottom={4}>
              <Highlighter>{`bgImage="url('URL.png')"
bgPosition="center" 
bgRepeat="no-repeat"
bgSize="cover"
h="200px"`}</Highlighter>
            </Box>
          </Box>
          <Box
            bgImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="cover"
            h="200px"
          />
        </SectionContainer>
        <SectionContainer>
          <Box>
            <p>Let's try some different values to see their effects: </p>
            <Box paddingX={4} paddingBottom={4}>
              <Highlighter>{`h="400px"`}</Highlighter>
            </Box>
          </Box>
          <Box
            bgImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="cover"
            h="400px"
          />
        </SectionContainer>
      </Box>
      <div id="borders" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#borders">
        Borders:
      </MyLabel>
      <FlexibleBox
        border="2px"
        fontSize={16}
        bg={colors.myblue}
        borderColor="yellow.200"
        h="60px"
        marginTop={4}
        color={colors.mainText}
      >
        <Highlighter>{`<Box 2px border borderColor="yellow.200">`}</Highlighter>
      </FlexibleBox>
      <div id="border_radius" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#border-radius">
        Border Radius:
      </MyLabel>
      <Box>
        <SectionContainer>
          <BasicText>
            Button with <Mono>RightRadius="0"</Mono>, creating no border radius
            on right, but default settings on left.
          </BasicText>
          <Button borderRightRadius="0" mb={4} w="150px">
            Button 1
          </Button>
          <BasicText>
            Button with <Mono>LeftRadius="0"</Mono>, creating no border radius
            on left, but default settings on right.
          </BasicText>
          <Button borderLeftRadius="0" mb={4} w="150px">
            Button 2
          </Button>
          <BasicText>
            Button with <Mono>TopRadius="0"</Mono>, creating no border radius on
            top, but default settings on bottom.
          </BasicText>
          <Button borderTopRadius="0" mb={4} w="150px">
            Button 3
          </Button>
          <BasicText>
            Button with <Mono>borderBottomRadius="0"</Mono>, creating no border
            radius on bottom, but default settings on top.
          </BasicText>
          <Button borderBottomRadius="0" mb={4} w="150px">
            Button 4
          </Button>
        </SectionContainer>
        <Box h="auto">
          {" "}
          <div id="position" />
          <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#position">
            Position:
          </MyLabel>
          <SectionContainer>
            <Box
              w="100%"
              h="75px"
              bg={colors.mainAccent2}
              mb={3}
              position="relative"
            >
              <FlexibleBox position="absolute" bg={colors.myblue}>
                <Mono>position="absolute"</Mono>
              </FlexibleBox>
            </Box>
            <Box
              w="100%"
              h="75px"
              bg={colors.mainAccent2}
              mb={3}
              position="relative"
            >
              <FlexibleBox pos="absolute" bg={colors.myblue}>
                <Mono>pos="absolute"</Mono>
              </FlexibleBox>
            </Box>
            <Box
              w="100%"
              h="75px"
              position="relative"
              bg={colors.mainAccent2}
              mb={3}
            >
              <FlexibleBox
                pos="absolute"
                top="3"
                left="3"
                bg={colors.myblue}
                color={colors.mainText}
              >
                Absolute (in relation to parent, which is set to relative) with{" "}
                <Mono>top="3"</Mono> and <Mono>left="3"</Mono>
              </FlexibleBox>
            </Box>
            <FlexibleBox p={4}>
              <p>
                <b>Fixed positioning</b>is a CSS property that allows an element
                to be positioned relative to the viewport, meaning it remains in
                a fixed position even when the page is scrolled. The element is
                taken out of the normal document flow and does not affect the
                position of other elements.
              </p>
              <br />
              <p>
                <b>zIndex</b> is a CSS property that determines the stacking
                order of positioned elements on a webpage. It specifies the
                z-axis (vertical) order in which elements are stacked and
                displayed on top of each other. Elements with a higher zIndex
                value appear in front of elements with a lower zIndex value. It
                is commonly used to control the layering and overlapping of
                elements on a page, allowing you to control which elements are
                visually in front of others.
              </p>
            </FlexibleBox>
          </SectionContainer>
        </Box>

        <div id="shadow" />
        <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#shadow">
          Shadow:
        </MyLabel>
        <SimpleGrid
          bg="white"
          justifyContent="center"
          alignContent="center"
          columns={2}
          spacing={8}
          p="10"
          fontSize={16}
          marginTop={4}
          textAlign="center"
          rounded="lg"
        >
          <Box margin={5} boxShadow="xs" p="5" rounded="sm" bg={colors.myblue}>
            <Mono>boxShadow="xs"</Mono>
          </Box>
          <Box margin={5} boxShadow="sm" p="5" rounded="sm" bg={colors.myblue}>
            <Mono> boxShadow="sm"</Mono>
          </Box>
          <Box
            margin={5}
            boxShadow="base"
            p="5"
            rounded="sm"
            bg={colors.myblue}
          >
            <Mono> boxShadow="base"</Mono>
          </Box>
          <Box margin={5} boxShadow="md" p="5" rounded="sm" bg={colors.myblue}>
            <Mono> boxShadow="md"</Mono>
          </Box>
          <Box margin={5} boxShadow="lg" p="5" rounded="sm" bg={colors.myblue}>
            <Mono> boxShadow="lg"</Mono>
          </Box>
          <Box margin={5} boxShadow="xl" p="5" rounded="sm" bg={colors.myblue}>
            <Mono> boxShadow="xl"</Mono>
          </Box>
          <Box margin={5} boxShadow="2xl" p="5" rounded="sm" bg={colors.myblue}>
            <Mono> boxShadow="2xl"</Mono>
          </Box>
          <Box
            margin={5}
            boxShadow="dark-lg"
            p="5"
            rounded="sm"
            bg={colors.myblue}
          >
            <Mono> {`boxShadow="dark-lg"`}</Mono>
          </Box>
          <Box
            margin={5}
            boxShadow="outline"
            p="5"
            rounded="sm"
            bg={colors.myblue}
          >
            <Mono> {`boxShadow="outline"`}</Mono>
          </Box>
          <Box
            margin={5}
            boxShadow="inner"
            p="5"
            rounded="sm"
            bg={colors.myblue}
          >
            <Mono> {`boxShadow="inner"`}</Mono>
          </Box>
        </SimpleGrid>
        <Box mt={5}>
          <BasicText>
            Text With Shadows: The blue portion below is the result of the{" "}
            <Mono>boxShadow</Mono> setting.
          </BasicText>
        </Box>

        <FlexibleBox>
          <Text color="white" textShadow="2px 2px blue" m="3" fontSize={28}>
            <Mono>textShadow="2px 2px red"</Mono>
          </Text>
        </FlexibleBox>
      </Box>
      <div id="filter" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#filter">
        Filter:
      </MyLabel>
      <SectionContainer fontSize={16}>
        <BasicText>
          Note: To apply <Mono>blur</Mono>, <Mono>brightness</Mono>,{" "}
          <Mono>contrast</Mono>, <Mono>hueRotate</Mono>, <Mono>invert</Mono>,{" "}
          <Mono>saturate</Mono> props on the element, set <Mono>filter</Mono>{" "}
          prop value to "auto".
        </BasicText>
        <Box>
          <Filters />
        </Box>
      </SectionContainer>
      <SectionContainer>
        <Box marginY={3}>
          <BasicText size="20px" color={colors.mainAccent2}>
            <b>Backdrop Filters</b>
          </BasicText>
          <BackdropFilters />
        </Box>
        <BasicText>
          🚨 backdrop-filter is not supported in Firefox. It can be enabled by
          the user, but it is suggested to design a component that looks good
          with and without this property.
        </BasicText>
        <BasicText>
          Note: To apply <b>backdropBlur</b>, <b>backdropBrightness</b>,{" "}
          <b>backdropContrast</b>,<b>backdropHueRotate</b>,{" "}
          <b>backdropInvert</b>, or <b>backdropSaturate</b> props on the
          element, set <b>backdropFilter</b> prop value to "auto".
        </BasicText>
      </SectionContainer>
      <div id="pseudo" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#psuedo">
        Pseudo:
      </MyLabel>
      <SectionContainer fontSize={16}>
        <Box>
          <VStack w="100%">
            <ExampleContainer>
              <Button
                colorScheme="teal"
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
              >
                Hover me
              </Button>
            </ExampleContainer>
            <Highlighter>
              {`colorScheme="teal" _hover= background: "white", color: "teal.500"`}
            </Highlighter>
          </VStack>
          <br />
          <VStack w="100%" mt={5}>
            <Box role="group" w="100%">
              <ExampleContainer bg={colors.myblue} color={colors.mainText}>
                <FlexibleBox w="100px">
                  <Box
                    _hover={{ fontWeight: "semibold" }}
                    _groupHover={{ color: "purple" }}
                  >
                    Text
                  </Box>
                </FlexibleBox>
                <Highlighter>{`<Box role="group>
  <Box _hover= fontWeight: "semibold" _groupHover= color: "purple"">
  </Box>
</Box>`}</Highlighter>
              </ExampleContainer>
            </Box>
          </VStack>
          <VStack w="100%" mt={5}>
            <ExampleContainer color={colors.secondaryText}>
              <Box
                _before={{
                  content: '"🙂"',
                  display: "inline-block",
                  mr: "5px",
                }}
              >
                A pseudo element
              </Box>
            </ExampleContainer>

            <Highlighter>{`<Box _before = content: '"🙂"', display: "inline-block", mr: "5px">`}</Highlighter>
          </VStack>
        </Box>
      </SectionContainer>
      <div id="as_prop" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#the-as-prop">
        The as Prop:
      </MyLabel>
      <SectionContainer>
        <VStack w="100%" mt={5} fontSize={16}>
          <ExampleContainer bg={colors.myblue}>
            <Box>
              <Button
                as="a"
                target="_blank"
                variant="outline"
                href="https://www.evanmarie.com"
                color="pink"
                mb={4}
              >
                Hello
              </Button>
            </Box>
            <Highlighter>{`<Button
  as="a"
  target="_blank"
  variant="outline"
  href="https://www.evanmarie.com"
  color="pink"
>
  Hello
</Button>`}</Highlighter>
          </ExampleContainer>
        </VStack>
      </SectionContainer>
      <HorizontalLine />
    </BigBackgroundBox>
  );
}

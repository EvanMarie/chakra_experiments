import {
  Box,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  BasicText,
  BigBackgroundBox,
  MyLabel,
  colors,
  FlexibleBox,
  MyHeading,
  Mono,
  HorizontalLine,
} from "~/styles/reusableChakraComponents";

import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import BackdropFilters from "~/components/image_filters2";
import Filters from "~/components/image_filters";
import { PageHeader, StyleMenuBar } from "~/components/MenuBars";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <VStack>
        <PageHeader title="Chakra Styles" href="/chakra_styles" />
        <StyleMenuBar />
      </VStack>

      <div id="padding" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#margin-and-padding">
        Padding and Margin:
      </MyLabel>
      <Box p={2} bg={colors.mainAccent2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a padding setting of
        <b>
          <i>p={2}</i>
        </b>
      </Box>
      <Box m={4} bg={colors.mainAccent2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a margin setting of{" "}
        <b>
          <i>m={4}</i>
        </b>
      </Box>
      <div id="colors" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#color-and-background-color">
        Background and Font Colors:
      </MyLabel>
      {/* Begin the examples */}
      <Box bg="tomato" p={2} mb={3}>
        This <b>Box</b> has a <b>bg of tomato</b>.
      </Box>

      <Box bg="green.200" p={2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a <b>bg of green.200</b> and a{" "}
        <b>color (font) of "black"</b>.
      </Box>

      <Box backgroundColor="red.400" p={2} mb={3} color={colors.secondaryText}>
        This <b>Box</b> has a <b>backgroundColor of red.400</b> and a{" "}
        <b>color (font) of "#444444"</b>.
      </Box>
      <div id="gradients" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#gradient">
        Gradients:
      </MyLabel>
      <Box
        w="100%"
        p={2}
        mb={3}
        bgGradient={"linear(to-t, green.200, pink.500)"}
        borderRadius={"sm"}
        color="black"
      >
        This <b>Box</b> has a <b>linear gradient</b> background.
      </Box>

      <Box
        w="100%"
        p={2}
        bgGradient="radial(cyan, yellow.400, pink.200)"
        color="black"
      >
        This <b>Box</b> has a <b>radial gradient</b> background.
      </Box>
      <div id="fonts" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#typography">
        Font Effects:
      </MyLabel>
      <Box
        paddingX={3}
        paddingY={1}
        bg={colors.secondaryBackground}
        borderRadius="sm"
      >
        <ul style={{ margin: "0px 10px" }}>
          <li>
            <Text fontSize={32}>fontSize={32}</Text>
          </li>
          <li>
            <Text fontSize="1.5em">fontSize="1.5em"</Text>
          </li>
          <li>
            <Text fontSize="md">fontSize="md"</Text>
          </li>
          <li>
            <Text textTransform="uppercase">textTransform="uppercase"</Text>
          </li>
          <li>
            <Text textTransform="lowercase">textTransform="lowercase"</Text>
          </li>
          <li>
            <Text textDecoration="underline">textDecoration="underline"</Text>
          </li>
          <li>
            <Text textDecoration="overline">textDecoration="overline"</Text>
          </li>
          <li>
            <Text textDecoration="line-through">
              textDecoration="line-through"
            </Text>
          </li>
        </ul>
      </Box>
      <div id="width_height" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height">
        Width & Height:
      </MyLabel>

      <FlexibleBox width="100%" height={12}>
        width="100% height={12}
      </FlexibleBox>
      <FlexibleBox w="100%" h="32px">
        w="100%" h="32px"{" "}
      </FlexibleBox>
      <FlexibleBox boxSize="sm">boxSize="sm"</FlexibleBox>
      <FlexibleBox w={256}>w={256}</FlexibleBox>
      <FlexibleBox w="40px">w='40px'</FlexibleBox>
      <div id="display" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#display">
        Display:
      </MyLabel>
      <Box>
        <BasicText>
          display='none' makes an element not appear. (The following element
          does not appear.)
        </BasicText>
        <FlexibleBox display="none">display='none'</FlexibleBox>
        <BasicText>
          The following only appears on medium and larger screens
        </BasicText>
        <FlexibleBox
          hideFrom="md"
          h="100px"
          bg={colors.mainBackground}
        ></FlexibleBox>
        <FlexibleBox display={{ base: "none", md: "block" }} h="100px">
          base: "none", md: "block" configuration sets the display property to
          "none" for smaller screens and "block" for screens that meet or exceed
          the md breakpoint. This allows for responsive behavior where the
          element is hidden on smaller screens and displayed as a block on
          larger screens.
        </FlexibleBox>
        <FlexibleBox h="125px" bg={colors.mainBackground}>
          <BasicText>
            The following small bar expands once the screen size reaches md or
            above.
          </BasicText>
          <FlexibleBox>
            <Box hideBelow="md">
              hideBelow='md' prop on a Box component is a custom prop used to
              conditionally hide the component on screens smaller than the md
              breakpoint. This is the one that is creating the small bar that
              expands to be this text once the screen size reaches md or above.
            </Box>
          </FlexibleBox>
        </FlexibleBox>

        <BasicText>
          The following boxes only show on screens that are medium or smaller
        </BasicText>
        <FlexibleBox h="100px" bg={colors.mainBackground}>
          <FlexibleBox display={{ base: "block", md: "none" }}>
            base: "block", md: "none" - hide the element from 'md' up
          </FlexibleBox>
          <FlexibleBox hideFrom="md">
            This box complete disappears at sizes of medium and higher.
          </FlexibleBox>
        </FlexibleBox>
      </Box>
      <div id="flexbox" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#flexbox">
        Flexbox:
      </MyLabel>
      <Box>
        <BasicText>
          display="flex" alignItems="center" justifyContent="space-between"
        </BasicText>

        <FlexibleBox
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Child One</Text>
          <Text>Child Two</Text>
          <Text>Child Three</Text>
        </FlexibleBox>
        <Flex bg={colors.mainAccent4} align="center" justify="center">
          Flex Chakra component with align="center" and justify="center"
        </Flex>
        <div id="grid" />
        <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#grid-layout">
          Grid Layout
        </MyLabel>
        <FlexibleBox display="grid" gridGap={2} gridAutoFlow="row dense">
          <p>Grid: display="grid" gridGap={2} gridAutoFlow="row dense"</p>
          <p>
            <b>display="grid"</b>: This prop sets the display property of the
            Box component to "grid", enabling grid layout on the container.
          </p>
          <p>
            <b>
              gridGap=
              {2}
            </b>
            : This prop specifies the gap (or spacing) between grid items inside
            the container. The value 2 represents the spacing in Chakra UI's
            spacing scale, where 2 corresponds to 0.5rem by default.
          </p>
          <p>
            <b>gridAutoFlow="row dense"</b>: This prop controls how the grid
            items are automatically placed within the grid. Setting gridAutoFlow
            to "row dense" specifies that the grid items should be placed in
            rows, and the dense packing algorithm is used to fill the grid. The
            dense packing algorithm tries to fill empty spaces in the grid,
            ensuring a more compact layout. You can adjust the values of these
            props according to your specific layout requirements.
          </p>
          <p>
            Additionally, you can add child elements inside the Box component to
            represent the individual grid items within the grid layout.
          </p>
        </FlexibleBox>
        <Grid
          gap={2}
          autoFlow="row dense"
          bg={colors.mainAccent2}
          color={colors.secondaryText}
        >
          Grid using Chakra shorthand: Grid gap={2} autoFlow="row dense"
        </Grid>
        <div id="background" />
        <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#background">
          Background
        </MyLabel>
        <Box>
          <p>The Following is a Box with background properties: </p>
          <p>backgroundImage="url('URL.png')"</p>
          <p>backgroundPosition="center"</p>{" "}
          <p> backgroundRepeat="no-repeat"</p>
          <p> backgroundSize="cover"</p> <p> h="200px"</p>
        </Box>

        <FlexibleBox
          backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          h="200px"
        ></FlexibleBox>

        <Box>
          <p>The Following is a the short hand version of the same: </p>
          <p>bgImage="url('URL.png')"</p>
          <p>bgPosition="center" </p>
          <p>bgRepeat="no-repeat"</p>
          <p> bgSize="cover"</p> <p>h="200px"</p>
        </Box>
        <Box
          bgImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          backgroundSize="cover"
          h="200px"
        />
      </Box>
      <div id="borders" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#borders">
        Borders:
      </MyLabel>
      <FlexibleBox border="2px" borderColor="yellow.200">
        Box with 2px border, borderColor="yellow.200"
      </FlexibleBox>
      <div id="border_radius" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#border-radius">
        Border Radius:
      </MyLabel>
      <Box>
        <BasicText>
          Button with RightRadius="0", creating no border radius on right, but
          default settings on left.
        </BasicText>
        <Button borderRightRadius="0" mb={4}>
          Button 1
        </Button>
        <BasicText>
          Button with LeftRadius="0", creating no border radius on left, but
          default settings on right.
        </BasicText>
        <Button borderLeftRadius="0" mb={4}>
          Button 2
        </Button>
        <BasicText>
          Button with TopRadius="0", creating no border radius on top, but
          default settings on bottom.
        </BasicText>
        <Button borderTopRadius="0" mb={4}>
          Button 2
        </Button>
        <BasicText>
          Button with borderBottomRadius="0", creating no border radius on
          bottom, but default settings on top.
        </BasicText>
        <Button borderBottomRadius="0" mb={4}>
          Button 2
        </Button>
        <Box h="auto">
          {" "}
          <div id="position" />
          <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#position">
            Position:
          </MyLabel>
          <Box
            w="100%"
            h="75px"
            bg={colors.mainAccent4}
            mb={3}
            position="relative"
          >
            <FlexibleBox position="absolute">position="absolute"</FlexibleBox>
          </Box>
          <Box
            w="100%"
            h="75px"
            bg={colors.mainAccent4}
            mb={3}
            position="relative"
          >
            <FlexibleBox pos="absolute">pos="absolute"</FlexibleBox>
          </Box>
          <Box
            w="100%"
            h="75px"
            position="relative"
            bg={colors.mainAccent4}
            mb={3}
          >
            <FlexibleBox pos="absolute" top="3" left="3">
              Absolute (in relation to parent, which is set to relative) with
              top="3" and left="3"
            </FlexibleBox>
          </Box>
          <FlexibleBox>
            <p>
              <b>Fixed positioning</b>is a CSS property that allows an element
              to be positioned relative to the viewport, meaning it remains in a
              fixed position even when the page is scrolled. The element is
              taken out of the normal document flow and does not affect the
              position of other elements.
            </p>
            <br />
            <p>
              <b>zIndex</b> is a CSS property that determines the stacking order
              of positioned elements on a webpage. It specifies the z-axis
              (vertical) order in which elements are stacked and displayed on
              top of each other. Elements with a higher zIndex value appear in
              front of elements with a lower zIndex value. It is commonly used
              to control the layering and overlapping of elements on a page,
              allowing you to control which elements are visually in front of
              others.
            </p>
          </FlexibleBox>
        </Box>
        <div id="shadow" />
        <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#shadow">
          Shadow:
        </MyLabel>
        <SimpleGrid
          bg="gray.50"
          columns={{ sm: 2, md: 4 }}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.400"
        >
          <Box
            boxShadow="xs"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="xs"
          </Box>
          <Box
            boxShadow="sm"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="sm"
          </Box>
          <Box
            boxShadow="base"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="base"
          </Box>
          <Box
            boxShadow="md"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="md"
          </Box>
          <Box
            boxShadow="lg"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="lg"
          </Box>
          <Box
            boxShadow="xl"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="xl"
          </Box>
          <Box
            boxShadow="2xl"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="2xl"
          </Box>
          <Box
            boxShadow="dark-lg"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="dark-lg"
          </Box>
          <Box
            boxShadow="outline"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="outline"
          </Box>
          <Box
            boxShadow="inner"
            p="6"
            rounded="md"
            bg={colors.mainAccent3}
            color="black"
          >
            boxShadow="inner"
          </Box>
        </SimpleGrid>
        <Box mt={5}>
          <BasicText>Text With Shadows:</BasicText>
        </Box>

        <FlexibleBox>
          <Text textShadow="2px 2px red" m="3" fontSize={20}>
            Text with shadows: textShadow="2px 2px red"
          </Text>
        </FlexibleBox>
      </Box>
      <div id="filter" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#filter">
        Filter:
      </MyLabel>
      <BasicText>
        Note: To apply blur, brightness, contrast, hueRotate, invert, saturate
        props on the element, set filter prop value to "auto".
      </BasicText>
      <Box>
        <Filters />
      </Box>
      <Box marginY={3}>
        <BasicText size={20} color={colors.mainAccent2}>
          Backdrop Filters
        </BasicText>
        <BackdropFilters />
      </Box>
      <BasicText>
        🚨 backdrop-filter is not supported in Firefox. It can be enabled by the
        user, but it is suggested to design a component that looks good with and
        without this property.
      </BasicText>
      <BasicText>
        Note: To apply backdropBlur, backdropBrightness, backdropContrast,
        backdropHueRotate, backdropInvert, backdropSaturate props on the
        element, set backdropFilter prop value to "auto".
      </BasicText>
      <div id="pseudo" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#psuedo">
        Pseudo:
      </MyLabel>
      <Box>
        <VStack w="100%">
          <Mono>
            colorScheme="teal" _hover= background: "white", color: "teal.500"
          </Mono>

          <Button
            colorScheme="teal"
            _hover={{
              background: "white",
              color: "teal.500",
            }}
          >
            Hover me
          </Button>
        </VStack>
        <br />
        <VStack w="100%" mt={5}>
          <BasicText>A Chakra Box with:</BasicText>
          <Mono>
            _hover= fontWeight: "semibold" _groupHover= color: "purple"
          </Mono>
          <Box role="group">
            <FlexibleBox w="100px">
              <Box
                _hover={{ fontWeight: "semibold" }}
                _groupHover={{ color: "purple" }}
              >
                Text
              </Box>
            </FlexibleBox>
          </Box>
        </VStack>
        <VStack w="100%" mt={5}>
          <BasicText>A Chakra Box with:</BasicText>
          <Mono>
            _before = content: '"🙂"', display: "inline-block", mr: "5px"{" "}
          </Mono>
          <Box
            _before={{ content: '"🙂"', display: "inline-block", mr: "5px" }}
          >
            A pseudo element
          </Box>
        </VStack>
      </Box>
      <div id="as_prop" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#the-as-prop">
        The as Prop:
      </MyLabel>
      <VStack w="100%" mt={5}>
        <Mono>
          Button as="a" target="_blank" variant="outline"
          href="https://chakra-ui.com" color="pink"
        </Mono>
        <Box>
          <Button
            as="a"
            target="_blank"
            variant="outline"
            href="https://chakra-ui.com"
            color="pink"
          >
            Hello
          </Button>
        </Box>
      </VStack>
      <HorizontalLine />
      <StyleMenuBar />
    </BigBackgroundBox>
  );
}

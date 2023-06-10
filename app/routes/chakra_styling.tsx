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
  Mono,
  HorizontalLine,
  SectionContainer,
  ExampleContainer,
} from "~/styles/reusableChakraComponents";

import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { Filters, BackdropFilters } from "~/components/styling/imageFilters";
import { PageHeader, StyleMenuBar } from "~/components/app_components/menuBars";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <VStack>
        <PageHeader title="Chakra Styling" href="/chakra_styling" />
        <StyleMenuBar />
      </VStack>

      <div id="padding" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#margin-and-padding">
        Padding and Margin:
      </MyLabel>
      <SectionContainer>
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
      </SectionContainer>

      <div id="colors" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#color-and-background-color">
        Background and Font Colors:
      </MyLabel>
      <SectionContainer>
        <Box bg="tomato" p={2} mb={3}>
          This <b>Box</b> has a <b>bg of tomato</b>.
        </Box>

        <Box bg="green.200" p={2} mb={3} color={colors.secondaryText}>
          This <b>Box</b> has a <b>bg of green.200</b> and a{" "}
          <b>color (font) of "black"</b>.
        </Box>

        <Box
          backgroundColor="red.400"
          p={2}
          mb={3}
          color={colors.secondaryText}
        >
          This <b>Box</b> has a <b>backgroundColor of red.400</b> and a{" "}
          <b>color (font) of "#444444"</b>.
        </Box>
      </SectionContainer>
      <div id="gradients" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#gradient">
        Gradients:
      </MyLabel>
      <SectionContainer>
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
      </SectionContainer>
      <div id="fonts" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#typography">
        Font Effects:
      </MyLabel>
      <SectionContainer>
        <VStack spacing={4}>
          <Text fontSize={32}>fontSize={32}</Text>
          <Text fontSize="1.5em">fontSize="1.5em"</Text>
          <Text fontSize="md">fontSize="md"</Text>
          <Text textTransform="uppercase">textTransform="uppercase"</Text>
          <Text textTransform="lowercase">textTransform="lowercase"</Text>
          <Text textDecoration="underline">textDecoration="underline"</Text>
          <Text textDecoration="overline">textDecoration="overline"</Text>
          <Text textDecoration="line-through">
            textDecoration="line-through"
          </Text>
        </VStack>
      </SectionContainer>
      <div id="width_height" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height">
        Width & Height:
      </MyLabel>
      <SectionContainer>
        <FlexibleBox width="100%" height={12}>
          width="100%" height={12}
        </FlexibleBox>
        <FlexibleBox w="100%" h="32px">
          w="100%" h="32px"{" "}
        </FlexibleBox>
        <FlexibleBox boxSize="sm">boxSize="sm"</FlexibleBox>
        <FlexibleBox w={256}>w={256}</FlexibleBox>
        <FlexibleBox w="40px">w='40px'</FlexibleBox>
      </SectionContainer>
      <div id="display" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#display">
        Display:
      </MyLabel>
      <Box>
        <SectionContainer>
          <BasicText>
            display='none' makes an element not appear. (The following element
            does not appear.)
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

          <FlexibleBox display={{ base: "none", md: "block" }} h="100px">
            <b>base: "none", md: "block" </b>configuration sets the display
            property to "none" for smaller screens and "block" for screens that
            meet or exceed the <b>md</b> breakpoint. This allows for responsive
            behavior where the element is hidden on smaller screens and
            displayed as a block on larger screens.
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
            <FlexibleBox>
              <Box hideBelow="md">
                <b>hideBelow='md'</b> prop on a Box component is a custom prop
                used to conditionally hide the component on screens smaller than
                the md breakpoint. This is the one that is creating the small
                bar that expands to be this text once the screen size reaches md
                or above.
              </Box>
            </FlexibleBox>
          </FlexibleBox>
        </SectionContainer>
        <SectionContainer>
          <BasicText>
            The following boxes only show on screens that are medium or smaller
          </BasicText>
          <FlexibleBox
            h="100px"
            bg={colors.mainBackground}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FlexibleBox display={{ base: "block", md: "none" }}>
              <b>base: "block", md: "none"</b> - hide the element from 'md' up
            </FlexibleBox>
            <FlexibleBox hideFrom="md">
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
          <Mono>
            display="flex" alignItems="center" justifyContent="space-between"
          </Mono>

          <FlexibleBox
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Text>Child One</Text>
            <Text>Child Two</Text>
            <Text>Child Three</Text>
          </FlexibleBox>
          <Flex
            bg={colors.mainAccent2}
            color="black"
            align="center"
            justify="center"
          >
            This is a Flex Chakra component with align="center" and
            justify="center"
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
          <p>
            {" "}
            <Mono>
              Grid: display="grid" gridGap={2} gridAutoFlow="row dense"
            </Mono>
          </p>
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
          bg={colors.mainAccent2}
          color={colors.secondaryText}
        >
          Grid using Chakra shorthand: <b>Grid gap={2} autoFlow="row dense"</b>
        </Grid>
        <div id="background" />
        <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#background">
          Background
        </MyLabel>
        <SectionContainer>
          <Box>
            <p>The Following is a Box with background properties: </p>
            <Box paddingX={4} paddingBottom={4}>
              <Mono>backgroundImage="url('URL.png')"</Mono>
              <br />
              <Mono>backgroundPosition="center"</Mono> <br />
              <Mono> backgroundRepeat="no-repeat"</Mono>
              <br />
              <Mono> backgroundSize="cover"</Mono> <br />
              <Mono> h="200px"</Mono>
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
              <Mono>bgImage="url('URL.png')"</Mono>
              <br />
              <Mono>bgPosition="center" </Mono>
              <br />
              <Mono>bgRepeat="no-repeat"</Mono>
              <br />
              <Mono> bgSize="cover"</Mono>
              <br /> <Mono>h="200px"</Mono>
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
              <Mono>h="400px"</Mono>
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
      <FlexibleBox border="2px" borderColor="yellow.200" marginTop={4}>
        Box with <b>2px border, borderColor="yellow.200"</b>
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
            <Mono> boxShadow="dark-lg"</Mono>
          </Box>
          <Box
            margin={5}
            boxShadow="outline"
            p="5"
            rounded="sm"
            bg={colors.myblue}
          >
            <Mono> boxShadow="outline"</Mono>
          </Box>
          <Box
            margin={5}
            boxShadow="inner"
            p="5"
            rounded="sm"
            bg={colors.myblue}
          >
            <Mono> boxShadow="inner"</Mono>
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
          <BasicText size={20} color={colors.mainAccent2}>
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
            <Mono>
              colorScheme="teal" _hover= background: "white", color: "teal.500"
            </Mono>
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
          </VStack>
          <br />
          <VStack w="100%" mt={5}>
            <BasicText>
              A Chakra Box with <Mono>role="group"</Mono> for the container and:
            </BasicText>
            <Mono>
              _hover= fontWeight: "semibold" _groupHover= color: "purple"
            </Mono>
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
              </ExampleContainer>
            </Box>
          </VStack>
          <VStack w="100%" mt={5}>
            <BasicText>A Chakra Box with:</BasicText>
            <Mono>
              _before = content: '"🙂"', display: "inline-block", mr: "5px"{" "}
            </Mono>
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
          </VStack>
        </Box>
      </SectionContainer>
      <div id="as_prop" />
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#the-as-prop">
        The as Prop:
      </MyLabel>
      <SectionContainer>
        <VStack w="100%" mt={5} fontSize={16}>
          <Mono>
            Button as="a" target="_blank" variant="outline"
            href="https://chakra-ui.com" color="pink"
          </Mono>
          <ExampleContainer bg={colors.myblue}>
            <Box>
              <Button
                as="a"
                target="_blank"
                variant="outline"
                href="https://www.evanmarie.com"
                color="pink"
              >
                Hello
              </Button>
            </Box>
          </ExampleContainer>
        </VStack>
      </SectionContainer>
      <HorizontalLine />
      <StyleMenuBar />
    </BigBackgroundBox>
  );
}

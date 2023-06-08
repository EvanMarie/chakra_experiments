import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import { StyleButtonBar } from "~/components/ButtonBar";
import stylesUrl from "~/styles/global.css";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyHeading,
  MyLabel,
  colors,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <StyleButtonBar />
      <MyHeading>Chakra Borders & Shadows Styling:</MyHeading>
      <BasicText>
        Borders, Border Radius, Position, Shadow, and Text with Shadows.
      </BasicText>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#borders">
        Borders:
      </MyLabel>
      <FlexibleBox border="2px" borderColor="yellow.200">
        Box with 2px border, borderColor="yellow.200"
      </FlexibleBox>
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
        <StyleButtonBar />
      </Box>
    </BigBackgroundBox>
  );
}

import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  HL,
  Mono,
  MyDivider,
  colors,
} from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  MyLabel,
  SectionContainer,
  ImportBox,
  MainGrid,
  GridColumn,
  HighlightColumn,
  GridBoxOne,
  GridBoxTwo,
  GridBoxThree,
  SingleExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#color-and-background-color">
        Color
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <BasicText color={colors.mainAccent3}>
                ⦾ In Chakra UI, the design and styling of components are very
                flexible. You can control the color of your components (both
                background and text color) in a variety of ways. Chakra UI has a
                built-in theme object to specify color, and you can access color
                scales to apply a consistent design across your application.
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Background color</HL>: You can control the background
                    color of a component using the <Mono>bg</Mono> or{" "}
                    <Mono>backgroundColor</Mono> prop.
                  </li>
                  <li>
                    <HL>Font color</HL>: You can control the text color of a
                    component using the <Mono>color</Mono> prop.
                  </li>
                  <li>
                    <HL>CSS colors</HL>: Colors in Chakra UI aren't just limited
                    to the built-in color palette. You can use any valid CSS
                    color name, a hex color code, an rgb value, etc.
                  </li>
                  <li>
                    <HL>Responsive design</HL>: When using color props in Chakra
                    UI, you can also use responsive arrays to specify different
                    values for different breakpoints.
                  </li>
                </ul>
              </BulletBox>
              <DescriptionBox>
                <BasicText>
                  Additionally, Chakra UI has support for color modes (light and
                  dark), allowing you to dynamically adjust the color of
                  components based on the user's color scheme preference. This
                  is controlled by the <Mono>useColorMode</Mono> hook and the{" "}
                  <Mono>ColorModeProvider</Mono> component, and you can use the{" "}
                  <Mono>colorScheme</Mono> prop in many components to
                  automatically adjust their color based on the current color
                  mode.
                </BasicText>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    Top import the <Mono>Box</Mono> and <Mono>Text</Mono>
                    components used below:
                  </BasicText>
                  <Highlighter>{`import { Box, Text } from "@chakra-ui/react";`}</Highlighter>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Box bg="blue" p={2}>
                  This <Mono>Box</Mono> has a <Mono>bg</Mono> of "blue".
                </Box>

                <Highlighter>{`<Box bg="blue">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box bg="green.700" p={2} color="white">
                  This <Mono>Box</Mono> has a <Mono>bg of green.700</Mono> and a{" "}
                  <Mono>color</Mono> (font) of "white".
                </Box>

                <Highlighter>{`<Box bg="green.700" color="white">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box backgroundColor="red.700" p={2}>
                  This <Mono>Box</Mono> has a <Mono>backgroundColor</Mono> of{" "}
                  <Mono>red.700</Mono>.
                </Box>

                <Highlighter>{`<Box backgroundColor="red.700">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box bg="teal.500">This is a box with a background color</Box>

                <Highlighter>{`<Box bg="teal.500">`}</Highlighter>
                <BasicText>
                  In this example, <Mono>teal.500 </Mono>is a color from the
                  Chakra UI color palette, and it applies to the Box's
                  background.
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text color="teal.500">
                  This is some text with a color of <Mono>teal.500</Mono>
                </Text>

                <Highlighter>{`<Text color="teal.500">`}</Highlighter>
                <BasicText>
                  Here, <Mono>teal.500</Mono> is applied as the text color.
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box bg="#F0F0F0" color="black" p={2}>
                  {" "}
                  A Box{" "}
                </Box>
                <Text color="rgb(255, 255, 255)"> Some Text </Text>

                <Highlighter>{`<Box bg="#F0F0F0">...</Box>
<Text color="rgb(255, 255, 255)">...</Text>`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text color={["teal.500", "green.500", "blue.500"]}>
                  Responsive color
                </Text>

                <Highlighter>{`<Text color={["teal.500", "green.500", "blue.500"]}>`}</Highlighter>
                <BasicText>
                  In this example, the text color will be <Mono>teal.500</Mono>{" "}
                  on mobile devices, <Mono>green.500</Mono> on tablet devices,
                  and <Mono>blue.500</Mono> on desktop devices.
                </BasicText>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            Using Color Mode: Chakra UI supports both a light and dark color
            mode, and allows developers to toggle between them with ease. This
            is an incredible tool for enhancing user experience, but some
            developers may not know that you can customize these color modes per
            component. For example, you can set a specific font color that
            applies only when the app is in dark mode. Utilizing this feature
            allows for more control over the aesthetic of individual components
            in different color schemes.
            <Flex width="100%" justifyContent="center">
              <Box
                color={{ light: "teal.500", dark: "teal.300" }}
                border="1px solid"
                p={2}
                m={2}
              >
                In color mode designs, this box changes color based on the
                current color mode.
              </Box>
            </Flex>
            <Highlighter>{`<Box color={{ light: "teal.500", dark: "teal.300" }}>`}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            <b>Use of ColorScheme Property</b>: Chakra UI has predefined color
            schemes (like "teal", "red", "green", etc.) and shades (from 50 to
            900). The colorScheme property often gets overlooked because it's
            generally used with button, badge, and other similar components, but
            it can also be used to set the font color and background color. The
            advantage of using the <b>colorScheme</b> property is that it
            automatically adjusts the color contrast to be accessible.
            <Box bg="teal.500" p="2" m={2} borderRadius="md">
              <Text
                color="white"
                fontSize="md"
                fontWeight="bold"
                colorScheme="teal"
              >
                I am using ColorScheme!
              </Text>
            </Box>
            <Highlighter>{`<Box bg="teal.500">
  <Text colorScheme="teal">`}</Highlighter>
          </GridBoxTwo>
          <GridBoxThree>
            <b>Transparent Colors</b>: Chakra UI offers the ability to use
            "transparent" colors. These are like regular colors but have a fixed
            opacity. This means you can create a background color with a certain
            level of transparency and not worry about it becoming too
            transparent if the background color behind it changes. These
            "transparent" colors are really powerful for creating overlays or
            backdrop effects, which can create some compelling UI effects.
            <Flex w="100%" justify="center" m={2}>
              <Box bg="teal.500" p="2" w="300">
                <Box
                  bg="blackAlpha.500"
                  p="2"
                  borderRadius="md"
                  position="relative"
                >
                  <Box bg="white" p="2" borderRadius="md" boxShadow="lg">
                    <Box>This is the content inside the overlay box.</Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
            <Highlighter>{`<Box bg="teal.500">
  <Box
    bg="blackAlpha.500"
    borderRadius="md"
    position="relative">
    <Box bg="white" borderRadius="md">`}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

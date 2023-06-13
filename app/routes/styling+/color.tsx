import { Box, Text, VStack } from "@chakra-ui/react";
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
        Background & Font Color:
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <DescriptionBox>
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
                    <Mono>backgroundColor</Mono>
                    prop.
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
          </DescriptionBox>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <VStack>
                <VStack w="100%" spacing={0}>
                  <Box bg="blue" p={2}>
                    This <Mono>Box</Mono> has a <Mono>bg</Mono> of "blue".
                  </Box>

                  <Highlighter>{`<Box bg="blue">`}</Highlighter>
                  <BasicText></BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Box bg="green.700" p={2} color="white">
                    This <Mono>Box</Mono> has a <Mono>bg of green.700</Mono> and
                    a <Mono>color</Mono> (font) of "white".
                  </Box>

                  <Highlighter>{`<Box bg="green.700" color="white">`}</Highlighter>
                  <BasicText></BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Box backgroundColor="red.700" p={2}>
                    This <Mono>Box</Mono> has a <Mono>backgroundColor</Mono> of{" "}
                    <Mono>red.700</Mono>.
                  </Box>

                  <Highlighter>{`<Box backgroundColor="red.700">`}</Highlighter>
                  <BasicText></BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Box bg="teal.500">This is a box with a background color</Box>

                  <Highlighter>{`<Box bg="teal.500">`}</Highlighter>
                  <BasicText>
                    In this example, <Mono>teal.500 </Mono>is a color from the
                    Chakra UI color palette, and it applies to the Box's
                    background.
                  </BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text color="teal.500">
                    This is some text with a color of <Mono>teal.500</Mono>
                  </Text>

                  <Highlighter>{`<Text color="teal.500">`}</Highlighter>
                  <BasicText>
                    Here, <Mono>teal.500</Mono> is applied as the text color.
                  </BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Box bg="#F0F0F0" color="black" p={2}>
                    {" "}
                    A Box{" "}
                  </Box>
                  <Text color="rgb(255, 255, 255)"> Some Text </Text>

                  <Highlighter>{`<Box bg="#F0F0F0">...</Box>
<Text color="rgb(255, 255, 255)">...</Text>`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text color={["teal.500", "green.500", "blue.500"]}>
                    Responsive color
                  </Text>

                  <Highlighter>{`<Text color={["teal.500", "green.500", "blue.500"]}>`}</Highlighter>
                  <BasicText>
                    In this example, the text color will be{" "}
                    <Mono>teal.500</Mono> on mobile devices,{" "}
                    <Mono>green.500</Mono> on tablet devices, and{" "}
                    <Mono>blue.500</Mono> on desktop devices.
                  </BasicText>
                </VStack>
              </VStack>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <GridColumn>Column 2</GridColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

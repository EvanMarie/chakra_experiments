import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

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
  GridBoxOne,
  GridBoxThree,
  GridBoxTwo,
  HighlightColumn,
  SingleExample,
  MyFlex,
  SectionDescription,
  ViewCode,
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { Box, Code, SimpleGrid, Text } from "@chakra-ui/react";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#shadow">
        Shadow
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI provides several utilities for working with box
              shadows. The main prop for shadows is <Mono>boxShadow</Mono>,
              which can be used to add a shadow to a box. Chakra UI comes with
              some predefined shadows that you can use.
            </SectionDescription>
            <BasicText>
              Chakra UI defines its shadows using CSS box-shadow property. This
              property describes offsets, blur radius, spread radius, color, and
              inset of shadows around the box's frame. Below is a brief overview
              of the built-in shadows provided by Chakra UI:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>sm</HL>: <Code>"0 1px 2px 0 rgba(0, 0, 0, 0.05)"</Code> -
                  This is a small shadow, it applies a shadow effect that is
                  slight and does not protrude much from the box frame. It's
                  good for subtle highlights and low depth elements.
                </li>
                <li>
                  <HL>md</HL>:{" "}
                  <Code>
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0,
                    0, 0, 0.06)"
                  </Code>{" "}
                  - This is a medium shadow, it applies a more pronounced shadow
                  than <Code>sm</Code>. It's good for medium depth elements and
                  for creating a feeling of elevation.
                </li>
                <li>
                  <HL>lg</HL>:{" "}
                  <Code>
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0,
                    0, 0, 0.05)"{" "}
                  </Code>{" "}
                  - This is a large shadow. It applies an even more pronounced
                  shadow than <Code>md</Code>. It's good for higher depth
                  elements and for creating a stronger feeling of elevation.{" "}
                </li>
                <li>
                  <HL>xl</HL>:{" "}
                  <Code>
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px
                    rgba(0, 0, 0, 0.04)"
                  </Code>{" "}
                  This is an extra-large shadow. It applies a very pronounced
                  shadow. It's good for very high depth elements and for
                  creating a strong feeling of elevation or focus.
                </li>
                <li>
                  <HL>2xl</HL>:{" "}
                  <Code>"0 25px 50px -12px rgba(0, 0, 0, 0.25)"</Code> This is
                  an extra-extra-large shadow. It applies an extremely
                  pronounced shadow, and it's best for elements that need a
                  significant amount of depth or focus.
                </li>
                <li>
                  <HL>outline</HL>:{" "}
                  <Code>"0 0 0 3px rgba(66, 153, 225, 0.6)"</Code> This is an
                  outline shadow. It's best used to draw attention to a
                  particular element, like for highlighting focus on an input or
                  button.
                </li>
                <li>
                  <HL>inner</HL>:{" "}
                  <Code>"inset 0 2px 4px 0 rgba(0,0,0,0.06)"</Code> This is an
                  inner shadow. It's applied inside the box borders and is good
                  for making elements appear as if they're being pressed down or
                  have an inner depth.
                </li>
              </ul>
            </BulletBox>

            <DescriptionBox>
              <BasicText>
                As always with CSS, the best way to understand how these shadows
                affect the visual appearance is to apply them and see how they
                look. This will give you an intuitive sense of how they can be
                used effectively in your design.
              </BasicText>

              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  To import the <Mono>Box</Mono> and <Mono>Text</Mono>{" "}
                  components used below:
                </BasicText>
                <MiniCode>{`import { Box, Text } from "@chakra-ui/react";`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SimpleGrid
                  bg="white"
                  justifyContent="center"
                  alignContent="center"
                  columns={{ base: 1, sm: 2 }}
                  spacing={3}
                  p={2}
                  marginTop={2}
                  textAlign="center"
                  rounded="lg"
                >
                  <Box m={4} boxShadow="xs" p={2} rounded="sm" bg={"accent_3"}>
                    <MiniCode>boxShadow="xs"</MiniCode>
                  </Box>
                  <Box m={4} boxShadow="sm" p={2} rounded="sm" bg={"accent_3"}>
                    <MiniCode>boxShadow="sm"</MiniCode>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="base"
                    p={2}
                    rounded="sm"
                    bg={"accent_3"}
                  >
                    <MiniCode>boxShadow="base"</MiniCode>
                  </Box>
                  <Box m={4} boxShadow="md" p={2} rounded="sm" bg={"accent_3"}>
                    <MiniCode>boxShadow="md"</MiniCode>
                  </Box>
                  <Box m={4} boxShadow="lg" p={2} rounded="sm" bg={"accent_3"}>
                    <MiniCode>boxShadow="lg"</MiniCode>
                  </Box>
                  <Box m={4} boxShadow="xl" p={2} rounded="sm" bg={"accent_3"}>
                    <MiniCode>boxShadow="xl"</MiniCode>
                  </Box>
                  <Box m={4} boxShadow="2xl" p={2} rounded="sm" bg={"accent_3"}>
                    <MiniCode>boxShadow="2xl"</MiniCode>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="dark-lg"
                    p={2}
                    rounded="sm"
                    bg={"accent_3"}
                  >
                    <MiniCode>boxShadow="dark-lg"</MiniCode>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="outline"
                    p={2}
                    rounded="sm"
                    bg={"accent_3"}
                  >
                    <MiniCode>boxShadow="outline"</MiniCode>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="inner"
                    p={2}
                    rounded="sm"
                    bg={"accent_3"}
                  >
                    <MiniCode>boxShadow="inner"</MiniCode>
                  </Box>
                </SimpleGrid>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  Text With Shadows: you can also apply shadows to text using
                  the <Mono>textShadow</Mono>. In this example, the{" "}
                  <Mono>textShadow</Mono> prop is used to create a shadow effect
                  on the text. It is set to <Mono>"2px 2px red"</Mono>,
                  specifying a shadow with a horizontal offset of 2 pixels,
                  vertical offset of 2 pixels, and a shadow color of red.
                </BasicText>
                <MyFlex>
                  <HighlightExample h="50px">
                    <Text
                      m={0}
                      color="white"
                      textShadow="2px 2px red"
                      fontSize={28}
                    >
                      Shadowy Text
                    </Text>
                  </HighlightExample>
                  <MiniCode>
                    {`<Text color="white" 
  textShadow="2px 2px 5px red" 
  fontSize={28}>`}
                  </MiniCode>
                </MyFlex>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              You can use the theme object to define custom shadows. With Chakra
              UI, you can define custom shadows in your <b>theme</b> and use
              them across your application. This can be particularly handy if
              you use the same shadow settings frequently. Here's how you could
              do it:
            </HighlightText>
            <MyFlex>
              (View code below for theme-defined custom shadow...)
            </MyFlex>
            <ModalCode>
              <Highlighter>
                {`const theme = extendTheme({
    shadows: {
      outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    },
  })

// Using the custom shadow
<Box boxShadow="custom">Hello World</Box>`}
              </Highlighter>
            </ModalCode>
            This way, your custom shadow can be used like any of the built-in
            shadows.
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              You can animate your <b>boxShadow</b>! With Chakra UI, you can
              apply CSS transitions or animations to your <b>boxShadow</b>. This
              can be a great way to draw attention or give feedback to users.
              For instance, you can have a box that increases its shadow on
              hover. In the following example, when the user hovers over the
              box, the shadow will smoothly transition from <b>md</b> (medium)
              to <b>xl</b> (extra large) over 0.9 seconds.
            </HighlightText>
            <MyFlex paddingY={4} borderRadius="sm">
              <Box
                bg="accent_3"
                borderRadius="sm"
                p={2}
                boxShadow="sm"
                fontSize="16px"
                _hover={{
                  boxShadow: "2xl",
                  transition: "box-shadow 0.9s ease-in-out",
                }}
              >
                Hover for Shadow!
              </Box>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Box
  boxShadow="sm"
  _hover={{
    boxShadow: "2xl",
    transition: "box-shadow 0.9s ease-in-out",
  }}`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              You can create multi-layered shadows. If you want to achieve a
              complex, layered shadow effect, you can provide multiple shadow
              definitions separated by a comma. It's a somewhat advanced use of
              shadows but it can add some depth and sophistication to your UI.
              In the following example, the box will have two shadows. The first
              shadow is broader and lighter, and the second is closer and
              darker, resulting in a layered, complex shadow effect. The shadows
              are applied in the order they are listed.
            </HighlightText>
            <MyFlex>
              <Box
                borderRadius="sm"
                p={3}
                bg="accent_1"
                boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)"
              >
                Whazzup, Planet?!
              </Box>
            </MyFlex>
            <ModalCode>
              <Highlighter>{` <Box
  boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1),
  0px 4px 6px rgba(0, 0, 0, 0.05)"
>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

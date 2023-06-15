import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono, colors } from "~/styles/DesignComponents";

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
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { Box, SimpleGrid } from "@chakra-ui/react";

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
              shadows. The main prop for shadows is boxShadow, which can be used
              to add a shadow to a box. Chakra UI comes with some predefined
              shadows that you can use.
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
                  <HL>sm</HL>: <Mono>"0 1px 2px 0 rgba(0, 0, 0, 0.05)"</Mono> -
                  This is a small shadow, it applies a shadow effect that is
                  slight and does not protrude much from the box frame. It's
                  good for subtle highlights and low depth elements.
                </li>
                <li>
                  <HL>md</HL>:{" "}
                  <Mono>
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0,
                    0, 0, 0.06)"
                  </Mono>{" "}
                  - This is a medium shadow, it applies a more pronounced shadow
                  than sm. It's good for medium depth elements and for creating
                  a feeling of elevation.
                </li>
                <li>
                  <HL>lg</HL>:{" "}
                  <Mono>
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0,
                    0, 0, 0.05)"{" "}
                  </Mono>{" "}
                  - This is a large shadow. It applies an even more pronounced
                  shadow than md. It's good for higher depth elements and for
                  creating a stronger feeling of elevation.
                </li>
                <li>
                  <HL>xl</HL>:{" "}
                  <Mono>
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px
                    rgba(0, 0, 0, 0.04)"
                  </Mono>{" "}
                  This is an extra-large shadow. It applies a very pronounced
                  shadow. It's good for very high depth elements and for
                  creating a strong feeling of elevation or focus.
                </li>
                <li>
                  <HL>2xl</HL>:{" "}
                  <Mono>"0 25px 50px -12px rgba(0, 0, 0, 0.25)"</Mono> This is
                  an extra-extra-large shadow. It applies an extremely
                  pronounced shadow, and it's best for elements that need a
                  significant amount of depth or focus.
                </li>
                <li>
                  <HL>outline</HL>:{" "}
                  <Mono>"0 0 0 3px rgba(66, 153, 225, 0.6)"</Mono> This is an
                  outline shadow. It's best used to draw attention to a
                  particular element, like for highlighting focus on an input or
                  button.
                </li>
                <li>
                  <HL>inner</HL>:{" "}
                  <Mono>"inset 0 2px 4px 0 rgba(0,0,0,0.06)"</Mono> This is an
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
                <BasicText>To import this:</BasicText>
                <Highlighter>{`import { Something } from "Somewhere";`}</Highlighter>
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
                  <Box
                    m={4}
                    boxShadow="xs"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="xs"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="sm"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="sm"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="base"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="base"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="md"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="md"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="lg"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="lg"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="xl"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="xl"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="2xl"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="2xl"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="dark-lg"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="dark-lg"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="outline"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="outline"</Highlighter>
                  </Box>
                  <Box
                    m={4}
                    boxShadow="inner"
                    p={2}
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Highlighter>boxShadow="inner"</Highlighter>
                  </Box>
                </SimpleGrid>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            Highlight coming soon!
            <MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            Highlight coming soon!<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxTwo>
          <GridBoxThree>
            Highlight coming soon!<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

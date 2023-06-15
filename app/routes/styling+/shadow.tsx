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
                  <HL>sm</HL>: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" - This is a
                  small shadow, it applies a shadow effect that is slight and
                  does not protrude much from the box frame. It's good for
                  subtle highlights and low depth elements.
                </li>
                <li>
                  <HL>md</HL>: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px
                  -1px rgba(0, 0, 0, 0.06)" - This is a medium shadow, it
                  applies a more pronounced shadow than sm. It's good for medium
                  depth elements and for creating a feeling of elevation.
                </li>
                <li>
                  <HL>lg</HL>: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px
                  -2px rgba(0, 0, 0, 0.05)" This is a large shadow. It applies
                  an even more pronounced shadow than md. It's good for higher
                  depth elements and for creating a stronger feeling of
                  elevation.
                </li>
                <li>
                  <HL>xl</HL>: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px
                  -5px rgba(0, 0, 0, 0.04)" This is an extra-large shadow. It
                  applies a very pronounced shadow. It's good for very high
                  depth elements and for creating a strong feeling of elevation
                  or focus.
                </li>
                <li>
                  <HL>2xl</HL>: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" This is
                  an extra-extra-large shadow. It applies an extremely
                  pronounced shadow, and it's best for elements that need a
                  significant amount of depth or focus.
                </li>
                <li>
                  <HL>outline</HL>: "0 0 0 3px rgba(66, 153, 225, 0.6)" This is
                  an outline shadow. It's best used to draw attention to a
                  particular element, like for highlighting focus on an input or
                  button.
                </li>
                <li>
                  <HL>inner</HL>: "inset 0 2px 4px 0 rgba(0,0,0,0.06)" This is
                  an inner shadow. It's applied inside the box borders and is
                  good for making elements appear as if they're being pressed
                  down or have an inner depth.
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
                    margin={3}
                    boxShadow="xs"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono>boxShadow="xs"</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="sm"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> boxShadow="sm"</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="base"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> boxShadow="base"</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="md"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> boxShadow="md"</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="lg"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> boxShadow="lg"</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="xl"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> boxShadow="xl"</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="2xl"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> boxShadow="2xl"</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="dark-lg"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> {`boxShadow="dark-lg"`}</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="outline"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> {`boxShadow="outline"`}</Mono>
                  </Box>
                  <Box
                    margin={3}
                    boxShadow="inner"
                    p="3"
                    rounded="sm"
                    bg={"darkAccent_3"}
                  >
                    <Mono> {`boxShadow="inner"`}</Mono>
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

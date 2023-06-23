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
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { Box, Button, Flex } from "@chakra-ui/react";
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#border-radius">
        Border Radius
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ In Chakra UI, the border radius of a component can be easily
              manipulated using the borderRadius property. This property accepts
              both specific pixel values and predefined keyword values that
              correspond to specific pixel measurements.
            </SectionDescription>
            <BasicText>The predefined keyword values are as follows:</BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>none</HL>: translates to 0
                </li>
                <li>
                  <HL>sm</HL>: translates to 2px
                </li>
                <li>
                  <HL>base</HL> or <HL>md</HL>: translates to 4px
                </li>
                <li>
                  <HL>lg</HL>: translates to 8px
                </li>
                <li>
                  <HL>xl</HL>: translates to 12px
                </li>
                <li>
                  <HL>2xl</HL>: translates to 16px
                </li>
                <li>
                  <HL>3xl</HL>: translates to 24px
                </li>
                <li>
                  <HL>full</HL> or <HL>max</HL>: translates to 9999px
                </li>
              </ul>
            </BulletBox>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  To import the <Mono>Button</Mono>, <Mono>Flex</Mono>, and{" "}
                  <Mono>Box</Mono> components:
                </BasicText>
                <MiniCode>{`<import { Button, 
  Flex, 
  Box } from "@chakra-ui/react";`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BasicText>
                  Button with <Mono>LeftRadius="0"</Mono>, creating no border
                  radius on left, but default settings on right.
                </BasicText>
                <MyFlex>
                  <Button borderLeftRadius="0" mb={4} w="150px">
                    Button 2
                  </Button>
                </MyFlex>
                <MiniCode>{`<Button borderLeftRadius="0">`}</MiniCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  Button with <Mono>TopRadius="0"</Mono>, creating no border
                  radius on top, but default settings on bottom.
                </BasicText>
                <Button borderTopRadius="0" mb={4} w="150px">
                  Button 3
                </Button>
                <MiniCode>{`<Button borderTopRadius="0">`}</MiniCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  Button with <Mono>borderBottomRadius="0"</Mono>, creating no
                  border radius on bottom, but default settings on top.
                </BasicText>
                <Button borderBottomRadius="0" mb={4} w="150px">
                  Button 4
                </Button>
                <MiniCode>{`<Button borderBottomRadius="0">`}</MiniCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>Diagonal split view</HL>: You can use{" "}
                  <Mono>borderRadius</Mono> property to create a visually
                  interesting diagonal split view effect. By applying a large
                  border radius to only two corners of a box and giving it a
                  linear gradient, you can create a box that looks like it's
                  been cut diagonally
                </BasicText>
                <MyFlex>
                  <Flex
                    height="100px"
                    bgGradient="linear(to-r, teal.500, green.500)"
                    borderRadius="100% 0 0 100%"
                    justify="right"
                    align="center"
                    p={4}
                    color="white"
                    fontWeight="bold"
                  >
                    Diagonal Split View Box
                  </Flex>
                </MyFlex>
                <MiniCode>{`<Button borderBottomRadius="0">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Individual Corner Radius</b>: you can also adjust the border
              radius of individual corners using the <b>borderTopLeftRadius</b>,{" "}
              <b>borderTopRightRadius</b>, <b>borderBottomRightRadius</b>, and{" "}
              <b>borderBottomLeftRadius</b> props. In this example, the border
              radius is set individually for the top left and bottom right
              corners.
            </HighlightText>
            <MyFlex>
              <Box
                maxWidth="200px"
                borderTopLeftRadius="lg"
                borderBottomRightRadius="2xl"
                bg="accent_2"
                color="background"
                p={2}
              >
                I'm a box with different border radii on different corners.
              </Box>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Box
  borderTopLeftRadius="lg"
  borderBottomRightRadius="2xl">`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Radius with Themes</b>: you can define custom radius values in
              your theme and use them throughout your app.
            </HighlightText>
            <MyFlex>
              <Flex
                maxWidth="200px"
                textAlign="center"
                borderRadius="50px"
                bg="accent_2"
                color="background"
                p={4}
              >
                I'm a box with a super rounded border.
              </Flex>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`import { extendTheme } from "@chakra-ui/react"
                
const theme = extendTheme({
  radii: {
    superRound: "50px"
  },
})

export default theme

<Flex
  textAlign="center"
  borderRadius="superround">
  I'm a box with a super rounded border.
</Flex>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Ellipse Borders</b>: you can create elliptical borders by
              applying a large border radius only to the horizontal or vertical
              axis of a box. In this example, the border radius is applied
              differently to the horizontal and vertical axes, creating an
              ellipse effect.
            </HighlightText>
            <MyFlex>
              <Flex
                p={2}
                maxWidth="200px"
                textAlign="center"
                borderRadius="50% / 20%"
                bg="accent_2"
                color="background"
              >
                I'm a box with an elliptical border radius.
              </Flex>
            </MyFlex>
            <ModalCode>
              <Highlighter>{` <Flex
  p={2}
  borderRadius="50% / 20%"
>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

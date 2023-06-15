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
import { Box, Button, Flex } from "@chakra-ui/react";

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
                <Highlighter>{`<import { Button, Flex, Box } from "@chakra-ui/react";`}</Highlighter>
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
                <Highlighter>{`<Button borderLeftRadius="0" mb={4} w="150px">`}</Highlighter>
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
                <Highlighter>{`<Button borderTopRadius="0" mb={4} w="150px">`}</Highlighter>
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
                <Highlighter>{`<Button borderBottomRadius="0" mb={4} w="150px">`}</Highlighter>
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
                <Highlighter>{`<Button borderBottomRadius="0" mb={4} w="150px">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <b>Individual Corner Radius</b>: you can also adjust the border
            radius of individual corners using the <b>borderTopLeftRadius</b>,
            <b>borderTopRightRadius</b>, <b>borderBottomRightRadius</b>, and
            <b>borderBottomLeftRadius</b> props. In this example, the border
            radius is set individually for the top left and bottom right
            corners.
            <MyFlex>
              <Box
                borderTopLeftRadius="lg"
                borderBottomRightRadius="2xl"
                bg={colors.mypurple}
                p={2}
                color="white"
              >
                I'm a box with different border radii on different corners.
              </Box>
            </MyFlex>
            <Highlighter>{`<Box
    borderTopLeftRadius="lg"
    borderBottomRightRadius="2xl">`}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            <b>Radius with Themes</b>: you can define custom radius values in
            your theme and use them throughout your app.
            <MyFlex>
              <Flex
                textAlign="center"
                borderRadius="50px"
                color="white"
                bg={colors.mypurple}
                p={4}
              >
                I'm a box with a super rounded border.
              </Flex>
            </MyFlex>
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
          </GridBoxTwo>
          <GridBoxThree>
            <b>Ellipse Borders</b>: you can create elliptical borders by
            applying a large border radius only to the horizontal or vertical
            axis of a box. In this example, the border radius is applied
            differently to the horizontal and vertical axes, creating an ellipse
            effect.
            <MyFlex>
              <Flex
                p={2}
                textAlign="center"
                borderRadius="50% / 20%"
                bg={colors.mypurple}
                color="white"
              >
                I'm a box with an elliptical border radius.
              </Flex>
            </MyFlex>
            <Highlighter>{` <Flex
  p={2}
  borderRadius="50% / 20%"
>`}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

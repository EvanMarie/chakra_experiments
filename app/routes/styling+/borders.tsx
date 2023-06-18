import { Box, Link, VStack } from "@chakra-ui/react";
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
  GridBoxOne,
  GridBoxThree,
  GridBoxTwo,
  HighlightColumn,
  SingleExample,
  MyFlex,
  SectionDescription,
  ViewCode,
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#borders">
        Borders
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI makes it easy to style elements with borders, offering
              a flexible, prop-based interface for defining the style, width,
              and color of borders.
            </SectionDescription>
            <BulletBox>
              <BasicText>
                The primary properties for controlling borders in Chakra UI are:
              </BasicText>
              <ul>
                <li>
                  <HL>borderWidth</HL>: This is used to set the width of the
                  border. It can take values such as <Mono>sm</Mono>,{" "}
                  <Mono>md</Mono>, <Mono>lg</Mono> which map to predefined
                  sizes, or you can specify the width directly in pixels.
                </li>
                <li>
                  <HL>borderStyle</HL>: This property determines the style of
                  the border. Options include <Mono>solid</Mono>,{" "}
                  <Mono>dashed</Mono>, <Mono></Mono>dotted, and more.
                </li>
                <li>
                  <HL>borderColor</HL>: This property sets the color of the
                  border. It can accept color values in various formats (named
                  CSS colors, RGB, HEX, etc), and you can also use the color
                  tokens defined in your theme.
                </li>
                <li>
                  <HL>borderRadius</HL>: This controls the roundness of the
                  borders. Like <Mono>borderWidth</Mono>, it can take predefined
                  sizes (<Mono>sm</Mono>, <Mono>md</Mono>, <Mono>lg</Mono>, etc)
                  or direct values in pixels. See this property more in depth in
                  the <Link href="/styling/border_radius">Border Radius</Link>{" "}
                  section.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                In addition to these, Chakra UI provides shorthand props that
                combine border style, width, and color. They use the format{" "}
                <Mono>border[Side][Width][Color]</Mono>. For example,
              </BasicText>
              <Highlighter>{`borderTop="2px solid blue.500"`}</Highlighter>

              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  To import the <Mono>Box</Mono> component used below:
                </BasicText>
                <Highlighter>{`import { Box } from "@chakra-ui/react";`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Box
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="blue.500"
                  borderRadius="lg"
                  p={3}
                >
                  Have you ever seen such a box?
                </Box>

                <Highlighter>{`<Box
  borderWidth="1px"
  borderStyle="solid"
  borderColor="blue.500"
  borderRadius="lg"
                >`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box
                  border="2px"
                  fontSize={16}
                  bg={"darkAccent_3"}
                  borderColor="yellow.200"
                  h="60px"
                  marginTop={4}
                  color={"mainText"}
                >
                  <Highlighter>{`<Box 2px border borderColor="yellow.200">`}</Highlighter>
                </Box>

                <br />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box borderWidth="1px" borderRadius="md" p={4}>
                  Whaddabox!
                </Box>
                <Highlighter>{`<Box borderWidth="1px" borderRadius="md" p={4}>`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box borderWidth="1px" borderStyle="dashed" p={4}>
                  Dashes are grand!
                </Box>
                <Highlighter>{`<Box borderWidth="1px" borderStyle="dashed" p={4}>`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box border="2px solid red" p={4}>
                  Lovely in Red!
                </Box>
                <Highlighter>{`<Box border="2px solid red" p={4}>`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <b>Composite Border Styles</b>: You can give individual sides of a
            component different borders by specifying <b>borderTop</b>,{" "}
            <b>borderRight</b>, <b>borderBottom</b>, and <b>borderLeft</b>{" "}
            separately. For example,{" "}
            <MyFlex>
              <Box
                w="150px"
                p={2}
                borderTop="2px solid red"
                borderBottom="2px dashed blue"
                bg="white"
              >
                I am a Box.
              </Box>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`<Box
  w="150px"
  p={2}
  borderTop="2px solid red"
  borderBottom="2px dashed blue"
  bg="white"
  >`}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <b>Transparent Borders</b>: Chakra UI allows you to create
            transparent borders. You can do this by setting the{" "}
            <b>borderColor</b> to transparent. This can be useful when you want
            an element to maintain the same layout even when its border is
            invisible.
            <MyFlex>
              <Box
                border="2px solid transparent"
                borderColor="transparent"
                borderRadius="md"
                bg="white"
                p={4}
              >
                I am a box with a transparent border.
              </Box>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`<Box
    border="2px solid transparent"
    borderColor="transparent"/>`}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <b>Responsive Borders</b>: Chakra UI allows you to define responsive
            border styles. This means you can specify different border styles
            for different viewport sizes. You can do this by providing an array
            of values to the border properties. For example, the following sets
            a <b>1px border</b> on the smallest viewports, <b>2px</b> on
            medium-sized viewports, and <b>3px</b> on the largest viewports.
            <MyFlex>
              <Box
                borderWidth={["1px", "2px", "3px"]}
                p={2}
                bg="red"
                color="white"
                borderColor="black"
              >
                {" "}
                My name is Boxanne.
              </Box>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`<Box borderWidth={["1px", "2px", "3px"]}>`}</Highlighter>
            </ViewCode>{" "}
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  // Mono,
  // Flex,
  // Text,
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
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#margin-and-padding">
        Padding & Margin
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <BasicText color={colors.mainAccent3}>
                ⦾ In Chakra UI, there are two fundamental concepts you must
                understand regarding spacing in layouts, which are padding and
                margin.
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Padding</HL>: Padding is the space between the content
                    of a box and its border. It's used to control the space
                    within the component. In Chakra UI, you can control the
                    padding using the <Mono>p</Mono>
                    or <Mono>padding</Mono> props.
                  </li>
                  <li>
                    <HL>Margin</HL>: Margin is the space around the outside of a
                    box. It's used to control the space or distance between
                    different components. Similar to padding, you can control
                    the margin using the <Mono>m</Mono> or <Mono>margin</Mono>{" "}
                    props.
                  </li>
                </ul>
              </BulletBox>
              <BasicText>
                Both padding and margin can take a variety of inputs:
              </BasicText>
              <BulletBox>
                <ul>
                  {" "}
                  <li>
                    A number from the spacing scale:{" "}
                    <Highlighter>{`<Box p={4}>...</Box>`}</Highlighter> This
                    will look up the 4th value on the spacing scale in the
                    theme.{" "}
                  </li>
                  <li>
                    A string value:{" "}
                    <Highlighter>{`<Box p="2em">...</Box>.`}</Highlighter>
                    This will apply the string as a CSS value directly.{" "}
                  </li>
                  <li>
                    An array for responsive design:{" "}
                    <Highlighter>{`<Box p={[2, 4, 6]}>...</Box>`}</Highlighter>
                    Here, padding will be <Mono>2</Mono> for mobile devices,{" "}
                    <Mono>4</Mono> for tablet devices, and <Mono>6</Mono> for
                    desktop devices.
                  </li>
                </ul>{" "}
              </BulletBox>
              <BasicText>
                Remember that the Box component in the examples can be replaced
                by any other Chakra UI component, like Button, Text, Flex, etc.,
                because all Chakra UI components have these spacing props.
              </BasicText>

              <DescriptionBox>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    The <Mono>Box</Mono> component shown below can be imported
                    as:
                  </BasicText>
                  <Highlighter>{`import { Box } from "@chakra-ui/react";`}</Highlighter>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>

          <ExampleBox>
            <SectionContainer>
              <VStack w="100%" spacing={6}>
                <VStack w="100%" spacing={0}>
                  <Box p={2} bg={colors.mypurple}>
                    This <Mono>Box</Mono> has a padding setting of{" "}
                    <Mono>
                      <i>p={2}</i>
                    </Mono>
                  </Box>
                  <Highlighter>{`<Box p={2}>`}</Highlighter>
                  <BasicText>
                    Here <Mono>4</Mono> is not pixels, but units from the Chakra
                    UI's theme spacing scale.
                  </BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />
                <VStack w="100%" spacing={0}>
                  <Box pt={4} bg={colors.myblue}>
                    This box has a padding-top of 4 units
                  </Box>
                  <Highlighter>{`<Box pt={4}>`}</Highlighter>
                  <BasicText>
                    In this case, <Mono>pt</Mono> stands for padding-top. You
                    can use similar conventions for padding-right (
                    <Mono>pr</Mono>), padding-bottom (<Mono>pb</Mono>),
                    padding-left (<Mono>pl</Mono>
                    ), and for both x-axis and y-axis simultaneously (
                    <Mono>px</Mono>, <Mono>py</Mono>).
                  </BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />
                <VStack w="100%" spacing={0}>
                  <Box bg={colors.mainAccent3}>
                    <Box m={2} bg={colors.myblue} mb={3}>
                      This <Mono>Box</Mono> has a margin setting of{" "}
                      <Mono>
                        <i>m={4}</i>
                      </Mono>
                    </Box>
                  </Box>
                  <Highlighter>{`<Box m={4}>`}</Highlighter>
                  <BasicText>Margin works just like padding.</BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Box mt={4} bg={colors.mypurple}>
                    This box has a margin-top of 4 units
                  </Box>

                  <Highlighter>{`<Box mt={4}>`}</Highlighter>
                  <BasicText>
                    Here, <Mono>mt</Mono> stands for <Mono>margin-top</Mono>.
                    Similar to padding, you can also use{" "}
                    <Mono>margin-right</Mono> (<Mono>mr</Mono>),{" "}
                    <Mono>margin-bottom</Mono> (<Mono>mb</Mono>),{" "}
                    <Mono>margin-left</Mono> (<Mono>ml</Mono>), and for both
                    x-axis and y-axis simultaneously (<Mono>mx</Mono>,{" "}
                    <Mono>my</Mono> ).
                  </BasicText>
                </VStack>
              </VStack>{" "}
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <b>Negative margins for overlapping elements</b>: In Chakra UI, you
            can use negative margin values to create overlapping elements. This
            can be useful when you want to create unique visual effects or
            adjust the positioning of elements.
          </GridBoxOne>
          <GridBoxTwo>
            <b>Responsive padding and margin values</b>: Chakra UI provides
            responsive variants for <b>padding (p)</b> and <b>margin (m)</b>
            properties, allowing you to specify different values for different
            screen sizes. The responsive variants are denoted using the <b>@</b>
            {""}
            symbol.
          </GridBoxTwo>
          <GridBoxThree>
            <b>Combining padding and margin shorthand</b>: Chakra UI supports
            shorthand notations for setting multiple padding <b>(p)</b> and
            margin <b>(m)</b> values at once. You can use these shorthand
            notations to specify different values for individual sides of an
            element
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>
    </BigBackgroundBox>
  );
}

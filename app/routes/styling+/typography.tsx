import { Box, Code, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BlueBold,
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
  SingleExample,
  MyFlex,
  SectionDescription,
  ViewCode,
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#typography">
        Typography
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box overflow-x="hidden">
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <SectionDescription>
                ⦾ Typography in Chakra UI is highly customizable and flexible.
                Here's a rundown of the main features:
              </SectionDescription>
              <BulletBox>
                <ul>
                  <li>
                    <BlueBold>Typography Components</BlueBold>: These are
                    covered in much more detail in the components-typography
                    section, but it is important to note that Chakra UI provides
                    a variety of components for common typographical elements,
                    including <Mono>Heading</Mono>, <Mono>Text</Mono>, and{" "}
                    <Mono>Code</Mono>.
                  </li>
                  <li>
                    <BlueBold>Responsive Font Sizes</BlueBold>: Like many other
                    props in Chakra UI, <Mono>fontSize</Mono> can take an array
                    or object to specify different values at different
                    breakpoints.
                  </li>
                  <li>
                    <BlueBold>Font Weights</BlueBold>: Chakra UI provides props
                    for controlling font weight: <Mono>fontWeight</Mono>.
                  </li>
                  <li>
                    <BlueBold>Text Colors</BlueBold>: Text color can be
                    controlled using the <Mono>color</Mono> prop, as we've seen
                    in examples on <Link href="/styling/color">color</Link>.
                  </li>
                  <li>
                    <BlueBold>Line Heights</BlueBold>: Line height can be
                    controlled using the <Mono>lineHeight</Mono> prop.
                  </li>
                  <li>
                    <BlueBold>Text Alignment and Decoration</BlueBold>: Text
                    alignment can be controlled with the <Mono>textAlign</Mono>{" "}
                    prop, and <Mono>decoration</Mono> (like underlining) can be
                    controlled with the <Mono>textDecoration</Mono> prop.
                  </li>
                  <li>
                    <BlueBold>Theme Customization</BlueBold>: Chakra UI's theme
                    object allows you to define default styles for typography
                    components, customize the font sizes, weights, and line
                    heights available, and more. You can extend the theme to
                    include custom fonts as well.
                  </li>
                </ul>
              </BulletBox>
              <DescriptionBox>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    To import the <Mono>Text</Mono> component:
                  </BasicText>
                  <MiniCode>{`import { Text } from "@chakra-ui/react";}`}</MiniCode>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>

          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Heading as="h1" size="lg">
                  I'm a large heading
                </Heading>
                <MiniCode>{`<Heading as="h1" size="lg">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="md">I'm some medium-sized text</Text>
                <MiniCode>{`<Text fontSize="md">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Code>I'm a code snippet</Code>
                <MiniCode>{`<Code>I'm a code snippet</Code>`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="md">I'm some medium-sized text</Text>
                <MiniCode>{`<Text fontSize="md">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize={["sm", "md", "lg"]}>I'm responsive text</Text>
                <MiniCode>{`<Text fontSize={["sm", "md", "lg"]}>`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontWeight="bold">I'm bold text</Text>

                <MiniCode>{`<Text fontWeight="bold">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text letterSpacing="wide">
                  I'm text with wide letter spacing
                </Text>

                <MiniCode>{`<Text letterSpacing="wide">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text lineHeight="tall">I'm text with tall line height</Text>

                <MiniCode>{`<Text lineHeight="tall">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textAlign="center" textDecoration="underline">
                  I'm centered, underlined text
                </Text>

                <MiniCode>{`<Text textAlign="center" textDecoration="underline">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize={32}>fontSize={32}</Text>
                <MiniCode>{`<Text fontSize={32}>`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="1.5em">fontSize="1.5em"</Text>
                <MiniCode>{`<Text fontSize="1.5em">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="md">fontSize="md"</Text>
                <MiniCode>{`<Text fontSize="md">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textTransform="uppercase">textTransform="uppercase"</Text>
                <MiniCode>{`<Text textTransform="uppercase">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textTransform="capitalize">
                  textTransform="capitalize"
                </Text>
                <MiniCode>{`<Text textTransform="capitalize">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textTransform="lowercase">textTransform="lowercase"</Text>
                <MiniCode>{`<Text textTransform="lowercase">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textDecoration="underline">
                  textDecoration="underline"
                </Text>
                <MiniCode>{`<Text textDecoration="underline">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textDecoration="overline">textDecoration="overline"</Text>
                <MiniCode>{`<Text textDecoration="overline">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textDecoration="line-through">
                  textDecoration="line-through"
                </Text>
                <MiniCode>{`<Text textDecoration="line-through">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Custom Font Family</b>: Chakra UI allows you to easily set a
              custom font family for your text. You can define your font family
              in the Chakra UI theme or use the <b>fontFamily</b> prop directly
              on the <b>Text</b> component.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content">
                <Text fontFamily="monospace" fontSize="15px">
                  This text uses a custom font family.
                </Text>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Text fontFamily="monospace">`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Text Alignment</b>: Chakra UI provides the <b>textAlign</b>{" "}
              prop to control the alignment of text within a component.
            </HighlightText>
            <MyFlex bg={"accent_1"}>
              <HighlightExample h="fit-content">
                <Text textAlign="center">
                  This text is centered within its container.
                </Text>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Text textAlign="center">`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              Chakra UI provides the <b>lineHeight</b> prop to control the
              spacing between lines of text. This allows you to adjust the
              vertical rhythm and improve the readability of your text. In this
              example, the <b>Text</b> component applies the{" "}
              <b>lineHeight="1.5"</b> property, which increases the line height
              to 1.5 times the font size. This helps create more breathing space
              between lines, enhancing readability.
            </HighlightText>
            <MyFlex>
              <Flex p={2} justifyContent="center" bg={"accent_2"}>
                <HighlightExample h="fit-content">
                  <Text lineHeight="1.5">
                    This text has an increased line height for improved
                    readability.
                  </Text>
                </HighlightExample>
              </Flex>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Text lineHeight="1.5">`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

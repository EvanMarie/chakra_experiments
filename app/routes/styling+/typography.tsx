import { Box, Code, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
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
                    <HL>Typography Components</HL>: These are covered in much
                    more detail in the components-typography section, but it is
                    important to note that Chakra UI provides a variety of
                    components for common typographical elements, including{" "}
                    <Mono>Heading</Mono>, <Mono>Text</Mono>, and{" "}
                    <Mono>Code</Mono>.
                  </li>
                  <li>
                    <HL>Responsive Font Sizes</HL>: Like many other props in
                    Chakra UI, <Mono>fontSize</Mono> can take an array or object
                    to specify different values at different breakpoints.
                  </li>
                  <li>
                    <HL>Font Weights</HL>: Chakra UI provides props for
                    controlling font weight: <Mono>fontWeight</Mono>.
                  </li>
                  <li>
                    <HL>Text Colors</HL>: Text color can be controlled using the{" "}
                    <Mono>color</Mono> prop, as we've seen in examples on{" "}
                    <Link href="/styling/color">color</Link>.
                  </li>
                  <li>
                    <HL>Line Heights</HL>: Line height can be controlled using
                    the <Mono>lineHeight</Mono> prop.
                  </li>
                  <li>
                    <HL>Text Alignment and Decoration</HL>: Text alignment can
                    be controlled with the <Mono>textAlign</Mono> prop, and{" "}
                    <Mono>decoration</Mono> (like underlining) can be controlled
                    with the <Mono>textDecoration</Mono> prop.
                  </li>
                  <li>
                    <HL>Theme Customization</HL>: Chakra UI's theme object
                    allows you to define default styles for typography
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
                  <Highlighter>{`import { Text } from "@chakra-ui/react";}`}</Highlighter>
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
                <Highlighter>{`<Heading as="h1" size="lg">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="md">I'm some medium-sized text</Text>
                <Highlighter>{`<Text fontSize="md">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Code>I'm a code snippet</Code>
                <Highlighter>{`<Code>I'm a code snippet</Code>`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="md">I'm some medium-sized text</Text>
                <Highlighter>{`<Text fontSize="md">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize={["sm", "md", "lg"]}>I'm responsive text</Text>
                <Highlighter>{`<Text fontSize={["sm", "md", "lg"]}>`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontWeight="bold">I'm bold text</Text>

                <Highlighter>{`<Text fontWeight="bold">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text letterSpacing="wide">
                  I'm text with wide letter spacing
                </Text>

                <Highlighter>{`<Text letterSpacing="wide">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text lineHeight="tall">I'm text with tall line height</Text>

                <Highlighter>{`<Text lineHeight="tall">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textAlign="center" textDecoration="underline">
                  I'm centered, underlined text
                </Text>

                <Highlighter>{`<Text textAlign="center" textDecoration="underline">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize={32}>fontSize={32}</Text>
                <Highlighter>{`<Text fontSize={32}>`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="1.5em">fontSize="1.5em"</Text>
                <Highlighter>{`<Text fontSize="1.5em">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text fontSize="md">fontSize="md"</Text>
                <Highlighter>{`<Text fontSize="md">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textTransform="uppercase">textTransform="uppercase"</Text>
                <Highlighter>{`<Text textTransform="uppercase">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textTransform="capitalize">
                  textTransform="capitalize"
                </Text>
                <Highlighter>{`<Text textTransform="capitalize">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textTransform="lowercase">textTransform="lowercase"</Text>
                <Highlighter>{`<Text textTransform="lowercase">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textDecoration="underline">
                  textDecoration="underline"
                </Text>
                <Highlighter>{`<Text textDecoration="underline">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textDecoration="overline">textDecoration="overline"</Text>
                <Highlighter>{`<Text textDecoration="overline">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Text textDecoration="line-through">
                  textDecoration="line-through"
                </Text>
                <Highlighter>{`<Text textDecoration="line-through">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <b>Custom Font Family</b>: Chakra UI allows you to easily set a
            custom font family for your text. You can define your font family in
            the Chakra UI theme or use the <b>fontFamily</b> prop directly on
            the <b>Text</b> component.
            <MyFlex>
              <Text fontFamily="monospace" fontSize="15px">
                This text uses a custom font family.
              </Text>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`<Text fontFamily="monospace">`}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <b>Text Alignment</b>: Chakra UI provides the <b>textAlign</b> prop
            to control the alignment of text within a component.
            <MyFlex bg={"accent_1"}>
              <Text textAlign="center">
                This text is centered within its container.
              </Text>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`<Text textAlign="center">`}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            Chakra UI provides the <b>lineHeight</b> prop to control the spacing
            between lines of text. This allows you to adjust the vertical rhythm
            and improve the readability of your text. In this example, the{" "}
            <b>Text</b> component applies the <b>lineHeight="1.5"</b> property,
            which increases the line height to 1.5 times the font size. This
            helps create more breathing space between lines, enhancing
            readability.
            <MyFlex>
              <Flex p={2} justifyContent="center" bg={"accent_2"}>
                <Text lineHeight="1.5">
                  This text has an increased line height for improved
                  readability.
                </Text>
              </Flex>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`<Text lineHeight="1.5">`}</Highlighter>
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

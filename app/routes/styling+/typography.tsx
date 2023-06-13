import { Code, Heading, Link, Text, VStack } from "@chakra-ui/react";
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
        Typography:
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <DescriptionBox>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <BasicText color={colors.mainAccent3}>
                ⦾ Typography in Chakra UI is highly customizable and flexible.
                Here's a rundown of the main features:
              </BasicText>
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
                    <HL>Text Colors</HL>: Text color can be controlled using the
                    <Mono>color</Mono> prop, as we've seen in examples on{" "}
                    <Link href="/styling/color">color</Link>.
                  </li>
                  <li>
                    <HL>Line Heights</HL>: Line height can be controlled using
                    the
                    <Mono>lineHeight</Mono> prop.
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
          </DescriptionBox>

          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <VStack>
                <VStack w="100%" spacing={0}>
                  <Heading as="h1" size="lg">
                    I'm a large heading
                  </Heading>
                  <Highlighter>{`<Heading as="h1" size="lg">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text fontSize="md">I'm some medium-sized text</Text>
                  <Highlighter>{`<Text fontSize="md">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Code>I'm a code snippet</Code>
                  <Highlighter>{`<Code>I'm a code snippet</Code>`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text fontSize="md">I'm some medium-sized text</Text>
                  <Highlighter>{`<Text fontSize="md">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text fontSize={["sm", "md", "lg"]}>I'm responsive text</Text>
                  <Highlighter>{`<Text fontSize={["sm", "md", "lg"]}>`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text fontWeight="bold">I'm bold text</Text>

                  <Highlighter>{`<Text fontWeight="bold">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text letterSpacing="wide">
                    I'm text with wide letter spacing
                  </Text>

                  <Highlighter>{`<Text letterSpacing="wide">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text lineHeight="tall">I'm text with tall line height</Text>

                  <Highlighter>{`<Text lineHeight="tall">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text textAlign="center" textDecoration="underline">
                    I'm centered, underlined text
                  </Text>

                  <Highlighter>{`<Text textAlign="center" textDecoration="underline">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />
                <VStack w="100%" spacing={0}>
                  <Text fontSize={32}>fontSize={32}</Text>
                  <Highlighter>{`<Text fontSize={32}>`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text fontSize="1.5em">fontSize="1.5em"</Text>
                  <Highlighter>{`<Text fontSize="1.5em">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text fontSize="md">fontSize="md"</Text>
                  <Highlighter>{`<Text fontSize="md">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text textTransform="uppercase">
                    textTransform="uppercase"
                  </Text>
                  <Highlighter>{`<Text textTransform="uppercase">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text textTransform="capitalize">
                    textTransform="capitalize"
                  </Text>
                  <Highlighter>{`<Text textTransform="capitalize">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text textTransform="lowercase">
                    textTransform="lowercase"
                  </Text>
                  <Highlighter>{`<Text textTransform="lowercase">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text textDecoration="underline">
                    textDecoration="underline"
                  </Text>
                  <Highlighter>{`<Text textDecoration="underline">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text textDecoration="overline">
                    textDecoration="overline"
                  </Text>
                  <Highlighter>{`<Text textDecoration="overline">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Text textDecoration="line-through">
                    textDecoration="line-through"
                  </Text>
                  <Highlighter>{`<Text textDecoration="line-through">`}</Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />
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

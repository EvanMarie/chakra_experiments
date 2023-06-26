import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
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
  MyFlex,
  SectionDescription,
  SingleExample,
  HighlightText,
  HighlightExample,
  SectionHeading,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/code" size={28}>
        Code
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ When developing a website or a web application that frequently
              presents users with code snippets, highlighting and properly
              formatting the code becomes crucial. It increases readability,
              understanding, and the overall aesthetic of your site. This is
              where the <Mono>Code</Mono> component from Chakra UI shines. In
              this post, we'll delve into the usage, properties, theming, and
              much more, of this handy tool.
            </SectionDescription>
            <BasicText>
              The <Mono>Code</Mono> component in Chakra UI is designed to
              display inline code. Built from Chakra's foundational{" "}
              <Mono>Box</Mono> component, it comes with a mono font family – a
              commCodeisplaying code. The <Mono>Code</Mono> component is a
              seamless way to incorporate code in the flow of your text or UI
              elements, making it an excellent choice for developer blogs,
              documentation, or any context where you want to reference code
              inline.
            </BasicText>
            <BasicText>
              The <Mono>Code</Mono> component from Chakra UI offers an
              easy-to-implement, customizable way to integrate code snippets
              within your website or web app's UI. With customizable color
              schemes and the readability of monospace fonts, presenting code
              snippets in an aesthetic and user-friendly way is very simple and
              straightforward.
            </BasicText>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Code</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Code } from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Basic Usage</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ Using the Code component is as simple as wrapping the
                      code you wish to display within the{" "}
                      <Code>{`<Code>`}</Code> tags.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <VStack alignItems="left">
                      <Code>const greeting = "Whazzup, world!?!?";</Code>
                      <Code>console.log(greeting);</Code>
                    </VStack>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<VStack alignItems="left">
  <Code>const greeting = "Whazzup, world!?!?";</Code>
  <Code>console.log(greeting);</Code>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            {/* /* ********************************************************************* */}

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Code and Colors</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ One of the really useful features of the{" "}
                      <Mono>Code</Mono> component is the ability to change the
                      color scheme of the code display by passing the{" "}
                      <Mono>colorScheme</Mono> prop. This is especially helpful
                      when you want to color-code your commands, statements or
                      messages for clarity, or simply to align with your
                      website's theme.
                    </SectionDescription>
                    <BasicText>
                      The following example shows all the{" "}
                      <Mono>colorScheme</Mono> possibilities:
                    </BasicText>
                  </Box>

                  <MyFlex bg="background">
                    <VStack alignItems="left">
                      <Code
                        colorScheme="teal"
                        children='console.log("Code with a teal colorScheme.")'
                      />
                      <Code
                        colorScheme="purple"
                        children='console.log("Code with a purple colorScheme.")'
                      />
                      <Code
                        colorScheme="orange"
                        children='console.log("Code with a orange colorScheme.")'
                      />
                      <Code
                        colorScheme="whiteAlpha"
                        children='console.log("Code with a whiteAlpha colorScheme.")'
                      />
                      <Code
                        colorScheme="blackAlpha"
                        bg="mainText"
                        children='console.log("Code with a blackAlpha colorScheme.")'
                      />
                      <Code
                        colorScheme="red"
                        children='console.log("Code with a red colorScheme.")'
                      />
                      <Code
                        colorScheme="green"
                        children='console.log("Code with a green colorScheme.")'
                      />
                      <Code
                        colorScheme="cyan"
                        children='console.log("Code with a cyan colorScheme.")'
                      />
                      <Code
                        colorScheme="pink"
                        children='console.log("Code with a pink colorScheme.")'
                      />
                      <Code
                        colorScheme="linkedin"
                        children='console.log("Code with a linkedin colorScheme.")'
                      />
                      <Code
                        colorScheme="facebook"
                        children='console.log("Code with a facebook colorScheme.")'
                      />
                      <Code
                        colorScheme="messenger"
                        children='console.log("Code with a messenger colorScheme.")'
                      />
                      <Code
                        colorScheme="whatsapp"
                        children='console.log("Code with a whatsapp colorScheme.")'
                      />
                      <Code
                        colorScheme="twitter"
                        children='console.log("Code with a twitter colorScheme.")'
                      />
                      <Code
                        colorScheme="telegram"
                        children='console.log("Code with a telegram colorScheme.")'
                      />
                    </VStack>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<VStack alignItems="left">
  <Code
    colorScheme="teal"
    children='console.log("Code with a teal colorScheme.")'
  />
  <Code
    colorScheme="purple"
    children='console.log("Code with a purple colorScheme.")'
  />
  <Code
    colorScheme="orange"
    children='console.log("Code with a orange colorScheme.")'
  />
  <Code
    colorScheme="whiteAlpha"
    children='console.log("Code with a whiteAlpha colorScheme.")'
  />
  <Code
    colorScheme="blackAlpha"
    bg="mainText"
    children='console.log("Code with a blackAlpha colorScheme.")'
  />
  <Code
    colorScheme="red"
    children='console.log("Code with a red colorScheme.")'
  />
  <Code
    colorScheme="green"
    children='console.log("Code with a green colorScheme.")'
  />
  <Code
    colorScheme="cyan"
    children='console.log("Code with a cyan colorScheme.")'
  />
  <Code
    colorScheme="pink"
    children='console.log("Code with a pink colorScheme.")'
  />
  <Code
    colorScheme="linkedin"
    children='console.log("Code with a linkedin colorScheme.")'
  />
  <Code
    colorScheme="facebook"
    children='console.log("Code with a facebook colorScheme.")'
  />
  <Code
    colorScheme="messenger"
    children='console.log("Code with a messenger colorScheme.")'
  />
  <Code
    colorScheme="whatsapp"
    children='console.log("Code with a whatsapp colorScheme.")'
  />
  <Code
    colorScheme="twitter"
    children='console.log("Code with a twitter colorScheme.")'
  />
  <Code
    colorScheme="telegram"
    children='console.log("Code with a telegram colorScheme.")'
  />
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
            {/* /* ********************************************************************* */}
            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Code and Font Sizes</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ The Code component in Chakra UI uses a monospace font by
                      default, but what if you want to change the font size?
                      This can be easily accomplished by using the fontSize prop
                      with the Code component.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <VStack spacing={3} alignItems="left">
                      <Code fontSize="xs">const size = 'extra small';</Code>
                      <Code fontSize="sm">const size = 'small';</Code>
                      <Code fontSize="md">const size = 'medium';</Code>
                      <Code fontSize="lg">const size = 'large';</Code>
                      <Code fontSize="xl">const size = 'extra large';</Code>
                    </VStack>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<VStack spacing={3} alignItems="left">
  <Code fontSize="xs">const size = 'extra small';</Code>
  <Code fontSize="sm">const size = 'small';</Code>
  <Code fontSize="md">const size = 'medium';</Code>
  <Code fontSize="lg">const size = 'large';</Code>
  <Code fontSize="xl">const size = 'extra large';</Code>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
            {/* /* ********************************************************************* */}
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Adding hover effects</b>: While <b>Code</b> is a component
              mainly used for displaying inline code, you can also use it for
              other purposes, like adding hover effects to text to provide
              additional information or context.
            </HighlightText>
            <HighlightExample h="50px">
              <MyFlex>
                <Code
                  colorScheme="purple"
                  _hover={{ bg: "purple.500", color: "white" }}
                >
                  Hover over me
                </Code>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Code
  colorScheme="purple"
  _hover={{ bg: "purple.500", color: "white" }}
>
  Hover over me
</Code>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Using with Tooltip for additional context</b>: Sometimes, your
              code or text inside the <b>Code</b> component might need
              additional context. You can pair the <b>Code</b> component with
              the <b>Tooltip</b>
              component to give more information when users hover over it.
            </HighlightText>
            <HighlightExample h="50px">
              <MyFlex>
                <Tooltip
                  bg="accent_1"
                  color="background"
                  placement="top"
                  label="Here is some more information"
                >
                  <Code colorScheme="purple">Hover for info</Code>
                </Tooltip>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Tooltip label="Here is some more information">
        <Code colorScheme="purple">Hover for info</Code>
      </Tooltip>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Aesthetic Use</b>: You can use the <b>Code</b> component to
              highlight or draw attention to certain parts of non-code text by
              incorporating it within the <b>Text</b> or <b>Heading</b>
              components. In this example, the <b>Code</b> component is used to
              highlight the word "settings" in a sentence. This makes it
              visually distinct, drawing the reader's attention to that
              particular word, making your UI more dynamic and engaging, and
              also improving user experience by guiding the user's attention to
              where it's needed most.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <Text fontSize="lg">
                  Please make sure to check the{" "}
                  <Code colorScheme="red">settings</Code> before proceeding.
                </Text>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Text fontSize="lg">
  Please make sure to check the
  <Code colorScheme="red">settings</Code> before proceeding.
</Text>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

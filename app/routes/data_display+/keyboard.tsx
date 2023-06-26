import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

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
  MyFlex,
  SectionDescription,
  SingleExample,
  HighlightText,
  HighlightExample,
  SectionHeading,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { CBlock, ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code, HStack, Kbd, Text, VStack } from "@chakra-ui/react";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

const kbdStyles = {
  bg: "background",
  color: "mainText",
};

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/kbd" size={28}>
        Keyboard Key
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Keyboard Key component, or <Mono>Kbd</Mono> as it is better
              known in Chakra UI, is a design tool that provides a visual guide
              to the keystrokes or keyboard combinations required to perform
              certain actions. This allows for an enhanced user experience,
              providing quick visual cues to the user and making complex
              applications more intuitive to navigate.
            </SectionDescription>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Kbd</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Kbd } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>How It Works</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ Let's say you have a feature in your application where
                      pressing <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd> initiates a
                      printing action. Using the Kbd component, you can display
                      this shortcut to your users as shown in the following
                      example. The resultant display will visually isolate the
                      keys involved in the shortcut, making it easy for users to
                      understand.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <CBlock>
                      <Code>{`<span>`}</Code>
                      <Code>{`  <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd>`}</Code>
                      <Code>{`<span>`}</Code>
                    </CBlock>
                    <h3>creates</h3>
                    <span>
                      <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd>
                    </span>
                  </MyFlex>
                </SectionContainer>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Guidelines and Best Practices</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ The <Mono>Kbd</Mono> component is most effective when
                      used with a consistent style that matches the appearance
                      of the user's keyboard. For single letter keys (
                      <Kbd>A</Kbd>, <Kbd>B</Kbd>, <Kbd>C</Kbd>, etc.), always
                      use uppercase. However, for non-letter keys like{" "}
                      <Kbd>enter</Kbd>, <Kbd>shift</Kbd>, <Kbd>ctrl</Kbd>, etc.,
                      stick to lowercase. Also, use the <Kbd>+</Kbd> symbol to
                      indicate that a combination of keys activates the
                      shortcut.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <span>
                      <Kbd>Ctrl</Kbd> + <Kbd>F5</Kbd>
                    </span>{" "}
                    <br />
                    <CBlock>
                      <Code>{`<span>`}</Code>
                      <Code>{`<Kbd>Ctrl</Kbd> + <Kbd>P</Kbd>`}</Code>
                      <Code>{`</span>`}</Code>
                    </CBlock>
                  </MyFlex>
                </SectionContainer>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Consecutive Key Presses</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ In the event that an action involves a sequence of keys
                      where one key must be pressed after the other, use the
                      word "then" in lowercase.{" "}
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <span>
                      <Kbd>Alt</Kbd> then <Kbd>F4</Kbd>
                    </span>
                    <br />
                    <CBlock>
                      <Code>{`<span>`}</Code>
                      <Code>{`<Kbd>Alt</Kbd> then <Kbd>F4</Kbd>`}</Code>
                      <Code>{`</span>`}</Code>
                    </CBlock>
                  </MyFlex>
                </SectionContainer>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Flexibility</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ In cases where different keys execute the same action or
                      the shortcut may appear differently on the user's
                      keyboard, use "or" between the keys.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <span>
                      <Kbd>Ctrl</Kbd> or <Kbd>Cmd</Kbd> + <Kbd>S</Kbd>
                    </span>
                    <br />
                    <CBlock>
                      <Code>{`<span>`}</Code>
                      <Code>{`<Kbd>Ctrl</Kbd> or <Kbd>Cmd</Kbd> + <Kbd>S</Kbd>`}</Code>
                      <Code>{`</span>`}</Code>
                    </CBlock>
                  </MyFlex>
                </SectionContainer>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Keyboard Shortcuts Guide</b>: For complex applications that
              have a variety of keyboard shortcuts, you can use the <b>Kbd</b>{" "}
              component to create a comprehensive shortcut guide. This guide
              would allow users to easily understand the different keyboard
              shortcuts available and how to use them, enhancing accessibility
              and usability, particularly for power users who prefer keyboard
              interactions.
            </HighlightText>
            <HighlightExample h="200px">
              <MyFlex>
                <VStack align="start" spacing={0}>
                  <Text
                    mt={2}
                    border="1px solid"
                    borderRadius="md"
                    paddingX={2}
                  >
                    Shortcut Combinations
                  </Text>
                  <HStack spacing={4}>
                    <Text>
                      <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>:
                    </Text>
                    <Text>Copy</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Text>
                      <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>:
                    </Text>
                    <Text>Paste</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Text>
                      <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>:
                    </Text>
                    <Text>Save</Text>
                  </HStack>
                </VStack>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<VStack align="start" spacing={0}>
  <HStack spacing={4}>
    <Text>
      <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>:
    </Text>
    <Text>Copy</Text>
  </HStack>
  <HStack spacing={4}>
    <Text>
      <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>:
    </Text>
    <Text>Paste</Text>
  </HStack>
  <HStack spacing={4}>
    <Text>
      <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>:
    </Text>
    <Text>Save</Text>
  </HStack>
</VStack>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Keyboard Navigation Instructions</b>: In web applications that
              support keyboard navigation (using arrow keys, tab key, etc.), the
              Kbd component can be used to provide clear instructions to users.
              It assists in enhancing the user experience by making navigation
              options more evident.
            </HighlightText>
            <HighlightExample h="140px">
              <MyFlex>
                {" "}
                <VStack align="start" spacing={0}>
                  <Text>Keyboard Navigation</Text>
                  <HStack spacing={4}>
                    <Text>Next Item:</Text>
                    <Kbd>&rarr;</Kbd>
                  </HStack>
                  <HStack spacing={4}>
                    <Text>Previous Item:</Text>
                    <Kbd>&larr;</Kbd>
                  </HStack>
                  <HStack spacing={4}>
                    <Text>Select Item:</Text>
                    <Kbd>Enter</Kbd>
                  </HStack>
                </VStack>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<VStack align="start" spacing={0}>
  <Text>Keyboard Navigation</Text>
  <HStack spacing={4}>
    <Text>Next Item:</Text>
    <Kbd>&rarr;</Kbd>
  </HStack>
  <HStack spacing={4}>
    <Text>Previous Item:</Text>
    <Kbd>&larr;</Kbd>
  </HStack>
  <HStack spacing={4}>
    <Text>Select Item:</Text>
    <Kbd>Enter</Kbd>
  </HStack>
</VStack>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Keyboard-Related Tutorials</b>: If you are creating content
              that teaches users about programming, CLI commands, or any other
              topic that requires keyboard inputs, the <b>Kbd</b> component can
              be a great way to highlight the keys or key combinations users
              need to use.
            </HighlightText>
            <HighlightExample h="100px">
              <MyFlex>
                {" "}
                <VStack align="start">
                  <Text>To run the program, use:</Text>
                  <HStack>
                    <Kbd>python</Kbd>
                    <Text mb={0}>filename.py</Text>
                  </HStack>
                </VStack>
              </MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

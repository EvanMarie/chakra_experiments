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
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Typography from "~/mardownExamples/typography/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  HighlightOne,
  HighlightTwo,
  HighlightThree,
  HighlightFour,
  HighlightFive,
} from "~/components/typography/highlightComponents";
import {
  HighlightFunctionEight,
  HighlightFunctionSeven,
  HighlightFunctionSix,
} from "~/components/typography/highlightFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/highlight" size={28}>
        Highlight
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI's <Mono>Highlight</Mono> component allows you to
              highlight substrings within a text. It provides a simple and
              convenient way to emphasize specific words or phrases. You can
              render the main string as children of the <Mono>Highlight</Mono>{" "}
              component and pass the word(s) you want to highlight to the query
              prop. You can also use the style prop to define the
              characteristics for the highlighted parts.
            </SectionDescription>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Highlight</Mono> component can be imported as
                  follows:
                </BasicText>
                <Highlighter>{`import { Highlight } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <HighlightOne />
                <ModalCode>
                  <Highlighter>{`<Highlight
  query="important"
  styles={{ px: "2", py: "1", bg: "green.300" }}
>
  It is crucial to prioritize important tasks in your workflow.
</Highlight>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HighlightTwo />
                <ModalCode>
                  <Highlighter>{` <Heading lineHeight="tall">
  <Highlight
    query="key"
    styles={{ px: "2", py: "1", rounded: "full", bg: "purple.400" }}
  >
    Key concepts
  </Highlight>{" "}
  should be clearly explained in your documentation.
</Heading>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HighlightThree />
                <ModalCode>
                  <Highlighter>{`<Heading lineHeight="tall">
  <Highlight
    query={["efficiency", "accuracy", "consistency"]}
    styles={{ px: "2", py: "1", rounded: "full", bg: "cyan.300" }}
  >
    Ensuring efficiency, accuracy, and consistency in your work is
    essential.
  </Highlight>
</Heading>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HighlightFour />
                <ModalCode>
                  <Highlighter>{`<Text>Search results for: "product"</Text>
<Text mt="6" fontWeight="bold">
  <Highlight query="product" styles={{ py: "1", fontWeight: "normal" }}>
    The new product launch has been well-received by customers.
  </Highlight>
</Text>
<Text fontWeight="bold">
  <Highlight query="product" styles={{ py: "1", fontWeight: "normal" }}>
    Improving the product quality is a top priority for our team.
  </Highlight>
</Text>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HighlightFive />
                <ModalCode>
                  <Typography.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Real-Time Highlighting</b>: You can dynamically highlight
              specific words or phrases in a user-inputted sentence in
              real-time. This interactive component allows users to input a
              keyword and a sentence, and the keyword will be highlighted
              wherever it appears in the sentence. It provides a seamless way to
              visually emphasize important terms or search for specific content
              within a text.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <HighlightFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H04 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Search Highlight</b>: You can use the <b>Highlight</b>{" "}
              component to create an interactive document viewer with
              highlighting capabilities. This can be helpful when users need to
              search for specific terms or navigate through a lengthy document.
              By allowing users to input search queries, the <b>Highlight</b>{" "}
              component can dynamically highlight the matched terms, enabling
              users to locate relevant information quickly within the document.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <HighlightFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H05 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Social Media Highlighter</b>: This is a creative use of the{" "}
              <b>Highlight</b> component that allows users to write a message
              and highlight @ mentions and hashtags within the text. As a user
              types in the <b>Textarea</b> input, any mentions or hashtags (text
              starting with '@' or '#') are automatically highlighted using the{" "}
              <b>Highlight</b> component. This component can be useful in social
              media-related applications or any scenario where highlighting
              specific keywords or tags is necessary.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <HighlightFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H06 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

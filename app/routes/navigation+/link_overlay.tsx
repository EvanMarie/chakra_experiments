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
import * as Navigation from "~/mardownExamples/navigation/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code } from "@chakra-ui/react";
import {
  LinkOverlayOne,
  LinkOverlayTwo,
} from "~/components/navigation/linkOverlayComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel
        link="https://chakra-ui.com/docs/components/link-overlay"
        size={28}
      >
        Link Overlay
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>LinkOverlay</Mono> component in Chakra UI serves a
              specific, yet essential role: it provides a semantic way to wrap
              complex interactive elements such as cards, blog posts, articles,
              etc., in a link.
            </SectionDescription>
            <BasicText>
              The necessity of <Mono>LinkOverlay</Mono> arises from the fact
              that wrapping an entire interactive component or card with an HTML{" "}
              <Code>{`<a>`}</Code> element is not considered semantic. The HTML
              specification clearly states that an <Code>{`<a>`}</Code> element
              cannot contain interactive descendants such as buttons, anchors,
              or input fields.
            </BasicText>
            <BasicText>
              <Mono>LinkOverlay</Mono> tackles this problem by overlaying a
              single link on top of the interactive element or card, and
              elevating any remaining links on top of this overlay. This ensures
              proper semantics and correct handling of nested interactive
              elements.
            </BasicText>
            <BasicText>
              LinkOverlay is usually imported alongside the LinkBox component.
              These two work together to improve link accessibility and user
              experience. Here is a further explanation of the two components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>LinkBox</HL>: a utility component that's used to create a
                  larger clickable area for one or more nested links. It doesn't
                  provide any styles of its own. The primary role of LinkBox is
                  to enhance accessibility and UX by improving the link
                  interaction area. To create a larger clickable area, you would
                  wrap the LinkBox around a block of content containing a
                  LinkOverlay component. However, please note that it's
                  important to have only one interactive child (an element with
                  click or key press interaction) within a <Mono>LinkBox</Mono>.
                </li>
                <li>
                  <HL>LinkOverlay</HL>: a component that's primarily used in
                  conjunction with <Mono>LinkBox</Mono> to create larger, more
                  accessible link areas. It is used to wrap the primary link
                  content within a <Mono>LinkBox</Mono>. The{" "}
                  <Mono>LinkOverlay</Mono> component's main function is to wrap
                  the content that should act as the main link within a LinkBox.
                  When the user clicks anywhere within the <Mono>LinkBox</Mono>,
                  they'll be directed to the URL of the <Mono>LinkOverlay</Mono>{" "}
                  component.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  LinkBox, 
  LinkOverlay } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <LinkOverlayOne />
                <ModalCode>
                  <Navigation.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkOverlayTwo />
                <ModalCode>
                  <Navigation.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

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
import * as Layout from "~/mardownExamples/layout/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code } from "@chakra-ui/react";
import {
  WrapOne,
  WrapTwo,
  WrapThree,
  WrapFour,
} from "~/components/layout/wrapComponents";
import {
  WrapFunctionFive,
  WrapFunctionSeven,
  WrapFunctionSix,
} from "~/components/layout/wrapFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/wrap" size={28}>
        Wrap
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Wrap</Mono> component in Chakra UI is a useful layout
              component that provides spacing and automatic wrapping for
              elements. It functions as a flexbox container with support for
              flex-wrap and spacing, making it particularly useful for
              organizing items such as dialog buttons, tags, and chips. The{" "}
              <Mono>Wrap</Mono> component wraps elements automatically when
              there isn't enough space to display them on a single line.
            </SectionDescription>
            <BasicText>
              The <Mono>Wrap</Mono> component itself is composed of two main
              sub-components: <Mono>Wrap</Mono> and <Mono>WrapItem</Mono>. The
              Wrap component is built on top of the Box component and renders a{" "}
              <Code>{`<ul>`}</Code> tag, while the <Mono>WrapItem</Mono>{" "}
              component is also based on the <Mono>Box</Mono> component and
              renders an HTML <Code>{`<li>`}</Code> tag.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Wrap</HL>: a high-level component that acts as the
                  container for the wrapped items and provides the necessary
                  layout and wrapping functionality.
                </li>
                <li>
                  <HL>WrapItem</HL>: sub-component of the <Mono>Wrap</Mono>{" "}
                  component, which is used to wrap individual items within the{" "}
                  <Mono>Wrap</Mono> component. Each <Mono>WrapItem</Mono>{" "}
                  represents an item to be wrapped and positioned within the
                  container.
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
    Wrap, 
    WrapItem } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <WrapOne />
                <ModalCode>
                  <Layout.E21 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <WrapTwo />
                <ModalCode>
                  <Layout.E22 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <WrapThree />
                <ModalCode>
                  <Layout.E23 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <WrapFour />
                <ModalCode>
                  <Layout.E24 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Wrapping Tags</b>: You can use the <b>Wrap</b> component to
              display product tags, filtering tags, and various other tag lists
              in a flexible and space-efficient manner. Product tags are a
              common feature in e-commerce websites, and using the <b>Wrap</b>{" "}
              component can provide an organized and visually appealing
              presentation. In this implementation, each <b>WrapItem</b>{" "}
              contains a <b>Tag</b> component that represents a product tag.
              With the <b>Wrap</b> component and appropriate spacing, the tags
              will be automatically wrapped to the next line when necessary,
              allowing for efficient use of space and improved readability.
            </HighlightText>
            <HighlightExample h="10%">
              <MyFlex>
                <WrapFunctionFive />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H22 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              Wrapping Filter Options: Similarly to the implementation above,
              you can use the <b>Wrap</b> component to create a flexible and
              interactive filter options layout. Filters are commonly used in
              search interfaces to refine results, and using the <b>Wrap</b>{" "}
              component can provide a user-friendly experience.
            </HighlightText>
            <HighlightExample h="10%">
              <MyFlex>
                <WrapFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H23 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Responsive Image Gallery</b>: You can use the <b>Wrap</b>{" "}
              component to create an image gallery with automatic wrapping This
              can be particularly useful when you have a dynamic set of images
              and want to display them in a visually appealing grid-like layout.
              In this example, with the <b>Wrap</b> component and proper
              spacing, the images will be automatically wrapped to the next line
              when there isn't enough space horizontally, creating a visually
              appealing image gallery.
            </HighlightText>
            <HighlightExample h="10%">
              <MyFlex>
                <WrapFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H24 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

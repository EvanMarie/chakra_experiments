import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, BlueBold, HL, Mono } from "~/styles/DesignComponents";

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
import { Box } from "@chakra-ui/react";

import {
  SimpleGridOne,
  SimpleGridTwo,
  SimpleGridThree,
  SimpleGridFour,
} from "~/components/layout/simpleGridComponents";
import {
  SimpleGridFunctionFive,
  SimpleGridFunctionSeven,
  SimpleGridFunctionSix,
} from "~/components/layout/simpleGridFunctions";

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
        link="https://chakra-ui.com/docs/components/simple-grid"
        size={28}
      >
        Simple Grid
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>SimpleGrid</Mono> component in Chakra UI is a powerful
              tool that enables developers to create responsive grid layouts
              with ease. By providing a friendly interface and a range of
              configurable options, <Mono>SimpleGrid</Mono> simplifies the
              process of designing and implementing complex grid structures.{" "}
            </SectionDescription>
            <BasicText>
              The <Mono>SimpleGrid</Mono> component offers several props that
              allow you to customize its behavior and appearance. Let's take a
              closer look at each of these props:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <BlueBold>Specifying Columns</BlueBold>: This prop specifies
                  the number of columns for the grid layout. By setting the
                  columns value to an integer, you can create a fixed number of
                  columns.
                </li>
                <li>
                  <BlueBold>Responsive Value Columns</BlueBold>: To make the
                  grid responsive, you can pass an array or an object of values
                  to the columns prop. This enables the grid layout to adjust
                  based on different screen sizes.
                </li>
                <li>
                  <BlueBold>Auto-Responsive Grid</BlueBold>: Instead of
                  explicitly specifying the number of columns, you can rely on
                  the auto-responsive behavior of <Mono>SimpleGrid</Mono>. By
                  setting the <Mono>minChildWidth</Mono> prop, you define the
                  minimum width a child element should have before the layout
                  adjusts. This approach uses CSS grid's auto-fit and minmax()
                  internally
                </li>
                <li>
                  <BlueBold>Column and Row Spacing</BlueBold>:{" "}
                  <Mono>SimpleGrid</Mono> allows you to modify the spacing
                  between grid items. You can use the <Mono>spacing</Mono> prop{" "}
                  to change both row and column spacing uniformly, or use{" "}
                  <Mono>spacingX</Mono> and <Mono>spacingY</Mono> to define
                  spacing for columns and rows separately.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                The Chakra UI <Mono>SimpleGrid</Mono> component simplifies the
                creation of responsive grid layouts. Its flexible props and
                subcomponents can help developers achieve versatile grid
                structures while maintaining a responsive design.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>SimpleGrid</Mono> component can be imported as
                  follows:
                </BasicText>
                <Highlighter>{`import { SimpleGrid } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SimpleGridOne />
                <ModalCode>
                  <Layout.E12 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SimpleGridTwo />
                <ModalCode>
                  <Layout.E13 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SimpleGridThree />
                <ModalCode>
                  <Layout.E14 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SimpleGridFour />
                <ModalCode>
                  <Layout.E15 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              {" "}
              Dynamic Image Gallery: With <b>SimpleGrid</b>, you can create a
              stunning image gallery that dynamically adjusts the size of each
              image based on the available space. This provides a visually
              pleasing and responsive experience for users. The following image
              grid is set to have three columns when space allows, but will
              adjust to one column otherwise.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <SimpleGridFunctionFive />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H16 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              {" "}
              <b>Interactive Comparison Cards</b>: <b>SimpleGrid</b> can be used
              creatively to display interactive comparison cards, making it easy
              for users to compare different options or features. These cards
              are completely responsive, adjusting each element to fit the
              available space at each screen size level.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex padding={0}>
                <SimpleGridFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              {" "}
              <Layout.H17 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Data Dashboard Cards</b>: <b>SimpleGrid</b> can be used to
              build a data dashboard that displays different metrics and
              information cards in a grid layout. This allows users to have a
              comprehensive overview of the data at a glance.
            </HighlightText>
            <HighlightExample h="100%" p={0}>
              <MyFlex p={0}>
                <SimpleGridFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              {" "}
              <Layout.H18 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

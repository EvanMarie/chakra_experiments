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
  SectionHeading,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Layout from "~/mardownExamples/layout/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code } from "@chakra-ui/react";

import {
  GridOne,
  GridTwo,
  GridThree,
  GridFour,
} from "~/components/layout/gridComponents";
import {
  GridFunctionEight,
  GridFunctionSeven,
  GridFunctionSix,
} from "~/components/layout/gridFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/grid" size={28}>
        Grid
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionContainer>
              <SectionHeading>Background: CSS Grid</SectionHeading>
              <Box>
                <SectionDescription>
                  ⦾ CSS Grid is a powerful layout system in CSS that allows you
                  to create complex grid-based layouts for web pages. It
                  introduces a two-dimensional grid structure, enabling precise
                  control over the placement and alignment of elements within
                  the grid.
                </SectionDescription>
                <BasicText>
                  Here are some key concepts and features of CSS Grid:
                </BasicText>
                <BulletBox>
                  <ul>
                    <li>
                      <BlueBold>Grid Container</BlueBold>: The parent element
                      that contains all the grid items. It is defined by the{" "}
                      <Mono>display: grid</Mono> property.
                    </li>
                    <li>
                      <BlueBold>Grid Item</BlueBold>: The child elements of the
                      grid container. They are defined by the{" "}
                      <Mono>grid-column-start</Mono>,{" "}
                      <Mono>grid-column-end</Mono>, <Mono>grid-row-start</Mono>,
                      and <Mono>grid-row-end</Mono> properties.
                    </li>
                    <li>
                      <BlueBold>Grid Line</BlueBold>: The horizontal and
                      vertical lines that divide up the grid structure. They are
                      defined by the <Mono>grid-column</Mono> and{" "}
                      <Mono>grid-row</Mono> properties. Grid lines can be
                      numbered or named for easier reference.
                    </li>
                    <li>
                      <BlueBold>Grid Track</BlueBold>: The space between two
                      adjacent grid lines. They are defined by the{" "}
                      <Mono>grid-template-columns</Mono> and{" "}
                      <Mono>grid-template-rows</Mono> properties.
                    </li>
                    <li>
                      <BlueBold>Grid Template</BlueBold>: The configuration of
                      rows, columns, and areas within the grid. It is defined
                      using properties like <Mono>grid-template-rows</Mono>,{" "}
                      <Mono>grid-template-columns</Mono>, and{" "}
                      <Mono>grid-template-areas</Mono>.
                    </li>
                    <li>
                      <BlueBold>Grid Cell</BlueBold>: The space between two
                      adjacent grid lines. They are defined by the{" "}
                      <Mono>grid-template-columns</Mono> and{" "}
                      <Mono>grid-template-rows</Mono> properties.
                    </li>
                    <li>
                      <BlueBold>Grid Area</BlueBold>: The space between two
                      adjacent grid lines. They are defined by the{" "}
                      <Mono>grid-template-columns</Mono> and{" "}
                      <Mono>grid-template-rows</Mono> properties.
                    </li>
                    <li>
                      <BlueBold>Grid Placement</BlueBold>: The process of
                      positioning grid items within the grid. Items can be
                      placed explicitly using line numbers, named areas, or
                      using properties like <Mono>grid-row</Mono> and{" "}
                      <Mono>grid-column</Mono>.
                    </li>
                    <li>
                      <BlueBold>Grid Alignment</BlueBold>: The ability to align
                      grid items within their grid cells or the grid container
                      using alignment properties like <Mono>justify-items</Mono>
                      , <Mono>align-items</Mono>, <Mono>justify-content</Mono>,
                      and <Mono>align-content</Mono>.
                    </li>
                  </ul>
                </BulletBox>
              </Box>
            </SectionContainer>
          </SectionContainer>
          <SectionContainer>
            <SectionHeading>Chakra UI Grid</SectionHeading>
            <Box>
              <SectionDescription>
                ⦾ Chakra UI's Grid component abstracts away the complexities of
                CSS Grid by providing a clean and declarative API. It
                encapsulates the underlying CSS Grid concepts and properties,
                allowing you to create sophisticated grid layouts with ease.
              </SectionDescription>
              <BasicText>
                By using Chakra UI's Grid component, you can achieve consistent
                and responsive grid layouts throughout your application. It
                streamlines the process of creating grids, reduces the amount of
                code you need to write, and enhances the overall developer
                experience.
              </BasicText>
            </Box>
            <BulletBox>
              <ul>
                <li>
                  <HL>Grid</HL>: The main wrapper that applies the grid layout.
                  It utilizes the CSS <Code>{`display: grid`}</Code> property to
                  establish a grid container.
                </li>
                <li>
                  <HL>GridItem</HL>: Used as a child of <Mono>Grid</Mono> to
                  control the <Mono>span</Mono> and <Mono>start</Mono> positions
                  within the grid. It allows you to specify the width, height,
                  and background color of each grid item.
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
    Grid,
    GridItem } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <GridOne />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <GridTwo />
                <ModalCode>
                  <Layout.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <GridThree />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <GridFour />
                <ModalCode>
                  <Layout.E11 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Avatar Gallery</b>: The Grid component from Chakra UI is a
              flexible and efficient way to layout content. The usage here
              relies on CSS Grid and it gives us the ability to define a
              responsive grid system with a clean, readable syntax. The avatars
              are arranged in this grid, and every avatar alternates between two
              sizes at a certain interval.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <GridFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H13 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Responsive Dashboard Layout</b>: You can use the <b>Grid</b>{" "}
              component to create a responsive dashboard layout. With grid
              templates, you can structure your dashboard with multiple panels
              and widgets that adapt to different screen sizes, providing an
              optimal user experience. In this example, the grid layout is set
              to have a flexible number of columns, and the rows are equally
              distributed. The areas within the grid are assigned using{" "}
              <b>gridArea</b> to create the top, middle, and bottom section.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <GridFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H14 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Masonry-Style Grid Layout</b>: This is a popular design pattern
              where items are positioned optimally, creating a dynamic and
              visually appealing arrangement. In a Masonry grid, items are
              positioned in such a way that they fill the available horizontal
              space while maintaining a balanced and visually pleasing
              arrangement. This means that shorter items will be placed in the
              empty spaces below taller items, creating a cascading effect.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <GridFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H15 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

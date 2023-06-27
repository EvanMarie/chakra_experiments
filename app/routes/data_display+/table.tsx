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
import * as Data from "~/mardownExamples/data_display/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code } from "@chakra-ui/react";
import {
  TableFive,
  TableFour,
  TableOne,
  TableThree,
  TableTwo,
} from "~/components/data_display/tableComponents";
import TaskTable, {
  ExpandingTableRow,
  InteractiveTableRow,
} from "~/components/data_display/tableFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/table" size={28}>
        Table
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ A well-designed table component is fundamental for displaying
              large amounts of data in an organized and user-friendly manner.
              The <Mono>Table</Mono> component from Chakra UI is a powerful and
              flexible tool that you can use to display data in a clear,
              readable, and stylish manner. The <Mono>Table</Mono> component in
              Chakra UI is used to organize and display data efficiently. By
              default, it renders a <Code>{`<table>`}</Code> HTML element, but
              with additional functionality and style enhancements.
            </SectionDescription>

            <BasicText>
              The <Mono>Table</Mono> component in Chakra UI is made up of
              several subcomponents, each playing an important role in the
              overall structure and functionality.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Table</HL>: The main container for the table that sets up
                  the necessary styling and context for its child components.
                </li>
                <li>
                  <HL>Thead</HL>: Defines a table header section. This is where
                  you would place your table header row(s).
                </li>
                <li>
                  <HL>Tbody</HL>: Defines a table body section. This contains
                  all of your main data rows.
                </li>
                <li>
                  <HL>Tfoot</HL>: Defines a table footer section. This is an
                  optional section that can be used for summing up data or
                  providing additional table details.
                </li>
                <li>
                  <HL>Tr</HL>: Represents a table row. This is a container for
                  table cell components.
                </li>
                <li>
                  <HL>Th</HL>: Represents a table header cell. It provides
                  labeling information for its respective column.
                </li>
                <li>
                  <HL>Td</HL>: Represents a table data cell. This is where
                  individual pieces of data are displayed in their respective
                  rows and columns.
                </li>
                <li>
                  <HL>TableCaption</HL>: An optional component that provides a
                  label or summary for the table.
                </li>
                <li>
                  <HL>TableContainer</HL>: A wrapper around the Table that
                  provides a means of controlling the overflow of content.
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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TableOne />
                <ModalCode>
                  <Data.E11 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample paddingY={0}>
                <TableTwo />
                <ModalCode>
                  <Data.E12 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample paddingY={0}>
                <TableThree />
                <ModalCode>
                  <Data.E13 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TableFour />
                <ModalCode>
                  <Data.E14 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TableFive />
                <ModalCode>
                  <Data.E15 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        {/* ********************************************************************* */}
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Interactive Table Rows</b>: You can make your table rows
              interactive, enhancing user experience, especially when the table
              is used to display a list of items that the user can select. In
              the following table, you can click on any row to find out more
              about the individual listed.
            </HighlightText>
            <HighlightExample h="175px">
              <MyFlex>
                <InteractiveTableRow />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H06 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Expanding Table Rows</b>: You can create tables with expanding
              rows. This is useful when you want to provide more information
              without cluttering the table. This example demonstrates how to
              create an expandable row within a table. When a row is clicked,
              more information is displayed below it. The table can be clicked
              again to collapse the row back to its original size. This can
              improve your UI by decluttering information and displaying it only
              when necessary.
            </HighlightText>
            <HighlightExample h="200px">
              <MyFlex>
                <ExpandingTableRow />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H07 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Custom Cell Rendering</b>: You can customize the rendering of
              your table cells. In some cases, you may want to display custom
              content in table cells. For example, you might want to show
              progress bars, tags, or even buttons. Chakra UI Table component
              can handle this with ease. It allows you to create rich,
              interactive tables that can display a variety of custom
              components, giving you maximum flexibility in how you present your
              data.
            </HighlightText>
            <HighlightExample h="150px">
              <MyFlex>
                <TaskTable />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H08 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

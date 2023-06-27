import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  TableFunctionFive,
  TableFunctionFour,
  TableFunctionOne,
  TableFunctionThree,
  TableFunctionTwo,
} from "./tableFunctions";

/* ********************************************************************** */

export function TableOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This first example creates a simple table displaying the different
          types of coffee and their descriptions. In this example, we've created
          a simple table with a caption and two columns: one for the type of
          coffee and another for its description. We've filled the table body
          with three rows of data, each representing a type of coffee.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TableFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TableTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Striped Table</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can also easily add striped rows to your table to enhance
          readability. Here, we've added the <Mono>variant="striped"</Mono> and{" "}
          <Mono>colorScheme="blue"</Mono> props to the <Mono>Table</Mono>{" "}
          component. The <Mono>variant</Mono> prop changes the table's look, and
          the <Mono>colorScheme</Mono> prop changes the table's color theme.
          Keep in mind here that I have a detailed extended theme in Chakra, so
          my colors will vary greatl from the defaults.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TableFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TableThree() {
  return (
    <SectionContainer>
      <SectionHeading>Table Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI provides three sizes for tables: <Mono>sm</Mono>,{" "}
          <Mono>md</Mono>, <Mono>lg</Mono>. By default, the size is{" "}
          <Mono>md</Mono>. In the following example, we've added the{" "}
          <Mono>size='sm'</Mono> prop to the <Mono>Table</Mono> component to
          create a small-sized table and <Mono>size="lg"</Mono> to the second
          table.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TableFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TableFour() {
  return (
    <SectionContainer>
      <SectionHeading>The Table Container</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>TableContainer</Mono> component is a wrapper for the{" "}
          <Mono>Table</Mono> component that can help manage the display and
          overflow of your tables, especially useful when you're dealing with
          large data sets that would otherwise overflow their container. Here we
          are wrapping the <Mono>TableContainer</Mono> in a <Mono>Box</Mono>{" "}
          component that has a maximum width set. This will prevent the{" "}
          <Mono>TableContainer</Mono> from growing beyond this width. The{" "}
          <Mono>TableContainer</Mono> will then manage the display of the{" "}
          <Mono>Table</Mono> within it, providing scrollbars as necessary to
          navigate larger data sets.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TableFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TableFive() {
  return (
    <SectionContainer>
      <SectionHeading>Complex Table</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ We will now explore creating a more complex table with multiple
          types of data. In this example, we have a more complex table
          displaying an inventory of a coffee shop. We've added a new{" "}
          <Mono>Tfoot</Mono> section that totals up the quantities and prices of
          all products. We've also made use of the isNumeric prop on{" "}
          <Mono>Th</Mono> and <Mono>Td</Mono> components, which aligns the text
          to the right, which is standard for numeric data.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TableFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

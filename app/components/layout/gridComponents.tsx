import { Box, Code, Flex, Grid, VStack } from "@chakra-ui/react";
import {
  BasicText,
  BlueBold,
  GridStyles,
  Mono,
  MyDivider,
  boxColors,
  gridBoxStyles,
} from "~/styles/DesignComponents";
import {
  BulletBox,
  GridBoxDefaults,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import * as Layout from "~/mardownExamples/layout/index";
import {
  GridFunctionOne,
  GridFunctionTwo,
  GridFunctionThree,
  GridFunctionFour,
  GridFunctionFive,
  GridFunctionSix,
  GridFunctionSeven,
} from "./gridFunctions";
import { ModalCode } from "~/styles/CodeDesignComponents";

/* ********************************************************************** */

export function GridOne() {
  return (
    <SectionContainer>
      <SectionHeading>Template Columns</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ <Mono>Template columns</Mono> allow you to define the structure and
          sizing of columns within a grid layout. When using template columns,
          you can specify the width of each column individually or use
          predefined values like percentages, fractions, or fixed units such as
          pixels. You can also use the repeat() function to specify the number
          of columns and their width. This provides flexibility in creating
          responsive grid layouts that adapt to different screen sizes and
          content requirements.
        </SectionDescription>
        <BasicText>
          <Mono>Grid</Mono>'s variety with template columns provides flexibility
          in creating responsive grid layouts that adapt to different screen
          sizes and content requirements. Thus, by utilizing{" "}
          <Mono>template columns</Mono>, you have control over the layout and
          width of individual columns within the grid, enabling you to create
          versatile and responsive designs.
        </BasicText>

        <VStack px={4} w="100%" spacing={4} align="center">
          <MyDivider w="70%" />
          <BasicText>
            In the following example, you can experiment with the number of
            columns that compose the grid. This kind of immediate visual
            feedback offers a more intuitive understanding of how grid works.
          </BasicText>
          <MyFlex bg="background">
            <GridFunctionOne />
          </MyFlex>{" "}
          <ModalCode>
            <Layout.E07 />
          </ModalCode>
          <MyDivider w="70%" />
          <VStack w="100%" spacing={0} align="center">
            <BasicText>
              The next few examples show various configurations of template
              columns.
            </BasicText>
            <Flex w="100%" justify="flex-start">
              <Code>{`<Grid templateColumns="1fr 1fr 1fr">`}</Code>
            </Flex>
            <Box w="100%">
              <Grid templateColumns="1fr 1fr 1fr" {...GridStyles}>
                <Box {...gridBoxStyles} bg={boxColors.one}>
                  Column 1
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.two}>
                  Column 2
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.three}>
                  Column 3
                </Box>
              </Grid>
            </Box>
          </VStack>
          <VStack w="100%" spacing={0} align="center">
            <Flex w="100%" justify="flex-start">
              <Code>{`<Grid templateColumns="33% 33% 33%">`}</Code>
            </Flex>
            <Box w="100%">
              <Grid templateColumns="33% 33% 33%" {...GridStyles}>
                <Box {...gridBoxStyles} bg={boxColors.one}>
                  Column 1
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.two}>
                  Column 2
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.three}>
                  Column 3
                </Box>
              </Grid>
            </Box>
          </VStack>
          <VStack w="100%" spacing={0} align="center">
            <Flex w="100%" justify="flex-start">
              <Code>{`<Grid templateColumns="100px 1fr 1fr">`}</Code>
            </Flex>
            <Box w="100%">
              <Grid templateColumns="100px 1fr 1fr" {...GridStyles}>
                <Box {...gridBoxStyles} bg={boxColors.one}>
                  Column 1
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.two}>
                  Column 2
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.three}>
                  Column 3
                </Box>
              </Grid>
            </Box>
          </VStack>
          <VStack w="100%" spacing={0} align="center">
            <VStack w="100%" spacing={0} align="flex-start">
              <Code>{`<Grid templateColumns="sidebar-start 1fr 1fr"`}</Code>
              <Code>{`templateColumnAreas="'sidebar-start content content'">`}</Code>
            </VStack>
            <Box w="100%">
              <Grid templateColumns="100px 1fr 1fr" {...GridStyles}>
                <Box {...gridBoxStyles} bg={boxColors.one}>
                  Column 1
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.two}>
                  Column 2
                </Box>
                <Box {...gridBoxStyles} bg={boxColors.three}>
                  Column 3
                </Box>
              </Grid>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function GridTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Column and Row Span</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Column span and row span allow you to control the size and position
          of elements within a grid layout. Column span determines the number of
          columns an element should occupy horizontally within the grid. By
          specifying a column span value, you can make an element stretch across
          multiple columns, creating wider or narrower cells. For example, a
          column span of 2 would make an element take up the space of two
          columns, while a column span of 3 would occupy three columns, and so
          on.
        </SectionDescription>
        <BasicText>
          Row span, on the other hand, controls the number of rows an element
          should occupy vertically within the grid. Similar to column span, it
          allows you to make an element taller or shorter by specifying the
          number of rows it should span. For instance, a row span of 2 would
          make an element take up the space of two rows, while a row span of 3
          would occupy three rows, and so forth.
        </BasicText>
        <BasicText>
          By combining column span and row span, you can create more complex
          grid layouts where elements can span across multiple columns and rows,
          allowing for greater flexibility in arranging and positioning content
          within the grid. These features empower you to design responsive and
          dynamic interfaces that adapt to various screen sizes and content
          requirements.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <GridFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function GridThree() {
  return (
    <SectionContainer>
      <SectionHeading>Starting and Ending Lines</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Starting lines and ending lines refer to the positional markers that
          determine where an element begins and ends within the grid layout.
          They are used in conjunction with the column and row definitions to
          precisely position elements.
        </SectionDescription>
        <BasicText>
          Starting lines indicate the grid line where an element should start.
          Grid lines can be numbered or named, depending on how you define your
          grid. For example, you can specify that an element should start at the
          first column line, or you can use a named line like "{" "}
          <Mono>sidebar-start</Mono>" if you've defined custom grid lines.
        </BasicText>
        <BasicText>
          Ending lines, on the other hand, indicate the grid line where an
          element should end. By specifying the ending line, you determine the
          extent or limit of the element within the grid layout. This can be a
          numbered line or a named line, similar to the starting line.
        </BasicText>
        <BasicText>
          Using starting and ending lines, you can control the precise placement
          and size of elements within the grid. For example, you can specify
          that an element should start at the second column line and end at the
          fourth column line, effectively making it span across two columns.
          Similarly, you can set an element to start at the third row line and
          end at the fifth row line, spanning three rows vertically.
        </BasicText>
        <BasicText>
          By manipulating the starting and ending lines, you have fine-grained
          control over the positioning and size of elements within the grid,
          allowing you to create complex and responsive layouts.
        </BasicText>
        <BasicText>
          Below are some examples of <Mono>Grid</Mono> components with specified
          starting and ending lines.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <GridFunctionThree />
      </MyFlex>
      <BulletBox>
        <ModalCode>
          <Layout.E09 />
        </ModalCode>
        <BasicText>This example is made up of a 3 x 3 grid: </BasicText>
        <ul>
          <li>
            <BlueBold>Element A</BlueBold> starts at row 1 and ends at row 3,
            and it starts at column 1 and ends at column 3, spanning across two
            rows and two columns.
          </li>
          <li>
            <BlueBold>Element B</BlueBold> starts at row 2 and ends at row 4,
            and it starts at column 2 and ends at column 4, spanning across two
            rows and two columns.
          </li>
          <li>
            <BlueBold>Element C</BlueBold> does not have explicit starting and
            ending lines defined, so it takes up one row and one column by
            default.
          </li>
        </ul>
      </BulletBox>
      <Flex w="100%" justify="center" mb={4}>
        <MyDivider w="70%" />
      </Flex>

      <GridFunctionFour />

      <BulletBox>
        <ModalCode>
          <Layout.E10 />
        </ModalCode>
        <BasicText>
          In this example, we have a responsive grid layout:{" "}
        </BasicText>
        <ul>
          <li>
            The columns are defined using{" "}
            <Code>{`repeat(auto-fit, minmax(200px, 1fr))`}</Code>, which means
            the columns will automatically adjust their width to fit the
            available space, with a minimum width of 90px and a maximum of 1
            fraction of the available space.
          </li>
          <li>
            <BlueBold>Element A</BlueBold> starts at row 1 and spans 2 rows,
            starting at column 1 and spanning 1 column.
          </li>
          <li>
            <BlueBold>Element B</BlueBold> starts at row 1 and ends at row 2,
            starting at column 2 and ending at column 4, spanning 1 row and 3
            columns.
          </li>
          <li>
            <BlueBold>Element C</BlueBold> starts at row 2 and ends at row 3,
            starting at column 2 and ending at column 3, spanning 1 row and 1
            column.
          </li>
          <li>
            <BlueBold>Element D</BlueBold> starts at row 2 and ends at row 3,
            starting at column 3 and ending at column 4, spanning 1 row and 1
            column.
          </li>
        </ul>
      </BulletBox>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function GridFour() {
  return (
    <SectionContainer>
      <SectionHeading>Template Areas</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Template areas allow you to create complex grid layouts by defining
          named areas within the grid and assigning elements to these areas. In
          CSS Grid, template areas provide a higher-level abstraction for grid
          layouts, making it easier to visually understand and design grid-based
          structures, thanks to the placement and arrangement of elements using
          named areas, rather than specifying exact starting and ending lines
          for each element.
        </SectionDescription>
        <BasicText>
          The importance of template areas in CSS Grid lies in their ability to
          enhance readability, maintainability, and flexibility when working
          with grid layouts. By using named areas, you can define the structure
          of your grid in a more intuitive and visual manner, making it easier
          to communicate and collaborate with other developers or designers.
        </BasicText>
        <BasicText>
          Chakra UI's Grid component supports template areas by providing the
          <Mono>templateAreas</Mono> prop. With this prop, you can define the
          areas of your grid using a string-based syntax. Each line in the
          string represents a row, and each word within a line represents a
          named area for a column. By assigning the same name to multiple grid
          cells, you can create spanning areas that allow elements to occupy
          multiple cells.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <GridFunctionFive />
      </MyFlex>
      <BasicText>
        In this example, we have a grid with three rows and three columns, and
        we're using template areas to define the layout. The areas are named "
        <Mono>header</Mono>", "<Mono>sidebar</Mono>", "content", and "footer".
        The Box components are assigned to these areas using the{" "}
        <Mono>gridArea</Mono> prop, which ensures they occupy the corresponding
        cells within the grid.
      </BasicText>
    </SectionContainer>
  );
}

import {
  Box,
  Collapse,
  Divider,
  Progress,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { Highlighter } from "../styling/highlighter";
import { useState } from "react";

const maxWidths = {
  base: "325px",
  sm: "450px",
  md: "600px",
  lg: "700px",
  xl: "900px",
};

export function TableFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <TableContainer>
        <Table>
          <TableCaption>Coffee Types and Descriptions</TableCaption>
          <Thead>
            <Tr>
              <Th>Type of Coffee</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Espresso</Td>
              <Td>
                A full-flavored, concentrated form of coffee that is served in
                'shots'.
              </Td>
            </Tr>
            <Tr>
              <Td>Americano</Td>
              <Td>
                Espresso diluted with hot water, making it a less-concentrated
                version of regular espresso.
              </Td>
            </Tr>
            <Tr>
              <Td>Latte</Td>
              <Td>
                Espresso mixed with hot steamed milk, usually topped with a
                small amount of foam.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TableFunctionTwo() {
  return (
    <SingleExample bg="background">
      <TableContainer maxWidth={maxWidths}>
        <Table variant="striped" colorScheme="blue">
          <TableCaption>Striped: Coffee Types and Descriptions</TableCaption>
          <Thead>
            <Tr>
              <Th color="mainText">Type of Coffee</Th>
              <Th color="mainText">Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Espresso</Td>
              <Td>
                A full-flavored, concentrated form of coffee that is served in
                'shots'.
              </Td>
            </Tr>
            <Tr>
              <Td>Americano</Td>
              <Td>
                Espresso diluted with hot water, making it a less-concentrated
                version of regular espresso.
              </Td>
            </Tr>
            <Tr>
              <Td>Latte</Td>
              <Td>
                Espresso mixed with hot steamed milk, usually topped with a
                small amount of foam.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TableFunctionThree() {
  return (
    <SingleExample bg="background">
      <Highlighter>{`<Table size="sm"`}</Highlighter>
      <TableContainer maxWidth={maxWidths}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Type of Coffee</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Espresso</Td>
              <Td>
                A full-flavored, concentrated form of coffee that is served in
                'shots'.
              </Td>
            </Tr>
            <Tr>
              <Td>Americano</Td>
              <Td>
                Espresso diluted with hot water, making it a less-concentrated
                version of regular espresso.
              </Td>
            </Tr>
            <Tr>
              <Td>Latte</Td>
              <Td>
                Espresso mixed with hot steamed milk, usually topped with a
                small amount of foam.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <br />
      <Highlighter>{`<Table size="lg"`}</Highlighter>
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Type of Coffee</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Espresso</Td>
              <Td>
                A full-flavored, concentrated form of coffee that is served in
                'shots'.
              </Td>
            </Tr>
            <Tr>
              <Td>Americano</Td>
              <Td>
                Espresso diluted with hot water, making it a less-concentrated
                version of regular espresso.
              </Td>
            </Tr>
            <Tr>
              <Td>Latte</Td>
              <Td>
                Espresso mixed with hot steamed milk, usually topped with a
                small amount of foam.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TableFunctionFour() {
  return (
    <SingleExample bg="background">
      <Box maxW="300px">
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <Td>Espresso</Td>
                <Td>
                  A full-flavored, concentrated form of coffee that is served in
                  'shots'.
                </Td>
              </Tr>
              <Tr>
                <Td>Americano</Td>
                <Td>
                  Espresso diluted with hot water, making it a less-concentrated
                  version of regular espresso.
                </Td>
              </Tr>
              <Tr>
                <Td>Latte</Td>
                <Td>
                  Espresso mixed with hot steamed milk, usually topped with a
                  small amount of foam.
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TableFunctionFive() {
  return (
    <SingleExample bg="background">
      <TableContainer maxWidth={maxWidths}>
        <Table size="sm">
          <TableCaption>Coffee Shop Inventory</TableCaption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Description</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Espresso</Td>
              <Td>
                A full-flavored, concentrated form of coffee that is served in
                'shots'.
              </Td>
              <Td isNumeric>50</Td>
              <Td isNumeric>$3.00</Td>
            </Tr>
            <Tr>
              <Td>Americano</Td>
              <Td>
                Espresso diluted with hot water, making it a less-concentrated
                version of regular espresso.
              </Td>
              <Td isNumeric>30</Td>
              <Td isNumeric>$2.50</Td>
            </Tr>
            <Tr>
              <Td>Latte</Td>
              <Td>
                Espresso mixed with hot steamed milk, usually topped with a
                small amount of foam.
              </Td>
              <Td isNumeric>20</Td>
              <Td isNumeric>$4.00</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total Quantity</Th>
              <Th />
              <Th isNumeric>100</Th>
              <Th isNumeric>$9.50</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </SingleExample>
  );
}

/* ********************************************************************** */

const TTP = {
  table: {
    overflow: "auto",
  },
  td: {
    padding: "3px 5px",
    fontSize: { base: "12px", sm: "12px", md: "13px", lg: "11px" },
  },
  th: {
    padding: "3px 5px",
  },
  tr: {
    _hover: {
      color: "blue",
      cursor: "pointer",
    },
  },
};

export function InteractiveTableRow() {
  return (
    <TableContainer
      padding="5px"
      sx={TTP}
      width={{ base: "250px", sm: "400px", md: "500px", lg: "250px" }}
    >
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Address</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr onClick={() => alert("This is John Doe. He is a cool guy.")}>
            <Td>John Doe</Td>
            <Td>24</Td>
            <Td>123 Main St</Td>
          </Tr>
          <Tr
            onClick={() =>
              alert(
                "This is Jane Doe. She is married to John. She is kinda meh."
              )
            }
          >
            <Td>Jane Doe</Td>
            <Td>23</Td>
            <Td>123 Main St</Td>
          </Tr>
          <Tr
            onClick={() =>
              alert(
                "This is Chester. For some reason, his paws are always covered in cheese."
              )
            }
          >
            <Td>Chester Cheetah</Td>
            <Td>33</Td>
            <Td>987 Wild Cat Lane</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

/* ********************************************************************** */

export function ExpandingTableRow() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <TableContainer
      padding="5px"
      sx={TTP}
      width={{ base: "250px", sm: "400px", md: "500px", lg: "250px" }}
    >
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr onClick={handleToggle} _hover={{ cursor: "pointer" }}>
            <Td>John Doe</Td>
            <Td>24</Td>
            <Td>Click for more</Td>
          </Tr>
          <Tr>
            <Td colSpan={3}>
              <Collapse in={show}>
                <Box
                  p="6"
                  borderWidth={1}
                  borderRadius="md"
                  onClick={handleToggle}
                >
                  John Doe is a web developer living in the United States.
                </Box>
              </Collapse>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

/* ********************************************************************** */

const data = [
  { task: "Task 1", progress: 80 },
  { task: "Task 2", progress: 40 },
  { task: "Task 3", progress: 20 },
];

export default function TaskTable() {
  return (
    <TableContainer
      padding="5px"
      sx={TTP}
      width={{ base: "250px", sm: "400px", md: "500px", lg: "250px" }}
    >
      <Table>
        <Thead>
          <Tr>
            <Th>Task</Th>
            <Th>Progress</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.task}</Td>
              <Td>
                <Progress value={item.progress} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

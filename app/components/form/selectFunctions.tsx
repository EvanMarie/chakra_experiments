import { Box, Input, Select, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HiSelector } from "react-icons/hi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import { SingleExample } from "~/styles/MainDesignComponents";

export function SelectFunctionOne() {
  return (
    <SingleExample bg="background">
      <Select placeholder="Select an option..." w="100%" maxWidth="250px">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SelectFunctionTwo() {
  return (
    <SingleExample bg="background">
      <VStack spacing={3} w="100%" maxWidth="250px">
        <Select placeholder="size='xs'" size="xs" />
        <Select placeholder="size='sm'" size="sm" />
        <Select placeholder="size='medium'" size="md" />
        <Select placeholder="size='large'" size="lg" />
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SelectFunctionThree() {
  return (
    <SingleExample bg="background">
      <VStack spacing={3} w="100%" maxWidth="250px">
        <Select variant="outline" placeholder="variant='outline'" />
        <Select variant="filled" placeholder="variant='filled'" />
        <Select variant="flushed" placeholder="variant='flushed'" />
        <Select variant="unstyled" placeholder="variant='unstyled'" />
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SelectFunctionFour() {
  return (
    <SingleExample bg="background">
      <Select
        icon={<IoIosArrowDropdownCircle />}
        placeholder="IoIosArrowDropdownCircle"
        maxWidth="250px"
        fontWeight="bold"
        fontSize="80%"
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SelectFunctionFive() {
  return (
    <SingleExample bg="background">
      <Select
        bg="pink"
        borderColor="cyan"
        placeholder="bg='pink' borderColor='cyan'"
        maxWidth="250px"
        fontWeight="bold"
        fontSize="80%"
      />
    </SingleExample>
  );
}

/* ********************************************************************** */
const functionSixOptions = [
  "Apple",
  "Banana",
  "Cherry",
  "Durian",
  "Elderberry",
];

export function SelectFunctionSix() {
  const [filterValue, setFilterValue] = useState("");
  const filteredOptions = functionSixOptions.filter((option) =>
    option.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  return (
    <SingleExample bg="background">
      <Input
        placeholder="Search"
        value={filterValue}
        onChange={handleFilterChange}
        size={{ base: "md", lg: "sm" }}
      />
      <Select size={{ base: "md", lg: "sm" }} placeholder="Select option">
        {filteredOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </SingleExample>
  );
}

/* ********************************************************************** */

const functionSevenOptions = ["Red", "Green", "Blue", "Yellow"];

export function SelectFunctionSeven() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  return (
    <SingleExample bg="background">
      <Select
        icon={<HiSelector />}
        // size={{ base: "md", lg: "sm" }}
        h="105px"
        placeholder="Select options"
        multiple
        value={selectedOptions}
        onChange={handleSelectChange}
      >
        {functionSevenOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function SelectFunctionEight() {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected value:", event.target.value);
  };

  return (
    <SingleExample bg="background">
      <Box bg="sectionColor" p={2} w="100%" borderRadius="md">
        <Select
          bg="accent_2"
          fontWeight="bold"
          borderRadius="full"
          placeholder="Custom"
          icon={<RxDropdownMenu />}
          onChange={handleSelectChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </SingleExample>
  );
}

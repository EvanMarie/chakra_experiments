import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  VStack,
  useRangeSlider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RxSlider } from "react-icons/rx";
import { CartesianGrid, Line, LineChart, Text, XAxis, YAxis } from "recharts";
import { SingleExample } from "~/styles/MainDesignComponents";

export function RangeSliderFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <RangeSlider defaultValue={[23, 53]} maxWidth="400px">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RangeSliderFunctionTwo() {
  return (
    <SingleExample bg="background">
      <RangeSlider
        aria-label={["Minimum Value", "Maximum Value"]}
        colorScheme="pink"
        defaultValue={[20, 80]}
        maxWidth="400px"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RangeSliderFunctionThree() {
  return (
    <SingleExample bg="background">
      <RangeSlider
        aria-label={["Minimum Value", "Maximum Value"]}
        defaultValue={[10, 90]}
        orientation="vertical"
        minH="32"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RangeSliderFunctionFour() {
  return (
    <SingleExample bg="background">
      <RangeSlider
        aria-label={["Minimum Value", "Maximum Value"]}
        defaultValue={[30, 70]}
        maxWidth="400px"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="accent_1" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} bg="tipBackground" index={0}>
          <Box color="background" as={RxSlider} />
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={6} index={1} bg="tipBackground">
          <Box color="background" as={RxSlider} />
        </RangeSliderThumb>
      </RangeSlider>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RangeSliderFunctionFive() {
  const [selectedRange, setSelectedRange] = useState([10, 90]);

  return (
    <SingleExample bg="background">
      <RangeSlider
        defaultValue={[selectedRange[0], selectedRange[1]]}
        onChangeEnd={(value) => setSelectedRange(value)}
        min={0}
        max={300}
        maxWidth="400px"
        step={10}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="accent_2" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <Box>
        Selected Range: {selectedRange[0]} - {selectedRange[1]}
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function RangeSliderFunctionSix() {
  const min = 23;
  const max = 53;

  const [selectedRange, setSelectedRange] = useState([23, 53]);
  return (
    <SingleExample bg="background">
      {" "}
      <RangeSlider
        aria-label={["Minimum Value", "Maximum Value"]}
        defaultValue={[min, max]}
        onChangeEnd={(value) => setSelectedRange(value)}
        maxWidth="400px"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Box>
        Selected Range: {selectedRange[0]} - {selectedRange[1]}
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */
interface ColorOption {
  label: string;
  value: string;
}

const colorOptions: ColorOption[] = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
  { label: "Purple", value: "purple" },
  { label: "Orange", value: "orange" },
  { label: "Pink", value: "pink" },
  { label: "Teal", value: "teal" },
  { label: "Cyan", value: "cyan" },
  { label: "Gray", value: "gray" },
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
];

export function GradientBox() {
  const [color1, setColor1] = useState<string>(colorOptions[7].value);
  const [color2, setColor2] = useState<string>(colorOptions[6].value);
  const [color3, setColor3] = useState<string>(colorOptions[8].value);
  const [gradientValue, setGradientValue] = useState<number[]>([50, 75]);

  const handleColor1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor1(event.target.value);
  };

  const handleColor2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor2(event.target.value);
  };

  const handleColor3Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor3(event.target.value);
  };

  const handleSliderChange = (value: number[]) => {
    // Sort the values to ensure the smaller value is first
    const sortedValues = value.sort((a, b) => a - b);
    setGradientValue(sortedValues);
  };

  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(to right, 
      ${color1} 0%, 
      ${color2} ${gradientValue[0]}%, 
      ${color2} ${gradientValue[1]}%, 
      ${color3} 100%)`,
    height: "100px",
  };

  return (
    <Box w="100%" maxWidth="250px">
      <VStack w="100%">
        <VStack w="100%" spacing={1}>
          <Select size="xs" value={color1} onChange={handleColor1Change} mr={2}>
            {colorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Select size="xs" value={color2} onChange={handleColor2Change} mr={2}>
            {colorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Select size="xs" value={color3} onChange={handleColor3Change} mr={2}>
            {colorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </VStack>

        <Flex w="100%">
          <RangeSlider
            min={0}
            max={100}
            step={1}
            value={gradientValue}
            onChange={handleSliderChange}
            width="100%"
            maxWidth="400px"
            mr={2}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Flex>
        <HStack w="100%" justify="space-between">
          <Box>{gradientValue[0]}</Box>
          <Box>{gradientValue[1]}</Box>
        </HStack>
      </VStack>

      <Box borderRadius="md" style={gradientStyle} mb={4} />
    </Box>
  );
}

/* ********************************************************************** */

interface Person {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function AlphabetRangeSlider() {
  const [value, setValue] = useState<[number, number]>([65, 90]);
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const handleChange = (newValue: [number, number]) => {
    setValue(newValue);
  };

  const fetchPeople = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setPeople(data);
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  };

  const filterPeople = (): Person[] => {
    const [startValue, endValue] = value;
    return people.filter((person) => {
      const lastName = person.name.split(" ")[1];
      if (lastName) {
        const lastNameFirstChar = lastName.charAt(0).toUpperCase();
        const charCode = lastNameFirstChar.charCodeAt(0);
        return charCode >= startValue && charCode <= endValue;
      }
      return false;
    });
  };

  const getLetterFromCode = (code: number): string => {
    return String.fromCharCode(code);
  };

  return (
    <VStack w="100%">
      <Text>Filter Users:</Text>
      <RangeSlider
        maxWidth="400px"
        min={65}
        max={90}
        step={1}
        defaultValue={value}
        onChange={handleChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>

      <VStack w="100%" spacing={0} color="accent_2">
        <Box>Selected Range:</Box>
        <Box>
          {getLetterFromCode(value[0])} - {getLetterFromCode(value[1])}
        </Box>
      </VStack>
      <VStack
        w="100%"
        maxWidth="250px"
        align="flex-start"
        bg="sidebarBackground"
        color="mainText"
        pb={2}
        borderRadius="md"
      >
        <Box
          p={2}
          borderTopRadius="md"
          w="100%"
          color="background"
          fontWeight="bold"
          bg="tipBackground"
        >
          Filtered People:
        </Box>
        <VStack w="100%" spacing={1} h="100px" overflowY="auto">
          {filterPeople().map((person) => (
            <Box key={person.id}>{person.name}</Box>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
}

/* ********************************************************************** */

export function NumberRangeSlider() {
  const [value, setValue] = useState<[number, number]>([0, 100]);
  const numbers = [10, 25, 50, 75, 90, 120, 150, 180, 200];

  const handleChange = (newValue: [number, number]) => {
    setValue(newValue);
  };

  const filterNumbers = (): number[] => {
    const [startValue, endValue] = value;
    return numbers.filter((number) => {
      return number >= startValue && number <= endValue;
    });
  };

  return (
    <VStack w="100%" spacing={4}>
      <RangeSlider
        maxWidth="400px"
        min={0}
        max={200}
        step={10}
        defaultValue={value}
        onChange={handleChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>

      <VStack color="accent_2" w="100%" spacing={0}>
        <Text>Selected Range: </Text>
        <Box>
          {value[0]} - {value[1]}
        </Box>
      </VStack>

      <VStack
        w="100%"
        maxWidth="250px"
        align="flex-start"
        bg="sidebarBackground"
        color="mainText"
        pb={2}
        borderRadius="md"
      >
        <Box
          p={2}
          borderTopRadius="md"
          w="100%"
          color="background"
          fontWeight="bold"
          bg="tipBackground"
        >
          Filtered Numbers:
        </Box>
        <VStack w="100%" spacing={1} h="100px" overflowY="auto">
          {filterNumbers().map((number) => (
            <Box key={number}>{number}</Box>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
}

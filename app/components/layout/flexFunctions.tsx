import {
  Box,
  Center,
  Code,
  Divider,
  Flex,
  HStack,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Square,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { FaArrowsAltH, FaArrowsAltV } from "react-icons/fa";
import { SingleExample } from "~/styles/MainDesignComponents";

const SelectStyles = {
  w: "150px",
  size: "xs",
};

const boxDimensions = { base: "75px", sm: "100px" };

/* ********************************************************************** */
export function FlexFunctionOne() {
  const [flexDirection, setFlexDirection] = useState<
    "row" | "row-reverse" | "column" | "column-reverse"
  >("row");
  const [justifyContent, setJustifyContent] = useState<
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
  >("flex-start");
  const [alignItems, setAlignItems] = useState<
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit"
  >("center");

  const [containerHeight, setContainerHeight] = useState<string>("150px");

  const containerHeightOptions: Array<string> = [
    "150px",
    "175px",
    "200px",
    "225px",
    "250px",
    "275px",
    "300px",
    "325px",
    "350px",
    "375px",
    "400px",
    "425px",
    "450px",
    "475px",
    "500px",
  ];

  const flexDirectionOptions: Array<
    "row" | "row-reverse" | "column" | "column-reverse"
  > = ["row", "row-reverse", "column", "column-reverse"];

  const justifyContentOptions: Array<
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
  > = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];
  const alignItemsOptions: Array<
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit"
  > = [
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "baseline",
    "initial",
    "inherit",
  ];

  return (
    <VStack w="100%" spacing={5} alignItems="center">
      <VStack spacing={0}>
        <Text>Parent Container Values:</Text>

        <HStack alignItems="center">
          <VStack alignItems="flex-end">
            <Code>{`height=`}</Code>
            <Code>{`flexDirection=`}</Code>
            <Code>{`justifyContent=`}</Code>
            <Code>{`alignItems=`}</Code>
          </VStack>

          <VStack>
            <HStack spacing={4} w="100%">
              <Select
                value={containerHeight}
                {...SelectStyles}
                onChange={(e) => setContainerHeight(e.target.value)}
              >
                {containerHeightOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
            <HStack spacing={4}>
              <Select
                value={flexDirection}
                {...SelectStyles}
                onChange={(e) =>
                  setFlexDirection(
                    e.target.value as
                      | "row"
                      | "row-reverse"
                      | "column"
                      | "column-reverse"
                  )
                }
              >
                {flexDirectionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>

            <HStack spacing={4}>
              <Select
                {...SelectStyles}
                value={justifyContent}
                onChange={(e) =>
                  setJustifyContent(
                    e.target.value as
                      | "flex-start"
                      | "flex-end"
                      | "center"
                      | "space-between"
                      | "space-around"
                      | "space-evenly"
                  )
                }
              >
                {justifyContentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>

            <HStack spacing={4}>
              <Select
                {...SelectStyles}
                value={alignItems}
                onChange={(e) =>
                  setAlignItems(
                    e.target.value as
                      | "stretch"
                      | "center"
                      | "flex-start"
                      | "flex-end"
                      | "baseline"
                      | "initial"
                      | "inherit"
                  )
                }
              >
                {alignItemsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
          </VStack>
        </HStack>
      </VStack>

      <Flex
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        w="100%"
        bg="sectionColor"
        p={5}
        color="background"
        fontWeight="bold"
        h="fit-content"
        minH={containerHeight}
      >
        <Square
          size={boxDimensions}
          bg="red.200"
          p={2}
          border="1px solid black"
        >
          CHILD 1
        </Square>
        <Square
          size={boxDimensions}
          bg="green.200"
          p={2}
          border="1px solid black"
        >
          CHILD 2
        </Square>
        <Square
          size={boxDimensions}
          bg="blue.200"
          p={2}
          border="1px solid black"
        >
          CHILD 3
        </Square>
      </Flex>
    </VStack>
  );
}

/* ********************************************************************** */

export function FlexFunctionTwo() {
  const [containerWidth, setContainerWidth] = useState<string>("100%");
  const [box1Grow, setBox1Grow] = useState<number>(1);
  const [box1Shrink, setBox1Shrink] = useState<number>(0);
  const [box2Grow, setBox2Grow] = useState<number>(3);
  const [box2Shrink, setBox2Shrink] = useState<number>(0);
  const [box3Grow, setBox3Grow] = useState<number>(1);
  const [box3Shrink, setBox3Shrink] = useState<number>(0);

  const containerWidthOptions: Array<string> = [
    "60%",
    "65%",
    "70%",
    "75%",
    "80%",
    "85%",
    "90%",
    "95%",
    "100%",
  ];

  const flexGrowOptions: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const flexShrinkOptions: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SingleExample bg="background">
      <VStack spacing={2} w="100%">
        <HStack spacing={1}>
          <Code>{`(parent) width=`}</Code>

          <Select
            value={containerWidth}
            {...SelectStyles}
            w="75px"
            onChange={(e) => setContainerWidth(e.target.value)}
          >
            {containerWidthOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </HStack>

        <HStack w="100%" justify="space-around">
          <VStack
            spacing={1}
            align="flex-end"
            bg="sidebarBackground"
            p={2}
            borderRadius="md"
          >
            <Center w="100%">
              <h3>Child 1</h3>
            </Center>

            <HStack spacing={1}>
              <Code>{`grow=`}</Code>
              <Select
                value={box1Grow}
                {...SelectStyles}
                w="55px"
                onChange={(e) => setBox1Grow(parseInt(e.target.value))}
              >
                {flexGrowOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
            <HStack spacing={1}>
              <Code>{`shrink=`}</Code>
              <Select
                value={box1Shrink}
                {...SelectStyles}
                w="55px"
                onChange={(e) => setBox1Shrink(parseInt(e.target.value))}
              >
                {flexShrinkOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
          </VStack>

          <VStack
            spacing={1}
            align="flex-end"
            bg="sidebarBackground"
            p={2}
            borderRadius="md"
          >
            <Center w="100%">
              <h3>Child 2</h3>
            </Center>
            <HStack spacing={1}>
              <Code>{`grow=`}</Code>
              <Select
                value={box2Grow}
                {...SelectStyles}
                w="55px"
                onChange={(e) => setBox2Grow(parseInt(e.target.value))}
              >
                {flexGrowOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
            <HStack spacing={1}>
              <Code>{`shrink=`}</Code>
              <Select
                value={box2Shrink}
                {...SelectStyles}
                w="55px"
                onChange={(e) => setBox2Shrink(parseInt(e.target.value))}
              >
                {flexShrinkOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
          </VStack>
          <VStack
            spacing={1}
            align="flex-end"
            bg="sidebarBackground"
            p={2}
            borderRadius="md"
          >
            <Center w="100%">
              <h3>Child 3</h3>
            </Center>
            <HStack spacing={1}>
              <Code>{`grow=`}</Code>
              <Select
                value={box3Grow}
                {...SelectStyles}
                w="55px"
                onChange={(e) => setBox3Grow(parseInt(e.target.value))}
              >
                {flexGrowOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
            <HStack spacing={1}>
              <Code>{`shrink=`}</Code>
              <Select
                value={box3Shrink}
                {...SelectStyles}
                w="55px"
                onChange={(e) => setBox3Shrink(parseInt(e.target.value))}
              >
                {flexShrinkOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </HStack>
          </VStack>
        </HStack>

        <Flex
          h="fit-content"
          flexDirection="row"
          textAlign="center"
          p={4}
          w={containerWidth}
          bg="sectionColor"
          color="background"
          fontWeight="bold"
          border="1px solid black"
        >
          <Square
            size={boxDimensions}
            flex={`${box1Grow} ${box1Shrink}`}
            bg="red.200"
            p={2}
            border="1px solid black"
          >
            CHILD 1
          </Square>
          <Square
            size={boxDimensions}
            flex={`${box2Grow} ${box2Shrink}`}
            bg="green.200"
            p={2}
            border="1px solid black"
          >
            CHILD 2
          </Square>
          <Square
            size={boxDimensions}
            flex={`${box3Grow} ${box3Shrink}`}
            bg="blue.200"
            p={2}
            border="1px solid black"
          >
            CHILD 3
          </Square>
        </Flex>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */
export function FlexFunctionThree() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function FlexFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}
/* ********************************************************************** */
export function FlexFunctionFive() {
  const [boxCount, setBoxCount] = useState(3);
  const [flexDirection, setFlexDirection] = useState<"row" | "column">("row");

  const handleBoxCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = Number(e.target.value);
    setBoxCount(count);
  };

  const handleFlexDirectionChange = () => {
    const newDirection = flexDirection === "row" ? "column" : "row";
    setFlexDirection(newDirection);
  };

  const renderBoxesWithSpacers = () => {
    const boxes = [];
    for (let i = 1; i <= boxCount; i++) {
      boxes.push(
        <Fragment key={i}>
          <Center
            bg="accent_2"
            p={2}
            border="1px solid black"
            color="background"
            borderRadius="md"
          >
            Box {i}
          </Center>
          <Spacer />
        </Fragment>
      );
    }
    return boxes;
  };

  return (
    <SingleExample bg="background">
      <VStack w="100%" align="center">
        <HStack>
          <h3>Boxes (w/Spacers):</h3>
          <Select
            value={boxCount}
            w="55px"
            onChange={handleBoxCountChange}
            size="sm"
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </Select>
        </HStack>
        <HStack spacing={3}>
          <HStack spacing={1}>
            <FaArrowsAltH />
            <Text color="accent_2" mb={0}>
              Row
            </Text>
          </HStack>
          <Switch
            isChecked={flexDirection === "column"}
            onChange={handleFlexDirectionChange}
            colorScheme="gray"
          />
          <HStack spacing={0}>
            <FaArrowsAltV />
            <Text mb={0} color="accent_2">
              Column
            </Text>
          </HStack>
        </HStack>
        <Flex
          w="100%"
          bg="sectionColor"
          p={4}
          borderRadius="md"
          flexDirection={flexDirection}
          h={flexDirection === "column" ? "400px" : undefined}
        >
          {renderBoxesWithSpacers()}
        </Flex>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

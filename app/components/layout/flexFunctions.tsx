import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Code,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Select,
  Spacer,
  Square,
  Stack,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, Fragment, useState } from "react";
import { FaArrowsAltH, FaArrowsAltV } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { boxColors } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

const SelectStyles = {
  w: { base: "125px", sm: "150px" },
  size: { base: "xs", sm: "sm" },
};

const SmSelectStyles = {
  w: { base: "50px", sm: "60px" },
  size: { base: "xs", sm: "sm" },
};

const boxDimensions = { base: "75px", sm: "100px" };

const boxStyles = {
  borderRadius: "lg",
  border: "2px solid #444444",
  boxShadow: "md",
  p: 2,
};

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
        borderRadius="lg"
        bg="mainText"
        p={5}
        color="background"
        fontWeight="bold"
        h="fit-content"
        minH={containerHeight}
      >
        <Square size={boxDimensions} bg={boxColors.one} {...boxStyles}>
          CHILD 1
        </Square>
        <Square size={boxDimensions} bg={boxColors.two} {...boxStyles}>
          CHILD 2
        </Square>
        <Square size={boxDimensions} bg={boxColors.three} {...boxStyles}>
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
      <VStack spacing={4} w="100%">
        <HStack spacing={1}>
          <Code>{`(parent) width=`}</Code>

          <Select
            value={containerWidth}
            {...SelectStyles}
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
            align={{ base: "center", sm: "flex-end" }}
            bg="sidebarBackground"
            p={1}
            borderRadius="md"
          >
            <Center w="100%">
              <h3>Child 1</h3>
            </Center>

            <Stack
              spacing={1}
              direction={["column", "row"]}
              align="center"
              justify="center"
            >
              <Code>{`grow=`}</Code>
              <Select
                value={box1Grow}
                {...SmSelectStyles}
                onChange={(e) => setBox1Grow(parseInt(e.target.value))}
              >
                {flexGrowOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Stack>
            <Stack
              spacing={1}
              direction={["column", "row"]}
              align="center"
              justify="center"
            >
              <Code>{`shrink=`}</Code>
              <Select
                value={box1Shrink}
                {...SmSelectStyles}
                onChange={(e) => setBox1Shrink(parseInt(e.target.value))}
              >
                {flexShrinkOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Stack>
          </VStack>

          <VStack
            spacing={1}
            align={{ base: "center", sm: "flex-end" }}
            bg="sidebarBackground"
            p={1}
            borderRadius="md"
          >
            <Center w="100%">
              <h3>Child 2</h3>
            </Center>
            <Stack
              spacing={1}
              direction={["column", "row"]}
              align="center"
              justify="center"
            >
              <Code>{`grow=`}</Code>
              <Select
                value={box2Grow}
                {...SmSelectStyles}
                onChange={(e) => setBox2Grow(parseInt(e.target.value))}
              >
                {flexGrowOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Stack>
            <Stack
              spacing={1}
              direction={["column", "row"]}
              align="center"
              justify="center"
            >
              <Code>{`shrink=`}</Code>
              <Select
                value={box2Shrink}
                {...SmSelectStyles}
                onChange={(e) => setBox2Shrink(parseInt(e.target.value))}
              >
                {flexShrinkOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Stack>
          </VStack>
          <VStack
            spacing={1}
            align={{ base: "center", sm: "flex-end" }}
            bg="sidebarBackground"
            p={1}
            borderRadius="md"
          >
            <Center w="100%">
              <h3>Child 3</h3>
            </Center>
            <Stack
              spacing={1}
              direction={["column", "row"]}
              align="center"
              justify="center"
            >
              <Code>{`grow=`}</Code>
              <Select
                value={box3Grow}
                {...SmSelectStyles}
                onChange={(e) => setBox3Grow(parseInt(e.target.value))}
              >
                {flexGrowOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Stack>
            <Stack
              spacing={1}
              direction={["column", "row"]}
              align="center"
              justify="center"
            >
              <Code>{`shrink=`}</Code>
              <Select
                value={box3Shrink}
                {...SmSelectStyles}
                onChange={(e) => setBox3Shrink(parseInt(e.target.value))}
              >
                {flexShrinkOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Stack>
          </VStack>
        </HStack>

        <Flex
          h="fit-content"
          flexDirection="row"
          textAlign="center"
          p={4}
          w={containerWidth}
          bg="mainText"
          color="background"
          fontWeight="bold"
          borderRadius="lg"
        >
          <Square
            size={boxDimensions}
            flex={`${box1Grow} ${box1Shrink}`}
            bg={boxColors.one}
            {...boxStyles}
          >
            CHILD 1
          </Square>
          <Square
            size={boxDimensions}
            flex={`${box2Grow} ${box2Shrink}`}
            bg={boxColors.two}
            {...boxStyles}
          >
            CHILD 2
          </Square>
          <Square
            size={boxDimensions}
            flex={`${box3Grow} ${box3Shrink}`}
            bg={boxColors.three}
            {...boxStyles}
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
  const [flexDirection, setFlexDirection] = useState<"row" | "column">(
    "column"
  );

  const handleFlexDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFlexDirection(e.target.value as "row" | "column");
  };

  const [flexWrap, setFlexWrap] = useState<"wrap" | "nowrap" | "wrap-reverse">(
    "wrap"
  );

  const handleFlexWrapChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFlexWrap(e.target.value as "wrap" | "nowrap" | "wrap-reverse");
  };

  return (
    <SingleExample bg="background">
      <VStack align="center" w="100%">
        <HStack align="center">
          <VStack align="flex-end">
            <Code>{`flexWrap=`}</Code>
            <Code>{`flexDirection=`}</Code>
          </VStack>
          <VStack>
            <Select
              {...SelectStyles}
              value={flexDirection}
              onChange={handleFlexDirectionChange}
            >
              <option value="row">row</option>
              <option value="column">column</option>
            </Select>{" "}
            <Select
              {...SelectStyles}
              value={flexWrap}
              onChange={handleFlexWrapChange}
            >
              <option value="nowrap">nowrap</option>
              <option value="wrap">wrap</option>
              <option value="wrap-reverse">wrap-reverse</option>
            </Select>
          </VStack>
        </HStack>

        <Flex
          w="100%"
          h="450px"
          flexDirection={flexDirection}
          flexWrap={flexWrap}
          p={4}
          bg="mainText"
          borderRadius="lg"
          overflowX="auto"
          overflowY="auto"
          textAlign="center"
          color="background"
          fontWeight="bold"
          fontSize="xl"
        >
          <Box
            w={{ base: "50px", sm: "100px" }}
            h="100px"
            bg={boxColors.one}
            m={1}
            flexShrink={1}
            {...boxStyles}
          >
            1
          </Box>
          <Box
            w={{ base: "75px", sm: "150px" }}
            h="100px"
            bg={boxColors.two}
            m={1}
            flexShrink={1}
            {...boxStyles}
          >
            2
          </Box>
          <Box
            w={{ base: "60px", sm: "120px" }}
            h="100px"
            bg={boxColors.three}
            m={1}
            flexShrink={1}
            {...boxStyles}
          >
            3
          </Box>
          <Box
            w={{ base: "40px", sm: "80px" }}
            h="100px"
            bg={boxColors.four}
            m={1}
            flexShrink={1}
            {...boxStyles}
          >
            4
          </Box>
          <Box
            w={{ base: "100px", sm: "200px" }}
            h="100px"
            bg={boxColors.five}
            m={1}
            flexShrink={1}
            {...boxStyles}
          >
            5
          </Box>
          <Box
            w={{ base: "65px", sm: "130px" }}
            h="100px"
            bg={boxColors.six}
            m={1}
            flexShrink={1}
            {...boxStyles}
          >
            6
          </Box>
        </Flex>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function FlexFunctionFour() {
  const [flexItems, setFlexItems] = useState([
    { id: 1, flexBasis: { base: "50px", sm: "100px" }, color: boxColors.one },
    { id: 2, flexBasis: { base: "75px", sm: "150px" }, color: boxColors.two },
    { id: 3, flexBasis: { base: "60px", sm: "120px" }, color: boxColors.three },
    { id: 4, flexBasis: { base: "40px", sm: "80px" }, color: boxColors.four },
    { id: 5, flexBasis: { base: "100px", sm: "200px" }, color: boxColors.five },
    { id: 6, flexBasis: { base: "65px", sm: "130px" }, color: boxColors.six },
  ]);

  const handleFlexBasisChange = (
    e: ChangeEvent<HTMLSelectElement>,
    id: number,
    breakpoint: "base" | "sm"
  ) => {
    const { value } = e.target;
    const updatedFlexItems = flexItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          flexBasis: { ...item.flexBasis, [breakpoint]: value },
        };
      }
      return item;
    });
    setFlexItems(updatedFlexItems);
  };

  return (
    <SingleExample bg="background">
      <VStack align="center" w="100%">
        <VStack>
          {flexItems.map((item) => (
            <HStack key={item.id}>
              <Code>{`Box ${item.id}: flexBasis=`}</Code>
              <Select
                key={item.id}
                {...SelectStyles}
                placeholder="flexBasis"
                value={item.flexBasis.base}
                onChange={(e) => handleFlexBasisChange(e, item.id, "base")}
              >
                <option value="10%">10%</option>
                <option value="20%">20%</option>
                <option value="30%">30%</option>
                <option value="40%">40%</option>
                <option value="50%">50%</option>
                <option value="60%">60%</option>
                <option value="70%">70%</option>
                <option value="80%">80%</option>
                <option value="90%">90%</option>
                <option value="100%">100%</option>
              </Select>
            </HStack>
          ))}
        </VStack>

        <Flex
          w="100%"
          h={{ base: "300px", sm: "450px" }}
          flexDirection="row"
          flexWrap="wrap"
          p={4}
          bg="mainText"
          borderRadius="lg"
          overflowX="auto"
          overflowY="auto"
          textAlign="center"
          color="background"
          fontWeight="bold"
          fontSize="xl"
        >
          {flexItems.map((item) => (
            <Box
              key={item.id}
              w={item.flexBasis.base}
              h="100px"
              bg={item.color}
              m={1}
              flexShrink={1}
              {...boxStyles}
            >
              {item.id}
            </Box>
          ))}
        </Flex>
      </VStack>
    </SingleExample>
  );
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
            {...boxStyles}
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
          bg="mainText"
          borderRadius="lg"
          p={4}
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

const inputStyles = {
  size: { base: "xs", sm: "sm", lg: "xs" },
  maxWidth: { base: "200px", sm: "300px", md: "150px", lg: "200px" },
  bg: "mainText",
  ml: 1,
  color: "background",
  justifySelf: "center",
  alignSelf: "center",
  borderRadius: "md",
  _placeholder: {
    color: "background",
    opacity: 0.7,
  },
};

export function FlexExampleDynamicForm() {
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      flexDirection={{ base: "column", md: "row", lg: "column" }}
    >
      <VStack w="100%" align="center" mb={2}>
        <FormControl w="100%" justifyContent="center">
          <VStack w="100%">
            <FormLabel mb={0}>Name</FormLabel>
            <Input placeholder="John Doe" {...inputStyles} />
          </VStack>
        </FormControl>
        <FormControl>
          <VStack w="100%">
            <FormLabel mb={0}>Email</FormLabel>
            <Input placeholder="john@example.com" {...inputStyles} />
          </VStack>
        </FormControl>
      </VStack>

      <VStack w="100%" align="center" mb={2}>
        <FormControl>
          <VStack w="100%">
            <FormLabel mb={0}>Password</FormLabel>
            <Input type="password" placeholder="********" {...inputStyles} />
          </VStack>
        </FormControl>
        <FormControl>
          <VStack w="100%">
            <FormLabel mb={0}>Confirm Password</FormLabel>
            <Input type="password" placeholder="********" {...inputStyles} />
          </VStack>
        </FormControl>
      </VStack>
    </Flex>
  );
}

/* ********************************************************************** */

export function FlexExampleImageGallery() {
  const images = [
    "https://placebear.com/300/300",
    "http://placekitten.com/300/300",
    "https://place-puppy.com/300x300",
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      <Center w="100%">
        <VStack align="center">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              boxSize="175px"
              borderRadius="md"
            />
          ))}
        </VStack>{" "}
      </Center>
    </Flex>
  );
}

/* ********************************************************************** */

export function FlexExampleNavigation() {
  return (
    <Flex direction="column" bg="mainText" width="175px" p={4} boxShadow="md">
      <Box mb={4}>
        <GiTechnoHeart size={45} color="purple" />
      </Box>

      <Flex
        direction="column"
        as="nav"
        fontWeight="bold"
        fontFamily="monospace"
        fontSize="lg"
      >
        <NavItem label="Home" />
        <NavItem label="About" />
        <NavItem label="Services" />
        <NavItem label="Contact" />
      </Flex>
    </Flex>
  );
}

interface NavItemProps {
  label: string;
}

function NavItem({ label }: NavItemProps) {
  return (
    <Text
      as="a"
      href="#"
      px={2}
      py={1}
      color="deeppink !important"
      _hover={{ color: "purple !important" }}
    >
      {label}
    </Text>
  );
}

import {
  Button,
  Center,
  Heading,
  Image,
  Tag,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  GridStyles,
  boxColors,
  gridBoxStyles,
} from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

/* ********************************************************************** */
interface WrapBoxProps {
  color?: string;
  w?: string;
  h?: string;
  children?: React.ReactNode;
}

function WrapBox({
  color = boxColors.one,
  w = "150px",
  h = "50px",
  children,
}: WrapBoxProps) {
  return (
    <WrapItem>
      <Center bg={color} {...gridBoxStyles} w={w} h={h}>
        {children}
      </Center>
    </WrapItem>
  );
}

export function WrapFunctionOne() {
  return (
    <SingleExample bg="background">
      <Wrap {...GridStyles}>
        <WrapBox w="140px">Box 1</WrapBox>
        <WrapBox w="100px" color={boxColors.two}>
          Box 2
        </WrapBox>
        <WrapBox w="200px" color={boxColors.three}>
          Box 3
        </WrapBox>
        <WrapBox w="70px" color={boxColors.four}>
          Box 4
        </WrapBox>
        <WrapBox w="90px" color={boxColors.five}>
          Box 5
        </WrapBox>
        <WrapBox w="240px" color={boxColors.six}>
          Box 6
        </WrapBox>
      </Wrap>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function WrapFunctionTwo() {
  return (
    <SingleExample bg="background">
      <Wrap spacing="30px" {...GridStyles}>
        <WrapBox w="140px">Box 1</WrapBox>
        <WrapBox w="100px" color={boxColors.two}>
          Box 2
        </WrapBox>
        <WrapBox w="200px" color={boxColors.three}>
          Box 3
        </WrapBox>
        <WrapBox w="70px" color={boxColors.four}>
          Box 4
        </WrapBox>
        <WrapBox w="90px" color={boxColors.five}>
          Box 5
        </WrapBox>
        <WrapBox w="240px" color={boxColors.six}>
          Box 6
        </WrapBox>
      </Wrap>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function WrapFunctionThree() {
  return (
    <SingleExample bg="background">
      <Wrap spacing="30px" justify="center" {...GridStyles}>
        <WrapBox w="140px">Box 1</WrapBox>
        <WrapBox w="100px" color={boxColors.two}>
          Box 2
        </WrapBox>
        <WrapBox w="200px" color={boxColors.three}>
          Box 3
        </WrapBox>
        <WrapBox w="70px" color={boxColors.four}>
          Box 4
        </WrapBox>
        <WrapBox w="90px" color={boxColors.five}>
          Box 5
        </WrapBox>
        <WrapBox w="240px" color={boxColors.six}>
          Box 6
        </WrapBox>
      </Wrap>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function WrapFunctionFour() {
  return (
    <SingleExample bg="background">
      <Wrap spacing="30px" align="center" {...GridStyles}>
        <WrapBox h="40px">Box 1</WrapBox>
        <WrapBox h="60px" color={boxColors.two}>
          Box 2
        </WrapBox>
        <WrapBox h="80px" color={boxColors.three}>
          Box 3
        </WrapBox>
        <WrapBox h="50px" color={boxColors.four}>
          Box 4
        </WrapBox>
        <WrapBox h="70px" color={boxColors.five}>
          Box 5
        </WrapBox>
        <WrapBox h="90px" color={boxColors.six}>
          Box 6
        </WrapBox>
      </Wrap>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function WrapFunctionFive() {
  const tags = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Sports",
    "Books",
    "Beauty",
    "Toys",
  ];

  return (
    <SingleExample bg="background">
      <VStack w="100%">
        <Heading size="md" mb={0} mt={0}>
          Your Tags:
        </Heading>
        <Wrap spacing="5px" {...GridStyles}>
          {tags.map((tag, index) => (
            <WrapItem key={index} mb="2px">
              <Tag
                bg={boxColors.five}
                border="1px solid"
                color="background"
                fontWeight="bold"
                shadow="xl"
                borderRadius="full"
              >
                {tag}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </SingleExample>
  );
}
/* ********************************************************************** */

interface FilterOptionProps {
  children: React.ReactNode;
}

function FilterOption({ children }: FilterOptionProps) {
  return (
    <Button size="sm" borderRadius="xl">
      {children}
    </Button>
  );
}

export function WrapFunctionSix() {
  const filterOptions = [
    "New Arrivals",
    "Price: Low to High",
    "Price: High to Low",
    "Brand",
    "Rating",
  ];

  return (
    <SingleExample bg="background">
      <VStack w="100%">
        <Heading size="md" mb={0} mt={0}>
          Filter by:
        </Heading>
        <Wrap spacing="5px" align="center" {...GridStyles}>
          {filterOptions.map((option, index) => (
            <WrapItem key={index} mb="2px">
              <FilterOption>{option}</FilterOption>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function WrapFunctionSeven() {
  const images = [
    "https://picsum.photos/300?random=23",
    "https://picsum.photos/300?random=33",
    "https://picsum.photos/300?random=53",
    "https://picsum.photos/300?random=44",
    "https://picsum.photos/300?random=16",
    "https://picsum.photos/300?random=24",
    "https://picsum.photos/300?random=123",
    "https://picsum.photos/300?random=13",
  ];
  return (
    <SingleExample bg="background">
      <VStack w="100%" spacing="20px">
        <Heading size="md" mb={0} mt={0}>
          Image Gallery
        </Heading>
        <Wrap
          spacing="20px"
          {...GridStyles}
          justify="center"
          align="center"
          bg="sectionColor"
        >
          {images.map((image, index) => (
            <WrapItem key={index}>
              <Image
                src={image}
                w={["100px", "125px", "100px", "75px"]}
                alt={`Image ${index + 1}`}
                borderRadius="lg"
              />
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </SingleExample>
  );
}

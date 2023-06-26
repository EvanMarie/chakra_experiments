import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  List,
  ListItem,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BasicText, ButtonStyles, HL, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

const CardStyles = {
  bg: "tipBackground",
  borderRadius: "md",
  boxShadow: "md",
  p: 3,
  mb: 3,
};

/* ********************************************************************** */

export function CardOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Card</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Card component can be as simple or as complex as you need it to
          be. The most basic usage involves putting some content into the{" "}
          <Mono>CardBody</Mono>. In this example, we've created a Card with a
          CardBody that contains some text. This creates a simple card with
          padding around the text.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Card sx={CardStyles}>
          <CardBody>
            <Text>
              I am a card containing only a <b>CardBody</b>.
            </Text>
          </CardBody>
        </Card>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Card with Dividers</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ But what if you have multiple sections of content to display within
          a <Mono>CardBody</Mono>? Chakra UI allows you to add dividers between
          them. In the following example, we've added a <Mono>CardHeader</Mono>{" "}
          with a title. Within the <Mono>CardBody</Mono>, we have three sections
          divided by a <Mono>StackDivider</Mono>. This structure allows the card
          to present multiple sections of content in an organized manner.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Card sx={CardStyles}>
          <CardHeader>
            <Heading size="md">Detailed Analysis</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  This is a summary of our findings.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Overview
                </Heading>
                <Text pt="2" fontSize="sm">
                  These are our conclusions based on the data.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  These are the details of our analysis.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardThree() {
  return (
    <SectionContainer>
      <SectionHeading>Integrating Images</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Sometimes, your card may need to display an image. With Chakra UI,
          you can easily integrate an image within the card. In the following
          example, we have a <Mono>Card</Mono> that showcases an individual. The
          person's image is displayed prominently at the top of the card using
          the <Mono>Image</Mono> component. The title and description of the
          person are included in a <Mono>Stack</Mono> within the{" "}
          <Mono>CardBody</Mono>, and a 'Contact' button is in the{" "}
          <Mono>CardFooter</Mono>.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <Card maxW="sm" sx={CardStyles}>
          <CardBody>
            <Flex justifyContent="center">
              <Image
                src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
                alt="Jasper Jenkins"
                borderRadius="md"
              />
            </Flex>
            <Stack mt="6" spacing="3" justifyContent="center">
              <Heading size="md">Jasper Jenkins</Heading>
              <Text>
                Rugged rebel with a passion for whiskey and Harley Davidson
                motorcycles, but rarely at the same time...that would be
                dangerous. Construction worker by day, and party animal by
                night.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button size="sm" sx={ButtonStyles}>
              Contact
            </Button>
          </CardFooter>
        </Card>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardFour() {
  return (
    <SectionContainer>
      <SectionHeading>Card with Actions</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Cards can also contain action buttons. These are typically placed in
          the CardFooter. In this example, the <Mono>CardFooter</Mono> contains
          a <Mono>ButtonGroup</Mono> with two buttons - one to view more details
          and another to delete the card's content.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Card sx={CardStyles}>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Text>View a summary of all your clients over the last month.</Text>
          </CardBody>

          <CardFooter>
            <ButtonGroup>
              <Button sx={ButtonStyles}>View More</Button>
              <Button bg="accent_1" border="2px solid">
                Delete
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardFive() {
  return (
    <SectionContainer>
      <SectionHeading>Displaying a Card Horizontally</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The horizontal layout is great at showcasing content in a visually
          appealing manner. With its sleek design and flexible display, this
          component seamlessly arranges elements. In this example, a captivating
          book cover accompanies a concise description, accompanied by a user
          interaction button.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <Card
          sx={CardStyles}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "150px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/A_Journey_to_the_Centre_of_the_Earth-1874.jpg"
            alt="Book Cover"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Journey to the Center of the Earth</Heading>

              <Text py="2">
                An adventurous classic where a professor and his nephew journey
                towards the center of the Earth and discover a whole new world.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" sx={ButtonStyles}>
                Buy Book
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardSix() {
  return (
    <SectionContainer>
      <SectionHeading>Advanced Composition</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Advanced layout cards play a vital role in modern web development,
          allowing developers to create visually appealing and interactive
          components. Chakra UI simplifies the process but still offers powerful
          composition capabilities. The result is a compelling and highly
          functional user experience. The following example demonstrates this
          versatility.
        </SectionDescription>
      </Box>
      <BasicText>
        In this example, we have the following architectural highlights:
      </BasicText>
      <BulletBox>
        <ul>
          <li>
            <HL>Header</HL>: contains a <Mono>Flex</Mono> container, combining
            an Avatar and information the poet. An <Mono>IconButton</Mono> is
            included for additional functionality.
          </li>
          <li>
            <HL>CardBody</HL>: features a styled text describing the poet's
            significance
          </li>
          <li>
            <HL>Expanded CardBody</HL>: contains a Flex container with a
            visually appealing background using a linear gradient, inside of
            which is an displaying a book cover relevant to the poet.
          </li>
          <li>
            <HL>CardFooter</HL>: made up of a Flex container with Button
            components for social interactions. The buttons are evenly spaced
            and adorned with icons, allowing users to like, comment, and share
            the content.
          </li>
        </ul>
      </BulletBox>

      <BulletBox>
        Combined, these architectural highlights within the of the poet.
      </BulletBox>
      <MyFlex bg="background">
        <Card maxW="md" sx={CardStyles}>
          <CardHeader>
            <Flex>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Guillaume Apollinaire"
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcR5AaGdnF-jXZwtnaY0NRLEsqW6XOGppQb_w0LV8VWItIRVIWo3vf4zV56FrrYjVU3e_s7cDSKWBj0tz1U&psig=AOvVaw0ADvCX0I3p7LkD3qSr8H8w&ust=1687802643972000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjO5emB3_8CFQAAAAAdAAAAABAE"
                />

                <Box>
                  <Heading size="sm">Guillaume Apollinaire</Heading>
                  <Text>French Poet</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>

          <Flex
            direction="column"
            justifyContent="center"
            bgImage="linear-gradient(to top, sectionColor, mainText)"
            bgClip="content-box"
            borderRadius="md"
          >
            <CardBody bg="mainText" borderTopRadius="md" mb={2}>
              <Text lineHeight="1.2">
                Guillaume Apollinaire is considered one of the most important
                literary figures of the early twentieth century. His brief
                career influenced the development of such artistic movements as
                Futurism, Cubism, Dadaism, and Surrealism, and the legend of his
                personality—bohemian artist, raconteur, gourmand, soldier—became
                the model for avant-garde deportment...
              </Text>
            </CardBody>
            <Flex justifyContent="center">
              <Image
                maxW={{ base: "100%", sm: "200px" }}
                marginY={3}
                objectFit="cover"
                src="https://m.media-amazon.com/images/I/51dVCP66NzL._SX327_BO1,204,203,200_.jpg"
                alt="Guillaume Apollinaire"
              />
            </Flex>
          </Flex>

          <CardFooter
            marginY={0}
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "100px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
          </CardFooter>
        </Card>
        <Text fontSize="xs">
          Content courtesy of{" "}
          <Link
            color="accent_1"
            href="https://www.poetryfoundation.org/poets/guillaume-apollinaire"
            isExternal
          >
            Poetry Foundation
          </Link>
          ,{" "}
          <Link
            color="accent_1"
            href="https://www.amazon.com/Selected-Poems-parallel-French-Classics/dp/0199687595/ref=sr_1_2?crid=SAS3RD4QJY3C&keywords=guillaume+apollinaire&qid=1687716839&s=books&sprefix=guillaume+apollinaire%2Cstripbooks%2C87&sr=1-2"
            isExternal
          >
            Amazon
          </Link>
          , &{" "}
          <Link
            color="accent_1"
            href="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR5AaGdnF-jXZwtnaY0NRLEsqW6XOGppQb_w0LV8VWItIRVIWo3vf4zV56FrrYjVU3e_s7cDSKWBj0tz1U"
            isExternal
          >
            Image Source
          </Link>
          .
        </Text>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

const BookButton = () => {
  return <Button sx={ButtonStyles}>Book Now</Button>;
};

interface MiyazakiCardProps {
  children: React.ReactNode;
}
const MiyazakiCard = ({ children, ...props }: MiyazakiCardProps) => {
  return (
    <Card sx={CardStyles} {...props}>
      {children}
    </Card>
  );
};

export function CardSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Displaying Multiple Cards</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To effectively present a variety of content items, you can utilize
          the flexibility of Chakra UI's SimpleGrid component or any other
          preferred layout method. Rendering multiple cards enables you to
          showcase diverse content in a structured and visually appealing
          manner.
        </SectionDescription>
        <BasicText>
          The <Mono>SimpleGrid</Mono> component in Chakra UI offers a convenient
          solution for arranging cards in a grid layout. By specifying the
          desired number of columns and defining the spacing between cards, you
          can create a visually balanced grid that optimizes content
          organization and readability. This allows for seamless management and
          alignment of multiple cards within a single container.
        </BasicText>
        <BasicText>
          Alternatively, you can leverage other layout methods such as{" "}
          <Mono>Flexbox</Mono>, CSS Grid, or custom CSS styles to arrange the
          cards according to your specific design requirements. These methods
          provide flexibility in terms of card placement, responsiveness, and
          customization, enabling you to tailor the presentation of multiple
          cards to your desired visual and functional outcomes.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <MiyazakiCard>
            <CardHeader>
              <Heading size="md">Princess Mononoke</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Watch Ashitaka's journey as he attempts to mediate the conflict
                between the gods of a forest and the humans consuming its
                resources.
              </Text>
            </CardBody>
            <CardFooter>
              <BookButton />
            </CardFooter>
          </MiyazakiCard>
          <MiyazakiCard>
            <CardHeader>
              <Heading size="md">Howl's Moving Castle</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Follow Sophie's adventures in a world of magic as she tries to
                break the spell cast upon her.
              </Text>
            </CardBody>
            <CardFooter>
              <BookButton />
            </CardFooter>
          </MiyazakiCard>
          <MiyazakiCard>
            <CardHeader>
              <Heading size="md">Nausicaä of the Valley of the Wind</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Join Nausicaä, a young princess of the Valley of the Wind, on
                her journey as she struggles to prevent two warring nations from
                destroying the planet.
              </Text>
            </CardBody>
            <CardFooter>
              <BookButton />
            </CardFooter>
          </MiyazakiCard>
          <MiyazakiCard>
            <CardHeader>
              <Heading size="md">Spirited Away</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Experience Chihiro's quest to save her parents in a world of
                spirits and magic.
              </Text>
            </CardBody>
            <CardFooter>
              <BookButton />
            </CardFooter>
          </MiyazakiCard>
        </SimpleGrid>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardEight() {
  return (
    <SectionContainer>
      <SectionHeading>Centering Card Contents</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Card</Mono> component in Chakra UI is designed with a
          default display of <Mono>"flex"</Mono>. This inherent flex display
          provides a convenient way to center the content within the card. To
          achieve content centering, simply pass the <Mono>align="center"</Mono>{" "}
          prop to the Card component. This way, the content within the{" "}
          <Mono>Card</Mono> will be horizontally centered, ensuring a visually
          balanced presentation. This approach saves developers the hassle of
          writing additional CSS or using custom styles to achieve content
          centering.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Card maxWidth="350px" align="center" sx={CardStyles}>
          <CardHeader>
            <Heading size="md">Princess Mononoke</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Ashitaka's journey as he attempts to mediate the conflict between
              the gods of a forest and the humans consuming its resources.
            </Text>
          </CardBody>
        </Card>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardNine() {
  return (
    <SectionContainer>
      <SectionHeading>Card Variants</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI offers four distinct variants for cards:{" "}
          <Mono>elevated</Mono>,<Mono>outline</Mono>, <Mono>filled</Mono>, and{" "}
          <Mono>unstyled</Mono>. These variants allow you to easily customize
          the style of your cards to match your desired aesthetic. By using the
          variant prop, you can effortlessly switch between different styles for
          your cards.
        </SectionDescription>
        <BasicText>
          If you choose not to specify a variant prop, Chakra UI defaults to the
          elevated variant. This ensures that your cards have a subtle elevation
          effect by default, providing a sense of depth and visual hierarchy.
        </BasicText>

        <BasicText>The four variants:</BasicText>
        <BulletBox>
          <List spacing={2}>
            <ListItem>
              <Mono>elevated</Mono> - gives the card a subtle elevation effect,
              creating a sense of depth. It adds a shadow around the card,
              making it appear raised above the surface it is placed on. This
              variant is commonly used to provide a visual distinction for
              important or highlighted content.
            </ListItem>
            <ListItem>
              <Mono>outline</Mono> - renders the card with a border and no
              background color, providing a clean and minimalistic appearance.
              It is often used when you want to emphasize the card's boundary
              without adding a solid background. This variant is suitable for
              displaying content within a defined border.
            </ListItem>
            <ListItem>
              <Mono>filled</Mono> - applies a solid background color to the
              card, creating a visually prominent presence. It allows you to
              apply a vibrant or complementary color scheme to the card's
              background, making it stand out from the surrounding elements. The
              filled variant is often used when you want to draw attention to
              the content within the card.
            </ListItem>
            <ListItem>
              <Mono>unstyled</Mono> - removes all default styles from the card,
              providing a blank canvas for custom styling. It allows you to have
              complete control over the card's appearance by overriding its
              default styles with your own CSS. The unstyled variant is ideal
              when you want to create a card from scratch and apply custom
              styling without any predefined styles interfering.
            </ListItem>
          </List>
        </BulletBox>
      </Box>

      <MyFlex bg="background">
        <SimpleGrid spacing={5} columns={[1, 2, 2, 2]}>
          <Card variant="elevated">
            <CardHeader>
              <Heading size="md">Card Heading </Heading>
            </CardHeader>
            <CardBody bg="blue.100">
              <Text>Elevated Variant.</Text>
            </CardBody>
          </Card>
          <Card variant="outline">
            <CardHeader>
              <Heading size="md">Card Heading </Heading>
            </CardHeader>
            <CardBody bg="green.100">
              <Text>Outline Variant.</Text>
            </CardBody>
          </Card>
          <Card variant="filled">
            <CardHeader>
              <Heading size="md">Card Heading </Heading>
            </CardHeader>
            <CardBody bg="purple.100">
              <Text>Filled Variant.</Text>
            </CardBody>
          </Card>
          <Card variant="unstyled">
            <CardHeader>
              <Heading size="md">Card Heading </Heading>
            </CardHeader>
            <CardBody bg="red.100">
              <Text>Unstyled Variant.</Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardTen() {
  return (
    <SectionContainer>
      <SectionHeading>Card Sizes</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI offers three distinct sizes for cards, allowing you to
          adjust the dimensions of your cards based on your design requirements.
          By utilizing the size prop, you can easily change the size of a card
          by setting the value to one of three options: sm (small), md (medium),
          or lg (large).
        </SectionDescription>
        <BasicText>
          The size prop empowers you to control the visual impact and prominence
          of your cards within the layout. Choosing a smaller size (
          <Mono>sm</Mono>) can be useful when you want to conserve space or
          display more compact card content. Conversely, opting for a larger
          size (<Mono>lg</Mono>) can help emphasize the card and its content,
          making it mormdinent. The medium size (<Mono>md</Mono>) strikes a
          balance between compactness and prominence, serving as a versatile
          option for various use cases.
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <VStack spacing={5}>
          <Card size="sm" sx={CardStyles}>
            <CardHeader>
              <Heading size="md">Card Size: Small</Heading>
            </CardHeader>
            <CardBody>
              <Text>Content text goes here.</Text>
            </CardBody>
          </Card>

          <Card size="md" sx={CardStyles}>
            <CardHeader>
              <Heading size="md">Card Size: Medium</Heading>
            </CardHeader>
            <CardBody>
              <Text>Content text goes here.</Text>
            </CardBody>
          </Card>

          <Card size="lg" sx={CardStyles}>
            <CardHeader>
              <Heading size="lg">Card Size: Large</Heading>
            </CardHeader>
            <CardBody>
              <Text>Content text goes here.</Text>
            </CardBody>
          </Card>
        </VStack>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function CardEleven() {
  return (
    <Card
      bg="accent_1"
      size="sm"
      align="center"
      textAlign="center"
      transform="scale(1)"
      transition="0.2s"
      _hover={{ transform: "scale(1.09)" }}
      p={5}
      shadow="md"
      borderWidth={1}
    >
      <Heading size="md">Interactive Card</Heading>
      <Text>Hover over me!</Text>
    </Card>
  );
}

/* ********************************************************************** */

export function CardTwelve() {
  return (
    <Card borderWidth={1} p={5} size="sm" bg="accent_2">
      <Heading size="md">Main Card</Heading>
      <Text>This is a card with another card nested inside it.</Text>
      <Card mt={3} borderWidth={1} p={5} shadow="xl" size="sm" bg="accent_1">
        <Heading size="md">Nested Card</Heading>
        <Text>This card is nested inside the main card.</Text>
      </Card>
    </Card>
  );
}

/* ********************************************************************** */

export function CardThirteen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button sx={ButtonStyles} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent bg="accent_2">
          <Card sx={CardStyles} size="sm">
            <CardHeader>
              <Heading>Modal Title</Heading>
            </CardHeader>
            <CardBody>
              <Text>This is a modal made using a Card component.</Text>
            </CardBody>
            <CardFooter>
              <Button sx={ButtonStyles} mr={3} onClick={onClose}>
                Close
              </Button>
            </CardFooter>
          </Card>
        </ModalContent>
      </Modal>
    </>
  );
}

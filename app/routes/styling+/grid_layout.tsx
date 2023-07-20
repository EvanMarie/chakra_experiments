import { Box, Grid, Text } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, Mono, HL, BlueBold } from "~/styles/DesignComponents";
import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

import {
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  GridBoxOne,
  GridBoxThree,
  GridBoxTwo,
  GridColumn,
  HighlightColumn,
  HighlightExample,
  HighlightText,
  ImportBox,
  MainGrid,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
  SingleExample,
} from "~/styles/MainDesignComponents";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";
import {
  Dashboard,
  ImageGallery,
  Profiles,
} from "~/components/styling/gridExamples";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#grid-layout">
        Grid Layout
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <SectionDescription>
                ⦾ Chakra UI provides a <Mono>Grid</Mono> component which is a
                primitive component for all grid related CSS. It helps to create
                flexible and responsive grid layouts. Here's a brief overview:
              </SectionDescription>
              <BulletBox>
                <ul>
                  <li>
                    <BlueBold>Grid Template</BlueBold>: <Mono>Grid</Mono> uses
                    the <Mono>templateColumns</Mono>, <Mono>templateRows</Mono>,{" "}
                    <Mono>templateAreas</Mono> props to create a grid template.
                  </li>
                  <li>
                    <BlueBold>Gap</BlueBold>: The <Mono>gap</Mono> property (a
                    shorthand for <Mono>rowGap</Mono> and <Mono>columnGap</Mono>
                    ) can be used to set the gaps (gutters) between rows and
                    columns. It's responsive and theme-aware.
                  </li>
                  <li>
                    <BlueBold>Auto Columns and Rows</BlueBold>: You can use the{" "}
                    <Mono>autoColumns</Mono> and <Mono>autoRows</Mono> props to
                    specify the size of the rows and columns when they are
                    created with grid auto-placement algorithms.
                  </li>
                  <li>
                    <BlueBold>Grid Item Placement</BlueBold>:{" "}
                    <Mono>GridItem</Mono> is a component that can be a child of
                    Grid. You can control placement of <Mono>GridItem</Mono>{" "}
                    with the <Mono>colSpan</Mono>, <Mono>rowSpan</Mono>,{" "}
                    <Mono>colStart</Mono>, <Mono>colEnd</Mono>,{" "}
                    <Mono>rowStart</Mono>, and <Mono>rowEnd</Mono> props.
                  </li>
                  <li>
                    <BlueBold>Responsive Design</BlueBold>: All of the
                    grid-related props accept responsive array values or object
                    values to apply different styles at different breakpoints.
                  </li>
                  <li>
                    <BlueBold>Other Box Props</BlueBold>: Since{" "}
                    <Mono>Grid</Mono> is a <Mono>Box</Mono>, you can use all the{" "}
                    <Mono>Box</Mono> props for spacing, color, typography, and
                    more, in addition to the grid-specific props.
                  </li>
                </ul>
              </BulletBox>
              <DescriptionBox>
                <BasicText>
                  These are just some of the key properties provided by the{" "}
                  <Mono>Grid</Mono> component. Using Chakra UI's{" "}
                  <Mono>Grid</Mono> component, you can build most of the complex
                  and responsive grid layouts in a clean and straightforward
                  manner.
                </BasicText>
                <br />
                <BasicText>
                  Remember that these properties are part of CSS Grid Layout, so
                  they have broad browser support. But, as always, test your
                  designs in multiple browsers to ensure compatibility.
                </BasicText>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    These components can be imported as follows:
                  </BasicText>
                  <MiniCode>{`import { Box, Grid } from "@chakra-ui/react"`}</MiniCode>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Grid templateColumns="repeat(3, 1fr)">
                  <Box bg="blue.500" h="10" w="100%">
                    Box One
                  </Box>
                  <Box bg="green.500" h="10" w="100%">
                    Box Two
                  </Box>
                  <Box bg="pink.500" h="10" w="100%">
                    Box Three
                  </Box>
                </Grid>

                <ModalCode>
                  <Highlighter>{`<Grid templateColumns="repeat(3, 1fr)">
  <Box bg="blue.500" h="10" w="100%">
    Box One
  </Box>
  <Box bg="green.500" h="10" w="100%">
    Box Two
  </Box>
  <Box bg="pink.500" h="10" w="100%">
    Box Three
  </Box>
</Grid>`}</Highlighter>
                </ModalCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box bg={"mainText"} p={2} mb={2}>
                  <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                    <Box p={4} boxShadow="xl" bg="accent_2" color="background">
                      <Text fontSize="md" fontWeight="bold">
                        Item One
                      </Text>
                      <Text mt={2}>Some info...</Text>
                      <Text mt={2} color="gray.500">
                        Details...
                      </Text>
                    </Box>
                    <Box p={4} boxShadow="xl" bg="accent_2" color="background">
                      <Text fontSize="md" fontWeight="bold">
                        Item Two
                      </Text>
                      <Text mt={2}>Some info...</Text>
                      <Text mt={2} color="gray.500">
                        Details...
                      </Text>
                    </Box>
                    <Box p={4} boxShadow="xl" bg="accent_2" color="background">
                      <Text fontSize="md" fontWeight="bold">
                        Item Three
                      </Text>
                      <Text mt={2}>Some info...</Text>
                      <Text mt={2} color="gray.500">
                        Details...
                      </Text>
                    </Box>
                  </Grid>
                </Box>

                <ModalCode>
                  <Highlighter>{`<Grid templateColumns="repeat(3, 1fr)" gap={1}>
  <Box p={4} boxShadow="xl" bg="accent_2" color="background">
    <Text fontSize="md" fontWeight="bold">
      Item One
    </Text>
    <Text mt={2}>Some info...</Text>
    <Text mt={2} color="gray.500">
      Details...
    </Text>
  </Box>
  <Box p={4} boxShadow="xl" bg="accent_2" color="background">
    <Text fontSize="md" fontWeight="bold">
      Item Two
    </Text>
    <Text mt={2}>Some info...</Text>
    <Text mt={2} color="gray.500">
      Details...
    </Text>
  </Box>
  <Box p={4} boxShadow="xl" bg="accent_2" color="background">
    <Text fontSize="md" fontWeight="bold">
      Item Three
    </Text>
    <Text mt={2}>Some info...</Text>
    <Text mt={2} color="gray.500">
      Details...
    </Text>
  </Box>
</Grid>`}</Highlighter>
                </ModalCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Grid gap={3} bg="accent_2" color="background" p={2}>
                  <Text>Thing One</Text>
                  <Text>Thing Two</Text>
                  <Text>Thing Three</Text>
                </Grid>

                <MiniCode>{`<Grid gap={3} bg="accent_2" color="background" p={2}>
  <Text>Thing One</Text>
  <Text>Thing Two</Text>
  <Text>Thing Three</Text>
</Grid>`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Profiles />
                <ModalCode>
                  <Highlighter>{`export function Profiles() {
  const profiles = ["Alice", "Bob", 
                    "Charlie", "Dave"];

  return (
    <Grid
      autoRows="minmax(20px, auto)"
      autoColumns="minmax(125px, auto)"
      gap={1}
      bg="accent_2" color="background"
    >
      {profiles.map((profile) => (
        <Box key={profile} p={1} boxShadow="base" 
          borderRadius="md">
          <Text fontSize="lg">{profile}</Text>
        </Box>
      ))}
    </Grid>
  );
}`}</Highlighter>
                </ModalCode>
                <BasicText>
                  <HL>Auto Columns and Rows</HL>: Let's say we're creating a
                  grid to display profile cards. We don't know how many profiles
                  we'll have, so we let the grid auto-place them. Each card
                  should be at least 200px wide and 20px tall.
                </BasicText>
                <BasicText>
                  In this example, we're mapping over an array of profile names
                  and creating a <Mono>Box</Mono> for each one. The{" "}
                  <Mono>Grid</Mono> automatically creates rows and columns as
                  needed, ensuring that each <Mono>Box</Mono> is at least 125px
                  tall and 20px wide.
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Dashboard />
                <ModalCode>
                  <Highlighter>{`export function Dashboard() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" 
    gap={6} bg="accent_2" color="background" p={1}>
      <GridItem colSpan={1}>
        <Box p={3} bg="green.500">
          Widget 1
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box p={3} bg="blue.500">
          Widget 2
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box p={3} bg="red.500">
          Widget 3
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box p={3} bg="yellow.500">
          Widget 4
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box p={3} bg="purple.500">
          Widget 5
        </Box>
      </GridItem>
    </Grid>
  );
}`}</Highlighter>
                </ModalCode>
                <BasicText>
                  <HL>Grid Item Placement</HL>: Let's imagine a dashboard with
                  various widgets. We can use <Mono>colSpan</Mono> to specify
                  that certain widgets should span multiple columns.
                </BasicText>
                <BasicText>
                  In this example, "Widget 2" spans two columns, while the rest
                  of the widgets only span one. The <Mono>colSpan</Mono>{" "}
                  property is used to control this.
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <ImageGallery />
                <ModalCode>
                  <Highlighter>
                    {`export function ImageGallery() {
const images = Array(5).fill(null); // Array of 5 nulls
return (
  <Grid
    templateColumns={{
      base: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
    }}
    gap={4}
  >
    {images.map((_, i) => (
      <Box key={i}>
        <Image
          src={https://picsum.photos/seed/{i}/200/100'}
          alt="Gallery"
          objectFit="cover"
        />
      </Box>
    ))}
  </Grid>
);
}`}
                  </Highlighter>
                </ModalCode>
                <BasicText>
                  {" "}
                  <HL>Responsive Design</HL>: Let's create a responsive image
                  gallery that displays images in a grid. The grid has 1 column
                  on extra small screens, 2 columns on small screens, and 3
                  columns on medium and larger screens.
                </BasicText>
                <BasicText>
                  In this example, we're mapping over an array of image URLs and
                  creating an Image for each one inside a <Mono>Box</Mono>. The{" "}
                  <Mono>Grid</Mono> changes its column layout based on the
                  screen size: <Mono>1</Mono> column for base (extra small),{" "}
                  <Mono>2</Mono> columns for small, and <Mono>3</Mono> for
                  medium and above.
                </BasicText>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              With Chakra UI's Grid component, you can create responsive layouts
              using array-based syntax? It's not just about defining a fixed
              number of columns or rows. You can define different numbers of
              columns or rows based on the size of the viewport. This allows for
              highly responsive designs with less code. <br />
              In the following example, the Grid component has one column for
              extra small screens, two for small screens, and three for medium
              and larger screens.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content">
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  gap={1}
                  color="background"
                >
                  <Box bg="blue.300" height="30px" p={1}>
                    One
                  </Box>
                  <Box bg="blue.300" height="30px" p={1}>
                    Two
                  </Box>
                  <Box bg="blue.300" height="30px" p={1}>
                    Three
                  </Box>
                </Grid>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Grid
  templateColumns={[
    "repeat(1, 1fr)",
    "repeat(2, 1fr)",
    "repeat(3, 1fr)",
  ]}
  gap={1}
>
  <Box bg="blue.300" height="30px" p={1}>One</Box>
  <Box bg="blue.300" height="30px" p={1}>Two</Box>
  <Box bg="blue.300" height="30px" p={1}>Three</Box>
</Grid>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              Chakra UI's Grid component uses CSS Grid Layout under the hood?
              This means you have access to properties like grid-auto-flow,
              which lets you control the direction in which items are placed in
              the grid. You can create interesting and dynamic layouts that
              aren't limited to a top-to-bottom, left-to-right flow.
              <br />
              In this example, the Grid component will first try to fill each
              column before moving on to the next row.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content">
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  autoFlow="column"
                  gap="2"
                >
                  <Box bg="red.300" h="60px" w="60px"></Box>
                  <Box bg="green.300" h="60px" w="60px"></Box>
                  <Box bg="blue.300" h="60px" w="60px"></Box>
                </Grid>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Grid templateColumns="repeat(2, 1fr)" autoFlow="column" gap="2">
  <Box bg="red.300" h="60px" w="60px"></Box>
  <Box bg="green.300" h="60px" w="60px"></Box>
  <Box bg="blue.300" h="60px" w="60px"></Box>
</Grid>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              Chakra UI's Grid component supports <b>auto-fit</b> and{" "}
              <b>auto-fill</b>keywords? These are powerful tools for creating
              flexible and responsive layouts that adapt to the content. For
              instance, with <b>auto-fit</b>, the grid will create as many
              columns as it can fit into the container and will expand the
              columns to fill any leftover space when there are fewer items than
              columns.
              <br />
              In the following example, the <b>Grid</b> component will
              automatically adjust the number of columns based on the minimum
              size specified. If a new column cannot fit into the container,
              it's added as a new row instead.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content" color="background">
                <Grid
                  templateColumns="repeat(auto-fit, minmax(100, 1fr))"
                  gap="2"
                >
                  <Box bg="red.300" h="60px" p={2}>
                    One
                  </Box>
                  <Box bg="green.300" h="60px" p={2}>
                    Two
                  </Box>
                  <Box bg="blue.300" h="60px" p={2}>
                    Three
                  </Box>
                </Grid>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Grid
  templateColumns="repeat(auto-fit, minmax(100, 1fr))"
  gap="2"
>
  <Box bg="red.300" h="60px" p={2}>One</Box>
  <Box bg="green.300" h="60px" p={2}>Two</Box>
  <Box bg="blue.300" h="60px" p={2}>Three</Box>
</Grid>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>
    </BigBackgroundBox>
  );
}

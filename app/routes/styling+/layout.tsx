import { Box, Code, Grid, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BlueBold,
  FlexibleBox,
  Mono,
} from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  MyLabel,
  SectionContainer,
  ImportBox,
  MainGrid,
  GridColumn,
  HighlightColumn,
  GridBoxOne,
  GridBoxTwo,
  GridBoxThree,
  SingleExample,
  MyFlex,
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height">
        Layout
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <BasicText color={"accent_3"}>
                ⦾ In Chakra UI, controlling the dimensions of a component, i.e.,
                its width and height, is straightforward. Chakra provides
                utility props to adjust these dimensions as per your needs. Here
                is an overview:
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <BlueBold>Width</BlueBold>: You can control the width of a
                    component using the <Mono>w</Mono> or <Mono>width</Mono>{" "}
                    prop.
                  </li>
                  <li>
                    <BlueBold>Height</BlueBold>: You can control the height of a
                    component using the <Mono>h</Mono> or <Mono>height</Mono>{" "}
                    prop.
                  </li>
                  <li>
                    <BlueBold>Min/Max Width and Height</BlueBold>: You can
                    control the minimum and maximum dimensions of a component
                    using the <Mono>minW</Mono>, <Mono>maxW</Mono>,{" "}
                    <Mono>minH</Mono>, and <Mono>maxH</Mono>
                    props
                  </li>
                  <li>
                    <BlueBold>Box Sizing</BlueBold>: Chakra UI sets the
                    box-sizing property to <Mono>border-box</Mono> globally.
                    This means padding and border are included in an element's
                    total width and height. You don't have to worry about adding
                    padding or border to a box and accidentally making it larger
                    than you expected
                  </li>
                  <li>
                    <BlueBold>Display</BlueBold>: The <Mono>display</Mono>{" "}
                    property determines the type of rendering box used for an
                    element. You can use the display prop to control this
                  </li>
                  <li>
                    <BlueBold>Size</BlueBold>: For square components where{" "}
                    <Mono>width</Mono> and <Mono>height</Mono> are equal, you
                    can use the <Mono>size</Mono> prop to set both at once
                  </li>
                </ul>
              </BulletBox>
              <DescriptionBox>
                <BasicText>
                  By using these properties, you can create flexible layouts
                  that adapt to different screen sizes and provide a great user
                  experience.
                </BasicText>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    To import the <Mono>Box</Mono> component used below:
                  </BasicText>
                  <MiniCode>{`import { Box } from "@chakra-ui/react";`}</MiniCode>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox
                  width="100%"
                  height={12}
                  bg="accent_2"
                  color="background"
                  paddingX={2}
                >
                  <Code>{`width="100%" height={12}`}</Code>
                </FlexibleBox>
                <MiniCode>{`<Box width="100%" height={12}`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox
                  bg="accent_2"
                  color="background"
                  w="100%"
                  h="32px"
                  paddingX={2}
                >
                  <Mono> w="100%" h="32px"</Mono>
                </FlexibleBox>
                <MiniCode>{`<Box w="100%" h="32px"`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox
                  boxSize="xs"
                  bg="accent_2"
                  color="background"
                  paddingX={2}
                >
                  <Mono>boxSize="sm"</Mono>
                </FlexibleBox>
                <MiniCode>{`<Box boxSize="xs"`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox
                  w={256}
                  bg="accent_2"
                  color="background"
                  paddingX={2}
                >
                  <Code>{`w={256}`}</Code>
                </FlexibleBox>
                <MiniCode>{`<Box w={256}`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox
                  w="120px"
                  bg="accent_2"
                  color="background"
                  paddingX={2}
                  fontSize={12}
                >
                  <Mono>w='120px'</Mono>
                </FlexibleBox>
                <MiniCode>{`<Box w="120px">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  w={{ base: "100%", md: "50%", lg: "25%" }}
                  bg="accent_2"
                  color="background"
                  p={3}
                >
                  This is a responsive box
                </Box>
                <MiniCode>{`<Box w={{ base: "100%", md: "50%", lg: "25%" }}>`}</MiniCode>
                <BasicText>
                  You can use different units like <Mono>em</Mono>,{" "}
                  <Mono>rem</Mono>, <Mono>%</Mono>, and p<Mono></Mono>x. You can
                  also use string literals like <Mono>"full"</Mono> to set the
                  width to <Mono>100%</Mono>, or <Mono>"auto"</Mono> to let the
                  browser calculate the width. For responsive design, you can
                  provide an array or an object with different values for
                  different breakpoints
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  h={{ base: "50px", md: "100px", lg: "150px" }}
                  bg="accent_2"
                  color="background"
                  p={3}
                >
                  This is a responsive box
                </Box>

                <MiniCode>{`<Box h={{ base: "50px", md: "100px", lg: "150px" }}>`}</MiniCode>
                <BasicText>
                  As with width, you can use various units, or literals like{" "}
                  <Mono>"full"</Mono> and <Mono>"auto"</Mono>. You can also
                  specify different heights for different breakpoints.
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  minW="100px"
                  maxW="500px"
                  bg="accent_2"
                  color="background"
                  p={3}
                >
                  This box has a minimum and maximum width.
                </Box>

                <MiniCode>{`<Box minW="100px" maxW="500px">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  minH="50px"
                  maxH="200px"
                  bg="accent_2"
                  color="background"
                  p={3}
                >
                  This box has a minimum and maximum height.
                </Box>
                <MiniCode>{`<Box minH="50px" maxH="200px">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box display="flex" bg="accent_2" color="background" p={3}>
                  This box is a flex container.
                </Box>
                <MiniCode>{`<Box display="flex">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  display="inline-block"
                  bg="accent_2"
                  color="background"
                  p={3}
                >
                  This box is an inline-block element.
                </Box>
                <MiniCode>{`<Box display="inline-block">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              Chakra UI provides a built-in CSS grid system that allows you to
              create complex and responsive grid layouts easily. You can use the{" "}
              <b>Grid</b> component and its related props to define the number
              of columns, column widths, row gaps, and more. In this example,
              the <b>Grid</b> component is used to create a 3-column grid layout
              with equal column widths (1fr). The gap prop sets the gap between
              grid items. You can customize the number of columns, column
              widths, and gaps according to your layout requirements.
            </HighlightText>
            <HighlightExample h="fit-content">
              <Box p={3} w="100%">
                <Grid templateColumns="repeat(3, 1fr)" gap={1} m={1} w="100%">
                  <Box bg="yellow.400" height="30px" />
                  <Box bg="green.400" height="30px" />
                  <Box bg="blue.400" height="30px" />
                </Grid>
              </Box>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Grid templateColumns="repeat(3, 1fr)" gap={1}>
  <Box bg="yellow.400" height="30px" />
  <Box bg="green.400" height="30px" />
  <Box bg="blue.400" height="30px" />
</Grid>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              Chakra UI's <b>Stack</b> component provides a convenient way to
              stack elements vertically or horizontally. It automatically
              handles spacing and alignment between the elements. In this
              example, the Stack component stacks the elements vertically (
              <b>direction="column"</b>) with a <b>spacing</b> of <b>4</b>. You
              can change the direction to "row" for horizontal stacking. The{" "}
              <b>Stack</b> component automatically manages the spacing between
              the elements, making it easy to create vertically or horizontally
              aligned layouts.
            </HighlightText>
            <HighlightExample h="fit-content">
              <Box p={3} w="100%">
                <Stack direction="column" spacing={2}>
                  <Box bg="yellow.400" height="30px" />
                  <Box bg="purple.400" height="30px" />
                  <Box bg="red.400" height="30px" />
                </Stack>
              </Box>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Stack direction="column" spacing={2}>
  <Box bg="yellow.400" height="30px" /> 
  <Box bg="purple.400" height="30px" />
  <Box bg="red.400" height="30px" />
</Stack>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              Chakra UI offers a responsive <b>Wrap</b> component that allows
              content to wrap onto multiple lines based on the available space.
              This is useful for creating responsive grids or wrapping items in
              a container when they exceed the container's width. In this
              example, the <b>Wrap</b> component is used to wrap the{" "}
              <b>WrapItem</b>
              components onto multiple lines based on the available space. The{" "}
              <b>spacing</b> prop defines the gap between the wrapped items.
              This allows you to create responsive grids or wrap elements in a
              container, ensuring they stay within the container's width.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content">
                <Wrap spacing={1} justify="center" align="center" w="100%">
                  <WrapItem>
                    <Box bg="red.400" height="30px" width="175px" />
                  </WrapItem>
                  <WrapItem>
                    <Box bg="green.400" height="30px" width="175px" />
                  </WrapItem>
                  <WrapItem>
                    <Box bg="blue.400" height="30px" width="175px" />
                  </WrapItem>
                </Wrap>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Wrap spacing={1}>
  <WrapItem>
    <Box bg="red.400" height="30px" width="220px" />
  </WrapItem>
  <WrapItem>
    <Box bg="green.400" height="30px" width="220px" />
  </WrapItem>
  <WrapItem>
    <Box bg="blue.400" height="30px" width="220px" />
  </WrapItem>
</Wrap>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

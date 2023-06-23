import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, Mono, HL, colors } from "~/styles/DesignComponents";

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
  SectionDescription,
  ViewCode,
  HighlightText,
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#flexbox">
        Flexbox
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <SectionDescription>
                ⦾ Chakra UI, the Flex component is a Box component (the most
                basic and versatile component in Chakra UI, a simple styled div)
                with display: flex by default. This makes it easy to apply
                common flexbox properties to layout your components. Here's a
                rundown:
              </SectionDescription>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Flex Direction</HL>: The <Mono>direction</Mono> prop
                    corresponds to the <Mono>flex-direction</Mono> CSS property,
                    which defines the direction of the flex items in the flex
                    container. It accepts values like <Mono>row</Mono>,{" "}
                    <Mono>column</Mono>, <Mono>row-reverse</Mono>, and{" "}
                    <Mono>column-reverse</Mono>.
                  </li>
                  <li>
                    <HL>Justify Content</HL>: The <Mono>justify</Mono> prop is a
                    shorthand for the CSS <Mono>justify-content</Mono> property.
                    It defines how the browser distributes space between and
                    around content items along the main-axis of a flex
                    container. It accepts standard CSS{" "}
                    <Mono>justify-content</Mono> values like
                    <Mono>flex-start</Mono>, <Mono>flex-end</Mono>,{" "}
                    <Mono></Mono>
                    center, <Mono>space-between</Mono>,{" "}
                    <Mono>space-around</Mono>,<Mono>space-evenly</Mono>.
                  </li>
                  <li>
                    <HL>Align Items</HL>: The align prop is short for
                    align-items. It defines the default behavior for how flex
                    items are laid out along the cross-axis on the current line.
                    It accepts values like <Mono>stretch</Mono>,{" "}
                    <Mono>flex-start</Mono>, <Mono>flex-end,</Mono>{" "}
                    <Mono>center</Mono>, and <Mono>baseline</Mono>.
                  </li>
                  <li>
                    <HL>Wrap</HL>: The wrap prop is short for <Mono></Mono>
                    flex-wrap. It controls whether the flex container is
                    single-lined or multi-lined, and the direction of the
                    cross-axis, which determines the direction new lines are
                    stacked in. It accepts values like <Mono></Mono>nowrap,{" "}
                    <Mono>wrap</Mono>,<Mono>wrap-reverse</Mono> .
                  </li>
                  <li>
                    <HL>Responsive Design</HL>: All of these props can accept
                    responsive array values or object values to apply different
                    styles at different breakpoints.
                  </li>
                  <li>
                    <HL>Flex Children (Flex Items)</HL>: You can also control
                    the flex properties of child elements using Chakra UI props.
                    For example, you can use the <Mono>flexGrow</Mono>,{" "}
                    <Mono>flexShrink</Mono>, and <Mono>flexBasis</Mono> props on
                    children of a Flex component to control how they flex.
                  </li>
                  <li>
                    <HL>Flex shorthand</HL>: The <Mono>flex</Mono> prop provides
                    a shorthand to specify the <Mono>flexGrow</Mono>,{" "}
                    <Mono>flexShrink</Mono>, and <Mono>flexBasis</Mono>{" "}
                    properties simultaneously. For instance,{" "}
                    <Mono>flex="1"</Mono> would be equivalent to setting{" "}
                    <Mono>flexGrow={1}</Mono>, <Mono>flexShrink={1}</Mono>,{" "}
                    <Mono>flexBasis="0%"</Mono>.
                  </li>
                  <li>
                    <HL>Other Box Props</HL>: Since <Mono>Flex</Mono> is a{" "}
                    <Mono>Box</Mono>, you can use all the <Mono></Mono>
                    <Mono>Box</Mono> props for spacing, color, typography, and
                    more, in addition to the flex-specific props.
                  </li>
                </ul>
              </BulletBox>
              <DescriptionBox>
                <BasicText>
                  The Flex component in Chakra UI is a powerful tool to achieve
                  complex layouts while keeping the markup simple and clean.
                </BasicText>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    To import the <Mono>Flex</Mono> component:
                  </BasicText>

                  <MiniCode>{`import { Flex } from "@chakra-ui/react";`}</MiniCode>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Flex
                  bg="accent_2"
                  color="background"
                  h="75px"
                  p={2}
                  align="center"
                  justify="center"
                >
                  Very centered, indeed!
                </Flex>
                <MiniCode>{`<Flex align="center" justify="center">`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  direction="row"
                  bg="accent_2"
                  color="background"
                  w={350}
                  p={3}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>
                  {`<Flex display="row">
  <Text>Child One</Text>
  <Text>Child Two</Text>
  <Text>Child Three</Text>
</Flex>`}
                </MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  direction="column"
                  bg="accent_2"
                  color="background"
                  w={350}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex direction="column">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  justify="center"
                  bg="accent_2"
                  color="background"
                  w={350}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex justify="center">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  justify="space-between"
                  bg="accent_2"
                  color="background"
                  w={350}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex justify="space-between">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  align="center"
                  bg="accent_2"
                  color="background"
                  w={350}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex align="center">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  align="stretch"
                  bg="accent_2"
                  color="background"
                  w={350}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex align="stretch">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  wrap="wrap"
                  bg="accent_2"
                  color="background"
                  w={200}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex wrap="wrap">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  wrap="nowrap"
                  bg="accent_2"
                  color="background"
                  w={200}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex wrap="nowrap">`}</MiniCode>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  bg="accent_2"
                  color="background"
                  w={350}
                  px={3}
                  py={1}
                >
                  <Text>Child One</Text>
                  <Text>Child Two</Text>
                  <Text>Child Three</Text>
                </Flex>
                <MiniCode>{`<Flex direction={{ base: "column", md: "row" }}>`}</MiniCode>
                <BasicText>
                  On mobile and smaller screens, this will be column-wrap. At
                  medium sized screens and above, this will switch to row-wrap.
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex bg="accent_2" color="background" w={350} px={3} py={1}>
                  <Box flexGrow={1}>Child One</Box>
                  <Box flexShrink={2}>Child Two</Box>
                  <Box>Child Three</Box>
                </Flex>
                <MiniCode>{`<Flex>
  <Box flexGrow={1}>Child One</Box>
  <Box flexShrink={2}>Child Two</Box>
  <Box>Child Three</Box>
</Flex>`}</MiniCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              You can create equal height columns using <b>Flexbox</b> in Chakra
              UI. By applying the <b>flex={1}</b> prop to each column, the
              available space is distributed equally among them, resulting in
              columns with equal height.
            </HighlightText>
            <MyFlex>
              <Flex>
                <Box flex={1} bg="red.400" p={4}>
                  Column 1
                </Box>
                <Box flex={1} bg="blue.400" p={4}>
                  Column 2
                </Box>
                <Box flex={1} bg="green.400" p={4}>
                  Column 3
                </Box>
              </Flex>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Flex>
  <Box flex={1} bg="red.400" p={4}>
    Column 1
  </Box>
  <Box flex={1} bg="blue.400" p={4}>
    Column 2
  </Box>
  <Box flex={1} bg="green.400" p={4}>
    Column 3
  </Box>
</Flex>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Flexbox</b> in Chakra UI enables you to effortlessly create
              responsive layouts using the <b>Wrap</b> component. The{" "}
              <b>Wrap</b>
              component utilizes the power of Flexbox to wrap flex items onto
              multiple lines, ensuring a visually appealing and responsive
              design. In this example, the <b>Wrap</b> component leverages the
              power of
              <b>Flexbox</b> to create a responsive grid or wrap elements within
              a container. <br />
              The <b>spacing={1}</b> prop sets the spacing between the wrapped
              items. Each <b>WrapItem</b> component represents an individual
              item within the <b>Wrap</b> component. The <b>WrapItem</b> ensures
              that each item is wrapped correctly and contributes to the
              responsive behavior. Each item is a <b>Box</b> component with a
              specified background color (<b>bg</b>) and dimensions (
              <b>height</b> and <b>width</b>). <br />
              <b>Flexbox</b> comes into play as the <b>Wrap</b> component
              arranges the items in a row by default. However, when the
              available space is insufficient to fit all the items in a single
              row, <b>Flexbox</b> automatically wraps them onto the next line
              while maintaining their order. This ensures that the items are
              displayed neatly in a responsive manner, adapting to different
              screen sizes and orientations. By using <b>Flexbox</b> through the{" "}
              <b>Wrap</b> component, Chakra UI simplifies the process of
              creating responsive grids or wrapping elements within a container.
              This flexibility enhances the overall responsiveness and
              aesthetics of your UI.
            </HighlightText>
            <MyFlex>
              <Wrap spacing={1}>
                <WrapItem>
                  <Box bg="red.400" height="30px" width="220px" />
                </WrapItem>
                <WrapItem>
                  <Box bg="green.400" height="30px" width="220px" />
                </WrapItem>
                <WrapItem>
                  <Box bg="blue.400" height="30px" width="220px" />
                </WrapItem>
              </Wrap>
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
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Flexbox</b> in Chakra UI allows you to achieve vertical center
              alignment effortlessly. By using the <b>align="center"</b> prop on
              the <b>Flex</b> container, the flex items are vertically centered
              within the container, regardless of their individual heights.
            </HighlightText>
            <MyFlex>
              <Flex height="80px" align="center">
                <Box bg="blue.400" p={2}>
                  Item 1
                </Box>
                <Box bg="green.400" p={2}>
                  Item 2
                </Box>
                <Box bg="red.400" p={2}>
                  Item 3
                </Box>
              </Flex>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Flex height="80px" align="center">
  <Box bg="blue.400" p={2}>
    Item 1
  </Box>
  <Box bg="green.400" p={2}>
    Item 2
  </Box>
  <Box bg="red.400" p={2}>
    Item 3
  </Box>
</Flex>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

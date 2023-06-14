import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  FlexibleBox,
  HL,
  Mono,
  MyDivider,
  colors,
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
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

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
              <BasicText color={colors.mainAccent3}>
                ⦾ In Chakra UI, controlling the dimensions of a component, i.e.,
                its width and height, is straightforward. Chakra provides
                utility props to adjust these dimensions as per your needs. Here
                is an overview:
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Width</HL>: You can control the width of a component
                    using the <Mono>w</Mono> or <Mono>width</Mono> prop.
                  </li>
                  <li>
                    <HL>Height</HL>: You can control the height of a component
                    using the <Mono>h</Mono> or <Mono>height</Mono> prop.
                  </li>
                  <li>
                    <HL>Min/Max Width and Height</HL>: You can control the
                    minimum and maximum dimensions of a component using the{" "}
                    <Mono>minW</Mono>, <Mono>maxW</Mono>, <Mono>minH</Mono>, and{" "}
                    <Mono>maxH</Mono>
                    props
                  </li>
                  <li>
                    <HL>Box Sizing</HL>: Chakra UI sets the box-sizing property
                    to <Mono>border-box</Mono> globally. This means padding and
                    border are included in an element's total width and height.
                    You don't have to worry about adding padding or border to a
                    box and accidentally making it larger than you expected
                  </li>
                  <li>
                    <HL>Display</HL>: The <Mono>display</Mono> property
                    determines the type of rendering box used for an element.
                    You can use the display prop to control this
                  </li>
                  <li>
                    <HL>Size</HL>: For square components where{" "}
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
                  <Highlighter>{`import { Box } from "@chakra-ui/react";`}</Highlighter>
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
                  bg={colors.mypurple}
                  paddingX={2}
                >
                  <Mono>width="100%" height={12}</Mono>
                </FlexibleBox>
                <Highlighter>{`<Box width="100%" height={12}`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox
                  bg={colors.mypurple}
                  w="100%"
                  h="32px"
                  paddingX={2}
                >
                  <Mono> w="100%" h="32px"</Mono>
                </FlexibleBox>
                <Highlighter>{`<Box w="100%" h="32px"`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox boxSize="sm" bg={colors.mypurple} paddingX={2}>
                  <Mono>boxSize="sm"</Mono>
                </FlexibleBox>
                <Highlighter>{`<Box boxSize="sm"`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox w={256} bg={colors.mypurple} paddingX={2}>
                  <Mono>w={256}</Mono>
                </FlexibleBox>
                <Highlighter>{`<Box w={256}`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <FlexibleBox
                  w="120px"
                  bg={colors.mypurple}
                  paddingX={2}
                  fontSize={12}
                >
                  <Mono>w='120px'</Mono>
                </FlexibleBox>
                <Highlighter>{`<Box w="120px">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  w={{ base: "100%", md: "50%", lg: "25%" }}
                  bg={colors.mypurple}
                  p={3}
                >
                  This is a responsive box
                </Box>
                <Highlighter>{`<Box w={{ base: "100%", md: "50%", lg: "25%" }}>`}</Highlighter>
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
                  bg={colors.mypurple}
                  p={3}
                >
                  This is a responsive box
                </Box>

                <Highlighter>{`<Box h={{ base: "50px", md: "100px", lg: "150px" }}>`}</Highlighter>
                <BasicText>
                  As with width, you can use various units, or literals like{" "}
                  <Mono>"full"</Mono> and <Mono>"auto"</Mono>. You can also
                  specify different heights for different breakpoints.
                </BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box minW="100px" maxW="500px" bg={colors.mypurple} p={3}>
                  This box has a minimum and maximum width
                </Box>

                <Highlighter>{`<Box minW="100px" maxW="500px">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box minH="50px" maxH="200px" bg={colors.mypurple} p={3}>
                  This box has a minimum and maximum height
                </Box>
                <Highlighter>{`<Box minH="50px" maxH="200px">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box display="flex" bg={colors.mypurple} p={3}>
                  This box is a flex container
                </Box>
                <Highlighter>{`<Box display="flex">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box display="inline-block" bg={colors.mypurple} p={3}>
                  This box is an inline-block element
                </Box>
                <Highlighter>{`<Box display="inline-block">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>Highlight coming soon!</GridBoxOne>
          <GridBoxTwo>Highlight coming soon!</GridBoxTwo>
          <GridBoxThree>Highlight coming soon!</GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

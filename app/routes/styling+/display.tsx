import {
  Box,
  Button,
  Flex,
  Grid,
  VStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  Mono,
  HL,
  MyDivider,
  colors,
  FlexibleBox,
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#display">
        Display
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <BasicText color={colors.mainAccent3}>
                ⦾ Chakra UI provides a lot of flexibility when it comes to
                controlling the display property of elements, just like any
                other aspect of CSS. You can use the display prop to adjust the
                display CSS property of a component.
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Standard Display</HL>: The display prop can be set to
                    any valid CSS display value
                  </li>
                  <li>
                    <HL>Flexbox</HL>: Chakra UI has first-class support for{" "}
                    <Mono>Flexbox</Mono> layouts, which is integrated directly
                    into the <Mono>Box</Mono> component and also has a dedicated{" "}
                    <Mono>Flex</Mono> component. Chakra UI provides props for
                    all the common <Mono>Flexbox</Mono> properties, such as{" "}
                    <Mono>alignItems</Mono>, <Mono>justifyContent</Mono>,{" "}
                    <Mono>flexWrap</Mono>, <Mono>flexDirection</Mono>, and more.
                  </li>
                  <li>
                    <HL>Grid</HL>: Similar to <Mono>Flexbox</Mono>, Chakra UI
                    also has excellent support for <Mono>CSS Grid</Mono>{" "}
                    layouts, with a dedicated <Mono>Grid</Mono> component
                  </li>
                  <li>
                    <HL>None</HL>: You can hide elements by setting the display
                    prop to <Mono>"none"</Mono>
                  </li>
                  <li>
                    <HL>Responsive Display</HL>: As with many other props in
                    Chakra UI, display can take an array or an object to specify
                    different values at different breakpoints
                  </li>
                  <li>
                    <HL>Box Visibility</HL>: Apart from the display property,
                    visibility of components can also be controlled using the{" "}
                    <Mono>visibility</Mono> prop, which can take values of{" "}
                    <Mono>"visible"</Mono> or <Mono>"hidden"</Mono>
                  </li>
                </ul>
              </BulletBox>
              <DescriptionBox>
                <BasicText>
                  This gives you a lot of power and flexibility when it comes to
                  controlling the layout and visibility of your components.
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
                <BasicText>
                  <Mono>display='none'</Mono> makes an element not appear. (The
                  following element does not appear.)
                </BasicText>
                <FlexibleBox bg={colors.mypurple} display="none">
                  display='none'
                </FlexibleBox>
                <Highlighter>{`<Box display="none">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <BasicText>
                  The following <Mono>Box</Mono> only appears on medium and
                  smaller screens:
                </BasicText>
                <Box h={100}>
                  <Box
                    hideFrom="md"
                    h="100px"
                    w="100px"
                    bg={colors.mypurple}
                  ></Box>{" "}
                </Box>
                <Highlighter>{`<Box hideFrom="md" h="100px" w="100px">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <BasicText>
                  The following <Mono>Box</Mono> will not appear until the
                  screen is at least medium size.
                </BasicText>
                <Box h={200}>
                  <Box
                    display={{ base: "none", md: "block" }}
                    bg={colors.mypurple}
                    color={colors.mainText}
                    padding={3}
                  >
                    <Mono>base: "none", md: "block" </Mono>configuration sets
                    the display property to "none" for smaller screens and
                    "block" for screens that meet or exceed the <Mono>md</Mono>{" "}
                    breakpoint. This allows for responsive behavior where the
                    element is hidden on smaller screens and displayed as a
                    block on larger screens.
                  </Box>
                </Box>
                <Highlighter>{`<Box display={{ base: "none", md: "block" }}>`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <BasicText>
                  The following boxes only show on screens that are medium or
                  smaller:
                </BasicText>

                <FlexibleBox
                  display={{ base: "block", md: "none" }}
                  bg={colors.mypurple}
                  color={colors.mainText}
                >
                  <Mono>base: "block", md: "none"</Mono> - hide the element from
                  'md' up
                </FlexibleBox>

                <Highlighter>{`<Box display={{ base: "block", md: "none" }}>`}</Highlighter>

                <br />

                <FlexibleBox
                  hideFrom="md"
                  bg={colors.mypurple}
                  color={colors.mainText}
                >
                  This box complete disappears at sizes of medium and higher.
                </FlexibleBox>

                <Highlighter>{`<Box hideFrom="md">`}</Highlighter>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box display="block" bg={colors.mypurple}>
                  This is a block-level element
                </Box>
                <Highlighter>{`<Box display="block">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box display="inline-block" bg={colors.mypurple}>
                  This is an inline-block element
                </Box>
                <Highlighter>{`<Box display="inline-block"?`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box display="flex" bg={colors.mypurple}>
                  This box is a flex container
                </Box>
                <Highlighter>{`<Box display="flex">`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Flex bg={colors.mypurple}>
                  This flex component is also a flex container
                </Flex>
                <Highlighter>{`<Flex>`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <Box p={2} bg={colors.mypurple}>
                    This is a grid item
                  </Box>
                  <Box p={2} bg={colors.mainAccent} color="black">
                    This is another grid item
                  </Box>
                </Grid>

                <Highlighter>{`<Grid templateColumns="repeat(2, 1fr)" gap={6}>
  <Box>This is a grid item</Box>
  <Box>This is another grid item</Box>
</Grid>
`}</Highlighter>
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            By using the <b>display</b> prop, you can easily toggle the display
            behavior of elements. In this case, the first <b>Box</b> component
            will behave like an inline element, while the second By using the
            display prop, you can easily toggle the display behavior of
            elements. In this case, the first Box component will behave like an
            inline element, while the second Box component will behave like a
            block-level element. <b>Box</b> component will behave like a
            block-level element.
            <MyFlex>
              <Box display="inline" bg="green.300" p={4}>
                Inline Box
              </Box>
              <Box display="block" bg="blue.300" p={4}>
                Block Box
              </Box>
            </MyFlex>
            <Highlighter>{`<Box d="inline" bg="green.300" p={4}>
  Inline Box
</Box>
<Box d="block" bg="blue.300" p={4}>
  Block Box
</Box>`}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            Chakra UI includes the VisuallyHidden component to visually hide an
            element while keeping it accessible for screen readers. This is
            useful when you want to hide elements from sight but still provide
            meaningful content for assistive technologies. In this example, the
            VisuallyHidden component wraps the text "Click me to perform an
            action". Although visually hidden, the text will still be accessible
            to screen readers, providing a better user experience for users with
            visual impairments.
            <MyFlex>
              {" "}
              <Button>
                <VisuallyHidden>Click me to perform an action</VisuallyHidden>
                Click me
              </Button>
            </MyFlex>
            <Highlighter>{`<Button>
  <VisuallyHidden>Click me to perform an action</VisuallyHidden>
  Click me
</Button>`}</Highlighter>
          </GridBoxTwo>
          <GridBoxThree>
            Chakra UI provides the Flex component that makes it easy to create
            flexible and responsive layouts using CSS flexbox. It offers a
            simplified API for flexbox properties like flexDirection,
            justifyContent, alignItems, and more. In this example, the Flex
            component is used to create a flex container. The direction="row"
            prop sets the flex direction to horizontal. The
            justifyContent="center" and alignItems="center" props horizontally
            center and vertically align the flex items. This allows you to
            easily create flexible and responsive layouts using Chakra UI's Flex
            component.
            <MyFlex>
              <Flex direction="row" justifyContent="center" alignItems="center">
                <Box bg="red.300" p={4}>
                  Box 1
                </Box>
                <Box bg="blue.300" p={4}>
                  Box 2
                </Box>
              </Flex>
            </MyFlex>
            <Highlighter>{`<Box bg="red.300" p={4}>
  Box 1
</Box>
<Box bg="blue.300" p={4}>
  Box 2
</Box>`}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, BlueBold, HL, Mono } from "~/styles/DesignComponents";

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
  GridBoxOne,
  GridBoxThree,
  GridBoxTwo,
  HighlightColumn,
  MyFlex,
  SectionDescription,
  SingleExample,
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Layout from "~/mardownExamples/layout/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Image } from "@chakra-ui/react";
import {
  BoxOne,
  BoxTwo,
  BoxThree,
  BoxFour,
  BoxFive,
} from "~/components/layout/boxComponents";
import {
  BoxFunctionEight,
  BoxFunctionSeven,
  BoxFunctionSix,
} from "~/components/layout/boxFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/box" size={28}>
        Box
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Box</Mono> component in Chakra UI is a foundational
              and versatile component upon which many other Chakra UI components
              are built. It renders a <Mono>div</Mono> element by default and
              provides several key features that make it a powerful tool for
              building responsive layouts and composing new components.
            </SectionDescription>
            <BasicText>
              Because <Mono>Box</Mono> is so fundamental to this design system,
              let's look at some of the key aspects of the component that make
              it important.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <BlueBold>Foundation of Chakra UI</BlueBold>: The{" "}
                  <Mono>Box</Mono> component serves as the foundational element
                  of Chakra UI. It provides a base level of functionality and
                  styling that is inherited by all other Chakra UI components.
                  By using the <Mono>Box</Mono> component as a building block,
                  you can create consistent and cohesive designs throughout your
                  application.
                </li>
                <li>
                  <BlueBold>Flexible and Versatile</BlueBold>: The{" "}
                  <Mono>Box</Mono> component is highly flexible and versatile.
                  It can be used to create simple or complex layouts, style
                  individual elements, or compose new components. With its
                  extensive range of props and style shorthand, you can easily
                  customize the appearance and behavior of the <Mono>Box</Mono>{" "}
                  component to meet your specific design needs.
                </li>
                <li>
                  <BlueBold>Responsive Layouts</BlueBold>: The <Mono>Box</Mono>{" "}
                  component plays a crucial role in creating responsive layouts.
                  By specifying its props like <Mono>w</Mono> (width),{" "}
                  <Mono>h</Mono> (height), <Mono>maxW</Mono> (maximum width),{" "}
                  <Mono>maxH</Mono> (maximum height), and more, you can build
                  fluid and adaptive designs that seamlessly adapt to different
                  screen sizes and devices. This responsiveness is essential for
                  providing a consistent user experience across various
                  platforms.
                </li>
                <li>
                  <BlueBold>Shorthand Styling</BlueBold>: The <Mono>Box</Mono>{" "}
                  component introduces shorthand props that make styling more
                  concise and readable. Instead of writing out long-form CSS
                  properties, you can use shorter props like <Mono>bg</Mono> for
                  background <Mono>p</Mono> for padding, and many more. This
                  shorthand approach saves development time and improves code
                  maintainability.
                </li>
                <li>
                  <BlueBold>Composition and Overrides</BlueBold>: The{" "}
                  <Mono>Box</Mono> component enables component composition and
                  overrides through the as prop. This allows you to reuse the{" "}
                  <Mono>Box</Mono> component as a foundation for creating new
                  components, while still having the flexibility to change the
                  rendered element type. You can create custom components that
                  inherit the <Mono>Box</Mono> component's base styles and
                  functionality and extend them with specific behaviors or
                  additional styles.
                </li>
                <li>
                  <BlueBold>Developer-Friendly</BlueBold>: The <Mono>Box</Mono>{" "}
                  component is designed with developers in mind. Its intuitive
                  API and clear documentation make it easy to understand and
                  work with.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Box</Mono> can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Box } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BoxOne />
                <ModalCode>
                  <Highlighter>{`<Box bg="cyan" w="100%" p={4} color="black">`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BoxTwo />
                <ModalCode>
                  <Highlighter>{`<Box 
  bg="cyan" 
  w={["100%", "50%", "25%"]} 
  p={4} 
  color="black">
  This is a responsive Box.
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BoxThree />
                <ModalCode>
                  <Highlighter>{`<Box 
  bg="cyan" 
  color="black" 
  p={4} 
  m={2} 
  borderRadius="md">
  These styles are made using shorthand props.
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BoxFour />
                <ModalCode>
                  <Highlighter>{`interface BoxFunctionFourProps {
  children: React.ReactNode;
}

export function BoxFunctionFour({ children }: BoxFunctionFourProps) {
  return (
    <SingleExample bg="background">
      <Box
        as="button"
        bg="cyan"
        color="black"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{ bg: "darkgray", color: "cyan" }}
      >
        {children}
      </Box>
    </SingleExample>
  );
}`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BoxFive />
                <ModalCode>
                  <Layout.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Gradient Backgroun</b>d: You can create a gradient background
              using the Box component. This can add a visually appealing touch
              to your UI by applying gradients to backgrounds of various
              elements. The <b>bgGradient</b> prop is set to a linear gradient
              that transitions from teal.500 to blue.500, creating a horizontal
              gradient effect from left to right.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <BoxFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Scrollable Container</b>:You can create a custom scrollable
              container using the <b>Box</b> component. This can be useful when
              you want to have more control over the scrolling behavior or
              create a custom scrollbar design. The <b>overflowY</b> prop is set
              to "scroll" to enable vertical scrolling. The <b>maxHeight</b>{" "}
              prop restricts the height of the container. The <b>sx</b> prop is
              used to apply custom styles to the scrollbar, such as setting its
              width and defining the background color and border radius of the
              scrollbar thumb.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <BoxFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Overlay Modal</b>: You can create an overlay modal using the{" "}
              <b>Box</b> component. This can be handy when you want to display a
              modal dialog or popover that overlays the rest of the content on
              the page and want to make it yourself.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <BoxFunctionEight>
                  <Image
                    src="https://generative-placeholders.glitch.me/image?width=200&height=300&style=triangles&gap=23&colors=91"
                    borderRadius="lg"
                  />
                </BoxFunctionEight>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

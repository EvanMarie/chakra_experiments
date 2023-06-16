import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono, colors } from "~/styles/DesignComponents";

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
  SingleExample,
  MyFlex,
  SectionDescription,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { Box, Text } from "@chakra-ui/react";
import {
  AsPropBox,
  CustomAsPropComponent,
} from "~/components/styling/asPropExamples";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#the-as-prop">
        The "as" Prop
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The as prop is a special property in Chakra UI, which allows you
              to pass an element name or component to another component to
              determine what kind of element it should be rendered as. It
              provides a simple way to adjust the semantic element used for the
              component without having to create a new styled component or
              manually adjusting styles.
            </SectionDescription>
            <BasicText>
              In Chakra UI, nearly all components accept the as prop. This
              allows you to create new component variants quickly and
              efficiently without having to create additional styled components.
            </BasicText>
            <BasicText>
              Do note that while <Mono>as prop</Mono> provides a flexible way to
              adjust the component's rendered element, it may not be suitable in
              all scenarios. If a component has complex logic or state
              associated with it, it may be more suitable to build a dedicated
              component instead. Also, remember to ensure the semantiHTML
              <Mono>HTML</Mono> are maintained when using the{" "}
              <Mono>as prop</Mono> for accessibility reasons.
            </BasicText>

            {/* IMPORT CODE */}
            <ImportBox>
              <BasicText>
                To import the <Mono>Box</Mono> and <Mono>Text</Mono> components
                used below:
              </BasicText>
              <Highlighter>{`import { Box, Text } from "@chakra-ui/react";`}</Highlighter>
            </ImportBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>Rendering a Text Component as a h1</HL>: This example
                  demonstrates rendering a Text component as a h1. Here, the
                  component will retain all the functionalities of the Text
                  component, but be semantically rendered as a h1.
                </BasicText>
                <MyFlex>
                  <Text as="h1">This is a Heading using an "as" prop.</Text>
                </MyFlex>
                <Highlighter>{`<Text as="h1">This is a Heading</Text>`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>Using a Custom Component with as prop</HL>: You can also
                  pass a custom component to the as prop. This is particularly
                  useful if you have a component that should sometimes render as
                  one type of element and sometimes as another. In this example,
                  a <Mono>Box</Mono> is rendered as a{" "}
                  <Mono>CustomComponent</Mono>. This means the <Mono>Box</Mono>{" "}
                  will now have the appearance defined in the{" "}
                  <Mono>CustomComponent</Mono>.
                </BasicText>
                <MyFlex>
                  <Box as={CustomAsPropComponent}>
                    This is a custom component using an "as" prop.
                  </Box>
                </MyFlex>
                <Highlighter>{`function CustomComponent({ children }) {
  return <span style={{ 
    color: "blue", 
    fontWeight: "bold" }}>
    {children}
    </span>;
}

<Box as={CustomComponent}>
  This is a custom component
</Box>`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  Here's an example using React's built-in <Mono>useState</Mono>{" "}
                  hook to manage whether a message box is displayed or not. In
                  this example, we create a <Mono>Box</Mono> component and
                  render it as a button HTML element using Chakra's{" "}
                  <Mono>as prop</Mono>. We also add a hover effect using the{" "}
                  <Mono>_hover</Mono> prop. The <Mono>onClick</Mono> prop is set
                  to a function that toggles the <Mono>isOpen</Mono> state value
                  between true and false when the button is clicked, thus
                  controlling the visibility of the message box.
                </BasicText>
                <MyFlex>
                  <AsPropBox />
                </MyFlex>
                <Highlighter>{`<Box
  as="button"
  _hover={{ backgroundColor: "teal.600" }}
  onClick={() => setIsOpen(!isOpen)}
>
  Click Me
</Box>
{isOpen && (
  <Box
    border="1px solid"
    borderColor="gray.200"
  >
    This is a message in a box!
  </Box>`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Component Section</BasicText>
                <MyFlex></MyFlex>
                <Highlighter>{``}</Highlighter>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            Tip
            <MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxOne>

          <GridBoxTwo>
            Tip<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxTwo>

          <GridBoxThree>
            Tip<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

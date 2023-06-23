import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
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
  ViewCode,
  HighlightExample,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#psuedo">
        Pseudo Properties
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Pseudo-elements in CSS are used to style specific parts of an
              element. For example, <Mono>::before</Mono> and{" "}
              <Mono>::after</Mono> are pseudo-elements that you can use to add
              content before or after an element's content. Chakra UI does not
              directly support pseudo-elements in the way that one might expect
              from pure CSS. However, you can still add pseudo-elements using
              the <Mono>@emotion/react</Mono> library, which Chakra UI is built
              on.
            </SectionDescription>
            <BasicText>
              Pseudo-elements in CSS are used to style specific parts of an
              element. They can be used to add special effects to some
              selectors. Some commonly used pseudo-elements are{" "}
              <Mono>::before</Mono>, <Mono>::after</Mono>,{" "}
              <Mono>::first-letter</Mono>, <Mono>::first-line</Mono>,{" "}
              <Mono>::selection</Mono>, <Mono>::backdrop</Mono>, and{" "}
              <Mono>::marker</Mono>.
            </BasicText>
            <BasicText>
              The <Mono>sx</Mono> property in Chakra UI provides a powerful way
              to extend the use of CSS within your components. It allows you to
              apply custom CSS styles directly to a Chakra UI component using an
              inline syntax, without the need to write separate CSS files or
              define additional classes.
            </BasicText>
            <BasicText>
              The <Mono>sx</Mono> property in Chakra UI becomes particularly
              useful when working with pseudo props. With the <Mono>sx</Mono>{" "}
              property, you can easily define styles for these pseudo props
              inline, providing a convenient and concise way to handle
              state-based styling within your components.
            </BasicText>

            {/* IMPORT CODE */}
            <ImportBox>
              <BasicText>
                To import the <Mono>Box</Mono> component used below:
              </BasicText>
              <MiniCode>{`import { Box,  } from "@chakra-ui/react";`}</MiniCode>
            </ImportBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>::before and ::after</HL>: These pseudo-elements can be
                  used to add decorative elements or extra content to your
                  component. In this example, the <Mono>::before</Mono>{" "}
                  pseudo-element is used to add a star before the content of the
                  Box. We use position: "absolcontent star relative to the Box.
                  We also use the <Mono>content</Mono> property to include the
                  star character.
                </BasicText>
                <MyFlex>
                  <Box
                    bg="accent_2"
                    p={3}
                    color="darkText"
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '"⭐"',
                        position: "absolute",
                        top: "0",
                        left: "-20px",
                      },
                    }}
                  >
                    Starred content
                  </Box>
                </MyFlex>
                <MiniCode>{`<Box
  sx={{
    position: "relative",
    "&::before": {
      content: '"⭐"',
      position: "absolute",
      top: "0",
      left: "-20px",
    },
  }}
>`}</MiniCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>::first-letter</HL>: This pseudo-element can be used to
                  style the first letter of your component. In the following
                  example, the ::first-letter pseudo-element is used to style
                  the first letter of the text inside the <Mono>Box</Mono> first
                  letter is made larger and colored <Mono>deeppink</Mono>.
                </BasicText>
                <MyFlex>
                  <Box
                    bg="accent_2"
                    p={3}
                    color="darkText"
                    sx={{
                      "&::first-letter": {
                        fontSize: "2em",
                        color: "deeppink",
                      },
                    }}
                  >
                    The first letter of this sentence is styled.
                  </Box>
                </MyFlex>
                <MiniCode>{`<Box
  sx={{
    "&::first-letter": {
      fontSize: "2em",
      color: "deeppink",
    },
  }}
>`}</MiniCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>::first-line</HL>: This pseudo-element can be used to
                  style the first line of your component. In the following
                  example, the ::first-line pseudo-element is used to style the
                  first line of the text inside the Box. The first line is made{" "}
                  <Mono>bold</Mono> and colored <Mono>cyan</Mono>.
                </BasicText>
                <MyFlex>
                  <Box
                    sx={{
                      "&::first-line": {
                        fontWeight: "bold",
                        color: "cyan",
                      },
                    }}
                  >
                    The first line of this content is bold and cyan.
                    <br />
                    This is the second line, which is just normal.
                    <br />
                    This is the third line, also normal.
                    <br />
                  </Box>
                </MyFlex>
                <MiniCode>{`<Box
  sx={{
    "&::first-line": {
      fontWeight: "bold",
      color: "cyan",
    },
  }}
>`}</MiniCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>::selection:</HL> This pseudo-element can be used to style
                  the selected text inside your component. In the following
                  example, the <Mono>::selection</Mono> pseudo-element is used
                  to style the selected text inside the Box. The selected text
                  is given a<Mono>cyan</Mono> background.
                </BasicText>
                <MyFlex>
                  <Box
                    bg="accent_1"
                    p={3}
                    color="darkText"
                    sx={{
                      "&::selection": {
                        backgroundColor: "cyan",
                      },
                    }}
                  >
                    Try selecting this text.
                  </Box>
                </MyFlex>
                <MiniCode>{` <Box
  sx={{
    "&::selection": {
      backgroundColor: "cyan",
    },
  }}
>`}</MiniCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>::placeholder</HL> can be used to style placeholder text
                  of an input field. This can be used with Chakra UI's{" "}
                  <Mono>Input</Mono> component. In the following example, the
                  ::placeholder pseudo-element is used to style the placeholder
                  text of the input field. The placeholder text color is changed
                  to blue and the font style is set to italic. This is a useful
                  feature that allows you to customize the appearance of the
                  placeholder text, which can help to achieve a more integrated
                  and visually pleasing user interface.
                </BasicText>
                <MyFlex>
                  <Input
                    color="darkText"
                    bg="accent_1"
                    sx={{
                      "&::placeholder": {
                        color: "blue",
                        fontStyle: "italic",
                      },
                    }}
                    placeholder="Type something..."
                  />
                </MyFlex>
                <MiniCode>{`<Input
  sx={{
    "&::placeholder": {
      color: "blue",
      fontStyle: "italic",
    },
  }}
  placeholder="Type something..."
/>`}</MiniCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Creating a Tooltip</b>: you can create a simple tooltip using
              the <b>::after</b> pseudo-element! In the following example, the{" "}
              <b>::after</b> pseudo-element is used to create a tooltip. The
              tooltip text is stored in a data-tooltip attribute, which is
              accessed with the <b>attr()</b> function in the content property.
              The tooltip is initially hidden with <b>opacity: "0"</b>, and made
              visible on hover with <b>opacity: "1"</b>.
            </HighlightText>
            <MyFlex>
              <Box
                bg="accent_2"
                p={3}
                color="darkText"
                data-tooltip="I'm a tooltip"
                sx={{
                  position: "relative",
                  "&::after": {
                    content: "attr(data-tooltip)",
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    opacity: "0",
                    transition: "opacity 0.3s",
                  },
                  "&:hover::after": {
                    opacity: "1",
                  },
                }}
              >
                Hover over me
              </Box>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Box
  data-tooltip="I'm a tooltip"
  sx={{
    position: "relative",
    "&::after": {
      content: "attr(data-tooltip)",
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "black",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      opacity: "0",
      transition: "opacity 0.3s",
    },
    "&:hover::after": {
      opacity: "1",
    },
  })}`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              The <b>::checked</b> pseudo-class in CSS is used to select an
              element that is in a checked state, typically used with form input
              elements like checkboxes and radio buttons. It represents the
              state when the user has interacted with the input element and
              selected it. When an input element with a <b>::checked</b>, you
              can apply specific styles to customize its appearance. The
              following example, uses Chakra UI's <b>Checkbox</b> and{" "}
              <b>CheckboxGroup</b> components with the <b>colorScheme</b> prop
              to customize the checkbox color when it is checked. Chakra UI
              automatically applies appropriate styling to the checkboxes,
              including the <b>::checked</b> pseudo-class, which allows you to
              define custom styles for the checked state of the checkboxes.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="160px">
                <VStack alignItems="left">
                  <CheckboxGroup colorScheme="teal">
                    <Text fontSize="lg">My Favorite Food: </Text>
                    <Checkbox size="lg" value="chakra" defaultChecked>
                      Dark Chocolate
                    </Checkbox>
                    <Checkbox size="lg" value="react">
                      Coffee (it counts)
                    </Checkbox>
                    <Checkbox size="lg" value="css">
                      Sushi
                    </Checkbox>
                  </CheckboxGroup>
                </VStack>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<CheckboxGroup colorScheme="teal">
  <Text fontSize="lg">My Favorite Food: </Text>
  <Checkbox size="lg" value="chakra" defaultChecked>
    Dark Chocolate
  </Checkbox>
  <Checkbox size="lg" value="react">
    Coffee (it counts)
  </Checkbox>
  <Checkbox size="lg" value="css">
    Sushi
  </Checkbox>
</CheckboxGroup>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Creating a Progress Bar</b>: you can use the <b>::before</b>
              pseudo-element to create a progress bar. In this example, the
              <b>::before</b> pseudo-element is used to create a green bar
              inside the gray box, simulating a progress bar at 50%. To update
              the progress, you could dynamically change the width value of the{" "}
              <b>::before</b> pseudo-element.
            </HighlightText>
            <MyFlex>
              <Box
                sx={{
                  width: "200px",
                  height: "20px",
                  backgroundColor: "lightgray",
                  "&::before": {
                    content: '""',
                    display: "block",
                    height: "100%",
                    width: "50%",
                    backgroundColor: "green",
                  },
                }}
              />
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Box
  sx={{
    width: "200px",
    height: "20px",
    backgroundColor: "lightgray",
    "&::before": {
      content: '""',
      display: "block",
      height: "100%",
      width: "50%",
      backgroundColor: "green",
    },
  }}
/>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

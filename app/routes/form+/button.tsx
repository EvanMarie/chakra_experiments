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
import * as Form from "~/mardownExamples/form/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  ButtonFive,
  ButtonFour,
  ButtonOne,
  ButtonSix,
  ButtonThree,
  ButtonTwo,
} from "~/components/form/buttonComponents";
import {
  ButtonFunctionFive,
  ButtonFunctionFour,
  ButtonFunctionThree,
} from "~/components/form/buttonFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/button" size={28}>
        Button
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Button component in Chakra UI serves as a trigger to
              initiate an action or event. This can include submitting a form,
              launching a dialog box, aborting an ongoing action, or executing a
              delete operation. Together with the ButtonGroup component, these
              provide a set of accessible and customizable UI components for
              React applications. Here's an overview of the Button and
              ButtonGroup components:
            </SectionDescription>
            <BasicText>
              Here's an overview of the Button and ButtonGroup components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Button</HL>: This component is used to render a clickable
                  button element with various styles and configurations.
                  Variants include primary, secondary, outline, ghost, and more.
                  It provides built-in styles for different sizes, including
                  small, medium, and large. You can customize the appearance of
                  the button by applying different props such as{" "}
                  <Mono>color</Mono>, <Mono>variant</Mono>, <Mono>size</Mono>,
                  and more. It supports adding icons, loading spinners, and
                  tooltips to buttons. You can attach event handlers to handle
                  button clicks and other interactions.
                </li>
                <li>
                  <HL>ButtonGroup</HL>: This component is used to group multiple
                  buttons. It provides a convenient way to arrange and style
                  related buttons as a cohesive unit. Buttons within a{" "}
                  <Mono>ButtonGroup</Mono> can be automatically spaced and
                  styled using predefined or custom spacing. It supports
                  responsive behavior, allowing buttons to stack vertically on
                  smaller screens. You can apply additional styling and
                  configurations to the <Mono>ButtonGroup</Mono> component, such
                  as size, variant, and color.
                </li>
              </ul>
            </BulletBox>
            <BasicText>
              Both the <Mono>Button</Mono> and ButtonGroup components have
              extensive customization options and can be easily integrated into
              your React application. They follow best practices for
              accessibility and provide a consistent and user-friendly
              interface.
            </BasicText>
            <BasicText>
              <BlueBold>Button Properties</BlueBold>: The <Mono>Button</Mono>{" "}
              component comes with several properties to allow you to customize
              its look and behavior. Some of the most commonly used ones
              include:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>variant</HL>: This property allows you to specify the
                  variant of the button. The available variants include{" "}
                  <Mono>solid</Mono>, <Mono>outline</Mono>, <Mono>ghost</Mono>,{" "}
                  <Mono>link</Mono>, and <Mono>unstyled</Mono>. The default
                  value is <Mono>solid</Mono>
                </li>
                <li>
                  <HL>colorScheme</HL>: This property allows you to specify the
                  color scheme of the button. The available color schemes
                  include <Mono>gray</Mono>, <Mono>red</Mono>,{" "}
                  <Mono>orange</Mono>, <Mono>yellow</Mono>, <Mono>green</Mono>,{" "}
                  <Mono>teal</Mono>, <Mono>blue</Mono>, <Mono>cyan</Mono>,{" "}
                  <Mono>purple</Mono>, <Mono>pink</Mono>, and{" "}
                  <Mono>linkedin</Mono>. The default value is <Mono>gray</Mono>.
                </li>

                <li>
                  <HL>size</HL>: This property allows you to specify the size of
                  the button. The available sizes include <Mono>xs</Mono>,{" "}
                  <Mono>sm</Mono>, <Mono>md</Mono>, <Mono>lg</Mono>, and{" "}
                  <Mono>xl</Mono>. The default value is <Mono>md</Mono>.
                </li>
                <li>
                  <HL>isLoading</HL>: This property allows you to specify
                  whether the button is in a loading state. The default value is{" "}
                  <Mono>false</Mono>.
                </li>
                <li>
                  <HL>isDisabled</HL>: This property allows you to specify
                  whether the button is disabled. The default value is{" "}
                  <Mono>false</Mono>.
                </li>
                <li>
                  <HL>isFullWidth</HL>: This property allows you to specify
                  whether the button should take up the full width of its
                  container. The default value is <Mono>false</Mono>.
                </li>
                <li>
                  <HL>leftIcon</HL>: This property allows you to specify an icon
                  to be displayed on the left side of the button. The default
                  value is <Mono>undefined</Mono>.
                </li>
                <li>
                  <HL>rightIcon</HL>: This property allows you to specify an
                  icon to be displayed on the right side of the button. The
                  default value is <Mono>undefined</Mono>.
                </li>

                <li>
                  <HL>spinner</HL>: This property allows you to specify a custom
                  loading spinner. The default value is <Mono>undefined</Mono>.{" "}
                  <Mono>spinnerPlacement</Mono> then allows you to specify the
                  placement of the spinner. The available options include{" "}
                  <Mono>start</Mono> and <Mono>end</Mono>. The default value is{" "}
                  <Mono>end</Mono>.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  Button, 
  ButtonGroup } from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <ButtonOne />
                <ModalCode>
                  <Highlighter>{`<Button m={2}>Click Here</Button>
<Button>Tap Here</Button>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ButtonTwo />
                <ModalCode>
                  <Form.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ButtonThree />
                <ModalCode>
                  <Form.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                x<ButtonFour />
                <ModalCode>
                  <Form.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ButtonFive />
                <ModalCode>
                  <Highlighter>{`<HStack gap={4}>
  <Button leftIcon={<EmailIcon />} colorScheme="cyan" variant="outline">
    Email
  </Button>
  <Button rightIcon={<DeleteIcon />} colorScheme="red" variant="solid">
    Delete
  </Button>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ButtonSix />
                <ModalCode>
                  <Form.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Toggle Button</b>: This is a simple button that toggles its
              text and color based on its state. This type of functionality for
              a button can enhance user experience, especially when the button's
              state is relevant to the user's action.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <ButtonFunctionThree />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Countdown Button</b>: This is a creative use of the{" "}
              <b>Button</b> component where the button acts as a countdown.
              After being clicked, the button starts a countdown, preventing
              another click until the countdown is over. This can be used for
              submitting forms, starting games, etc.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <ButtonFunctionFour />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Button with Tooltip</b>: Chakra's <b>Tooltip</b> component can
              be used to display additional information when hovering over an
              element. It can be used with a <b>Button</b> to provide users with
              more context about what the button does. In this example, when a
              user hovers over the "Save" button, they'll see a tooltip that
              says "This button saves your changes", providing additional
              context that can improve the user experience.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <ButtonFunctionFive />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

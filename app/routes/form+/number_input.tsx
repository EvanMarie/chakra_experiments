import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

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
  NumberInputEight,
  NumberInputEleven,
  NumberInputFive,
  NumberInputFour,
  NumberInputNine,
  NumberInputOne,
  NumberInputSeven,
  NumberInputSix,
  NumberInputTen,
  NumberInputThree,
  NumberInputTwelve,
  NumberInputTwo,
} from "~/components/form/numberInputComponents";
import {
  NumberInputFunctionFour,
  NumberInputFunctionSeven,
} from "~/components/form/numberInputFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel
        link="https://chakra-ui.com/docs/components/number-input"
        size={28}
      >
        Number Input
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Number input fields are a common element in web forms that allow
              users to input numeric values. They are used for various purposes,
              such as capturing quantities, prices, measurements, or any other
              numerical data. Chakra UI provides a dedicated set of components
              called <Mono>NumberInput</Mono> to facilitate the creation of
              number input fields with enhanced functionality and styling.
            </SectionDescription>
            <BasicText></BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>NumberInput</HL>: This component serves as the main
                  wrapper and provides the context and logic for the number
                  input components. It manages the state and behavior of the
                  number input as a whole.
                </li>
                <li>
                  <HL>NumberInputField</HL>: This represents the actual input
                  field where users can enter numeric values. It handles user
                  input and stores the entered value.
                </li>
                <li>
                  <HL>NumberInputStepper</HL>: This component acts as a wrapper
                  for the stepper buttons associated with the number input. It
                  provides a container for the increment and decrement buttons,
                  allowing users to adjust the value of the input.
                </li>
                <li>
                  <HL>NumberIncrementStepper</HL>: The NumberIncrementStepper
                  component is the button responsible for incrementing the value
                  of the number input. When clicked, it increases the value by a
                  specified step size.
                </li>
                <li>
                  <HL>NumberDecrementStepper</HL>: Conversely, the{" "}
                  <Mono>NumberDecrementStepper</Mono> component serves as the
                  button to decrement the value of the number input. It reduces
                  the value by a specified step size when clicked.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                By utilizing the <Mono>NumberInput</Mono> components from Chakra
                UI, you can easily create number input fields with enhanced
                functionality and a consistent visual appearance. The modular
                nature of these components allows for customization and
                flexibility while maintaining a seamless user experience.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <NumberInputOne />
                <ModalCode>
                  <Highlighter>{`<NumberInput>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputTwo />
                <ModalCode>
                  <Highlighter>{`<NumberInput defaultValue={44} min={23} max={53}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputThree />
                <ModalCode>
                  <Highlighter>{`<NumberInput
  step={10}
  defaultValue={80}
  min={10}
  max={500}
  maxWidth="100px"
>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputFour />
                <ModalCode>
                  <Highlighter>{`<NumberInput
  defaultValue={23}
  precision={3}
  step={0.3}
  maxWidth="100px"
>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputFive />
                <ModalCode>
                  <Highlighter>{`<NumberInput
  defaultValue={23}
  min={23}
  max={123}
  clampValueOnBlur={false}
  maxWidth="100px"
>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputSix />
                <ModalCode>
                  <Highlighter>{`<NumberInput
  defaultValue={23}
  max={123}
  keepWithinRange={false}
  clampValueOnBlur={false}
  maxWidth="100px"
>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputSeven />
                <ModalCode>
                  <Form.E22 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputEight />
                <ModalCode>
                  <Highlighter>{`<NumberInput size="md" defaultValue={123} min={10} w="125">
  <NumberInputField borderColor="cyan" />
  <NumberInputStepper>
    <NumberIncrementStepper
      bg="accent_3"
      _active={{ bg: "accent_1" }}
      children="↑"
    />
    <NumberDecrementStepper
      bg="accent_3"
      _active={{ bg: "accent_1" }}
      children="↓"
    />
  </NumberInputStepper>
</NumberInput>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputNine />
                <ModalCode></ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputTen />

                <ModalCode>
                  <Form.E24 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputEleven />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <NumberInputTwelve />
                <ModalCode>
                  <Highlighter>{``}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

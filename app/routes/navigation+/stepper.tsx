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
import * as Navigation from "~/mardownExamples/navigation/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  StepperFunctionOne,
  StepperFunctionSeven,
  StepperTipOne,
  StepperTipTwo,
  TipStepperThree,
} from "~/components/navigation/stepperFunctions";
import {
  StepperEight,
  StepperFive,
  StepperFour,
  StepperOne,
  StepperSeven,
  StepperSix,
  StepperThree,
  StepperTwo,
} from "~/components/navigation/stepperComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/stepper" size={28}>
        Stepper
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI <Mono>Stepper</Mono> component is designed to
              provide users with a clear visual representation of their
              progression through a multi-step process. Often seen in scenarios
              such as form filling, onboarding flows, or any other multi-phase
              operation, a well-designed stepper can greatly enhance user
              experience. It is a comprehensive solution that encapsulates best
              practices for step-based user interfaces, while also offering
              great flexibility and customization for diverse use cases.
            </SectionDescription>
            <BasicText>
              The <Mono>Stepper</Mono> component is a versatile tool that allows
              developers to create a highly customizable step-based interface.
              It provides a variety of subcomponents that can be tailored to
              suit different use cases. use-cases.
            </BasicText>
            <BasicText>
              The many parts of the <Mono>Stepper</Mono> component are as
              follows:{" "}
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Step</HL>: This is the main component for an individual
                  step. It holds the components that make up the content of the
                  step.
                </li>
                <li>
                  <HL>StepDescription</HL>: This component is used to provide a
                  brief description of the particular step.
                </li>
                <li>
                  <HL>StepIcon</HL>: This component is used to display an icon
                  for the step. It's commonly used to indicate the completion of
                  a step.
                </li>
                <li>
                  <HL>StepIndicator</HL>: This component wraps around the step's
                  status elements, such as the <Mono>StepIcon</Mono> and{" "}
                  <Mono>StepNumber</Mono>.
                </li>
                <li>
                  <HL>StepNumber</HL>: This component is used to display the
                  numeric value of the step.
                </li>
                <li>
                  <HL>StepSeparator</HL>: This component is used to visually
                  separate individual steps.
                </li>
                <li>
                  <HL>StepStatus</HL>: This component is used to switch between
                  different step states, like complete, incomplete, and active.
                  It usually wraps around the <Mono>StepIcon</Mono> or{" "}
                  <Mono>StepNumber</Mono> component.
                </li>
                <li>
                  <HL>StepTitle</HL>: This component is used to display the
                  title of a particular step.
                </li>
                <li>
                  <HL>Stepper</HL>: This is the parent component that holds and
                  manages all the <Mono>Step</Mono> components. It keeps track
                  of the current active step and can control the orientation and
                  size of the stepper.
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
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <StepperOne />
                <ModalCode>
                  <Navigation.E15 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StepperTwo />
                <ModalCode>
                  <Navigation.E16 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StepperThree />
                <ModalCode>
                  <Navigation.E17 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StepperFour />
                <ModalCode>
                  <Navigation.E18 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StepperFive />
                <ModalCode>
                  <Navigation.E19 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StepperSix />
                <ModalCode>
                  <Navigation.E20 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StepperSeven />
                <ModalCode>
                  <Navigation.E21 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <StepperEight />
                <ModalCode>
                  <Navigation.E22 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Animating Step Transitions</b>: To enhance the user experience
              further, consider adding animations during step transitions. This
              can be done using a third-party library like
              react-transition-group.
            </HighlightText>
            <HighlightExample
              h={{ base: "190px", sm: "215px", md: "225px", lg: "175px" }}
            >
              <MyFlex>
                <StepperTipOne />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H08 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Interactive Step Indicator</b>: In this use-case, each step
              indicator not only shows the step status, but also provides more
              information about the step through a tooltip on hover. This can
              enhance the user experience by providing context-sensitive help or
              additional details.
            </HighlightText>
            <HighlightExample
              h={{ base: "100px", sm: "125px", md: "125px", lg: "100px" }}
            >
              <MyFlex>
                <StepperTipTwo />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H09 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Dynamic Steps</b>: Sometimes, we don't know the exact number of
              steps at the beginning. In such cases, we can dynamically generate
              steps.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <TipStepperThree
                  initialSteps={[
                    { title: "Step 1", description: "Choose Size" },
                    { title: "Step 2", description: "Choose Toppings" },
                  ]}
                />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H10 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

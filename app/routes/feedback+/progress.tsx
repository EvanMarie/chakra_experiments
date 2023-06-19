import { Box, Progress, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono, StackedExample } from "~/styles/DesignComponents";

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
  ViewCode,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Feedback from "~/mardownExamples/feedback/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  CountdownProgressBar,
  DynamicProgressBar,
  StepsProgressBar,
} from "~/components/feedback/progressBarExamples";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/progress" size={28}>
        Progress Bars
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Progress</Mono> component in Chakra UI is used to
              represent the completion progress of a task or operation. Similar
              to the <Mono>Circular Progress</Mono> component, it's an effective
              way to visually convey the status of a task where the percentage
              of completion is known.{" "}
            </SectionDescription>
            <BasicText>
              The <Mono>Progress</Mono> component is a horizontal bar that gets
              progressively filled from left to right to indicate the progress
              of an operation. It provides a clear visual cue to the user about
              the status of background tasks such as file uploads, downloads,
              data processing, and more. One of the main features of the{" "}
              <Mono>Progress</Mono> component is the <Mono>value</Mono>{" "}
              property, which is a number between 0 and 100 indicating the
              current progress.{" "}
            </BasicText>
            <BasicText>
              If the <Mono>value</Mono> property is not provided, a striped
              pattern will be applied to the bar to indicate indeterminate
              progress, where the percentage of completion is unknown. The{" "}
              <Mono>Progress</Mono> component allows you to customize the
              height, color scheme, and even whether or not to display stripes.
              You can also control whether the progress is animated or not using
              the isAnimated property.
            </BasicText>
            <BasicText>
              In terms of accessibility, Chakra UI automatically applies the
              appropriate <Mono>ARIA</Mono> roles and attributes to the Progress
              component, making it a suitable choice for developing inclusive
              user interfaces.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Basic Progress Bar</HL>: Use the <Mono>Progress</Mono>{" "}
                  component to create a simple progress bar. The value prop sets
                  the current progress.
                </li>
                <li>
                  <HL>Customized Progress Bar</HL>: You can customize the
                  progress bar's color, size, and other properties.
                </li>
                <li>
                  <HL>Animated Progress Bar</HL>: To animate the progress bar,
                  add the <Mono>isAnimated</Mono> prop.
                </li>
                <li>
                  <HL>Progress Bar with Stripe</HL>: You can add a stripe to the
                  progress bar for a different visual effect using the{" "}
                  <Mono>isAnimated</Mono> and <Mono>hasStripe</Mono> props.
                </li>

                <li>
                  <HL>Indeterminate Progress Bar</HL>: If you don't know the
                  value or it's not yet ready, you can show an indeterminate
                  progress bar.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import this component:</BasicText>
                <Highlighter>{`import { Progress } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <VStack spacing={3} width="100%">
              <SectionContainer>
                <StackedExample>
                  <Highlighter>{`<Progress value={80} />`}</Highlighter>
                  <Progress value={80} w="400px" />
                </StackedExample>
                <BasicText>
                  This is a basic progress bar that's filled up to 80%. It is a
                  great tool to visualize the progress of a task or event.
                </BasicText>
              </SectionContainer>
              <SectionContainer>
                <StackedExample>
                  <Highlighter>{`<Progress hasStripe value={64} />`}</Highlighter>
                  <Progress hasStripe value={64} w="400px" />
                </StackedExample>
                <BasicText>
                  This progress bar is filled up to 64% and also features a
                  striped pattern for a more dynamic visual. It's excellent for
                  when you want to make the progress bar more noticeable.
                </BasicText>
              </SectionContainer>
              <SectionContainer>
                <StackedExample>
                  <Highlighter>{`<Progress colorScheme="red" size="sm" value={20} />`}</Highlighter>
                  <Progress colorScheme="red" size="sm" value={20} w="400px" />
                </StackedExample>
                <BasicText>
                  This is a small-sized, red-colored progress bar filled up to
                  20%. The red color could be used to convey a warning or
                  critical progress, and the small size fits well when space is
                  limited.
                </BasicText>
              </SectionContainer>
              <SectionContainer>
                <StackedExample>
                  <Highlighter>{`<Progress colorScheme="orange" size="md" value={30} />`}</Highlighter>
                  <Progress
                    colorScheme="orange"
                    size="md"
                    value={30}
                    w="400px"
                  />
                </StackedExample>
                <BasicText>
                  This medium-sized progress bar is filled up to 30% and is
                  colored orange. It's suitable for neutral or medium priority
                  tasks.
                </BasicText>
              </SectionContainer>
              <SectionContainer>
                <StackedExample>
                  <Highlighter>{`<Progress colorScheme="yellow" size="lg" value={40} />`}</Highlighter>
                  <Progress
                    colorScheme="yellow"
                    size="lg"
                    value={40}
                    w="400px"
                  />
                </StackedExample>
                <BasicText>
                  This example produces a large yellow-colored progress bar
                  filled up to 40%. The large size makes it highly visible, and
                  the yellow color indicates caution or attention.
                </BasicText>
              </SectionContainer>
              <SectionContainer>
                <StackedExample>
                  <Highlighter>
                    {`<Progress colorScheme="green" height="32px" value={50} w="400px" />`}
                  </Highlighter>
                  <Progress
                    colorScheme="green"
                    height="32px"
                    value={50}
                    w="400px"
                  />
                </StackedExample>
                <BasicText>
                  This example produces a custom-sized green-colored progress
                  bar, 50% complete. It's an excellent example of how you can
                  customize the dimensions of your progress bar according to
                  your design requirements.
                </BasicText>
              </SectionContainer>
              <SectionContainer>
                <StackedExample>
                  <Highlighter>{`<Progress value={60} size="sm" colorScheme="blue" />`}</Highlighter>
                  <Progress value={60} size="sm" colorScheme="blue" w="400px" />
                </StackedExample>
                <BasicText>
                  This example produces a small blue-colored progress bar filled
                  up to 60%. The blue color can represent a task of normal
                  priority, while the small size helps it fit in compact spaces.
                </BasicText>
              </SectionContainer>
              <SectionContainer>
                <StackedExample>
                  <Highlighter>
                    {`<Progress size="sm" colorScheme="purple" isIndeterminate />`}
                  </Highlighter>
                  <Progress
                    size="sm"
                    colorScheme="purple"
                    isIndeterminate
                    w="400px"
                  />
                </StackedExample>
                <BasicText>
                  {" "}
                  This example shows a small-sized purple progress bar with an
                  indeterminate progress state. This is useful when you want to
                  indicate something is happening but the amount of progress is
                  unknown, such as loading data.
                </BasicText>
              </SectionContainer>
            </VStack>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Progress bar with dynamic value</b>: This is especially useful
              for scenarios where the progress value isn't static, like in file
              uploads or time-bound operations. You can update the value prop
              with state or any dynamic data.
            </HighlightText>
            <MyFlex>
              <DynamicProgressBar />{" "}
            </MyFlex>
            <ViewCode>
              <Feedback.H07 />
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Progress bar with steps</b>: This can be used when you need to
              visualize the progress of a multi-step process, like a form wizard
              or step-by-step tutorial. Here's an example with a three-step
              process.
            </HighlightText>
            <MyFlex>
              <StepsProgressBar />
            </MyFlex>
            <ViewCode>
              <Feedback.H08 />
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <p>
                <b>A Countdown Progress Bar</b>: a versatile progress bar with a
                countdown timer, which displays a progress bar that decreases
                gradually over the input duration, by default 10 seconds, from
                100% to 0%.
              </p>
              <p>
                The countdown and the progress bar are linked through a
                useEffect hook that recalculates the <b>currentSecond</b> based
                on the progress bar's current value. This makes sure the
                displayed remaining time is always in sync with the progress
                bar's state.
              </p>
            </HighlightText>
            <MyFlex>
              <CountdownProgressBar />
            </MyFlex>
            <ViewCode>
              <Feedback.H09 />
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

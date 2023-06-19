import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  CollapsibleExample,
  HL,
  Mono,
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
  CircularProgressImage,
  CircularProgressTimer,
  ScoreIndicator,
} from "~/components/feedback/circularProgressExamples";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        Circular Progress
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI Circular Progress component offers a visually
              appealing way to represent an ongoing operation, where the
              completion status is known as a percentage. It can be used for
              processes such as file uploads, system checks, or any asynchronous
              task that requires time to complete.
            </SectionDescription>
            <BasicText>
              The component consists of a circular track, partially filled to
              signify the progress of the operation. Aspects like size, color,
              and thickness of both the track and progress indicator can be
              customized to align with your application's design aesthetic.
            </BasicText>
            <BasicText>
              A critical attribute of the Circular Progress component is the
              'value' property. This numerical property, ranging between 0 and
              100, indicates the current progress. If the value isn't provided,
              the circular progress will rotate continuously, signifying an
              ongoing operation with an unknown completion time.
            </BasicText>
            <BasicText>
              Like all Chakra UI components, the Circular Progress component is
              designed with accessibility in mind, featuring appropriate ARIA
              roles and attributes. These attributes automatically communicate
              the progress state (determinate or indeterminate) to assistive
              technologies, ensuring the component aids in creating inclusive
              web experiences.
            </BasicText>

            <BulletBox>
              <ul>
                <li>
                  <HL>Determinate progress</HL>: This mode colorfully fills the
                  circular track as the indicator progresses from 0 to 360
                  degrees.
                </li>
                <li>
                  <HL>Indeterminate progress</HL>: In this mode, the indicator
                  expands and contracts while revolving around the circular
                  track.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import these components:</BasicText>
                <Highlighter>{`import { 
  CircularProgress, 
  CircularProgressLabel } from "@chakra-ui/react";`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <VStack spacing={3} align="center" overflow="hidden" w="100%">
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress key={1} value={80} />,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={80} />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    Here, the Chakra UI <Mono>CircularProgress</Mono> component
                    is being used with the value prop set to 80. This indicates
                    that the circular progress indicator will be visually filled
                    up to 80% of its total capacity, reflecting the progress
                    made towards a specific task or operation.
                  </BasicText>
                </MyFlex>
              </SectionContainer>
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress key={1} value={30} size="120px" />,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={30} size="120px" />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    Here, <Mono>CircularProgress</Mono> is being used to display
                    a circular progress indicator. The value prop is set to 30,
                    indicating that the progress indicator will be filled up to
                    30% of its total capacity. To control the size of the{" "}
                    <Mono>CircularProgress</Mono> component, the{" "}
                    <Mono>size</Mono> prop is set to "120px". This means that
                    the circular progress indicator will have a diameter of 120
                    pixels, influencing its overall visual appearance and
                    proportion within the user interface.
                  </BasicText>
                </MyFlex>
              </SectionContainer>
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      key={1}
                      value={59}
                      size="100px"
                      thickness="4px"
                    />,
                    <Highlighter
                      key={2}
                    >{` <CircularProgress value={59} thickness="4px" />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    In this example, the <Mono>thickness</Mono> prop is set to{" "}
                    <Mono>"4px"</Mono>, which determines the thickness of the
                    progress bar or arc within the circular progress indicator.
                    In this case, the progress bar will have a thickness of 4
                    pixels, creating a sleak indicator of the progress made.
                  </BasicText>
                </MyFlex>
              </SectionContainer>{" "}
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      key={1}
                      value={30}
                      color="orange.400"
                      thickness="12px"
                      size="100px"
                    />,
                    <Highlighter key={2}>
                      {`<CircularProgress value={30} color="orange.400" thickness="12px" />`}
                    </Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    In this example, the thickness is set again, this time to{" "}
                    <Mono>12px</Mono>, but we also have utilized the{" "}
                    <Mono>color</Mono> prop is set to <Mono>"orange.400"</Mono>.
                    This determines the color of the progress bar or arc within
                    the circular progress indicator. In this case, the progress
                    bar will have an orange color with a shade of 400, creating
                    a visually distinctive indicator.
                  </BasicText>
                </MyFlex>
              </SectionContainer>{" "}
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <Box key={1}>
                      <CircularProgress
                        value={40}
                        color="green.400"
                        size="100px"
                      >
                        <CircularProgressLabel>40%</CircularProgressLabel>
                      </CircularProgress>
                    </Box>,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={40} color="green.400">
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress> `}</Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    This example highlights another feature of the Chakra UI{" "}
                    <Mono>CircularProgress</Mono> component, the{" "}
                    <Mono>CircularProgressLabel</Mono>. This component is used
                    to display the progress value as <Mono>"40%"</Mono>. The
                    label is positioned at the center of the circular progress
                    indicator, providing a textual representation of the
                    progress made.
                  </BasicText>
                </MyFlex>
              </SectionContainer>{" "}
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      key={1}
                      isIndeterminate
                      color="green.300"
                      size="100px"
                    />,
                    <Highlighter key={2}>
                      {` <CircularProgress isIndeterminate color="green.300" />`}
                    </Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    In this example, the <Mono>isIndeterminate</Mono> prop is
                    set to true, indicating that the progress indicator will be
                    in an indeterminate state. This means that instead of
                    representing a specific progress value, the indicator will
                    continuously animate or loop, giving the impression of
                    ongoing activity or an unknown progress duration.
                  </BasicText>
                </MyFlex>
              </SectionContainer>
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      key={1}
                      value={20}
                      trackColor="red.200"
                      size="100px"
                    />,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={20} trackColor="red.200" />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    The trackColor prop allows you to specify the color of the
                    background track behind the progress arc. In this example,
                    the track color is set to "red.200", to show this option.
                  </BasicText>
                </MyFlex>
              </SectionContainer>
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      value={50}
                      capIsRound
                      key={1}
                      size="100px"
                    />,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={50} capIsRound />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
                <MyFlex>
                  <BasicText>
                    Setting the capIsRound prop to true will make the cap of the
                    progress indicator rounded instead of having flat edges.
                  </BasicText>
                </MyFlex>
              </SectionContainer>
            </VStack>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              The <b>CircularProgress</b> component can also be used as a visual
              timer. Below is an example of a 10-second timer, where every
              second, we are incrementing the progress by 10%. Once it reaches
              100%, it resets to 0 and starts over, acting as a repeating
              10-second timer.
            </HighlightText>
            <MyFlex>
              <CircularProgressTimer />
            </MyFlex>
            <ViewCode>
              <Feedback.H04 />
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              Images can sometimes take a while to load, especially if they are
              large or the user's network connection is slow. You can use{" "}
              <b>CircularProgress</b> to show the user that the image is
              loading. Below is an image loading example, where we'll simulate a
              delay in loading the image using a timeout function.
            </HighlightText>
            <MyFlex>
              <CircularProgressImage />
            </MyFlex>
            <ViewCode>
              <Feedback.H05 />
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>CircularProgress as a Scoring Indicator</b>: This is somewhat
              similar to the progress label example, but in a different context.
              The idea here is to use <b>CircularProgress</b> to visually
              represent a score out of 100. It can be useful in quizzes, games,
              or other scoring situations. In this example, the{" "}
              <b>ScoreIndicator</b> component accepts a score prop, which is
              used to display the score both visually (with CircularProgress)
              and numerically (with <b>CircularProgressLabel</b>). You can
              adjust the color and size to suit your needs.
            </HighlightText>
            <MyFlex>
              <ScoreIndicator />
            </MyFlex>
            <ViewCode>
              <Feedback.H06 />
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

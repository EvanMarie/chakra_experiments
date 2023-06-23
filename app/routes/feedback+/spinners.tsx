import { Box, Spinner } from "@chakra-ui/react";
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
  HighlightExample,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Feedback from "~/mardownExamples/feedback/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  ScoreSlider,
  SpinnerTabs,
  SubmitButton,
} from "~/components/feedback/spinnerExamples";
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
      <MyLabel link="https://chakra-ui.com/docs/components/spinner" size={28}>
        Spinners
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <HL>Spinners</HL> component in Chakra UI is a feedback
              indicator mainly used for visualizing an unspecified wait time
              where the length of the task is unknown.{" "}
            </SectionDescription>
            <BasicText>
              Spinners are animated graphical controls that spin to indicate
              that a process is currently ongoing. They are often used for tasks
              such as loading data, submitting forms, or any asynchronous
              operations where the completion time cannot be estimated. Key
              features of the Spinner component in Chakra UI are its simplicity
              and its customizable appearance.{" "}
            </BasicText>
            <BasicText>
              You can easily change the size and color of the Spinner to match
              the look and feel of your application. Unlike <HL>Progress</HL> or{" "}
              <HL>CircularProgress</HL> components, Spinners do not represent a
              percentage completion, but rather the ongoing nature of a task.
              This makes them suitable for scenarios where the duration of the
              task is unpredictable.{" "}
            </BasicText>
            <BasicText>
              In terms of accessibility, Chakra UI takes care of that by giving
              the Spinner component a role of 'status' and providing a fallback
              status message of 'Loading...', ensuring that screen reader users
              are also informed about the ongoing operation.
            </BasicText>

            <DescriptionBox>
              <BasicText>Some description</BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import this component:</BasicText>
                <MiniCode>{`import { Spinner } from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} />,
                  <Box key={2}>
                    <MiniCode>{`<Spinner />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                This is a basic <Mono>Spinner</Mono> component. It uses the
                default size, color, thickness, and speed values provided by
                Chakra UI.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} color="red.500" />,
                  <Box key={2}>
                    <MiniCode>{`<Spinner color="red.500" />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This <Mono>Spinner</Mono> component has been customized with a
                specific color. The color of the spinner is set to "red.500"
                from the Chakra UI color scheme.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="xs" />,
                  <Box key={2}>
                    <MiniCode>{`<Spinner size="xs" />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This example features a very small spinner. The size property of
                the <Mono>Spinner</Mono> has been set to "xs", which is the
                smallest size available in Chakra UI.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="sm" />,
                  <Box key={2}>
                    <MiniCode>{`<Spinner size="sm" />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This is a small-sized spinner. The size property is set to "sm",
                making the spinner a bit larger than the "xs" size but still
                quite small.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="md" />,
                  <Box key={2}>
                    <MiniCode>{`<Spinner size="md" />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This example shows a medium-sized spinner. By setting the size
                property to "md", it produces a spinner of moderate size.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="lg" />,
                  <Box key={2}>
                    <MiniCode>{`<Spinner size="lg" />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                Here, a large spinner is displayed. The size of the spinner is
                set to <Mono>"lg"</Mono>, resulting in a larger, more noticeable
                loading animation.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="xl" />,
                  <Box key={2}>
                    <MiniCode>{`<Spinner size="xl" />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                This spinner is extra large, set with the "xl" value, making it
                the biggest standard size for the Spinner component in Chakra
                UI.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner
                    key={1}
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />,

                  <Box key={2}>
                    <MiniCode>{`<Spinner thickness="4px" speed="0.65s"
    emptyColor="gray.200" color="blue.500" 
    size="xl" />`}</MiniCode>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                This is a heavily customized spinner. The thickness is set to{" "}
                <Mono>"4px"</Mono>, making the rotating line of the spinner four
                pixels wide. The speed is set to "0.65s", which means each full
                rotation of the spinner takes 0.65 seconds. The{" "}
                <Mono>emptyColor</Mono> property is set to{" "}
                <Mono>"gray.200"</Mono>, which colors the non-active section of
                the spinner. The color is set to <Mono>"blue.500"</Mono>, which
                specifies the color of the active section of the spinner. The{" "}
                <Mono>"xl"</Mono>, making this a large, noticeable, and
                customized spinner.
              </BasicText>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Loading state spinner in a button</b>: Suppose we are working
              on a form submission. Upon clicking the submit button, we can
              replace the button text with a spinner to indicate the form is
              being processed. The following example shows a button that, when
              clicked, will display a spinner instead of its text for two
              seconds, simulating a form submission process.
            </HighlightText>
            <MyFlex>
              <SubmitButton />
            </MyFlex>
            <ModalCode>
              <Feedback.H13 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>ScoreSpinner</b>: takes a score as its prop. Depending on the
              score value, the spinner's color varies from bright red when a
              user's score is not so good to green when a user's score is great.
              To illustrate this, we've created an interactive slider that
              adjusts the score value dynamically, altering the spinner's color
              in real-time. This visually compelling, color-coded spinner
              provides an immediate, intuitive sense of the score's value,
              making it a useful tool for displaying data or status in a
              user-friendly way.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="150px">
                <ScoreSlider />
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Feedback.H14 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Spinner color schemes</b>: the following example is a vertical
              set of tabs where each tab represents a different color scheme.
              When you click on a tab, you'll see two examples of a spinner with
              the chosen color scheme - one on a light background and the other
              on a dark one. This allows you to easily compare how the color
              scheme affects the spinner's appearance in different environments.
              You can also see the effects of the thickness of the spinner
              visually.
            </HighlightText>
            <MyFlex>
              <SpinnerTabs />
            </MyFlex>
            <ModalCode>
              <Feedback.H15 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

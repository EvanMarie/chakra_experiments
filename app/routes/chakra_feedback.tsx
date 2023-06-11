import { Box, Flex, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import { Progress } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import * as Feedback from "~/mardownExamples/feedback/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import styles from "~/styles/codeMarkdown.css";

import {
  AlertFive,
  AlertFour,
  AlertOne,
  AlertThree,
  AlertTwo,
} from "~/components/feedback/alerts";

import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BigBackgroundBox,
  CompWithLabel,
  ExampleContainer,
  FlexibleBox,
  HL,
  Mono,
  MyLabel,
  SectionContainer,
  StackedExample,
  colors,
} from "~/styles/reusableChakraComponents";
import {
  SkeletonFive,
  SkeletonFour,
  SkeletonOne,
  SkeletonSeven,
  SkeletonSix,
  SkeletonThree,
  SkeletonTwo,
} from "~/components/feedback/skeletons";
import {
  ToastEight,
  ToastFive,
  ToastFour,
  ToastNine,
  ToastOne,
  ToastSeven,
  ToastSix,
  ToastThree,
  ToastTwo,
} from "~/components/feedback/toast";
import {
  ComponentHeadingsBar,
  FeedbackComponentBar,
  PageHeader,
} from "~/components/app_components/menuBars";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <VStack>
        <ComponentHeadingsBar />
        <PageHeader
          title="Chakra Feedback Components"
          href="/chakra_feedback"
        />

        <FeedbackComponentBar />
      </VStack>

      <SectionContainer>
        <Box mb={3}>
          <BasicText color={colors.mainAccent3}>
            Feedback components in Chakra UI are primarily designed to provide
            visual cues to users indicating the status or result of certain
            actions or processes. They are fundamental in building interactive
            and responsive user interfaces. By implementing these components,
            developers can communicate the application's state to the user,
            enhancing usability and the overall user experience.{" "}
          </BasicText>
          <BasicText>
            Loading components like <HL>Spinners</HL>, <HL>Progress</HL>,{" "}
            <HL>Circular Progress</HL>, and <HL>Skeletons</HL> serve to indicate
            to users that a process or operation is underway. They effectively
            manage user expectations during periods of uncertainty or wait
            times, keeping users engaged and preventing confusion or
            frustration.{" "}
          </BasicText>
          <BasicText>
            Messaging components such as <HL>Alerts</HL> and <HL>Toasts</HL> are
            pivotal in providing immediate feedback to users' actions or system
            statuses. These components allow applications to provide meaningful
            context for success, warnings, errors, or general information,
            enabling users to understand the system's responses to their
            actions.
          </BasicText>
          <BasicText>
            Utilizing these feedback components properly makes applications feel
            more responsive and user-friendly. They provide a dynamic layer of
            interaction that can reassure the user about what's happening in the
            application and potentially reduce perceived latency or errors.
          </BasicText>
        </Box>
        <FlexibleBox bg={colors.myblue} p={4}>
          <Box>
            <BasicText>
              These are the six feedback components Chakra-UI has to offer:
            </BasicText>
          </Box>
          <Box p={4}>
            <ul>
              <li>
                <BasicText>
                  <HL>Alert</HL>: Alert component is used to provide feedback
                  based on user interactions, or system status. They may contain
                  an optional description and can be color coded according to
                  the severity of the message. It's possible to add actions,
                  too.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Circular Progress</HL>: This component is used to indicate
                  the progress of a task that's going on in the background,
                  typically when the percentage of completion is known. It
                  displays a circle that gets progressively filled in a
                  clockwise direction to show the progress of the operation.{" "}
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Progress</HL>: Similar to the Circular Progress component,
                  the Progress component is also used to display the progress of
                  an operation. However, instead of a circle, it uses a
                  horizontal bar.{" "}
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Skeletons</HL>: The Skeleton component is a placeholder
                  component that's used when the content that should be in its
                  place is still loading. This component gives the user a visual
                  clue that content is on the way, improving the perceived
                  performance of the application.{" "}
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <HL>Spinners</HL>: The Spinner component is used to indicate
                  that a task is ongoing. Unlike the Progress and Circular
                  Progress components, Spinners do not indicate how much of the
                  task is complete, making them more suitable for tasks where
                  the duration is unknown.
                </BasicText>
              </li>{" "}
              <li>
                <BasicText>
                  <HL>Toast</HL>: The Toast component is used to show brief
                  messages or notifications to the user. These messages
                  typically appear for a short duration, then fade out. They can
                  be used to indicate the success, error, or status of an
                  operation.{" "}
                </BasicText>
              </li>
            </ul>
          </Box>
        </FlexibleBox>
      </SectionContainer>

      <div id="alert" />
      <MyLabel link="https://chakra-ui.com/docs/components/alert" size={28}>
        Alert:
      </MyLabel>

      <SectionContainer bg={colors.mainAccent4} p={2}>
        <Box p={3}>
          <BasicText>
            <b>⦾ Alert</b>: The wrapper for alert components.{" "}
          </BasicText>
          <BasicText>
            <b>⦾ AlertIcon</b>: The visual icon for the alert that changes based
            on the status prop.{" "}
          </BasicText>
          <BasicText>
            <b>⦾ AlertTitle</b>: The title of the alert to be announced by
            screen readers.
          </BasicText>
          <BasicText>
            <b>⦾ AlertDescription</b>: The description of the alert to be
            announced by screen readers.
          </BasicText>

          {/* IMPORT CODE */}
          <SectionContainer p={2} mt={5} mb={2}>
            <BasicText>These components can be imported as follows:</BasicText>
            <Feedback.AlertImports />
          </SectionContainer>
        </Box>
      </SectionContainer>
      <Box>
        <SectionContainer>
          <AlertOne />
          <Feedback.E01 />
        </SectionContainer>

        <SectionContainer>
          <AlertTwo />
          <Feedback.E02 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <AlertThree />
          <Feedback.E03 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <AlertFour />
          <Feedback.E04 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <AlertFive />
          <Feedback.E05 />
        </SectionContainer>
      </Box>

      <div id="circular-progress" />
      <MyLabel
        link="https://chakra-ui.com/docs/components/circular-progress"
        size={28}
      >
        Circular Progress Components:
      </MyLabel>

      <Box p={3}>
        <SectionContainer>
          <BasicText color={colors.mainAccent3}>
            <b>⦾ Circular Progress</b> is used to indicates the progress for
            determinate and indeterminate processes.
          </BasicText>
          <Box padding={6}>
            <ul>
              <li>
                There are two types of progress indicators: determinate and
                indeterminate.
              </li>
              <li>
                Determinate progress: fills the circular track with color, as
                the indicator moves from 0 to 360 degrees.
              </li>
              <li>
                Indeterminate progress: grows and shrinks the indicator while
                moving along the circular track.
              </li>
            </ul>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Feedback.CircularImports />
            </SectionContainer>
          </Box>
          <ExampleContainer bg={colors.mainAccent4}>
            <VStack spacing={2} align="center" overflow="hidden">
              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress key={1} value={80} />,
                  <Feedback.E06 key={2} />,
                ]}
              </CompWithLabel>
              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress key={1} value={30} size="120px" />,
                  <Feedback.E07 key={2} />,
                ]}
              </CompWithLabel>

              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress
                    key={1}
                    value={59}
                    size="100px"
                    thickness="4px"
                  />,
                  <Feedback.E08 key={2} />,
                ]}
              </CompWithLabel>
              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress
                    key={1}
                    value={30}
                    color="orange.400"
                    thickness="12px"
                  />,
                  <Feedback.E09 key={2} />,
                ]}
              </CompWithLabel>

              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <Box key={1}>
                    <CircularProgress value={40} color="green.400">
                      <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                  </Box>,
                  <Feedback.E10 key={2} />,
                ]}
              </CompWithLabel>
              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress
                    key={1}
                    isIndeterminate
                    color="green.300"
                  />,
                  <Feedback.E11 key={2} />,
                ]}
              </CompWithLabel>
            </VStack>
          </ExampleContainer>
        </SectionContainer>
      </Box>

      <div id="progress" />
      <MyLabel link="https://chakra-ui.com/docs/components/progress" size={28}>
        Progress Bars:
      </MyLabel>
      <SectionContainer>
        <ExampleContainer bg={colors.mainBackground}>
          <Flex p={3} justifyContent="center" alignItems="center" w="100%">
            <VStack spacing={4} width="100%" bg={colors.mainAccent4}>
              <StackedExample>
                <Feedback.E12 />
                <Progress value={80} w="400px" />
              </StackedExample>
              <StackedExample>
                <Feedback.E13 />
                <Progress hasStripe value={64} w="400px" />
              </StackedExample>
              <StackedExample>
                <Feedback.E14 />
                <Progress colorScheme="red" size="sm" value={20} w="400px" />
              </StackedExample>
              <StackedExample>
                <Feedback.E15 />
                <Progress colorScheme="orange" size="md" value={30} w="400px" />
              </StackedExample>
              <StackedExample>
                <Feedback.E16 />
                <Progress colorScheme="yellow" size="lg" value={40} w="400px" />
              </StackedExample>
              <StackedExample>
                <Feedback.E17 />
                <Progress
                  colorScheme="green"
                  height="32px"
                  value={50}
                  w="400px"
                />
              </StackedExample>
              <StackedExample>
                <Feedback.E18 />
                <Progress value={60} size="sm" colorScheme="blue" w="400px" />
              </StackedExample>
              <StackedExample>
                <Feedback.E19 />
                <Progress
                  size="sm"
                  colorScheme="purple"
                  isIndeterminate
                  w="400px"
                />
              </StackedExample>
            </VStack>
          </Flex>
        </ExampleContainer>
      </SectionContainer>
      <div id="skeletons" />
      <MyLabel link="https://chakra-ui.com/docs/components/skeleton" size={28}>
        Skeletons:
      </MyLabel>
      <Box p={3}>
        <SectionContainer>
          <SkeletonOne />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonTwo />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonThree />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonFour />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonFive />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonSix />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonSeven />
        </SectionContainer>
      </Box>

      <div id="spinners" />
      <MyLabel link="https://chakra-ui.com/docs/components/spinner" size={28}>
        Spinners:
      </MyLabel>
      <Box p={3}>
        <BasicText>
          <b>⦾ Spinners</b> are used to provide visual cues for users that
          actions are being processed and to wait for a change or a result.
        </BasicText>
      </Box>
      <SectionContainer>
        <ExampleContainer bg={colors.mainBackground}>
          <VStack spacing={5} align="center">
            <CompWithLabel>
              {[
                <Spinner key={1} />,
                <Mono key={2}>Spinner used with default settings</Mono>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <Spinner key={1} color="red.500" />,
                <Mono key={2}>Spinner color="red.500"</Mono>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[<Spinner key={1} size="xs" />, <Mono key={2}>size='xs'</Mono>]}
            </CompWithLabel>
            <CompWithLabel>
              {[<Spinner key={1} size="sm" />, <Mono key={2}>size='sm'</Mono>]}
            </CompWithLabel>
            <CompWithLabel>
              {[<Spinner key={1} size="md" />, <Mono key={2}>size='md'</Mono>]}
            </CompWithLabel>
            <CompWithLabel>
              {[<Spinner key={1} size="lg" />, <Mono key={2}>size='lg'</Mono>]}
            </CompWithLabel>
            <CompWithLabel>
              {[<Spinner key={1} size="xl" />, <Mono key={2}>size='xl'</Mono>]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <Spinner
                  key={1}
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />,
                <VStack spacing="1px" key={2}>
                  <Mono>thickness='4px'</Mono>
                  <Mono>speed="0.65s"</Mono>
                  <Mono>emptyColor="gray.200"</Mono>
                  <Mono>color="blue.500"</Mono>
                  <Mono>size="xl"</Mono>
                </VStack>,
              ]}
            </CompWithLabel>
          </VStack>
        </ExampleContainer>
      </SectionContainer>

      <div id="toast" />
      <MyLabel link="https://chakra-ui.com/docs/components/toast" size={28}>
        Toast:
      </MyLabel>

      <Box p={3}>
        <SectionContainer>
          <BasicText>
            In web design, a toast is a small, non-modal notification popup that
            appears on the screen to provide brief information or alerts to the
            user. It is typically displayed as a small rectangular box
            positioned at the bottom, top, or corner of the screen.
          </BasicText>
          <BasicText>
            Toasts are used to provide important or time-sensitive information
            to the user without interrupting their current workflow. They can be
            used to show notifications, success messages, error messages,
            warnings, or other types of feedback. Toasts often include a brief
            message or status update along with an optional icon or action
            button.
          </BasicText>
          <BasicText>The main characteristics of a toast include:</BasicText>

          <BasicText>
            ⦾ <b>Brief and concise</b>: Toasts typically display short and
            concise messages to quickly grab the user's attention and convey the
            information effectively.
          </BasicText>

          <BasicText>
            ⦾ <b>Non-intrusive</b>: Toasts do not require any user interaction
            and automatically disappear after a certain duration or when the
            user dismisses them. They appear briefly and do not block or
            interrupt the user's current activity.
          </BasicText>

          <BasicText>
            ⦾ <b>Temporary</b>: Toasts are temporary notifications and do not
            persist on the screen. They are meant to provide transient
            information or feedback.
          </BasicText>

          <BasicText>
            ⦾ <b>Responsive</b>: Toasts are often designed to be responsive and
            adapt to different screen sizes and devices. They should be visually
            appealing and legible on various screen resolutions.
          </BasicText>

          <BasicText>
            ⦾ Toasts are commonly used in web and mobile applications to enhance
            the user experience by providing timely feedback and information.
            They help in conveying important messages without disrupting the
            user's flow or requiring them to navigate away from their current
            context.
          </BasicText>
        </SectionContainer>
      </Box>
      <Box p={3}>
        <SectionContainer>
          <ToastOne />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastTwo />
        </SectionContainer>

        <SectionContainer>
          <ToastThree />
        </SectionContainer>

        <SectionContainer>
          <ToastFour />
        </SectionContainer>

        <SectionContainer>
          <ToastFive />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastSix />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastSeven />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastEight />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastNine />
        </SectionContainer>
      </Box>
      <Box p={3}>
        <BasicText>
          To read more about configuring Toasts globally and integrating them
          into your theme, check out{" "}
          <a
            href="https://chakra-ui.com/docs/components/toast/usage#configuring-toast-globally"
            target="blank"
          >
            the Chakra UI documentation
          </a>{" "}
          here.
        </BasicText>
      </Box>
    </BigBackgroundBox>
  );
}

import { Box, Flex, Highlight, VStack } from "@chakra-ui/react";
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
import { Highlighter } from "~/components/styling/highlighter";

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
        </Box>
        <FlexibleBox bg={colors.myblue} p={4}>
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
      <Box p={3}>
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2}>
          <BasicText color={colors.mainAccent3}>
            ⦾ The <Mono>Alert</Mono> component in Chakra UI is a highly
            customizable and accessible way to provide feedback to users based
            on their interactions or to display system statuses. This component
            provides a way to quickly inform the user of important information,
            whether it be success messages, error messages, warning messages, or
            informational messages.
          </BasicText>
          <BasicText>
            Alert components are highly versatile and can be customized to fit
            the overall design theme of your application. You can control the
            style of the alert (solid or subtle), the status or type of the
            alert (information, success, warning, or error), and whether it has
            a close button. This makes the Alert component a vital tool in
            enhancing the overall user experience of your application.
          </BasicText>
          <Box paddingX={7} paddingY={3}>
            <BasicText>
              These are the main parts of an <Mono>Alert</Mono> component.
            </BasicText>
            <ul>
              <li>
                <HL>Alert</HL>: The wrapper for alert components.
              </li>
              <li>
                <HL>AlertIcon</HL>: The visual icon for the alert that changes
                based on the status prop.
              </li>
              <li>
                <HL>AlertTitle</HL>: The title of the alert to be announced by
                screen readers.
              </li>
              <li>
                <HL>AlertDescription</HL>: The description of the alert to be
                announced by screen readers.
              </li>
            </ul>
          </Box>
          <Box paddingX={4} paddingY={2}>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{`import { Alert, AlertIcon, AlertTitle, AlertDescription } 
  from "@chakra-ui/react";`}</Highlighter>
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
              <Highlighter>{`import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";`}</Highlighter>
            </SectionContainer>
          </Box>
          <ExampleContainer bg={colors.mainAccent4}>
            <VStack spacing={2} align="center" overflow="hidden">
              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress key={1} value={80} />,
                  <Highlighter
                    key={2}
                  >{`<CircularProgress value={80} />`}</Highlighter>,
                ]}
              </CompWithLabel>
              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress key={1} value={30} size="120px" />,
                  <Highlighter
                    key={2}
                  >{`<CircularProgress value={30} size="120px" />`}</Highlighter>,
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
                  <Highlighter
                    key={2}
                  >{` <CircularProgress value={59} size="100px" thickness="4px" />`}</Highlighter>,
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
                  <Highlighter key={2}>
                    {`<CircularProgress value={30} 
    color="orange.400" thickness="12px" />`}
                  </Highlighter>,
                ]}
              </CompWithLabel>

              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <Box key={1}>
                    <CircularProgress value={40} color="green.400">
                      <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                  </Box>,
                  <Highlighter
                    key={2}
                  >{`<CircularProgress value={40} color="green.400">
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress> `}</Highlighter>,
                ]}
              </CompWithLabel>
              <CompWithLabel fontSize={15} split="30% 70%">
                {[
                  <CircularProgress
                    key={1}
                    isIndeterminate
                    color="green.300"
                  />,
                  <Highlighter key={2}>
                    {` <CircularProgress isIndeterminate color="green.300" />`}
                  </Highlighter>,
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
      <Box p={3}>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2}>
          <BasicText color={colors.mainAccent3}>
            ⦾ Some statement about this component
          </BasicText>
          <Box paddingX={7} paddingY={3}>
            <ul>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
            </ul>
          </Box>
          <Box paddingX={4} paddingY={2}>
            <BasicText>Some description</BasicText>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{``}</Highlighter>
            </SectionContainer>
          </Box>
          <Flex p={3} justifyContent="center" alignItems="center" w="100%">
            <VStack spacing={3} width="100%" bg={colors.mainAccent4}>
              <StackedExample>
                <Highlighter>{`<Progress value={80} />`}</Highlighter>
                <Progress value={80} w="400px" />
              </StackedExample>
              <StackedExample>
                <Highlighter>{`<Progress hasStripe value={64} />`}</Highlighter>
                <Progress hasStripe value={64} w="400px" />
              </StackedExample>
              <StackedExample>
                <Highlighter>{`<Progress colorScheme="red" size="sm" value={20} />`}</Highlighter>
                <Progress colorScheme="red" size="sm" value={20} w="400px" />
              </StackedExample>
              <StackedExample>
                <Highlighter>{`<Progress colorScheme="orange" size="md" value={30} />`}</Highlighter>
                <Progress colorScheme="orange" size="md" value={30} w="400px" />
              </StackedExample>
              <StackedExample>
                <Highlighter>{`<Progress colorScheme="yellow" size="lg" value={40} />`}</Highlighter>
                <Progress colorScheme="yellow" size="lg" value={40} w="400px" />
              </StackedExample>
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
              <StackedExample>
                <Highlighter>{`<Progress value={60} size="sm" colorScheme="blue" />`}</Highlighter>
                <Progress value={60} size="sm" colorScheme="blue" w="400px" />
              </StackedExample>
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
            </VStack>
          </Flex>
        </SectionContainer>
      </Box>

      <div id="skeletons" />
      <MyLabel link="https://chakra-ui.com/docs/components/skeleton" size={28}>
        Skeletons:
      </MyLabel>
      <Box p={3}>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2}>
          <BasicText color={colors.mainAccent3}>
            ⦾ Some statement about this component
          </BasicText>
          <Box paddingX={7} paddingY={3}>
            <ul>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
            </ul>
          </Box>
          <Box paddingX={4} paddingY={2}>
            <BasicText>Some description</BasicText>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{``}</Highlighter>
            </SectionContainer>
          </Box>
        </SectionContainer>
        <SectionContainer>
          <SkeletonOne />
          <Highlighter>{`<Stack>
  <Skeleton height="20px" />
  <Skeleton height="20px" />
  <Skeleton height="20px" />
</Stack>`}</Highlighter>
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonTwo />
          <Highlighter>{`<Skeleton>
  <div>contents wrapped</div>
  <div>won't be visible</div>
</Skeleton>`}</Highlighter>
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonThree />
          <Feedback.E06 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonFour />
          <Highlighter>{`<SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />`}</Highlighter>
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonFive />
          <Highlighter>{`<Skeleton startColor="pink.500" endColor="blue.500" height="20px" />`}</Highlighter>
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonSix />
          <Highlighter>{`<Skeleton isLoaded><span>No skeleton to see here.</span></Skeleton>`}</Highlighter>
        </SectionContainer>

        <SectionContainer>
          {" "}
          <SkeletonSeven />
          <Highlighter>{`<FadeDurationSkeleton />`}</Highlighter>
        </SectionContainer>
      </Box>

      <div id="spinners" />
      <MyLabel link="https://chakra-ui.com/docs/components/spinner" size={28}>
        Spinners:
      </MyLabel>
      <Box p={3}>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer>
          <BasicText color={colors.mainAccent3}>
            ⦾ <HL>Spinners</HL> are used to provide visual cues for users that
            actions are being processed and to wait for a change or a result.
          </BasicText>
          <Box paddingX={7} paddingY={3}>
            <ul>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
              <li>
                <HL>Component</HL>: Description
              </li>
            </ul>
          </Box>
          <Box paddingX={4} paddingY={2}>
            <BasicText>Some description</BasicText>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{``}</Highlighter>
            </SectionContainer>
          </Box>
          <Flex bg={colors.mainAccent4} paddingX={10}>
            <VStack spacing={5} align="center" w="100%" marginY={5}>
              <CompWithLabel>
                {[
                  <Spinner key={1} />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner />`}</Highlighter>
                  </Box>,
                ]}
              </CompWithLabel>
              <CompWithLabel>
                {[
                  <Spinner key={1} color="red.500" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner color="red.500" />`}</Highlighter>
                  </Box>,
                ]}
              </CompWithLabel>
              <CompWithLabel>
                {[
                  <Spinner key={1} size="xs" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="xs" />`}</Highlighter>
                  </Box>,
                ]}
              </CompWithLabel>
              <CompWithLabel>
                {[
                  <Spinner key={1} size="sm" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="sm" />`}</Highlighter>
                  </Box>,
                ]}
              </CompWithLabel>
              <CompWithLabel>
                {[
                  <Spinner key={1} size="md" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="md" />`}</Highlighter>
                  </Box>,
                ]}
              </CompWithLabel>
              <CompWithLabel>
                {[
                  <Spinner key={1} size="lg" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="lg" />`}</Highlighter>
                  </Box>,
                ]}
              </CompWithLabel>
              <CompWithLabel>
                {[
                  <Spinner key={1} size="xl" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="xl" />`}</Highlighter>
                  </Box>,
                ]}
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

                  <Box key={2}>
                    <Highlighter>{`<Spinner thickness="4px" speed="0.65s"
    emptyColor="gray.200" color="blue.500" 
    size="xl" />`}</Highlighter>
                  </Box>,
                ]}
              </CompWithLabel>
            </VStack>
          </Flex>
        </SectionContainer>
      </Box>

      <div id="toast" />
      <MyLabel link="https://chakra-ui.com/docs/components/toast" size={28}>
        Toast:
      </MyLabel>

      <Box p={3}>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2}>
          <BasicText color={colors.mainAccent3}>
            ⦾ In web design, a toast is a small, non-modal notification popup
            that appears on the screen to provide brief information or alerts to
            the user. It is typically displayed as a small rectangular box
            positioned at the bottom, top, or corner of the screen.
          </BasicText>
          <Box paddingX={4} paddingY={2}>
            <BasicText>
              Toasts are used to provide important or time-sensitive information
              to the user without interrupting their current workflow. They can
              be used to show notifications, success messages, error messages,
              warnings, or other types of feedback. Toasts often include a brief
              message or status update along with an optional icon or action
              button.
            </BasicText>
            <BasicText>The main characteristics of a toast include:</BasicText>
            <Box paddingX={7} paddingY={3}>
              <ul>
                <li>
                  <HL>Brief and concise</HL>: Description
                </li>
                <li>
                  <HL>Component</HL>: Toasts typically display short and concise
                  messages to quickly grab the user's attention and convey the
                  information effectively.
                </li>
                <li>
                  <HL>Non-intrusive</HL>: Toasts do not require any user
                  interaction and automatically disappear after a certain
                  duration or when the user dismisses them. They appear briefly
                  and do not block or interrupt the user's current activity.
                </li>
                <li>
                  <HL>Temporary</HL>: Toasts are temporary notifications and do
                  not persist on the screen. They are meant to provide transient
                  information or feedback.
                </li>
                <li>
                  <HL>Responsive</HL>: Toasts are often designed to be
                  responsive and adapt to different screen sizes and devices.
                  They should be visually appealing and legible on various
                  screen resolutions.
                </li>
              </ul>
            </Box>
            Toasts are commonly used in web and mobile applications to enhance
            the user experience by providing timely feedback and information.
            They help in conveying important messages without disrupting the
            user's flow or requiring them to navigate away from their current
            context.
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{`import { useToast } from '@chakra-ui/react'`}</Highlighter>
            </SectionContainer>
          </Box>
        </SectionContainer>
      </Box>
      <Box>
        <SectionContainer>
          <ToastOne />
          <Feedback.E07 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastTwo />
          <Feedback.E08 />
        </SectionContainer>

        <SectionContainer>
          <ToastThree />
          <Feedback.E09 />
        </SectionContainer>

        <SectionContainer>
          <ToastFour />
          <Feedback.E10 />
        </SectionContainer>

        <SectionContainer>
          <ToastFive />
          <Feedback.E11 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastSix />
          <Feedback.E12 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastSeven />
          <Feedback.E13 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastEight />
          <Feedback.E14 />
        </SectionContainer>

        <SectionContainer>
          {" "}
          <ToastNine />
          <Feedback.E15 />
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

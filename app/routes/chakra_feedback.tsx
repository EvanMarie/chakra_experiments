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
  CompWithLabel,
  FlexibleBox,
  HL,
  Mono,
  StackedExample,
  colors,
} from "~/styles/DesignComponents";
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

import { Highlighter } from "~/components/styling/highlighter";
import {
  BigBackgroundBox,
  ExampleContainer,
  MyLabel,
  SectionContainer,
} from "~/styles/MainDesignComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <VStack></VStack>

      <SectionContainer>
        <Box mb={3}>
          <BasicText color={"accent_3"}>
            Feedback components in Chakra UI are primarily designed to provide
            visual cues to users indicating the status or result of certain
            actions or processes. They are fundamental in building interactive
            and responsive user interfaces. By implementing these components,
            developers can communicate the application's state to the user,
            enhancing usability and the overall user experience.{" "}
          </BasicText>
        </Box>
        <FlexibleBox bg={"darkAccent_3"} p={4}>
          <BasicText>
            Loading components like <Mono>Spinners</Mono>, <Mono>Progress</Mono>
            , <Mono>Circular Progress</Mono>, and <Mono>Skeletons</Mono> serve
            to indicate to users that a process or operation is underway. They
            effectively manage user expectations during periods of uncertainty
            or wait times, keeping users engaged and preventing confusion or
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
          <BasicText color={"accent_3"}>
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
          <Box paddingX={7} paddingY={2}>
            <BasicText>
              These are the main parts of an <Mono>Alert</Mono> component.
            </BasicText>
            <ul>
              <li>
                <Mono>Alert</Mono>: The wrapper for alert components.
              </li>
              <li>
                <Mono>AlertIcon</Mono>: The visual icon for the alert that
                changes based on the status prop.
              </li>
              <li>
                <Mono>AlertTitle</Mono>: The title of the alert to be announced
                by screen readers.
              </li>
              <li>
                <Mono>AlertDescription</Mono>: The description of the alert to
                be announced by screen readers.
              </li>
            </ul>
          </Box>
          <Box paddingX={4} paddingY={2}>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>To import these components:</BasicText>
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
          <BasicText color={"accent_3"}>
            ⦾ The <Mono>Circular Progress</Mono> component in Chakra UI is used
            to indicate the status of an ongoing process where the percentage of
            completion is known. It's an effective visual feedback mechanism for
            tasks such as file uploads, system checks, or any other asynchronous
            operation that might take time to complete.{" "}
          </BasicText>
          <BasicText>
            This component displays a circular track, with a portion filled to
            represent the progress of the operation. You can customize the size,
            color, and thickness of the track and progress indicator based on
            the look and feel of your application.{" "}
          </BasicText>
          <BasicText>
            An important feature of the <Mono>Circular Progress</Mono> component
            is its <Mono>value</Mono> {"  "}
            property. This is a number between 0 and 100 that represents the
            current progress. If the <Mono>value</Mono> property is not
            provided, the circular progress will spin indefinitely, which could
            be used to represent an ongoing operation where the completion
            percentage is unknown.
          </BasicText>
          <BasicText>
            {" "}
            Like all Chakra UI components, the <Mono>
              Circular Progress
            </Mono>{" "}
            component is fully accessible, with the proper <Mono>ARIA</Mono>{" "}
            roles and attributes automatically applied to indicate the
            determinate or indeterminate state of the progress to assistive
            technologies. This makes it a reliable tool in building inclusive
            web interfaces.
          </BasicText>

          <Box paddingX={6}>
            <ul>
              <li>
                <HL>Determinate progress</HL>: fills the circular track with
                color, as the indicator moves from 0 to 360 degrees.
              </li>
              <li>
                <HL>Indeterminate progress</HL>: grows and shrinks the indicator
                while moving along the circular track.
              </li>
            </ul>
            {/* IMPORT CODE */}
            <SectionContainer p={2} paddingY={2}>
              <BasicText>To import these components:</BasicText>
              <Highlighter>{`import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";`}</Highlighter>
            </SectionContainer>
          </Box>
          <ExampleContainer bg={"darkAccent_2"}>
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
          <BasicText color={"accent_3"}>
            ⦾ The <Mono>Progress</Mono> component in Chakra UI is used to
            represent the completion progress of a task or operation. Similar to
            the <Mono>Circular Progress</Mono> component, it's an effective way
            to visually convey the status of a task where the percentage of
            completion is known.{" "}
          </BasicText>
          <BasicText>
            The <Mono>Progress</Mono> component is a horizontal bar that gets
            progressively filled from left to right to indicate the progress of
            an operation. It provides a clear visual cue to the user about the
            status of background tasks such as file uploads, downloads, data
            processing, and more. One of the main features of the{" "}
            <Mono>Progress</Mono> component is the <Mono>value</Mono> property,
            which is a number between 0 and 100 indicating the current progress.{" "}
          </BasicText>
          <BasicText>
            If the <Mono>value</Mono> property is not provided, a striped
            pattern will be applied to the bar to indicate indeterminate
            progress, where the percentage of completion is unknown. The{" "}
            <Mono>Progress</Mono> component allows you to customize the height,
            color scheme, and even whether or not to display stripes. You can
            also control whether the progress is animated or not using the
            isAnimated property.
          </BasicText>
          <BasicText>
            In terms of accessibility, Chakra UI automatically applies the
            appropriate <Mono>ARIA</Mono> roles and attributes to the Progress
            component, making it a suitable choice for developing inclusive user
            interfaces.
          </BasicText>
          <Box paddingX={4} paddingY={2}>
            {/* IMPORT CODE */}
            <SectionContainer p={2} paddingY={2}>
              <BasicText>To import this component:</BasicText>
              <Highlighter>{`import { Progress } from '@chakra-ui/react'`}</Highlighter>
            </SectionContainer>
          </Box>
          <Flex p={3} justifyContent="center" alignItems="center" w="100%">
            <VStack spacing={3} width="100%" bg={"darkAccent_2"}>
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
          <BasicText color={"accent_3"}>
            ⦾ The <Mono>Skeleton</Mono> component in Chakra UI is a content
            placeholder used to suggest that content is loading. They provide a
            low fidelity representation of the content that is loading and are
            typically used to improve perceived performance and offer a more
            seamless user experience.{" "}
          </BasicText>
          <BasicText>
            Skeleton components can be used in a wide range of scenarios, such
            as when loading a page, an image, or a piece of text content. By
            using a Skeleton component, you can prevent abrupt changes in your
            application, providing a smoother visual transition as content
            loads.{" "}
          </BasicText>
          <BasicText>
            One of the key features of the <Mono>Skeleton</Mono> component is
            its animation. By default, it uses a shimmer effect to better convey
            the loading state to the user. You can control whether this
            animation is active or not, and can also customize the speed of the
            animation. The Skeleton component in Chakra UI is highly flexible
            and can be adapted to fit a variety of shapes and sizes based on the
            content it's replacing. You can control its width, height, and other
            box model properties to fit your needs.{" "}
          </BasicText>
          <BasicText>
            As far as accessibility, Chakra UI applies the appropriate{" "}
            <Mono>ARIA</Mono> roles and properties to the Skeleton component to
            indicate to assistive technologies that the content is being loaded.
            This makes it an excellent tool for building inclusive and
            performant user interfaces.
          </BasicText>
          <Box paddingX={7} paddingY={3}>
            <BasicText>Key properties include:</BasicText>
            <ul>
              <li>
                <Mono>isLoaded</Mono>: Determines if the skeleton should still
                be shown or if the content is ready and should be displayed.
              </li>
              <li>
                <Mono>startColor / endColor</Mono>: Controls the animation's
                color at the start and end. Typically you'll want to keep these
                subtle.
              </li>
              <li>
                <Mono>fadeInDuration</Mono>: Determines the duration of the
                fade-in animation when the isLoaded prop becomes true.
              </li>
              <li>
                <Mono>speed</Mono>: Controls the speed of the shimmer animation.
              </li>
            </ul>
          </Box>
          <Box paddingX={4} paddingY={2}>
            {/* IMPORT CODE */}
            <SectionContainer paddingY={2}>
              <BasicText>To import these components:</BasicText>
              <Highlighter>{`import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'`}</Highlighter>
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
          <BasicText color={"accent_3"}>
            ⦾ The <HL>Spinners</HL> component in Chakra UI is a feedback
            indicator mainly used for visualizing an unspecified wait time where
            the length of the task is unknown.{" "}
          </BasicText>
          <BasicText>
            Spinners are animated graphical controls that spin to indicate that
            a process is currently ongoing. They are often used for tasks such
            as loading data, submitting forms, or any asynchronous operations
            where the completion time cannot be estimated. Key features of the
            Spinner component in Chakra UI are its simplicity and its
            customizable appearance.{" "}
          </BasicText>
          <BasicText>
            You can easily change the size and color of the Spinner to match the
            look and feel of your application. Unlike <HL>Progress</HL> or{" "}
            <HL>CircularProgress</HL> components, Spinners do not represent a
            percentage completion, but rather the ongoing nature of a task. This
            makes them suitable for scenarios where the duration of the task is
            unpredictable.{" "}
          </BasicText>
          <BasicText>
            In terms of accessibility, Chakra UI takes care of that by giving
            the Spinner component a role of 'status' and providing a fallback
            status message of 'Loading...', ensuring that screen reader users
            are also informed about the ongoing operation.
          </BasicText>

          <Box paddingX={4} paddingY={2}>
            {/* IMPORT CODE */}
            <SectionContainer p={2} paddingY={2}>
              <BasicText>To import this component:</BasicText>
              <Highlighter>{`import { Spinner } from '@chakra-ui/react'`}</Highlighter>
            </SectionContainer>
          </Box>
          <Flex bg={"darkAccent_2"} paddingX={10}>
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
          <BasicText color={"accent_3"}>
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
              <BasicText>To import this component:</BasicText>
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
      <Box p={3}></Box>
    </BigBackgroundBox>
  );
}

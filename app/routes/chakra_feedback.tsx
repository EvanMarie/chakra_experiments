import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import { ComponentButtonBar } from "~/components/ButtonBar";
import { Progress } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import {
  AlertFive,
  AlertFour,
  AlertOne,
  AlertThree,
  AlertTwo,
} from "~/components/alerts";

import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BigBackgroundBox,
  CompWithLabel,
  Mono,
  MyButton,
  MyHeading,
  MyLabel,
  sectionMenuButtons,
} from "~/styles/reusableChakraComponents";
import {
  SkeletonFive,
  SkeletonFour,
  SkeletonOne,
  SkeletonSeven,
  SkeletonSix,
  SkeletonThree,
  SkeletonTwo,
} from "~/components/skeletons";
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
} from "~/components/toast";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <ComponentButtonBar />
      <MyHeading>Chakra Disclosure Components:</MyHeading>
      <HStack wrap="wrap">
        <MyButton label="Alert" href="#alert" {...sectionMenuButtons} />
        <MyButton
          label="Circular Progress"
          href="#circular-progress"
          {...sectionMenuButtons}
        />
        <MyButton label="Progress" href="#progress" {...sectionMenuButtons} />
        <MyButton label="Skeletons" href="#skeletons" {...sectionMenuButtons} />
        <MyButton label="Spinners" href="#spinners" {...sectionMenuButtons} />
        <MyButton label="Toast" href="#toast" {...sectionMenuButtons} />
      </HStack>

      <div id="alert" />
      <MyLabel link="https://chakra-ui.com/docs/components/alert" size={28}>
        Alert:
      </MyLabel>
      <Box p={3}>
        <BasicText>
          <b>⦾ Alert</b>: The wrapper for alert components.{" "}
        </BasicText>
        <BasicText>
          <b>⦾ AlertIcon</b>: The visual icon for the alert that changes based
          on the status prop.{" "}
        </BasicText>
        <BasicText>
          <b>⦾ AlertTitle</b>: The title of the alert to be announced by screen
          readers.
        </BasicText>
        <BasicText>
          <b>⦾ AlertDescription</b>: The description of the alert to be
          announced by screen readers.
        </BasicText>
      </Box>

      <Box>
        <AlertOne />
        <AlertTwo />
        <AlertThree />
        <AlertFour />
        <AlertFive />
      </Box>

      <div id="circular-progress" />
      <MyLabel
        link="https://chakra-ui.com/docs/components/circular-progress"
        size={28}
      >
        Circular Progress Components:
      </MyLabel>
      <Box p={3}>
        <BasicText>
          <b>⦾ Circular Progress</b> is used to indicates the progress for
          determinate and indeterminate processes.
        </BasicText>
        <Box paddingX={6}>
          <ul>
            <li>
              There are two types of progress indicators: determinate and
              indeterminate.
            </li>
            <li>
              Determinate progress: fills the circular track with color, as the
              indicator moves from 0 to 360 degrees.
            </li>
            <li>
              Indeterminate progress: grows and shrinks the indicator while
              moving along the circular track.
            </li>
          </ul>
        </Box>
        <Box p={3}>
          <VStack spacing={5} align="center">
            <CompWithLabel>
              {[
                <CircularProgress key={1} value={80} />,
                <Mono key={2}>CircularProgress value={80}</Mono>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <CircularProgress key={1} value={30} size="120px" />,
                <Mono key={2}> CircularProgress value={30} size='120px'</Mono>,
              ]}
            </CompWithLabel>

            <CompWithLabel>
              {[
                <CircularProgress
                  key={1}
                  value={59}
                  size="100px"
                  thickness="4px"
                />,
                <Mono key={2}>
                  CircularProgress value={59} size='100px' thickness='4px'
                </Mono>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <CircularProgress
                  key={1}
                  value={30}
                  color="orange.400"
                  thickness="12px"
                />,
                <Mono key={2}>
                  CircularProgress value={30} color='orange.400'
                  thickness='12px'
                </Mono>,
              ]}
            </CompWithLabel>

            <CompWithLabel>
              {[
                <Box key={1}>
                  <CircularProgress value={40} color="green.400">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </Box>,
                <VStack key={2}>
                  <Mono>CircularProgress value={40} color='green.400'</Mono>
                  <Mono>CircularProgressLabel - 40%</Mono>
                </VStack>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <CircularProgress key={1} isIndeterminate color="green.300" />,
                <Mono key={2}>
                  CircularProgress isIndeterminate color='green.300'
                </Mono>,
              ]}
            </CompWithLabel>
          </VStack>
        </Box>
      </Box>

      <div id="progress" />
      <MyLabel link="https://chakra-ui.com/docs/components/progress" size={28}>
        Progress Bars:
      </MyLabel>
      <Box p={3}>
        <VStack spacing={4}>
          <CompWithLabel>
            {[
              <Mono key={1}>Progress value={80}</Mono>,
              <Progress value={80} w="300px" key={2} />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>Progress hasStripe value={64}</Mono>,
              <Progress hasStripe value={64} w="300px" key={2} />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='red' size='sm' value={20}
              </Mono>,
              <Progress
                colorScheme="red"
                size="sm"
                value={20}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='orange' size='md' value={30}
              </Mono>,
              <Progress
                colorScheme="orange"
                size="md"
                value={30}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='yellow' size='lg' value={40}
              </Mono>,
              <Progress
                colorScheme="yellow"
                size="lg"
                value={40}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='green' height='32px' value={50}
              </Mono>,
              <Progress
                colorScheme="green"
                height="32px"
                value={50}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress value={60} size='m' colorScheme='blue'
              </Mono>,
              <Progress
                key={2}
                value={60}
                size="sm"
                colorScheme="blue"
                w="300px"
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress size='sm'colorScheme="purple" isIndeterminate
              </Mono>,
              <Progress
                size="sm"
                colorScheme="purple"
                isIndeterminate
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
        </VStack>
      </Box>
      <div id="skeletons" />
      <MyLabel link="https://chakra-ui.com/docs/components/skeleton" size={28}>
        Skeletons:
      </MyLabel>
      <Box p={3}>
        <SkeletonOne />
        <SkeletonTwo />
        <SkeletonThree />
        <SkeletonFour />
        <SkeletonFive />
        <SkeletonSix />
        <SkeletonSeven />
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

      <Box p={3}>
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
      </Box>

      <div id="toast" />
      <MyLabel link="https://chakra-ui.com/docs/components/toast" size={28}>
        Toast:
      </MyLabel>
      <Box p={3}>
        <BasicText>
          ⦾ In web design, a toast is a small, non-modal notification popup that
          appears on the screen to provide brief information or alerts to the
          user. It is typically displayed as a small rectangular box positioned
          at the bottom, top, or corner of the screen.
        </BasicText>
        <BasicText>
          Toasts are used to provide important or time-sensitive information to
          the user without interrupting their current workflow. They can be used
          to show notifications, success messages, error messages, warnings, or
          other types of feedback. Toasts often include a brief message or
          status update along with an optional icon or action button.
        </BasicText>
        <BasicText>The main characteristics of a toast include:</BasicText>
        <ol>
          <li>
            <BasicText>
              Brief and concise: Toasts typically display short and concise
              messages to quickly grab the user's attention and convey the
              information effectively.
            </BasicText>
          </li>
          <li>
            <BasicText>
              Non-intrusive: Toasts do not require any user interaction and
              automatically disappear after a certain duration or when the user
              dismisses them. They appear briefly and do not block or interrupt
              the user's current activity.
            </BasicText>
          </li>
          <li>
            <BasicText>
              Temporary: Toasts are temporary notifications and do not persist
              on the screen. They are meant to provide transient information or
              feedback.
            </BasicText>
          </li>
          <li>
            <BasicText>
              Responsive: Toasts are often designed to be responsive and adapt
              to different screen sizes and devices. They should be visually
              appealing and legible on various screen resolutions.
            </BasicText>
          </li>
        </ol>
        <BasicText>
          Toasts are commonly used in web and mobile applications to enhance the
          user experience by providing timely feedback and information. They
          help in conveying important messages without disrupting the user's
          flow or requiring them to navigate away from their current context.
        </BasicText>
      </Box>
      <Box p={3}>
        <ToastOne />
        <ToastTwo />
        <ToastThree />
        <ToastFour />
        <ToastFive />
        <ToastSix />
        <ToastSeven />
        <ToastEight />
        <ToastNine />
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
      <ComponentButtonBar />
    </BigBackgroundBox>
  );
}

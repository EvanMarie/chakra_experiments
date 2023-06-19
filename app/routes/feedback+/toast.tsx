import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL } from "~/styles/DesignComponents";

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
  ViewCode,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import * as Feedback from "~/mardownExamples/feedback/index";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
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
  ToastCountdownFunction,
  ToastInteractiveFunction,
  ToastSequentialFunction,
} from "~/components/feedback/toastFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/toast" size={28}>
        Toast:
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ In the realm of digital interface design, a toast represents a
              compact, non-intrusive popup notification intended to furnish
              users with short, transient alerts or pieces of information.
              Typically, toasts manifest themselves as minor rectangular boxes,
              strategically positioned on the screen's corners or along the top
              or bottom edge.
            </SectionDescription>
            <BasicText>
              Toasts aim to deliver critical or time-bound information without
              hindering the user's current tasks. They find extensive use in
              presenting a range of updates, including notifications, success
              acknowledgements, error reports, warnings, or other forms of
              feedback. They usually comprise a succinct message or status
              indicator and may optionally include an icon or action button.
            </BasicText>
            <BasicText>The primary attributes of a toast include:</BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Succinctness</HL>: A toast tends to carry short, crisp
                  messages designed to capture the user's attention effectively
                  and communicate the intended information.
                </li>
                <li>
                  <HL>Non-interference</HL>: Toasts do not necessitate any user
                  interaction and are designed to vanish automatically after a
                  predetermined duration or upon user dismissal. They
                  momentarily appear and avoid any disruptions to the user's
                  ongoing actions.
                </li>
                <li>
                  <HL>Temporariness</HL>: Toasts serve as ephemeral
                  notifications and do not persist on the screen. Their purpose
                  is to deliver momentary information or feedback.
                </li>
                <li>
                  <HL>Responsiveness</HL>: Toasts are typically built to adapt
                  to various screen sizes and devices, ensuring their visibility
                  and readability across a range of screen resolutions.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                The inclusion of toasts in web and mobile applications
                significantly improves the user experience by offering timely
                feedback and information. They play a crucial role in conveying
                important messages without disturbing the user's workflow or
                compelling them to divert from their current context.
              </BasicText>
              <br />
              <BasicText>
                The Chakra UI's Toast component provides all these benefits with
                a customizable and easy-to-use interface. It allows developers
                to display temporary, auto-dismissing alerts with various visual
                styles to indicate the nature of the notification. Moreover, it
                supports different positions on the screen and offers control
                over its behavior and duration.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  To import the toast component into your project:
                </BasicText>
                <Highlighter>{`import { useToast } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <ToastOne />
                <Feedback.E07 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastTwo />
                <Feedback.E08 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastThree />
                <Feedback.E09 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastFour />
                <Feedback.E10 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastFive />
                <Feedback.E11 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastSix />
                <Feedback.E12 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastSeven />
                <Feedback.E13 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastEight />
                <Feedback.E14 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ToastNine />
                <Feedback.E15 />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Sequential Toasts</b>: In certain cases, you may want to show a
              sequence of toasts, one after the other, to guide the user through
              a process or to narrate a story. This function is used to display
              a sequence of toast notifications, one after the other. This is
              achieved by using the <b>forEach</b> function in combination with{" "}
              <b>setTimeout</b>. Each toast is displayed after a delay
              calculated based on its index in the sequence array. When the
              button labeled "Show Steps" is clicked, the <b>displaySequence</b>{" "}
              function is triggered and the sequence of toasts begins. This can
              be particularly useful in scenarios where you want to guide users
              through a step-by-step process.
            </HighlightText>

            <MyFlex>
              <ToastSequentialFunction />
            </MyFlex>
            <ViewCode>
              <Highlighter>{`export function ToastSequentialFunction() {
  const toast = useToast();
  const sequence = ["Step 1: Do this", "Step 2: Do that", "Step 3: Done!"];
  const displaySequence = () => {
    sequence.forEach((step, index) => {
      setTimeout(() => {
        toast({
          title: step,
          status: "info",
          duration: 2000,
          isClosable: true,
        });
      }, index * 1500);
    });
  };

  return <Button onClick={displaySequence}>Show Steps</Button>;
}`}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Toast with Countdown</b>: You can incorporate a countdown
              within a toast to indicate the remaining time for a particular
              action. This can be particularly useful for timed quizzes, online
              exams, or other time-bound activities. This function demonstrates
              how to incorporate a countdown timer within a toast notification.
              On clicking the "Start Countdown" button, a toast with a title
              displaying a countdown from 10 is shown. The countdown timer is
              implemented using <b>setInterval</b>, and at each one-second
              interval, the countdown number decreases by one and the toast is
              updated with the new countdown number. When the countdown reaches
              zero, the interval is cleared and the toast is updated to show a
              "Countdown Complete!" message. This toast does not auto-close and
              does not show a close button until the countdown is complete.
            </HighlightText>
            <MyFlex>
              <ToastCountdownFunction />
            </MyFlex>
            <ViewCode>
              <Highlighter>{`export function ToastCountdownFunction() {
  const toast = useToast();
  let counter = 10;

  const startCountdown = () => {
    const toastId = toast({
      title: 'Countdown: {counter}',
      duration: null,
      isClosable: false,
    });

    const intervalId = setInterval(() => {
      counter--;
      if (counter > 0) {
        toast.update(toastId, { title: 'Countdown: {counter}' });
      } else {
        clearInterval(intervalId);
        toast.update(toastId, {
          title: "Countdown Complete!",
          isClosable: true,
        });
      }
    }, 1000);
  };

  return (
    <Button sx={buttonStyles} onClick={startCountdown}>
      Start Countdown
    </Button>
  );
}`}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Interactive Toasts</b>: Toasts can contain buttons or other
              interactive elements to provide additional functionality. For
              instance, you can include a button that triggers another action
              directly from the toast. This function illustrates how to
              incorporate interactivity within a toast. On clicking the "Greet
              me" button, a toast notification is displayed with a custom render
              function. This function returns a button with a click handler that
              triggers another toast notification. The first toast message asks
              the user a question - "Would you like a cup of coffee?". This
              toast contains a button labeled "Yes, please!", which when
              clicked, triggers another toast notification with the message
              "Coffee on the way!". This shows how toast notifications can be
              made interactive by incorporating clickable elements within them.
            </HighlightText>
            <MyFlex>
              <ToastInteractiveFunction />
            </MyFlex>
            <ViewCode>
              <Highlighter>{`export function ToastInteractiveFunction() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Hey there!",
      description: "Would you like a cup of coffee?",
      status: "info",
      duration: null,
      isClosable: true,
      render: () => (
        <Box color="white" sx={buttonStyles}>
          <Button
            sx={buttonStyles}
            onClick={() =>
              toast({
                title: "Coffee on the way!",
                status: "success",
                duration: 2000,
              })
            }
          >
            Yes, please!
          </Button>
        </Box>
      ),
    });
  };

  return (
    <Button sx={buttonStyles} onClick={showToast}>
      Greet me
    </Button>
  );
}`}</Highlighter>
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

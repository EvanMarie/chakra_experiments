import { Box, Link, VStack } from "@chakra-ui/react";
import { BsTextareaResize } from "react-icons/bs";
import { BasicText, FlexibleBox, HL, Mono } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components">
        Chakra UI: Feedback
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Components for providing feedback in Chakra UI are mainly aimed at
            offering visual indicators to users. These indicators signify the
            outcomes or status of certain processes or actions. They play a
            crucial role in creating responsive, interactive user interfaces. By
            utilizing these components, developers can convey the state of the
            application to users, thereby boosting usability and the overall
            user experience.
          </SectionDescription>

          <BasicText>
            Components that signify loading state, such as <Mono>Spinners</Mono>
            , <Mono>Progress</Mono>, <Mono>Circular Progress</Mono>, and{" "}
            <Mono>Skeletons</Mono>, are used to inform users about ongoing
            processes or operations. These components help manage users'
            expectations during waiting periods or times of uncertainty, thereby
            keeping users engaged and averting potential confusion or
            frustration.
          </BasicText>
          <BasicText>
            Components for messaging like <Mono>Alerts</Mono> and{" "}
            <Mono>Toasts</Mono> are key in delivering instant feedback to users
            about their actions or the status of the system. These components
            enable applications to provide relevant context about successes,
            warnings, errors, or general information, helping users comprehend
            the system's reactions to their actions.
          </BasicText>

          <BasicText>
            Appropriate usage of these feedback components can make applications
            feel more responsive and user-oriented. They add a dynamic
            interaction layer that can assure users about the ongoing activities
            within the application, and possibly lessen perceived delays or
            errors.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>
            These are the six feedback components Chakra-UI has to offer:
          </BasicText>
          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/feedback/alert">
                    <HL>Alert 🔗</HL>
                  </Link>
                  : Alert component is used to provide feedback based on user
                  interactions, or system status. They may contain an optional
                  description and can be color coded according to the severity
                  of the message. It's possible to add actions, too.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/feedback/circular_progress">
                    <HL>Circular Progress 🔗</HL>
                  </Link>
                  : This component is used to indicate the progress of a task
                  that's going on in the background, typically when the
                  percentage of completion is known. It displays a circle that
                  gets progressively filled in a clockwise direction to show the
                  progress of the operation.{" "}
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/feedback/progress">
                    <HL>Progress 🔗</HL>
                  </Link>
                  : Similar to the Circular Progress component, the Progress
                  component is also used to display the progress of an
                  operation. However, instead of a circle, it uses a horizontal
                  bar.{" "}
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/feedback/skeletons">
                    <HL>Skeletons 🔗</HL>
                  </Link>
                  : The Skeleton component is a placeholder component that's
                  used when the content that should be in its place is still
                  loading. This component gives the user a visual clue that
                  content is on the way, improving the perceived performance of
                  the application.{" "}
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/feedback/spinners">
                    <HL>Spinners 🔗</HL>
                  </Link>
                  : The Spinner component is used to indicate that a task is
                  ongoing. Unlike the Progress and Circular Progress components,
                  Spinners do not indicate how much of the task is complete,
                  making them more suitable for tasks where the duration is
                  unknown.
                </BasicText>
              </li>{" "}
              <li>
                <BasicText>
                  <Link href="/feedback/toast">
                    <HL>Toast 🔗</HL>
                  </Link>
                  : The Toast component is used to show brief messages or
                  notifications to the user. These messages typically appear for
                  a short duration, then fade out. They can be used to indicate
                  the success, error, or status of an operation.{" "}
                </BasicText>
              </li>
            </ul>
          </BulletBox>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

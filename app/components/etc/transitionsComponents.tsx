import { Box, Code } from "@chakra-ui/react";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  TransitionsFunctionOne,
  TransitionsFunctionTwo,
  TransitionsFunctionThree,
  TransitionsFunctionFour,
  TransitionsFunctionFive,
} from "./transitionsFunctions";

/* ********************************************************************** */

export function TransitionsOne() {
  return (
    <SectionContainer>
      <SectionHeading>Fade</SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>transition</HL>: A prop that allows you to customize the
              animation transition. It accepts an object with properties like
              duration, delay, ease, and times. These properties control the
              duration, delay, easing function, and keyframes for the animation.
            </li>
            <li>
              <HL>in</HL>: A boolean value that controls the visibility of the
              component. It triggers the enter or exit states of the animation.
            </li>
            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when in={false} and the animation is completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TransitionsFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TransitionsTwo() {
  return (
    <SectionContainer>
      <SectionHeading>ScaleFade</SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>transition</HL>: Similar to the Fade transition, the ScaleFade
              transition accepts the transition prop to control the animation
              transition.
            </li>
            <li>
              <HL>in</HL>:A boolean value that controls the visibility of the
              component. It triggers the enter or exit states of the animation.
            </li>
            <li>
              <HL>initialScale</HL>: The initial scale of the element. It is a
              number between 0 and 1. The default value is 0.95.
            </li>
            <li>
              <HL>reverse</HL>: If set to true, the element will transition back
              to the exit state when it leaves.
            </li>
            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when in={false} and the animation is completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TransitionsFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TransitionsThree() {
  return (
    <SectionContainer>
      <SectionHeading>Slide</SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>transition</HL>: The Slide transition also accepts the
              transition prop to customize the animation transition.
            </li>
            <li>
              <HL>direction</HL>: The direction from which the component slides
              in. It can be set to 'right', 'left', 'top', or 'bottom'.
            </li>
            <li>
              <HL>in</HL>: A boolean value that controls the visibility of the
              component. It triggers the enter or exit states of the animation.
            </li>
            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when <Code>{`in={false}`}</Code> and the animation is completed.
            </li>
            <li>
              <HL></HL>:
            </li>
            <li>
              <HL></HL>:
            </li>
          </ul>
        </BulletBox>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TransitionsFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TransitionsFour() {
  return (
    <SectionContainer>
      <SectionHeading>SlideFade</SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>SlideFade</HL>: The SlideFade transition component allows you
              to customize the animation transition using the transition prop.
            </li>
            <li>
              <HL>in</HL>: A boolean value that controls the visibility of the
              component. It triggers the enter or exit states of the animation.
            </li>
            <li>
              <HL>offsetX</HL>: The offset on the horizontal or x-axis. It can
              be a string or number. The default value is 0.
            </li>
            <li>
              <HL>offsetY</HL>: The offset on the vertical or y-axis. It can be
              a string or number. The default value is 8.
            </li>
            <li>
              <HL>reverse</HL>: If set to true, the element will be transitioned
              back to the offset when it leaves. Otherwise, it will only fade
              out.
            </li>

            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when in={false} and the animation is completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TransitionsFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function TransitionsFive() {
  return (
    <SectionContainer>
      <SectionHeading>Collapse</SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>startingHeight</HL>: The Collapse transition component accepts
              the startingHeight prop, which sets the initial height of the
              collapsed content. This prop is useful when you want the collapsed
              content to have a specific height instead of collapsing to a
              height of zero.
            </li>
            <li>
              <HL>animateOpacity</HL>: If set to true, the opacity of the
              content will be animated during the transition.
            </li>
            <li>
              <HL>endingHeight</HL>: The height you want the content to be in
              its expanded state. It can be a string or number. The default
              value is "auto".
            </li>
            <li>
              <HL>in</HL>: A boolean value that controls the visibility of the
              component. It triggers the enter or exit states of the animation.{" "}
            </li>
            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when in={false} and the animation is completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TransitionsFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

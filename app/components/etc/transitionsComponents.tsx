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
        <SectionDescription>
          ⦾ The <Mono>Fade</Mono> component is used to create a fading effect
          when transitioning a component in or out of view.
        </SectionDescription>

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
              <HL>unmountOnExit</HL>: If set to <Mono>true</Mono>, the component
              will unmount when <Code>{`in={false}`}</Code> and the animation is
              completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText>
          The following are two examples using <Mono>Fade</Mono>. The first is
          the default behavior. The second shows a custom fade using the{" "}
          <Mono>transition</Mono> prop.
        </BasicText>
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
        <SectionDescription>
          ⦾ The <Mono>ScaleFade</Mono> component allows you to create a scaling
          and fading effect during the transition.{" "}
        </SectionDescription>

        <BulletBox>
          <ul>
            <li>
              <HL>transition</HL>: Similar to the <Mono>Fade</Mono> transition,
              the <Mono>ScaleFade</Mono> transition accepts the transition prop
              to control the animation transition.
            </li>
            <li>
              <HL>in</HL>:A boolean value that controls the visibility of the
              component. It triggers the enter or exit states of the animation.
            </li>
            <li>
              <HL>initialScale</HL>: The initial scale of the element. It is a
              number between 0 and 1. The default value is 0.95. This is the
              scaled size from which the element will transition from when it
              enters.
            </li>
            <li>
              <HL>reverse</HL>: If set to true, the element will transition back
              to the exit state when it leaves. The default value is true.
            </li>
            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when <Code>{`in={false}`}</Code> and the animation is completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText>
          Below is an example of the default settings on <Mono>ScaleFade</Mono>{" "}
          as well as an example where you can choose the initial scale size to
          see the differences between values.
        </BasicText>
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
        <SectionDescription>
          ⦾ The <Mono>Slide</Mono> component enables you to create sliding
          transitions for your components.
        </SectionDescription>

        <BulletBox>
          <ul>
            <li>
              <HL>transition</HL>: The <Mono>Slide</Mono> transition also
              accepts the transition prop to customize the animation transition.
            </li>
            <li>
              <HL>direction</HL>: The direction from which the component slides
              in. It can be set to 'right', 'left', 'top', or 'bottom'. The
              default value is 'right'.
            </li>
            <li>
              <HL>in</HL>: A boolean value that controls the visibility of the
              component. It triggers the enter or exit states of the animation.
            </li>
            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when <Code>{`in={false}`}</Code> and the animation is completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText>
          In the example below, you can try out the different directions to see
          how the component behaves under each circumstance.
        </BasicText>
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
        <SectionDescription>
          ⦾ The <Mono>SlideFade</Mono> component combines both sliding and
          fading effects during the transition.
        </SectionDescription>

        <BulletBox>
          <ul>
            <li>
              <HL>SlideFade</HL>: The <Mono>SlideFade</Mono> transition
              component allows you to customize the animation transition using
              the transition prop.
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
              out. The default value is true.
            </li>

            <li>
              <HL>unmountOnExit</HL>: If set to true, the component will unmount
              when in={false} and the animation is completed.
            </li>
          </ul>
        </BulletBox>
        <BasicText>
          In the following examples, you can see the default behavior of the{" "}
          <Mono>SlideFade</Mono> component. Then you can experiment with the
          different values for the <Mono>offsetX</Mono> and <Mono>offsetY</Mono>{" "}
          properties from <Mono>-200px</Mono> to <Mono>200px</Mono> for both{" "}
          <Mono>X</Mono> and <Mono>Y</Mono>. You can also experiment with the{" "}
          duration settings to see how the animation varies.
        </BasicText>
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
        <SectionDescription>
          ⦾ The Collapse component is used to create expandable/collapsible
          regions of content with a smooth animation.{" "}
        </SectionDescription>
        <BasicText></BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>animateOpacity</HL>: If set to true, the opacity of the
              content will be animated during the transition. The default value
              is true.
            </li>
            <li>
              <HL>startingHeight</HL>: The Collapse transition component accepts
              the startingHeight prop, which sets the initial height of the
              collapsed content. This prop is useful when you want the collapsed
              content to have a specific height instead of collapsing to a
              height of zero.
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
        <BasicText>
          In the following example, you can experiment with the different values
          for <Mono>startingHeight</Mono>, <Mono>endingHeight</Mono>, and
          duration with the <Mono>Collapse</Mono> component.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <TransitionsFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

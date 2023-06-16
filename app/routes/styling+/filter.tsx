import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  MyLabel,
  SectionContainer,
  MainGrid,
  GridColumn,
  GridBoxOne,
  GridBoxThree,
  GridBoxTwo,
  HighlightColumn,
  SingleExample,
  MyFlex,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  BackdropFilters,
  Filters,
  FilterTipOne,
  FilterTipThree,
  FilterTipTwo,
} from "~/components/styling/imageFilters";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#filter">
        Filter
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI does not provide built-in features specifically for
              image filtering. However, you can apply image filters by
              leveraging CSS and Chakra UI's system for handling styles. Note:
              To apply <Mono>blur</Mono>, <Mono>brightness</Mono>,{" "}
              <Mono>contrast</Mono>, <Mono>hueRotate</Mono>, <Mono>invert</Mono>
              , <Mono>saturate</Mono> props on the element, set{" "}
              <Mono>filter</Mono> prop value to "auto".
            </SectionDescription>
            <BasicText>
              CSS filters allow you to visually manipulate an element by
              changing pixels' colors, blurring, brightening, or darkening
              images, among other effects. Here are the commonly used filter
              functions:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>blur()</HL>: Applies a Gaussian blur to the image. The
                  parameter is the radius of the blur.
                </li>
                <li>
                  <HL>brightness()</HL>: Adjusts the brightness of the input. A
                  value of 0% will create an image that is completely black. A
                  value of 100% leaves the input unchanged.
                </li>
                <li>
                  <HL>contrast()</HL>: Adjusts the contrast of the input. A
                  value of 0% will create an image that is completely black. A
                  value of 100% leaves the input unchanged.
                </li>
                <li>
                  <HL>grayscale()</HL>: Converts the input image to grayscale. A
                  value of 100% is completely grayscale. A value of 0% leaves
                  the input unchanged.
                </li>
                <li>
                  <HL>hue-rotate()</HL>: Applies a hue rotation on the image.
                  The value defines the number of degrees around the color
                  circle the input samples will be adjusted.
                </li>
                <li>
                  <HL>invert()</HL>: Inverts the samples in the input image.
                </li>
                <li>
                  <HL>opacity()</HL>: Applies transparency to the input image. A
                  value of 0% is completely transparent. A value of 100% leaves
                  the input unchanged.
                </li>
                <li>
                  <HL>saturate()</HL>: Saturates the input image. A value of 0%
                  is completely un-saturated. A value of 100% leaves the input
                  unchanged.
                </li>
                <li>
                  <HL>sepia()</HL>: Converts the input image to sepia. A value
                  of 100% is completely sepia. A value of 0% leaves the input
                  unchanged.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                Remember, the ease of using CSS with Chakra UI's style props
                allows you to create and customize as many filter effects as you
                need. You can create reusable components with these effects to
                make your development process smoother and your user interface
                more engaging.
              </BasicText>
              <br />
              <BasicText>
                Here is how you can apply these CSS filters to an image using
                Chakra UI:
              </BasicText>
              <Highlighter>{`import { Box } from "@chakra-ui/react";

<Box
  as="img"
  src="image.jpg"
  alt="Sample Image"
  filter="blur(5px) brightness(80%)"
/>
`}</Highlighter>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SectionHeading>Filtered Images</SectionHeading>
              <SingleExample>
                <Filters />
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SectionHeading>Filtered Images as Backdrops</SectionHeading>
              <SingleExample>
                <BasicText>
                  🚨 backdrop-filter is not compatible with Firefox. Although
                  users have the option to enable it, it is advisable to create
                  a component that appears visually appealing both with and
                  without utilizing this property.
                </BasicText>
                <BackdropFilters />
                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <b>Interactive Hover Effect</b>: you know that you can create
            interactive hover effects using CSS filters with Chakra UI. Here's
            an example of how you could make an image grayscale by default and
            then revert it to full color when a user hovers over it.
            <MyFlex>
              <FilterTipOne />
            </MyFlex>
          </GridBoxOne>
          <GridBoxTwo>
            <b>Combining Multiple Filters</b>: you can combine multiple filters
            to achieve unique effects. For example, you can create a dreamy,
            vintage effect by combining blur, sepia, and contrast
            <MyFlex>
              <FilterTipTwo />
            </MyFlex>
          </GridBoxTwo>
          <GridBoxThree>
            <b>Animating Filters</b>: you can animate filter effects using CSS{" "}
            <b>transitions</b> and <b>keyframes</b>. This can be used to create
            engaging effects such as a pulsating brightness effect. In following
            example, the brightness of the image will increase to 150% halfway
            through the animation, then return to 100% by the end of the
            animation. The animation will repeat indefinitely due to the{" "}
            <b>infinite</b> keyword. The duration of the animation is set to 3
            seconds with the <b>3s</b> value.
            <MyFlex>
              <FilterTipThree />
            </MyFlex>
            <Highlighter>{`const pulse = keyframes
  0% { filter: brightness(100%); }
  50% { filter: brightness(150%); }
  100% { filter: brightness(100%); };
        
<Box
  animation={
    '{pulse} 3s infinite'}
>`}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

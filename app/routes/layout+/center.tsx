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
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import {
  CenterOne,
  CenterTwo,
  CenterThree,
} from "~/components/layout/centerComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Layout from "~/mardownExamples/layout/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code, VStack } from "@chakra-ui/react";
import {
  CenterFunctionFive,
  CenterFunctionFour,
  CenterFunctionSix,
  CenterFunctionSeven,
} from "~/components/layout/centerFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/center" size={28}>
        Center
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Center</Mono> component in Chakra UI is a powerful
              layout component that allows you to effortlessly center its child
              elements, thus conveniently providing a simple and efficient way
              to achieve centralized alignment in your UI designs. It is a
              wrapper component that accepts a single child element and centers
              it within the parent container.
            </SectionDescription>
            <BasicText></BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Center</HL>: centers its child element based on the
                  specified width and height. It ensures that the child is
                  perfectly aligned both horizontally and vertically within the{" "}
                  <Mono>Center</Mono> component
                </li>
                <li>
                  <HL>Square</HL>: a simplified version of the{" "}
                  <Mono>Center</Mono> component that centers its child element
                  based on a specified <Mono>size</Mono>, which represents both
                  the width and height of the square. It ensures that the child
                  is perfectly centered within the square shape.
                </li>

                <li>
                  <HL>Circle</HL>: a variation of the Square component, but with
                  a rounded border-radius, creating a circular shape. It centers
                  its child element within the circular shape.
                </li>
                <li>
                  <HL>AbsoluteCenter</HL>: centers its child element relative to
                  its parent's dimensions. It uses the "position: absolute"
                  strategy to achieve the desired centering effect. You can
                  specify the axis (both, horizontal, or vertical) to control
                  the direction of centering.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  Center, 
  Square, 
  Circle } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <CenterOne />
                <ModalCode>
                  <Highlighter>{`<Center
  h="150px"
  w="100%"
>
  The Center.
</Center>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CenterTwo />
                <ModalCode>
                  <Highlighter>{`<VStack>
  <Circle size="80px">
    <SunIcon boxSize={33} />
  </Circle>
  <Square size="80px">
    <SunIcon boxSize={33} />
  </Square>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CenterThree />
                <ModalCode>
                  <Highlighter>{`<Box position="relative" h="100px">
  <AbsoluteCenter axis="both">
    <SunIcon />
  </AbsoluteCenter>
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Animated Squares</b>: In this example, we explore using the
              Chakra UI <b>Center</b> and <b>Square</b> components to create an
              interactive animation effect. This type of animation could be the
              basis for many different types of UI interactions, such as a
              loading screen or a button animation.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <VStack w="100%" spacing={4}></VStack>
                <CenterFunctionFour />
                <CenterFunctionFive />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H04 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Animated Loading Circle</b>: You can create an animated loading
              circle using the <b>Circle</b> component. This can be a visually
              appealing way to indicate a loading state to users. In this
              example, we use the <b>Circle</b> component to create a loading
              circle that spins continuously with the flower icon inside. This
              could serve as a fancier version of the traditional loading
              spinner.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <CenterFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H05 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Button Highlight</b>: In this example, we use the <b>Button</b>{" "}
              component to create a button that is highlighted by a{" "}
              <b>Circle</b> component when the user hovers over it. This is a
              simple way to add a bit of interactivity to your UI designs. The{" "}
              <b>borderRadius</b> on the <b>Circle</b> component is set at{" "}
              <Code>{`borderRadius="50% / 30% 70%"`}</Code> to create a bit and
              ellipse shape. And the opacity of its color is set at{" "}
              <Code>{`opacity="0.7"`}</Code> to create a slightly more subtle
              highlight effect.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <CenterFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H06 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

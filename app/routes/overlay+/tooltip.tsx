import { Box, VStack } from "@chakra-ui/react";
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
  ViewCode,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Overlay from "~/mardownExamples/overlay/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  TooltipFive,
  TooltipFour,
  TooltipOne,
  TooltipSeven,
  TooltipSix,
  TooltipThree,
  TooltipTwo,
} from "~/components/overlay/tooltipComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/tooltip" size={28}>
        Tooltip
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Tooltip</Mono> component is a text label that appears
              when the user hovers over, focuses on, or touches an element. It's
              used to display information about an element when the element
              receives keyboard focus or the mouse hovers over it. Tooltips are
              helpful for new users who are getting familiar with your product's
              interface.
            </SectionDescription>
            <BasicText>
              The <Mono>Tooltip</Mono> component itself is the only requirement
              for creating a tooltip in Chakra UI, but it's often wrapped around
              the component that you want to trigger the tooltip.
            </BasicText>
            <BasicText>
              These are some of the properties that you can use with{" "}
              <Mono>Tooltip</Mono>:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>label</HL>: The text that is displayed when the tooltip
                  appears. This property is required.
                </li>
                <li>
                  <HL>openDelay</HL> and <HL>closeDelay</HL>: These properties
                  control the delay (in milliseconds) before the tooltip shows
                  and hides, respectively.
                </li>
                <li>
                  <HL>placement</HL>: This property changes the position of the
                  tooltip relative to the children. The possible values are
                  "top", "bottom", "left", "right", and combinations like
                  "top-start", "top-end", etc.
                </li>
                <li>
                  <HL>hasArrow</HL>: This boolean property controls whether the
                  tooltip has an arrow pointing to the children.
                </li>
                <li>
                  <HL>isDisabled</HL>: This boolean property allows you to
                  control if the tooltip will be shown.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  This component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Tooltip } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TooltipOne />
                <Overlay.E28 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipTwo />
                <Overlay.E29 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipThree />
                <Overlay.E30 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipFour />
                <Overlay.E31 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipFive />
                <Overlay.E32 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipSix />
                <Overlay.E33 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipSeven />
                <Overlay.E34 />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ViewCode>
              <Highlighter>{``}</Highlighter>
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

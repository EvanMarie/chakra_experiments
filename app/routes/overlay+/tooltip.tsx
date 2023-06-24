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
import { TooltipFormValidityCheck } from "~/components/overlay/tooltipFunctions";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

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
                <MiniCode>{`import { Tooltip } from '@chakra-ui/react'`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TooltipOne />
                <ModalCode>
                  <Overlay.E28 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipTwo />
                <ModalCode>
                  <Overlay.E29 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipThree />
                <ModalCode>
                  <Overlay.E30 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipFour />
                <ModalCode>
                  <Overlay.E31 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipFive />
                <ModalCode>
                  <Overlay.E32 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipSix />
                <ModalCode>
                  <Overlay.E33 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TooltipSeven />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Tooltip with Input Form:</b> At the core of this component are
              two FormControl sections, each composed of a FormLabel and an
              Input field. Chakra UI's FormControl provides a streamlined way to
              manage related form elements and their respective labels, ensuring
              a consistent layout and behavior. The input fields leverage Chakra
              UI's design system, including the bg="white" style attribute, to
              create visually appealing text inputs for users.
            </HighlightText>
            <MyFlex>
              <TooltipFormValidityCheck />
            </MyFlex>
            <ModalCode>
              <Overlay.H16 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex>
              {" "}
              {/* <MiniCode>{`import {Tooltip} from '@chakra-ui/react'`}</MiniCode> */}
            </MyFlex>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ModalCode></ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

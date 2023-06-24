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
import {
  DelayedTooltipExample,
  DynamicTooltipExample,
  TooltipFormValidityCheck,
} from "~/components/overlay/tooltipFunctions";
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
              <b>Tooltip with Input Form:</b> The following example contains two
              FormControl sections, each composed of a FormLabel and an Input
              field. Chakra UI's <b>FormControl</b> provides a streamlined way
              to manage related form elements and their respective labels,
              ensuring a consistent layout and behavior. The Tooltip wraps
              around a Button element, providing extra information to the user
              when they hover over or focus on the button. The tooltip's text is
              dynamically sourced from the tooltipLabel variable, demonstrating
              the ease of injecting dynamic content into Chakra UI components.
            </HighlightText>
            <MyFlex>
              <TooltipFormValidityCheck />
            </MyFlex>
            <ModalCode>
              <Overlay.H16 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Dynamic Tooltip</b>: In this example, the tooltip's content
              changes based on the current state of the component, which makes
              for a responsive and interactive user experience. Here, the
              <b>Tooltip</b> wraps around a Button element, and the tooltip's
              label changes depending on whether the button has been clicked or
              not. We use the <b>useBoolean</b> hook from Chakra UI to manage
              the button's clicked state, and the <b>handleClick</b> function
              toggles this state. The tooltip's label then displays different
              text based on this state, providing a dynamic tooltip experience.
            </HighlightText>
            <MyFlex>
              <DynamicTooltipExample />
            </MyFlex>
            <ModalCode>
              <Overlay.H17 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Using Tooltip Delay</b>: This example shows a tooltip that only
              appears after a certain delay, which can be used to prevent
              accidental reveals of tooltips. In this instance, the{" "}
              <b>Tooltip</b>
              component wraps around a <b>Button</b> and uses the{" "}
              <b>openDelay</b> property to specify a delay of 1000 milliseconds
              (or 1 second) before the tooltip will appear. This feature is
              useful when you want to prevent tooltips from appearing instantly,
              such as when a user accidentally hovers over a button. The
              openDelay property showcases Chakra UI's flexibility and attention
              to enhancing user experience.
            </HighlightText>
            <MyFlex>
              <DelayedTooltipExample />
            </MyFlex>
            <ModalCode>
              <Overlay.H18 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

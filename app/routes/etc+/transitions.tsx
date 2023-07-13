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

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as ETC from "~/mardownExamples/etc/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  TransitionsOne,
  TransitionsTwo,
  TransitionsThree,
  TransitionsFour,
  TransitionsFive,
} from "~/components/etc/transitionsComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel
        link="https://chakra-ui.com/docs/components/transitions"
        size={28}
      >
        Transitions
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI provides a set of transition components that can be
              used to create smooth and visually appealing transitions in your
              React applications. These components include <Mono>Fade</Mono>,{" "}
              <Mono>ScaleFade</Mono>, <Mono>Slide</Mono>, <Mono>SlideFade</Mono>
              , and <Mono>Collapse</Mono>.
            </SectionDescription>
            <BasicText>
              These transition components are are built on top of the popular
              animation library called <Mono>Framer Motion</Mono>, which is a
              powerful and flexible animation library for React that allows you
              to create smooth and interactive animations with ease. It provides
              a wide range of features and options for creating animations,
              including transitions, keyframes, and gesture-based animations.
            </BasicText>
            <BasicText>
              Each transition component corresponds to a specific animation
              effect and provides a set of props that can be used to control and
              customize the animation behavior. These props are derived from the
              props available in <Mono>Framer Motion</Mono>, allowing you to
              take advantage of the rich animation capabilities provided.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Fade</HL>: creates a smooth fading effect when
                  transitioning a component in or out of view by gradually
                  changes the opacity of the component. The <Mono>in</Mono> prop
                  is used to control the visibility of the component, and the{" "}
                  <Mono>unmountOnExit</Mono> prop can be used to unmount the
                  component when it is not visible.
                </li>
                <li>
                  <HL>ScaleFade</HL>: combines scaling and fading effects during
                  the transition. It allows you to control the initial scale of
                  the component using the <Mono>initialScale</Mono> prop and
                  smoothly fades in or out based on the in prop.
                </li>
                <li>
                  <HL>Slide</HL>: enables you to create sliding animations for
                  components by specifying the direction of the slide animation
                  using the direction prop, which can be set to 'bottom', 'top',
                  'left', or 'right'. The component smoothly slides in or out
                  based on the in prop.
                </li>
                <li>
                  <HL>SlideFade</HL>: combines sliding and fading effects. It
                  smoothly slides the component in or out based on the in prop
                  and applies a fade effect simultaneously. You can customize
                  the slide animation's offset in the y-axis direction using the{" "}
                  <Mono>offsetY</Mono> prop.
                </li>
                <li>
                  <HL>Collapse</HL>: used to create expandable and collapsible
                  regions of content with a smooth animation. It allows you to
                  toggle the visibility of the content using the <Mono>in</Mono>{" "}
                  prop, providing a seamless expand and collapse effect. The{" "}
                  <Mono>animateOpacity</Mono> prop enables animating the opacity
                  during the transition.
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
    Fade, 
    ScaleFade, 
    Slide, 
    SlideFade, 
    Collapse } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TransitionsOne />
                <ModalCode>
                  <Highlighter>{``}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TransitionsTwo />
                <ModalCode>
                  <Highlighter>{``}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TransitionsThree />
                <ModalCode>
                  <Highlighter>{``}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TransitionsFour />
                <ModalCode>
                  <Highlighter>{``}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TransitionsFive />
                <ModalCode>
                  <Highlighter>{``}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

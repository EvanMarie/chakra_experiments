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
import * as Form from "~/mardownExamples/form/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  RangeSliderFive,
  RangeSliderFour,
  RangeSliderOne,
  RangeSliderSeven,
  RangeSliderSix,
  RangeSliderThree,
  RangeSliderTwo,
} from "~/components/form/rangeSliderComponents";
import {
  AlphabetRangeSlider,
  GradientBox,
  NumberRangeSlider,
} from "~/components/form/rangeSliderFunctions";
import { Link } from "@remix-run/react";

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
        link="https://chakra-ui.com/docs/components/range-slider"
        size={28}
      >
        Range Slider
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI <Mono>RangeSlider</Mono> component is a versatile
              user interface element that allows users to select a range of
              values within a specified minimum and maximum range. It has two
              thumb sliders that can be dragged signifying the high and low end
              to select a range of values.
            </SectionDescription>
            <BasicText>
              The <Mono>RangeSlider</Mono> provides a visually appealing and
              interactive way to handle input selection for numerical ranges.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>RangeSlider</HL>: the main wrapper component that houses
                  all other subcomponents. It provides the overall structure and
                  behavior for the range selection functionality.
                </li>
                <li>
                  <HL>RangeSliderTrack</HL>: the track or bar on which the range
                  selection occurs. It visually represents the full range of
                  values and provides a visual indicator of the selected range.
                </li>
                <li>
                  <HL>RangeSliderFilledTrack</HL>: the portion of the track that
                  is filled, indicating the selected range. It visually
                  highlights the selected range within the overall track.
                </li>
                <li>
                  <HL>RangeSliderThumb</HL>: the draggable handle(s) that users
                  can interact with to select the range. It can be customized to
                  change its appearance and style.
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
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <RangeSliderOne />
                <ModalCode>
                  <Form.E36 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RangeSliderTwo />
                <ModalCode>
                  <Form.E37 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RangeSliderThree />
                <ModalCode>
                  <Form.E38 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RangeSliderFour />
                <ModalCode>
                  <Form.E39 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RangeSliderFive />
                <ModalCode>
                  <Form.E40 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RangeSliderSix />
                <ModalCode>
                  <Form.E41 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RangeSliderSeven />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Filtering Numerical Data</b>: Range sliders are very useful for
              filtering data. For example, if we start simple, we can filter
              numerical data that consists simply of a range of values. By using
              the slider below, you can filter the numerical values to those
              only within the range you have specified.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <NumberRangeSlider />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H23 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Name Filtering</b>: This example uses the{" "}
              <Link
                to="https://jsonplaceholder.typicode.com/users"
                target="_blank"
              >
                JSON Placeholder API
              </Link>{" "}
              to get dummy data for a list of imaginary users. Our range slider
              will filter these users by the first letter of their last names
              and present the range of users based on the range selected within
              the slider.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <AlphabetRangeSlider />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H22 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Gradient Ranges</b>: The following example is a fun and very
              interactive one. It shows how the range slider component can be
              used to determine the distribution of colors in a gradient. There
              are three selector menus from which you can choose the colors for
              the gradient. And the slider allows you to decide how to
              distribute each color along the spectrum of the gradient.{" "}
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                {" "}
                <GradientBox />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H24 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

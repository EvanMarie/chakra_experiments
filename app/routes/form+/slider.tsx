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
  SliderFive,
  SliderFour,
  SliderOne,
  SliderSeven,
  SliderSix,
  SliderThree,
  SliderTwo,
} from "~/components/form/sliderComponents";
import {
  ColorPickerSlider,
  ImageGallerySlider,
  VolumeControlSlider,
} from "~/components/form/sliderFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/slider" size={28}>
        Slider
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI <Mono>Slider</Mono> component is a versatile tool
              that allows users to make selections from a range of values. It
              provides a set of subcomponents that work together to create a
              fully functional slider interface.
            </SectionDescription>
            <BasicText>
              Sliders are particularly useful for adjusting settings where there
              is a range of values to choose from, such as volume controls,
              brightness controls, or applying image filters like contrast or
              saturation. By dragging the slider handle, users can easily and
              intuitively set the desired value within the available range.
            </BasicText>
            <BasicText>
              Let's take a closer look at each subcomponent and explore the
              various functionalities they offer.
            </BasicText>

            <BulletBox>
              <ul>
                <li>
                  <HL>Slider</HL>: serves as the wrapper that provides context
                  and functionality for all the other subcomponents. It acts as
                  the parent container for the slider interface.
                </li>
                <li>
                  <HL>SliderTrack</HL>: represents the empty part of the slider
                  that shows the track. It acts as a container for the
                  SliderFilledTrack component.
                </li>
                <li>
                  <HL>SliderFilledTrack</HL>: represents the filled part of the
                  slider, indicating the selected value. It is a child component
                  of <Mono>SliderTrack</Mono>.
                </li>
                <li>
                  <HL>SliderThumb</HL>: the handle used to change the slider
                  value. Users can click and drag the thumb along the track to
                  select a specific value. It is a child component of{" "}
                  <Mono>Slider</Mono>.
                </li>
                <li>
                  <HL>SliderMark</HL>: represents labels or marks that show
                  names for specific slider values. It can be used to provide
                  additional context or visual cues to the user.
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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SliderOne />
                <ModalCode>
                  <Highlighter>{`<Slider 
  aria-label="basic_slider" 
  defaultValue={88}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SliderTwo />
                <ModalCode>
                  <Form.E42 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SliderThree />
                <ModalCode>
                  <Highlighter>{`<Slider
  aria-label="vertical-slider"
  defaultValue={88}
  orientation="vertical"
  minH="200px"
>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SliderFour />
                <ModalCode>
                  <Highlighter>{`<Slider 
  aria-label="custom-slider" 
  defaultValue={88}>
  <SliderTrack bg="mainText">
    <SliderFilledTrack bg="accent_2" />
  </SliderTrack>
  <SliderThumb boxSize={6} bg="sidebarBackground">
    <Box color="accent_1" as={BsSliders} />
  </SliderThumb>
</Slider>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SliderFive />
                <ModalCode>
                  <Highlighter>{`<Slider 
  defaultValue={88} 
  min={0} 
  max={300} 
  step={30}>
  <SliderTrack bg="accent_1">
    <Box position="relative" right={10} />
    <SliderFilledTrack bg="accent_2" />
  </SliderTrack>
  <SliderThumb boxSize={6} />
</Slider>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SliderSix />
                <ModalCode>
                  <Form.E43 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SliderSeven />
                <ModalCode>
                  <Form.E44 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Image Gallery Slider</b>: You can use the <b>Slider</b>{" "}
              component to create an interactive image gallery slider. Instead
              of using the default <b>SliderThumb</b>, you can customize it to
              display thumbnail images. When users drag the slider, the main
              image updates to correspond with the selected thumbnail. This
              provides a visually engaging way to navigate through a collection
              of images.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <ImageGallerySlider />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H28 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Color Picker Slider</b>: You can use the <b>Slider</b>{" "}
              component to create a color picker. By mapping the <b>Slider</b>{" "}
              value to the color's hue, you can allow users to slide through a
              range of colors and dynamically update a visual representation of
              the selected color.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <ColorPickerSlider />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H29 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Volume Control Slider</b>: You can use the <b>Slider</b>{" "}
              component to create a sound volume control. By associating the{" "}
              <b>Slider</b> value with the volume level, you can allow users to
              adjust the volume of an audio or video player by sliding the
              control.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <VolumeControlSlider />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H30 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

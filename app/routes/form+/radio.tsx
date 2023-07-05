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
import { Code } from "@chakra-ui/react";
import {
  RadioFive,
  RadioFour,
  RadioOne,
  RadioSeven,
  RadioSix,
  RadioThree,
  RadioTwo,
} from "~/components/form/radioComponents";
import {
  RadioCarousel,
  EmojiRating,
  CustomRadioToggles,
} from "~/components/form/radioFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/radio" size={28}>
        Radio
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI <Mono>Radio</Mono> component is a versatile and
              accessible form component used for selecting options from a
              predefined set and for handling selection inputs in forms. It
              provides a consistent and customizable radio button interface,
              enhancing user experience and making form inputs more intuitive.
            </SectionDescription>
            <BasicText>
              You can use additional components such as <Mono>FormControl</Mono>{" "}
              , <Mono>FormLabel</Mono>, and <Mono>FormHelperText</Mono> to
              further enhance your form inputs. These components work seamlessly
              with the Radio component and offer functionalities like form
              validation, labeling, and accessibility enhancements.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Radio</HL>: represents an individual radio button option.
                  It renders an accessible <Code>{`<input type="radio">`}</Code>{" "}
                  element and provides various props and customization options
                  to control its appearance and behavior.
                </li>
                <li>
                  <HL>RadioGroup</HL>: enables you to group multiple{" "}
                  <Mono>Radio</Mono> buttons together, ensuring that only one
                  option can be selected at a time. It manages the state of the
                  selected <Mono>Radio</Mono> button within the group.
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
  Radio, 
  RadioGroup } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <RadioOne />
                <ModalCode>
                  <Form.E29 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RadioTwo />
                <ModalCode>
                  <Form.E30 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RadioThree />
                <ModalCode>
                  <Form.E31 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RadioFour />
                <ModalCode>
                  <Form.E32 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RadioFive />
                <ModalCode>
                  <Form.E33 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RadioSix />
                <ModalCode>
                  <Form.E34 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <RadioSeven />
                <ModalCode>
                  <Form.E35 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Emoji Ratings</b>: You can use the <b>Radio</b> component for
              emoji-based or otherwise stylized ratings. Instead of traditional
              radio labels, you can display emojis representing different
              ratings and allow users to select their preferred rating.
            </HighlightText>
            <HighlightExample h="225px">
              <MyFlex>
                <EmojiRating />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H20 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Custom Radio Toggles</b>: You can create custom radio toggles
              using the <b>Radio</b> component and style the radios to appear as
              toggle buttons to provide a unique user interface for selection.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <CustomRadioToggles />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H21 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Radio Carousel</b>: You can also use the Radio component to
              build a carousel with radio buttons. Each radio button represents
              a slide, and users can navigate through the carousel by selecting
              different radio buttons.
            </HighlightText>
            <HighlightExample h="325px">
              <MyFlex>
                <RadioCarousel />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H19 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

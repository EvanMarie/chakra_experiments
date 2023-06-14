import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono, colors } from "~/styles/DesignComponents";

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
  SingleExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#borders">
        Name
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <BasicText color={colors.mainAccent3}>Intro</BasicText>
            <BulletBox>
              <BasicText>Describe the Bullets:</BasicText>
              <ul>
                <li>
                  <HL></HL>:
                </li>
                <li>
                  <HL></HL>:
                </li>
                <li>
                  <HL></HL>:
                </li>
                <li>
                  <HL></HL>:
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>Some Description</BasicText>
              <Highlighter>{`Some Example`}</Highlighter>

              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import this:</BasicText>
                <Highlighter>{`import { Something } from "Somewhere";`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>Tip</GridBoxOne>
          <GridBoxTwo>Tip</GridBoxTwo>
          <GridBoxThree>Tip</GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

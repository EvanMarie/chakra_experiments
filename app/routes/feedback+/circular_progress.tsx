import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  VStack,
} from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  CollapsibleExample,
  CompWithLabel,
  // Mono,
  // Flex,
  // Text,
  HL,
} from "~/styles/DesignComponents";

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
  ExampleContainer,
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
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        Circular Progress
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI Circular Progress component offers a visually
              appealing way to represent an ongoing operation, where the
              completion status is known as a percentage. It can be used for
              processes such as file uploads, system checks, or any asynchronous
              task that requires time to complete.
            </SectionDescription>
            <BasicText>
              The component consists of a circular track, partially filled to
              signify the progress of the operation. Aspects like size, color,
              and thickness of both the track and progress indicator can be
              customized to align with your application's design aesthetic.
            </BasicText>
            <BasicText>
              A critical attribute of the Circular Progress component is the
              'value' property. This numerical property, ranging between 0 and
              100, indicates the current progress. If the value isn't provided,
              the circular progress will rotate continuously, signifying an
              ongoing operation with an unknown completion time.
            </BasicText>
            <BasicText>
              Like all Chakra UI components, the Circular Progress component is
              designed with accessibility in mind, featuring appropriate ARIA
              roles and attributes. These attributes automatically communicate
              the progress state (determinate or indeterminate) to assistive
              technologies, ensuring the component aids in creating inclusive
              web experiences.
            </BasicText>

            <BulletBox>
              <ul>
                <li>
                  <HL>Determinate progress</HL>: This mode colorfully fills the
                  circular track as the indicator progresses from 0 to 360
                  degrees.
                </li>
                <li>
                  <HL>Indeterminate progress</HL>: In this mode, the indicator
                  expands and contracts while revolving around the circular
                  track.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import these components:</BasicText>
                <Highlighter>{`import { 
  CircularProgress, 
  CircularProgressLabel } from "@chakra-ui/react";`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <VStack spacing={3} align="center" overflow="hidden" w="100%">
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress key={1} value={80} />,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={80} />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
              </SectionContainer>
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress key={1} value={30} size="120px" />,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={30} size="120px" />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
              </SectionContainer>
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      key={1}
                      value={59}
                      size="100px"
                      thickness="4px"
                    />,
                    <Highlighter
                      key={2}
                    >{` <CircularProgress value={59} size="100px" thickness="4px" />`}</Highlighter>,
                  ]}
                </CollapsibleExample>
              </SectionContainer>{" "}
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      key={1}
                      value={30}
                      color="orange.400"
                      thickness="12px"
                    />,
                    <Highlighter key={2}>
                      {`<CircularProgress value={30} 
    color="orange.400" thickness="12px" />`}
                    </Highlighter>,
                  ]}
                </CollapsibleExample>
              </SectionContainer>{" "}
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <Box key={1}>
                      <CircularProgress value={40} color="green.400">
                        <CircularProgressLabel>40%</CircularProgressLabel>
                      </CircularProgress>
                    </Box>,
                    <Highlighter
                      key={2}
                    >{`<CircularProgress value={40} color="green.400">
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress> `}</Highlighter>,
                  ]}
                </CollapsibleExample>
              </SectionContainer>{" "}
              <SectionContainer>
                <CollapsibleExample fontSize={15}>
                  {[
                    <CircularProgress
                      key={1}
                      isIndeterminate
                      color="green.300"
                    />,
                    <Highlighter key={2}>
                      {` <CircularProgress isIndeterminate color="green.300" />`}
                    </Highlighter>,
                  ]}
                </CollapsibleExample>
              </SectionContainer>
            </VStack>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            Highlight coming soon!
            <MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            Highlight coming soon!<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxTwo>
          <GridBoxThree>
            Highlight coming soon!<MyFlex></MyFlex>
            <Highlighter>{``}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

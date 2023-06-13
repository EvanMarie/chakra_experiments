import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  // Mono,
  // Flex,
  // Text,
  HL,
  MyDivider,
  colors,
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
        ComponentName:
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <BasicText color={colors.mainAccent3}>
              ⦾ Some statement about this component
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Component</HL>: Description
                </li>
                <li>
                  <HL>Component</HL>: Description
                </li>
                <li>
                  <HL>Component</HL>: Description
                </li>
                <li>
                  <HL>Component</HL>: Description
                </li>
                <li>
                  <HL>Component</HL>: Description
                </li>
                <li>
                  <HL>Component</HL>: Description
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>Some description</BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{``}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <VStack>
              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />

              <VStack w="100%" spacing={0}>
                <Box></Box>
                <Highlighter>{``}</Highlighter>
                <BasicText></BasicText>
              </VStack>
              <MyDivider mt={0} mb={0} />
            </VStack>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>Highlight coming soon!</GridBoxOne>
          <GridBoxTwo>Highlight coming soon!</GridBoxTwo>
          <GridBoxThree>Highlight coming soon!</GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}
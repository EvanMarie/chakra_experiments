import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  Mono,
  HL,
  MyDivider,
  MyLabel,
  SectionContainer,
  colors,
  ImportBox,
} from "~/styles/reusableChakraComponents";
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
        Borders:
      </MyLabel>
      <DescriptionBox>
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
      </DescriptionBox>
      {/* COMPONENT EXAMPLES */}
      <ExampleBox>
        <VStack w="100%" spacing={0}>
          <Box></Box>
          <Highlighter>{``}</Highlighter>
          <BasicText></BasicText>
        </VStack>
        <MyDivider mt={0} mb={0} />

        <SectionContainer mt={0}>COMPONENT EXAMPLE ONE</SectionContainer>
        <Highlighter>{``}</Highlighter>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <Highlighter>{``}</Highlighter>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <Highlighter>{``}</Highlighter>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <Highlighter>{``}</Highlighter>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
        <Highlighter>{``}</Highlighter>
      </ExampleBox>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

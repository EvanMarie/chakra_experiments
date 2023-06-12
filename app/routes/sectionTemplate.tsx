import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  ComponentHeadingsBar,
  FeedbackComponentBar,
  PageHeader,
} from "~/components/app_components/menuBars";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  HL,
  MyLabel,
  SectionContainer,
  colors,
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
      <VStack>
        <ComponentHeadingsBar />
        <PageHeader title="Chakra Section Components" href="/chakra_section" />

        <FeedbackComponentBar />
      </VStack>
      <SectionContainer>
        <BasicText color={colors.mainAccent3}>Text Intro</BasicText>
        <FlexibleBox bg={colors.myblue} p={4}>
          <Box>
            <BasicText>Text</BasicText>
          </Box>
          <Box p={4}>
            <BasicText>Text</BasicText>
          </Box>
        </FlexibleBox>
      </SectionContainer>
      {/* ********************************************************************* */}
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <Box p={3}>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2} mb={0}>
          <BasicText color={colors.mainAccent3}>
            ⦾ Some statement about this component
          </BasicText>
          <Box paddingX={7} paddingY={3}>
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
          </Box>
          <Box paddingX={4} paddingY={2}>
            <BasicText>Some description</BasicText>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              <Highlighter>{``}</Highlighter>
            </SectionContainer>
          </Box>
        </SectionContainer>

        {/* COMPONENT EXAMPLES */}
        <Box>
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
        </Box>
      </Box>
      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

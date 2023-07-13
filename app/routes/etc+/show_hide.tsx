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
import { Box, Center } from "@chakra-ui/react";
import { ShowHideOne, ShowHideTwo } from "~/components/etc/showHideComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/show-hide" size={28}>
        Show / Hide
      </MyLabel>
      <Center w="100%">
        <Box maxWidth="900px">
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Show and Hide components in Chakra UI are wrapper components
              that allow you to conditionally render or hide child elements
              based on media queries. These components provide a convenient way
              to control the visibility of content based on the screen size or
              other custom queries.
            </SectionDescription>

            <DescriptionBox>
              <BasicText>
                Both the <Mono>Show</Mono> and <Mono>Hide</Mono> components
                support the <Mono>breakpoint</Mono> prop, which allows you to
                pass a custom query for conditional rendering. You can use any
                valid CSS media query syntax as the value for the{" "}
                <Mono>breakpoint</Mono> prop.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Show, Hide } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <ShowHideOne />
                <ModalCode>
                  <ETC.E10 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ShowHideTwo />
                <ModalCode>
                  <ETC.E11 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </Box>
      </Center>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

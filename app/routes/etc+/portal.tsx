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
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as ETC from "~/mardownExamples/etc/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  PortalOne,
  PortalTwo,
  PortalThree,
  PortalFour,
} from "~/components/etc/portalComponents";
import { Box, Center } from "@chakra-ui/react";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/portal" size={28}>
        Portal
      </MyLabel>
      <Center w="100%">
        <Box maxWidth="900px">
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Portal</Mono> component is a powerful tool for
              rendering components outside of the current DOM hierarchy. The{" "}
              <Mono>Portal</Mono> allows you to create a separate DOM hierarchy,
              making it useful for scenarios like popovers, dropdowns, and
              modals.
            </SectionDescription>
            <BasicText>
              The <Mono>Portal</Mono> component in Chakra UI enables the
              rendering of React components or elements at the end of the
              document.body. This functionality ensures that the rendered
              content exists in a different DOM hierarchy, preventing parent
              styles from clipping or hiding the content. Additionally, the
              <Mono>Portal</Mono> component supports nested portals, which
              enables the creation of complex nested modals, popovers, and more.
            </BasicText>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Portal</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Portal } from '@chakra-ui/react';`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <PortalOne />
                <ModalCode>
                  <Highlighter>{`<Box>
    The portaled text inside will not show up here.
    <Portal>This text is portaled at the end of document.body!</Portal>
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PortalTwo />
                <ModalCode>
                  <ETC.E07 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PortalThree />
                <ModalCode>
                  <ETC.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PortalFour />
                <ModalCode>
                  <ETC.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </Box>
      </Center>

      {/* /* ********************************************************** */}

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

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
import {
  CloseButtonOne,
  CloseButtonTwo,
  CloseButtonThree,
  CloseButtonFour,
  CloseButtonFive,
  CloseButtonSix,
} from "~/components/etc/closeButtonComponents";
import {
  CloseButtonFunctionEight,
  CloseButtonFunctionNine,
  CloseButtonFunctionSeven,
} from "~/components/etc/closeButtonFunctions";
import { VStack } from "@chakra-ui/react";

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
        link="https://chakra-ui.com/docs/components/close-button"
        size={28}
      >
        CloseButton
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>CloseButton</Mono> component in Chakra UI is a
              versatile and essential element used to trigger close
              functionality in various components. It consists of a button
              adorned with a close icon, providing a visually intuitive way for
              users to dismiss or close elements such as modals, alerts, or
              pop-ups.
            </SectionDescription>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>CloseButton</Mono> component can be imported as
                  follows:
                </BasicText>
                <Highlighter>{`import { CloseButton } from '@chakra-ui/react';`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <CloseButtonOne />
                <ModalCode>
                  <ETC.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CloseButtonTwo />
                <ModalCode>
                  <ETC.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CloseButtonThree />
                <ModalCode>
                  <ETC.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CloseButtonFour />
                <ModalCode>
                  <ETC.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CloseButtonFive />
                <ModalCode>
                  <ETC.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CloseButtonSix />
                <ModalCode>
                  <ETC.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Custom Dismissible Notification</b>: You can create your own
              custom dismissible notification with all your unique
              specifications using the <b>CloseButton</b> component. In this
              example, we use Chakra's <b>useDisclosure</b> hook to manage the
              state of the notification. The <b>CloseButton</b> is absolutely
              positioned within a <b>Box</b> component that represents the
              notification.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <CloseButtonFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <ETC.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Custom Sidebar Naviation</b>: You can use the the{" "}
              <b>CloseButton</b> component to create an interactive toggle for a
              sidebar or navigation panel, enabling users to show or hide the
              sidebar with a single click. This provides a smooth and intuitive
              way to manage space on the screen and allows users to focus on the
              main content when needed.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <CloseButtonFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <ETC.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Expanded Image Modal</b>: You can create an interactive image
              overlay using the <b>CloseButton</b> component when you have an
              image gallery and want to provide users with the option to view an
              image in a larger overlay. By combining the <b>CloseButton</b>{" "}
              with a modal component, you can create a visually stunning and
              interactive image overlay that users can close when they're done
              exploring the image.
            </HighlightText>
            <HighlightExample h="100%">
              <VStack w="100%" spacing={3}>
                <CloseButtonFunctionNine imageUrl="https://picsum.photos/id/123/200/300" />
                <CloseButtonFunctionNine imageUrl="https://picsum.photos/id/23/200/300" />
                <CloseButtonFunctionNine imageUrl="https://picsum.photos/id/53//200/300" />
                <CloseButtonFunctionNine imageUrl="https://picsum.photos/id/33/200/300" />
              </VStack>
            </HighlightExample>
            <ModalCode>
              <ETC.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

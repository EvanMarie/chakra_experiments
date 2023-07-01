import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, BlueBold, HL, Mono } from "~/styles/DesignComponents";

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
import { Box, IconButton, Link, Tooltip } from "@chakra-ui/react";
import {
  IconButtonFive,
  IconButtonFour,
  IconButtonOne,
  IconButtonSeven,
  IconButtonSix,
  IconButtonThree,
  IconButtonTwo,
} from "../../components/form/iconButtonsComponents";
import { AddIcon, CheckIcon, InfoIcon } from "@chakra-ui/icons";
import {
  IconButtonFunctionSeven,
  IconButtonFunctionSix,
} from "~/components/form/iconButtonFunctions";

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
        link="https://chakra-ui.com/docs/components/icon-button"
        size={28}
      >
        Icon Button
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>IconButton</Mono> component in the Chakra UI library
              serves to encapsulate an icon within a clickable button interface,
              and the flexibility to adjust the appearance and size of buttoned
              icons is extensive, allowing for a seamless incorporation into
              your application.
            </SectionDescription>
            <BasicText>
              This compact and visually intuitive component is perfect for
              applications that demand streamlined, self-explanatory user
              interfaces. With the <Mono>IconButton</Mono> component, you can
              not only use all of the icons provided by Chakra UI, but you can
              also use any icon from any library, such as{" "}
              <Link
                href="https://react-icons.github.io/react-icons/"
                isExternal
              >
                <BlueBold>React Icons</BlueBold>
              </Link>
              ,{" "}
              <Link href="https://icons.getbootstrap.com/" isExternal>
                <BlueBold>Bootstrap Icons</BlueBold>
              </Link>
              , or{" "}
              <Link
                href="https://material-ui.com/components/material-icons/"
                isExternal
              >
                <BlueBold>Material UI Icons</BlueBold>
              </Link>
              .{" "}
            </BasicText>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  Theis component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { IconButton } from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <IconButtonOne />
                <ModalCode>
                  <Highlighter>{`<IconButton
  colorScheme="cyan"
  aria-label="Start search"
  icon={<SearchIcon />}
/>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <IconButtonTwo />
                <ModalCode>
                  <Form.E11 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <IconButtonThree />
                <ModalCode>
                  <Form.E12 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <IconButtonFour />
                <ModalCode>
                  <Form.E13 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <IconButtonFive />
                <ModalCode>
                  <Form.E15 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <IconButtonSix />
                <ModalCode>
                  <Form.E14 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Icon Transition on Hover</b>: While the <b>IconButton</b>{" "}
              component focuses primarily on the click interaction, you can
              introduce a hover effect that changes the icon. This can provide a
              subtle hint to the user about the button's functionality or simply
              add a dynamic touch to the UI. The following is a button that
              changes from a "plus" to a "check" icon upon hover.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <IconButtonFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H08 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>IconButton as a Toggle Switch</b>: An <b>IconButton</b> can
              also function as a toggle switch, changing the icon to reflect the
              current state. This can be particularly useful for operations like
              "mute/unmute" or "follow/unfollow". Here's an example with a
              mute/unmute functionality.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <IconButtonFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Form.H09 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>IconButton with Tooltip</b>: Enhance an <b>IconButton</b>'s
              accessibility and clarity by attaching a tooltip that provides a
              brief description of its function when hovered over.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                {" "}
                <Tooltip
                  label="More info"
                  aria-label="A tooltip"
                  placement="top"
                >
                  <IconButton aria-label="Information" icon={<InfoIcon />} />
                </Tooltip>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Tooltip 
  label="More info" 
  aria-label="A tooltip" 
  placement="top>
  <IconButton aria-label="Information" icon={<InfoIcon />} />
</Tooltip>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

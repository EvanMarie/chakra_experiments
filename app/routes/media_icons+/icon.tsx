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
  SectionHeading,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Media from "~/mardownExamples/media_icons/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  IconFive,
  IconFour,
  IconOne,
  IconThree,
  IconTwo,
} from "~/components/media_icons/iconComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/icon" size={28}>
        Icon
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Icon</Mono> component in Chakra UI is a versatile and
              highly customizable tool that allows developers to use icons in
              their applications. Icons can aid user comprehension and enhance
              the visual aesthetics of an application by providing context to
              actions or content.
            </SectionDescription>
            <BasicText>
              The <Mono>Icon</Mono> component in Chakra UI can work with SVGs
              (Scalable Vector Graphics), font icons, and even CSS-in-JS icons.
              SVGs are recommended due to their scalability and customization
              options. Chakra UI uses the <Mono>Box</Mono> component as a base
              for the <Mono>Icon</Mono> component, which means you can apply all
              the style props you would to a <Mono>Box</Mono> component.
            </BasicText>
            <BasicText>
              Here are the common props used with the Icon component:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>as</HL>: Specifies the icon to be used. You can use
                  Chakra's in-built icons, imported icons from other libraries,
                  or custom SVG icons.
                </li>
                <li>
                  <HL>boxSize</HL>: The size of the icon. This determines both
                  the height and width of the icon.
                </li>
                <li>
                  <HL>color</HL>: The color of the icon.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                Beyond using pre-existing icons, you can also create custom
                icons by leveraging SVGs. Chakra UI provides helper functions
                and components to create consistent, theme-able, and accessible
                custom icons.
              </BasicText>
              <BasicText>
                Icons are crucial in UI design as they guide users, save space,
                and improve aesthetics. Chakra UI's Icon component, with its
                simplicity and flexibility, makes it easy for developers to
                integrate and manage icons in their applications.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  Icon libraries and components can be installed as follows, and
                  individual icons can be imported as shown in the accompanying
                  code.
                </BasicText>
                <BasicText>
                  Chakra reminds you to avoid passing <Mono>onClick</Mono>{" "}
                  handlers to icon components and rather to use the{" "}
                  <Mono>IconButton</Mono> component when you need a clickable
                  icon.
                </BasicText>
                <Highlighter>{`npm i @chakra-ui/icons
npm i react-icons`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <IconOne />
            <IconTwo />
            <IconThree />
            <IconFour />
            <IconFive />
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <MyFlex></MyFlex>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

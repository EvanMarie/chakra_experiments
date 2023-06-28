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
import * as Navigation from "~/mardownExamples/navigation/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Code } from "@chakra-ui/react";
import {
  LinkOverlayFour,
  LinkOverlayOne,
  LinkOverlayThree,
  LinkOverlayTwo,
} from "~/components/navigation/linkOverlayComponents";
import {
  GridCard,
  ImageCard,
  NavigationList,
} from "~/components/navigation/linkOverlayFunctions";

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
        link="https://chakra-ui.com/docs/components/link-overlay"
        size={28}
      >
        Link Overlay
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>LinkOverlay</Mono> component in Chakra UI serves a
              specific, yet essential role: it provides a semantic way to wrap
              complex interactive elements such as cards, blog posts, articles,
              etc., in a link.
            </SectionDescription>
            <BasicText>
              The necessity of <Mono>LinkOverlay</Mono> arises from the fact
              that wrapping an entire interactive component or card with an HTML{" "}
              <Code>{`<a>`}</Code> element is not considered semantic. The HTML
              specification clearly states that an <Code>{`<a>`}</Code> element
              cannot contain interactive descendants such as buttons, anchors,
              or input fields.
            </BasicText>
            <BasicText>
              <Mono>LinkOverlay</Mono> tackles this problem by overlaying a
              single link on top of the interactive element or card, and
              elevating any remaining links on top of this overlay. This ensures
              proper semantics and correct handling of nested interactive
              elements.
            </BasicText>
            <BasicText>
              LinkOverlay is usually imported alongside the LinkBox component.
              These two work together to improve link accessibility and user
              experience. Here is a further explanation of the two components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>LinkBox</HL>: a utility component that's used to create a
                  larger clickable area for one or more nested links. It doesn't
                  provide any styles of its own. The primary role of LinkBox is
                  to enhance accessibility and UX by improving the link
                  interaction area. To create a larger clickable area, you would
                  wrap the LinkBox around a block of content containing a
                  LinkOverlay component. However, please note that it's
                  important to have only one interactive child (an element with
                  click or key press interaction) within a <Mono>LinkBox</Mono>.
                </li>
                <li>
                  <HL>LinkOverlay</HL>: a component that's primarily used in
                  conjunction with <Mono>LinkBox</Mono> to create larger, more
                  accessible link areas. It is used to wrap the primary link
                  content within a <Mono>LinkBox</Mono>. The{" "}
                  <Mono>LinkOverlay</Mono> component's main function is to wrap
                  the content that should act as the main link within a LinkBox.
                  When the user clicks anywhere within the <Mono>LinkBox</Mono>,
                  they'll be directed to the URL of the <Mono>LinkOverlay</Mono>{" "}
                  component.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  LinkBox, 
  LinkOverlay } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <LinkOverlayOne />
                <ModalCode>
                  <Navigation.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkOverlayTwo />
                <ModalCode>
                  <Navigation.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkOverlayThree />
                <ModalCode>
                  <Navigation.E10 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkOverlayFour />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Overlay with Image and Caption</b>: You might not think about
              using <b>LinkOverlay</b> with an image and caption, but this can
              be a great way to create linked images for blog posts, articles,
              or portfolio pieces. This allows the whole card, including image
              and caption, to act as a link. Here, the entire figure, including
              the image and caption, behaves as a single link, providing an
              intuitive navigation experience for the user. This usage also has
              accessibility benefits, as the image and its related text are
              semantically grouped together as a single navigable element.
            </HighlightText>
            <HighlightExample h="275px">
              <MyFlex>
                <ImageCard />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H05 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Overlay with Complex Layout</b>: <b>LinkOverlay</b> is not
              limited to just text or simple layouts. It can be used in
              combination with complex layout components to create interesting
              interactive elements. This shows how <b>LinkOverlay</b> can be
              used with more complex layout components like <b>Grid</b>. Each
              box within the grid can contain separate links, but visually, they
              all belong to one unit. This can be useful in scenarios like
              dashboard UIs, where different parts of a larger component might
              need to link to different resources or sections of the
              application.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <GridCard />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H06 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Overlay with List Elements</b>: <b>LinkOverlay</b> can be
              paired with list elements to create interesting navigation menus
              or linked list items. Using <b>LinkOverlay</b> with <b>LinkBox</b>{" "}
              in a list structure, as opposed to using <b>Link</b> directly, is
              beneficial when you want the entire list item, including any
              padding or margin, to be clickable, rather than just the text or
              icon inside it. This can enhance usability, especially on mobile
              devices, where precise clicking or tapping can be more
              challenging.
            </HighlightText>
            <HighlightExample h="120px">
              <MyFlex>
                <NavigationList />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H07 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

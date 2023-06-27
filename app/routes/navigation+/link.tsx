import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BlueBold,
  ButtonStyles,
  CatsBouncing,
  HL,
  Mono,
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
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Navigation from "~/mardownExamples/navigation/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Button, Link } from "@chakra-ui/react";
import {
  LinkFive,
  LinkFour,
  LinkHighlightOne,
  LinkOne,
  LinkThree,
  LinkTwo,
} from "~/components/navigation/linkComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/link" size={28}>
        Link
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Link</Mono> component in Chakra UI provides an
              accessible way to handle navigation.
            </SectionDescription>
            <BasicText>
              Here are a few ways in which the Chakra UI Link component can make
              using links in UI design easier:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <BlueBold>Consistent styling</BlueBold>: The Chakra UI{" "}
                  <Mono>Link</Mono> component provides a set of default styles
                  for links, ensuring a consistent and visually pleasing
                  appearance throughout your application. You can easily apply
                  these styles to your links without the need for writing custom
                  CSS.
                </li>
                <li>
                  <BlueBold>Customizable styles</BlueBold>: While the component
                  offers default styles, it also allows you to customize the
                  link's appearance based on your specific design requirements.
                  You can modify the color, hover effects, typography, and other
                  visual aspects of the link using Chakra UI's theming and
                  styling system.
                </li>
                <li>
                  <BlueBold>Accessibility features</BlueBold>: Chakra UI{" "}
                  <Mono>Link</Mono> component is built with accessibility in
                  mind. It includes proper ARIA attributes, keyboard navigation
                  support, and focus management, ensuring that links are usable
                  and accessible for all users, including those who rely on
                  assistive technologies.
                </li>
                <li>
                  <BlueBold>Easy integration</BlueBold>: The Chakra UI{" "}
                  <Mono>Link</Mono> component seamlessly integrates with other
                  components and utilities, making it straightforward to create
                  interactive and responsive UIs. You can combine it with other
                  components like buttons, icons, or text to enhance the
                  functionality and user experience of your links.
                </li>
                <li>
                  <BlueBold>Routing support</BlueBold>: <Mono>Link</Mono> also
                  provides built-in support for routing in React applications.
                  It works well with popular routing libraries like React
                  Router, allowing you to navigate between different pages or
                  sections of your application without writing complex
                  navigation logic.
                </li>
              </ul>
            </BulletBox>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Link</Mono> components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Box>
                  <LinkOne />
                </Box>
                <Highlighter>
                  {`<Link href="http://www.openai.com">
  OpenAI
</Link>`}
                </Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkTwo />
                <Highlighter>
                  {`<Link href="https://www.openai.com" isExternal>
  OpenAI website <ExternalLinkIcon mx="2px" />
</Link>`}
                </Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkThree />
                <Highlighter>
                  {`<Link as={ReactLink} to="/">
  Main Page
</Link>`}
                </Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkFour />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <LinkFive />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Applying custom CSS to Links</b>: You might not be aware that
              Chakra UI gives you the flexibility to apply custom CSS to the{" "}
              <b>Link</b> component. For instance, you can create an animated
              underline effect for your links when a user hovers over them. In
              this example, a blue underline expands beneath the text as a user
              hovers over the link, offering an animated, intuitive visual cue.
            </HighlightText>
            <HighlightExample h="60px">
              <MyFlex>
                <LinkHighlightOne />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H04 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Creating a Download Link</b>: You can create a download link
              using the <b>Link</b> component in Chakra UI. This could be a
              handy way to provide users with downloadable content such as a PDF
              or a ZIP file. By simply adding the download prop to the Link
              component, the linked file will be downloaded when the user clicks
              on the link. (The following link will download information about
              the standard poodle dog breed...because they are the best dogs on
              the planet. At least we think so.) By simply adding the download
              prop to the <b>Link</b> component, the linked file will be
              downloaded when the user clicks on the link.
            </HighlightText>
            <HighlightExample h="60px">
              <MyFlex fontSize="lg">
                <Link href="/files/standard_poodle.pdf" download>
                  Download Poodle PDF
                </Link>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>
                {`<Link href="/files/standard_poodle.pdf" download>
  Download Poodle PDF
</Link>`}
              </Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              {" "}
              <b>Using Link as a Button</b>: In some cases, you might want a
              link that looks like a button. This is easily achievable with
              Chakra UI. By passing the Button component in the as prop of Link,
              the link is rendered as a button. You can then use any of the{" "}
              <b>Button</b> props on the <b>Link</b> component, such as{" "}
              <b>colorScheme</b>. This can be useful when you want the
              aesthetics and interaction of a button, but the functionality of a
              link. Keep in mind: due to the way events are handled when you use
              the <b>as</b> prop in Chakra UI to transform the <b>Link</b>{" "}
              component into a <b>Button</b> component. When you click on the
              button, the event handler associated with the <b>Button</b>{" "}
              component gets triggered first and prevents the default link
              behavior. To get around this, you must handle the click event
              yourself.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <Link
                  as={Button}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://cat-bounce.com/", "_blank");
                  }}
                  sx={ButtonStyles}
                >
                  Button Styled Link
                </Link>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Link
  as={Button}
  onClick={(e) => {
  e.preventDefault();
  window.open("https://cat-bounce.com/", "_blank");
}}
>
  Button Styled Link
</Link>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

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
//import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/card" size={28}>
        Card
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Card</Mono> component is a versatile and commonly used
              component in the Chakra UI library. It can be used to group and
              display content in a clear and concise format. To use the Card
              component, Chakra UI provides four main components:{" "}
              <Mono>Card</Mono>, <Mono>CardHeader</Mono>, CardBody, and
              <Mono>CardFooter</Mono>.
            </SectionDescription>
            <BasicText>
              Here is a brief look at each of these parts of the{" "}
              <Mono>Card</Mono>component.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Card</HL>: The <Mono>Card</Mono> itself is a container
                  component that can house various sub-components. It can
                  include properties like <Mono>color</Mono>,{" "}
                  <Mono>background</Mono>, <Mono>border</Mono>,{" "}
                  <Mono>shadow</Mono>, <Mono>padding</Mono>, and{" "}
                  <Mono>margin</Mono>.
                </li>
                <li>
                  <HL>CardHeader</HL>: This is often the first sub-component in
                  a <Mono>Card</Mono>. It typically contains the title or
                  headline of the card and may also include an icon or image.
                  Its layout and design can be customized with properties like{" "}
                  <Mono>font</Mono> size, color, alignment, and more.
                </li>
                <li>
                  <HL>CardBody</HL>: This sub-component holds the main content
                  of the Card. It could include text, images, lists, tables, or
                  any other content. The layout and design of the CardBody can
                  be customized with properties such as padding, alignment, font
                  size, and color.
                </li>
                <li>
                  <HL>CardFooter</HL>: This is typically the last sub-component
                  in a Card. It often contains actions related to the content of
                  the Card, such as buttons or links. The layout and design of
                  the CardFooter can also be customized with properties like
                  alignment, padding, and color.
                </li>
              </ul>
            </BulletBox>
            <BasicText>
              Other components that can be skillfully used with the{" "}
              <Mono>Card</Mono> component include:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Image</HL>: While not specific to the Card component, the
                  Image component is often used within a Card to display
                  relevant pictures. It can be customized with properties like
                  size, border, shadow, and alignment.
                </li>
                <li>
                  <HL>Button</HL>: Again, not specific to the Card component,
                  but the Button component is often used within the CardFooter
                  to provide actions the user can take. These could include
                  things like 'Add to Cart', 'Read More', 'Delete', etc.
                </li>
                <li>
                  <HL>Stack</HL>: This is a layout component that is often used
                  within a Card to ensure that its content is properly spaced
                  and aligned. It can control the direction (horizontal or
                  vertical) and spacing of its child components.
                </li>
                <li>
                  <HL>ButtonGroup</HL>: When you have multiple buttons in your
                  CardFooter, you might want to use the ButtonGroup component.
                  It ensures that your buttons are properly aligned and spaced.
                </li>
                <li>
                  <HL>Text</HL> and <HL>Heading</HL>: These components are often
                  used within the CardHeader and CardBody to display text. The
                  Heading component is typically used for the title or headline,
                  while the Text component is used for the main content or
                  description.
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
            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>IMPORT EXAMPLE & FUNCTION</Box>
                <ModalCode>EXAMPLE CODE</ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

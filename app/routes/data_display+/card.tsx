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
import * as Data from "~/mardownExamples/data_display/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  CardEight,
  CardEleven,
  CardFive,
  CardFour,
  CardNine,
  CardOne,
  CardSeven,
  CardSix,
  CardTen,
  CardThirteen,
  CardThree,
  CardTwelve,
  CardTwo,
} from "~/components/data_display/cardComponents";

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
              <Mono>Card</Mono>, <Mono>CardHeader</Mono>, <Mono>CardBody</Mono>,
              and <Mono>CardFooter</Mono>.
            </SectionDescription>
            <BasicText>
              Here is a brief look at each of these parts of the{" "}
              <Mono>Card</Mono> component.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Card</HL>: The <Mono>Card</Mono> itself is a container
                  component that can house various sub-components. It can
                  include properties like <Mono>color</Mono>,{" "}
                  <Mono>background</Mono>, <Mono>border</Mono>,{" "}
                  <Mono>boxShadow</Mono>, <Mono>padding</Mono>, and{" "}
                  <Mono>margin</Mono>.
                </li>
                <li>
                  <HL>CardHeader</HL>: This is often the first sub-component in
                  a <Mono>Card</Mono>. It typically contains the title or
                  headline of the card and may also include an icon or image.
                  Its layout and design can be customized with properties like{" "}
                  <Mono>fontSize</Mono>, <Mono>color</Mono>,{" "}
                  <Mono>alignment</Mono>, and more.
                </li>
                <li>
                  <HL>CardBody</HL>: This sub-component holds the main content
                  of the <Mono>Card</Mono>. It could include text, images,
                  lists, tables, or any other content. The layout and design of
                  the <Mono>CardBody</Mono> can be customized with properties
                  such as <Mono>padding</Mono>, <Mono>alignment</Mono>,{" "}
                  <Mono>fontSize</Mono>, and <Mono>color</Mono>.
                </li>
                <li>
                  <HL>CardFooter</HL>: This is typically the last sub-component
                  in a <Mono>Card</Mono>. It often contains actions related to
                  the content of the <Mono>Card</Mono>, such as buttons or
                  links. The layout and design of the <Mono>CardFooter</Mono>{" "}
                  can also be customized with properties like{" "}
                  <Mono>alignment</Mono>, <Mono>padding</Mono>, and{" "}
                  <Mono>color</Mono>.
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
                  <HL>Image</HL>: While not specific to the <Mono>Card</Mono>{" "}
                  component, the <Mono>Image</Mono> component is often used
                  within a <Mono>Card</Mono> to display relevant pictures. It
                  can be customized with properties like <Mono>size</Mono>,{" "}
                  <Mono>border</Mono>, <Mono>shadow</Mono>, and{" "}
                  <Mono>alignment</Mono>.
                </li>
                <li>
                  <HL>Button</HL>: Again, not specific to the <Mono>Card</Mono>{" "}
                  component, but the <Mono>Button</Mono> component is often used
                  within the <Mono>CardFooter</Mono> to provide actions the user
                  can take. These could include things like 'Add to Cart', 'Read
                  More', 'Delete', etc.
                </li>
                <li>
                  <HL>Stack</HL>: This is a layout component that is often used
                  within a <Mono>Card</Mono> to ensure that its content is
                  properly spaced and aligned. It can control the direction
                  (horizontal or vertical) and spacing of its child components.
                </li>
                <li>
                  <HL>ButtonGroup</HL>: When you have multiple buttons in your{" "}
                  <Mono>CardFooter</Mono>, you might want to use the{" "}
                  <Mono>ButtonGroup</Mono> component. It ensures that your
                  buttons are properly aligned and spaced.
                </li>
                <li>
                  <HL>Text</HL> and <HL>Heading</HL>: These components are often
                  used within the <Mono>CardHeader</Mono> and{" "}
                  <Mono>CardBody</Mono> to display text. The{" "}
                  <Mono>Heading</Mono> component is typically used for the title
                  or headline, while the <Mono>Text</Mono> component is used for
                  the main content or description.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                You can design simple or complex cards based on your needs,
                incorporating images, actions, and sections as required. The{" "}
                <Mono>Card</Mono> component can be customized in many ways, from
                its border, color, and shadow to its padding and margin. By
                understanding these customizations and components, you can
                create a wide range of card-based layouts in Chakra.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These <Mono>Card</Mono> components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter } from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <CardOne />
                <ModalCode>
                  <Data.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardTwo />
                <ModalCode>
                  <Data.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardThree />
                <ModalCode>
                  <Data.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardFour />
                <ModalCode>
                  <Data.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardFive />
                <ModalCode>
                  <Data.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardSix />
                <ModalCode>
                  <Data.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardSeven />
                <ModalCode>
                  <Data.E07 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardEight />
                <ModalCode>
                  <Data.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardNine />
                <ModalCode>
                  <Data.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CardTen />
                <ModalCode>
                  <Data.E10 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Interactive Card</b>: A card doesn't always have to be static.
              You can make your cards interactive using <b>hover</b> or{" "}
              <b>focus</b> effects. This can be especially useful for product
              display cards, user profile cards, or any scenario where you want
              to draw the user's attention or provide additional information.
              You can add interactivity to the card by changing the transform
              scale or color on hover or focus.
            </HighlightText>
            <HighlightExample h="150px">
              <MyFlex>
                <CardEleven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Nested Cards</b>: At times, you may want to display
              hierarchical information. Nested cards can come in handy in such
              cases. They can be utilized to represent threaded comments, file
              trees, and other structured content.
            </HighlightText>
            <HighlightExample h={{ base: "350px", sm: "300px", lg: "350px" }}>
              <MyFlex>
                <CardTwelve />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Card as a Modal</b>: A card can also be used as a simple modal
              or popup. By using the right styling and combination of other
              Chakra UI components, you can create a popup with a Card. This can
              be useful for displaying additional information or actions.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <CardThirteen />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

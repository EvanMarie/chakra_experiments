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
import * as Layout from "~/mardownExamples/layout/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";

import {
  FlexOne,
  FlexTwo,
  FlexThree,
  FlexFour,
  FlexFive,
  FlexSix,
} from "~/components/layout/flexComponents";
import {
  FlexExampleDynamicForm,
  FlexExampleImageGallery,
  FlexExampleNavigation,
} from "~/components/layout/flexFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/flex" size={28}>
        Flex
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Chakra UI <Mono>Flex</Mono> component is a powerful tool
              that extends the functionality of the <Mono>Box</Mono> component
              by setting its display property to flex. It allows you to create
              flexible and responsive layouts using flexbox, offering convenient
              shorthand props for various flex-related styles. The{" "}
              <Mono>Flex</Mono> component serves as a wrapper for its child
              elements, allowing you to control the layout and positioning of
              these elements within a flex container.
            </SectionDescription>
            <BasicText>
              One of the key advantages of using the <Mono>Flex</Mono> component
              is its extensive set of shorthand props, which simplify the
              process of applying common flexbox styles.
            </BasicText>{" "}
            <BulletBox>
              <ul>
                <li>
                  <HL>flexDirection</HL>: (shorthand: <Mono>direction</Mono>):
                  The <Mono>flexDirection</Mono> prop determines the direction
                  of the flex items within the <Mono>Flex</Mono> container. It
                  accepts values like "<Mono>row</Mono>", "<Mono>column</Mono>",
                  "<Mono>row-reverse</Mono>", and "<Mono>column-reverse</Mono>".
                  For example, setting <Mono>flexDirection="row"</Mono> aligns
                  the flex items horizontally in a row, while{" "}
                  <Mono>flexDirection="column"</Mono> stacks them vertically.
                </li>
                <li>
                  <HL>flexWrap</HL>: (shorthand: <Mono>wrap</Mono>): The{" "}
                  <Mono>flexWrap</Mono> prop controls the wrapping behavior of
                  flex items when they exceed the width of the <Mono>Flex</Mono>{" "}
                  container. It accepts values like "<Mono>nowrap</Mono>", "
                  <Mono>wrap</Mono>", and "<Mono>wrap-reverse</Mono>". By
                  default, flex items don't wrap onto multiple lines ("
                  <Mono>nowrap</Mono>"), but setting{" "}
                  <Mono>flexWrap="wrap"</Mono> allows them to wrap to the next
                  line when necessary.
                </li>
                <li>
                  <HL>flexBasis</HL>: (shorthand: <Mono>basis</Mono>): The{" "}
                  <Mono>flexBasis</Mono> prop sets the initial size of flex
                  items along the main axis before any available space is
                  distributed. It specifies the default width (for{" "}
                  <Mono>flexDirection="row"</Mono>) or height (for{" "}
                  <Mono>flexDirection="column"</Mono>) of the flex items. The
                  value can be a fixed pixel value (e.g.,{" "}
                  <Mono>flexBasis="200px"</Mono>) or a relative value (e.g.,{" "}
                  <Mono>flexBasis="50%"</Mono>).
                </li>
                <li>
                  <HL>flexGrow</HL>: (shorthand: <Mono>grow</Mono>): The{" "}
                  <Mono>flexGrow</Mono> prop determines the ability of flex
                  items to grow and occupy any available space along the main
                  axis. It accepts a numeric value that represents the relative
                  proportion of available space that each flex item should take
                  up. For example, if one flex item has{" "}
                  <Mono>flexGrow={1}</Mono> and another has{" "}
                  <Mono>flexGrow={2}</Mono>, the second item will take up twice
                  as much space as the first item.
                </li>
                <li>
                  <HL>flexShrink</HL>: (shorthand: <Mono>shrink</Mono>): The{" "}
                  <Mono>flexShrink</Mono> prop controls the ability of flex
                  items to shrink when the <Mono>Flex</Mono> container's width
                  is insufficient to accommodate all the items. It accepts a
                  numeric value that determines the relative shrinkage factor of
                  each flex item. By default, flex items have{" "}
                  <Mono>flexShrink={1}</Mono>, meaning they will shrink
                  proportionally. Setting{" "}
                  <Mono>
                    flexShrink=
                    {0}
                  </Mono>{" "}
                  prevents the item from shrinking.
                </li>
                <li>
                  <HL>alignItems</HL>: (shorthand: <Mono>align</Mono>): The{" "}
                  <Mono>alignItems</Mono> prop aligns the flex items along the
                  cross-axis (perpendicular to the main axis). It accepts values
                  like "<Mono>flex-start</Mono>", "<Mono>flex-end</Mono>", "
                  <Mono>center</Mono>", "<Mono>baseline</Mono>", and "
                  <Mono>stretch</Mono>". For example, setting
                  <Mono>alignItems="center"</Mono> centers the flex items
                  vertically (if <Mono>flexDirection="row"</Mono>) or
                  horizontally (if <Mono>flexDirection="column"</Mono>).
                </li>
                <li>
                  <HL>justifyContent</HL>: (shorthand: <Mono>justify</Mono>):
                  The <Mono>justifyContent</Mono> prop controls the alignment of
                  flex items along the main axis. It accepts values like "
                  <Mono>flex-start</Mono>", "<Mono>flex-end</Mono>", "
                  <Mono>center</Mono>", "<Mono>space-between</Mono>", "
                  <Mono>space-around</Mono>", and "<Mono>space-evenly</Mono>".
                  For example, setting{" "}
                  <Mono>justifyContent="space-between"</Mono> evenly distributes
                  the flex items along the main axis, leaving equal space
                  between each item.
                </li>
              </ul>
            </BulletBox>
          </SectionContainer>
          <SectionContainer>
            <BasicText>
              While you can use the verbose props, Chakra UI provides shorthand
              equivalents for these flex styles, saving you time and reducing
              code complexity. The <Mono>Flex</Mono> component, along with its
              shorthand props, empowers you to create dynamic and responsive
              layouts without sacrificing ease of use.
            </BasicText>
            <BasicText>
              ⦾ <HL>Spacer</HL>: The <Mono>Spacer</Mono> component, imported as{" "}
              <Mono>Spacer</Mono>, complements the <Mono>Flex</Mono> component
              by creating adjustable empty space within a <Mono>Flex</Mono>{" "}
              container. It enables you to fine-tune the spacing between child
              elements. By utilizing the <Mono>Spacer</Mono> component, you can
              easily create responsive and evenly spaced layouts. The{" "}
              <Mono>Spacer</Mono> component renders as a div and can be used to
              add space between <Mono>Flex</Mono> child elements without needing
              to add explicit margins or padding.
            </BasicText>
            <BasicText>
              These components work seamlessly together. By combining the{" "}
              <Mono>Flex</Mono> and <Mono>Spacer</Mono> components, you can
              create stackable layouts, control spacing between elements, and
              build responsive designs. The <Mono>Flex</Mono> component provides
              the structure and flexibility, while the <Mono>Spacer</Mono>{" "}
              component allows for precise control over the spacing within the{" "}
              <Mono>Flex</Mono> container.
            </BasicText>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
    Flex, 
    Spacer } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <FlexOne />
                <ModalCode>
                  <Layout.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FlexTwo />
                <ModalCode>
                  <Layout.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FlexThree />
                <ModalCode>
                  <Layout.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FlexFour />
                <ModalCode>
                  <Layout.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FlexFive />
                <ModalCode>
                  <Layout.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <FlexSix />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Dynamic Form Layout</b>: You can use <b>Flex</b> to create
              dynamic and responsive form layouts, building forms that adapt to
              different screen sizes and reorganize their fields automatically.
              This example offers a simple registration form with two columns on
              larger screens, which transforms into a single column on smaller
              screens.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <FlexExampleDynamicForm />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H10 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Flexible Image Layout</b>: <b>Flex</b> is great for making
              responsive and attractive image layout designs that adapt to all
              screen sizes and the layout shifts that occur with responsive
              designs. Keeping a consistently attractive layout with complex
              content would be almost impossible without flexbox functionality.
              And with Chakra's versatile, <b>Flex</b> component, it becomes
              easy once you know the basics.{" "}
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <FlexExampleImageGallery />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H11 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Flex Nav Menu</b>: <b>Flex</b> is an essential tool for
              creating navigation menus due to its ability to handle various
              layout requirements with ease. With the <b>direction</b> property,
              we can easily switch between vertical and horizontal orientations,
              allowing us to create both types of navigation menu. <b>Flex</b>{" "}
              enables us to control the alignment and spacing of menu items
              effortlessly. We can use properties like <b>justifyContent</b> and{" "}
              <b>alignItems</b> to position the menu items precisely where we
              want them, whether it's aligning them in a row or stacking them in
              a column.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <FlexExampleNavigation />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H12 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

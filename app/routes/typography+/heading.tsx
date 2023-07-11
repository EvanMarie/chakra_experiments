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
import * as Typography from "~/mardownExamples/typography/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Code } from "@chakra-ui/react";

import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
} from "~/components/typography/headingComponents";
import {
  HeadingFunctionEight,
  HeadingFunctionSeven,
  HeadingFunctionSix,
} from "~/components/typography/headingFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/heading" size={28}>
        Heading
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ HTML headings are used to define the structure and hierarchy of
              the content within a web page. They provide a way to organize and
              categorize different sections of the content. HTML offers six
              levels of headings, from <Code>{`<h1>`}</Code> to{" "}
              <Code>{`<h6>`}</Code>, representing the highest level of
              importance to the lowest.
            </SectionDescription>
            <BasicText>
              The choice of heading level depends on the content's structure and
              hierarchy. It's important to use headings in a logical and
              meaningful way to improve accessibility and search engine
              optimization (SEO). Search engines and screen readers rely on
              headings to understand the page's structure and content
              organization.
            </BasicText>
            <BasicText>
              The Chakra UI <Mono>Heading</Mono> component is a versatile
              component used to render semantic HTML heading elements.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>{`<h1>`}</HL>: This is the highest level heading and is
                  typically used for the main title or heading of a page. It
                  should be used only once per page and represents the most
                  important heading.
                </li>
                <li>
                  <HL>{`<h2>`}</HL>: The second-level heading is used for
                  section titles or major headings within the page. It
                  represents a slightly lower level of importance compared to{" "}
                  <Code>{`<h1>`}</Code>.
                </li>
                <li>
                  <HL>{`<h3>`}</HL> to <HL>{`<h6>`}</HL>: These are lower-level
                  headings that are used for sub-sections, subheadings, and
                  nested content within the page. The importance decreases from{" "}
                  <Code>{`<h3>`}</Code> to <Code>{`<h6>`}</Code>, with{" "}
                  <Code>{`<h6>`}</Code> being the least important.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Heading</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Heading } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <HeadingOne />
                <ModalCode>
                  <Highlighter>{`<Heading>This is the as basic as a heading gets.</Heading>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HeadingTwo />
                <ModalCode>
                  <Typography.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HeadingThree />
                <ModalCode>
                  <Highlighter>{`<Heading noOfLines={1}>
    This overly long heading will be truncated after one line.
</Heading>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HeadingFour />
                <ModalCode>
                  <Highlighter>{`<Heading 
    size="lg" 
    fontSize="50px">
        Style override has been applied.
</Heading>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <HeadingFive />
                <ModalCode>
                  <Typography.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Heading with Decorative Icon</b>:With Chakra UI, you can easily
              incorporate an icon from popular icon libraries, to create
              visually appealing headings. This can help attract attention to a
              topic and visually enhance its meaning.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <HeadingFunctionSeven />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H01 />
            </ModalCode>
          </GridBoxOne>

          <GridBoxTwo>
            <HighlightText>
              <b>Animated Heading</b>: below is an example that demonstrates the
              usage of the <b>Heading</b> component in a colorful, playful, and
              dynamic manner that bounces and rotates when the user hovers over
              it. The component utilizes Chakra UI's motion component, along
              with Framer Motion library, to create the dynamic animation. The
              code structure consists of wrapping the <b>Heading</b> component
              with the motion function and applying animation properties like
              whileHover and transition. The result is an engaging and
              eye-catching heading that adds excitement and energy to the user
              experience.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <HeadingFunctionSix />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Typewriter Heading</b>: This example showcases a fun and
              attention-grabbing animation for the header, which plays as soon
              as the page loads. This could be used to introduce a new product
              or feature, or to simply add some excitement to the user
              experience.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <HeadingFunctionEight />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Typography.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

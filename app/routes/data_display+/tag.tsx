import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL } from "~/styles/DesignComponents";

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
import {
  TagFive,
  TagFour,
  TagOne,
  TagSeven,
  TagSix,
  TagThree,
  TagTwo,
} from "~/components/data_display/tagComponents";
import {
  ProductFeatures,
  Blog,
  ProgressIndicator,
} from "~/components/data_display/tagFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/tag" size={28}>
        Tag
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Tags are one of the most versatile and useful components offered
              by Chakra UI. The Tag component is designed to effectively label,
              categorize, or organize items using descriptive keywords, creating
              a more navigable user interface.
            </SectionDescription>
            <BasicText>
              The Tag component utilizes the following Chakra components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Tag</HL>: This acts as the wrapper for all the tag
                  elements.
                </li>
                <li>
                  <HL>TagLabel</HL>: This component provides the text content
                  for the tag.
                </li>
                <li>
                  <HL>TagLeftIcon</HL>: This is the icon placed on the left side
                  of the tag.
                </li>
                <li>
                  <HL>TagRightIcon</HL>: This is the icon placed on the right
                  side of the tag.
                </li>
                <li>
                  <HL>TagCloseButton</HL>: This gives the tag a close button.
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
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <TagOne />

                <Highlighter>{`<Tag>Premium Content</Tag>`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TagTwo />
                <ModalCode>
                  <Highlighter>{`<HStack spacing={4}>
  <Tag size="sm" variant="solid" colorScheme="purple">
    Small Purple
  </Tag>
  <Tag size="md" variant="solid" colorScheme="cyan">
    Medium Cyan
  </Tag>
  <Tag size="lg" variant="solid" colorScheme="pink">
    Large Pink
  </Tag>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TagThree />
                <ModalCode>
                  <Highlighter>{`<HStack spacing={4}>
  <Tag size="md" variant="subtle" colorScheme="cyan">
    Subtle Variant
  </Tag>
  <Tag size="md" variant="solid" colorScheme="cyan">
    Solid Variant
  </Tag>
  <Tag size="md" variant="outline" colorScheme="cyan">
    Outline Variant
  </Tag>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TagFour />
                <ModalCode>
                  <Highlighter>{`<HStack spacing={4}>
  {["sm", "md", "lg"].map((size) => (
    <Tag size={size} key={size} variant="subtle" colorScheme="yellow">
      <TagLeftIcon boxSize="12px" as={SunIcon} />
      <TagLabel>Sunshine</TagLabel>
    </Tag>
  ))}
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TagFive />
                <ModalCode>
                  <Highlighter>{`        <HStack spacing={4}>
  {["sm", "md", "lg"].map((size) => (
    <Tag size={size} key={size} variant="outline" colorScheme="purple">
      <TagLabel>Link</TagLabel>
      <TagRightIcon as={LinkIcon} />
    </Tag>
  ))}
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TagSix />
                <ModalCode>
                  <Data.E16 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <TagSeven />
                <ModalCode>
                  <Highlighter>{`        <Tag size="lg" colorScheme="blue" borderRadius="full">
  <Avatar
    src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
    size="xs"
    name="Jasper Jenkins"
    ml={-1}
    mr={2}
  />
  <TagLabel>Jasper Jenkins</TagLabel>
</Tag>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Tags as Progress Indicators</b>: Tags can be used as progress
              indicators in your application. Consider a situation where you
              have a multi-step form or process; tags can visually represent
              which step the user is currently on.
            </HighlightText>
            <HighlightExample h="100px">
              <MyFlex>
                <ProgressIndicator />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H09 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Tags as Interactive Filters</b>: Tags can also be used as
              interactive filters. For example, on a blog, you could use tags to
              allow users to filter posts by topic.
            </HighlightText>
            <HighlightExample h="150px">
              <MyFlex justifyContent="flex-start">
                <Blog />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H10 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Product Feature Tags</b>: In this example, we'll implement a
              list of product features that are toggled via tags. When a tag is
              clicked, a corresponding feature detail card will be displayed.
              This can be very useful in product pages where you want to
              highlight different features and provide additional information
              when the user is interested.
            </HighlightText>
            <HighlightExample h="225px">
              <MyFlex>
                <ProductFeatures />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H11 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

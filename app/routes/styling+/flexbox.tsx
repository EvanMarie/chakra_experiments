import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  Mono,
  HL,
  MyDivider,
  MyLabel,
  SectionContainer,
  colors,
  ImportBox,
  FlexibleBox,
} from "~/styles/reusableChakraComponents";
import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#flexbox">
        Flexbox:
      </MyLabel>
      <DescriptionBox>
        {/*  Section Introduction */}
        {/* COMPONENT DESCRIPTION */}
        <SectionContainer paddingBottom={2} mb={0}>
          <BasicText color={colors.mainAccent3}>
            ⦾ Chakra UI, the Flex component is a Box component (the most basic
            and versatile component in Chakra UI, a simple styled div) with
            display: flex by default. This makes it easy to apply common flexbox
            properties to layout your components. Here's a rundown:
          </BasicText>
          <BulletBox>
            <ul>
              <li>
                <HL>Flex Direction</HL>: The <Mono>direction</Mono> prop
                corresponds to the <Mono>flex-direction</Mono> CSS property,
                which defines the direction of the flex items in the flex
                container. It accepts values like <Mono>row</Mono>,{" "}
                <Mono>column</Mono>, <Mono>row-reverse</Mono>, and{" "}
                <Mono>column-reverse</Mono>.
              </li>
              <li>
                <HL>Justify Content</HL>: The <Mono>justify</Mono> prop is a
                shorthand for the CSS <Mono>justify-content</Mono> property. It
                defines how the browser distributes space between and around
                content items along the main-axis of a flex container. It
                accepts standard CSS <Mono>justify-content</Mono> values like
                <Mono>flex-start</Mono>, <Mono>flex-end</Mono>, <Mono></Mono>
                center, <Mono>space-between</Mono>, <Mono>space-around</Mono>,
                <Mono>space-evenly</Mono>.
              </li>
              <li>
                <HL>Align Items</HL>: The align prop is short for align-items.
                It defines the default behavior for how flex items are laid out
                along the cross-axis on the current line. It accepts values like{" "}
                <Mono>stretch</Mono>, <Mono>flex-start</Mono>,{" "}
                <Mono>flex-end,</Mono> <Mono>center</Mono>, and{" "}
                <Mono>baseline</Mono>.
              </li>
              <li>
                <HL>Wrap</HL>: The wrap prop is short for <Mono></Mono>
                flex-wrap. It controls whether the flex container is
                single-lined or multi-lined, and the direction of the
                cross-axis, which determines the direction new lines are stacked
                in. It accepts values like <Mono></Mono>nowrap,{" "}
                <Mono>wrap</Mono>,<Mono>wrap-reverse</Mono> .
              </li>
              <li>
                <HL>Responsive Design</HL>: All of these props can accept
                responsive array values or object values to apply different
                styles at different breakpoints.
              </li>
              <li>
                <HL>Flex Children (Flex Items)</HL>: You can also control the
                flex properties of child elements using Chakra UI props. For
                example, you can use the <Mono>flexGrow</Mono>,{" "}
                <Mono>flexShrink</Mono>, and <Mono>flexBasis</Mono> props on
                children of a Flex component to control how they flex.
              </li>
              <li>
                <HL>Flex shorthand</HL>: The <Mono>flex</Mono> prop provides a
                shorthand to specify the <Mono>flexGrow</Mono>,{" "}
                <Mono>flexShrink</Mono>, and <Mono>flexBasis</Mono> properties
                simultaneously. For instance, <Mono>flex="1"</Mono> would be
                equivalent to setting <Mono>flexGrow={1}</Mono>,{" "}
                <Mono>flexShrink={1}</Mono>, <Mono>flexBasis="0%"</Mono>.
              </li>
              <li>
                <HL>Other Box Props</HL>: Since <Mono>Flex</Mono> is a{" "}
                <Mono>Box</Mono>, you can use all the <Mono></Mono>
                <Mono>Box</Mono> props for spacing, color, typography, and more,
                in addition to the flex-specific props.
              </li>
            </ul>
          </BulletBox>
          <DescriptionBox>
            <BasicText>
              The Flex component in Chakra UI is a powerful tool to achieve
              complex layouts while keeping the markup simple and clean.
            </BasicText>
            {/* IMPORT CODE */}
            <ImportBox>
              <BasicText>
                To import the <Mono>Flex</Mono> component:
              </BasicText>

              <Highlighter>{`import { Flex } from "@chakra-ui/react";`}</Highlighter>
            </ImportBox>
          </DescriptionBox>
        </SectionContainer>
      </DescriptionBox>
      {/* COMPONENT EXAMPLES */}
      <ExampleBox paddingX={5}>
        <SectionContainer>
          <VStack spacing={4}>
            <VStack w="100%" spacing={0}>
              <Flex
                bg={colors.mypurple}
                h="75px"
                p={2}
                align="center"
                justify="center"
              >
                Very centered, indeed!
              </Flex>
              <Highlighter>
                {`<Flex align="center" justify="center">`}
              </Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex direction="row" bg={colors.mypurple} w={350} p={3}>
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>
                {`<Flex display="row">
  <Text>Child One</Text>
  <Text>Child Two</Text>
  <Text>Child Three</Text>
</Flex>`}
              </Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex
                direction="column"
                bg={colors.mypurple}
                w={350}
                px={3}
                py={1}
              >
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex direction="column">`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex justify="center" bg={colors.mypurple} w={350} px={3} py={1}>
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex justify="center">`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex
                justify="space-between"
                bg={colors.mypurple}
                w={350}
                px={3}
                py={1}
              >
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex justify="space-between">`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex align="center" bg={colors.mypurple} w={350} px={3} py={1}>
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex align="center">`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex align="stretch" bg={colors.mypurple} w={350} px={3} py={1}>
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex align="stretch">`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex wrap="wrap" bg={colors.mypurple} w={200} px={3} py={1}>
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex wrap="wrap">`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex wrap="nowrap" bg={colors.mypurple} w={200} px={3} py={1}>
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex wrap="nowrap">`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex
                direction={{ base: "column", md: "row" }}
                bg={colors.mypurple}
                w={350}
                px={3}
                py={1}
              >
                <Text>Child One</Text>
                <Text>Child Two</Text>
                <Text>Child Three</Text>
              </Flex>
              <Highlighter>{`<Flex direction={{ base: "column", md: "row" }}>`}</Highlighter>
              <BasicText>
                On mobile and smaller screens, this will be column-wrap. At
                medium sized screens and above, this will switch to row-wrap.
              </BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />

            <VStack w="100%" spacing={0}>
              <Flex bg={colors.mypurple} w={350} px={3} py={1}>
                <Box flexGrow={1}>Child One</Box>
                <Box flexShrink={2}>Child Two</Box>
                <Box>Child Three</Box>
              </Flex>
              <Highlighter>{`<Flex>
  <Box flexGrow={1}>Child One</Box>
  <Box flexShrink={2}>Child Two</Box>
  <Box>Child Three</Box>
</Flex>`}</Highlighter>
              <BasicText></BasicText>
            </VStack>
            <MyDivider mt={0} mb={0} />
          </VStack>
        </SectionContainer>
      </ExampleBox>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

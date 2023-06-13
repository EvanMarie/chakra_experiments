import { Box, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  Mono,
  HL,
  MyDivider,
  colors,
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
} from "~/styles/MainDesignComponents";
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#gradient">
        Gradients:
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <DescriptionBox>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <BasicText color={colors.mainAccent3}>
                ⦾ Chakra UI supports CSS gradients right out of the box. You can
                use CSS gradient values directly, or leverage the theme's color
                palette to create consistent and beautiful gradient effects.
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>Linear Gradient</HL>: You can apply linear gradients
                    using standard CSS syntax.
                  </li>
                  <li>
                    <HL>Radial Gradient</HL>: Similarly, you can apply radial
                    gradients using CSS syntax.
                  </li>
                </ul>
              </BulletBox>
              <DescriptionBox>
                <BasicText>
                  When creating gradients, you can use any valid CSS color
                  value, including named colors, hex codes, rgb/rgba values, and
                  hsl/hsla values. However, gradients in Chakra UI have a
                  limitation. Since gradient values often contain commas, they
                  cannot be used with the responsive array syntax directly.
                </BasicText>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    To import the <Mono>Box</Mono> component used below:
                  </BasicText>
                  <Highlighter>{`import { Box } from "@chakra-ui/react";`}</Highlighter>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </DescriptionBox>
          {/* COMPONENT EXAMPLES */}

          <ExampleBox>
            <SectionContainer>
              <VStack>
                <VStack w="100%" spacing={0}>
                  <Box
                    w="100%"
                    p={2}
                    bgGradient={"linear(to-t, green.700, pink.700)"}
                    borderRadius={"sm"}
                  >
                    This <Mono>Box</Mono> has a <Mono>linear gradient</Mono>{" "}
                    background.
                  </Box>
                  <Highlighter>{`<Box bgGradient={"linear(to-t, green.700, pink.700)"}>`}</Highlighter>

                  <BasicText></BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Box
                    w="100%"
                    p={2}
                    bgGradient="radial(blue, yellow.700, pink.700)"
                  >
                    This <Mono>Box</Mono> has a <Mono>radial gradient</Mono>{" "}
                    background.
                  </Box>
                  <Highlighter>{`<Box bgGradient="radial(blue, yellow.700, pink.700)">`}</Highlighter>

                  <BasicText></BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />

                <VStack w="100%" spacing={0}>
                  <Box
                    bgGradient="linear-gradient(to right, red.500, blue.500)"
                    padding={3}
                  >
                    This is a box with a linear gradient
                  </Box>

                  <Highlighter>{`<Box bgGradient="linear-gradient(to right, 
    red.500, blue.500)">`}</Highlighter>

                  <BasicText></BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />
                <VStack w="100%" spacing={0}>
                  <Box
                    bgGradient="radial-gradient(circle, red.500, blue.500)"
                    padding={3}
                  >
                    This is a box with a radial gradient
                  </Box>

                  <Highlighter>{`<Box bgGradient="radial-gradient(circle, 
    red.500, blue.500)">`}</Highlighter>

                  <BasicText></BasicText>
                </VStack>
                <MyDivider mt={0} mb={0} />
                <VStack w="100%" spacing={0}>
                  <BasicText>
                    To work around the limitation mentioned above, you can
                    define gradient values in the theme and reference them by
                    name:
                  </BasicText>
                  <Highlighter>{`const theme = extendTheme({
gradients: {
  redToBlue: "linear-gradient(to right, red.500, 
    blue.500)",
  greenToYellow: "linear-gradient(to right, 
    green.500, yellow.500)",
},
})`}</Highlighter>
                  <Highlighter>
                    {`// In your component:
<Box bg={{ base: "gradients.redToBlue", 
  md: "gradients.greenToYellow" }}>...</Box>`}
                  </Highlighter>
                </VStack>
                <MyDivider mt={0} mb={0} />
              </VStack>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

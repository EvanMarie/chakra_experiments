import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  Mono,
  HL,
  MyDivider,
  colors,
  BlueBold,
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
  HighlightColumn,
  GridBoxOne,
  GridBoxTwo,
  GridBoxThree,
  SingleExample,
  MyFlex,
  SectionDescription,
  ViewCode,
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";
import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { AnimatedGradient } from "~/components/styling/animatedGradient";
import { MiniCode, ModalCode } from "~/styles/CodeDesignComponents";

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
        Gradients
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <SectionDescription>
                ⦾ Chakra UI supports CSS gradients right out of the box. You can
                use CSS gradient values directly, or leverage the theme's color
                palette to create consistent and beautiful gradient effects.
              </SectionDescription>
              <BulletBox>
                <ul>
                  <li>
                    <BlueBold>Linear Gradient</BlueBold>: You can apply linear
                    gradients using standard CSS syntax.
                  </li>
                  <li>
                    <BlueBold>Radial Gradient</BlueBold>: Similarly, you can
                    apply radial gradients using CSS syntax.
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
                  <MiniCode>{`import { Box } from "@chakra-ui/react";`}</MiniCode>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>
          {/* COMPONENT EXAMPLES */}

          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <Box
                  w="100%"
                  p={2}
                  bgGradient={"linear(to-t, exampleRed, examplePurple)"}
                  borderRadius={"sm"}
                >
                  This <Mono>Box</Mono> has a <Mono>linear gradient</Mono>{" "}
                  background.
                </Box>
                <MiniCode>{`<Box bgGradient={"linear(to-t, 
  purple.500, 
  red.500)"}>`}</MiniCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  w="100%"
                  p={2}
                  bgGradient="radial(blue, yellow.700, pink.700)"
                >
                  This <Mono>Box</Mono> has a <Mono>radial gradient</Mono>{" "}
                  background.
                </Box>
                <MiniCode>{`<Box bgGradient="radial(blue, 
  yellow.700, 
  pink.700)">`}</MiniCode>

                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  bgGradient="linear-gradient(to right, red.500, blue.500)"
                  padding={3}
                >
                  This is a box with a linear gradient
                </Box>

                <MiniCode>{`<Box bgGradient="linear-gradient(to right, 
  red.500, 
  blue.500)">`}</MiniCode>

                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <Box
                  bgGradient="radial-gradient(circle, red.500, blue.500)"
                  padding={3}
                >
                  This is a box with a radial gradient
                </Box>

                <MiniCode>{`<Box bgGradient="radial-gradient(circle, 
    red.500, blue.500)">`}</MiniCode>

                <BasicText></BasicText>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <VStack w="100%" spacing={0}>
                <BasicText>
                  To work around the limitation mentioned above, you can define
                  gradient values in the theme and reference them by name:
                </BasicText>
                <MiniCode>{`const theme = extendTheme({
gradients: {
  redToBlue: "linear-gradient(to right, red.500, 
    blue.500)",
  greenToYellow: "linear-gradient(to right, 
    green.500, yellow.500)",
},
})`}</MiniCode>
                <MiniCode>
                  {`// In your component:
<Box bg={{ base: "gradients.redToBlue", 
  md: "gradients.greenToYellow" }}>...</Box>`}
                </MiniCode>
              </VStack>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Gradient Text</b>: While gradients are usually used for
              backgrounds, you can also apply them to your text in Chakra UI.
              This could help you to create unique headings or highlight
              specific parts of your text. It's not a widely used approach, and
              knowing this could add an extra layer of creativity to your
              project:
            </HighlightText>
            <MyFlex>
              <HighlightExample h="50px">
                <Text
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                  fontSize="3xl"
                  fontWeight="bold"
                  m={0}
                >
                  Gradient Text
                </Text>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Text
  bgGradient="linear(to-l, #7928CA, #FF0080)">`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Animating Gradients</b>: While Chakra UI does not have built-in
              gradient animation functionality, you can leverage the power of{" "}
              <b>@keyframes</b> and <b>CSS-in-JS</b> to create beautiful
              gradient animations.
            </HighlightText>
            <HighlightExample h="125px">
              <AnimatedGradient>I am an animated Gradient.</AnimatedGradient>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`import { keyframes } from "@emotion/react";
              
const gradient = keyframes
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }

export function AnimatedGradient({ children }: 
  AnimatedGradientProps) {
  return (
    <Flex w="100%" justify="center">
      <Box
        bgGradient={linear(to-l, 
          {"accent_1"}, {colors.mypurple})}
        backgroundSize="200% 200%"
        animation={{gradient} 2s ease infinite}
        >`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>

          <GridBoxThree>
            <HighlightText>
              <b>On Buttons</b>: You can use gradients on various interactive
              components like buttons to add more color depth and make them more
              appealing. Remember, be sure to maintain a balance, as overuse of
              gradients can make the UI look chaotic.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="60px">
                <Button
                  bgGradient="linear(to-r, yellow.500, blue.500)"
                  w="150px"
                  color="white"
                  _hover={{ bgGradient: "linear(to-r, yellow.500, blue.500)" }}
                  _active={{ bgGradient: "linear(to-r, blue.500, yellow.500)" }}
                >
                  Gradient Button
                </Button>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Highlighter>{`<Button
  bgGradient="linear(to-r, teal.500, green.500)"
>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

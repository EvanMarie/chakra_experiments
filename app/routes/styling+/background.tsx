import { Box, Flex, VStack, useColorModeValue } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  Mono,
  HL,
  MyDivider,
  colors,
  FlexibleBox,
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

export default function ChakraSection() {
  const bgGradient = useColorModeValue(
    "linear(to-r, green.200, pink.500)",
    "linear(to-r, green.700, pink.300)"
  );
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#background">
        Background
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <SectionDescription>
                ⦾ Using background images in Chakra UI can be accomplished by
                applying CSS properties directly on Chakra UI components. Here's
                how you can set background images on Chakra UI components:
              </SectionDescription>
              <Flex w="100%" justifyContent="center">
                <Box
                  bgImage="url('https://picsum.photos/300/150?random=1')"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  w="90%"
                  maxWidth="350px"
                  h="150px"
                  fontWeight="bold"
                  fontSize="xl"
                  color="deeppink"
                  padding={3}
                >
                  Content goes here
                </Box>
              </Flex>

              <Highlighter>{`<Box
  bgImage="url('https://picsum.photos/200/300')"
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  height="150px"
>
  Content goes here
</Box>`}</Highlighter>
              <BasicText>
                In this example, I've used the Box component to create a div
                that has a background image.
              </BasicText>

              <BulletBox>
                <ul>
                  <li>
                    <HL>bgImage</HL>: sets the URL of the background image.
                  </li>
                  <li>
                    <HL>bgPosition</HL>: defines the initial positioning of the
                    background image.
                  </li>
                  <li>
                    <HL>bgRepeat</HL>: sets whether/how the image should repeat.
                  </li>
                  <li>
                    <HL>bgSize</HL>: sets the size of the image, in this case,
                    "cover" ensures the background image covers the entire width
                    and height of the box.
                  </li>
                  <li>
                    <HL>height</HL>: sets a specific height for the box.
                  </li>
                </ul>
              </BulletBox>

              <BasicText>
                It's also possible to use local images stored in your project.
                The way to do it depends on your project setup, but if you're
                using a typical React setup with Webpack, you can import the
                image into your component file and use it like so:
              </BasicText>
              <Highlighter>{`<Box
  bgImage={url({'./path-to-your-image.jpg'})}
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  height="200px"
>
  Content goes here
</Box>`}</Highlighter>
              <DescriptionBox>
                <BasicText>Some description</BasicText>
                {/* IMPORT CODE */}
                <ImportBox>
                  <BasicText>
                    To import the <Mono>Box</Mono> component:
                  </BasicText>
                  <Highlighter>{`import { Box } from "@chakra-ui/react"`}</Highlighter>
                </ImportBox>
              </DescriptionBox>
            </SectionContainer>
          </Box>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BasicText>Box with Background Image:</BasicText>
                <Box>
                  <Box
                    backgroundImage="url('https://picsum.photos/200/300')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    height="200px"
                  ></Box>{" "}
                  <Box paddingBottom={4}>
                    <Highlighter>{`<Box backgroundImage="url('URL.png')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundSize="cover"
  h="200px">`}</Highlighter>
                  </Box>
                </Box>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>Same values with Chakra shorthand:</BasicText>
                <Box>
                  <Box
                    bgImage="url('https://picsum.photos/200/300')"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    height="200px"
                  ></Box>{" "}
                  <Box paddingBottom={4}>
                    <Highlighter>{`<Box backgroundImage="url('URL.png')"
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  h="200px">`}</Highlighter>
                  </Box>
                </Box>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <BasicText>
                  Let's try some different values to see their effects:{" "}
                </BasicText>
                <Box>
                  <Box
                    bgImage="url('https://picsum.photos/200/300')"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    height="300px"
                  ></Box>{" "}
                  <Box paddingBottom={4}>
                    <Highlighter>{`<Box backgroundImage="url('URL.png')"
  h="300px">`}</Highlighter>
                  </Box>
                </Box>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            Chakra UI allows you to add a fallback background color for your
            background images. This is helpful to maintain the aesthetic of your
            design in case the image fails to load. In the following example, if
            the image fails to load, the <b>Box</b> component will display a
            fallback background color (in this case, <b>teal.500</b>).
            <MyFlex>
              <Box
                bgImage="url('https://www.wrongaddress.com')"
                bg="teal.500"
                height="200px"
                width="200px"
              />
            </MyFlex>
            <Highlighter>{`<Box
  bgImage="url('https://www.wrongaddress.com')"
  bg="teal.500"
  height="200px"
  width="200px"
/>`}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            Chakra UI provides a <b>bgRepeat</b> property which allows you to
            control if and how a background image is repeated. You can specify
            <b>no-repeat</b>, <b>repeat</b>, <b>repeat-x</b>, <b>repeat-y,</b>
            or <b>round</b> as values. In this example, the image is used as a
            background image for the <b>Box</b> component and is set not to
            repeat.
            <MyFlex>
              <Box
                bgImage="url('https://picsum.photos/200/200')"
                bgRepeat="no-repeat"
                height="200px"
                width="200px"
              />
            </MyFlex>
            <Highlighter>{`<Box
  bgImage="url('https://picsum.photos/200/200')"
  bgRepeat="no-repeat"
  height="200px"
  width="200px"
/>`}</Highlighter>
          </GridBoxTwo>
          <GridBoxThree>
            Tou can also use gradients as background images in Chakra UI. Using
            the <b>linearGradient</b> or <b>radialGradient</b> utilities, you
            can create smooth transitions between multiple colors.
            <MyFlex>
              {" "}
              <Box bgGradient={bgGradient} height="200px" width="200px" />
            </MyFlex>
            <Highlighter>{`const bgGradient = useColorModeValue(
  "linear(to-r, green.200, pink.500)",
  "linear(to-r, green.700, pink.300)"
)
return (
  <Box 
    bgGradient={bgGradient}
    height="200px"
    width="200px"
    />`}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>
    </BigBackgroundBox>
  );
}

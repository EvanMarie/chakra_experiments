import { Box, VStack } from "@chakra-ui/react";
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
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#background">
        Background
      </MyLabel>
      <MainGrid>
        <GridColumn>
          <Box>
            {/*  Section Introduction */}
            {/* COMPONENT DESCRIPTION */}
            <SectionContainer paddingBottom={2} mb={0}>
              <BasicText color={colors.mainAccent3}>
                ⦾ Using background images in Chakra UI can be accomplished by
                applying CSS properties directly on Chakra UI components. Here's
                how you can set background images on Chakra UI components:
              </BasicText>
              <Box
                bgImage="url('https://picsum.photos/300/150?random=1')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="150px"
                fontWeight="bold"
                fontSize="xl"
                color="deeppink"
                padding={3}
              >
                Content goes here
              </Box>

              <Highlighter>{`<Box
  bgImage="url('https://picsum.photos/200/300?random=1')"
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
              <Highlighter>{`    <Box
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
          <ExampleBox paddingX={5}>
            <SectionContainer>
              <VStack w="100%" spacing={0}>
                <Box>
                  <BasicText>
                    The Following is a Box with background properties:{" "}
                  </BasicText>
                  <Box paddingX={4} paddingBottom={4}>
                    <Highlighter>{`<Box backgroundImage="url('URL.png')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundSize="cover"
  h="200px">`}</Highlighter>
                  </Box>
                  <FlexibleBox
                    backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    h="200px"
                  ></FlexibleBox>
                </Box>
                <SectionContainer>
                  <Box>
                    <p>
                      The Following is a the short hand version of the same:{" "}
                    </p>
                    <Box paddingX={4} paddingBottom={4}>
                      <Highlighter>{`bgImage="url('URL.png')"
bgPosition="center" 
bgRepeat="no-repeat"
bgSize="cover"
h="200px"`}</Highlighter>
                    </Box>
                  </Box>
                  <Box
                    bgImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    backgroundSize="cover"
                    h="200px"
                  />
                </SectionContainer>
                <SectionContainer>
                  <Box>
                    <p>
                      Let's try some different values to see their effects:{" "}
                    </p>
                    <Box paddingX={4} paddingBottom={4}>
                      <Highlighter>{`h="300px"`}</Highlighter>
                    </Box>
                  </Box>
                  <Box
                    bgImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png')"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    backgroundSize="cover"
                    h="300px"
                  />
                </SectionContainer>
              </VStack>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>Highlight coming soon!</GridBoxOne>
          <GridBoxTwo>Highlight coming soon!</GridBoxTwo>
          <GridBoxThree>Highlight coming soon!</GridBoxThree>
        </HighlightColumn>
      </MainGrid>
    </BigBackgroundBox>
  );
}

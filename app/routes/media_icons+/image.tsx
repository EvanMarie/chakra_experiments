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
import * as Media from "~/mardownExamples/media_icons/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Link } from "@chakra-ui/react";
import {
  ImageFive,
  ImageFour,
  ImageOne,
  ImageThree,
  ImageTwo,
} from "~/components/media_icons/imageComponents";
import {
  ClickableImage,
  ImageWithCaption,
  ImageWithFilter,
} from "~/components/media_icons/imageFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/image" size={28}>
        Image
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Image</Mono> component from Chakra UI is a reliable
              and versatile tool to handle images in your React applications. It
              extends the native img HTML element and enhances it with extra
              features and built-in styling options to provide a smoother
              developer experience. It is an efficient and powerful tool for
              handling images in your React application. Its ease of use and
              out-of-the-box enhancements to the <Mono>img</Mono> element make
              it an attractive choice for developers.
            </SectionDescription>
            <BasicText>
              One of the major advantages of using the Chakra UI{" "}
              <Mono>Image</Mono> component is its automatic handling of fallback
              UI. In a scenario where your image fails to load, instead of
              displaying a broken image symbol, Chakra UI Image allows you to
              specify a fallback UI that will be displayed. This ensures a more
              polished user experience.
            </BasicText>
            <BasicText>
              The <Mono>Image</Mono> component is also lazy-loaded by default,
              which means the images will only load when they appear in the
              viewport. This optimizes your application's performance by
              reducing initial loading times, particularly when dealing with
              large images or many images on a page. Moreover, it comes with
              support for responsive design out of the box. You can specify an
              array of image sources, and Chakra UI will choose the best one
              based on the current screen resolution, maximizing the efficiency
              of bandwidth usage.
            </BasicText>

            {/* IMPORT CODE */}
            <ImportBox>
              <BasicText>This component can be imported as follows:</BasicText>
              <Highlighter>{`import { Image } from '@chakra-ui/react'`}</Highlighter>
            </ImportBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <ImageOne />
                <ModalCode>
                  <Media.E07 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ImageTwo />
                <ModalCode>
                  <Media.E08 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ImageThree />
                <ModalCode>
                  <Media.E09 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ImageFour />
                <ModalCode>
                  <Media.E10 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ImageFive />
                <ModalCode>
                  <Media.E11 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Adding Captions to Images</b>: Sometimes, you may want to add a
              caption to an image. While there isn't a dedicated caption prop,
              we can achieve this by wrapping the Image component within a{" "}
              <b>Box</b>, <b>Flex</b> or a <b>Figure</b> and then adding a{" "}
              <b>Figcaption</b> component.
            </HighlightText>
            <HighlightExample h="200px">
              <MyFlex>
                <ImageWithCaption />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Media.H04 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Clickable Image</b>: What if you want the image to be
              clickable, perhaps to open a larger version of the image or
              navigate to a different page? You can easily achieve this by
              wrapping the <b>Image</b> component with the Link component. In
              this example, clicking on the image will open a new tab with the
              URL specified in the <b>Link</b> component's href prop.
            </HighlightText>
            <HighlightExample h="175px">
              <MyFlex>
                <ClickableImage />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Media.H05 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Adding Image Filters</b>: While Chakra UI doesn't provide image
              filters out of the box, you can utilize CSS filters via the filter
              prop to modify the visual presentation of your images. You can
              read more about this in the{" "}
              <Link href="/styling/filter">section dedicated to filters</Link>.
            </HighlightText>
            <HighlightExample h="175px">
              <MyFlex>
                <ImageWithFilter />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Media.H06 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

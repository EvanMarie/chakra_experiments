import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import * as Feedback from "~/mardownExamples/feedback/index";

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
  ViewCode,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  DataTableSkeleton,
  ImageWithSkeleton,
  SkeletonFive,
  SkeletonFour,
  SkeletonOne,
  SkeletonSeven,
  SkeletonSix,
  SkeletonThree,
  SkeletonTwo,
} from "~/components/feedback/skeletons";
import { Box, Skeleton } from "@chakra-ui/react";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/skeleton" size={28}>
        Skeletons
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Skeleton</Mono> component in Chakra UI is a content
              placeholder used to suggest that content is loading. They provide
              a low fidelity representation of the content that is loading and
              are typically used to improve perceived performance and offer a
              more seamless user experience.{" "}
            </SectionDescription>
            <BasicText>
              Skeleton components can be used in a wide range of scenarios, such
              as when loading a page, an image, or a piece of text content. By
              using a <Mono>Skeleton</Mono> component, you can prevent abrupt
              changes in your application, providing a smoother visual
              transition as content loads.{" "}
            </BasicText>
            <BasicText>
              One of the key features of the <Mono>Skeleton</Mono> component is
              its animation. By default, it uses a shimmer effect to better
              convey the loading state to the user. You can control whether this
              animation is active or not, and can also customize the speed of
              the animation. The <Mono>Skeleton</Mono> component in Chakra UI is
              highly flexible and can be adapted to fit a variety of shapes and
              sizes based on the content it's replacing. You can control its
              width, height, and other box model properties to fit your needs.{" "}
            </BasicText>
            <BasicText>
              As far as accessibility, Chakra UI applies the appropriate{" "}
              <Mono>ARIA</Mono> roles and properties to the{" "}
              <Mono>Skeleton</Mono> component to indicate to assistive
              technologies that the content is being loaded. This makes it an
              excellent tool for building inclusive and performant user
              interfaces.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>isLoaded</HL>: Determines if the skeleton should still be
                  shown or if the content is ready and should be displayed.
                </li>
                <li>
                  <HL>startColor / endColor</HL>: Controls the animation's color
                  at the start and end. Typically you'll want to keep these
                  subtle.
                </li>
                <li>
                  <HL>fadeInDuration</HL>: Determines the duration of the
                  fade-in animation when the isLoaded prop becomes true.
                </li>
                <li>
                  <HL>speed</HL>: Controls the speed of the shimmer animation.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import these components:</BasicText>
                <Highlighter>{`import { 
  Skeleton, 
  SkeletonCircle, 
  SkeletonText } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SkeletonOne />
                <Highlighter>{`<Stack>
  <Skeleton height="20px" />
  <Skeleton height="20px" />
  <Skeleton height="20px" />
</Stack>`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SkeletonTwo />
                <Highlighter>{`<Skeleton>
  <div>contents wrapped</div>
  <div>won't be visible</div>
</Skeleton>`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SkeletonThree />
                <Feedback.E06 />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SkeletonFour />
                <Highlighter>{`<SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SkeletonFive />
                <Highlighter>{`<Skeleton startColor="pink.500" endColor="blue.500" height="20px" />`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SkeletonSix />
                <Highlighter>{`<Skeleton isLoaded><span>No skeleton to see here.</span></Skeleton>`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SkeletonSeven />
                <Highlighter>{`function FadeDurationSkeleton() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Stack
      padding={4}
      spacing={1}
      color="black"
      fontWeight="bold"
      fontFamily="monospace"
      textAlign="center"
      fontSize="18px"
    >
      <Skeleton height="40px" isLoaded={isLoaded} bg={"accent_1"}>
        <Box>I hope</Box>
      </Skeleton>
      <Skeleton
        height="40px"
        isLoaded={isLoaded}
        bg={"accent_2"}
        fadeDuration={1}
      >
        <Box>that you</Box>
      </Skeleton>
      <Skeleton
        height="40px"
        isLoaded={isLoaded}
        fadeDuration={4}
        bg={"accent_3"}
      >
        <Box>have a great day!</Box>
      </Skeleton>

      <Box textAlign="center">
        <Button marginTop={2} onClick={() => setIsLoaded((v) => !v)}>
          Press!
        </Button>
      </Box>
    </Stack>
  );
}

export default FadeDurationSkeleton;`}</Highlighter>{" "}
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <b>Skeleton for Card Layout</b>: In case you have a card layout that
            takes a while to populate, Skeletons can be a visually engaging way
            to keep the user interested.
            <MyFlex>
              <HighlightExample h="90px">
                <Box w="100%" padding={3} boxShadow="lg" bg="white">
                  <Skeleton height="20px" speed={1.7} />
                  <Skeleton height="20px" width="80%" speed={1.7} />
                </Box>
              </HighlightExample>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`<Box w="100%" padding={3} boxShadow="lg" bg="white">
  <Skeleton height="20px" speed={1.7} />
  <Skeleton height="20px" width="80%" speed={1.7} />
</Box>`}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <b>Table Data Loading with Skeleton Rows</b>: When fetching data to
            fill a table, it can be a great UX choice to use <b>Skeleton</b>{" "}
            rows that correspond to the structure of your actual data rows.
            <MyFlex>
              <HighlightExample h="220px">
                <DataTableSkeleton />
              </HighlightExample>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`export function DataTableSkeleton() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th color="white">Name</Th>
          <Th color="white">Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {[...Array(3)].map((_, i) => (
          <Tr key={i}>
            <Td>
              <Skeleton height="20px" speed={1.7} />
            </Td>
            <Td>
              <Skeleton height="20px" speed={1.7} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}`}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <b>Skeleton for Image Loading</b>: Images often take a significant
            time to load. While waiting for an image to load, you can use the
            Skeleton component as a placeholder
            <MyFlex>
              <ImageWithSkeleton />
            </MyFlex>
            <ViewCode>
              <Highlighter>{`export function ImageWithSkeleton() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <Skeleton isLoaded={hasLoaded} boxSize="200px">
      <Image
        src="https://placekitten.com/200/200"
        onLoad={() => setHasLoaded(true)}
        alt="A cute kitten"
      />
    </Skeleton>
  );
}`}</Highlighter>
            </ViewCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

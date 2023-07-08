import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
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
  ContainerOne,
  ContainerTwo,
  ContainerThree,
} from "~/components/layout/containerComponents";
import {
  BlogPost,
  InteractiveHeroSection,
  PriceTable,
} from "~/components/layout/containerFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/container" size={28}>
        Container
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Container</Mono> component is used to constrain the
              width of content based on the current breakpoint while maintaining
              fluidity. It offers several features and options to enhance your
              design and development workflow.
            </SectionDescription>
            <BasicText>
              By incorporating the <Mono>Container</Mono> component, you can
              easily control the width of your content while maintaining a
              consistent design system. The flexibility provided by the
              Container component allows for responsive designs across different
              breakpoints.
            </BasicText>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Container</Mono> component can be imported as
                  follows:
                </BasicText>
                <Highlighter>{`import { Container } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* /* ********************************************************** */}
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <ContainerOne />
                <ModalCode>
                  <Highlighter>{`<Container w="300px">
    In a world where silver whispers dance, there exists a chinchilla
    named Chihiro. With a coat adorned in glistening hues, Chihiro brings
    a touch of enchantment to every moment. Graceful and serene, this
    furry companion captures hearts with its luminous eyes and delicate
    charm. In the twilight hours, Chihiro's playful spirit awakens,
    filling the air with joyful leaps and twinkling mischief. A radiant
    presence that illuminates our lives, Chihiro invites us to embrace the
    magic found within the company of a silver chinchilla.
</Container>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ContainerTwo />
                <ModalCode>
                  <Highlighter>{`<VStack w="100%">
    <Container maxW="md" bg="accent_1" color="background">
    </Container>
    <Container maxW="550px" bg="accent_2" color="background">
    </Container>
    <Container maxW="20ch" bg="tipBackground" color="background">
    </Container>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <ContainerThree />
                <ModalCode>
                  <Highlighter>{`<Container maxW="xl" bg="gray.700" centerContent>
    <Box padding="4" bg="accent_2" color="background" maxW="md">
        Once upon a time, in a tranquil pond nestled amidst a lush green
        forest, there lived a little frog named George. George was a curious
        and adventurous frog, always eager to explore beyond the confines of
        his watery home. With each hop, he embarked on daring escapades,
        hopping from lily pad to lily pad, and occasionally venturing onto the
        moss-covered rocks at the pond's edge. George's vibrant emerald skin
        shimmered under the golden sunlight, captivating the eyes of those who
        crossed his path. One day, as George leaped through the air, a gentle
        breeze carried him to a distant meadow. Surrounded by colorful
        wildflowers and swaying grass, George marveled at the vastness of the
        world outside his pond. With newfound excitement in his heart, George
        vowed to continue his extraordinary journeys, eager to discover the
        wonders that awaited him beyond the confines of his watery abode. And
        so, the adventurous frog, George, leaped forward, his next adventure
        calling him to explore the unknown.
    </Box>
</Container>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        {/* /* ********************************************************** */}

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Hero Section</b>: This example creates an attention-grabbing
              hero section with a fixed position and full-screen coverage. The{" "}
              <b>Container</b> component acts as the central container,
              providing structure and responsiveness to the content within the
              hero section. It allows you to customize the maximum width of the
              content and ensures consistent and visually appealing layouts
              across different devices. With the <b>HeroSection</b> component,
              you can easily create captivating hero sections that make a
              lasting impression on your users.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex>
                <InteractiveHeroSection />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H07 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Responsive Pricing Table</b>: Pricing tables are often an
              essential component of websites offering various plans or
              subscription options. With the <b>Container</b> component, you can
              build a responsive pricing table that adjusts its width based on
              different screen sizes, all the while maintaining an attractive
              layout.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex px={1}>
                <PriceTable />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H08 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Blog Post Layout</b>: In this example, we've utilized the{" "}
              <b>Container</b> component to create a blog post layout. The{" "}
              <b>Box</b> component inside the <b>Container</b> represents a
              single blog post. It includes a heading, a brief excerpt or
              description of the blog post, and a "Read More" button for users
              to access the full article. The <b>Container</b> component keeps
              the blog post content within a fixed width, ensuring that the
              content is easy to read and visually appealing.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex px={1}>
                <BlogPost />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Layout.H09 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

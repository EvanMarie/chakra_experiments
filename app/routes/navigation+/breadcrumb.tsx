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
import { BiHome } from "react-icons/bi";
import styles from "~/styles/codeMarkdown.css";
import * as Navigation from "~/mardownExamples/navigation/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  BreadcrumbFive,
  BreadcrumbFour,
  BreadcrumbOne,
  BreadcrumbSix,
  BreadcrumbThree,
  BreadcrumbTwo,
  CustomHomeBreadcrumb,
  DynamicBreadcrumb,
  InteractiveBreadcrumb,
} from "~/components/navigation/breadcrumbComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel
        link="https://chakra-ui.com/docs/components/breadcrumb"
        size={28}
      >
        Breadcrumb
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ In web and app design, breadcrumb navigation serves a dual
              purpose. First, it provides users with a roadmap to their journey
              through a website or application, offering a clear path back to
              the starting point. This aids users in understanding their
              location relative to the site's hierarchy, fostering a better user
              experience. Secondly, breadcrumbs contribute to improved SEO, as
              search engines can also use this path to more effectively
              understand and index the site's content.
            </SectionDescription>
            <BasicText>
              The Chakra UI <Mono>Breadcrumb</Mono> component, an essential part
              of this design strategy, provides these benefits and gives users
              an intuitive understanding of their location within a website's
              structure.
            </BasicText>

            <BasicText>
              The Chakra UI Breadcrumb functionality is structured through four
              key components:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Breadcrumb</HL>: This component acts as the parent
                  container for all breadcrumbs.
                </li>
                <li>
                  <HL>BreadcrumbItem</HL>: An individual breadcrumb element,
                  consisting of a link and a separator.
                </li>
                <li>
                  <HL>BreadcrumbLink</HL>: A specific link within the
                  breadcrumb.
                </li>
                <li>
                  <HL>BreadcrumbSeparator</HL>: A visual cue that separates each
                  breadcrumb link.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                When a user navigates from one page to another, the{" "}
                <Mono>Breadcrumb</Mono> component updates the{" "}
                <Mono>isCurrentPage</Mono> prop of the respectiveBreadcrumbItem{" "}
                <Mono>BreadcrumbItem</Mono> to keep track of the user's current
                location. In other words, the <Mono>isCurrentPage</Mono> prop is
                set to the <Mono>BreadcrumbItem</Mono> that corresponds to the
                current page.
              </BasicText>
              <BasicText>
                However, it's important to note that the <Mono>Breadcrumb</Mono>{" "}
                component does not automatically keep track of the current page.
                The <Mono>isCurrentPage</Mono> prop needs to be programmatically
                updated, typically using a routing library like React Router or
                Reach Router. These libraries keep track of the current page and
                isCurrentPageinformation to correctly set the{" "}
                <Mono>isCurrentPage</Mono> prop. For further reference and help
                in understanding, the following code link will show you how the
                Breadcrumb component is used for this site.
              </BasicText>
              <ModalCode>
                <Navigation.E01 />
              </ModalCode>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BreadcrumbOne />
                <ModalCode>
                  <Navigation.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BreadcrumbTwo />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BreadcrumbThree />
                <ModalCode>
                  <Navigation.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>
                  <BreadcrumbFour />
                </Box>
                <ModalCode>
                  <Navigation.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BreadcrumbFive />
                <ModalCode>
                  <Navigation.E07 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <Box>
                  <BreadcrumbSix />
                </Box>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Dynamic Breadcrumbs</b>: An interesting way to use the{" "}
              <b>Breadcrumb</b> component is by making it dynamic. This is
              particularly useful in cases where your website has multiple
              nested levels and the exact hierarchy isn't known beforehand. The{" "}
              <b>Breadcrumb</b> items can be created and updated on the fly as
              users navigate through your site. For instance, if you have a blog
              site with multiple categories and sub-categories, the{" "}
              <b>Breadcrumb</b> items can be updated based on the category and
              sub-category the user is currently browsing.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <DynamicBreadcrumb />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Customized Breadcrumb Items</b>: While <b>Breadcrumbs</b>{" "}
              generally use text for navigation, Chakra UI allows for customized
              <b>Breadcrumb</b> items. This could mean incorporating icons or
              images, or changing colors and fonts for specific items. For
              example, you could use an icon for the 'Home' link instead of the
              text, which can provide a visually engaging and user-friendly
              navigation experience.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <CustomHomeBreadcrumb />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Interactive Breadcrumbs</b>: The <b>Breadcrumb</b> component
              can also be made interactive, adding a new layer of user
              experience. This could be done by adding hover, focus, or click
              effects to the Breadcrumb items. For instance, you could display
              additional information related to a Breadcrumb item when the user
              hovers over it.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <InteractiveBreadcrumb />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Navigation.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

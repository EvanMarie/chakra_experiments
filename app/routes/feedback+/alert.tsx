import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  // Mono,
  // Flex,
  // Text,
  HL,
  Mono,
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
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import * as Feedback from "~/mardownExamples/feedback/index";
import { LuFileWarning } from "react-icons/lu";

import {
  AlertFive,
  AlertFour,
  AlertOne,
  AlertThree,
  AlertTwo,
  Message,
} from "~/components/feedback/alert";
import { Alert, AlertIcon, Box, Link } from "@chakra-ui/react";
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
      <MyLabel link="https://chakra-ui.com/docs/components/alert" size={28}>
        Alert
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾The Alert component offered by Chakra UI is a versatile and
              accessible tool for giving user feedback based on interactions or
              conveying system statuses. This component enables swift
              communication of critical information to users, such as success,
              error, warning, or informational messages.
              <BasicText>
                <Mono>Alert</Mono> components provide a high degree of
                adaptability and can be tailored to match the aesthetic theme of
                your application. You can adjust the look of the alert (
                <Mono>solid</Mono> or
                <Mono>subtle</Mono>), the status or category of the alert (
                <Mono>information</Mono>,<Mono>success</Mono>,{" "}
                <Mono>warning</Mono>, or <Mono>error</Mono>), and the presence
                of a close button. All these aspects contribute to making the
                Alert component an essential instrument in improving the user
                experience of your application.
              </BasicText>
            </SectionDescription>
            <BasicText>
              These are the main parts of an <Mono>Alert</Mono> component.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Alert</HL>: This is the container for the Alert
                  components.
                </li>
                <li>
                  <HL>AlertIcon</HL>: This is the icon accompanying the alert,
                  changing its appearance based on the status prop.
                </li>
                <li>
                  <HL>AlertTitle</HL>: This is the headline of the alert and
                  it's read aloud by screen readers.
                </li>
                <li>
                  <HL>AlertDescription</HL>: This is the detailed explanation of
                  the alert, which is also announced by screen readers.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import these components:</BasicText>
                <MiniCode>{`import { 
  Alert,
  AlertIcon, 
  AlertTitle, 
  AlertDescription } from "@chakra-ui/react";`}</MiniCode>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <AlertOne />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AlertTwo />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AlertThree />
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AlertFour />
                <ModalCode>
                  <Feedback.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AlertFive />
                <ModalCode>
                  <Feedback.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxTwo>
            <HighlightText>
              <b>Custom Alert Icon</b>: you can replace the default{" "}
              <b>AlertIcon</b> with your own custom icon. This can be helpful
              for better aligning with the visual language of your application.
              Here's a simple that eplaces the default <b>AlertIcon</b> with a
              different icon from the <b>"react-icons"</b> library, which could
              be adjusted to any custom icon you prefer.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content" color="background" p={4}>
                <Alert status="error">
                  <AlertIcon as={LuFileWarning} boxSize="30px" />
                  <Box flex="1">A custom error icon for alerts.</Box>
                </Alert>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Feedback.H01 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxOne>
            <HighlightText>
              <b>Embedding Links in Alerts</b>: <b>Alerts</b> can contain more
              than just plain text; they can include hyperlinks as well. This is
              useful for directing users to more detailed information or related
              pages. In the following example, a link to the "documentation"
              page is added directly within the Alert's description.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content" color="background" p={4}>
                <Alert status="info">
                  <AlertIcon />
                  <Box flex="1">
                    For more details, visit{" "}
                    <Link color="teal.500" href="#">
                      our documentation
                    </Link>
                    .
                  </Box>
                </Alert>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Feedback.H02 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxThree>
            <HighlightText>
              <b>Creating a Custom Alert Component:</b> Instead of using the
              standard alerts provided by Chakra UI, you can create your own
              custom alert component. This component can integrate various
              styles and other Chakra UI components. Here's a simple example of
              how to create a custom <b>"Message"</b> alert component, which
              creates a custom Message that aligns content in the center (both
              horizontally and vertically), uses a laughing emoji as the{" "}
              <b>AlertIcon</b>, and can accept status and children props. The
              component could be adjusted to include other Chakra UI components
              or props, or additional formatting or behavior, to suit the needs
              of your application. The customizability of Chakra UI's components
              like Alert allows you to create bespoke elements like this to
              better align with the design and functionality requirements of
              your project.
            </HighlightText>
            <MyFlex>
              <HighlightExample h="fit-content" color="background" p={4}>
                <Message status="info">
                  I'm a happy little custom message!
                </Message>
              </HighlightExample>
            </MyFlex>
            <ModalCode>
              <Feedback.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

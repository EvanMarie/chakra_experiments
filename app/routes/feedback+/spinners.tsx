import { Box, Spinner } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  CollapsibleExample,
  HL,
  Mono,
} from "~/styles/DesignComponents";

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
  ViewCode,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  ScoreSlider,
  ScoreSpinner,
  SpinnerTabs,
  SubmitButton,
} from "~/components/feedback/spinnerExamples";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/spinner" size={28}>
        Spinners
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <HL>Spinners</HL> component in Chakra UI is a feedback
              indicator mainly used for visualizing an unspecified wait time
              where the length of the task is unknown.{" "}
            </SectionDescription>
            <BasicText>
              Spinners are animated graphical controls that spin to indicate
              that a process is currently ongoing. They are often used for tasks
              such as loading data, submitting forms, or any asynchronous
              operations where the completion time cannot be estimated. Key
              features of the Spinner component in Chakra UI are its simplicity
              and its customizable appearance.{" "}
            </BasicText>
            <BasicText>
              You can easily change the size and color of the Spinner to match
              the look and feel of your application. Unlike <HL>Progress</HL> or{" "}
              <HL>CircularProgress</HL> components, Spinners do not represent a
              percentage completion, but rather the ongoing nature of a task.
              This makes them suitable for scenarios where the duration of the
              task is unpredictable.{" "}
            </BasicText>
            <BasicText>
              In terms of accessibility, Chakra UI takes care of that by giving
              the Spinner component a role of 'status' and providing a fallback
              status message of 'Loading...', ensuring that screen reader users
              are also informed about the ongoing operation.
            </BasicText>

            <DescriptionBox>
              <BasicText>Some description</BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import this component:</BasicText>
                <Highlighter>{`import { Spinner } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                This is a basic <Mono>Spinner</Mono> component. It uses the
                default size, color, thickness, and speed values provided by
                Chakra UI.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} color="red.500" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner color="red.500" />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This <Mono>Spinner</Mono> component has been customized with a
                specific color. The color of the spinner is set to "red.500"
                from the Chakra UI color scheme.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="xs" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="xs" />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This example features a very small spinner. The size property of
                the <Mono>Spinner</Mono> has been set to "xs", which is the
                smallest size available in Chakra UI.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="sm" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="sm" />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This is a small-sized spinner. The size property is set to "sm",
                making the spinner a bit larger than the "xs" size but still
                quite small.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="md" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="md" />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                {" "}
                This example shows a medium-sized spinner. By setting the size
                property to "md", it produces a spinner of moderate size.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="lg" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="lg" />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                Here, a large spinner is displayed. The size of the spinner is
                set to <Mono>"lg"</Mono>, resulting in a larger, more noticeable
                loading animation.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner key={1} size="xl" />,
                  <Box key={2}>
                    <Highlighter>{`<Spinner size="xl" />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                This spinner is extra large, set with the "xl" value, making it
                the biggest standard size for the Spinner component in Chakra
                UI.
              </BasicText>
            </SectionContainer>
            <SectionContainer>
              <CollapsibleExample>
                {[
                  <Spinner
                    key={1}
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />,

                  <Box key={2}>
                    <Highlighter>{`<Spinner thickness="4px" speed="0.65s"
    emptyColor="gray.200" color="blue.500" 
    size="xl" />`}</Highlighter>
                  </Box>,
                ]}
              </CollapsibleExample>
              <BasicText>
                This is a heavily customized spinner. The thickness is set to{" "}
                <Mono>"4px"</Mono>, making the rotating line of the spinner four
                pixels wide. The speed is set to "0.65s", which means each full
                rotation of the spinner takes 0.65 seconds. The{" "}
                <Mono>emptyColor</Mono> property is set to{" "}
                <Mono>"gray.200"</Mono>, which colors the non-active section of
                the spinner. The color is set to <Mono>"blue.500"</Mono>, which
                specifies the color of the active section of the spinner. The{" "}
                <Mono>"xl"</Mono>, making this a large, noticeable, and
                customized spinner.
              </BasicText>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>
        <HighlightColumn>
          <GridBoxOne>
            <b>Loading state spinner in a button</b>: Suppose we are working on
            a form submission. Upon clicking the submit button, we can replace
            the button text with a spinner to indicate the form is being
            processed. The following example shows a button that, when clicked,
            will display a spinner instead of its text for two seconds,
            simulating a form submission process.
            <MyFlex>
              <SubmitButton />
            </MyFlex>
            <ViewCode>
              <Highlighter>{`export function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <Button w="80px" onClick={handleClick} isLoading={isLoading} loadingText="">
      {isLoading ? <Spinner color="white" w="80px" /> : "Submit"}
    </Button>
  );
}`}</Highlighter>
            </ViewCode>
          </GridBoxOne>
          <GridBoxTwo>
            <b>ScoreSpinner</b>: takes a score as its prop. Depending on the
            score value, the spinner's color varies from bright red when a
            user's score is not so good to green when a user's score is great.
            To illustrate this, we've created an interactive slider that adjusts
            the score value dynamically, altering the spinner's color in
            real-time. This visually compelling, color-coded spinner provides an
            immediate, intuitive sense of the score's value, making it a useful
            tool for displaying data or status in a user-friendly way.
            <MyFlex>
              <HighlightExample h="150px">
                <ScoreSlider />
              </HighlightExample>
            </MyFlex>
            <ViewCode>
              <Highlighter>{`interface ScoreSpinnerProps {
  score: number;
}

export function ScoreSpinner({ score }: ScoreSpinnerProps) {
  let color = "lime";
  if (score > 70) color = "lime";
  else if (score > 60) color = "cyan"; 
  else if (score > 40) color = "yellow"; 
  else if (score > 30) color = "orange"; 
  else color = "red"; // bright red color

  return <Spinner color={color} size="xl" />;
}

export function ScoreSlider() {
  const [score, setScore] = useState(50);

  return (
    <VStack spacing={3}>
      <ScoreSpinner score={score} />

      <h3>Your score is: {score}</h3>

      <Box w="175px">
        <Slider
          min={0}
          max={100}
          step={1}
          value={score}
          onChange={(value) => setScore(value)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </VStack>
  );
}`}</Highlighter>
            </ViewCode>
          </GridBoxTwo>
          <GridBoxThree>
            <b>Spinner color schemes</b>: the following example is a vertical
            set of tabs where each tab represents a different color scheme. When
            you click on a tab, you'll see two examples of a spinner with the
            chosen color scheme - one on a light background and the other on a
            dark one. This allows you to easily compare how the color scheme
            affects the spinner's appearance in different environments. You can
            also see the effects of the thickness of the spinner visually.
            <MyFlex>
              <SpinnerTabs />
            </MyFlex>
            <ViewCode>
              <Highlighter>{`interface ColorSchemeSpinnerProps {
  colorScheme: string;
  thickness: number;
}

const ColorSchemeSpinner = ({
  colorScheme,
  thickness,
}: ColorSchemeSpinnerProps) => {
  const color = useColorModeValue('{colorScheme}.500', '{colorScheme}.200');

  return (
    <Box display="flex" justifyContent="center">
      <Spinner
        color={color}
        size="xl"
        thickness={'{thickness}px'}
        p={0}
        m={0}
      />
    </Box>
  );
};

export function SpinnerTabs() {
  const [thickness, setThickness] = useState(4);
  const colorSchemes = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
  ];

  return (
    <Box w="100%" maxWidth="400px" h="350px" bg="gray.700" color="white" p={2}>
      <Tabs colorScheme="cyan" orientation="vertical" size="sm" isLazy>
        <TabList overflowY="auto" maxH="350px">
          {colorSchemes.map((colorScheme) => (
            <Tab key={colorScheme}>{colorScheme}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {colorSchemes.map((colorScheme) => (
            <TabPanel key={colorScheme} h="100%" p={0} m={0}>
              <MyFlex w="100%" h="100%">
                <VStack w="100%" h="100%" spacing={5} alignItems="space-around">
                  <MyFlex
                    bg="white"
                    h="110px"
                    justify="center"
                    align="center"
                    p={0}
                    m={0}
                  >
                    <ColorSchemeSpinner
                      colorScheme={colorScheme}
                      thickness={thickness}
                    />
                  </MyFlex>
                  <MyFlex
                    bg="gray.800"
                    h="110px"
                    justify="center"
                    align="center"
                    p={0}
                    m={0}
                  >
                    <ColorSchemeSpinner
                      colorScheme={colorScheme}
                      thickness={thickness}
                    />
                  </MyFlex>
                </VStack>
              </MyFlex>
              <Box paddingRight={3}>
                <Slider
                  aria-label="slider-ex-5"
                  value={thickness}
                  onChange={setThickness}
                  min={1}
                  max={12}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="cyan.400" as={RxWidth} />
                  </SliderThumb>
                </Slider>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
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

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
  SectionHeading,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import * as Data from "~/mardownExamples/data_display/index";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  Box,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tooltip,
} from "@chakra-ui/react";
import RealTimeStat from "~/components/data_display/statComponent";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/stat" size={28}>
        Stat
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ When building an application or a dashboard, you often need to
              display some statistics or key data points. That's where the{" "}
              <Mono>Stat</Mono> component from Chakra UI comes in handy. It's
              designed to help display these pertinent pieces of information
              effectively.
            </SectionDescription>
            <BasicText>
              {" "}
              The <Mono>Stat</Mono> component is a set of components for
              displaying statistic content. It's a composable component that you
              can use to display essential metrics or statistics in a readable
              manner.
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Stat</HL>: The primary component that serves as the
                  container for a single statistic. It's responsible for
                  arranging the sub-components and giving the overall look and
                  feel of the statistic.
                </li>
                <li>
                  <HL>StatLabel</HL>: This sub-component is used to represent
                  the description of the statistic. It's generally a small piece
                  of text that explains what the stat is about.
                </li>
                <li>
                  <HL>StatNumber</HL>: This is the heart of the Stat component.
                  It's used to display the numeric value of the statistic. It's
                  typically the most prominent part of the Stat, as it contains
                  the actual value that we're interested in.
                </li>
                <li>
                  <HL>StatHelpText</HL>: This sub-component provides additional
                  context or information about the statistic. It can be used to
                  display a range of dates that the statistic covers, or any
                  other explanatory text.
                </li>
                <li>
                  <HL>StatArrow</HL>: This sub-component is used to indicate a
                  trend or change in the statistic. It shows either an upward or
                  downward arrow based on the type prop (which can be either
                  "increase" or "decrease"). This provides a visual indication
                  of whether the stat has increased or decreased.
                </li>
                <li>
                  <HL>StatGroup</HL>: This component is used when you need to
                  display a group of statistics. It acts as a container for
                  multiple Stat components. It ensures the stats are arranged
                  and spaced nicely, making it ideal for displaying several
                  related statistics together.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Basic Usage</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ Let's say we want to display the total revenue of an
                      online store. In this example, <Mono>StatLabel</Mono>{" "}
                      represents the description of the statistic,{" "}
                      <Mono>StatNumber</Mono> represents the main statistic or
                      numeric content, and <Mono>StatHelpText</Mono> is a small
                      text hint or more information about the statistic.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <Stat textAlign="center">
                      <StatLabel>Total Revenue</StatLabel>
                      <StatNumber>$250,000</StatNumber>
                      <StatHelpText>Jan 1 - Dec 31</StatHelpText>
                    </Stat>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<Stat textAlign="center">
    <StatLabel>Total Revenue</StatLabel>
    <StatNumber>$250,000</StatNumber>
    <StatHelpText>Jan 1 - Dec 31</StatHelpText>
  </Stat>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Adding an Indicator</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ The <Mono>Stat</Mono> component also includes an
                      indicator option using the <Mono>StatArrow</Mono>{" "}
                      sub-component to represent whether a stat has gone up or
                      down. Here's an example of using a<Mono>StatGroup</Mono>{" "}
                      to display multiple stats with increase or decrease
                      indicators.
                    </SectionDescription>
                    <BasicText>
                      In this example, we used the <Mono>StatGroup</Mono>{" "}
                      component to group multiple <Mono>Stat</Mono> components.
                      The <Mono>StatArrow</Mono> component is used to show the
                      percentage increase or decrease of the corresponding stat.
                      The type prop can be either "increase" or "decrease",
                      which shows an up or down arrow respectively.
                    </BasicText>
                  </Box>

                  <MyFlex bg="background">
                    <StatGroup gap={4}>
                      <Stat>
                        <StatLabel>New Users</StatLabel>
                        <StatNumber>2,500</StatNumber>
                        <StatHelpText>
                          <StatArrow type="increase" />
                          15.24%
                        </StatHelpText>
                      </Stat>

                      <Stat>
                        <StatLabel whiteSpace="nowrap">Bounce Rate</StatLabel>
                        <StatNumber>50%</StatNumber>
                        <StatHelpText>
                          <StatArrow type="decrease" />
                          5.05%
                        </StatHelpText>
                      </Stat>
                    </StatGroup>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<StatGroup gap={4}>
  <Stat>
    <StatLabel>New Users</StatLabel>
    <StatNumber>2,500</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      15.24%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel whiteSpace="nowrap">Bounce Rate</StatLabel>
    <StatNumber>50%</StatNumber>
    <StatHelpText>
      <StatArrow type="decrease" />
      5.05%
    </StatHelpText>
  </Stat>
</StatGroup>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Interactive Stat Component</b>: You can make the <b>Stat</b>{" "}
              component interactive. When working with statistics, especially
              dynamic ones, you could provide more details about a particular
              stat when a user hovers over or clicks on it. In this example,
              when users hover over the <b>StatLabel</b>, they are provided with
              more details about the statistic.
            </HighlightText>
            <HighlightExample h="100px">
              <MyFlex>
                <Stat textAlign="center">
                  <Tooltip
                    label="Details about the users count"
                    placement="top"
                  >
                    <StatLabel cursor="pointer">Registered Users</StatLabel>
                  </Tooltip>
                  <StatNumber>2,500</StatNumber>
                  <StatHelpText>Since Jan 2021</StatHelpText>
                </Stat>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Stat textAlign="center">
          <Tooltip
            label="Details about the users count"
            placement="top"
          >
            <StatLabel cursor="pointer">Registered Users</StatLabel>
          </Tooltip>
          <StatNumber>2,500</StatNumber>
          <StatHelpText>Since Jan 2021</StatHelpText>
        </Stat>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              {" "}
              <b>Stats with Real-time Data</b>: Real-time data tracking is quite
              common in modern applications. A <b>Stat</b> component can be
              dynamically updated with real-time data, which can be visually
              appealing and informational. In this example, we're using the{" "}
              <b>JSONPlaceholder</b> API to fetch a list of users. We then set
              the length of the returned data array as the users count. This
              count is updated every second, simulating a real-time data feed.
              Please note that this is just a simulation. In reality, the number
              of users fetched from the <b>JSONPlaceholder</b> API won't change,
              but in a real application with an actual backend, the count would
              vary based on real-time data.
            </HighlightText>
            <HighlightExample h="100px">
              <MyFlex>
                <RealTimeStat />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Data.H05 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Color-coded Stats</b>: Color can play a crucial role in
              conveying information intuitively. You could color-code your Stat
              components based on their state or value. In this example, the{" "}
              <b>StatNumber</b> is colored green to indicate a high satisfaction
              score. You could adjust the color dynamically based on the score's
              value. This can provide an instant visual cue to users about the
              nature of the statistic.
            </HighlightText>
            <HighlightExample h="100px">
              <MyFlex>
                <Stat textAlign="center">
                  <StatLabel>Satisfaction Score</StatLabel>
                  <StatNumber color="green.500">92%</StatNumber>
                  <StatHelpText>Based on 200 reviews</StatHelpText>
                </Stat>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Stat textAlign="center">
  <StatLabel>Satisfaction Score</StatLabel>
  <StatNumber color="green.500">92%</StatNumber>
  <StatHelpText>Based on 200 reviews</StatHelpText>
</Stat>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

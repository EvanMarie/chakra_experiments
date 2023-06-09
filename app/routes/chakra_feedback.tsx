import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import { ComponentButtonBar } from "~/components/ButtonBar";
import { Progress } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {
  AlertFive,
  AlertFour,
  AlertOne,
  AlertThree,
  AlertTwo,
} from "~/components/alerts";

import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  BigBackgroundBox,
  CompWithLabel,
  Mono,
  MyButton,
  MyHeading,
  MyLabel,
  sectionMenuButtons,
} from "~/styles/reusableChakraComponents";
import {
  SkeletonFive,
  SkeletonFour,
  SkeletonOne,
  SkeletonSeven,
  SkeletonSix,
  SkeletonThree,
  SkeletonTwo,
} from "~/components/skeletons";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <ComponentButtonBar />
      <MyHeading>Chakra Disclosure Components:</MyHeading>
      <HStack>
        <MyButton label="Alert" href="#alert" {...sectionMenuButtons} />
        <MyButton
          label="Circular Progress"
          href="#circular-progress"
          {...sectionMenuButtons}
        />
        <MyButton label="Progress" href="#progress" {...sectionMenuButtons} />
        <MyButton label="Skeletons" href="#skeletons" {...sectionMenuButtons} />
      </HStack>

      <div id="alert" />
      <MyLabel link="https://chakra-ui.com/docs/components/alert" size={28}>
        Alert:
      </MyLabel>
      <Box p={3}>
        <BasicText>
          <b>⦾ Alert</b>: The wrapper for alert components.{" "}
        </BasicText>
        <BasicText>
          <b>⦾ AlertIcon</b>: The visual icon for the alert that changes based
          on the status prop.{" "}
        </BasicText>
        <BasicText>
          <b>⦾ AlertTitle</b>: The title of the alert to be announced by screen
          readers.
        </BasicText>
        <BasicText>
          <b>⦾ AlertDescription</b>: The description of the alert to be
          announced by screen readers.
        </BasicText>
      </Box>

      <Box>
        <AlertOne />
        <AlertTwo />
        <AlertThree />
        <AlertFour />
        <AlertFive />
      </Box>

      <div id="circular-progress" />
      <MyLabel
        link="https://chakra-ui.com/docs/components/circular-progress"
        size={28}
      >
        Circular Progress Components:
      </MyLabel>
      <Box p={3}>
        <BasicText>
          <b>⦾ Circular Progress</b> is used to indicates the progress for
          determinate and indeterminate processes.
        </BasicText>
        <Box paddingX={6}>
          <ul>
            <li>
              There are two types of progress indicators: determinate and
              indeterminate.
            </li>
            <li>
              Determinate progress: fills the circular track with color, as the
              indicator moves from 0 to 360 degrees.
            </li>
            <li>
              Indeterminate progress: grows and shrinks the indicator while
              moving along the circular track.
            </li>
          </ul>
        </Box>
        <Box p={3}>
          <VStack spacing={5} align="center">
            <CompWithLabel>
              {[
                <CircularProgress key={1} value={80} />,
                <Mono key={2}>CircularProgress value={80}</Mono>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <CircularProgress key={1} value={30} size="120px" />,
                <Mono key={2}> CircularProgress value={30} size='120px'</Mono>,
              ]}
            </CompWithLabel>

            <CompWithLabel>
              {[
                <CircularProgress
                  key={1}
                  value={59}
                  size="100px"
                  thickness="4px"
                />,
                <Mono key={2}>
                  CircularProgress value={59} size='100px' thickness='4px'
                </Mono>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <CircularProgress
                  key={1}
                  value={30}
                  color="orange.400"
                  thickness="12px"
                />,
                <Mono key={2}>
                  CircularProgress value={30} color='orange.400'
                  thickness='12px'
                </Mono>,
              ]}
            </CompWithLabel>

            <CompWithLabel>
              {[
                <Box key={1}>
                  <CircularProgress value={40} color="green.400">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </Box>,
                <VStack key={2}>
                  <Mono>CircularProgress value={40} color='green.400'</Mono>
                  <Mono>CircularProgressLabel - 40%</Mono>
                </VStack>,
              ]}
            </CompWithLabel>
            <CompWithLabel>
              {[
                <CircularProgress key={1} isIndeterminate color="green.300" />,
                <Mono key={2}>
                  CircularProgress isIndeterminate color='green.300'
                </Mono>,
              ]}
            </CompWithLabel>
          </VStack>
        </Box>
      </Box>

      <div id="progress" />
      <MyLabel link="https://chakra-ui.com/docs/components/progress" size={28}>
        Progress Bars:
      </MyLabel>
      <Box p={3}>
        <VStack spacing={4}>
          <CompWithLabel>
            {[
              <Mono key={1}>Progress value={80}</Mono>,
              <Progress value={80} w="300px" key={2} />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>Progress hasStripe value={64}</Mono>,
              <Progress hasStripe value={64} w="300px" key={2} />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='red' size='sm' value={20}
              </Mono>,
              <Progress
                colorScheme="red"
                size="sm"
                value={20}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='orange' size='md' value={30}
              </Mono>,
              <Progress
                colorScheme="orange"
                size="md"
                value={30}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='yellow' size='lg' value={40}
              </Mono>,
              <Progress
                colorScheme="yellow"
                size="lg"
                value={40}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress colorScheme='green' height='32px' value={50}
              </Mono>,
              <Progress
                colorScheme="green"
                height="32px"
                value={50}
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress value={60} size='m' colorScheme='blue'
              </Mono>,
              <Progress
                key={2}
                value={60}
                size="sm"
                colorScheme="blue"
                w="300px"
              />,
            ]}
          </CompWithLabel>
          <CompWithLabel>
            {[
              <Mono key={1}>
                Progress size='sm'colorScheme="purple" isIndeterminate
              </Mono>,
              <Progress
                size="sm"
                colorScheme="purple"
                isIndeterminate
                w="300px"
                key={2}
              />,
            ]}
          </CompWithLabel>
        </VStack>
      </Box>
      <div id="skeletons" />
      <MyLabel link="https://chakra-ui.com/docs/components/skeleton" size={28}>
        Skeletons:
      </MyLabel>
      <Box p={3}>
        <SkeletonOne />
        <SkeletonTwo />
        <SkeletonThree />
        <SkeletonFour />
        <SkeletonFive />
        <SkeletonSix />
        <SkeletonSeven />
      </Box>
    </BigBackgroundBox>
  );
}

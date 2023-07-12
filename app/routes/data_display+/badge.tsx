import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import {
  BasicText,
  ButtonStyles,
  CatsBouncing,
  HL,
  Mono,
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
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  Badge,
  Button,
  HStack,
  StackDivider,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import {
  BadgeFive,
  BadgeFour,
  BadgeOne,
  BadgeThree,
  BadgeTwo,
} from "~/components/data_display/badgeComponents";
import { BellIcon } from "@chakra-ui/icons";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/badge" size={28}>
        Badge
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ In UI design, badges are often used to highlight specific
              attributes or to draw attention to updates or changes. For
              instance, badges can be used to mark items as new, indicate a
              change of status, or simply to count the number of items in a
              collection. In the Chakra UI library, the <Mono>Badge</Mono>{" "}
              component is a versatile tool that makes the implementation of
              these use-cases straightforward and easy.
            </SectionDescription>
            <BasicText>
              The <Mono>Badge</Mono> component offers an easy and effective way
              to highlight information or mark updates within your application.
              With the various customization options like color, variant, and
              size, you can adapt the badge to your exact needs. Remember that
              badges, like any other UI element, should be used judiciously to
              ensure a clean and user-friendly experience.
            </BasicText>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These <Mono>Badge</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Badge } from '@chakra-ui/react';`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <BadgeOne />
                <ModalCode>
                  <Highlighter>{`<Badge>Default Badge</Badge>
`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BadgeTwo />
                <ModalCode>
                  <Highlighter>{`<VStack spacing={4}>
  <Badge>Default Badge</Badge>
  <Badge colorScheme="pink">Pink Badge: Caution</Badge>
  <Badge colorScheme="green">Green Badge: Success</Badge>
  <Badge colorScheme="purple">Purple Badge: Lovely</Badge>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BadgeThree />
                <ModalCode>
                  <Highlighter>{`<VStack spacing={4}>
  <Badge variant="outline" colorScheme="purple">
    Outline Variant
  </Badge>
  <Badge variant="solid" colorScheme="purple">
    Solid Variant
  </Badge>
  <Badge variant="subtle" colorScheme="purple">
    Subtle Variant
  </Badge>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BadgeFour />
                <ModalCode>
                  <Highlighter>{`<Flex bg="sectionColor" px={3} py={1} borderRadius="md">
  <HStack>
    <Avatar
      src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
      size="lg"
    />
    <Box ml="3">
      <HStack>
        <VStack spacing={0}>
          <HStack>
            <Text alignSelf="left" fontWeight="bold" m={0}>
              Jasper Jenkins
            </Text>
            <Badge ml="1" colorScheme="red">
              New
            </Badge>
          </HStack>
          <Flex justifyContent="left" w="100%">
            <Text m={0} fontSize="sm">
              Rabble Rouser
            </Text>
          </Flex>
        </VStack>
      </HStack>
    </Box>
  </HStack>
</Flex>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BadgeFive />
                <ModalCode>
                  <Highlighter>{`<Text fontSize="xl" fontWeight="bold">
  Jasper Jenkins
  <Badge ml="3" fontSize="0.6em" colorScheme="pink">
    New
  </Badge>
</Text>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Badge as a status indicator in a list</b>: One creative
              use-case is using badges as status indicators in a list of items.
              For example, imagine you have a list of tasks. Each task could
              have a badge indicating its status (e.g., "In Progress",
              "Completed", "On Hold"). In this example, VStack and HStack are
              used to arrange the items and their corresponding badges
              vertically and horizontally, respectively.
            </HighlightText>
            <HighlightExample h="100%">
              <MyFlex p={0}>
                {" "}
                <VStack
                  spacing={2}
                  mt={2}
                  divider={<StackDivider opacity="0.3" />}
                >
                  <HStack
                    alignItems="start"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text m={0} w="50%">
                      Finish project report
                    </Text>

                    <Badge colorScheme="yellow">In Progress</Badge>
                  </HStack>
                  <HStack
                    alignItems="start"
                    w="100%"
                    justifyContent="space-between"
                  >
                    <Text m={0} w="50%">
                      Update client on project status
                    </Text>
                    <Badge colorScheme="green">Completed</Badge>
                  </HStack>
                  <HStack
                    alignItems="start"
                    w="100%"
                    justifyContent="space-between"
                  >
                    <Text m={0} w="50%">
                      Organize project files
                    </Text>
                    <Badge colorScheme="red">On Hold</Badge>
                  </HStack>
                </VStack>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<VStack spacing={2}>
  <HStack alignItems="start" w="100%">
    <Text m={0} w="50%">
      Finish project report
    </Text>

    <Badge colorScheme="yellow">In Progress</Badge>
  </HStack>
  <HStack alignItems="start" w="100%">
    <Text m={0} w="50%">
      Update client on project status
    </Text>
    <Badge colorScheme="green">Completed</Badge>
  </HStack>
  <HStack alignItems="start" w="100%">
    <Text m={0} w="50%">
      Organize project files
    </Text>
    <Badge colorScheme="red">On Hold</Badge>
  </HStack>
</VStack>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Badge as a count display</b>: Badges can be used to display a
              count of items. This is useful in scenarios where you want to show
              the number of new messages, notifications, or updates. Here, a
              badge is used to indicate the number of new notifications on a
              bell icon button.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <Button sx={ButtonStyles} w="80px">
                  <HStack justifyContent="space-evenly">
                    <BellIcon boxSize={6} />
                    <Badge colorScheme="red" ml="1" fontSize="0.9em" p="5px">
                      3
                    </Badge>
                  </HStack>
                </Button>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Button sx={ButtonStyles}>
  <BellIcon />
  <Badge colorScheme="red" ml="1">
    3
  </Badge>
</Button>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Combining Badge with Tooltip</b>: While a badge provides a good
              way to show short information, sometimes you might want to provide
              more details when users hover over it. Chakra UI's Tooltip
              component can be combined with Badge to achieve this. In this
              example, when a user hovers over the "In Progress" badge, they are
              provided with additional information about what this status means.
              This can be especially useful when using color codes or less
              common status descriptions.
            </HighlightText>
            <HighlightExample h="50px">
              <MyFlex>
                <Tooltip
                  label="This task is currently in progress"
                  placement="top"
                  sx={ButtonStyles}
                >
                  <Badge colorScheme="yellow">In Progress</Badge>
                </Tooltip>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Tooltip
  label="This task is currently in progress"
  placement="top"
  sx={ButtonStyles}
>
  <Badge colorScheme="yellow">In Progress</Badge>
</Tooltip>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

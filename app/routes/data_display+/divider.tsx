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
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/divider" size={28}>
        Divider
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ When designing a user interface, it's often necessary to create
              a clear distinction between different sections of content. This is
              where the <Mono>Divider</Mono> component in Chakra UI comes into
              play.
            </SectionDescription>
            <BasicText>
              The <Mono>Divider</Mono> component is a simple yet effective tool
              that allows you to visually separate content within a list or a
              group. Essentially, it displays a thin line that separates
              different parts of your interface, providing a visual cue to users
              that different content areas are distinct. This can greatly
              enhance the user experience by ensuring that your interface is
              easy to navigate and understand.
            </BasicText>

            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>Divider</Mono> component can be imported as follows:
                </BasicText>
                <Highlighter>{`import { Divider } from "@chakra-ui/react";`}</Highlighter>
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
                      ⦾ The basic use of a Divider is quite straightforward. It
                      can be inserted wherever you want a division in your
                      content. You can see the default margin settings for the{" "}
                      <Mono>Divider</Mono> component in this example.{" "}
                      <b>Note</b>: the
                      <Mono>Divider</Mono> component is a self-closing tag.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <Text>
                      I represent content that comes before the divider.
                    </Text>
                    <Divider />
                    <Text>
                      I represent content that comes after the divider.
                    </Text>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<Text>
  I represent content that comes before the divider.
</Text>
<Divider />
<Text>
  I represent content that comes after the divider.
</Text>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Orientation</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ By default, the <Mono>Divider</Mono> is horizontal.
                      However, Chakra UI provides you the flexibility to change
                      its orientation to vertical. This can be achieved by
                      passing the <Mono>orientation</Mono> prop. <b>Note</b>{" "}
                      that when using a vertical divider, it's necessary to
                      assign a height to the parent element.
                    </SectionDescription>
                    <BasicText></BasicText>
                    <BasicText></BasicText>
                  </Box>

                  <MyFlex bg="background">
                    <HStack height="150px" w="100%" paddingX={4} spacing={5}>
                      <Divider orientation="vertical" />
                      <VStack textAlign="left" alignItems="left">
                        <h2>A Wonderful Heading</h2>
                        <Text>
                          Some fantastic content on the right side of the
                          vertical divider. This content should not be ignored
                          in spite of the divider showing off over there to the
                          left.
                        </Text>
                      </VStack>
                    </HStack>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<HStack height="150px" w="100%" paddingX={4} spacing={5}>
  <Divider orientation="vertical" />
  <VStack textAlign="left" alignItems="left">
    <h2>A Wonderful Heading</h2>
    <Text>
      Some fantastic content on the right side of the
      vertical divider. This content should not be ignored
      in spite of the divider showing off over there to the
      left.
    </Text>
  </VStack>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>The Dashed Variant</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ The <Mono>Divider</Mono> component in Chakra UI also has
                      a variant called "dashed". This variant displays the
                      divider as a dashed line, rather than the default solid
                      line. It can be particularly useful when you want to make
                      the separation between sections of content more subtle, or
                      for stylistic preferences. To use the "dashed" variant of
                      the <Mono>Divider</Mono>, you simply pass the string
                      "dashed" to the <Mono>variant</Mono> prop of the Divider
                      component. The dashed variant creates a visually distinct
                      boundary, but due to its dashed nature, does so in a less
                      imposing way than a solid line might. This can be helpful
                      for visually separating content without drawing too much
                      attention to the divider line itself.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <Box w="100%">
                      <Box mb={3}>As above...</Box>
                      <Divider variant="dashed" />
                      <Box mt={3}>So below...</Box>
                    </Box>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<Box>
  <Box mb={3}>Some content above the divider...</Box>
  <Divider variant="dashed" />
  <Box mt={3}>Some content below the divider...</Box>
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>
                    Adding Content within a Divider
                  </SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ In some scenarios, you might need to display content
                      within a divider. Chakra UI enables this by composing the
                      <Mono>Divider</Mono> and <Mono>Center</Mono> components.
                      This can be achieved by wrapping the content within the{" "}
                      <Mono>Divider</Mono> component. In this example, the
                      <Mono>Center</Mono> component is used to place text
                      directly in the middle of the divider.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <Flex w="100%" justifyContent="flex-start">
                      <Box py={5} w="100%">
                        <Text mb={3}>
                          This is some content before the <Mono>Divider</Mono>
                        </Text>
                        <Box position="relative" marginY={7}>
                          <Divider />
                          <Center
                            bg="accent_2"
                            color="background"
                            px={4}
                            position="absolute"
                            top="50%"
                            transform="translateY(-50%)"
                          >
                            Divider Text
                          </Center>
                        </Box>
                        <Text mt={3}>
                          This is some content after the <Mono>Divider</Mono>
                        </Text>
                      </Box>
                    </Flex>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<Box py={5} w="100%">
  <Text mb={3}>
    This is some content before the <Mono>Divider</Mono>
  </Text>
  <Box position="relative" marginY={7}>
    <Divider />
    <Center
      bg="accent_2"
      color="background"
      px={4}
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
    >
      Divider Text
    </Center>
  </Box>
  <Text mt={3}>
    This is some content after the <Mono>Divider</Mono>
  </Text>
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>
                    Composing with Other Components
                  </SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ The Divider component can be efficiently used in
                      conjunction with other components. For example, you can
                      pair it with the <Mono>Text</Mono> and <Mono>Stack</Mono>{" "}
                      components. Here, the <Mono>Divider</Mono> creates a
                      visual boundary on the left of the text.
                    </SectionDescription>
                  </Box>
                  <BasicText>
                    In this example, a <Mono>Stack</Mono> component serves to
                    layout a row of items ("Item 1", "Item 2", etc.). Each item
                    is separated by a <Mono>Divider</Mono> with the orientation
                    set to 'vertical'. This is useful in cases where you want to
                    display a list of items horizontally and need a visual
                    element to clearly distinguish between each item. The
                    <Mono>Divider</Mono> serves as that distinguishing element.
                  </BasicText>
                  <MyFlex bg="background">
                    <Box p={5}>
                      <Stack
                        direction="row"
                        spacing={4}
                        align="center"
                        h="50px"
                      >
                        <Divider orientation="vertical" />
                        <Text>Item 1</Text>
                        <Divider orientation="vertical" />
                        <Text>Item 2</Text>
                        <Divider orientation="vertical" />
                        <Text>Item 3</Text>
                        <Divider orientation="vertical" />
                      </Stack>
                    </Box>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{` <Box p={5}>
  <Stack
    direction="row"
    spacing={4}
    align="center"
    h="50px"
  >
    <Divider orientation="vertical" />
    <Text>Item 1</Text>
    <Divider orientation="vertical" />
    <Text>Item 2</Text>
    <Divider orientation="vertical" />
    <Text>Item 3</Text>
    <Divider orientation="vertical" />
  </Stack>
</Box>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Decorative Divider</b>: Dividers are not only functional
              elements used to separate content. But they can also serve as
              decorative elements, enhancing the aesthetic of your layout.
              Here's how you can use a divider to create a decorative horizontal
              line that adds a bit of flair to your UI. This example uses a
              custom-styled divider with a blue background color and a specified
              height, acting as a decorative line.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <Box w="100%">
                  <Text>Pre-Divider Content</Text>
                  <Divider bg="blue.500" height="2px" variant="dashed" />
                  <Text>Post-Divider Content</Text>
                </Box>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Box w="100%">
  <Text>Pre-Divider Content</Text>
  <Divider bg="blue.500" height="2px" />
  <Text>Post-Divider Content</Text>
</Box>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Spacer in a Form</b>: Dividers can also be useful in form
              design, providing a clear visual distinction between groups of
              related fields. This can make it easier for users to understand
              and interact with your form. In this example, the divider
              separates the 'Username' and 'Password' input fields, making it
              easier for users to mentally group related fields and process the
              form's structure.
            </HighlightText>
            <HighlightExample h="190px">
              <MyFlex>
                <Box as="form" p={1} w="100%">
                  <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder="First Name" />
                  </FormControl>
                  <Divider my={3} />
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Last Name" />
                  </FormControl>
                </Box>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Box as="form" p={1} w="100%">
  <FormControl>
    <FormLabel>Username</FormLabel>
    <Input placeholder="First Name" />
  </FormControl>
  <Divider my={3} />
  <FormControl>
    <FormLabel>Password</FormLabel>
    <Input placeholder="Last Name" />
  </FormControl>
</Box>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Section Titles</b>: A <b>Divider</b> can be coupled with a Text
              component to serve as a section title, giving it a "highlighted"
              feel while providing a clear distinction from the rest of the
              content. In this example, the <b>Divider</b> is positioned
              absolutely at the bottom of the 'Section Title' heading, serving
              as an underline. This can help highlight section titles and
              visually separate them from the rest of the content.
            </HighlightText>
            <HighlightExample h="175px">
              <MyFlex>
                <Box w="100%">
                  <Text as="h2" position="relative" mb={2}>
                    Some Snazzy Title
                    <Divider
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                    />
                  </Text>
                  <Text>
                    Some snazzy content about how awesome it would be if
                    unicorns were real, especially miniature ones that we could
                    all have as pets if we wanted.
                  </Text>
                </Box>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<Box w="100%">
  <Text as="h2" position="relative" mb={2}>
    Some Snazzy Title
    <Divider
      position="absolute"
      bottom={0}
      left={0}
      right={0}
    />
  </Text>
  <Text>
    Some snazzy content about how awesome it would be if
    unicorns were real, especially miniature ones that we could
    all have as pets if we wanted.
  </Text>
</Box>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

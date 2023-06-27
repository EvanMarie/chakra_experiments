import { Box, Link, VStack } from "@chakra-ui/react";

import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components">
        Chakra UI: Data Display
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Chakra UI's Data Display components category is a collection of
            flexible, responsive, and reusable components that help developers
            build clear, user-friendly interfaces to represent and interact with
            data. This section of Chakra components is particularly important,
            because it provides tools to present information in a visually
            understandable and organized manner, which can greatly improve the
            usability and accessibility of your applications.
          </SectionDescription>
          <BasicText>
            These components provide a well-structured and stylized way of
            displaying data, and are all designed with responsiveness and
            accessibility in mind. By utilizing these components, developers can
            focus on the logic of their applications, while also ensuring that
            their applications have a consistent and clean user interface. These
            are highly customizable components that can be used to display a
            wide variety of data, and can be used in conjunction with other
            Chakra components to create a cohesive and visually appealing user
            interface.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>The components that comprise this section are:</BasicText>
          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/data_display/badge">
                    <HL>Badge 🔗</HL>
                  </Link>
                  : A lightweight and minimalistic component that allows you to
                  draw attention or represent a status, category, or a count of
                  items. Badges can be customized in various colors and sizes.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/card">
                    <HL>Card 🔗</HL>
                  </Link>
                  : A versatile component for displaying grouped content or
                  information in an encapsulated view. It provides a great way
                  to organize and visually separate your content.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/code">
                    <HL>Code 🔗</HL>
                  </Link>
                  : This component is used to display inline code snippets. It's
                  perfect for technical documentation or tutorials where you
                  need to showcase code examples.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/divider">
                    <HL>Divider 🔗</HL>
                  </Link>
                  : As the name suggests, the <Mono>Divider</Mono> component is
                  used to create horizontal or vertical lines to visually
                  separate sections of your UI.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/keyboard">
                    <HL>Kbd 🔗</HL>
                  </Link>
                  : The Kbd (short for Keyboard) component is used to display
                  keyboard inputs. It's useful in technical documents or
                  software instructions to represent keyboard shortcuts.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/list">
                    <HL>List 🔗</HL>
                  </Link>
                  : The <Mono>List</Mono> component, along with{" "}
                  <Mono>ListItem</Mono>, provides an easy way to display a list
                  of items. It supports ordered, unordered, and description
                  lists.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/statistics">
                    <HL>Stat 🔗</HL>
                  </Link>
                  : This component is designed to display statistics. It
                  consists of four subcomponents: <Mono>StatLabel</Mono>,{" "}
                  <Mono>StatNumber</Mono>, <Mono>StatHelpText</Mono>, and{" "}
                  <Mono>StatArrow</Mono>, which can be combined to create a rich
                  statistical display.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/table">
                    <HL>Table 🔗</HL>
                  </Link>
                  : The Table component provides a way to create responsive and
                  accessible tables. It supports several subcomponents like{" "}
                  <Mono>TableCaption</Mono>, <Mono>Tbody</Mono>, <Mono>Td</Mono>
                  , <Mono>Th</Mono>, <Mono>Thead</Mono>, <Mono>Tr</Mono>, etc.,
                  making it easier to structure and style your tables.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/data_display/tag">
                    <HL>Tag 🔗</HL>
                  </Link>
                  : The <Mono>Tag</Mono> component is similar to the{" "}
                  <Mono>Badge 🔗</Mono> but is more suited to represent
                  categories or labels. It includes <Mono>TagLabel</Mono> and{" "}
                  <Mono>TagCloseButton</Mono> subcomponents which make it
                  possible to create tags with labels and optional close
                  buttons.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
          <Box>
            <BasicText>
              Use the navigation menu to learn more about each component
              individually.
            </BasicText>
          </Box>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

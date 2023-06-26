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
import { BiCheckboxMinus, BiCheckboxChecked } from "react-icons/bi";
import { MdPerson } from "react-icons/md";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  Box,
  Code,
  Link,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
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
      <MyLabel link="https://chakra-ui.com/docs/components/list" size={28}>
        List
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Underneath, Chakra's List component is just a wrapper around the
              standard HTML <Code>{`<ul>`}</Code> or <Code>{`<ol>`}</Code>{" "}
              elements. This means it accepts all the standard HTML props in
              addition to a few extras provided by Chakra, like styling props.
            </SectionDescription>
            <BasicText>
              The List component should be used whenever you need to display an
              array of similar items. This could be a list of menu items in a
              sidebar, a list of posts on a blog, or a list of user's comments
              on a post.{" "}
            </BasicText>
            <BasicText>
              A list in Chakra UI consists of the <Mono>List</Mono> component,
              which acts as a container for <Mono>ListItem</Mono> components. By
              default, <Mono>List</Mono> renders an <Code>{`<ul>`}</Code>{" "}
              element, although you can also create ordered lists using{" "}
              <Code>{`<ol>`}</Code> elements.
            </BasicText>

            <DescriptionBox>
              <BasicText>
                In Chakra UI, <Mono>List</Mono>, <Mono>UnorderedList</Mono>, and{" "}
                <Mono>OrderedList</Mono> are components that you can use to
                create lists in your UI, but each serves a different purpose and
                creates a different kind of list. <Mono>List</Mono> is a
                flexible base component that you can use to create either
                ordered or unordered lists, while <Mono>UnorderedList</Mono> and{" "}
                <Mono>OrderedList</Mono> are more specialized components used
                for explicitly creating unordered and ordered lists,
                respectively.
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>List</HL>: a base component that renders an HTML{" "}
                    <Code>{`<ul>`}</Code> (unordered list) element by default.
                    This component serves as a wrapper around list items
                    (ListItem). When you use List without specifying any
                    specific type, you're creating an unordered list, which
                    means the list items will be marked with bullets.
                  </li>
                  <li>
                    <HL>UnorderedList</HL>: a special case of the List
                    component. It explicitly renders an HTML{" "}
                    <Code>{`<ul>`}</Code> element, indicating an unordered list.
                    The list items under <Mono>UnorderedList</Mono> are marked
                    with bullets by default. This is typically used when the
                    order of list items doesn't matter.
                  </li>
                  <li>
                    <HL>OrderedList</HL>: another specific case of the List
                    component. It explicitly renders an HTML{" "}
                    <Code>{`<ol>`}</Code> element, which represents an ordered
                    list. This means the list items will be numbered, indicating
                    a sequence or ranking. This is used when the order of list
                    items is important.
                  </li>
                </ul>
              </BulletBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  The <Mono>List</Mono> components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  List,
  ListItem,
  UnorderedList,
  OrderedList } from "@chakra-ui/react"
`}</Highlighter>
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
                      ⦾ You can use the <Mono>List</Mono> and{" "}
                      <Mono>ListItem</Mono> components to construct your list.
                      Here's an example of a simple unordered list. In this
                      example, we create a list of fruits. The spacing prop adds
                      some space between each <Mono>ListItem</Mono>.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <List spacing={3}>
                      <ListItem>Orange</ListItem>
                      <ListItem>Apple</ListItem>
                      <ListItem>Banana</ListItem>
                    </List>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<List spacing={3}>
  <ListItem>Orange</ListItem>
  <ListItem>Apple</ListItem>
  <ListItem>Banana</ListItem>
</List>`}</Highlighter>
                </ModalCode>
                <SectionContainer>
                  <BasicText>
                    You can also use the <Mono>UnorderedList</Mono> component to
                    achieve the same result. The <Mono>UnorderedList</Mono>{" "}
                    component is just an alias for the <Mono>List</Mono>{" "}
                    component with the <Mono>styleType</Mono> prop set to{" "}
                    <Mono>disc</Mono>.
                  </BasicText>
                  <MyFlex bg="background">
                    <UnorderedList>
                      <ListItem>Inception</ListItem>
                      <ListItem>Interstellar</ListItem>
                      <ListItem>The Dark Knight</ListItem>
                      <ListItem>Memento</ListItem>
                    </UnorderedList>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<UnorderedList>
  <ListItem>Inception</ListItem>
  <ListItem>Interstellar</ListItem>
  <ListItem>The Dark Knight</ListItem>
  <ListItem>Memento</ListItem>
</UnorderedList>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Ordered Lists</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ Chakra UI also supports ordered lists through the{" "}
                      <Mono>List</Mono> component by using the{" "}
                      <Mono>styleType</Mono> prop and setting it to{" "}
                      <Mono>decimal</Mono>.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <List spacing={3} styleType="decimal">
                      <ListItem>First Task</ListItem>
                      <ListItem>Second Task</ListItem>
                      <ListItem>Third Task</ListItem>
                    </List>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<List spacing={3} styleType="decimal">
  <ListItem>First Task</ListItem>
  <ListItem>Second Task</ListItem>
  <ListItem>Third Task</ListItem>
</List>`}</Highlighter>
                </ModalCode>
                <SectionContainer>
                  <BasicText>
                    This is a similar implementation, but using{" "}
                    <Mono>OrderedList</Mono>:
                  </BasicText>
                  <MyFlex bg="background">
                    <OrderedList>
                      <ListItem>Boil water</ListItem>
                      <ListItem>Add tea leaves to teapot</ListItem>
                      <ListItem>Pour boiled water into teapot</ListItem>
                      <ListItem>Steep for desired time</ListItem>
                      <ListItem>Enjoy your tea</ListItem>
                    </OrderedList>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<OrderedList>
  <ListItem>Boil water</ListItem>
  <ListItem>Add tea leaves to teapot</ListItem>
  <ListItem>Pour boiled water into teapot</ListItem>
  <ListItem>Steep for desired time</ListItem>
  <ListItem>Enjoy your tea</ListItem>
</OrderedList>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>{" "}
            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Nested Lists</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ In the case that you need to display hierarchical data,
                      you can nest <Mono>List</Mono> components to create a
                      multi-level list. In this example, we've created a nested
                      list under 'Item 1' with a circular bullet point style.
                    </SectionDescription>
                  </Box>
                  <BasicText>
                    In this example, we're using List components inside{" "}
                    <Mono>ListItem</Mono> components to create nested lists. The{" "}
                    <Mono>styleType</Mono> prop is used to control the marker
                    style, and the <Mono>paddingLeft</Mono> prop is used to add
                    a left margin to the nested list, providing a visual
                    indication of the hierarchy.
                  </BasicText>

                  <MyFlex bg="background">
                    <List spacing={3}>
                      <ListItem>
                        Item 1
                        <List spacing={1} styleType="circle" paddingLeft={5}>
                          <ListItem>Sub Item 1</ListItem>
                          <ListItem>Sub Item 2</ListItem>
                        </List>
                      </ListItem>
                      <ListItem>Item 2</ListItem>
                      <ListItem>Item 3</ListItem>
                    </List>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<List spacing={3}>
  <ListItem>
    Item 1
    <List spacing={1} styleType="circle" paddingLeft={5}>
      <ListItem>Sub Item 1</ListItem>
      <ListItem>Sub Item 2</ListItem>
    </List>
  </ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>{" "}
            <SectionContainer>
              <SingleExample>
                <SectionContainer>
                  <SectionHeading>Decorating Lists with Icons</SectionHeading>
                  <Box>
                    <SectionDescription>
                      ⦾ Lists can be enhanced with icons using the{" "}
                      <Mono>ListIcon</Mono> component. Icons can help users
                      quickly understand the context of a list item, making your
                      lists more engaging, visually appealing, and meaningful.
                      Here is an example using custom icons from{" "}
                      <Mono>react-icons</Mono>.
                    </SectionDescription>
                  </Box>

                  <MyFlex bg="background">
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon
                          as={BiCheckboxChecked}
                          boxSize={7}
                          color="exampleGreen"
                        />
                        Bike to the park
                      </ListItem>
                      <ListItem>
                        <ListIcon
                          as={BiCheckboxMinus}
                          boxSize={7}
                          color="linkColor"
                        />
                        Finish reading a novel
                      </ListItem>
                      <ListItem>
                        <ListIcon
                          as={BiCheckboxChecked}
                          boxSize={7}
                          color="exampleGreen"
                        />
                        Try out a new recipe
                      </ListItem>
                    </List>
                  </MyFlex>
                </SectionContainer>
                <ModalCode>
                  <Highlighter>{`<List spacing={3}>
  <ListItem>
    <ListIcon
      as={BiCheckboxChecked}
      boxSize={7}
      color="exampleGreen"
    />
    Bike to the park
  </ListItem>
  <ListItem>
    <ListIcon
      as={BiCheckboxMinus}
      boxSize={7}
      color="exampleRed"
    />
    Finish reading a novel
  </ListItem>
  <ListItem>
    <ListIcon
      as={BiCheckboxChecked}
      boxSize={7}
      color="exampleGreen"
    />
    Try out a new recipe
  </ListItem>
</List>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>{" "}
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Interactive List Items</b>: While lists are often used for
              displaying static content, they can also be interactive, with list
              items triggering actions when clicked. This is especially useful
              for navigational menus or selectable items.
              <br />
              In this example, we're giving each ListItem a cursor style of
              pointer to indicate that it's clickable. The _hover prop adds a
              background color when the item is hovered over, providing a visual
              feedback to users. The onClick prop is used to handle click
              events.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <List as="nav" width="200px">
                  <ListItem
                    cursor="pointer"
                    _hover={{ bg: "gray.100" }}
                    onClick={() => console.log("First Item Clicked")}
                  >
                    First Item
                  </ListItem>
                  <ListItem
                    cursor="pointer"
                    _hover={{ bg: "gray.100" }}
                    onClick={() => console.log("Second Item Clicked")}
                  >
                    Second Item
                  </ListItem>
                </List>
              </MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Multiline List Items with Icons</b>: Chakra UI's List component
              supports multiline list items with icons. You could use this
              feature to create complex list layouts, such as a list of user
              profiles, where each list item shows user's avatar and their
              details.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdPerson} boxSize={6} />
                    <Box>
                      <Text fontWeight="bold">Jane Doe</Text>
                      <Text fontSize="sm">janedoe@example.com</Text>
                    </Box>
                  </ListItem>
                  {/* Add more list items here */}
                </List>
              </MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Breadcrumbs with List</b>: You can use Chakra UI's List
              component to create breadcrumbs, which can provide navigation aid
              in user interfaces. A breadcrumb can be particularly beneficial
              for complex interfaces with hierarchical structures.
              <br />
              In this example, we're using the List and ListItem components to
              create a breadcrumb navigation. Each ListItem is either a
              navigational link created using react-router-dom's Link component,
              or a divider represented by /. We use the mx prop to add
              horizontal margin to the dividers, and display="flex" on the List
              to align the items horizontally.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <List display="flex">
                  <ListItem>
                    <Link href="/">Home</Link>
                  </ListItem>
                  <ListItem mx={2}>/</ListItem>
                  <ListItem>
                    <Link href="/blog">Blog</Link>
                  </ListItem>
                  <ListItem mx={2}>/</ListItem>
                  <ListItem>
                    <Link href="/blog/post-1">Post 1</Link>
                  </ListItem>
                </List>
              </MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

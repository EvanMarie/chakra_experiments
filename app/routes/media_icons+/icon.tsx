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
  HighlightText,
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import {
  IconFour,
  IconOne,
  IconThree,
  IconTwo,
} from "~/components/media_icons/iconComponents";
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
} from "@chakra-ui/react";
import { AiFillDelete, AiFillLock, AiFillStar } from "react-icons/ai";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/icon" size={28}>
        Icon
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>Icon</Mono> component in Chakra UI is a versatile and
              highly customizable tool that allows developers to use icons in
              their applications. Icons can aid user comprehension and enhance
              the visual aesthetics of an application by providing context to
              actions or content.
            </SectionDescription>
            <BasicText>
              The <Mono>Icon</Mono> component in Chakra UI can work with SVGs
              (Scalable Vector Graphics), font icons, and even CSS-in-JS icons.
              SVGs are recommended due to their scalability and customization
              options. Chakra UI uses the <Mono>Box</Mono> component as a base
              for the <Mono>Icon</Mono> component, which means you can apply all
              the style props you would to a <Mono>Box</Mono> component.
            </BasicText>
            <BasicText>
              Here are the common props used with the Icon component:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>as</HL>: Specifies the icon to be used. You can use
                  Chakra's in-built icons, imported icons from other libraries,
                  or custom SVG icons.
                </li>
                <li>
                  <HL>boxSize</HL>: The size of the icon. This determines both
                  the height and width of the icon.
                </li>
                <li>
                  <HL>color</HL>: The color of the icon.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                Beyond using pre-existing icons, you can also create custom
                icons by leveraging SVGs. Chakra UI provides helper functions
                and components to create consistent, theme-able, and accessible
                custom icons.
              </BasicText>
              <BasicText>
                Icons are crucial in UI design as they guide users, save space,
                and improve aesthetics. Chakra UI's Icon component, with its
                simplicity and flexibility, makes it easy for developers to
                integrate and manage icons in their applications.
              </BasicText>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  Icon libraries and components can be installed as follows, and
                  individual icons can be imported as shown in the accompanying
                  code.
                </BasicText>
                <BasicText>
                  Chakra reminds you to avoid passing <Mono>onClick</Mono>{" "}
                  handlers to icon components and rather to use the{" "}
                  <Mono>IconButton</Mono> component when you need a clickable
                  icon.
                </BasicText>
                <Highlighter>{`npm i @chakra-ui/icons
npm i react-icons`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <IconOne />
            <IconTwo />
            <IconThree />
            <IconFour />
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Icon as Button</b>: You can use an <b>Icon</b> as a clickable
              button in your application. This is handy for actions like delete,
              edit, close etc. In this example, we're using the{" "}
              <b>IconButton</b> component of Chakra UI, which lets you use an
              icon as a button. The icon prop is provided with an icon from
              react-icons library, and we attach a callback function to the
              onClick prop to handle the click event.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <IconButton
                  bg="accent_2"
                  boxSize={12}
                  aria-label="Delete button"
                  icon={<AiFillDelete />}
                  onClick={() => console.log("Deleted")}
                />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<IconButton
  boxSize={12}
  aria-label="Delete button"
  icon={<AiFillDelete />}
  onClick={() => console.log("Deleted")}
/>`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Icon as List Bullets</b>: You can use an Icon as bullet points
              in your list. In this example, we're using the <b>Icon</b>{" "}
              component as bullet points for the <b>ListItem</b> component. The
              as prop is provided with an icon from react-icons library, and
              we've added a margin to separate the icon from the text.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <List>
                  <ListItem>
                    <Icon as={AiFillStar} color="yellow.400" mr="2" />
                    Starred item 1
                  </ListItem>
                  <ListItem>
                    <Icon as={AiFillStar} color="yellow.400" mr="2" />
                    Starred item 2
                  </ListItem>
                </List>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<List>
  <ListItem>
    <Icon as={AiFillStar} color="yellow.400" mr="2" />
    Starred item 1
  </ListItem>
  <ListItem>
    <Icon as={AiFillStar} color="yellow.400" mr="2" />
    Starred item 2
  </ListItem>
</List>`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Icon as Form Input Addons</b>: Icons can be used inside form
              inputs as addons to provide context to the user. In this example,
              we're using the <b>Icon</b> inside an <b>InputGroup</b> component
              to indicate that it's a password input field. The{" "}
              <b>InputLeftElement</b> component is used to place an element at
              the left of the input field.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AiFillLock color="gray.300" />}
                  />
                  <Input type="password" placeholder="Enter password" />
                </InputGroup>
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`<InputGroup>
  <InputLeftElement
    pointerEvents="none"
    children={<AiFillLock color="gray.300" />}
  />
  <Input type="password" placeholder="Enter password" />
</InputGroup>`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

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
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box, Checkbox } from "@chakra-ui/react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import {
  CheckboxEight,
  CheckboxFive,
  CheckboxFour,
  CheckboxNine,
  CheckboxOne,
  CheckboxSeven,
  CheckboxSix,
  CheckboxTen,
  CheckboxThree,
  CheckboxTwo,
} from "~/components/form/checkboxComponents";
import {
  CheckboxFunctionFour,
  CheckboxFunctionThree,
  CheckboxFunctionTwo,
} from "~/components/form/checkboxFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/checkbox" size={28}>
        Checkbox
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ Chakra UI's <Mono>Checkbox</Mono> component, typically used
              within forms, allows users to select multiple options from a set
              of given choices. Chakra provides various customization features
              for its <Mono>Checkbox</Mono> components, such as disabled state,
              custom colors, different sizes, and more, ensuring a high level of
              adaptability to your application's needs.
            </SectionDescription>
            <BasicText></BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Checkbox</HL>: used in form interfaces to enable users to
                  select multiple options from a given set. It is a versatile UI
                  element that can be tailored to the specific needs of a form.
                </li>
                <li>
                  <HL>CheckboxGroup</HL>: useful for managing the checked state
                  of its child <Mono>Checkbox</Mono> components and conveniently
                  passing shared style props to each
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
  Checkbox, 
  CheckboxGroup } from '@chakra-ui/react'
`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <CheckboxOne />
                <ModalCode>
                  <Highlighter>{`<VStack alignItems="flex-start">
  <Checkbox isChecked>Subscribe to newsletter</Checkbox>
  <Checkbox>Agree to Terms and Conditions</Checkbox>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxTwo />
                <ModalCode>
                  <Highlighter>{`<VStack alignItems="flex-start">
  <Checkbox isDisabled>Notify me about updates</Checkbox>
  <Checkbox isDisabled isChecked>
    Share my data with partners
  </Checkbox>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxThree />
                <ModalCode>
                  <Highlighter>{`<VStack alignItems="flex-start">
  <Checkbox colorScheme="purple" isChecked>
    Enable push notifications
  </Checkbox>
  <Checkbox colorScheme="pink" isChecked>
    Opt in for emails
  </Checkbox>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxFour />
                <ModalCode>
                  <Highlighter>{`<VStack alignItems="flex-start">
  <Checkbox size="sm" colorScheme="teal" isChecked>
    Small Teal Checkbox
  </Checkbox>
  <Checkbox size="md" colorScheme="pink" isChecked>
    Medium Pink Checkbox
  </Checkbox>
  <Checkbox size="lg" colorScheme="cyan" isChecked>
    Large Cyan Checkbox
  </Checkbox>
</VStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxFive />
                <ModalCode>
                  <Highlighter>{`<Checkbox isInvalid>Accept terms and conditions</Checkbox>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxSix />
                <ModalCode>
                  <Highlighter>{`<Checkbox iconColor="pink.500">I turn pink when checked</Checkbox>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxSeven />
                <ModalCode>
                  <Highlighter>{`export function CheckboxFunctionOne() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <VStack alignItems="flex-start">
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
        >
          Checkbox Parent
        </Checkbox>
        <VStack pl={6} mt={1} spacing={1} alignItems="flex-start">
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([e.target.checked, checkedItems[1]])
            }
          >
            Checkbox Child No. 1
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Checkbox Child No. 2
          </Checkbox>
        </VStack>
      </VStack>
    </>
  );
}`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxEight />
                <ModalCode>
                  <Highlighter>{`<Checkbox colorScheme="cyan" size="lg" icon={<BsFillStarFill />}>
  I am a fancy checkbox!
</Checkbox>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxNine />
                <ModalCode>
                  <Highlighter>{`<CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
  <VStack alignItems="flex-start">
    <Checkbox value="naruto">Princess Mononoke</Checkbox>
    <Checkbox value="sasuke">Spirited Away</Checkbox>
    <Checkbox value="kakashi">Howl's Moving Castle</Checkbox>
  </VStack>
</CheckboxGroup>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <CheckboxTen />
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Displaying Additional Content Based on Checkbox Selection</b>:
              Sometimes, you might want to display additional information or
              fields based on whether a checkbox is checked. For example, you
              might have an "Other" checkbox that, when checked, displays an
              input field for the user to provide additional information. In
              this example, when the "Other" checkbox is checked, an input field
              is displayed for the user to provide additional information.
            </HighlightText>
            <HighlightExample h="100px">
              <MyFlex>
                <CheckboxFunctionTwo />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`export function CheckboxFunctionTwo() {
  const [showInput, setShowInput] = useState(false);
  return (
    <SingleExample bg="background">
      {" "}
      {
        <VStack alignItems="flex-start" w="100%">
          <Checkbox onChange={(e) => setShowInput(e.target.checked)}>
            Other
          </Checkbox>
          <Box h="40px">
            {showInput && <Input placeholder="Please specify" />}
          </Box>
        </VStack>
      }
    </SingleExample>
  );
}`}</Highlighter>
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Interactive List with Checkbox Selection</b>: Consider a list
              where users can select multiple items, and the selected items can
              change color or be marked as strikethrough to provide clear visual
              feedback on the user's selection. In this example, an array of
              items is mapped to <b>Checkbox</b> components. When a{" "}
              <b>Checkbox</b> is selected, the item's name is either
              strikethrough (if it's included in the selected items) or
              displayed normally.
            </HighlightText>
            <HighlightExample h="150px">
              <MyFlex>
                <CheckboxFunctionThree />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`export function CheckboxFunctionThree() {
  const items = ["Apple", "Orange", "Mango", "Banana"];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (item: string) => {
    const newSelection = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    setSelectedItems(newSelection);
  };

  return (
    <SingleExample bg="background">
      <VStack alignItems="flex-start" spacing={0}>
        {items.map((item) => (
          <Checkbox
            colorScheme="cyan"
            key={item}
            isChecked={selectedItems.includes(item)}
            onChange={() => toggleSelection(item)}
          >
            <Text
              textDecoration={
                selectedItems.includes(item) ? "line-through" : "none"
              }
            >
              {item}
            </Text>
          </Checkbox>
        ))}
      </VStack>
    </SingleExample>
  );
}`}</Highlighter>
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Using Checkbox as a Toggle Button</b>: A checkbox doesn't have
              to be a small box. You can style it to act like a toggle button,
              similar to an iOS style switch. In this example, by adjusting the{" "}
              <b>size</b> and <b>colorScheme</b> properties of the{" "}
              <b>Checkbox</b> component, you can create a large, brightly
              colored toggle button. This allows for a richer, more visually
              engaging user interface.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <CheckboxFunctionFour />
              </MyFlex>
            </HighlightExample>
            <ModalCode>
              <Highlighter>{`export function CheckboxFunctionFour() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      onOpen();
    }
  };
  return (
    <SingleExample bg="background">
      <Checkbox
        colorScheme="cyan"
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      >
        <Text>Toggle me</Text>
      </Checkbox>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="accent_1">
          <ModalHeader>Modal Header</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You've toggled the checkbox!</Text>
          </ModalBody>
          <ModalFooter>
            <Button sx={ButtonStyles} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SingleExample>
  );
}`}</Highlighter>
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

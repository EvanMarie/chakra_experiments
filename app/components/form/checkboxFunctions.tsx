import {
  Box,
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";

import * as React from "react";
import { ButtonStyles } from "~/styles/DesignComponents";

export function CheckboxFunctionOne() {
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
}

/* ********************************************************************** */

export function CheckboxFunctionTwo() {
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
}

/* ********************************************************************** */

export function CheckboxFunctionThree() {
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
}

/* ********************************************************************** */

export function CheckboxFunctionFour() {
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
}

/* ********************************************************************** */

export function CheckboxFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function CheckboxFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function CheckboxFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

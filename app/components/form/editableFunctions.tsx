import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  HStack,
  IconButton,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
  useColorModeValue,
  useEditableControls,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { EditableBox } from "./editableComponents";
import { ButtonStyles } from "~/styles/DesignComponents";
import { useState } from "react";

export function EditableFunctionOne() {
  /* Custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
          aria-label="Submit"
        />
        <IconButton
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
          aria-label="Cancel"
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
          aria-label="Edit"
        />
      </Flex>
    );
  }

  return (
    <EditableBox>
      <Editable
        textAlign="center"
        defaultValue="Hello, Multiverse!"
        fontSize="2xl"
        isPreviewFocusable={false}
      >
        <HStack
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
          textAlign="left"
        >
          <EditablePreview />
          {/* Custom input */}
          <Input as={EditableInput} />
          <EditableControls />
        </HStack>
      </Editable>
    </EditableBox>
  );
}

/* ********************************************************************** */

export function EditableFunctionTwo() {
  return (
    <SingleExample bg="background">
      <Box backgroundColor="gray.800" p={5} borderRadius="md" w="100%">
        <Editable defaultValue="Dark Themed Text" color="white">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function EditableFunctionThree() {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton
          sx={ButtonStyles}
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
          aria-label="Submit"
        />
        <IconButton
          sx={ButtonStyles}
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
          aria-label="Cancel"
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          size="sm"
          sx={ButtonStyles}
          icon={<EditIcon />}
          {...getEditButtonProps()}
          aria-label="Edit"
        />
      </Flex>
    );
  }

  return (
    <SingleExample bg="background">
      <Editable
        defaultValue="This comment adds value to the conversation!"
        isPreviewFocusable={true}
        selectAllOnFocus={false}
      >
        <Tooltip label="Click to edit" shouldWrapChildren={true}>
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function EditableFunctionFour() {
  const [color, setColor] = useState("#44EAFA");
  return (
    <SingleExample bg="background">
      <HStack w="100%" spacing={5} justify="center">
        <Editable
          w="80px"
          bg="sectionColor"
          color="mainText"
          borderRadius="md"
          px={3}
          py={1}
          value={color}
          onChange={(newColor) => setColor(newColor)}
          placeholder="Enter color code..."
        >
          <EditablePreview w="80px" />
          <EditableInput w="80px" />
        </Editable>
        <Box bg={color} h="50px" w="50px" />
      </HStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function EditableFunctionFive() {
  return (
    <SingleExample bg="background">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Editable defaultValue="Jasper Jenkins">
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Td>
            <Td>
              <Editable defaultValue="77">
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function EditableFunctionSix() {
  const [value, setValue] = useState("2023-09-15");

  return (
    <SingleExample bg="background">
      <Editable defaultValue={value}>
        <EditablePreview bg="sectionColor" color="mainText" px={3} w="120px">
          {value}
        </EditablePreview>
        <EditableInput
          as="input"
          type="date"
          bg="sectionColor"
          color="mainText"
          px={3}
        />
      </Editable>
    </SingleExample>
  );
}
/* ********************************************************************** */

export function EditableFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

import {
  Box,
  BoxProps,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
} from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  EditableFunctionOne,
  EditableFunctionThree,
  EditableFunctionTwo,
} from "./editableFunctions";

interface EditableBoxProps extends BoxProps {
  children: React.ReactNode;
}

export function EditableBox({ children, ...restProps }: EditableBoxProps) {
  return (
    <Box
      bg="tipBackground"
      p={5}
      borderRadius="md"
      textAlign="left"
      w="100%"
      color="background"
      {...restProps}
    >
      {children}
    </Box>
  );
}

/* ********************************************************************** */

export function EditableOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ One of the fundamental characteristics of the <Mono>Editable</Mono>{" "}
          Editable is that it inherits all font styling from the root{" "}
          <Mono>Editable</Mono> container. This design choice ensures a seamless
          transition between the edit view and the read view. In this example,
          the default value of 'Goodnight, moon.' will be displayed in read-only
          mode. However, clicking on the text will transform it into an input
          field where the text can be modified.
        </SectionDescription>
      </Box>

      <MyFlex bg="background" p={5}>
        <>
          <EditableBox>
            <Editable defaultValue="Goodnight, Moon.">
              <EditablePreview />
              <EditableInput />
            </Editable>
          </EditableBox>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function EditableTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Textarea</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>EditableTextarea</Mono> component is employed when
          multiline text input needs to be editable. The usage is very similar
          to the single line <Mono>EditableInput</Mono>, but allows for handling
          more extensive content.
        </SectionDescription>
      </Box>

      <MyFlex bg="background" p={5}>
        <EditableBox>
          <Editable defaultValue="Hello, Universe!">
            <EditablePreview />
            <EditableTextarea />
          </Editable>
        </EditableBox>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function EditableThree() {
  return (
    <SectionContainer>
      <SectionHeading>Custom Inputs and Controls</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI <Mono>Editable</Mono> is quite flexible and customizable.
          In certain situations, you might want to use custom controls for
          toggling between edit and read modes. The component's internal state
          can be accessed using the render prop pattern, enabling customization
          of the <Mono>EditableInput</Mono> with a custom <Mono>Input</Mono>{" "}
          component. In this case, the 'Hello, Multiverse!' text can be edited
          by clicking the custom edit icon, and changes can be saved or
          cancelled with the custom save and cancel icons.
        </SectionDescription>
      </Box>

      <MyFlex bg="background" p={5}>
        <>
          <EditableFunctionOne />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function EditableFour() {
  return (
    <SectionContainer>
      <SectionHeading>Dark Themed Editable</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we're wrapping the <Mono>Editable</Mono> component
          with a <Mono>Box</Mono>
          component. The <Mono>Box</Mono> component has a dark background color,
          and we're overriding the text color of the <Mono>Editable</Mono> to be
          white. This creates a dark themed editable input.
        </SectionDescription>
        <BasicText>
          Remember that the editable's styling is determined by parent
          components. In this case, the parent component is the <Mono>Box</Mono>{" "}
          component, which has a dark background color and so forth. This way,
          we can very easily create a dark themed editable input.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <EditableFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function EditableFive() {
  return (
    <SectionContainer>
      <SectionHeading>Comment Card Editable.</SectionHeading>
      <Box>
        <SectionDescription>
          {" "}
          ⦾ This example will have a pre-filled comment, and the user can edit
          the comment and save their changes. We'll also add some attractive
          buttons for better user interaction.
        </SectionDescription>

        <BasicText>
          In this example, we've created a comment card component. This
          component contains an <Mono>Editable</Mono> component that defaults to
          a pre-filled comment. If the user wants to edit this comment, they
          click on the "Edit" button which transforms the text into an editable
          input field. Once they've made their changes, they can choose to save
          the changes by clicking on the "Save" button or cancel the changes by
          clicking on the "Cancel" button. The buttons have been styled with
          different color schemes for a sleeker look. This provides a stylized,
          comment-like editable field with a tooltip prompting the user to click
          to edit. When the comment is in edit mode, a button group appears
          offering save and cancel options.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <EditableBox>
          <EditableFunctionThree />
        </EditableBox>
      </MyFlex>
    </SectionContainer>
  );
}

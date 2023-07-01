import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { FormControlFunctionOne } from "./formControlFunctions";

/* ********************************************************************** */

export function FormControlOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, a <Mono>FormControl</Mono> is created with a{" "}
          <Mono>FormLabel</Mono> and an <Mono>Input</Mono> field. The{" "}
          <Mono>FormLabel</Mono> displays the word 'Name', guiding users on the
          expected input. The <Mono>Input</Mono> type is set as 'text', allowing
          users to enter textual input.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <FormControl id="username" colorScheme="cyan" maxWidth="400px">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FormControlTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Helper Text and Error Message</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Here's an example that demonstrates how you can utilize the key
          components of <Mono>FormControl</Mono> to create a user-friendly
          experience for collecting an email address. The{" "}
          <Mono>FormControl</Mono> component is used to gather the email input.
          The <Mono>isRequired</Mono> attribute ensures that the form cannot be
          submitted without filling in this field. The{" "}
          <Mono>FormHelperText</Mono> component provides reassurance to users
          regarding the privacy of their email address. In case of validation
          failure, the <Mono>FormErrorMessage</Mono> component comes into play,
          displaying a helpful message to guide the user in correcting their
          input.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <>
          <FormControlFunctionOne />
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FormControlThree() {
  return (
    <SectionContainer>
      <SectionHeading>Incorporating a Radio Group</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we create a form that allows users to select their
          favorite character from various Studio Ghibli films. The{" "}
          <Mono>FormControl</Mono> is set as a 'fieldset', a group of related
          form controls, with FormLabel serving as the 'legend', a caption for
          the fieldset. <Mono>RadioGroup</Mono> is used to group related{" "}
          <Mono>Radio</Mono> buttons, ensuring that only one option can be
          selected by the user. By default, the Radio button for 'Totoro' is
          selected, as indicated by the <Mono>defaultValue</Mono> prop of the{" "}
          <Mono>RadioGroup</Mono>. FormHelperText provides additional
          instructions to the users, indicating that they should select their
          favorite character only if they're a fan of Studio Ghibli.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Flex p={5}>
          <VStack w="100%" justify="center">
            <FormControl as="fieldset" w="100%">
              <FormLabel as="legend">Favorite Ghibli Character</FormLabel>
              <RadioGroup defaultValue="Totoro" colorScheme="cyan">
                <Stack
                  w="100%"
                  direction={["column", "row"]}
                  alignItems="flex-start"
                  spacing={[1, 7]}
                >
                  <Radio value="Totoro">Totoro</Radio>
                  <Radio value="Princess Mononoke">Spirited Away</Radio>
                  <Radio value="Howl">Howl</Radio>
                  <Radio value="Nausicaa">Ponyo</Radio>
                </Stack>
              </RadioGroup>
              <FormHelperText color="mainText">
                Select if you're a fan of Studio Ghibli.
              </FormHelperText>
            </FormControl>
          </VStack>
        </Flex>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FormControlFour() {
  return (
    <SectionContainer>
      <SectionHeading>Incorporating Dropdown Selection</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example demonstrates how to use the Chakra UI{" "}
          <Mono>FormControl</Mono> with a <Mono>Select</Mono> component. We
          create a form control for a drop-down list of Studio Ghibli films,
          letting the user pick their favorite. The form control includes a
          label for the drop-down list ('Favorite Film'), the selection
          component itself, and a placeholder text that prompts the user to make
          a selection.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          <FormControl w="100%" maxWidth="400px" colorScheme="cyan">
            <FormLabel>Favorite Film</FormLabel>
            <Select placeholder="Select your favorite Hayao Miyazaki film">
              <option>My Neighbor Totoro</option>
              <option>Spirited Away</option>
              <option>Howl's Moving Castle</option>
              <option>Nausicaa of the Valley of the Wind</option>
              <option>Castle in the Sky</option>
              <option>Princess Mononoke</option>
              <option>Whisper of the Heart</option>
            </Select>
          </FormControl>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FormControlFive() {
  return (
    <SectionContainer>
      <SectionHeading>Number Input</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Here, we demonstrate how to use a <Mono>NumberInput</Mono> with{" "}
          <Mono>FormControl</Mono>. This provides a user-friendly way to input a
          numerical value -- in this case, the user's age. The form control
          features a <Mono>NumberInput</Mono> that comes with increment and
          decrement buttons, allowing the user to easily adjust the value. The
          input field is constrained within a defined range from 1 to 100,
          ensuring that the age entered is within realistic bounds.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <>
          {" "}
          <FormControl w="100%" maxWidth="100px" colorScheme="cyan">
            <FormLabel>Age</FormLabel>
            <NumberInput max={100} min={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper color="mainText" />
                <NumberDecrementStepper color="mainText" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

import { CheckCircleIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  VStack,
  useFormControl,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { ButtonStyles } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function FormControlFunctionOne() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    // Add your email validation logic here
    const isValidEmail = /^\S+@\S+\.\S+$/.test(inputEmail);
    setIsEmailValid(isValidEmail);
  };

  const handleSubmit = () => {
    if (isEmailValid) {
      setIsSubmitting(true);
      // Simulating form submission delay for demonstration purposes
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <SingleExample bg="background">
      <FormControl
        maxWidth="400px"
        id="email"
        isRequired
        isInvalid={!isEmailValid}
      >
        <VStack alignItems="flex-start" spacing={3}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
          <FormHelperText color="accent_1">
            We'll never share your email.
          </FormHelperText>
          <Button
            w="125px"
            sx={ButtonStyles}
            onClick={handleSubmit}
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? <Spinner size="sm" /> : "Submit"}
          </Button>
          <Box h="30px">
            {!isEmailValid && (
              <FormErrorMessage>Error: Invalid Email Address</FormErrorMessage>
            )}
            {isSubmitted && isEmailValid && (
              <Text mt={2} color="accent_2">
                Success: Form Submitted
              </Text>
            )}
          </Box>
        </VStack>
      </FormControl>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface Field {
  name: string;
  type: string;
}

export function FormControlFunctionTwo() {
  const [fields, setFields] = useState<Field[]>([{ name: "", type: "" }]);

  const handleAddField = () => {
    setFields([...fields, { name: "", type: "" }]);
  };

  const handleRemoveField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...fields];
    values[index][event.target.name as keyof Field] = event.target.value;
    setFields(values);
  };

  return (
    <Box p={5} borderWidth={1} borderRadius="md">
      {fields.map((field, index) => (
        <VStack spacing={3} key={index}>
          <FormControl size="sm">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={field.name}
              onChange={(event) => handleChange(index, event)}
            />
          </FormControl>
          <FormControl size="sm">
            <FormLabel>Type</FormLabel>
            <Input
              type="text"
              name="type"
              value={field.type}
              onChange={(event) => handleChange(index, event)}
            />
          </FormControl>
          <VStack spacing={1}>
            <Button
              size="sm"
              sx={ButtonStyles}
              onClick={() => handleRemoveField(index)}
            >
              Remove
            </Button>{" "}
            <Button size="sm" sx={ButtonStyles} onClick={handleAddField}>
              Add New Field
            </Button>
          </VStack>
        </VStack>
      ))}
    </Box>
  );
}

/* ********************************************************************** */

interface FormControlFunctionThreeProps {
  isValid?: boolean;
}

export function FormControlFunctionThree({
  isValid,
}: FormControlFunctionThreeProps) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(isValid);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    // Add your email validation logic here
    const isValidEmail = /^\S+@\S+\.\S+$/.test(inputEmail);
    setIsEmailValid(isValidEmail);
  };

  return (
    <SingleExample bg="background">
      <VStack spacing={4} justify="flex-start">
        <FormControl id="email" isInvalid={!isEmailValid} isRequired>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!isEmailValid}
              borderColor={isEmailValid ? "teal.500" : "red.500"}
            />
            <InputRightElement>
              {isEmailValid ? (
                <CheckCircleIcon color="teal.500" />
              ) : (
                <WarningIcon color="red.500" />
              )}
            </InputRightElement>
          </InputGroup>
          <Flex h="15px" color="accent_2">
            {!isEmailValid && (
              <FormHelperText color="red.500">
                Your email is invalid.
              </FormHelperText>
            )}

            {isEmailValid && (
              <FormHelperText color="teal.500">
                Your email is valid.
              </FormHelperText>
            )}
          </Flex>
        </FormControl>
      </VStack>
    </SingleExample>
  );
}

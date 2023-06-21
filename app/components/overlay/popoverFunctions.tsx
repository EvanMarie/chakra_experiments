/* eslint-disable react/style-prop-object */
import { MyFlex, SingleExample } from "~/styles/MainDesignComponents";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Image,
  Portal,
  PopoverFooter,
  PopoverArrow,
} from "@chakra-ui/react";
import { PlaceholderImage } from "~/styles/DesignComponents";

const PopoverButtonStyles = {
  bg: "accent_3",
  color: "darkAccent_3",
  border: "1px solid",
  borderColor: "darText",
  _hover: {
    bg: "darkAccent_3",
    color: "accent_3",
  },
};

const PopoverContentStyles = {
  bg: "accent_3",
  color: "darkAccent_3",
  border: "1px solid accent_3",
  borderColor: "darText",
};

const PopoverHeaderStyles = {
  bg: "accent_1",
  color: "darkAccent_3",
  borderBottom: "1px solid",
  borderColor: "darText",
};

const PopoverBodyStyles = {
  bg: "Accent_3",
  color: "darkAccent_3",
};

export function PopoverFunctionOne() {
  return (
    <SingleExample bg="background">
      <Popover>
        <PopoverTrigger>
          <Button sx={PopoverButtonStyles}>Trigger Me!</Button>
        </PopoverTrigger>
        <PopoverContent sx={PopoverContentStyles}>
          <PopoverHeader sx={PopoverHeaderStyles}>Popover Title</PopoverHeader>
          <PopoverCloseButton color="darkAccent_2" />
          <PopoverBody sx={PopoverBodyStyles}>
            This is the content of the popover.
            <MyFlex>
              <PlaceholderImage />{" "}
            </MyFlex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </SingleExample>
  );
}

export function PopoverFunctionTwo() {
  return (
    <SingleExample bg="background">
      <Popover>
        <PopoverTrigger>
          <Button sx={PopoverButtonStyles}>Popover Trigger 1</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent sx={PopoverContentStyles}>
            <PopoverArrow />
            <PopoverHeader sx={PopoverHeaderStyles}>
              Popover Title 1
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="teal">Popover Button</Button>
              <PlaceholderImage colors={24} style={"cubic-disarray"} />{" "}
            </PopoverBody>
            <PopoverFooter sx={PopoverHeaderStyles}>
              Popover Footer 1
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button sx={PopoverButtonStyles}>Popover Trigger 2</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent sx={PopoverContentStyles}>
            <PopoverArrow />
            <PopoverHeader sx={PopoverHeaderStyles}>
              Popover Title 2
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="teal">Popover Button</Button>
              <PlaceholderImage style={"circles"} colors={95} />{" "}
            </PopoverBody>
            <PopoverFooter sx={PopoverHeaderStyles}>
              Popover Footer 2
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </SingleExample>
  );
}

export function PopoverFunctionThree() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function PopoverFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function PopoverFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function PopoverFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function PopoverFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

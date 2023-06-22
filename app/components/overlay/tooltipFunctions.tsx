/* eslint-disable react/display-name */
import { Box, Button, Icon, Tag, Tooltip, forwardRef } from "@chakra-ui/react";
import { VscSmiley } from "react-icons/vsc";
import { MyFlex, SingleExample } from "~/styles/MainDesignComponents";

const ToolTipButtonStyles = {
  bg: "accent_3",
  color: "darkAccent_3",
  border: "1px solid",
  borderColor: "darText",
  _hover: {
    bg: "darkAccent_3",
    color: "accent_3",
  },
};

const TooltipContentStyles = {
  bg: "accent_1",
  color: "darkAccent_3",
  border: "1px solid accent_3",
  borderColor: "darText",
  p: 2,
  textAlign: "center",
  width: "250px",
};

export function TooltipFunctionOne() {
  return (
    <SingleExample bg="background">
      {" "}
      <Tooltip
        sx={TooltipContentStyles}
        label="I am a simple and basic yet most intriguing tooltip. :)"
      >
        <Button sx={ToolTipButtonStyles}>Hover for Tooltip!</Button>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFunctionTwo() {
  return (
    <SingleExample bg="background">
      <Tooltip
        label="I am a tooltip with an open and close delay with a top placement."
        openDelay={500}
        closeDelay={500}
        placement="top"
        hasArrow
        sx={TooltipContentStyles}
      >
        <Button sx={ToolTipButtonStyles}>Fancier Tooltip</Button>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface TagProps {
  children: React.ReactNode;
}

const CustomTag = forwardRef(({ children, ...rest }: TagProps, ref) => (
  <Box p="3" sx={ToolTipButtonStyles} borderRadius="md">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

export function TooltipFunctionThree() {
  return (
    <SingleExample bg="background">
      <Tooltip
        label="I am a tooltip with a custom tag and a bottom placement."
        placement="bottom"
        hasArrow
        sx={TooltipContentStyles}
      >
        <CustomTag sx={ToolTipButtonStyles}>Custom Tag in a Box</CustomTag>
      </Tooltip>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFunctionFour() {
  return (
    <SingleExample bg="background">
      <MyFlex bg="accent_3" w="fit-content" borderRadius="md">
        <Tooltip
          label="Have a great day!"
          fontSize="md"
          sx={TooltipContentStyles}
        >
          <span>
            <Icon boxSize={44} as={VscSmiley} color="darkAccent_2" />
          </span>
        </Tooltip>
      </MyFlex>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function TooltipFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function TooltipFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

export function TooltipFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

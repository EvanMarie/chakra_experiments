import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  TooltipFunctionFour,
  TooltipFunctionOne,
  TooltipFunctionThree,
  TooltipFunctionTwo,
} from "./tooltipFunctions";

export function TooltipOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The following is a very simple example of a tooltip in its most
          basic sense. Mousing over the button, which is wrapped in a{" "}
          <Mono>Tooltip</Mono> triggers an overlap tooltip message.
        </SectionDescription>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TooltipFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Implementing Properties</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, the tooltip text will appear 500 milliseconds after
          the user hovers over the <Mono>Button</Mono>. The tooltip will also
          have an arrow pointing to the button and it will be positioned on top
          of the button.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TooltipFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipThree() {
  return (
    <SectionContainer>
      <SectionHeading>Custom Components with Tooltip</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When creating a tooltip on a custom component, make sure that the
          custom component accepts a ref using React.forwardRef. This allows the
          tooltip to correctly associate with the custom component.
        </SectionDescription>
        <BasicText>
          In this example, we create a <Mono>CustomTag</Mono> component using a
          Chakra UI <Mono>Tag</Mono> as a base. This <Mono>CustomTag</Mono> is
          then wrapped with a tooltip.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <TooltipFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipFour() {
  return (
    <SectionContainer>
      <SectionHeading>Incorporating an Icon</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can wrap an icon in a <Mono>Tooltip</Mono> to display helpful
          information about the icon's functionality. It's important to wrap the
          icon in a <Mono>span</Mono> element as icons from react-icons do not
          use forwardRef.
        </SectionDescription>
        <BasicText>
          This example exhibits this functionality in a more silly way. I think
          this smiley icon has something to say to you. Hover to find out what!
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TooltipFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipFive() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipSix() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipSeven() {
  return (
    <SectionContainer>
      <SectionHeading></SectionHeading>
      <Box>
        <SectionDescription>⦾</SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <></>
      </MyFlex>
    </SectionContainer>
  );
}

import { Box } from "@chakra-ui/react";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  TooltipFunctionFive,
  TooltipFunctionFour,
  TooltipFunctionOne,
  TooltipFunctionSeven,
  TooltipFunctionSix,
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
      <SectionHeading>Focused Content</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When the child of a <Mono>Tooltip</Mono> is focusable, such as a{" "}
          <Mono>Button</Mono>, the tooltip will show when the button is focused
          or hovered over.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <TooltipFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipSix() {
  return (
    <SectionContainer>
      <SectionHeading>Tooltip Placement Options</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>placement</Mono> property allows you to adjust the
          location of your tooltip relative to the child component.
        </SectionDescription>
        <BasicText>
          Below is a dropdown menu that contains all of the placement options
          for tooltips. It is set to "auto placement" by default. But you can
          choose from the options to see how a tooltip placement renders in
          relation to the element around which it is wrapped. Just hover over
          the giant button-box to see it in action!
        </BasicText>
        <BasicText>
          Each placement position is a combination of two parts: an edge (top,
          bottom, left, or right) and an alignment (start, end, or none).
          Because these types of spatial relationships can be a bit tricky at
          first to comprehend, here's what each placement means:
        </BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>auto-start, auto, auto-end</HL>: The <Mono>auto</Mono>{" "}
              placements will position the tooltip relative to the target based
              on the available space in the viewport. If 'start' or 'end' is
              specified, it will align the tooltip accordingly if space permits.
            </li>
            <li>
              <HL>top-start, top, top-end</HL>: These placements will position
              the tooltip above the target element. <Mono>top-start</Mono>{" "}
              aligns the start of the tooltip with the start of the target,{" "}
              <Mono>top</Mono> centers it, and <Mono>top-end</Mono> aligns the
              end of the tooltip with the end of the target.
            </li>
            <li>
              <HL>bottom-start, bottom, bottom-end</HL>: These placements will
              position the tooltip below the target element. Similar to the top
              placements, <Mono>bottom-start</Mono> aligns the start of the
              tooltip with the start of the target, <Mono>bottom</Mono> centers
              it, and <Mono>bottom-end</Mono> aligns the end of the tooltip with
              the end of the target.
            </li>
            <li>
              <HL>left-start, left, left-end</HL>: These placements will
              position the tooltip to the left of the target element.{" "}
              <Mono>left-start</Mono> aligns the top of the tooltip with the top
              of the target, <Mono>left</Mono>
              centers it, and <Mono>left-end</Mono> aligns the bottom of the
              tooltip with the bottom of the target.
            </li>
            <li>
              <HL>right-start, right, right-end</HL>: hese placements will
              position the tooltip to the right of the target element.{" "}
              <Mono>right-start</Mono> aligns the top of the tooltip with the
              top of the target, <Mono>right</Mono> centers it, and{" "}
              <Mono>right-end aligns</Mono> the bottom of the tooltip with the
              bottom of the target.
            </li>
          </ul>
        </BulletBox>
        <BasicText>
          Keep in mind that the actual placement of the tooltip may vary
          slightly based on the available space in the viewport. If there is not
          enough space for the chosen placement, the tooltip will automatically
          adjust to fit.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <TooltipFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

export function TooltipSeven() {
  return (
    <SectionContainer>
      <SectionHeading>Other Properties</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Below are more tooltips. Each <Mono>Button</Mono> shows in code how
          to achieve its respective effect.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <TooltipFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

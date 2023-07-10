import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  WrapFunctionOne,
  WrapFunctionTwo,
  WrapFunctionThree,
  WrapFunctionFour,
  WrapFunctionFive,
  WrapFunctionSix,
  WrapFunctionSeven,
} from "./wrapFunctions";

/* ********************************************************************** */

export function WrapOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To visualize the basic usage of the <Mono>Wrap</Mono> component,
          let's consider an example where we have six boxes of varying widths
          that need to be wrapped if there isn't enough space to fit them
          horizontally.
        </SectionDescription>
        <BasicText>
          In this example, we create a <Mono>Wrap</Mono> component and nest{" "}
          <Mono>WrapItem</Mono> components inside it. Each <Mono>WrapItem</Mono>{" "}
          contains a <Mono>Center</Mono> component that acts as a container for
          our content. The <Mono>Wrap</Mono> component ensures that the boxes
          wrap to the next line when there isn't enough space horizontally.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <WrapFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function WrapTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing WrapItem Spacing</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Wrap</Mono> component allows us to apply consistent
          spacing between each child element, even when they wrap. We can
          achieve this by using the <Mono>spacing</Mono> prop. By specifying a
          value, such as '<Mono>30px</Mono>', we can control the spacing between
          the wrapped items. Additionally, it's possible to use responsive
          values for the spacing, providing flexibility in adapting the layout
          based on different screen sizes.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <WrapFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function WrapThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Wrap Justification</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Wrap</Mono> component allows us to modify the alignment of
          the wrapped items along the main axis using the <Mono>justify</Mono>{" "}
          prop. In the following example, by setting the <Mono>justify</Mono>{" "}
          prop to '<Mono>center</Mono>', the child elements will be centered
          horizontally. This is helpful when we want the wrapped items to be
          aligned in the center of the container.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <WrapFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function WrapFour() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing Wrap Alignment</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ You can also adjust the alignment of the wrapped items along the
          cross-axis using the <Mono>align</Mono> prop. The default value is '
          <Mono>flex-start</Mono>', which aligns the items to the top. By
          setting the <Mono>align</Mono> prop to '<Mono>center</Mono>', the
          child elements will be centered vertically. This feature is
          particularly useful when you have items of varying heights within the
          Wrap component. In this example, the items again have a 30px spacing,
          but this time their heights vary rather than their widths.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <WrapFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

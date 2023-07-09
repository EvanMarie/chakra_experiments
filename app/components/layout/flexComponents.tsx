import { Box } from "@chakra-ui/react";
import {
  BasicText,
  BlueBold,
  HL,
  Mono,
  MyDivider,
} from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  FlexFunctionOne,
  FlexFunctionTwo,
  FlexFunctionThree,
  FlexFunctionFour,
  FlexFunctionFive,
} from "./flexFunctions";

/* ********************************************************************** */

export function FlexOne() {
  return (
    <SectionContainer>
      <SectionHeading>Flex Basics</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, you can experiment with four of the most
          fundamentally important aspects of <Mono>Flex</Mono> that you will
          need to understand in order to use it effectively. The best way to
          learn these is to experiment with them, so please feel free to play
          around with the values in the controls below.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <FlexFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FlexTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Flex Grow and Shrink</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example is designed to showcase the concepts of{" "}
          <Mono>flexGrow</Mono> and <Mono>flexShrink</Mono> in the context of a
          the <Mono>Flex</Mono> component. It allows users to experiment with
          different values for these properties and observe how they affect the
          sizing and behavior of the flex items.
        </SectionDescription>
        <BasicText>
          The component consists of a Flex container with three child{" "}
          <Mono>Square</Mono> components. Each child square represents a flex
          item and is accompanied by two select menus: one for{" "}
          <Mono>flexGrow</Mono> and one for <Mono>flexShrink</Mono>. Users can
          select different values for these properties for each child square
          using the select menus.
        </BasicText>
        <BasicText>
          Additionally, the component provides options to customize the width of
          the parent <Mono>Flex</Mono> container using a select menu. This
          allows users to observe how the flex items respond to changes in the
          size of the parent container.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <FlexFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}
/* ********************************************************************** */

export function FlexThree() {
  return (
    <SectionContainer>
      <SectionHeading>FlexWrap</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>flex-wrap</Mono> property is used in flexbox to control
          how flex items are wrapped and displayed when they exceed the
          available space within the flex container. It allows you to control
          whether the items should wrap onto multiple lines or stay on a single
          line.
        </SectionDescription>
        <BasicText>
          The <Mono>flex-wrap</Mono> property provides three possible values:
        </BasicText>
        <BulletBox>
          <ul>
            <li>
              <HL>nowrap</HL>: This is the default value where items do not wrap
              and try to fit within a single line, potentially causing overflow.
            </li>
            <li>
              <HL>wrap</HL>: Items wrap onto multiple lines if necessary to fit
              within the container. The wrapping occurs in the direction
              specified by the <Mono>flex-direction</Mono> property.
            </li>
            <li>
              <HL>wrap-reverse</HL>: Items wrap onto multiple lines in the
              opposite direction of the <Mono>flex-direction</Mono> property.
              This means they wrap from bottom to top or right to left.
            </li>
          </ul>
        </BulletBox>
        <BasicText>
          In this example, you can explore the <Mono>flexWrap</Mono> property of
          the Chakra <Mono>Flex</Mono> component and its impact on the layout of
          flex items. You can change the flexWrap value using the select input
          and observe how the flex items wrap or remain on a single line.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <FlexFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FlexFour() {
  return (
    <SectionContainer>
      <SectionHeading>FlexBasis</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>flex-basis</Mono> property is used in flexbox to define
          the initial size of a flex item along the main axis before any
          available space is distributed among the flex items. It specifies the
          default size of an item before any remaining space is distributed
          according to the <Mono>flex-grow</Mono> and <Mono>flex-shrink</Mono>{" "}
          properties.
        </SectionDescription>
        <BasicText>
          By default, the <Mono>flex-basis</Mono> value is set to{" "}
          <Mono>auto</Mono>, which means that the size of the item is determined
          by its content or the width property if specified. However, you can
          explicitly set the <Mono>flex-basis</Mono> value to a specific length
          or percentage to control the initial size of the flex items.
        </BasicText>
        <BasicText>
          In the example below, you can interactively change the{" "}
          <Mono>flexBasis</Mono> value of each flex item using the{" "}
          <Mono>w</Mono> (width) property in Chakra UI. The flex items are
          arranged in a flex container with <Mono>flex-wrap</Mono>: wrap to
          allow items to wrap onto multiple lines when necessary. You can
          observe how changing the flex-basis value affects the size and layout
          of the flex items.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <FlexFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FlexFive() {
  return (
    <SectionContainer>
      <SectionHeading>Spacers</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example provides an interactive way of using spacers within a
          flex layout. It allows users to dynamically adjust the number of boxes
          displayed and observe the effect of spacers in creating flexible and
          responsive layouts.
        </SectionDescription>
        <BasicText>
          In general, the <Mono>Flex</Mono> component serves as the container
          for the layout, allowing its child elements to be arranged
          horizontally or vertically based on the specified{" "}
          <Mono>flexDirection</Mono>. It provides a flexible container that
          automatically adjusts the size and position of its children based on
          the available space.
        </BasicText>
        <BasicText>
          On the other hand, the <Mono>Spacer</Mono> component is used to create
          empty space within the flex container. It acts as a flexible and
          expandable element that fills the remaining space between its adjacent
          siblings. The <Mono>Spacer</Mono> component automatically adjusts its
          size to distribute the available space evenly among the other child
          elements.
        </BasicText>

        <BasicText>
          By combining the <Mono>Flex</Mono> and <Mono>Spacer</Mono> components,
          you can achieve various layouts with flexible spacing between the
          child elements. The <Mono>Spacer</Mono> component expands or contracts
          based on the available space, pushing the other elements apart or
          pulling them closer together, creating a responsive and adaptive
          design.
        </BasicText>
        <BasicText>
          For example, if you have multiple boxes within a <Mono>Flex</Mono>{" "}
          container and place <Mono>Spacer</Mono> components between them, the
          spacers will distribute the available space evenly, creating equal
          spacing between the boxes. As the container's width or height changes,
          the spacers adjust their size to maintain the consistent spacing
          between the boxes.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <FlexFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function FlexSix() {
  return (
    <SectionContainer>
      <SectionHeading>Comparison: Flex, Grid, and Stack</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Now let's look at an overview of these layout components, how they
          work, some many points to consider, and how to choose between them for
          different implementations.
        </SectionDescription>
        <MyDivider />
        <BlueBold>Flex and Spacer</BlueBold>: Use <Mono>Flex</Mono> and{" "}
        <Mono>Spacer</Mono> when you want the children to span the entire width
        or height of the container, and have equal spacing between them.
        <BulletBox>
          <ul>
            <li>
              The <Mono>Flex</Mono> component in Chakra UI is a powerful
              container that uses flexbox to create flexible layouts.
            </li>
            <li>
              It allows you to arrange its children in a horizontal or vertical
              direction, based on the <Mono>flexDirection</Mono> prop.
            </li>
            <li>
              The children of the <Mono>Flex</Mono> component will automatically
              stretch to fill the available space, ensuring they span the entire
              width or height of the container.
            </li>
            <li>
              By default, the <Mono>Flex</Mono> component evenly distributes the
              available space among its children, allowing them to have equal
              spacing between them.
            </li>
            <li>
              However, to achieve equal spacing between children, the{" "}
              <Mono>Spacer</Mono> component is often used in conjunction with{" "}
              <Mono>Flex</Mono>.
            </li>
            <li>
              The <Mono>Spacer</Mono> component is a utility component that
              takes up available space within the <Mono>Flex</Mono> container,
              creating equal spacing between its adjacent children.
            </li>
            <li>
              By placing a <Mono>Spacer</Mono> component between each child, you
              can ensure that the children have equal spacing and span the
              entire width or height of the Flex container.
            </li>
          </ul>
        </BulletBox>
        <MyDivider />
        <BlueBold>Grid</BlueBold>: Use <Mono>Grid</Mono> when you need a more
        complex grid-based layout with control over cell placement and
        column/row sizes.
        <BulletBox>
          <ul>
            <li>
              The <Mono>Grid</Mono> component in Chakra UI is a powerful
              container for creating grid-based layouts. It uses CSS Grid to
              define a grid of cells and allows you to place its children in
              specific grid areas using the gridArea prop.
            </li>
            <li>
              Unlike <Mono>Flex</Mono>, the <Mono>Grid</Mono> component does not
              automatically stretch its children to fill the available space.
            </li>
            <li>
              The starting points of the children in <Mono>Grid</Mono> will be
              equally spaced based on the grid layout defined, but the gaps
              between them may not be equal.
            </li>
            <li>
              <Mono>Grid</Mono> is useful when you need to create more complex
              grid layouts with specific cell placement and control over column
              and row sizes.
            </li>
          </ul>
        </BulletBox>
        <MyDivider />
        <BlueBold>Stack</BlueBold>: Use <Mono>Stack</Mono> when you want to
        stack children either vertically or horizontally and provide consistent
        spacing between them without the need for spacer components.
        <BulletBox>
          <ul>
            <li>
              The <Mono>Stack</Mono> component in Chakra UI is a versatile
              layout component that arranges its children in a stack, either
              vertically or horizontally, based on the direction prop.
            </li>
            <li>
              By default, <Mono>Stack</Mono> arranges its children vertically,
              stacking them on top of each other in a column-like structure.
            </li>
            <li>
              It automatically applies equal spacing between its children using
              margin, resulting in consistent vertical spacing.
            </li>
            <li>
              You can also change the direction to horizontal by setting the
              direction prop to "<Mono>row</Mono>". This arranges the children
              side by side in a row-like structure.
            </li>
            <li>
              <Mono>Stack</Mono> provides a convenient way to create vertical or
              horizontal layouts with consistent spacing between children,
              without the need for additional spacer components.
            </li>
            <li>
              You can customize the spacing between children using the{" "}
              <Mono>spacing</Mono> prop, which accepts spacing values defined in
              Chakra UI's theme.
            </li>
          </ul>
        </BulletBox>{" "}
        <MyDivider />
        <BlueBold>HStack</BlueBold>: Use <Mono>HStack</Mono> when you want to
        align elements horizontally and provide consistent spacing between them.
        <BulletBox>
          <ul>
            <li>
              The <Mono>HStack</Mono> component in Chakra UI is a layout
              component that arranges its children in a horizontal stack.
            </li>
            <li>
              It automatically places its children next to each other
              horizontally and applies equal spacing between them.
            </li>
            <li>
              <Mono>HStack</Mono> is useful when you want to align multiple
              elements horizontally and provide consistent spacing between them.
            </li>
            <li>
              By default, <Mono>HStack</Mono> does not make the children span
              the entire width of the container. Instead, they take up only the
              necessary space based on their content size.
            </li>
            <li>
              You can customize the alignment of the children using the align
              prop, which accepts values like "<Mono>center</Mono>", "
              <Mono>flex-start</Mono>", or "<Mono>flex-end</Mono>".
            </li>
            <li>
              <Mono>HStack</Mono> is great for creating horizontal navigation
              menus, button groups, or any layout that requires aligning
              elements horizontally.
            </li>
          </ul>
        </BulletBox>{" "}
        <MyDivider />
        <BlueBold>VStack</BlueBold>: Use <Mono>VStack</Mono> when you want to
        align elements vertically and provide consistent spacing between them.
        <BulletBox>
          <ul>
            <li>
              The <Mono>VStack</Mono> component in Chakra UI is a layout
              component that arranges its children in a vertical stack.
            </li>
            <li>
              It automatically stacks its children on top of each other
              vertically and applies equal spacing between them.
            </li>
            <li>
              <Mono>VStack</Mono> is useful when you want to align multiple
              elements vertically and provide consistent spacing between them.
            </li>
            <li>
              By default, <Mono>VStack</Mono> does not make the children span
              the entire height of the container. Instead, they take up only the
              necessary space based on their content size.
            </li>
            <li>
              You can customize the alignment of the children using the align
              prop, which accepts values like "<Mono>center</Mono>", "
              <Mono>flex-start</Mono>", or "<Mono>flex-end</Mono>".
            </li>
            <li>
              <Mono>VStack</Mono> is great for creating vertical navigation
              menus, lists, or any layout that requires aligning elements
              vertically.
            </li>{" "}
          </ul>
        </BulletBox>
      </Box>
    </SectionContainer>
  );
}

import { Box, Link, VStack } from "@chakra-ui/react";
import { BasicText, FlexibleBox, HL, colors } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props">
        Chakra UI: Styling
      </MyLabel>
      <SectionContainer>
        <SectionDescription>
          The Chakra UI Styling system is a comprehensive and intuitive approach
          to styling React applications using Chakra UI. It provides a set of
          utility functions, components, and design tokens that make it easy to
          create visually appealing and consistent user interfaces.{" "}
        </SectionDescription>
        <FlexibleBox bg={"darkAccent_3"} p={4}>
          <Box p={4}>
            <VStack spacing={3}>
              <Box bg="background" paddingX={3} borderRadius="md">
                <BasicText>
                  ⦾ <HL>Design Tokens</HL>: Chakra UI defines a set of design
                  tokens such as colors, spacing, typography, and shadows. These
                  tokens are used consistently throughout the application to
                  maintain a cohesive visual style.{" "}
                </BasicText>
              </Box>
              <Box bg="background" paddingX={3} borderRadius="md">
                <BasicText>
                  ⦾ <HL>Component-based approach</HL>: Chakra UI offers a wide
                  range of customizable components that follow best practices
                  and provide consistent styling out of the box. These
                  components can be easily composed together to build complex
                  UIs.{" "}
                </BasicText>
              </Box>

              <Box bg="background" paddingX={3} borderRadius="md">
                <BasicText>
                  ⦾ <HL>Utility Props</HL>: Chakra UI introduces utility props
                  that allow you to apply common styles directly to components
                  without writing CSS. For example, you can set margin, padding,
                  color, and more using intuitive prop names.{" "}
                </BasicText>
              </Box>
              <Box bg="background" paddingX={3} borderRadius="md">
                <BasicText>
                  ⦾ <HL>Responsive Styles</HL>: Chakra UI provides a responsive
                  design system, allowing you to define styles that adapt to
                  different screen sizes. You can use breakpoint modifiers to
                  specify different styles for various screen sizes.{" "}
                </BasicText>
              </Box>
              <Box bg="background" paddingX={3} borderRadius="md">
                <BasicText>
                  ⦾ <HL>Theming</HL>: Chakra UI offers a powerful theming system
                  that allows you to customize the design tokens and default
                  styles according to your application's needs. You can create
                  and extend themes to achieve a consistent and branded look.{" "}
                </BasicText>
              </Box>
              <Box bg="background" paddingX={3} borderRadius="md">
                <BasicText>
                  ⦾ <HL>Style Props and CSS Prop</HL>: Chakra UI introduces
                  style props and the CSS prop, allowing you to apply inline
                  styles directly to components. This provides flexibility for
                  custom styling while leveraging the benefits of the Chakra UI
                  system.{" "}
                </BasicText>
              </Box>
            </VStack>
          </Box>
          <Box>
            <BasicText>
              The Chakra UI Styling system simplifies the process of styling
              React components by providing a robust and flexible set of tools,
              making it easier to build beautiful and consistent user
              interfaces.
            </BasicText>
            <SectionContainer color="mainText">
              <BulletBox>
                <BasicText>
                  These are the key aspects of the Chakra UI Styling system:{" "}
                </BasicText>
                <ul>
                  <li>
                    <Link href="/styling/padding_margin">
                      <HL>Padding & Margin 🔗</HL>
                    </Link>
                    : These control the spacing around and within elements.
                    Padding is the space inside an element, between the content
                    and the border. Margin is the space outside an element.
                  </li>

                  <li>
                    <Link href="/styling/color">
                      <HL>Color 🔗</HL>
                    </Link>
                    : This covers the usage of colors in your components. Chakra
                    UI has a preset of color palettes you can utilize, but you
                    can also create and use your own custom colors.
                  </li>

                  <li>
                    <Link href="/styling/gradients">
                      <HL> Gradients 🔗</HL>
                    </Link>
                    : Gradients allow for smooth transitions between multiple
                    colors. They can be applied to any property that accepts an
                    image, such as backgrounds or borders.
                  </li>

                  <li>
                    <Link href="/styling/typography">
                      <HL>Typography 🔗</HL>
                    </Link>
                    : This refers to text and font styling. You can control font
                    size, weight, style, line height, letter spacing, and text
                    color.
                  </li>

                  <li>
                    <Link href="/styling/layout">
                      <HL>Layout 🔗</HL>
                    </Link>
                    : This pertains to how elements are arranged on the page,
                    including how they handle width, height, and spacing.
                  </li>

                  <li>
                    <Link href="/styling/display">
                      <HL>Display 🔗</HL>
                    </Link>
                    : This property determines how a certain HTML element should
                    be displayed. Common values are "block", "inline", "flex",
                    "grid", "none", etc.
                  </li>

                  <li>
                    <Link href="/styling/flexbox">
                      <HL>Flexbox 🔗</HL>
                    </Link>
                    : Flexbox is a CSS layout module designed for
                    one-dimensional layouts. It's a powerful tool for aligning
                    elements horizontally and vertically.
                  </li>

                  <li>
                    <Link href="/styling/grid_layout">
                      <HL>Grid Layout 🔗</HL>
                    </Link>
                    : This is another CSS layout style designed for
                    two-dimensional layouts. It's ideal for designing complex
                    web layouts.
                  </li>

                  <li>
                    <Link href="/styling/background">
                      <HL>Background 🔗</HL>
                    </Link>
                    : Controls the background of an element. This includes
                    color, images, or gradients.
                  </li>

                  <li>
                    <Link href="/styling/borders">
                      <HL>Borders 🔗</HL>
                    </Link>
                    : Determines the style of borders around elements. It
                    includes border color, style (solid, dashed, etc.), and
                    width.
                  </li>

                  <li>
                    <Link href="/styling/border_radius">
                      <HL>Border Radius 🔗</HL>
                    </Link>
                    : Controls the roundness of borders. This can create a
                    rounded look on elements.
                  </li>

                  <li>
                    <Link href="/styling/position">
                      <HL>Position 🔗</HL>
                    </Link>
                    : Determines how an element is positioned within its
                    container. It can be static, relative, absolute, fixed, or
                    sticky.
                  </li>

                  <li>
                    <Link href="/styling/shadow">
                      <HL>Shadow 🔗</HL>
                    </Link>
                    : Used to apply box-shadows and text-shadows on elements,
                    providing depth to the UI.
                  </li>

                  <li>
                    <Link href="/styling/filter">
                      <HL>Filter 🔗</HL>
                    </Link>
                    : Provides graphical effects like blurring or color shifting
                    to an element.
                  </li>

                  <li>
                    <Link href="/styling/pseudo">
                      <HL>Pseudo Props 🔗</HL>
                    </Link>
                    : These are special properties that allow you to style
                    certain states of an element, like hover, focus, or active.
                  </li>

                  <li>
                    <Link href="/styling/as_prop">
                      <HL>The "as" Prop 🔗</HL>
                    </Link>
                    : Allows you to pass an element name or a component to
                    transform the UI component you're using to another HTML
                    element or component while inheriting the styling and all
                    props of the original component. For example, you could
                    render a button as an anchor tag but maintain all the styles
                    and props of the original button.
                  </li>
                </ul>
              </BulletBox>
            </SectionContainer>
          </Box>
        </FlexibleBox>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

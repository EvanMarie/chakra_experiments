import { Box, VStack } from "@chakra-ui/react";
import { PageHeader } from "~/components/app_components/menuBars";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  HL,
  MyLabel,
  SectionContainer,
  SectionDescription,
  colors,
} from "~/styles/DesignComponents";

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props">
        Chakra UI Styling System:
      </MyLabel>
      <SectionContainer>
        <SectionDescription>
          The Chakra UI Styling system is a comprehensive and intuitive approach
          to styling React applications using Chakra UI. It provides a set of
          utility functions, components, and design tokens that make it easy to
          create visually appealing and consistent user interfaces.{" "}
        </SectionDescription>
        <FlexibleBox bg={colors.myblue} p={4}>
          <Box>
            <BasicText>
              Here are the key aspects of the Chakra UI Styling system:{" "}
            </BasicText>
          </Box>
          <Box p={4}>
            <VStack spacing={1.5}>
              <BasicText>
                ⦾ <HL>Design Tokens</HL>: Chakra UI defines a set of design
                tokens such as colors, spacing, typography, and shadows. These
                tokens are used consistently throughout the application to
                maintain a cohesive visual style.{" "}
              </BasicText>
              <BasicText>
                ⦾ <HL>Component-based approach</HL>: Chakra UI offers a wide
                range of customizable components that follow best practices and
                provide consistent styling out of the box. These components can
                be easily composed together to build complex UIs.{" "}
              </BasicText>
              <BasicText>
                ⦾ <HL>Utility Props</HL>: Chakra UI introduces utility props
                that allow you to apply common styles directly to components
                without writing CSS. For example, you can set margin, padding,
                color, and more using intuitive prop names.{" "}
              </BasicText>
              <BasicText>
                ⦾ <HL>Responsive Styles</HL>: Chakra UI provides a responsive
                design system, allowing you to define styles that adapt to
                different screen sizes. You can use breakpoint modifiers to
                specify different styles for various screen sizes.{" "}
              </BasicText>
              <BasicText>
                ⦾ <HL>Theming</HL>: Chakra UI offers a powerful theming system
                that allows you to customize the design tokens and default
                styles according to your application's needs. You can create and
                extend themes to achieve a consistent and branded look.{" "}
              </BasicText>
              <BasicText>
                ⦾ <HL>Style Props and CSS Prop</HL>: Chakra UI introduces style
                props and the CSS prop, allowing you to apply inline styles
                directly to components. This provides flexibility for custom
                styling while leveraging the benefits of the Chakra UI system.{" "}
              </BasicText>
            </VStack>
          </Box>
          <Box>
            <BasicText>
              The Chakra UI Styling system simplifies the process of styling
              React components by providing a robust and flexible set of tools,
              making it easier to build beautiful and consistent user
              interfaces.
            </BasicText>
          </Box>
        </FlexibleBox>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

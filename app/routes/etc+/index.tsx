import { Box, Link, VStack } from "@chakra-ui/react";
import { BsTextareaResize } from "react-icons/bs";
import { BasicText, FlexibleBox, HL, Mono } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components">
        Miscellaneous Components
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            These are the components that offer extra functionality within the
            Chakra UI ecosystem. They do not fit into any of the other
            categories, but are still very useful to know about,
          </SectionDescription>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>
            These are the current components that Chakra list under "other":
          </BasicText>

          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/etc/close_button">
                    <HL>CloseButton 🔗</HL>
                  </Link>
                  : a simple yet essential element for user interactions. It
                  provides a visually appealing and accessible way to close or
                  dismiss elements such as modals, pop-ups, or alerts. The{" "}
                  <Mono>CloseButton</Mono> component typically appears as an "X"
                  symbol, allowing users to easily close the associated element
                  and return to the main interface. Importantly, you can
                  customize the Close Button's appearance, size, color, and
                  behavior to match your application's design language
                  seamlessly.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/etc/portal">
                    <HL>Portal 🔗</HL>
                  </Link>
                  : enables you to render content outside its parent component's
                  DOM hierarchy. This powerful feature allows you to create
                  elements that "portal" outside their usual container, making
                  it incredibly useful for scenarios such as modals, tooltips,
                  or dropdown menus. By using the Portal component, you can
                  maintain the logical structure of your code while rendering UI
                  elements in a different part of the DOM, enhancing flexibility
                  and facilitating more complex UI interactions.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/etc/show_hide">
                    <HL>Show / Hide 🔗</HL>
                  </Link>
                  : these provide a straightforward way to toggle the visibility
                  of elements based on a given condition or user interaction.
                  They allow you to control the appearance and disappearance of
                  content with smooth transitions, enhancing the user
                  experience. With <Mono>Show/Hide</Mono>, you can define
                  conditional rendering in your components, displaying or hiding
                  content based on variables or user-triggered events. Whether
                  you want to reveal additional information, implement
                  collapsible sections, or create responsive layouts, the
                  <Mono>Show/Hide</Mono> component simplifies the process and
                  adds interactivity to your UI effortlessly.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/etc/transitions">
                    <HL>Transitions 🔗</HL>
                  </Link>
                  : a set of predefined animation effects that you can apply to
                  elements when they enter or leave the screen or undergo
                  changes in their properties. These animations add a touch of
                  elegance and polish to your UI, making it more visually
                  appealing and interactive. Chakra UI's{" "}
                  <Mono>Transitions</Mono> components allow you to effortlessly
                  incorporate smooth fade-ins, slide-ins, zooms, and other
                  effects into your components, enabling seamless transitions
                  and enhancing the overall user experience.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

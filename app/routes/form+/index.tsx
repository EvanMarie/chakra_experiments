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
        Chakra UI: Form
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Building intuitive and user-friendly forms is an essential aspect of
            creating a seamless user interface. An effective form not only aids
            in collecting data from users but also serves as an interactive
            medium to engage users, making it important to the success of any
            web application. One of the key challenges faced by web developers
            today is creating user-friendly forms with a consistent look and
            feel across different platforms. That's where the Chakra UI library
            steps in to make our lives easier.
          </SectionDescription>

          <BasicText>
            Chakra UI is a simple, modular, and accessible component library
            that provides developers with a set of easy-to-use, flexible
            components that cater to almost all the UI requirements of modern
            web applications, including form components. Chakra UI components
            are built on top of React and have a broad user base due to their
            ease of use, extensive documentation, and the flexibility they
            provide to developers.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>Chakra-UI's Form Components: </BasicText>

          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/form/button">
                    <HL>Button 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/checkbox">
                    <HL>Checkbox 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/editable">
                    <HL>Editable 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/form_control">
                    <HL>Form Control 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/icon_button">
                    <HL>Icon Button 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/input">
                    <HL>Input 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/number_input">
                    <HL>Number Input🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/pin_input">
                    <HL>Pin Input 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/radio">
                    <HL>Radio 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/range_slider">
                    <HL>Range Slider🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/select">
                    <HL>Slider 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/slider">
                    <HL>Slider 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/switch">
                    <HL>Switch 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/form/textarea">
                    <HL>Textarea 🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
            </ul>
          </BulletBox>

          <Box>
            <BasicText>
              Use the navigation menu to learn more about each component
              individually.
            </BasicText>
          </Box>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

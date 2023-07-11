import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import { BsTextareaResize } from "react-icons/bs";
import {
  BasicText,
  BlueBold,
  HL,
  Mono,
  NoteBox,
} from "~/styles/DesignComponents";
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
      <MyLabel link="https://chakra-ui.com/docs/components">Typography</MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Typography plays a crucial role in design and communication. It
            involves the arrangement, appearance, and style of text to make it
            visually appealing, readable, and effective in conveying information
          </SectionDescription>

          <BasicText>
            Typography is essential for effective communication, establishing
            visual hierarchy, conveying brand identity, evoking emotions,
            ensuring accessibility, enhancing visual appeal, maintaining
            consistency, and adapting to different devices. By paying attention
            to typography, you can greatly improve the overall user experience
            and the impact of your design or content.
          </BasicText>
          <BasicText>
            Chakra-UI includes Typography components such as{" "}
            <Mono>Heading</Mono>, <Mono>Highlight</Mono>, and <Mono>Text</Mono>,
            which allow you to style and format text in your applications with
            ease.
          </BasicText>

          <BasicText>
            In addition to the common style props, all Typography components in
            Chakra-UI have access to the theme-based configuration for
            typography. This allows you to define a consistent typography style
            across your application by modifying the <Mono>theme</Mono> object.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>These are Chakra's Typography components:</BasicText>
          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/typography/heading">
                    <HL>Heading 🔗</HL>
                  </Link>
                  : The <Mono>Heading</Mono> component is used to display
                  headings and titles in your application. It supports different
                  levels, from <Mono>h1</Mono> to <Mono>h6</Mono>, using the{" "}
                  <Mono>as</Mono> prop. You can customize the font size, color,
                  and other styles using the Chakra UI's style props like{" "}
                  <Mono>fontSize</Mono>, <Mono>color</Mono>, and{" "}
                  <Mono>fontWeight</Mono>. The <Mono>Heading</Mono> component
                  automatically adjusts its font size and margins based on the
                  heading level for proper semantic markup.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/typography/highlight">
                    <HL>Highlight 🔗</HL>
                  </Link>
                  : The <Mono>Highlight</Mono> component is used to highlight a
                  specific part of a text. It allows you to apply a highlight
                  color to a portion of text content using the{" "}
                  <Mono>highlightColor</Mono> prop. You can further style the
                  highlighted text using Chakra UI style props. The{" "}
                  <Mono>Highlight</Mono> component is useful for emphasizing
                  important or relevant information.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/typography/text">
                    <HL>Text 🔗</HL>
                  </Link>
                  : The <Mono>Text</Mono> component is a versatile component
                  used for displaying general text content. It provides a range
                  of styling options such as font size, color, weight,
                  alignment, and more. You can use the <Mono>fontSize</Mono>,{" "}
                  <Mono>color</Mono>, <Mono>fontWeight</Mono>,{" "}
                  <Mono>textAlign</Mono>, and other style props to customize the
                  appearance of the text. The <Mono>Text</Mono> component also
                  supports truncation and text overflow handling using the{" "}
                  <Mono>isTruncated</Mono> prop.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
          <NoteBox>
            <Heading size="md">Typography Considerations:</Heading>
            <BulletBox>
              <ul>
                <li>
                  <b>Readability</b>: Typography significantly impacts the
                  readability of text. Choosing the right font, size, spacing,
                  and line height ensures that the text is easy to read and
                  understand, enhancing the user experience.
                </li>
                <li>
                  <b>Visual Hierarchy</b>: Typography helps establish a visual
                  hierarchy within content, guiding users to focus on important
                  information first. By using different font sizes, weights, and
                  styles for headings, subheadings, and body text, you can
                  effectively organize and prioritize content.
                </li>
                <li>
                  <b>Branding and Identity</b>: Typography plays a vital role in
                  creating and maintaining a brand's identity. Consistent use of
                  typography across various platforms and materials helps
                  reinforce the brand image and make it recognizable.
                </li>
                <li>
                  <b>Emotional Impact</b>: Fonts have the power to evoke
                  emotions and set the tone of a message. Different typefaces
                  convey different moods and personalities, allowing you to
                  align typography with the intended message or brand
                  personality.
                </li>
                <li>
                  <b>Accessibility</b>: Good typography practices ensure that
                  text is accessible to all users, including those with visual
                  impairments. It involves using appropriate font sizes,
                  contrast ratios, and spacing to ensure legibility for
                  individuals with different abilities.
                </li>
                <li>
                  <b>Visual Appeal</b>: Well-designed typography enhances the
                  overall visual appeal of a design. By selecting complementary
                  fonts, considering spacing and alignment, and using typography
                  as a design element, you can create visually appealing and
                  engaging experiences.
                </li>
                <li>
                  <b>Consistency and Coherence</b>: Consistent typography
                  creates a cohesive and harmonious design. Establishing a
                  typography system with defined font choices, styles, and
                  guidelines ensures a unified and professional look across
                  different sections of an application or website.
                </li>
                <li>
                  <b>Mobile and Responsive Design</b>: With the increasing use
                  of mobile devices, typography becomes even more important.
                  Responsive typography techniques, such as fluid typography and
                  media queries, help ensure optimal readability and legibility
                  across various screen sizes.
                </li>
              </ul>
            </BulletBox>
          </NoteBox>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

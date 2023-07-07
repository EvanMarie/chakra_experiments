import { Box, Link, VStack } from "@chakra-ui/react";
import { BsTextareaResize } from "react-icons/bs";
import { BasicText, BlueBold, HL, Mono } from "~/styles/DesignComponents";
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
        Chakra UI: Layout Components
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Chakra UI's Layout Components provide a powerful toolkit for
            building flexible and well-structured layouts effortlessly. Here, we
            will dive into the various components that make up this category,
            namely <Mono>Box</Mono>, <Mono>Center</Mono>, <Mono>Container</Mono>{" "}
            , <Mono>Flex</Mono>, <Mono>Grid</Mono>, <Mono>SimpleGrid</Mono>,{" "}
            <Mono>Stack</Mono>, and <Mono>Wrap</Mono>. These are the building
            blocks of your UI, and understanding and effectively utilizing these
            components is therefore essential to master in order to create
            attracive, responsive designs. They ensure consistency,
            responsiveness, flexibility, and simplified layout management,
            enabling you to create visually appealing and user-friendly
            interfaces.
          </SectionDescription>
          <BasicText>
            These are some of the significant benefits of utilizing these
            foundational components:{" "}
          </BasicText>
          <BulletBox>
            <ul>
              <li>
                <BlueBold>Consistency and Uniformity</BlueBold>: With these
                components, you can establish a consistent design language
                throughout your application. The components offer predefined
                styles and consistent behavior, ensuring a unified look and feel
                across different sections of your UI. By utilizing these
                components consistently, you can create a coherent and
                professional design that enhances the user experience.
              </li>
              <li>
                <BlueBold>Responsive and Adaptive</BlueBold>: In today's
                multi-device landscape, designing for responsiveness is crucial.
                Chakra UI's Layout Components are designed with responsiveness
                in mind, allowing your UI to seamlessly adapt to various screen
                sizes. Whether <Mono>Grid</Mono> arranging content in a flexible
                grid or <Mono>Wrap</Mono> automatically adjusting elements,
                these components enable you to create designs that are optimized
                for different devices and resolutions.
              </li>
              <li>
                <BlueBold>Flexibility and Customization</BlueBold>: One of the
                strengths of Chakra UI's Layout Components lies in their
                flexibility and customization options. The <Mono>Box</Mono>{" "}
                component, for example, offers a wide range of styling
                properties, enabling you to precisely tailor the appearance of
                your UI components. Additionally, the Flex component provides
                powerful control over the alignment and ordering of items,
                allowing you to create dynamic and adaptable layouts. This
                flexibility ensures that you can achieve the desired visual
                aesthetics while maintaining a consistent user experience.
              </li>
              <li>
                <BlueBold>Simplified Layout Management</BlueBold>: Chakra UI's
                Layout Components simplify the process of managing complex
                layouts. Whether it's the <Mono>Stack</Mono> component for
                stacking elements, the <Mono>Center</Mono> component for
                effortless centering, or the <Mono>Container</Mono> component
                for responsive width adjustments, these components abstract away
                the intricacies of CSS positioning and layout management. By
                utilizing these components, you can streamline your development
                process and focus on creating visually pleasing designs without
                getting caught up in the tedium of layout intricacies.
              </li>
              <li>
                <BlueBold>Time-Saving and Efficiency</BlueBold>: The Chakra UI
                Layout Components provide a library of prebuilt and well-tested
                components that you can readily incorporate into your projects.
                This eliminates the need to reinvent the wheel and saves
                valuable development time. By utilizing these components, you
                can rapidly prototype and iterate on your designs, accelerating
                the development process and delivering a polished UI to your
                users more efficiently.
              </li>
            </ul>
          </BulletBox>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>
            Here is an overall of each of the Layout components available from
            Chakra UI:
          </BasicText>

          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/layout/box">
                    <HL>Box 🔗</HL>
                  </Link>
                  : a versatile building block for layout design. It serves as a
                  wrapper element and provides a wide range of styling options,
                  such as setting margins, padding, background color, and much
                  more. With <Mono>Box</Mono>, you have the flexibility to
                  customize and structure your UI components precisely as
                  needed.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/on_my_way">
                    {/* <Link href="/layout/center"> */}
                    <HL>Center 🔗</HL>
                  </Link>
                  : allows you to effortlessly center content both vertically
                  and horizontally within its parent container. It simplifies
                  the process of creating aesthetically balanced designs and
                  eliminates the need for complex CSS positioning.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/on_my_way">
                    {/* <Link href="/layout/container"> */}
                    <HL>Container 🔗</HL>
                  </Link>
                  : provides a responsive container that adjusts its width based
                  on the screen size. It ensures that your content remains
                  readable and visually appealing across various devices,
                  enabling a seamless user experience.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/on_my_way">
                    {/* <Link href="/layout/flex"> */}
                    <HL>Flex 🔗</HL>
                  </Link>
                  : implements the flexbox layout model, making it easier to
                  create flexible and responsive designs. With <Mono>Flex</Mono>
                  , you can control the alignment, spacing, and ordering of
                  items within a container, facilitating the creation of dynamic
                  and adaptive layouts.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/on_my_way">
                    {/* <Link href="/layout/grid"> */}
                    <HL>Grid 🔗</HL>
                  </Link>
                  : enables you to create responsive grid layouts with ease. By
                  defining rows and columns, you can arrange and align content
                  in a grid-like structure. <Mono>Grid</Mono> provides a
                  powerful and intuitive system for building complex and
                  organized layouts.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/on_my_way">
                    {/* <Link href="/layout/simple_grid"> */}
                    <HL>SimpleGrid 🔗</HL>
                  </Link>
                  : builds upon the Grid component and simplifies the process of
                  creating responsive grids with equal-sized columns. It offers
                  a straightforward syntax for defining the number of columns
                  and their breakpoints, streamlining the creation of visually
                  consistent designs.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/on_my_way">
                    {/* <Link href="/layout/stack"> */}
                    <HL>Stack 🔗</HL>
                  </Link>
                  : allows you to stack elements vertically or horizontally,
                  controlling the spacing between them. It provides a convenient
                  way to create layouts with stacked sections, navigation menus,
                  or lists, ensuring a clean and orderly design.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/on_my_way">
                    {/* <Link href="/layout/wrap"> */}
                    <HL>Wrap 🔗</HL>
                  </Link>
                  : wraps its child elements and automatically adjusts their
                  positioning when the available space is limited. It is
                  particularly useful when dealing with a variable number of
                  elements that need to adapt to different screen sizes,
                  ensuring a responsive and visually pleasing layout.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

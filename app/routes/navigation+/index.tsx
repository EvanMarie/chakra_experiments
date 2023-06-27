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
        Chakra UI: Navigation
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            Well-planned navigation is important to the success of any website.
            It functions as a roadmap for your visitors, guiding them to the
            information or services they seek with ease and efficiency. Clear,
            intuitive navigation contributes to a superior user experience,
            minimizing frustration and promoting user engagement. This, in turn,
            can lead to higher user retention and conversion rates.
            Well-structured navigation also improves a website's search engine
            ranking, making it easier for potential users to discover your site.
          </SectionDescription>

          <BasicText>
            The navigation components in Chakra UI include{" "}
            <Mono>Breadcrumb</Mono>, <Mono>Link</Mono>,<Mono>Linkoverlay</Mono>,{" "}
            <Mono>Skipnav</Mono>, and <Mono>Stepper</Mono>. These components are
            very helpful in structuring websites and applications, guiding
            users, and improving overall user experience.
          </BasicText>

          <BasicText>
            Navigation components like these are key tools that, when used
            properly, can significantly enhance the functionality, usability,
            and accessibility of your website or application. As you explore
            further, you'll learn how each component can be used and customized
            to fit your specific needs.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>DESCRIBE BULLETS</BasicText>
          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/navigation/breadcrumb">
                    <HL>Breadcrumb 🔗</HL>
                  </Link>
                  : a valuable navigation pattern that gives users a way to
                  understand their current location within the app or site, and
                  how they arrived there. It provides a trail for the user to
                  follow back to the start or root of the site.{" "}
                  <Mono>Breadcrumb</Mono>
                  enhances user experience by making navigation simpler,
                  especially on websites or apps with a complex hierarchical
                  structure.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/navigation/link">
                    <HL>Link 🔗</HL>
                  </Link>
                  : fundamental building blocks of any website or application.
                  The <Mono>Link</Mono> component in Chakra UI is designed to
                  provide a high degree of accessibility and style flexibility.
                  It makes creating links in your website easy and intuitive,
                  allowing users to navigate between different pages, sections,
                  or views smoothly.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/navigation/link_overlay">
                    <HL>Link Overlay🔗</HL>
                  </Link>
                  : a unique Chakra UI component that enables clickable areas
                  within a larger, complex component. It's particularly useful
                  when you want to make an entire section or component
                  clickable, not just the text within a link. This can greatly
                  enhance the accessibility and usability of your application.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/navigation/skipnav">
                    <HL>Skip Nav🔗</HL>
                  </Link>
                  : a powerful tool for improving accessibility. It allows users
                  to bypass a block of content that is repeated on multiple
                  pages, like a navigation menu, and move directly to the
                  primary content of the page. This is especially beneficial for
                  keyboard and screen reader users, making your website or
                  application more inclusive.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/navigation/stepper">
                    <HL>Stepper 🔗</HL>
                  </Link>
                  : a component that guides users through multi-step processes,
                  such as registrations, checkouts, or surveys. It helps to
                  break down complex tasks into manageable steps, providing a
                  clear sense of progression and accomplishment. Stepper also
                  enhances the user experience by making complex tasks seem less
                  daunting.
                </BasicText>
              </li>
            </ul>
          </BulletBox>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

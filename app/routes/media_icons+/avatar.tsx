import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { BasicText, BlueBold, HL, Mono } from "~/styles/DesignComponents";

import {
  BigBackgroundBox,
  BulletBox,
  DescriptionBox,
  ExampleBox,
  MyLabel,
  SectionContainer,
  ImportBox,
  MainGrid,
  GridColumn,
  GridBoxOne,
  GridBoxThree,
  GridBoxTwo,
  HighlightColumn,
  MyFlex,
  SectionDescription,
  SingleExample,
  HighlightText,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Media from "~/mardownExamples/media_icons/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import {
  AvatarFive,
  AvatarFour,
  AvatarOne,
  AvatarSix,
  AvatarThree,
  AvatarTwo,
} from "~/components/media_icons/avatarComponents";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Box } from "@chakra-ui/react";
import {
  AvatarTipOne,
  AvatarTipThree,
  AvatarTipTwo,
} from "~/components/media_icons/avatarFunctions";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/avatar" size={28}>
        Avatar
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The Avatar component in Chakra UI is a versatile and
              feature-rich tool designed for representing user profiles,
              contributors, or any other form of user identity in a visual
              format. It's a great addition to applications where identifying
              users or participants visually is important, such as in chat apps,
              social media platforms, collaborative tools, or even in comment
              sections of a blog.
            </SectionDescription>
            <BasicText>
              The Avatar component's primary function is to display an image
              that typically represents a user's profile picture. However, the
              Avatar component goes beyond merely displaying an image; it
              provides several features and options for customization:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <BlueBold>Fallback Support</BlueBold>: If an image fails to
                  load or isn't provided, the Avatar component can automatically
                  display the user's initials instead. This is achieved by
                  passing the user's name to the name prop of the Avatar
                  component.
                </li>
                <li>
                  <BlueBold>Size Adjustments</BlueBold>: Chakra UI allows you to
                  adjust the size of the avatar to better fit your interface
                  design. This can be done by passing predefined values like
                  "xs", "sm", "md", "lg", "xl", "2xl", etc., to the size prop.
                </li>
                <li>
                  <BlueBold>Shape Customization</BlueBold>: The shape of the
                  Avatar can be customized by modifying the borderRadius prop.
                  While avatars are typically round, you can set it to a square,
                  or any other shape that CSS border-radius supports.
                </li>
                <li>
                  <BlueBold>Border Customization</BlueBold>: You can add a
                  border to the Avatar by using <Mono>borderColor</Mono> and{" "}
                  <Mono>borderWidth</Mono> props. This is useful in situations
                  where you want the <Mono>Avatar</Mono> to stand out from the
                  background.
                </li>
                <li>
                  <BlueBold>Grouping Avatars</BlueBold>: Chakra UI also provides
                  an <Mono>AvatarGroup</Mono> component which allows you to
                  display a stack of avatars, useful for showing multiple users
                  or contributors. This component can also show the excess
                  number of avatars if they exceed the limit set.
                </li>
                <li>
                  <BlueBold>Badges</BlueBold>: The Chakra UI <Mono>Avatar</Mono>{" "}
                  component can also be combined with the <Mono>Badge</Mono>{" "}
                  component to display statuses like "online", "offline", "do
                  not disturb", etc.
                </li>
                <li>
                  <BlueBold>Custom Default Avatar</BlueBold>: In scenarios where
                  you don't want to fall back to initials, Chakra UI also allows
                  you to set a custom default avatar that will be used when the{" "}
                  <Mono>src</Mono> prop is falsy.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                The flexibility, ease of use, and the built-in fallback and
                accessibility features of the <Mono>Avatar</Mono> component
                makes it a go-to choice for developers who need a reliable and
                customizable way to display user profiles in their applications.
                It allows for a wide range of creative implementations while
                ensuring a great and consistent user experience.
              </BasicText>

              <BasicText>
                The three avatar-related components described below work
                together to give developers a flexible and powerful way to
                represent users within their applications. The{" "}
                <Mono>Avatar</Mono> represents the user, the{" "}
                <Mono>AvatarBadge</Mono> provides additional status information,
                and the <Mono>AvatarGroup</Mono> allows for showing multiple
                users together, each serving their own unique purpose, yet
                working harmoniously together. With the right combination, they
                can significantly enhance the visual representation of users in
                your application.
              </BasicText>

              <BulletBox>
                <ul>
                  <li>
                    <HL>Avatar</HL>: As previously mentioned, the{" "}
                    <Mono>Avatar</Mono> component is primarily used to display
                    an image that represents the user. It accepts several props
                    which allow for extensive customization of appearance and
                    behavior. Key properties include <Mono>src</Mono> for the
                    image source, <Mono>name</Mono> for the textual
                    representation (used for generating initials in case of an
                    image failure), <Mono>size</Mono> for defining the size of
                    the avatar, <Mono>borderRadius</Mono> to change the shape,
                    and <Mono>borderColor</Mono> and <Mono>borderWidth</Mono> to
                    customize the border.
                    <BasicText>
                      Additionally, you can apply any style props that Chakra UI
                      provides, giving you more freedom to customize the look
                      and feel of the <Mono>Avatar</Mono> to match your
                      application's design system. This includes properties for
                      color, spacing, typography, and more. Additionally, the{" "}
                      <Mono>Avatar</Mono> component supports all standard HTML
                      attributes and event handlers.
                    </BasicText>
                  </li>
                  <li>
                    <HL>AvatarBadge</HL>: The <Mono>AvatarBadge</Mono> is a
                    sub-component that allows you to add supplementary visual
                    information to your <Mono>Avatar</Mono>. This badge is a
                    small circular element that overlays the <Mono>Avatar</Mono>
                    , typically placed at the bottom-right corner. It's commonly
                    used to indicate a user's status, like online, offline,
                    busy, and more.
                    <BasicText>
                      You can customize the appearance of the{" "}
                      <Mono>AvatarBadge</Mono> using Chakra UI's style props,
                      and it's often colored to indicate the status. For
                      instance, green for online, red for busy, and gray for
                      offline. The <Mono>boxSize</Mono> prop can be used to
                      adjust the size of the badge. It's as simple as nesting
                      the <Mono>AvatarBadge</Mono> component within the Avatar
                      component in your JSX code.
                    </BasicText>
                  </li>
                  <li>
                    <HL>AvatarGroup</HL>:The <Mono>AvatarGroup</Mono> component
                    is a handy wrapper that lets you display multiple Avatar
                    components together in a stack. This is particularly useful
                    when you want to show several users, such as a group chat or
                    a list of contributors to a project.
                    <BasicText>
                      The <Mono>AvatarGroup</Mono> component uses the spacing
                      prop to adjust the distance between the stacked Avatars.
                      When the number of Avatars exceeds a set limit, it can
                      automatically show an excess indicator, which is a "+"
                      sign followed by the number of extra Avatars not shown.
                      This limit can be set with the <Mono>max</Mono> prop.
                    </BasicText>{" "}
                  </li>
                </ul>
              </BulletBox>

              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  Avatar, 
  AvatarBadge, 
  AvatarGroup } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <AvatarOne />
                <ModalCode>
                  <Media.E01 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AvatarTwo />
                <ModalCode>
                  <Media.E02 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AvatarThree />
                <ModalCode>
                  <Media.E03 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AvatarFour />
                <ModalCode>
                  <Media.E04 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AvatarFive />
                <ModalCode>
                  <Media.E05 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <AvatarSix />
                <ModalCode>
                  <Media.E06 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Avatars as Buttons</b>: While not an obvious use case, you can
              wrap the Avatar component in a button or link to create a
              clickable avatar. This is useful in cases where you want users to
              click on an avatar, perhaps to view a user's profile or start a
              chat.
            </HighlightText>
            <MyFlex>
              <AvatarTipOne />
            </MyFlex>
            <ModalCode>
              <Media.H01 />
            </ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>
              <b>Gradient Background Avatars</b>: The <b>Avatar</b> component's{" "}
              <Mono>bg</Mono> prop doesn't only accept solid colors. You can
              also pass in gradient values to create a more vibrant and dynamic
              avatar, especially when no image is provided. This can help make
              your interface more colorful and engaging.
            </HighlightText>
            <MyFlex>
              <AvatarTipTwo />
            </MyFlex>
            <ModalCode>
              <Media.H02 />
            </ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>
              <b>Custom Shapes</b>: Although avatars are usually round, you can
              change their shape by manipulating the borderRadius prop. If you
              want to distinguish certain avatars or just prefer a different
              style, this can be a unique way to customize the appearance of
              your avatars.
            </HighlightText>
            <MyFlex>
              <AvatarTipThree />
            </MyFlex>
            <ModalCode>
              <Media.H03 />
            </ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

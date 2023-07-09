import { Box, Link, VStack } from "@chakra-ui/react";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
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
        Media & Icons
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>
            The Chakra UI Media and Icons category of components includes the
            <Mono>Avatar</Mono> component, the <Mono>Icon</Mono> component, and
            the <Mono>Image</Mono> component. These components are specifically
            designed to enhance the visual experience of the users and promote
            interactive, engaging interfaces.
          </SectionDescription>
          <BasicText>
            The components offer developers a simplified yet effective means of
            adding rich, interactive media to their applications. They come
            pre-styled with sensible defaults but can be customized extensively
            to fit the needs of different design systems. Their accessibility
            features, combined with the fact that they help to improve the
            overall user experience, makes them an invaluable tool in a
            developer's toolkit.
          </BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>
            Here is a brief overview of each component within the Media and
            Icons category.{" "}
          </BasicText>
          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/media_icons/avatar">
                    <HL>Avatar 🔗</HL>
                  </Link>
                  : The <Mono>Avatar</Mono> component in Chakra UI is used to
                  represent user identities. It displays an image that typically
                  represents a user's profile picture but can also fall back to
                  the user's initials if an image fails to load or isn't
                  provided. The <Mono>Avatar</Mono> component is customizable
                  and can be adjusted in size, shape, and border. It can also be
                  grouped to show multiple user identities. It is particularly
                  useful when building social applications or any application
                  that requires representation of user identity.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/media_icons/icon">
                    <HL>Icon 🔗</HL>
                  </Link>
                  : The <Mono>Icon</Mono> component offers a flexible way to use
                  SVG (Scalable Vector Graphics) icons in your application. You
                  can use built-in Chakra UI icons, or you can use custom SVGs
                  to create unique visual effects. The component can be styled
                  to match your application's look and feel, and it includes
                  support for theming, colors, and sizes. Icons help to
                  communicate actions and information visually, making them
                  essential in modern web and app design. They enhance usability
                  and accessibility by providing a universal language of
                  symbolism that can transcend language barriers.
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/media_icons/image">
                    {" "}
                    <HL>Image 🔗</HL>
                  </Link>
                  : The <Mono>Image</Mono> component in Chakra UI provides an
                  accessible and customizable image UI component. It's similar
                  to the native HTML img tag but with extra features. The Image
                  component supports fallbacks if the image source fails to
                  load, and it automatically handles common accessibility
                  concerns such as adding an alternative text. You can also
                  apply Chakra UI's style props to easily modify an image's
                  appearance. This component is vital when dealing with
                  media-rich applications that require visual content.
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

import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  AvatarFunctionFive,
  AvatarFunctionFour,
  AvatarFunctionOne,
  AvatarFunctionSix,
  AvatarFunctionThree,
  AvatarFunctionTwo,
} from "./avatarFunctions";

/* ********************************************************************** */

export function AvatarOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Avatar Implementation</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Our first example illustrates a basic use case of the{" "}
          <Mono>Avatar</Mono> component, creating a row of six avatars, each
          with their respective images. If an image fails to load, the component
          falls back to showing the initials of the person's name. This approach
          is commonly used in chat interfaces, contact lists, or anywhere you
          need to display a list of users or contributors.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Sizing for Avatars</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In Chakra UI, the <Mono>Avatar</Mono> component supports various
          pre-defined sizes including "xs" (extra small), "sm" (small), "md"
          (medium), "lg" (large), "xl" (extra large), and "2xl" (double extra
          large). You can set the size by passing one of these values to the
          size prop of the Avatar component, allowing you to easily control the
          dimensions of the avatar images in your application. There are six
          avatars in this layout, each representing a different person and
          assigned a unique size from "xs" to "2xl".
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarThree() {
  return (
    <SectionContainer>
      <SectionHeading>Fallback for Avatar Loading Errors</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Avatar</Mono> component in Chakra UI provides flexible and
          robust fallback mechanisms for situations where an avatar image fails
          to load. The following is a demonstration that showcases these
          fallback mechanisms, as well as customization of the fallback avatar.
          This level of customization make the Avatar component an excellent
          choice for handling user avatars in your application.
        </SectionDescription>
        <BasicText>
          In this example, we have an <Mono>Avatar</Mono> component for three
          different people, each with a different size and a broken link for the
          <Mono>src</Mono> prop, hence the images will not load. This provides
          us with an opportunity to explore the fallbacks provided by the{" "}
          <Mono>Avatar</Mono> component.
        </BasicText>
        <BasicText>
          The first two avatars have a name prop, which the Avatar component
          uses to generate initials to display in the absence of an image.
          Additionally this, the <Mono>bg</Mono> prop is used to customize the
          background color of the fallback avatar. The <Mono>icon</Mono> prop is
          used to display a custom icon (from the <Mono>react-icons</Mono>{" "}
          library in this case) in place of the initials.
        </BasicText>
        <BasicText>
          For the third avatar, we don't provide a <Mono>name</Mono> prop. In
          this case, Chakra UI will use the custom icon and background color
          specified by the <Mono>icon</Mono> and <Mono>bg</Mono> props as the
          fallback avatar.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarFour() {
  return (
    <SectionContainer>
      <SectionHeading>Using Avatar Badges</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Avatar badges are incredibly useful for indicating additional
          information such as the online status of a user. They are placed in
          the corner of the avatar image and can be fully customized to fit the
          design of your application.{" "}
        </SectionDescription>
        <BasicText>
          In this example, we have a row of three <Mono>Avatar</Mono>{" "}
          components, each representing a different person with a respective
          image provided by the <Mono>src</Mono> prop. Nested within each{" "}
          <Mono>Avatar</Mono> component is an <Mono>AvatarBadge</Mono>. The{" "}
          <Mono>boxSize</Mono> prop is used to determine the size of each badge
          relative to the avatar's font size. For the first avatar, the badge
          has a green background, indicating that the user is online.
        </BasicText>
        <BasicText>
          For the second and third avatars, we not only change the background
          color of the badge using the <Mono>bg</Mono> prop but also specify a
          border color using the <Mono>borderColor</Mono> prop. These badges
          could signify different statuses - for example, the "deeppink" badge
          could indicate a 'busy' status, and a yellow one could denote 'away'
          status.
        </BasicText>
        <BasicText>
          By using these props, we can manipulate the appearance of each badge
          to suit our design needs, providing a clear and efficient way to
          visually communicate additional information to our users.
        </BasicText>
        <BasicText>
          It's important to highlight that the em unit is used for sizing the{" "}
          <Mono>AvatarBadge</Mono>. This approach is beneficial because it
          allows the badge's size to adjust proportionally to the avatar's font
          size.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarFive() {
  return (
    <SectionContainer>
      <SectionHeading>Displaying an Avatar Group</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When you need to display a group of users or a team, you can use
          Chakra UI's <Mono>AvatarGroup</Mono> component. It allows you to
          neatly stack multiple <Mono>Avatar</Mono> components together. You can
          limit the number of visible avatars and adjust their size and spacing.{" "}
        </SectionDescription>
        <BasicText>
          In this example, we have an <Mono>AvatarGroup</Mono> component that
          contains five individual <Mono>Avatar</Mono> components. The{" "}
          <Mono>size</Mono> prop in <Mono>AvatarGroup</Mono> applies to all{" "}
          <Mono>Avatars</Mono>, making them 'large'. The <Mono>max</Mono> prop
          limits the number of visible avatars to three. Avatars beyond this
          limit are not shown individually but are represented by a{" "}
          <Mono>"+2" badge</Mono>. The <Mono>spacing</Mono>
          prop is used to set the degree of overlap between the avatars,
          providing a compact, visually appealing user group display.
        </BasicText>
        <BasicText>
          This functionality is useful, for instance, in a chat application
          where you may want to show a preview of the group's members, or in a
          project management tool where you would want to display the project's
          team members.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function AvatarSix() {
  return (
    <SectionContainer>
      <SectionHeading>Modifying the Initials Logic</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>getInitials</Mono> prop is introduced to give developers
          control over how the initials are derived from the name. By default,
          the logic combines the first characters of each word in the name prop.
        </SectionDescription>
        <BasicText>
          In this example, we've replaced the default initials logic with a new
          function that generates initials in reverse order. So, for 'Person
          One', the Avatar component will display 'OP' instead of the default
          'PO'.
        </BasicText>
        <BasicText>
          Remember, the <Mono>getInitials</Mono> prop accepts a function that
          takes the full name as an argument and returns the initials string.
          This means you can implement any initials logic that fits your
          specific needs.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <AvatarFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

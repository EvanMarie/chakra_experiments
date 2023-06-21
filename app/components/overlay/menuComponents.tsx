import { Box } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  MenuFunctionOne,
  MenuFunctionTwo,
  MenuFunctionThree,
  MenuFunctionFour,
  MenuFunctionFive,
  MenuFunctionSix,
  MenuFunctionSeven,
  MenuFunctionEight,
} from "./menuFunctions";

export function MenuOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Menu</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we have a <Mono>Menu</Mono> component wrapping the
          menu-related elements. The <Mono>MenuButton</Mono> component serves as
          the trigger button for the dropdown menu. It is rendered as a{" "}
          <Mono>Button</Mono> component with a chevron icon indicating that it
          expands the menu when clicked. The text "Things to Do:" is displayed
          as the button's content.
        </SectionDescription>

        <BasicText>
          The MenuList component represents the container for the menu items. It
          is where you define and render individual <Mono>MenuItem</Mono>{" "}
          components. In this example, we have four menu items: "Get Coffee,"
          "Take a Walk," "Pet a Dog," and "Meditate."
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

export function MenuTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Accessing Internal State</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To access the internal state of the <Mono>Menu</Mono> component in
          Chakra UI, you can utilize a render prop function as children. This
          approach grants you access to the internal state properties, such as{" "}
          <Mono>isOpen</Mono>, and the
          <Mono>onClose</Mono> method.
        </SectionDescription>
        <BasicText>
          In this example, instead of directly placing child components within
          the Menu component, we provide a render prop function as the children.
          This function receives an object with the <Mono>isOpen</Mono>{" "}
          property, which indicates whether the menu is currently open or
          closed.
        </BasicText>
        <BasicText>
          Using this <Mono>isOpen</Mono> property, we can dynamically update the
          appearance of the <Mono>MenuButton</Mono> component by setting the{" "}
          <Mono>isActive</Mono> prop based on the isOpen value. This allows us
          to style the button differently depending on the menu state.
        </BasicText>
        <BasicText>
          The <Mono>render</Mono> prop function also enables us to customize the
          content of the MenuButton. In this case, we display "Close" or "Open"
          text based on the current state. This text is rendered dynamically by
          utilizing a ternary operator to conditionally display the appropriate
          label.
        </BasicText>
        <BasicText>
          Within the render prop function, we continue defining the{" "}
          <Mono>MenuList</Mono>
          component and its child <Mono>MenuItem</Mono> components. These
          represent the dropdown menu items that will be displayed when the menu
          is open. In this example, we have two menu items: "Do Something" and
          "Do Something Better," with the latter having a click event handler
          that triggers an alert when clicked.
        </BasicText>
        <BasicText>
          By leveraging the render prop function in the Menu component, you can
          gain more control over the internal state and behavior of the menu,
          allowing for dynamic rendering and seamless interaction within your
          application.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

export function MenuThree() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing the Menu Button</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we have a menu with a custom button component using
          Chakra UI's <Mono>Menu</Mono> component. The custom button component,{" "}
          <Mono>CustomButton</Mono>, is created using the{" "}
          <Mono>forwardRef</Mono> function. This function allows the ref to be
          passed to the underlying DOM button element, ensuring proper
          positioning of the <Mono>MenuList</Mono>.
        </SectionDescription>
        <BasicText>
          By utilizing the custom button component with the Menu component, we
          can create a customized menu trigger with the desired visual
          appearance and behavior. The menu will now open and close as expected
          without any type errors.
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

export function MenuFour() {
  return (
    <SectionContainer>
      <SectionHeading>Letter Navigation Menu</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example is a customized menu component that allows you to
          navigate through menu items by typing a letter key. When the focus is
          on the MenuButton or within the MenuList, typing a letter will
          initiate a search and move the focus to the first{" "}
          <Mono>MenuItem</Mono> that starts with the typed letter.
        </SectionDescription>
        <BasicText>
          To use the letter navigation functionality, follow these steps. You
          will notice that the focus automatically moves to the first{" "}
          <Mono>MenuItem</Mono> that begins with the letter you typed.
        </BasicText>
        <BulletBox>
          <ol>
            <li>Open the menu by clicking on the MenuButton.</li>
            <li>Try typing any letter (for example, "U") on your keyboard.</li>
          </ol>
        </BulletBox>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

export function MenuFive() {
  return (
    <SectionContainer>
      <SectionHeading>Image Menu</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ An image menu is a versatile component that allows you to create
          visually appealing menus with custom images. By leveraging this
          functionality, you can enhance the user experience by presenting menu
          options accompanied by relevant and eye-catching images. Whether used
          in e-commerce websites to showcase product options, travel platforms
          to display destination choices, or recipe applications to present
          mouth-watering dishes, the images add an engaging visual element that
          captures users' attention and helps them make informed selections. Its
          flexibility makes it suitable for a wide range of applications,
          enabling you to create unique and captivating menus tailored to your
          specific needs.
        </SectionDescription>
        <BasicText>
          This image menu example is a unique menu component that showcases
          different images of the renowned actor, Keanu Reeves. Each menu item
          features a custom image of Keanu Reeves along with a corresponding
          label.
        </BasicText>
        <BasicText>
          Inside the <Mono>MenuList</Mono>, we have three <Mono>MenuItem</Mono>{" "}
          components, each showcasing a different image of Keanu Reeves. The
          images are fetched from the "placekeanu.com" website with varying URLs
          to display unique images. Alongside each image, there is a label
          denoting the specific Keanu Reeves version.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

export function MenuSix() {
  return (
    <SectionContainer>
      <SectionHeading>Icon and Command Enhancement</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Incorporating icons and commands into menus can significantly
          enhance the user experience and streamline interactions. The following
          example demonstrates how to add icons and commands to menu items using
          the Chakra UI <Mono>Menu</Mono> component.
        </SectionDescription>
        <BasicText>
          In this customized example, we utilize the Chakra UI Menu component to
          create a menu with enhanced functionality. The <Mono>MenuButton</Mono>
          , rendered as an <Mono>IconButton</Mono>, features the{" "}
          <Mono>HamburgerIcon</Mono> and serves as the trigger for the menu.
          Within the <Mono>MenuList</Mono>, we define several MenuItem
          components. Each <Mono>MenuItem</Mono> includes an icon representing
          the action associated with it, such as AddIcon,{" "}
          <Mono>ExternalLinkIcon</Mono>, <Mono>RepeatIcon</Mono>, and{" "}
          <Mono>EditIcon</Mono>.
        </BasicText>
        <BasicText>
          Additionally, a command or hotkey is specified for each menu item
          using the command prop, which provides a convenient way to communicate
          keyboard shortcuts or commands to the user. By incorporating icons and
          commands, this menu provides clear visual cues and helps users quickly
          identify and access specific actions. This approach can be adapted for
          a variety of use cases, such as productivity tools, text editors, or
          any application where efficient menu navigation and command execution
          are essential.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

export function MenuSeven() {
  return (
    <SectionContainer>
      <SectionHeading>MenuGroup</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>MenuGroup</Mono> component in Chakra UI offers a
          convenient way to organize related menu items and improve menu
          navigation. By grouping menu items under specific titles, you can
          create a more structured and user-friendly menu experience. In this
          example, we have a menu centered around a Likes and Dislikes theme.
          The
          <Mono>MenuButton</Mono>, styled as a <Mono>Button</Mono> with the
          'pink' color scheme.{" "}
        </SectionDescription>
        <BasicText>
          Within the <Mono>MenuList</Mono>, we utilize the{" "}
          <Mono>MenuGroup</Mono> component to create two distinct groups: Likes
          and Dislikes. Each group is defined by a title passed as a prop to{" "}
          <Mono>MenuGroup</Mono>. Under the Likes group, we have menu items like
          "Coffee" and "Dark Chocolate." After a <Mono>MenuDivider</Mono>, the
          Dislikes group includes menu items such as "Chicken Liver" and "Mean
          People."
        </BasicText>
        <BasicText>
          By employing the <Mono>MenuGroup</Mono> component, you can structure
          your menus in a logical manner, making it easier for users to locate
          and select the desired options. This approach is particularly useful
          when organizing complex menus with multiple categories or sections.
          The <Mono>MenuGroup</Mono> component ensures a cohesive and intuitive
          user experience when navigating through various menu items.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionSeven />
      </MyFlex>
    </SectionContainer>
  );
}

export function MenuEight() {
  return (
    <SectionContainer>
      <SectionHeading>MenuItem as a Link</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In certain scenarios, you may want to render a MenuItem as a link to
          provide interactive navigation within your menu. By utilizing the as
          and href attributes, you can easily achieve this functionality.
        </SectionDescription>
        <BasicText>
          By incorporating this approach, users can click on the menu items and
          navigate to the specified URLs or anchor targets. This is particularly
          useful when building navigation menus or dropdowns that require
          clickable links as menu options.{" "}
        </BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <MenuFunctionEight />
      </MyFlex>
    </SectionContainer>
  );
}

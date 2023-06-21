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
  ModalFunctionFive,
  ModalFunctionFour,
  ModalFunctionOne,
  ModalFunctionSix,
  ModalFunctionThree,
  ModalFunctionTwo,
} from "./modalFunction";

export function ModalOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Modal</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, clicking on the "Trigger Modal" button opens the
          modal dialog. The <Mono>isOpen</Mono> state is controlled by the{" "}
          <Mono>useDisclosure</Mono> hook from Chakra UI, which conveniently
          handles the open, close, and toggle actions for components like
          modals.
        </SectionDescription>
        <BasicText>
          When the modal is opened, the focus is trapped within the modal, and
          it's set to the first tabbable element, enhancing accessibility. Users
          cannot interact with the content behind the modal until the modal is
          closed, either by clicking on the "Dismiss" button or the close button
          at the top.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ModalFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

export function ModalTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Focus Control Upon Closure</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, when the modal dialog closes, it does not return
          the focus to the element that opened the modal ("Launch Modal" button
          in this case). Instead, the focus shifts to a different content marked
          by the endRef reference.
        </SectionDescription>
        <BasicText>
          We do this by passing <Mono>endRef</Mono> to the{" "}
          <Mono>finalFocusRef</Mono> prop of the <Mono>Modal</Mono>
          component. The <Mono>finalFocusRef</Mono> is a useful feature of
          Chakra UI's Modal that allows developers to control which element
          should receive focus when the modal closes. This is particularly
          useful for accessibility reasons, guiding the user's focus to a
          relevant place after they have completed their interaction with the
          modal.
        </BasicText>
        <BasicText>
          In this particular example, the different content is a Box component
          that receives the focus after the modal closes. We indicate this using
          aria-label attribute on the Box. As with all Chakra UI components, you
          can customize and extend these as needed. For example, we've changed
          the color scheme of the close button to purple and added an additional
          button in the footer for another action.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ModalFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

export function ModalThree() {
  return (
    <SectionContainer>
      <SectionHeading>Establish Initial Focus</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ This example demonstrates a powerful aspect of Chakra UI's modal
          dialog: the ability to control which element within the modal receives
          focus initially when the modal opens and which element receives focus
          after the modal closes.
        </SectionDescription>
        <BasicText>
          In this example, the <Mono>initialFocusRef</Mono> prop is passed to
          the <Mono>Modal</Mono>
          component and is set to <Mono>startRef</Mono>. This means that when
          the modal opens, the initial focus is set on the first{" "}
          <Mono>Input</Mono> field (for "First Name").
        </BasicText>
        <BasicText>
          The <Mono>finalFocusRef</Mono> prop is set to <Mono>endRef</Mono>, so
          after the modal closes, the focus will move to the second button
          "Focus will move here when modal closes". This is important for
          accessibility and user experience, especially when there are multiple
          interactive elements on the page.
        </BasicText>
        <BasicText>
          The following example also shows how to use Chakra UI's{" "}
          <Mono>FormControl</Mono>, <Mono>FormLabel</Mono>, and{" "}
          <Mono>Input</Mono> components to create a form within a modal dialog.
          The form takes user input for a first and last name, making this a
          practical example for a user registration or profile creation
          scenario. As with all Chakra UI components, you can customize and
          extend these as needed. For example, we've changed the color scheme of
          the submit button to green and updated the dismiss button text.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ModalFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

export function ModalFour() {
  return (
    <SectionContainer>
      <SectionHeading>Configuring Transitions</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, Chakra UI provides a scaling transition for its modal
          component. However, you have the ability to change this transition to
          better suit your needs. This can be achieved by passing the
          <Mono>motionPreset</Mono> prop to your <Mono>Modal</Mono> component.
          This prop can take one of the following values:{" "}
          <Mono>slideInBottom</Mono>, <Mono>slideInRight</Mono>,{" "}
          <Mono>scale</Mono>, or <Mono>none</Mono> to disable any transition.
        </SectionDescription>
        <BasicText>
          In this example, the <Mono>JokesModal</Mono> function component
          displays a button. Clicking this button opens a modal containing a set
          of one-liner jokes. The modal utilizes the <Mono>slideInBottom</Mono>{" "}
          transition, providing a sliding animation from the bottom of the
          screen.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ModalFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

export function ModalFive() {
  return (
    <SectionContainer>
      <SectionHeading>Modal Sizing</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ When it is necessary to modify the size of the modal, you can pass
          the <Mono>size</Mono> property. This property can take the following
          values: 'xs', 'sm', 'md', 'lg', 'xl', or 'full', each representing a
          different modal size.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <ModalFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

export function ModalSix() {
  return (
    <SectionContainer>
      <SectionHeading>Customizing the Backdrop</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ By default, the backdrop's background color is set to
          <Mono>blackAlpha.600</Mono>. However, if you desire to achieve a
          different look, you can manipulate the appearance by utilizing
          backdrop style properties such as <Mono>backdropBlur</Mono>,{" "}
          <Mono>backdropBrightness</Mono>, <Mono>backdropContrast</Mono>, Mono,
          <Mono>backdropInvert</Mono>, and <Mono>backdropSaturate</Mono>. These
          properties allow you to modify different aspects of the backdrop
          style. To activate these properties, you need to set the
          <Mono>backdropFilter</Mono> property to 'auto'.
        </SectionDescription>
        <BasicText>
          Please take note that the backdrop-filter CSS property might not be
          supported across all browsers. Hence, in the following example,
          certain features might not be fully functional on some browsers.
        </BasicText>
        <BasicText>
          Also, since the <Mono>Modal</Mono> is rendered within a{" "}
          <Mono>Portal</Mono>, the filter property will not impact the
          background. This implies that you can only use this property to style
          components within the <Mono>Modal</Mono>.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ModalFunctionSix />
      </MyFlex>
    </SectionContainer>
  );
}

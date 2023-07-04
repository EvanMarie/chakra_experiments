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
  HighlightExample,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
import * as Form from "~/mardownExamples/form/index";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { ModalCode } from "~/styles/CodeDesignComponents";
import { Code, HStack, PinInput, PinInputField } from "@chakra-ui/react";
import {
  PinInputEight,
  PinInputFive,
  PinInputFour,
  PinInputNine,
  PinInputOne,
  PinInputSeven,
  PinInputSix,
  PinInputThree,
  PinInputTwo,
  pinInputStyles,
} from "~/components/form/pinInputComponents";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/components/pin-input" size={28}>
        Pin Input
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              ⦾ The <Mono>PinInput</Mono> component in Chakra UI is a
              specialized input component designed specifically for entering PIN
              codes or similar verification codes. It provides a convenient and
              user-friendly interface for inputting numerical codes. The
              <Mono>PinInputField</Mono> component is a subcomponent of{" "}
              <Mono>PinInput</Mono> that represents an individual input field
              within the <Mono>PinInput</Mono> component.
            </SectionDescription>
            <BasicText>
              The <Mono>PinInput</Mono> component is composed of multiple{" "}
              <Mono>PinInputField</Mono> components, each representing a single
              digit of the PIN code. It provides the following features:
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <BlueBold>Responsive Design</BlueBold>: The{" "}
                  <Mono>PinInput</Mono> component automatically adjusts its
                  layout based on the available space, making it suitable for
                  various screen sizes.
                </li>
                <li>
                  <BlueBold>Keyboard Navigation</BlueBold>: Users can navigate
                  through the input fields using the arrow keys or the{" "}
                  <Mono>Tab</Mono> key, enhancing the accessibility and
                  usability of the component.
                </li>
                <li>
                  <BlueBold>Custom Styling</BlueBold>: The <Mono>PinInput</Mono>{" "}
                  component allows for easy customization of its appearance,
                  enabling developers to match it with the overall design of
                  their application.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              <BasicText>
                The PinInput component consists of the following subcomponents:
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>PinInputField</HL>: Represents an individual input field
                    within the PinInput component. It renders as an{" "}
                    <Code>{`<input>`}</Code> element by default and provides
                    various props for customization.
                  </li>
                  <li>
                    <HL>PinInputAddon</HL>: Optional component that allows
                    developers to add additional content before or after the
                    input fields, such as icons or labels.
                  </li>
                </ul>
              </BulletBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>
                  These components can be imported as follows:
                </BasicText>
                <Highlighter>{`import { 
  PinInput, 
  PinInputField } from '@chakra-ui/react'`}</Highlighter>
              </ImportBox>
              <BasicText>
                The <Mono>PinInputField</Mono> component is responsible for
                rendering an individual input field within the{" "}
                <Mono>PinInput</Mono> component. It inherits all the props
                available to the <Mono>Input</Mono> component in Chakra UI and
                provides additio nal functionality specific to PIN code input.
              </BasicText>
              <BasicText>
                The <Mono>PinInputField</Mono> component accepts the following
                props in addition to the props inherited from the{" "}
                <Mono>Input</Mono> component:
              </BasicText>
              <BulletBox>
                <ul>
                  <li>
                    <HL>size</HL>: Determines the size of the input field,
                    supporting values such as "sm", "md", and "lg". This prop
                    can be used to adjust the input field's visual appearance
                    based on the application's design requirements.
                  </li>
                  <li>
                    <HL>isDisabled</HL>: Disables the input field, preventing
                    user interaction and indicating that the PIN input is not
                    available for editing.
                  </li>
                  <li>
                    <HL>isInvalid</HL>: Sets the input field to an invalid
                    state, indicating an error or validation issue with the
                    entered PIN code.
                  </li>
                </ul>
              </BulletBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <PinInputOne />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputTwo />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput type="alphanumeric">
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputThree />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput otp>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputFour />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput type="alphanumeric" mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputFive />
                <ModalCode>
                  <Form.E27 />
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputSix />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput defaultValue="1234">
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputSeven />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput placeholder="🕉">
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputEight />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput manageFocus={false}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <PinInputNine />
                <ModalCode>
                  <Highlighter>{`<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
`}</Highlighter>
                </ModalCode>
              </SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <HighlightText>
              <b>Multi-factor Authentication (MFA) Input</b>: PinInput can be
              used to create a seamless and secure multi-factor authentication
              (MFA) input experience. By dividing the authentication code into
              separate input fields, users can easily enter their unique code
              without the risk of mistyping or errors. You can enhance the MFA
              input by customizing the appearance and adding additional security
              features. In this example, the <b>otp</b> prop is used to indicate
              that the <b>PinInput</b> is being used for a one-time password
              (OTP) input. This sets the <b>autocomplete</b> attribute to
              "one-time-code" for all the <b>PinInputField</b> components,
              improving the user experience and ensuring compatibility with
              autofill features in modern browsers.
            </HighlightText>
            <HighlightExample h="80px">
              <MyFlex>
                <HStack>
                  <PinInput otp>
                    <PinInputField sx={pinInputStyles} />
                    <PinInputField sx={pinInputStyles} />
                    <PinInputField sx={pinInputStyles} />
                    <PinInputField sx={pinInputStyles} />
                  </PinInput>
                </HStack>
              </MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxOne>
          <GridBoxTwo>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxTwo>
          <GridBoxThree>
            <HighlightText>Highlight coming soon!</HighlightText>
            <HighlightExample h="80px">
              <MyFlex></MyFlex>
            </HighlightExample>
            <ModalCode>Highlight Example Code</ModalCode>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

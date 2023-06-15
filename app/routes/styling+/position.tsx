import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";

import { BasicText, HL, Mono, colors } from "~/styles/DesignComponents";

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
  SingleExample,
  MyFlex,
  SectionDescription,
} from "~/styles/MainDesignComponents";

import { Highlighter } from "~/components/styling/highlighter";
import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { Box } from "@chakra-ui/react";
import ToggleBox from "~/components/styling/absolutePositionExample";
import ToggleFixedBox from "~/components/styling/fixedPositionExample";
import RTLPositionExample from "~/components/styling/RTLPositionExample";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      {/* ********************************************************************* */}
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#position">
        Position
      </MyLabel>
      <MainGrid>
        <GridColumn>
          {/*  Section Introduction */}
          {/* COMPONENT DESCRIPTION */}
          <SectionContainer paddingBottom={2} mb={0}>
            <SectionDescription>
              In Chakra UI, you can control the positioning of a component with
              respect to its parent or other elements on the page using the
              position property.
            </SectionDescription>
            <BasicText>
              {" "}
              It accepts the same values as the CSS position property: "static",
              "relative", "absolute", "fixed", and "sticky".
            </BasicText>
            <BulletBox>
              <ul>
                <li>
                  <HL>Static Positioning</HL>: This is the default value.
                  Elements layout in their normal document flow.
                </li>
                <li>
                  <HL>Relative Positioning</HL>: An element with position
                  "relative" is positioned relative to its normal position.
                </li>
                <li>
                  <HL>Absolute Positioning</HL>: An element with position
                  "absolute" is positioned relative to the nearest positioned
                  ancestor (instead of positioned relative to the viewport).
                </li>
                <li>
                  <HL>Fixed Positioning</HL>: An element with position "fixed"
                  is positioned relative to the viewport, which means it always
                  stays in the same place even if the page is scrolled.
                </li>
                <li>
                  <HL>Sticky Positioning</HL>: An element with position "sticky"
                  is positioned based on the user's scroll position. It toggles
                  between relative and fixed, depending on the scroll position.
                  It's positioned relative until a given offset position is met
                  in the viewport, then it "sticks" in place.
                </li>
              </ul>
            </BulletBox>
            <DescriptionBox>
              {/* IMPORT CODE */}
              <ImportBox>
                <BasicText>To import this components used below:</BasicText>
                <Highlighter>{`import { Box, Flex } from "@chakra-ui/react";`}</Highlighter>
              </ImportBox>
            </DescriptionBox>
          </SectionContainer>
          {/* COMPONENT EXAMPLES */}
          <ExampleBox>
            <SectionContainer>
              <SingleExample>
                <MyFlex>
                  <Box
                    position="static"
                    bg={colors.mypurple}
                    color="white"
                    p={2}
                    textAlign="center"
                  >
                    I'm a statically positioned box
                  </Box>
                </MyFlex>
                <Highlighter>{`<Box position="static">`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MyFlex>
                  <Box
                    position="relative"
                    bg={colors.mypurple}
                    color="white"
                    p={2}
                    textAlign="center"
                  >
                    I'm a relatively positioned box
                  </Box>
                </MyFlex>
                <Highlighter>{`<Box position="relative">`}</Highlighter>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <MyFlex>
                  <ToggleBox />
                </MyFlex>
                <Highlighter>{`import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

function ToggleBox() {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div>
      <Button onClick={toggleBox} bg={"accent_2"} color="black">
        {showBox ? "Ciao, box!" : "Voilà, a box!"}
      </Button>

      {showBox && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
        >
          I'm an absolutely positioned box
        </Box>
      )}
    </div>
  );
}

export default ToggleBox;
`}</Highlighter>
                <BasicText>
                  In this example, we use React's <Mono>useState</Mono> hook to
                  create a<Mono>showBox</Mono> state variable and a{" "}
                  <Mono>setShowBox</Mono> function to update it. When the Button
                  is clicked, the <Mono>toggleBox</Mono> function is called,
                  which updates <Mono>showBox</Mono> to its opposite value
                  (i.e., if it was true, it becomes false, and vice versa).
                </BasicText>
                <BasicText>
                  The Box component is only rendered if <Mono>showBox</Mono> is
                  true, thanks to the{" "}
                </BasicText>
                <Highlighter>{`{showBox && <Box>}`}</Highlighter>{" "}
                <BasicText>
                  line. This line says "if showBox is true, then render the Box
                  component". When <Mono>showBox</Mono> is false, the{" "}
                  <Mono>Box</Mono> component is not rendered.
                </BasicText>
                <BasicText>
                  This effectively toggles the box's visibility each time the
                  button is clicked. Please note that this box is positioned
                  absolutely relative to the nearest positioned parent. If there
                  are no other elements with a position set, this will be
                  relative to the body.
                </BasicText>
                <BasicText>
                  The button's text is determined by the <Mono>showBox</Mono>
                  state. If <Mono>showBox</Mono> is true (meaning the box is
                  currently showing), the button text says "Ciao, Box!". If{" "}
                  <Mono>showBox</Mono> is false (meaning the box is not
                  currently showing), the button text says "Voilà, a box!". The
                  ternary operator (<Mono>? :</Mono>) is used here to set the
                  button's text based on the state of <Mono>showBox</Mono>
                </BasicText>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  Now, just as with the absolute positioning, example, we have a
                  similar scenario with <Mono>fixed</Mono> position. The main
                  difference here is that a fixed position box is positioned
                  relative to the viewport, so it will stay in place even when
                  you scroll the page.
                </BasicText>
                <MyFlex>
                  <ToggleFixedBox />
                </MyFlex>
                <Highlighter>{`import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

function ToggleFixedBox() {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div>
      <Button onClick={toggleBox} bg={"accent_2"} color="black">
        {showBox ? "Ciao, box!" : "Fixed position box, appear!"}
      </Button>

      {showBox && (
        <Box
          position="fixed"
          bottom="0"
          right="0"
        >
          I'm a fixed position box at the bottom right.
        </Box>
      )}
    </div>
  );
}

export default ToggleFixedBox;
`}</Highlighter>
                <BasicText>
                  In this example, we have a <Mono>Box</Mono> with{" "}
                  <Mono>position="fixed"</Mono>, and it's placed at the bottom
                  right of the screen using <Mono>bottom="0"</Mono> and
                  <Mono>right="0"</Mono>. No matter how you scroll the page,
                  this box will stay at the bottom right of the viewport as long
                  as <Mono>showBox</Mono> is true.
                </BasicText>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>
                <BasicText>
                  <HL>Sticky Positioning</HL>: An element with position "sticky"
                  is positioned based on the user's scroll position. It toggles
                  between relative and fixed, depending on the scroll position.
                  It's positioned relative until a given offset position is met
                  in the viewport, then it "sticks" in place.
                </BasicText>
                <BasicText>
                  The sticky position can be a bit tricky because it depends on
                  the scroll position of its nearest scrolling ancestor and its
                  top, bottom, left, or right properties. For an element to be
                  sticky, it must be inside a container that has a defined
                  height, and it must have a defined top or bottom value.
                </BasicText>
                <MyFlex></MyFlex>
              </SingleExample>
            </SectionContainer>

            <SectionContainer>
              <SingleExample>EXAMPLE</SingleExample>
            </SectionContainer>
          </ExampleBox>
        </GridColumn>

        <HighlightColumn>
          <GridBoxOne>
            <b>Centering an Element</b>: you can use absolute positioning to
            center an element both vertically and horizontally within its
            parent.
            <br />
            In this example, the child box is positioned absolutely and then
            moved to the center of its parent using the <b>top</b>, <b>left</b>,
            and <b>transform</b>
            properties.
            <MyFlex>
              <Box
                position="relative"
                h="175px"
                w="175px"
                bg={"accent_2"}
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  bg={colors.mypurple}
                  p={3}
                  borderRadius="sm"
                  color="white"
                >
                  I'm a box centered within my parent
                </Box>
              </Box>
            </MyFlex>
            <Highlighter>{`<Box
  position="relative"
  h="175px"
  w="175px"
  bg={"accent_2"}
>
  <Box
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)">`}</Highlighter>
          </GridBoxOne>
          <GridBoxTwo>
            <b>Stacking Elements</b>: you can use relative and absolute
            positioning to stack elements on top of each other. This can be
            useful for creating overlays or intricate designs. You can control
            the stacking order using the <b>zIndex</b> prop. <br /> In this
            example, two boxes are stacked on top of each other, with the first
            box appearing above the second due to its higher <b>zIndex</b>.
            <MyFlex>
              <Box
                position="absolute"
                zIndex="1"
                bg={"accent_3"}
                h="100px"
                w="100px"
                p={2}
                color="black"
              >
                I'm on top
              </Box>
              <Box
                position="relative"
                zIndex="0"
                bg={"darkAccent_2"}
                h="175px"
                w="175px"
                p={2}
                color="white"
              >
                I am underneath
              </Box>
            </MyFlex>
            <Highlighter>{`<Box
  position="absolute"
  zIndex="1"
>
  I'm on top
</Box>
<Box
  position="relative"
  zIndex="0"
>
  I am underneath
</Box>`}</Highlighter>
          </GridBoxTwo>
          <GridBoxThree>
            In Chakra UI, for RTL (right to left) support, you can use the start
            and end values. These values automatically adjust based on the text
            direction. The start will represent left in a left-to-right language
            (like English), and right in a right-to-left language (like Arabic).
            Similarly, end will represent right in a left-to-right language and
            left in a right-to-left language.
            <br />
            In the following example, if the direction is set to "rtl", the box
            will appear on the right side of the screen because start represents
            right in RTL languages. If you change the direction to "ltr", the
            box will appear on the left side of the screen because start
            represents left in LTR languages. The box's position automatically
            adjusts based on the text direction. Please note that this is a very
            simple example, and in a real-world application, you would probably
            handle changing the text direction in a more dynamic way, perhaps
            based on user preferences or the language setting of their browser
            or operating system.
            <MyFlex>
              <RTLPositionExample />
            </MyFlex>
            <Highlighter>{`import { Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

function ToggleBox() {
  const [showBox, setShowBox] = useState(false);
  const [isRTL, setIsRTL] = useState(false); // start as LTR

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const toggleRTL = () => {
    setIsRTL(!isRTL); // toggle between RTL and LTR
  };

  return (
    <VStack>
      <Button colorScheme="purple" onClick={toggleBox}>
        {showBox ? "Hide Box" : "Show Box"}
      </Button>

      <Button colorScheme="teal" onClick={toggleRTL} m={1}>
        {isRTL ? "Change to LTR" : "Change to RTL"}
      </Button>

      {showBox && (
        <Box
          position="absolute"
          p={2}
          marginX={2}
          marginY={-10}
          bg="pink.300"
          color="black"
          {...(isRTL ? { right: "0" } : { left: "0 " })}
        >
          I'm a box positioned based on text direction.
        </Box>
      )}
    </VStack>
  );
}

export default ToggleBox;

`}</Highlighter>
          </GridBoxThree>
        </HighlightColumn>
      </MainGrid>

      {/* ********************************************************************* */}
    </BigBackgroundBox>
  );
}

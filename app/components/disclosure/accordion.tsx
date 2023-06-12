import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import {
  BasicText,
  ExampleContainer,
  Mono,
  SectionDescription,
  SectionHeading,
  colors,
} from "~/styles/reusableChakraComponents";

export function AccordionOne() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Default Settings</SectionHeading>
      <SectionDescription>
        ⦾ By default, only one item may be expanded and it can only be collapsed
        again by expanding another. Pressing the up and down arrow keys will
        move focus between accordion buttons.
      </SectionDescription>

      <ExampleContainer bg={colors.mainBackground}>
        <Box marginY={1}>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </ExampleContainer>
    </Box>
  );
}

export function AccordionTwo() {
  return (
    <Box marginTop="5px">
      <SectionHeading>AllowMultiple</SectionHeading>
      <SectionDescription>
        ⦾ If you set <Mono>allowMultiple</Mono> to true then the accordion will
        permit multiple items to be expanded at once.
      </SectionDescription>

      <ExampleContainer bg={colors.mainBackground}>
        <Box marginY={1}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </ExampleContainer>
    </Box>
  );
}

export function AccordionThree() {
  return (
    <Box marginTop="5px">
      <SectionHeading>AllowToggle</SectionHeading>

      <SectionDescription>
        ⦾ If you set <Mono>allowToggle</Mono> to true, any expanded item may be
        collapsed again.
      </SectionDescription>
      <ExampleContainer bg={colors.mainBackground}>
        <Box marginY={1}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </ExampleContainer>
    </Box>
  );
}

export function AccordionFour() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Expanded State</SectionHeading>
      <SectionDescription>
        ⦾ The <Mono>AccordionButton</Mono> component has aria-expanded set to
        true or false depending on the state of the <Mono>AccordionItem</Mono>.
        Use the style prop <Mono>_expanded</Mono> to style this state.
      </SectionDescription>
      <ExampleContainer bg={colors.mainBackground}>
        <Box marginY={1}>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: `${colors.mainAccent4}`, color: "white" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Click me to see a different style
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </ExampleContainer>
    </Box>
  );
}

export function AccordionFive() {
  return (
    <Box marginTop="5px">
      <SectionHeading>Internal State</SectionHeading>
      <SectionDescription>
        ⦾ If you need access to the internal state of each accordion item, you
        can use a render prop. It provides 2 internal state props:{" "}
        <Mono>isExpanded</Mono> and <Mono>isDisabled</Mono>.
      </SectionDescription>
      <ExampleContainer bg={colors.mainBackground}>
        <Box marginY={1}>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </ExampleContainer>
    </Box>
  );
}

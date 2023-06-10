import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  TabIndicator,
} from "@chakra-ui/react";
import { BasicText, Mono, colors } from "~/styles/reusableChakraComponents";
import { OnChangeTabs } from "./tabsOnChange";
import {
  BsEmojiSunglasses,
  BsEmojiWink,
  BsEmojiFrown,
  BsEmojiDizzy,
  BsEmojiKiss,
} from "react-icons/bs";
import { ControlledTabs } from "./controlledTabs";
import CustomTabs from "./customTabs";
import DataArrayTabs from "./dataTabs";

export function TabsOne() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Default Settings
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ By default, only one item may be expanded and it can only be collapsed
        again by expanding another. Pressing the up and down arrow keys will
        move focus between accordion buttons.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsTwo() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Variants and Colors: Example One
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Tabs come in 6 different variants to style the tabs: <Mono>line</Mono>
        , <Mono>enclosed</Mono>, <Mono>enclosed-colored</Mono>,{" "}
        <Mono>soft-rounded</Mono>, <Mono>solid-rounded</Mono>, and{" "}
        <Mono>unstyled</Mono>
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsThree() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Variants and Colors: Example Two
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ You can also change the color scheme for any specific variant by
        passing the <Mono>colorScheme</Mono>. The value of{" "}
        <Mono>colorScheme</Mono> must exist in the theme object, and must be a
        key in <Mono>theme.colors</Mono> that has the <Mono>50 - 900</Mono>{" "}
        color values.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsFour() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Tab Sizing
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ You can change the size of the tab by passing size prop. Chakra
        supports 3 sizes <Mono>sm</Mono>, <Mono>md</Mono>, <Mono>lg</Mono>. The
        following uses size small with the <Mono>soft-rounded</Mono> variant and
        a red
        <Mono>colorScheme</Mono>.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs size="sm" variant="soft-rounded" colorScheme="red">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsFive() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Changing Alignment
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ You can change the alignment of the TabList by passing align prop.
        Charka supports 3 variations <Mono>start</Mono>, <Mono>center</Mono>,
        and <Mono>end</Mono>. The following uses a center alignment.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs align="center" variant="enclosed">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsSix() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Fitted Tabs
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Stretch the tab list to fit the container by passing{" "}
        <Mono>isFitted</Mono> prop.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
              <Tab>Four</Tab>
              <Tab>Five</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
              <TabPanel>
                <p>five!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsSeven() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        TabIndicator: Styling the tab states via props
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ To customize the active tab indicator, set the variant to
        <Mono>unstyled</Mono> and set styles on <Mono>TabIndicator</Mono>.
      </BasicText>
      <BasicText>
        In Chakra UI's Tabs component, the <Mono>TabIndicator</Mono> represents
        a visual indicator that highlights the currently active tab. It is a
        visual element that helps users identify the active tab and provides
        visual feedback as they navigate through different tab options.
      </BasicText>
      <BasicText>
        The <Mono>TabIndicator</Mono> is typically a horizontal line or a bar
        that appears below or above the active tab, indicating its selected
        state. It visually separates the active tab from the rest of the tabs
        and provides a clear visual cue of the user's current selection.{" "}
      </BasicText>
      <BasicText>
        Chakra UI's Tabs component automatically manages the positioning and
        appearance of the <Mono>TabIndicator</Mono> based on the selected tab.
        It updates its position and size when the active tab changes, providing
        a smooth transition between tabs. You can customize the appearance of
        the
        <Mono>TabIndicator</Mono> by modifying the styles associated with the
        active tab. Chakra UI provides a range of styling options to customize
        the <Mono>TabIndicator</Mono>'s color, size, position, and animation
        using its theme and style props.
      </BasicText>
      <BasicText>
        The <b>TabIndicator</b> in Chakra UI's Tabs component serves as a visual
        guide to help users navigate and understand the current state of the
        tabbed interface.
      </BasicText>
      <Mono>
        <b>TabIndicator</b>: mt="-2.5px" height="3px" bg="pink.500"
        borderRadius="2px"
      </Mono>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="pink.500"
              borderRadius="2px"
            />
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsEight() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Customizing individual tabs
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ In the event that you need to create custom styles for individual
        tabs, use the <Mono>_selected</Mono>, <Mono>_hover</Mono>, and{" "}
        <Mono>_active</Mono> style props.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs variant="unstyled">
            <TabList>
              <Tab
                _selected={{
                  color: "white",
                  bg: "pink.500",
                  borderRadius: "15px 0px 0 0",
                }}
              >
                Tab 1
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "purple.400",
                  borderRadius: "15px 0px 0 0",
                }}
              >
                Tab 2
              </Tab>
              <Tab
                _selected={{
                  color: "black",
                  bg: "yellow.400",
                  borderRadius: "15px 0px 0 0",
                }}
              >
                Tab 3
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "green.200",
                  borderRadius: "15px 0px 0 0",
                }}
              >
                Tab 4
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsNine() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        The onChange Property
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ The <Mono>onChange</Mono> callback returns the active tab's index
        whenever the user changes tabs. If you intend to control the tabs
        programmatically, use this with the <Mono>index</Mono> prop.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <OnChangeTabs />
        </Box>
      </Box>
    </Box>
  );
}

export function TabsTen() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Focus a specific tab by default:
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ By default, only one item may be expanded and it can only be collapsed
        again by expanding another. Pressing the up and down arrow keys will
        move focus between accordion buttons. Here, the{" "}
        <Mono>defaultIndex</Mono> on <Mono>Tabs</Mono> is set to 3.
      </BasicText>
      <Box p={5}>
        <Box marginY={1}>
          <Tabs isFitted defaultIndex={3}>
            <TabPanels>
              <TabPanel>
                <BsEmojiSunglasses size={100} color="deeppink" />
              </TabPanel>
              <TabPanel>
                <BsEmojiWink size={100} color="lime" />
              </TabPanel>
              <TabPanel>
                <BsEmojiFrown size={100} color="yellow" />
              </TabPanel>
              <TabPanel>
                <BsEmojiKiss size={100} color="cyan" />
              </TabPanel>
              <TabPanel>
                <BsEmojiDizzy size={100} color="orange" />
              </TabPanel>
            </TabPanels>
            <TabList>
              <Tab color="deeppink" fontWeight="bold">
                Coolio Face
              </Tab>
              <Tab color="lime" fontWeight="bold">
                Winky Face
              </Tab>
              <Tab color="yellow" fontWeight="bold">
                Frowny Face
              </Tab>
              <Tab color="cyan" fontWeight="bold">
                Kissy Face
              </Tab>
              <Tab color="orange" fontWeight="bold">
                Dizzy Face
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsEleven() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Disable a Tab
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ When a Tab is disabled, it is skipped during keyboard navigation and
        it is not clickable. Here, the <Mono>isDisabled</Mono> property is used
        on the second tab.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs>
            <TabList>
              <Tab>One</Tab>
              <Tab isDisabled>Two</Tab>
              <Tab>Three</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>1</TabPanel>
              <TabPanel>2</TabPanel>
              <TabPanel>3</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsTwelve() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Manually activate tabs
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ By default, Tabs are activated automatically. This means when you use
        the arrow keys to change tabs, the tab is activated and focused. The
        content of a <Mono>TabPanel</Mono> should ideally be preloaded. However,
        if switching to a tab panel causes a network request and possibly a page
        refresh, there might be some noticeable latency and this might affect
        the experience for keyboard and screen reader users. In this scenario,
        you should use a manually activated tab, it moves focus without
        activating the tabs. With focus on a specific tab, users can activate a
        tab by pressing Space or Enter.
      </BasicText>
      <Mono>Tabs: isManual variant="enclosed"</Mono>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs isManual variant="enclosed">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsThirteen() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Lazy Tab Mounting
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ By default, the Tabs component renders all tabs content to the DOM,
        meaning that invisible tabs are still rendered but are hidden by styles.
        If you want to defer rendering of each tab until that tab is selected,
        you can use the isLazy prop. This is useful if your tabs require heavy
        performance, or make network calls on mount that should only happen when
        the component is displayed.
      </BasicText>

      <Mono>Tabs: isLazy</Mono>

      <Box p={5}>
        <Box marginY={1}>
          <Tabs isLazy>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              {/* initially mounted */}
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              {/* initially not mounted */}
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export function TabsFourteen() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Controlled Tabs
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Like form inputs, a tab's state can be controlled. Make sure to
        include an onChange as well, or else the tabs will not be interactive.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <ControlledTabs />
        </Box>
      </Box>
    </Box>
  );
}

export function TabsFifteen() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        Custom Tab Components
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ Because <Mono>TabList</Mono> needs to know the order of the children,
        we use cloneElement to pass state internally. Your custom Tab component
        must use <Mono>React.forwardRef</Mono>.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <CustomTabs />
        </Box>
      </Box>
    </Box>
  );
}

export function TabsSixteen() {
  return (
    <Box marginTop="20px">
      <BasicText color={colors.mainAccent2} size={18} fontWeight="bold">
        DataTabs
      </BasicText>
      <BasicText color={colors.mainAccent3}>
        ⦾ If you'd like to drive your tabs with an array instead of using the
        granular components, you can create your own <Mono>DataTabs</Mono>{" "}
        component.
      </BasicText>

      <Box p={5}>
        <Box marginY={1}>
          <DataArrayTabs />
        </Box>
      </Box>
    </Box>
  );
}

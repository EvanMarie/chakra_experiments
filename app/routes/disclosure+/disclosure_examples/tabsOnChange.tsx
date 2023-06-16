import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BasicText, Mono, colors } from "~/styles/DesignComponents";

export function OnChangeTabs() {
  const tabsColors = useColorModeValue(
    [
      "accent_1",
      "accent_2",
      "accent_3",
      "mainText",
    ],
    ["white", "white", "white", "white"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = tabsColors[tabIndex];
  return (
    <>
      <Tabs
        isFitted
        color="black"
        fontWeight={700}
        borderRadius="15px 15px 0 0"
        onChange={(index) => setTabIndex(index)}
        bg={bg}
      >
        <TabList>
          <Tab fontWeight={700}>Pink</Tab>
          <Tab fontWeight={700}>Blue</Tab>
          <Tab fontWeight={700}>Green</Tab>
          <Tab fontWeight={700}>Beige</Tab>
        </TabList>
        <TabPanels p="2rem">
          <TabPanel color="black">I am a pink TabPanel.</TabPanel>
          <TabPanel color="black">I am a blue TabPanel.</TabPanel>
          <TabPanel color="black">I am a green TabPanel.</TabPanel>
          <TabPanel>I am a beige TabPanel.</TabPanel>
        </TabPanels>
      </Tabs>
      <br />
    </>
  );
}

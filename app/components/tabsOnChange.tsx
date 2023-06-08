import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BasicText, colors } from "~/styles/reusableChakraComponents";

export function OnChangeTabs() {
  const tabsColors = useColorModeValue(
    [
      colors.mainAccent,
      colors.mainAccent2,
      colors.mainAccent3,
      colors.mainText,
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
      <BasicText>
        Below is the code for my above variation on the Chakra UI example for
        this <b>onChange</b> functionality.
      </BasicText>
      <center>
        <img src="onchangetabs.png" alt="OnChange Tabs" width="500px" />
      </center>
    </>
  );
}

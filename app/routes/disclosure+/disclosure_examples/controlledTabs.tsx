import { useState } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export function ControlledTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Box>
      <input
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSliderChange}
      />

      <Tabs
        isFitted
        index={tabIndex}
        onChange={handleTabsChange}
        colorScheme="cyan"
      >
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Slide or click tabs</p>
          </TabPanel>
          <TabPanel>
            <p>Just tabbing along...</p>
          </TabPanel>
          <TabPanel>
            <p>I am some rad tab content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

interface TabData {
  label: string;
  content: string;
}

function DataArrayTabs() {
  function DataTabs({ data }: { data: TabData[] }): JSX.Element {
    return (
      <Tabs>
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  const tabData: TabData[] = [
    {
      label: "Nigerian Jollof",
      content: "Perhaps the greatest dish ever invented.",
    },
    {
      label: "Pounded Yam & Egusi",
      content:
        "Perhaps the surest dish ever invented but fills the stomach more than rice.",
    },
  ];

  return <DataTabs data={tabData} />;
}

export default DataArrayTabs;

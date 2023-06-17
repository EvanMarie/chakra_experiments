import {
  Box,
  Button,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";
import React, { forwardRef, Ref } from "react";

interface CustomTabProps {
  children: React.ReactNode;
  // Add any other props you expect to receive
}

// export const CustomTab = forwardRef<HTMLButtonElement, CustomTabProps>(
//   (props, ref) => {
//     const tabProps = useTab({ ...props, ref: ref as Ref<HTMLElement> });
//     const isSelected = !!tabProps["aria-selected"];
//     const styles = useMultiStyleConfig("Tabs", tabProps);

//     return (
//       <Button __css={styles.tab} {...tabProps}>
//         <Box as="span" mr="2">
//           {isSelected ? "😎" : "😐"}
//         </Box>
//         {tabProps.children}
//       </Button>
//     );
//   }
// );

// CustomTab.displayName = "CustomTab";

// export function CustomTabs() {
//   return (
//     <Tabs>
//       <TabList>
//         <CustomTab>One</CustomTab>
//         <CustomTab>Two</CustomTab>
//       </TabList>
//       <TabPanels>
//         <TabPanel>1</TabPanel>
//         <TabPanel>2</TabPanel>
//       </TabPanels>
//     </Tabs>
//   );
// }

// export default CustomTabs;

export function CustomTabs() {
  const CustomTab = React.forwardRef<HTMLButtonElement, CustomTabProps>(
    (props, ref) => {
      // 1. Reuse the `useTab` hook
      const tabProps = useTab({ ...props, ref });
      const isSelected = !!tabProps["aria-selected"];

      // 2. Hook into the Tabs `size`, `variant`, props
      const styles = useMultiStyleConfig("Tabs", tabProps);

      return (
        <Button __css={styles.tab} {...tabProps}>
          <Box as="span" mr="2">
            {isSelected ? "😎" : "😐"}
          </Box>
          {tabProps.children}
        </Button>
      );
    }
  );

  return (
    <Tabs>
      <TabList>
        <CustomTab>One</CustomTab>
        <CustomTab>Two</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

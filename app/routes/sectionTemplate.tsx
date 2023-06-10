import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  ComponentHeadingsBar,
  FeedbackComponentBar,
  PageHeader,
} from "~/components/menuBars";
import {
  BigBackgroundBox,
  MyLabel,
  SectionContainer,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      <VStack>
        <ComponentHeadingsBar />
        <PageHeader title="Chakra Section Components" href="/chakra_section" />

        <FeedbackComponentBar />
      </VStack>

      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <Box>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <Box>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <Box>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <Box>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      <Box>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
    </BigBackgroundBox>
  );
}

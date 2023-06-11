import { Box, HStack, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import {
  ComponentHeadingsBar,
  FeedbackComponentBar,
  PageHeader,
} from "~/components/app_components/menuBars";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyLabel,
  SectionContainer,
  colors,
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

      <SectionContainer>
        <BasicText color={colors.mainAccent3}>Text Intro</BasicText>
        <FlexibleBox bg={colors.myblue} p={4}>
          <Box>
            <BasicText>Text</BasicText>
          </Box>
          <Box p={4}>
            <BasicText>Text</BasicText>
          </Box>
        </FlexibleBox>
      </SectionContainer>

      <div id="component_id" />
      <MyLabel link="https://chakra-ui.com/docs/components/component" size={28}>
        ComponentName:
      </MyLabel>
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>Text</BasicText>
          <Box paddingX={10}>
            <BasicText>Text</BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>Text</BasicText>
            {/* IMPORT CODE */}
            <SectionContainer p={2} mt={5} mb={2}>
              <BasicText>
                These components can be imported as follows:
              </BasicText>
              IMPORT CODE
            </SectionContainer>
          </FlexibleBox>
        </SectionContainer>
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
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>Text</BasicText>
          <Box paddingX={10}>
            <BasicText>Text</BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>Text</BasicText>
          </FlexibleBox>
        </SectionContainer>
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
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>Text</BasicText>
          <Box paddingX={10}>
            <BasicText>Text</BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>Text</BasicText>
          </FlexibleBox>
        </SectionContainer>
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
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>Text</BasicText>
          <Box paddingX={10}>
            <BasicText>Text</BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>Text</BasicText>
          </FlexibleBox>
        </SectionContainer>
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
      {/*  Section Introduction */}
      <Box>
        <SectionContainer bg={colors.mainAccent4}>
          <BasicText>Text</BasicText>
          <Box paddingX={10}>
            <BasicText>Text</BasicText>
          </Box>
          <FlexibleBox p={3} m={3} bg={colors.myblue}>
            <BasicText>Text</BasicText>
          </FlexibleBox>
        </SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE ONE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE TWO</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE THREE</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FOUR</SectionContainer>
        <SectionContainer>COMPONENT EXAMPLE FIVE</SectionContainer>
      </Box>
    </BigBackgroundBox>
  );
}

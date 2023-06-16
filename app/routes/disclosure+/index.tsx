import { Box, VStack } from "@chakra-ui/react";
import { BasicText, FlexibleBox, HL } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props">
        Chakra-UI Components:
      </MyLabel>
      <SectionContainer>
        <SectionDescription>Text</SectionDescription>
        <FlexibleBox bg={"darkAccent_3"} p={4}>
          <Box>
            <BasicText>Introduce Bullets</BasicText>
          </Box>
          <Box p={4}>
            <VStack spacing={1.5}>
              <BasicText>
                ⦾ <HL>Topic</HL>: Info
              </BasicText>
              <BasicText>
                ⦾ <HL>Topic</HL>: Info
              </BasicText>
              <BasicText>
                ⦾ <HL>Topic</HL>: Info
              </BasicText>
              <BasicText>
                ⦾ <HL>Topic</HL>: Info
              </BasicText>
              <BasicText>
                ⦾ <HL>Topic</HL>: Info
              </BasicText>
              <BasicText>
                ⦾ <HL>Topic</HL>: Info
              </BasicText>
            </VStack>
          </Box>
          <Box>
            <BasicText>Text</BasicText>
          </Box>
        </FlexibleBox>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

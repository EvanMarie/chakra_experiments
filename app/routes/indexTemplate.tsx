import { Box } from "@chakra-ui/react";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  HL,
  MyLabel,
  SectionContainer,
  colors,
} from "~/styles/reusableChakraComponents";

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props">
        Section Name:
      </MyLabel>
      <SectionContainer>
        <BasicText color={colors.mainAccent3}>
          Introduction to section
        </BasicText>
        <FlexibleBox bg={colors.myblue} p={4}>
          <Box>
            <BasicText>Small Heading</BasicText>
          </Box>
          <Box p={4}>
            <BasicText>
              <HL>Item</HL>: Description
            </BasicText>
            <BasicText>
              <HL>Item</HL>: Description
            </BasicText>
            <BasicText>
              <HL>Item</HL>: Description
            </BasicText>
            <BasicText>
              <HL>Item</HL>: Description
            </BasicText>
            <BasicText>
              <HL>Item</HL>: Description
            </BasicText>
          </Box>
          <Box>
            <BasicText>More Description</BasicText>
          </Box>
        </FlexibleBox>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

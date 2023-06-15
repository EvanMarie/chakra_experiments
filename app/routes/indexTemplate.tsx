import { Box } from "@chakra-ui/react";
import { BasicText, FlexibleBox, HL, colors } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  MyLabel,
  SectionContainer,
} from "~/styles/MainDesignComponents";

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props">
        Section Name:
      </MyLabel>
      <SectionContainer>
        <BasicText color={"accent_3"}>
          Introduction to section
        </BasicText>
        <FlexibleBox bg={"darkAccent_3"} p={4}>
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

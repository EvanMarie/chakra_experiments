import { Box, Link, VStack } from "@chakra-ui/react";
import { BsTextareaResize } from "react-icons/bs";
import { BasicText, FlexibleBox, HL, Mono } from "~/styles/DesignComponents";
import {
  BigBackgroundBox,
  BulletBox,
  MyFlex,
  MyLabel,
  SectionContainer,
  SectionDescription,
} from "~/styles/MainDesignComponents";

export default function chakra_feedback() {
  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components">
        Chakra UI: ___ Components
      </MyLabel>
      <SectionContainer paddingX={8}>
        <VStack w="100%" spacing={2}>
          <SectionDescription>DESCRIPTION</SectionDescription>

          <BasicText>DISCUSS</BasicText>
          <BasicText>DISCUSS</BasicText>

          <BasicText>DISCUSS</BasicText>
        </VStack>
        <MyFlex bg={"darkAccent_3"} p={5} pt={3} mt={5}>
          <BasicText>DESCRIBE BULLETS</BasicText>

          <BulletBox>
            <ul>
              <li>
                <BasicText>
                  <Link href="/category/component">
                    <HL>🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/category/component">
                    <HL>🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/category/component">
                    <HL>🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/category/component">
                    <HL>🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/category/component">
                    <HL>🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/category/component">
                    <HL>🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
              <li>
                <BasicText>
                  <Link href="/category/component">
                    <HL>🔗</HL>
                  </Link>
                  : Point
                </BasicText>
              </li>
            </ul>
          </BulletBox>

          <Box>
            <BasicText>
              Use the navigation menu to learn more about each component
              individually.
            </BasicText>
          </Box>
        </MyFlex>
      </SectionContainer>
    </BigBackgroundBox>
  );
}

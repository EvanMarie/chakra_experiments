import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import { StyleButtonBar } from "~/components/ButtonBar";
import Filters from "~/components/image_filters";
import BackdropFilters from "~/components/image_filters2";
import stylesUrl from "~/styles/global.css";
import {
  BasicText,
  BigBackgroundBox,
  FlexibleBox,
  MyHeading,
  MyLabel,
  colors,
  Mono,
} from "~/styles/reusableChakraComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function chakra_basic_styling() {
  return (
    <BigBackgroundBox>
      <StyleButtonBar />
      <MyHeading>Chakra Image Filters and Misc Props:</MyHeading>
      <BasicText>Image Filtering, Pseudo Props, Misc. Props.</BasicText>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#filter">
        Filter:
      </MyLabel>
      <BasicText>
        Note: To apply blur, brightness, contrast, hueRotate, invert, saturate
        props on the element, set filter prop value to "auto".
      </BasicText>
      <Box>
        <Filters />
      </Box>
      <Box marginY={3}>
        <BasicText size={20} color={colors.mainAccent2}>
          Backdrop Filters
        </BasicText>
        <BackdropFilters />
      </Box>
      <BasicText>
        🚨 backdrop-filter is not supported in Firefox. It can be enabled by the
        user, but it is suggested to design a component that looks good with and
        without this property.
      </BasicText>
      <BasicText>
        Note: To apply backdropBlur, backdropBrightness, backdropContrast,
        backdropHueRotate, backdropInvert, backdropSaturate props on the
        element, set backdropFilter prop value to "auto".
      </BasicText>

      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#psuedo">
        Pseudo:
      </MyLabel>
      <Box>
        <VStack w="100%">
          <Mono>
            colorScheme="teal" _hover= background: "white", color: "teal.500"
          </Mono>

          <Button
            colorScheme="teal"
            _hover={{
              background: "white",
              color: "teal.500",
            }}
          >
            Hover me
          </Button>
        </VStack>
        <br />
        <VStack w="100%" mt={5}>
          <BasicText>A Chakra Box with:</BasicText>
          <Mono>
            _hover= fontWeight: "semibold" _groupHover= color: "purple"
          </Mono>
          <Box role="group">
            <FlexibleBox w="100px">
              <Box
                _hover={{ fontWeight: "semibold" }}
                _groupHover={{ color: "purple" }}
              >
                Text
              </Box>
            </FlexibleBox>
          </Box>
        </VStack>
        <VStack w="100%" mt={5}>
          <BasicText>A Chakra Box with:</BasicText>
          <Mono>
            _before = content: '"🙂"', display: "inline-block", mr: "5px"{" "}
          </Mono>
          <Box
            _before={{ content: '"🙂"', display: "inline-block", mr: "5px" }}
          >
            A pseudo element
          </Box>
        </VStack>
      </Box>
      <MyLabel link="https://chakra-ui.com/docs/styled-system/style-props#the-as-prop">
        The as Prop:
      </MyLabel>
      <VStack w="100%" mt={5}>
        <Mono>
          Button as="a" target="_blank" variant="outline"
          href="https://chakra-ui.com" color="pink"
        </Mono>
        <Box>
          <Button
            as="a"
            target="_blank"
            variant="outline"
            href="https://chakra-ui.com"
            color="pink"
          >
            Hello
          </Button>
        </Box>
      </VStack>

      <StyleButtonBar />
    </BigBackgroundBox>
  );
}

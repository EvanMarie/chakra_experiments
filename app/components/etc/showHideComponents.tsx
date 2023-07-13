import { Box, Code } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import { ShowHideFunctionOne, ShowHideFunctionTwo } from "./showHideFunctions";

/* ********************************************************************** */

export function ShowHideOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Show and Hide</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, using the <Mono>Show</Mono> component, the first{" "}
          <Code>{`<Box>`}</Code> component will only be rendered if the screen
          width is <Mono>400px</Mono> or smaller.
        </SectionDescription>
        <BasicText>
          Similarly, using the <Mono>Hide</Mono> component, the second{" "}
          <Code>{`<Box>`}</Code> component will be hidden when the screen width
          is <Mono>400px</Mono> or smaller.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ShowHideFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ShowHideTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Above and Below</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Show</Mono> and <Mono>Hide</Mono> components also accept
          the <Mono>above</Mono> and <Mono>below</Mono> props, which correspond
          to the Chakra theme's <Mono>breakpoint</Mono> keys. The{" "}
          <Mono>above</Mono> prop behaves similarly to the CSS{" "}
          <Mono>min-width</Mono> property. It will render the child elements
          when the screen width is equal to or greater than the specified
          breakpoint.
        </SectionDescription>
        <BasicText>
          In this example, the first <Code>{`<Box>`}</Code> component will be
          visible when the screen width is equal to or greater than the "
          <Mono>sm</Mono>" breakpoint defined in the Chakra theme. The second{" "}
          <Code>{`<Box>`}</Code> component will be hidden when the screen width
          is equal to or smaller than the "<Mono>md</Mono>" breakpoint.
        </BasicText>
        <BasicText>
          The
          <Mono>below</Mono> prop behaves similarly to the CSS{" "}
          <Mono>max-width</Mono> property. It will hide the child elements when
          the screen width is equal to or smaller than the specified breakpoint.
        </BasicText>
      </Box>

      <MyFlex bg="background">
        <ShowHideFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

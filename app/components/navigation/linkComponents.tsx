import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { BasicText, Mono } from "~/styles/DesignComponents";
import { Link as ReactLink } from "react-router-dom";
import {
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";

/* ********************************************************************** */

export function LinkOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ To create a link with the <Mono>Link</Mono> component, you simply
          use the component with the desired link text as children and pass the
          URL as the <Mono>href</Mono> prop. The following will render a basic
          link that points to the OpenAI website.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Link href="http://www.openai.com" isExternal>
          OpenAI
        </Link>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function LinkTwo() {
  return (
    <SectionContainer>
      <SectionHeading>External Links</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI also allows for external links. For instance, if you want
          to link to an external website, you can use the href prop to specify
          the URL and the isExternal prop to open the link in a new tab. In this
          example, the ExternalLinkIcon indicates that the link will open in a
          new tab.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Link href="https://www.openai.com" isExternal>
          OpenAI website <ExternalLinkIcon mx="2px" />
        </Link>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function LinkThree() {
  return (
    <SectionContainer>
      <SectionHeading>Link Inline with Text</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Chakra UI also allows for links to be inserted inline within a text
          body. For example, if you want to highlight a certain part of your
          text as a link, you can simply nest the Link component within the Text
          component.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <Text>
          Have you tried the{" "}
          <Link color="blue.500" href="https://www.openai.com" isExternal>
            OpenAI platform
          </Link>{" "}
          yet?
        </Text>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function LinkFour() {
  return (
    <SectionContainer>
      <SectionHeading>Usage with Routing Libraries</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The <Mono>Link</Mono> component can also be integrated with routing
          libraries like Reach Router or React Router. All you need to do is
          pass the as prop to change the underlying HTML element. The following
          link will take you to the main page of this site, for example.
        </SectionDescription>
        <BasicText></BasicText>
        <BasicText></BasicText>
      </Box>

      <MyFlex bg="background">
        <Link as={ReactLink} to="/">
          Main Page
        </Link>
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function LinkFive() {
  return (
    <SectionContainer>
      <SectionHeading>Usage with Next.js</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The Chakra UI Docs go into detail on how to use the{" "}
          <Mono>Link</Mono> component within the context of Next.js. You can
          read more about that{" "}
          <Link
            href="https://chakra-ui.com/docs/components/link/usage"
            isExternal
          >
            here
          </Link>
          .
        </SectionDescription>
      </Box>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function LinkHighlightOne() {
  return (
    <VStack textAlign="center" spacing={0} mb={0} pb={0}>
      <Text mb={0} pb={0}>
        Check out our
      </Text>
      <Link
        mt={0}
        pt={0}
        href="#"
        textDecoration="none"
        position="relative"
        _after={{
          content: '""',
          width: "0%",
          position: "absolute",
          bottom: "0",
          left: "0",
          height: "2px",
          backgroundColor: "blue.500",
          transition: "width 0.3s ease-in-out",
        }}
        _hover={{
          _after: {
            width: "100%",
          },
        }}
      >
        Terms and Conditions
      </Link>
    </VStack>
  );
}

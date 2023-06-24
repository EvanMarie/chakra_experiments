import { Box } from "@chakra-ui/react";
import { BasicText, HL, Mono } from "~/styles/DesignComponents";
import {
  BulletBox,
  MyFlex,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "~/styles/MainDesignComponents";
import {
  ImageFunctionFive,
  ImageFunctionFour,
  ImageFunctionOne,
  ImageFunctionThree,
  ImageFunctionTwo,
} from "./imageFunctions";

/* ********************************************************************** */

export function ImageOne() {
  return (
    <SectionContainer>
      <SectionHeading>Basic Usage</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Using the <Mono>Image</Mono> component in Chakra UI is quite
          straightforward. It can be imported from <Mono>@chakra-ui/react</Mono>{" "}
          and then used as a typical React component. The source of the image
          can be provided using the <Mono>src</Mono> prop. For the fallback UI,{" "}
          <Mono>fallbackSrc</Mono> prop can be used. In the following example,
          the <Mono>alt</Mono> prop is also used to provide alternate text for
          screen readers or in situations where the image cannot be rendered.
        </SectionDescription>
      </Box>
      <MyFlex bg="background">
        <ImageFunctionOne />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ImageTwo() {
  return (
    <SectionContainer>
      <SectionHeading>Image Sizing</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ The size of the <Mono>Image</Mono> component can be conveniently
          adjusted using the <Mono>boxSize</Mono> prop in Chakra UI. This
          attribute is very helpful for keeping the layout consistent and the
          images within the desired dimensions. It accepts various units
          including pixels (px), rems (rem), or ems (em).
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <ImageFunctionTwo />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ImageThree() {
  return (
    <SectionContainer>
      <SectionHeading>Object Fit Property</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ Another useful prop to consider is <Mono>objectFit</Mono>, which
          determines how the image should be resized to fit its container.
          Options include <Mono>fill</Mono>, <Mono>contain</Mono>,{" "}
          <Mono>cover</Mono>, <Mono>none</Mono>, and <Mono>scale-down</Mono>.
          The cover value, for instance, scales the image to maintain its aspect
          ratio while filling the box, often cropping the image in the process.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <ImageFunctionThree />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ImageFour() {
  return (
    <SectionContainer>
      <SectionHeading>Using Border Radius</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In this example, we have four images with different borderRadius
          values. With these props, you can customize the look of your images to
          match your design requirements. You're not just limited to these
          values; Chakra UI allows you to use custom values as per your needs.
        </SectionDescription>
      </Box>

      <MyFlex bg="background">
        <ImageFunctionFour />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

export function ImageFive() {
  return (
    <SectionContainer>
      <SectionHeading>Image Loading Fallback</SectionHeading>
      <Box>
        <SectionDescription>
          ⦾ In the real world, images can fail to load for a variety of reasons,
          such as network errors, incorrect URLs, or the image source being
          temporarily unavailable. In these cases, it's good practice to have a
          fallback image that can be displayed. This is especially true for
          product-based applications where it is crucial to provide a seamless
          user experience.
        </SectionDescription>
        <BasicText>
          Chakra UI's Image component supports a fallbackSrc prop that allows
          you to specify a fallback image URL. This image will be displayed in
          any of the following cases:
        </BasicText>
        <BulletBox>
          <ul>
            <li>
              The <Mono>src</Mono> prop has been provided, but the image is
              still loading.
            </li>
            <li>
              src An error occurred while loading the image provided in the{" "}
              <Mono>src</Mono>
              prop.
            </li>
            <li>
              The <Mono>src</Mono> prop was not passed.
            </li>
            <li>
              The <Mono>fallbackSrc</Mono> prop has been explicitly provided.
            </li>
          </ul>
        </BulletBox>
      </Box>
      <BasicText>
        You can opt out of this behavior by passing the{" "}
        <Mono>ignoreFallback</Mono> prop if you do not wish to use a fallback
        image.
      </BasicText>
      <BasicText>
        In this example, the src URL is invalid, which simulates a loading
        error. The <Mono>Image</Mono> component then displays the fallback image
        specified by the <Mono>fallbackSrc</Mono> prop. The end result is a
        smooth user experience, with the placeholder image displayed instead of
        a broken image link or a blank space.
      </BasicText>

      <MyFlex bg="background">
        <ImageFunctionFive />
      </MyFlex>
    </SectionContainer>
  );
}

/* ********************************************************************** */

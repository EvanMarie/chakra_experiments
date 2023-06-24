import { Image, Link, Text, VStack } from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { Highlighter } from "../styling/highlighter";
import { BasicText, CatsBouncing, HL, Mono } from "~/styles/DesignComponents";

export function ImageFunctionOne() {
  return (
    <SingleExample bg="background">
      <Image
        w="300px"
        h="200px"
        src="https://generative-placeholders.glitch.me/image?width=300&height=200&style=mondrian"
        fallbackSrc="https://generative-placeholders.glitch.me/image?width=600&height=300&style=tiles"
        alt="A cool image"
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ImageFunctionTwo() {
  return (
    <SingleExample bg="background">
      <VStack spacing={3}>
        <VStack spacing={0}>
          <Highlighter>{`boxSize="200px"`}</Highlighter>
          <Image
            w="200"
            h="125"
            objectFit="cover"
            src="https://generative-placeholders.glitch.me/image?width=200&height=125&style=circles&colors=26"
            alt="Pretty Shapes"
          />
        </VStack>
        <VStack spacing={0}>
          <Highlighter>{`boxSize="20rem"`}</Highlighter>
          <Image
            boxSize="20rem"
            objectFit="cover"
            src="https://generative-placeholders.glitch.me/image?width=200&height=125&style=circles&colors=26"
            alt="Pretty Shapes"
          />
        </VStack>
        <VStack spacing={0}>
          <Highlighter>{`boxSize="20em"`}</Highlighter>
          <Image
            boxSize="20em"
            objectFit="cover"
            src="https://generative-placeholders.glitch.me/image?width=200&height=125&style=circles&colors=26"
            alt="Pretty Shapes"
          />
        </VStack>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ImageFunctionThree() {
  return (
    <SingleExample bg="background">
      <VStack spacing={5}>
        <VStack spacing={0} paddingX={6}>
          <Highlighter>{`objectFit="fill"`}</Highlighter>
          <Image
            w="200px"
            h="200px"
            objectFit="fill"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/1280px-Iceland-1979445_%28cropped_3%29.jpg"
            alt="artic fox"
          />
          <BasicText>
            <HL>fill</HL>: This is the default value. The image is resized to
            fill the container box. It doesn't preserve the aspect ratio of the
            image and might lead to image distortion if the aspect ratio of the
            box is different from the image.
          </BasicText>
        </VStack>
        <VStack spacing={0} paddingX={4}>
          <Highlighter>{`objectFit="contain"`}</Highlighter>
          <Image
            w="200px"
            h="200px"
            objectFit="contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/1280px-Iceland-1979445_%28cropped_3%29.jpg"
            alt="artic fox"
          />
          <BasicText>
            <HL>contain</HL>: The image is scaled to maintain its aspect ratio
            while fitting within the box. The entire image is visible, but this
            could leave empty space (known as letterboxing) if its aspect ratio
            is different from the container.
          </BasicText>
        </VStack>
        <VStack spacing={0} paddingX={4}>
          <Highlighter>{`objectFit="cover"`}</Highlighter>
          <Image
            w="200px"
            h="200px"
            objectFit="cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/1280px-Iceland-1979445_%28cropped_3%29.jpg"
            alt="artic fox"
          />
          <BasicText>
            <HL>cover</HL>: The image is scaled to maintain its aspect ratio
            while filling the container's entire content box. If the aspect
            ratios of the image and container are different, some part of the
            image may be cropped.
          </BasicText>
        </VStack>
        <VStack spacing={0} paddingX={4}>
          <Highlighter>{`objectFit="none"`}</Highlighter>
          <Image
            w="200px"
            h="200px"
            objectFit="none"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/1280px-Iceland-1979445_%28cropped_3%29.jpg"
            alt="artic fox"
          />
          <BasicText>
            <HL>none</HL>: The image will ignore the size of the container and
            will maintain its original size. This means some parts of the image
            might not be visible if the container is smaller than the image.
          </BasicText>
        </VStack>
        <VStack spacing={0} paddingX={4}>
          <Highlighter>{`objectFit="scale-down"`}</Highlighter>
          <Image
            w="200px"
            h="200px"
            objectFit="scale-down"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/1280px-Iceland-1979445_%28cropped_3%29.jpg"
            alt="artic fox"
          />
          <BasicText>
            <HL>scale-down</HL>: The image is compared to both the none or
            contain options to find the smallest concrete object size. This
            means it behaves as contain most of the time unless the image is
            smaller than the box, in which case it behaves as none and the
            original size of the image is used.
          </BasicText>
        </VStack>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ImageFunctionFour() {
  return (
    <SingleExample bg="background">
      {" "}
      <VStack spacing={4} paddingX={6}>
        <VStack spacing={0}>
          <Highlighter>{`borderRadius="full"`}</Highlighter>
          <Image
            borderRadius="full"
            boxSize="200px"
            src="https://generative-placeholders.glitch.me/image?width=200&height=200&style=123&colors=26"
            alt="prettiness"
          />
          <BasicText>
            The <Mono>borderRadius="full"</Mono> prop gives the image a
            completely circular shape, regardless of its original aspect ratio.
            It's great for creating avatar images or icons.
          </BasicText>
        </VStack>
        <VStack spacing={0}>
          <Highlighter>{`borderRadius="xl"`}</Highlighter>
          <Image
            borderRadius="xl"
            boxSize="200px"
            src="https://generative-placeholders.glitch.me/image?width=200&height=200&style=123&colors=26"
            alt="prettiness"
          />
          <BasicText>
            The <Mono>borderRadius="xl"</Mono> prop gives the image an
            extra-large rounded border. This provides exaggerated rounded
            corners.
          </BasicText>
        </VStack>
        <VStack spacing={0}>
          <Highlighter>{`borderRadius="lg"`}</Highlighter>
          <Image
            borderRadius="lg"
            boxSize="200px"
            src="https://generative-placeholders.glitch.me/image?width=200&height=200&style=123&colors=26"
            alt="prettiness"
          />
          <BasicText>
            The <Mono>borderRadius="lg"</Mono> prop gives the image a larger
            rounded border. This is a more subtle effect, creating a sense of
            softness and blending the image with its surroundings.
          </BasicText>{" "}
        </VStack>
        <VStack spacing={0}>
          <Highlighter>{`borderRadius="md"`}</Highlighter>
          <Image
            borderRadius="md"
            boxSize="200px"
            src="https://generative-placeholders.glitch.me/image?width=200&height=200&style=123&colors=26"
            alt="prettiness"
          />{" "}
          <BasicText>
            The <Mono>borderRadius="md"</Mono> prop gives the image a medium
            rounded border, providing a balance between the original square
            shape and a fully rounded image.
          </BasicText>
        </VStack>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ImageFunctionFive() {
  return (
    <SingleExample bg="background">
      <Image
        src="https://invalid-url.com/image.jpg"
        fallbackSrc="https://via.placeholder.com/150"
        alt="Image with Fallback"
      />
    </SingleExample>
  );
}

/* ********************************************************************** */
export function ImageWithCaption() {
  return (
    <VStack spacing={0} m={0}>
      <Image
        w="200"
        h="125"
        src="https://generative-placeholders.glitch.me/image?style=circles&width=200&height=125&colors=88"
        alt="beautiful geometry"
      />
      <Text py={1} px={3} mb={0}>
        Lovely image courtesy of{" "}
        <Link href="https://generative-placeholders.glitch.me/" target="_blank">
          Generative-Placeholders
        </Link>
      </Text>
    </VStack>
  );
}

/* ********************************************************************** */

export function ClickableImage() {
  return (
    <Link href={CatsBouncing} isExternal>
      <Image
        w="200"
        h="125"
        src="https://generative-placeholders.glitch.me/image?style=triangles&width=200&height=125&colors=26"
        alt="Loveliness"
        objectFit="cover"
      />
    </Link>
  );
}

/* ********************************************************************** */
export function ImageWithFilter() {
  return (
    <Image
      w="200"
      h="125"
      src="https://generative-placeholders.glitch.me/image?style=cubic-disarray&width=200&height=125&colors=26"
      alt="Loveliness"
      objectFit="cover"
      filter="grayscale(100%)"
    />
  );
}

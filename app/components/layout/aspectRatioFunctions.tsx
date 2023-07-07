import { AspectRatio, Image } from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";

export function AspectRatioFunctionOne() {
  return (
    <SingleExample bg="background">
      {/* <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="Hayao Miyazaki - The Essence of Humanity"
          src="https://www.youtube.com/embed/jLPNkXglCwQ"
          allowFullScreen
        />
      </AspectRatio> */}
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AspectRatioFunctionTwo() {
  return (
    <SingleExample bg="background">
      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AspectRatioFunctionThree() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function AspectRatioFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function AspectRatioFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function AspectRatioFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function AspectRatioFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

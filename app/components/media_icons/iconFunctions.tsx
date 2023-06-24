import { Icon, IconProps, createIcon } from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";

export function IconCircleExample(props: IconProps) {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}

/* ********************************************************************** */

export const IconCirlceCreateIcon = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 200 200",
  path: (
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  ),
});

/* ********************************************************************** */

export function ComponentFunctionThree() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function ComponentFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function ComponentFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function ComponentFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function ComponentFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

import { Avatar, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { SingleExample } from "~/styles/MainDesignComponents";

/* ********************************************************************** */

const wrapStyling = {
  p: 0,
  m: 0,
};

export function AvatarFunctionOne() {
  return (
    <SingleExample bg="background">
      <Wrap>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person One"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Two"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Three"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704c"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Four"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704a"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Five"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704b"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Six"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704f"
          />
        </WrapItem>
      </Wrap>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarFunctionTwo() {
  return (
    <SingleExample bg="background">
      {" "}
      <Wrap>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person One"
            size="xs"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Two"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Three"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704c"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Four"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704a"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Five"
            size="xl"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704b"
          />
        </WrapItem>
        <WrapItem sx={wrapStyling}>
          <Avatar
            name="Person Six"
            size="2xl"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704f"
          />
        </WrapItem>
      </Wrap>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarFunctionThree() {
  return (
    <SingleExample bg="background">
      <Stack direction="row" spacing="1rem">
        <Avatar
          name="Person One"
          size="md"
          src="https://bit.ly/broken-link"
          bg="blue.500"
          icon={<AiOutlineUser fontSize="1.5rem" />}
        />
        <Avatar
          name="Person Two"
          size="lg"
          src="https://bit.ly/broken-link"
          bg="green.500"
          icon={<AiOutlineUser fontSize="1.5rem" />}
        />
        <Avatar
          size="xl"
          src="https://bit.ly/broken-link"
          bg="red.500"
          icon={<AiOutlineUser fontSize="1.5rem" />}
        />
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarFunctionFour() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function AvatarFunctionFive() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function AvatarFunctionSix() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

/* ********************************************************************** */

export function AvatarFunctionSeven() {
  return <SingleExample bg="background"> Function Logic</SingleExample>;
}

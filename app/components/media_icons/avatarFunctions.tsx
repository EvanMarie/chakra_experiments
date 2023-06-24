import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Button,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { CatsBouncing } from "~/styles/DesignComponents";
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
  return (
    <SingleExample bg="background">
      <Stack direction="row" spacing={4}>
        <Avatar
          name="Person One"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
        >
          <AvatarBadge boxSize="1.25em" bg="green.300" />
        </Avatar>

        <Avatar
          name="Person Two"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        >
          <AvatarBadge borderColor="cyan" bg="deeppink" boxSize="1.25em" />
        </Avatar>

        <Avatar
          name="Person Three"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704c"
        >
          <AvatarBadge
            borderColor="green.200"
            bg="yellow.500"
            boxSize="1.25em"
          />
        </Avatar>
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarFunctionFive() {
  return (
    <SingleExample bg="background">
      <AvatarGroup size="lg" max={3} spacing={-3} color="background">
        <Avatar
          name="Person One"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
        />
        <Avatar
          name="Person Two"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <Avatar
          name="Person Three"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704c"
        />
        <Avatar
          name="Person Four"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704a"
        />
        <Avatar
          name="Person Five"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704b"
        />
      </AvatarGroup>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarFunctionSix() {
  return (
    <SingleExample bg="background">
      <Avatar
        size="lg"
        name="Person One"
        getInitials={(fullName) =>
          fullName
            .split(" ")
            .map((namePart) => namePart[0])
            .reverse()
            .join("")
        }
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarTipOne() {
  return (
    <SingleExample bg="background">
      <Button
        as="a"
        href={CatsBouncing}
        target="_blank"
        p={0}
        borderRadius="full"
      >
        <Avatar
          size="lg"
          name="Person One"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
        />
      </Button>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarTipTwo() {
  return (
    <SingleExample bg="background">
      <Avatar
        size="lg"
        name="Person One"
        bg="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
      />
    </SingleExample>
  );
}

/* ********************************************************************** */

export function AvatarTipThree() {
  return (
    <SingleExample bg="background">
      <Avatar
        size="lg"
        name="Person One"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
        borderRadius="10%"
      />
    </SingleExample>
  );
}

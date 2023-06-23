import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { ButtonStyles } from "~/styles/DesignComponents";
import { SingleExample } from "~/styles/MainDesignComponents";

export function MenuFunctionOne() {
  return (
    <SingleExample bg="background">
      <Menu>
        <MenuButton
          {...ButtonStyles}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Things to Do:
        </MenuButton>
        <MenuList color="black">
          <MenuItem>Get Coffee</MenuItem>
          <MenuItem>Take a Walk</MenuItem>
          <MenuItem>Pet a Dog</MenuItem>
          <MenuItem>Meditate</MenuItem>
        </MenuList>
      </Menu>
    </SingleExample>
  );
}

export function MenuFunctionTwo() {
  return (
    <SingleExample bg="background">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              {...ButtonStyles}
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {isOpen ? "Close" : "Open"}
            </MenuButton>
            <MenuList color="black">
              <MenuItem>Do Something</MenuItem>
              <MenuItem onClick={() => alert("You are on alert!")}>
                Do Something Better
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </SingleExample>
  );
}

// eslint-disable-next-line react/display-name
const CustomButton = forwardRef<HTMLButtonElement, any>((props, ref) => {
  return (
    <Box
      {...ButtonStyles}
      as="button"
      bg="purple.300"
      color="blue.700"
      fontWeight="bold"
      py={2}
      px={4}
      borderRadius="sm"
      ref={ref}
      {...props}
    >
      Custom Button
    </Box>
  );
});

export function MenuFunctionThree() {
  return (
    <SingleExample bg="background">
      <Menu>
        <MenuButton as={CustomButton} />
        <MenuList color="black">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuList>
      </Menu>
    </SingleExample>
  );
}

export function MenuFunctionFour() {
  return (
    <SingleExample bg="background">
      <Menu>
        <MenuButton
          px={4}
          py={2}
          bg="purple.700"
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "purple.100", color: "purple.700" }}
          _expanded={{ bg: "purple.400" }}
          _focus={{ boxShadow: "outline" }}
        >
          Favorite Animal <ChevronDownIcon />
        </MenuButton>
        <MenuList color="purple">
          <MenuItem>Beluga Whale</MenuItem>
          <MenuItem>Blue Whale</MenuItem>
          <MenuDivider />
          <MenuItem>Cheetah</MenuItem>
          <MenuItem>Mountain Lion</MenuItem>
          <MenuDivider />
          <MenuItem>Red Panda</MenuItem>
          <MenuItem>Sea Otter</MenuItem>
          <MenuDivider />
          <MenuItem>Unicorn</MenuItem>
        </MenuList>
      </Menu>
    </SingleExample>
  );
}
export function MenuFunctionFive() {
  return (
    <SingleExample bg="background">
      <Menu>
        <MenuButton
          {...ButtonStyles}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Which Keanu?
        </MenuButton>
        <MenuList color="black">
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekeanu.com/100/100/y"
              alt="Keanu Reeves"
              mr="12px"
            />
            <span>Keanu No. 1</span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekeanu.com/100/100/g"
              alt="Keanu Reeves"
              mr="12px"
            />
            <span>Keanu No. 2</span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekeanu.com/100/100"
              alt="Keanu Reeves"
              mr="12px"
            />
            <span>Keanu No. 3</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </SingleExample>
  );
}
export function MenuFunctionSix() {
  return (
    <SingleExample bg="background">
      <Menu>
        <HStack spacing={6}>
          <MenuButton
            {...ButtonStyles}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon color="deeppink" />}
            variant="outline"
          />
          <h2>Whaddamenu!</h2>
        </HStack>
        <MenuList color="black">
          <MenuItem icon={<AddIcon />} command="⌘T">
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
    </SingleExample>
  );
}

export function MenuFunctionSeven() {
  return (
    <SingleExample bg="background">
      <Menu>
        <MenuButton as={Button} {...ButtonStyles}>
          Things
        </MenuButton>
        <MenuList color="black">
          <MenuGroup title="Likes" color="pink.700">
            <MenuItem>Coffee</MenuItem>
            <MenuItem>Dark Chocolate</MenuItem>
            <MenuItem>Anime</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Dislikes" color="pink.700">
            <MenuItem>Chartreuse</MenuItem>
            <MenuItem>Chicken Liver</MenuItem>
            <MenuItem>Mean People</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </SingleExample>
  );
}

export function MenuFunctionEight() {
  return (
    <SingleExample bg="background">
      <Menu>
        <MenuButton {...ButtonStyles} p={2}>
          Open menu
        </MenuButton>
        <MenuList color="black">
          <MenuItem
            as="a"
            href="http://www.evanmarie.com"
            target="_blank"
            _hover={{ color: "deeppink" }}
          >
            Evan Marie's Site
          </MenuItem>
          <MenuItem
            as="a"
            href="http://www.github.com/evanmarie"
            target="_blank"
            _hover={{ color: "deeppink" }}
          >
            Evan Marie's GitHub
          </MenuItem>
        </MenuList>
      </Menu>
    </SingleExample>
  );
}

export function FormMenuExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fruit, setFruit] = useState("Choose a fruit");

  const handleMenuItemClick = (fruitName: string) => {
    setFruit(fruitName);
    onClose();
  };

  return (
    <Box>
      <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <MenuButton
          {...ButtonStyles}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          {fruit}
        </MenuButton>
        <MenuList color="black">
          <MenuItem onClick={() => handleMenuItemClick("Apple")}>
            Apple
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Banana")}>
            Banana
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Cherry")}>
            Cherry
          </MenuItem>
        </MenuList>
      </Menu>
      <Input mt={4} value={fruit} readOnly />
    </Box>
  );
}

export function SplitMenuButton() {
  const [action, setAction] = useState("Default Action");

  const handleActionChange = (newAction: any) => {
    setAction(newAction);
    console.log(newAction);
  };

  return (
    <Box>
      <Menu>
        <ButtonGroup>
          <Button
            {...ButtonStyles}
            w="140px"
            colorScheme="teal"
            onClick={() => console.log(action)}
          >
            {action}
          </Button>
          <MenuButton
            {...ButtonStyles}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="teal"
          ></MenuButton>
        </ButtonGroup>

        <MenuList>
          <MenuItem onClick={() => handleActionChange("First Action")}>
            First Action
          </MenuItem>
          <MenuItem onClick={() => handleActionChange("Second Action")}>
            Second Action
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => handleActionChange("Third Action")}>
            Third Action
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

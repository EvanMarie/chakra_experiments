import { AddIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Input,
  Box,
  Select,
  Textarea,
  VStack,
  Text,
  Link,
  Collapse,
  useToast,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { SingleExample } from "~/styles/MainDesignComponents";

const ButtonStyles = {
  bg: "accent_3",
  color: "darkAccent_3",
  border: "1px solid",
  borderColor: "darText",
  _hover: {
    bg: "darkAccent_3",
    color: "accent_3",
  },
};

export function DrawerFunctionOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <SingleExample bg="background">
      <Button {...ButtonStyles} ref={btnRef} onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button
              {...ButtonStyles}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button {...ButtonStyles}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </SingleExample>
  );
}

export function DrawerFunctionTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState<
    "top" | "right" | "bottom" | "left"
  >("right");

  return (
    <>
      <RadioGroup
        defaultValue={placement}
        onChange={(nextValue) =>
          setPlacement(nextValue as "top" | "right" | "bottom" | "left")
        }
      >
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button {...ButtonStyles} onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>I am some contents in a paragraph.</p>
            <p>I am another paragraph utterly full of content.</p>
            <p>Wow, the content around here is astounding.</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function DrawerFunctionThree() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <SingleExample bg="background">
      <Button ref={btnRef} {...ButtonStyles} onClick={onOpen}>
        Open
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={initialFocusRef}
        onClose={handleClose}
      >
        <DrawerContent padding={4} bg="sectionColor">
          <Select placeholder="Select an option" mb={4} color="white">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Input mb={3} ref={initialFocusRef} placeholder="Enter your name" />
          <Textarea placeholder="Enter your message" mb={4} />
          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              {...ButtonStyles}
            >
              Cancel
            </Button>
            <Button {...ButtonStyles}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </SingleExample>
  );
}

export function DrawerFunctionFour() {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  return (
    <SingleExample bg="background">
      {sizes.map((size) => (
        <Button
          {...ButtonStyles}
          size="sm"
          w="100px"
          onClick={() => handleClick(size)}
          key={size}
          m={2}
          p={1}
        >{`${size} Drawer`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bg="background"
            color="mainText"
          >{`A bunch of one-liners in a ${size} drawer:`}</DrawerHeader>
          <DrawerBody bg="accent_3">
            <ul>
              <li>
                My wife told me to stop impersonating a flamingo. I had to put
                my foot down.
              </li>
              <li>I went to buy some camo pants but could not find any.</li>{" "}
              <li>
                I failed math so many times at school, I cannot even count.
              </li>{" "}
              <li>I used to have a handle on life, but then it broke.</li>{" "}
              <li>
                I was wondering why the frisbee kept getting bigger and bigger,
                but then it hit me.
              </li>{" "}
              <li>
                I heard there were a bunch of break-ins over at the car park.
                That is wrong on so many levels.
              </li>
              <li>
                I want to die peacefully in my sleep, like my grandfather… Not
                screaming and yelling like the passengers in his car.
              </li>{" "}
              <li>When life gives you melons, you might be dyslexic.</li>{" "}
              <li>
                Do you hate it when someone answers their own questions? I do.
              </li>{" "}
              <li>It takes a lot of balls to golf the way I do.</li>
              <li>
                <Box bg="accent_1" p={2}>
                  Courtesy of{" "}
                  <Link href="https://parade.com/1040121/marynliles/one-liners/">
                    Parade.com
                  </Link>
                </Box>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </SingleExample>
  );
}

export function DrawerFunctionFive() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SingleExample bg="background">
      <Button {...ButtonStyles} onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id="my-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Input name="nickname" placeholder="Type here..." />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button {...ButtonStyles} type="submit" form="my-form">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </SingleExample>
  );
}

export const DrawerNestedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box>
        <Button
          {...ButtonStyles}
          onClick={toggleSubMenu}
          cursor="pointer"
          fontWeight="bold"
        >
          Menu
        </Button>
      </Box>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader bg="accent_2">Navigation</DrawerHeader>
            <DrawerBody bg="sectionColor" color="mainText">
              <VStack spacing={4} align="stretch">
                <Link>Home</Link>
                <Link>Products</Link>
                <Box pl={4}>
                  <Text onClick={toggleSubMenu} cursor="pointer">
                    Services
                  </Text>
                  <Collapse in={isOpen}>
                    <Box pl={4}>
                      <VStack spacing={4} align="stretch">
                        <Link>Service 1</Link>
                        <Link>Service 2</Link>
                      </VStack>
                    </Box>
                  </Collapse>
                </Box>
                <Link>About</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export const DrawerMultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFinish = () => {
    // Perform form submission or final step logic here
    setIsOpen(false);
    setStep(1);
  };

  const handleClose = () => {
    setStep(1);
    setIsOpen(false);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Step 1</h2>
            This is step one. Imagine some fantastic form field action here...
          </>
        );
      case 2:
        return (
          <>
            <h2>Step 2</h2>
            This is step two. This form would probably be asking you way too
            many questions by now...
          </>
        );
      case 3:
        return (
          <>
            <h2>Step 3</h2>
            This is step three. I think it is about time we wrap this up...
            <Button {...ButtonStyles} onClick={handleFinish}>
              Finish
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Button {...ButtonStyles} onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      <Drawer isOpen={isOpen} onClose={handleClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg="background" color="mainText">
            Multi-step Form
          </DrawerHeader>
          <DrawerBody bg="accent_3">
            <Stack spacing={4}>
              {renderFormStep()}
              {step !== 3 && (
                <>
                  <Button
                    {...ButtonStyles}
                    onClick={handlePreviousStep}
                    disabled={step === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    {...ButtonStyles}
                    onClick={handleNextStep}
                    disabled={step === 3}
                  >
                    Next
                  </Button>
                </>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const DrawerNotificationsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const toast = useToast();

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  const handleAddNotification = () => {
    const newNotification = `Notification ${notifications.length + 1}`;
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);
    toast({
      title: "Notification Added",
      description: newNotification,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={3} w="100%">
      <Button {...ButtonStyles} onClick={handleOpenDrawer}>
        Open Notifications
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={handleCloseDrawer}
        placement="right"
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent bg="accent_3">
          <DrawerHeader>Notifications Panel</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {notifications.map((notification, index) => (
                <Badge key={index} variant="subtle" colorScheme="red">
                  {notification}
                </Badge>
              ))}
              {notifications.length === 0 && <p>No notifications</p>}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Button {...ButtonStyles} onClick={handleAddNotification}>
        Add Notification
      </Button>
    </VStack>
  );
};

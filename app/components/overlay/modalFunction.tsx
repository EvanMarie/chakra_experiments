import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ButtonStyles, PlaceholderImage } from "~/styles/DesignComponents";

import { MyFlex, SingleExample } from "~/styles/MainDesignComponents";

export function ModalFunctionOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SingleExample bg="background">
      <Button sx={ButtonStyles} onClick={onOpen}>
        Trigger Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>MODAL HEADER</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>This is where the modal's content goes.</p>
          </ModalBody>

          <ModalFooter>
            <Button
              sx={ButtonStyles}
              colorScheme="green"
              mr={3}
              onClick={onClose}
            >
              Dismiss
            </Button>
            <Button sx={ButtonStyles} variant="outline">
              Other Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SingleExample>
  );
}

export function ModalFunctionTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const endRef = useRef(null);
  return (
    <SingleExample bg="background">
      <>
        <Button sx={ButtonStyles} mt={4} onClick={onOpen}>
          Launch Modal
        </Button>

        <Modal finalFocusRef={endRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>MODAL HEADER</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>
                Any custom content can go here like text, form inputs, images
                etc.
              </p>
            </ModalBody>

            <ModalFooter>
              <Button
                sx={ButtonStyles}
                colorScheme="purple"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button sx={ButtonStyles} variant="outline">
                Other Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box
          bg="accent_2"
          p={[4, 1]}
          mt={2}
          color="darkText"
          ref={endRef}
          tabIndex={-1}
          aria-label="Focus will shift to this box when the modal closes."
        >
          A different element that will capture focus after modal closes.
        </Box>
      </>
    </SingleExample>
  );
}

export function ModalFunctionThree() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const startRef = useRef(null);
  const endRef = useRef(null);
  return (
    <SingleExample bg="background">
      <>
        <Button sx={ButtonStyles} onClick={onOpen}>
          Launch Modal
        </Button>
        <Box ref={endRef} bg="accent_2" p={[4, 1]} mt={2} color="darkText">
          Focus will move here when modal closes
        </Box>
        <Modal
          initialFocusRef={startRef}
          finalFocusRef={endRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Your Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input ref={startRef} placeholder="Enter your first name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter your last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button sx={ButtonStyles} colorScheme="green" mr={3}>
                Submit
              </Button>
              <Button sx={ButtonStyles} onClick={onClose}>
                Dismiss
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </SingleExample>
  );
}

export function ModalFunctionFour() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const jokes = [
    "I told my wife she should embrace her mistakes... She gave me a hug.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I have a joke about construction, but I'm still working on it.",
  ];
  return (
    <SingleExample bg="background">
      <>
        <Button sx={ButtonStyles} onClick={onOpen}>
          Show Jokes
        </Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>One-Liner Jokes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {jokes.map((joke, index) => (
                <Box key={index} p={3} my={2} bg="accent_3" color="darkText">
                  <p>{joke}</p>
                </Box>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button
                sx={ButtonStyles}
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </SingleExample>
  );
}

export function ModalFunctionFive() {
  // UseDisclosure is a custom hook that returns an object with isOpen, onOpen, and onClose properties
  const { isOpen, onOpen, onClose } = useDisclosure();

  // The useState hook initializes the size state variable as 'md' (medium)
  const [size, setSize] = useState("md");

  // The handleSizeClick function updates the size state variable and opens the modal
  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  // Define an array of sizes
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  return (
    <SingleExample bg="background">
      <SimpleGrid columns={2} gap={2}>
        {sizes.map((size) => (
          <Button
            sx={ButtonStyles}
            size="sm"
            onClick={() => handleSizeClick(size)}
            key={size}
            m={2}
          >{`Open ${size} Modal`}</Button>
        ))}
      </SimpleGrid>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MyFlex>
              <PlaceholderImage type="cubic-disarray" colors={26} />
            </MyFlex>
          </ModalBody>
          <ModalFooter>
            <Button sx={ButtonStyles} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SingleExample>
  );
}

export function ModalFunctionSix() {
  const overlays = [
    () => (
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
    ),
    () => (
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(0,0,0,0.5)"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(255,255,255,0.5)"
        backdropFilter="invert(80%) blur(2px)"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(0,0,0,0.5)"
        backdropBlur="10px"
        backdropFilter="hue-rotate(90deg)"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(255,255,255,0.5)"
        backdropInvert="80%"
        backdropBlur="2px"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(0,0,255,0.5)"
        backdropSaturate="180%"
        backdropFilter="sepia(60%)"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(128,0,128,0.5)"
        backdropSaturate="200%"
        backdropFilter="hue-rotate(45deg)"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(255,0,0,0.5)"
        backdropContrast="150%"
        backdropFilter="grayscale(100%)"
      />
    ),
    () => (
      <ModalOverlay
        bg="rgba(0,200,0,0.5)"
        backdropBlur="5px"
        backdropFilter="drop-shadow(4px 4px 10px blue)"
      />
    ),
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(overlays[0]);
  return (
    <SingleExample bg="background">
      <>
        <SimpleGrid columns={2} gap={2}>
          {overlays.map((Overlay, index) => (
            <Button
              sx={ButtonStyles}
              size="sm"
              m={2}
              onClick={() => {
                setOverlay(Overlay);
                onOpen();
              }}
              key={index}
            >
              Overlay {index + 1}
            </Button>
          ))}
        </SimpleGrid>
        <Modal isCentered isOpen={isOpen} size="xs" onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>MODAL TITLE</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>How do you like that overlay?</Text>
            </ModalBody>
            <ModalFooter>
              <Button sx={ButtonStyles} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </SingleExample>
  );
}

export function NestedModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: secondIsOpen,
    onOpen: secondOnOpen,
    onClose: secondOnClose,
  } = useDisclosure();

  return (
    <>
      <Button sx={ButtonStyles} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Image src="https://generative-placeholders.glitch.me/image?width=600&height=300&style=cubic-disarray" />
          <ModalHeader>First Modal</ModalHeader>
          <ModalBody>
            <Button sx={ButtonStyles} onClick={secondOnOpen}>
              Open Nested Modal
            </Button>

            <Modal size="xs" isOpen={secondIsOpen} onClose={secondOnClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Nested Modal</ModalHeader>
                <Image src="https://generative-placeholders.glitch.me/image?width=100&height=100&style=123" />
              </ModalContent>
            </Modal>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export function CustomCloseButtonModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button sx={ButtonStyles} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} size="lg" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal with Custom Close Button</ModalHeader>
          <Box p={3}>
            {" "}
            <Text>My my, that is a LARGE close button!</Text>
          </Box>

          <Image src="https://generative-placeholders.glitch.me/image?width=300&height=300&style=circles" />
          <ModalCloseButton>
            <CloseIcon boxSize="32px" />
          </ModalCloseButton>
        </ModalContent>
      </Modal>
    </>
  );
}

export function Magic8Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
    setAnswer("");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAsk = () => {
    const answers = [
      "It is certain.",
      "Reply hazy, try again.",
      "It is decidedly so.",
      "Ask again later.",
      "Without a doubt.",
      "Yes, definitely!",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Better not tell you now...",
      "Cannot predict now...",
      "Concentrate, and ask again.",
      "Don’t count on it.",
      "My reply is no.",
      "My sources say 'no'.",
      "Outlook not so good.",
      "Very doubtful.",
      "Outlook good.",
      "Yes!",
      "Outlook good!",
      "Signs point to yes!",
    ];
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(randomAnswer);
  };

  const handleAskAgain = () => {
    setAnswer("");
  };

  return (
    <>
      <Button sx={ButtonStyles} onClick={handleOpen}>
        Ask the Magic 8 Ball
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <MyFlex>
            <ModalHeader>Ask the Magic 8 Ball</ModalHeader>

            <Image
              src="https://www.meijer.com/content/dam/meijer/product/0008/56/3307/09/0008563307099_1_A1C1_0600.png"
              w="50%"
            />
          </MyFlex>
          <ModalBody>
            <MyFlex bg="black" color="white" h="50px">
              {answer ? (
                <Text fontSize="lg" fontWeight="bold" textAlign="center">
                  {answer}
                </Text>
              ) : null}
            </MyFlex>
          </ModalBody>
          <ModalFooter>
            {!answer ? (
              <Button
                sx={ButtonStyles}
                size="sm"
                m={3}
                w="80px"
                onClick={handleAsk}
                mr={2}
              >
                Ask
              </Button>
            ) : (
              <Button
                sx={ButtonStyles}
                size="sm"
                m={3}
                w="80px"
                onClick={handleAskAgain}
                mr={2}
              >
                Ask Again
              </Button>
            )}
            <Button
              sx={ButtonStyles}
              size="sm"
              m={3}
              w="80px"
              onClick={handleClose}
              mr={2}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

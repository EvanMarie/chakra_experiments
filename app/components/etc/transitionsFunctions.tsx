import {
  VStack,
  Button,
  Collapse,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  Center,
  Box,
  Select,
  HStack,
  useOutsideClick,
  Code,
  IconButton,
  Text,
  StackDivider,
  BoxProps,
  Stack,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { boxColors } from "~/styles/DesignComponents";
import { useRef, useState } from "react";
import { AiOutlineCloseSquare, AiOutlinePlayCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";

const transitionContainerStyle = {
  w: "100%",
  align: "center",
  bg: "mainText",
  color: "background",
  p: "4",
  borderRadius: "lg",
};

const transitionBoxStyle = {
  w: { base: "250px", sm: "350px" },
  borderRadius: "lg",
  color: "background",
  bg: boxColors.three,
  p: "4",
  border: "2px solid #444444",
  shadow: "xl",
};

const transitionButtonStyles = {
  size: "sm",
  justifyContent: "space-evenly",
  leftIcon: <AiOutlinePlayCircle size={20} />,
  w: "fit-content",
  paddingX: 4,
};

const selectStyles = {
  w: "90px",
  size: "sm",
  fontSize: "xs",
  borderColor: "background",
  focusBorderColor: "accent_2",
  fontWeight: "bold",
};

const customTransition = {
  enter: {
    opacity: 1,
    transition: { duration: 0.95, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.95, ease: "easeInOut" },
  },
};

interface ButtonBoxProps extends BoxProps {
  children: React.ReactNode;
  w?: string;
}

const ButtonBox = ({ children, w = "225px", ...rest }: ButtonBoxProps) => {
  return <Center w={w}>{children}</Center>;
};

/* ********************************************************************** */

export function TransitionsFunctionOne() {
  function FadeOne() {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <VStack w="100%" spacing={0}>
        <ButtonBox>
          <Button {...transitionButtonStyles} onClick={onToggle}>
            Default Fade
          </Button>
        </ButtonBox>
        <Center h="70px" w="100%">
          <Fade in={isOpen}>
            <Center {...transitionBoxStyle}>
              <Code>{`<Fade in={isOpen}>`}</Code>
            </Center>
          </Fade>
        </Center>
      </VStack>
    );
  }

  function FadeTwo() {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <VStack w="100%" spacing={0}>
        <ButtonBox>
          <Button {...transitionButtonStyles} onClick={onToggle}>
            Custom Fade
          </Button>
        </ButtonBox>
        <Center h="70px" w="100%">
          <Fade in={isOpen} transition={customTransition}>
            <Center {...transitionBoxStyle}>
              <Code>{`duration: 0.95`}</Code>
            </Center>
          </Fade>
        </Center>
      </VStack>
    );
  }

  return (
    <VStack sx={transitionContainerStyle} spacing={6}>
      <FadeOne />
      <FadeTwo />
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionTwo() {
  function ScaleFadeOne() {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <VStack w="100%" align="center">
        <ButtonBox>
          <Button {...transitionButtonStyles} onClick={onToggle}>
            Default ScaleFade
          </Button>
        </ButtonBox>
        <Center h="70px" w="100%">
          <ScaleFade in={isOpen}>
            <Center {...transitionBoxStyle}>
              <Code>{`<ScaleFade in={isOpen}>`}</Code>
            </Center>
          </ScaleFade>
        </Center>
      </VStack>
    );
  }

  function ScaleFadeTwo() {
    const { isOpen, onToggle } = useDisclosure();
    const [initialScale, setInitialScale] = useState(0.7);

    const handleInitialScaleChange = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const selectedInitialScale = parseFloat(e.target.value);
      setInitialScale(selectedInitialScale);
    };

    return (
      <VStack w="100%" spacing={0}>
        <Stack direction={["column", "row"]} spacing={1} align="center">
          {" "}
          <Select
            {...selectStyles}
            value={initialScale.toString()}
            onChange={handleInitialScaleChange}
            m={0}
            p={0}
          >
            {Array.from({ length: 11 }, (_, index) => {
              const scale = (index / 10).toFixed(1);
              return (
                <option key={index} value={scale}>
                  {scale}
                </option>
              );
            })}
          </Select>
          <ButtonBox>
            <Button {...transitionButtonStyles} onClick={onToggle}>
              initialScale={initialScale}
            </Button>
          </ButtonBox>
        </Stack>
        <Center h="70px" w="100%">
          <ScaleFade in={isOpen} initialScale={initialScale}>
            <Center {...transitionBoxStyle}>
              <Code>{`<ScaleFade initialScale=${initialScale}>`}</Code>
            </Center>
          </ScaleFade>
        </Center>
      </VStack>
    );
  }

  return (
    <VStack sx={transitionContainerStyle} spacing={6}>
      <ScaleFadeOne />
      <ScaleFadeTwo />
    </VStack>
  );
}

/* ********************************************************************** */

type SlideDirection = "top" | "bottom" | "left" | "right";

export function TransitionsFunctionThree() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("top");
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleSlideDirectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSlideDirection = e.target.value as SlideDirection;
    setSlideDirection(selectedSlideDirection);
  };

  const handleOutsideClick = () => {
    onClose();
  };

  useOutsideClick({
    ref: slideRef,
    handler: handleOutsideClick,
  });

  return (
    <VStack sx={transitionContainerStyle} spacing={0}>
      <Stack direction={["column", "row"]} align="center">
        <Select
          {...selectStyles}
          value={slideDirection}
          onChange={handleSlideDirectionChange}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </Select>

        <ButtonBox>
          <Button {...transitionButtonStyles} onClick={onToggle}>
            Slide: {slideDirection}
          </Button>
        </ButtonBox>
      </Stack>
      {isOpen && (
        <Center w="100%" ref={slideRef}>
          <Slide
            direction={slideDirection}
            in={isOpen}
            style={{ zIndex: 10 }}
            transition={customTransition}
          >
            <Center {...transitionBoxStyle} w="100%" h="150px">
              <VStack justify="space-between" h="100%">
                {" "}
                <Code fontSize="lg">{`<Slide direction=${slideDirection}>`}</Code>
                <IconButton
                  icon={<AiOutlineCloseSquare />}
                  aria-label="Close"
                  variant="ghost"
                  onClick={onClose}
                  fontSize={30}
                />
              </VStack>
            </Center>
          </Slide>
        </Center>
      )}
    </VStack>
  );
}
/* ********************************************************************** */

export function TransitionsFunctionFour() {
  function SlideFadeOne() {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <VStack sx={transitionContainerStyle}>
        <ButtonBox>
          <Button {...transitionButtonStyles} onClick={onToggle}>
            Default SlideFade
          </Button>
        </ButtonBox>
        <Center h="70px" w="100%">
          <SlideFade in={isOpen} offsetY="20px">
            <Center {...transitionBoxStyle}>SlideFade</Center>
          </SlideFade>
        </Center>
      </VStack>
    );
  }

  function SlideFadeTwo() {
    const { isOpen, onToggle } = useDisclosure();
    const [offsetX, setOffsetX] = useState("20px");
    const [offsetY, setOffsetY] = useState("20px");
    const [duration, setDuration] = useState(0.7);

    const handleOffsetXChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOffsetX = e.target.value;
      setOffsetX(selectedOffsetX);
    };

    const handleOffsetYChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOffsetY = e.target.value;
      setOffsetY(selectedOffsetY);
    };

    const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedDuration = parseFloat(e.target.value);
      setDuration(selectedDuration);
    };

    const offsetOptions = Array.from(
      { length: 41 },
      (_, index) => (index - 20) * 10
    );
    const durationOptions = [
      0.2, 0.4, 0.6, 0.8, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0,
    ];

    const customStyles = {
      transitionDuration: `${duration}s`,
    };

    return (
      <>
        <VStack sx={transitionContainerStyle} spacing={0}>
          <VStack w="100%">
            <VStack
              bg="sidebarBackground"
              shadow="xl"
              color="mainText"
              w="100%"
              p={3}
              borderRadius="lg"
            >
              <Stack direction={["column", "row"]} spacing={3}>
                <HStack>
                  <Text fontWeight="bold" mb={0}>
                    offsetX=
                  </Text>
                  <Select
                    value={offsetX}
                    onChange={handleOffsetXChange}
                    {...selectStyles}
                    mt={2}
                  >
                    {offsetOptions.map((option) => (
                      <option key={option} value={`${option}px`}>
                        {option}px
                      </option>
                    ))}
                  </Select>
                </HStack>
                <HStack>
                  <Text fontWeight="bold" mb={0}>
                    offsetY=
                  </Text>
                  <Select
                    value={offsetY}
                    {...selectStyles}
                    onChange={handleOffsetYChange}
                    mt={2}
                  >
                    {offsetOptions.map((option) => (
                      <option key={option} value={`${option}px`}>
                        {option}px
                      </option>
                    ))}
                  </Select>
                </HStack>
              </Stack>
              <HStack>
                <Text fontWeight="bold" mb={0}>
                  Duration=
                </Text>
                <Select
                  value={duration.toString()}
                  onChange={handleDurationChange}
                  {...selectStyles}
                  mt={2}
                >
                  {durationOptions.map((option) => (
                    <option key={option} value={option.toString()}>
                      {option}s
                    </option>
                  ))}
                </Select>
              </HStack>
            </VStack>

            <ButtonBox>
              <Button {...transitionButtonStyles} onClick={onToggle}>
                SliderFade: ({offsetX}, {offsetY})
              </Button>
            </ButtonBox>
          </VStack>

          <Center h="70px" w="100%">
            <SlideFade
              in={isOpen}
              offsetX={offsetX}
              offsetY={offsetY}
              style={customStyles}
            >
              <Center {...transitionBoxStyle}>SlideFade</Center>
            </SlideFade>
          </Center>
        </VStack>
      </>
    );
  }

  return (
    <VStack
      sx={transitionContainerStyle}
      spacing={6}
      divider={<StackDivider borderColor="background" />}
    >
      <SlideFadeOne />
      <SlideFadeTwo />
    </VStack>
  );
}

/* ********************************************************************** */
export function TransitionsFunctionFive() {
  const { isOpen, onToggle } = useDisclosure();
  const [animateOpacity, setAnimateOpacity] = useState(true);
  const [startingHeight, setStartingHeight] = useState("1px");
  const [endingHeight, setEndingHeight] = useState("300px");
  const [duration, setDuration] = useState(2.0);

  const handleAnimateOpacityChange = () => {
    setAnimateOpacity(!animateOpacity);
  };

  const handleStartingHeightChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStartingHeight(e.target.value);
  };

  const handleEndingHeightChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEndingHeight(e.target.value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDuration = parseFloat(e.target.value);
    setDuration(selectedDuration);
  };

  const heightOptions = Array.from({ length: 31 }, (_, index) =>
    index === 0 ? "1px" : `${index * 10}px`
  );

  const durationOptions = [
    0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 4.0, 5.0,
  ];

  const customTransitionCollapse = {
    animateOpacity,
    startingHeight,
    endingHeight,
  };

  const customStyles = {
    transitionDuration: `${duration}s`,
  };

  return (
    <VStack sx={transitionContainerStyle}>
      <Flex h="300px" w="100%" align="flex-end" justify="center">
        <Collapse
          in={isOpen}
          {...customTransitionCollapse}
          style={customStyles}
        >
          <Center {...transitionBoxStyle}>Collapse</Center>
        </Collapse>
      </Flex>
      <VStack
        bg="sidebarBackground"
        shadow="xl"
        color="mainText"
        w="100%"
        p={3}
        borderRadius="lg"
      >
        <Checkbox
          isChecked={animateOpacity}
          onChange={handleAnimateOpacityChange}
          colorScheme="green"
          size="sm"
        >
          animateOpacity
        </Checkbox>

        <Stack direction={["column", "row"]} spacing={3}>
          <HStack>
            <Text fontSize="sm" fontWeight="bold" mb={0}>
              startingHeight=
            </Text>
            <Select
              value={startingHeight}
              onChange={handleStartingHeightChange}
              {...selectStyles}
              mt={2}
            >
              {heightOptions.map((option, index) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </HStack>
          <HStack>
            <Text fontSize="sm" fontWeight="bold" mb={0}>
              endingHeight=
            </Text>
            <Select
              value={endingHeight}
              onChange={handleEndingHeightChange}
              {...selectStyles}
              mt={2}
            >
              {heightOptions.map((option, index) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </HStack>
        </Stack>
        <HStack>
          <Text fontWeight="bold" mb={0}>
            Duration:
          </Text>
          <Select
            value={duration.toString()}
            onChange={handleDurationChange}
            {...selectStyles}
            mt={2}
          >
            {durationOptions.map((option) => (
              <option key={option} value={option.toString()}>
                {option}s
              </option>
            ))}
          </Select>
        </HStack>
        <ButtonBox>
          <Button {...transitionButtonStyles} onClick={onToggle}>
            Animate Collapse
          </Button>
        </ButtonBox>
      </VStack>
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionSix() {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleBounce = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 250);
  };

  const smileyVariants = {
    initial: {
      scale: 0.1,
    },
    bouncing: {
      scale: 1,
    },
  };

  const secondVariants = {
    initial: {
      scale: 0.1,
      rotate: 0,
    },
    bouncing: {
      scale: 1,
      rotate: 180,
    },
  };

  return (
    <SingleExample bg="background">
      <div>
        <ScaleFade in={!isBouncing} initialScale={0.1}>
          <motion.div
            className="ball"
            variants={isBouncing ? secondVariants : smileyVariants}
            initial="initial"
            animate="bouncing"
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 200,
            }}
          >
            <Button
              w="100px"
              h="100px"
              bg="accent_2"
              borderRadius="50%"
              border="2px solid white"
              onClick={handleBounce}
            >
              {isBouncing ? (
                <BsEmojiSmile size={50} />
              ) : (
                <BsEmojiSmile size={50} />
              )}
            </Button>
          </motion.div>
        </ScaleFade>
      </div>
    </SingleExample>
  );
}

/* ********************************************************************** */

const images = [
  "https://picsum.photos/id/123/200/300",
  "https://picsum.photos/id/222/200/300",
  "https://picsum.photos/id/444/200/300",
  "https://picsum.photos/id/555/200/300",
  "https://picsum.photos/id/111/200/300",
  "https://picsum.photos/id/23/200/300",
  "https://picsum.photos/id/33/200/300",
  "https://picsum.photos/id/53/200/300",
];

export function TransitionsFunctionSeven() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <VStack w="100%" align="center">
      <Fade key={currentImage} in={true} style={{ transitionDuration: "1s" }}>
        <Box
          w={{ base: "200px", lg: "175px" }}
          h={{ base: "300px", lg: "262.5px" }}
          bg={`url(${images[currentImage]})`}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="md"
        />
      </Fade>
      <Button size="sm" onClick={handleNextImage}>
        Next Image
      </Button>
    </VStack>
  );
}

/* ********************************************************************** */

export function TransitionsFunctionEight() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleToggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <VStack spacing={4}>
      <Button size="sm" onClick={handleToggleCard}>
        {isCardVisible ? "Close" : "Open"}
      </Button>
      <SlideFade in={isCardVisible}>
        <Box
          w={{ base: "100%", sm: "350px", lg: "100%" }}
          p={2}
          bg="accent_2"
          color="background"
          border="2px solid white"
          borderRadius="lg"
          boxShadow="xl"
          textAlign="center"
        >
          <Box fontSize="2xl" fontWeight="bold" mb={4}>
            A Creative Journey
          </Box>
          <Box>
            Imagine embarking on a journey through a vast spectrum of colors,
            discovering unique palettes that convey moods, themes, and
            narratives. From serene pastels that evoke tranquility to bold and
            energetic combinations that ignite passion, each palette tells a
            story of its own.
          </Box>
        </Box>
      </SlideFade>
    </VStack>
  );
}

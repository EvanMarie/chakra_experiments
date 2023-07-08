import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Code,
  Container,
  Flex,
  VStack,
  Text,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

import { SingleExample } from "~/styles/MainDesignComponents";

export function ContainerFunctionOne() {
  return (
    <SingleExample bg="background">
      <VStack w="350px%" spacing={4}>
        <Code fontSize="md">{`<Container w="300px">`}</Code>
        <Container w="300px">
          In a world where silver whispers dance, there exists a chinchilla
          named Chihiro. With a coat adorned in glistening hues, Chihiro brings
          a touch of enchantment to every moment. Graceful and serene, this
          furry companion captures hearts with its luminous eyes and delicate
          charm. In the twilight hours, Chihiro's playful spirit awakens,
          filling the air with joyful leaps and twinkling mischief. A radiant
          presence that illuminates our lives, Chihiro invites us to embrace the
          magic found within the company of a silver chinchilla.
        </Container>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ContainerFunctionTwo() {
  return (
    <SingleExample bg="background">
      <VStack w="100%">
        <Container maxW="md" bg="accent_1" color="background">
          <Code>{`maxW="md"`}</Code>
        </Container>
        <Container maxW="550px" bg="accent_2" color="background">
          <Code>{`maxW="550px"`}</Code>
        </Container>
        <Container maxW="20ch" bg="tipBackground" color="background">
          <Code>{`maxW="20ch"`}</Code>
        </Container>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ContainerFunctionThree() {
  return (
    <SingleExample bg="background">
      <Container maxW="xl" bg="gray.700" centerContent>
        <Box padding="4" bg="accent_2" color="background" maxW="md">
          Once upon a time, in a tranquil pond nestled amidst a lush green
          forest, there lived a little frog named George. George was a curious
          and adventurous frog, always eager to explore beyond the confines of
          his watery home. With each hop, he embarked on daring escapades,
          hopping from lily pad to lily pad, and occasionally venturing onto the
          moss-covered rocks at the pond's edge. George's vibrant emerald skin
          shimmered under the golden sunlight, captivating the eyes of those who
          crossed his path. One day, as George leaped through the air, a gentle
          breeze carried him to a distant meadow. Surrounded by colorful
          wildflowers and swaying grass, George marveled at the vastness of the
          world outside his pond. With newfound excitement in his heart, George
          vowed to continue his extraordinary journeys, eager to discover the
          wonders that awaited him beyond the confines of his watery abode. And
          so, the adventurous frog, George, leaped forward, his next adventure
          calling him to explore the unknown.
        </Box>
      </Container>
    </SingleExample>
  );
}

/* ********************************************************************** */

type HeroSectionProps = {
  onClose: () => void;
};

const HeroSection = ({ onClose }: HeroSectionProps) => {
  return (
    <Box
      h="100vh"
      w="100vw"
      bg="rgba(0, 0, 0, 0.8)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0"
      zIndex="9999"
    >
      <Box
        bg="accent_1"
        color="background"
        p="8"
        borderRadius="md"
        textAlign="center"
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome to I♥️Components!
        </Text>
        <IconButton
          icon={<CloseIcon />}
          colorScheme="white"
          variant="ghost"
          position="absolute"
          top="1rem"
          right="1rem"
          onClick={onClose}
          aria-label="Close"
        />
      </Box>
      <Box
        position="absolute"
        bottom="2rem"
        left="50%"
        transform="translateX(-50%)"
      >
        <Button variant="outline" color="tipBackground" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Box>
  );
};

export function InteractiveHeroSection() {
  const [showHero, setShowHero] = useState(false);

  const handleButtonClick = () => {
    setShowHero(true);
  };

  const handleClose = () => {
    setShowHero(false);
  };

  return (
    <Container maxW="80ch">
      <Flex direction="column" alignItems="center">
        <Button onClick={handleButtonClick} mt="4">
          Show Hero Section
        </Button>
        {showHero && <HeroSection onClose={handleClose} />}
      </Flex>
    </Container>
  );
}

/* ********************************************************************** */

const boxDefaults = {
  w: "100%",
  p: 4,
  borderRadius: "md",
  color: "background",
};
export function PriceTable() {
  return (
    <SingleExample bg="background" paddingX={1}>
      <Container maxW="30ch" centerContent>
        <VStack w="100%" spacing={4}>
          {/* Plan 1 */}
          <Box {...boxDefaults} bg="cyan.100">
            <Text fontSize="lg" fontWeight="bold">
              Basic Plan
            </Text>
            <Text mt="2" color="gray.800">
              Perfect for starters
            </Text>
            <Text mt="4" fontSize="xl" fontWeight="bold">
              $9.99/mo
            </Text>
            <Button mt="4" size="sm">
              Get Started
            </Button>
          </Box>

          {/* Plan 2 */}
          <Box {...boxDefaults} bg="cyan.300">
            <Text fontSize="lg" fontWeight="bold">
              Pro Plan
            </Text>
            <Text mt="2" color="gray.800">
              Ideal for professionals
            </Text>
            <Text mt="4" fontSize="xl" fontWeight="bold">
              $19.99/mo
            </Text>
            <Button size="sm" mt="4">
              Get Started
            </Button>
          </Box>

          {/* Plan 3 */}
          <Box {...boxDefaults} bg="cyan.500">
            <Text fontSize="lg" fontWeight="bold" textShadow="2xl">
              Premium Plan
            </Text>
            <Text mt="2" color="gray.800">
              For advanced users
            </Text>
            <Text mt="4" fontSize="xl" fontWeight="bold">
              $29.99/mo
            </Text>
            <Button size="sm" mt="4">
              Get Started
            </Button>
          </Box>
        </VStack>
      </Container>
    </SingleExample>
  );
}

/* ********************************************************************** */
export function BlogPost() {
  return (
    <Container maxW="80ch">
      <Box p={2} bg="mainText" boxShadow="md" borderRadius="md">
        <Heading as="h3" fontSize="xl" mb="4" color="background">
          The Secrets of Time Travel Revealed
        </Heading>
        <Text color="gray.600">
          Have you ever wondered what it would be like to travel through time?
          In this blog post, we'll uncover the mysteries behind time travel and
          explore its implications for the future. Buckle up, as we delve into
          the science, theories, and mind-bending paradoxes that accompany this
          fascinating concept.
        </Text>
        <Button mt="2" size="sm">
          Read More
        </Button>
      </Box>
    </Container>
  );
}

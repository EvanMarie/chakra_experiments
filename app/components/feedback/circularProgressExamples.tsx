import { ChangeEvent, useEffect, useState } from "react";
import {
  CircularProgress,
  Box,
  Image,
  Button,
  VStack,
  Text,
  CircularProgressLabel,
  Input,
} from "@chakra-ui/react";
import { HighlightExample, MyFlex } from "~/styles/MainDesignComponents";

export function CircularProgressTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => (seconds === 100 ? 0 : seconds + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress
        value={seconds}
        size="100px"
        color="cyan.300"
        trackColor="#444444"
      />
    </Box>
  );
}

export function CircularProgressImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate a delay using setTimeout
  const loadImage = () => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <VStack w="100%">
      <Box position="relative">
        {!isLoaded && (
          <MyFlex h="200px" w="200px" bg="white">
            <CircularProgress
              isIndeterminate
              alignSelf="center"
              trackColor="#444444"
              color="cyan"
            />
          </MyFlex>
        )}
        {isLoaded && (
          <MyFlex h="200px">
            <Image
              src="https://generative-placeholders.glitch.me/image?width=200&height=200&style=123&colors=57"
              alt="Example"
            />
          </MyFlex>
        )}
      </Box>

      <Button onClick={loadImage} mt={1} bg="accent_1" size="sm">
        Reload Image
      </Button>
    </VStack>
  );
}

export function ScoreIndicator() {
  const [score, setScore] = useState(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newScore = parseInt(event.target.value);
    if (!isNaN(newScore) && newScore >= 0 && newScore <= 100) {
      setScore(newScore);
    }
  };

  return (
    <HighlightExample paddingY={1} paddingX={4}>
      <VStack spacing={1} align="center">
        <h2>Your score </h2>
        <CircularProgress
          value={score}
          size="100px"
          color="pink.600"
          trackColor="lightgray"
        >
          <CircularProgressLabel>{score}%</CircularProgressLabel>
        </CircularProgress>
        <Input
          type="number"
          placeholder="Enter score (0 - 100)"
          onChange={handleInputChange}
          textAlign="center"
          bg="lightgray"
          color="black"
          marginTop="2px"
          width="175px"
          p={1}
        />
      </VStack>
    </HighlightExample>
  );
}

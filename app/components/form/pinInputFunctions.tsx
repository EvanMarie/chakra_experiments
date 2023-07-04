import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Code,
  HStack,
  PinInput,
  PinInputField,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import { pinInputStyles } from "./pinInputComponents";
import { useEffect, useRef, useState } from "react";
import { BasicText } from "~/styles/DesignComponents";

export function PinInputFunctionOne() {
  const sizes = ["xs", "sm", "md", "lg"];

  return (
    <SingleExample bg="background">
      <VStack alignItems="left" spacing={4}>
        {sizes.map((size) => (
          <Stack
            key={size}
            direction={["column", "row"]}
            justify={["center", "flex-start"]}
            align={["center", "flex-start"]}
            spacing={[2, 4]}
          >
            <Box>
              <Code fontSize={["sm", "md"]}>{`size="${size}"`}</Code>
            </Box>
            <HStack>
              <PinInput size={size}>
                <PinInputField sx={pinInputStyles} />
                <PinInputField sx={pinInputStyles} />
                <PinInputField sx={pinInputStyles} />
                <PinInputField sx={pinInputStyles} />
              </PinInput>{" "}
            </HStack>
          </Stack>
        ))}
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

interface QuizAnswerFieldProps {
  correctAnswer: string;
  validateAnswer: (answer: string) => void;
  pinValue: string;
  setPinValue: React.Dispatch<React.SetStateAction<string>>;
}

function QuizAnswerField({
  correctAnswer,
  validateAnswer,
  pinValue,
  setPinValue,
}: QuizAnswerFieldProps) {
  return (
    <HStack>
      <PinInput
        size="md"
        value={pinValue}
        onChange={setPinValue}
        onComplete={validateAnswer}
      >
        {Array(correctAnswer.length)
          .fill(null)
          .map((_, index) => (
            <PinInputField key={index} sx={pinInputStyles} />
          ))}
      </PinInput>
    </HStack>
  );
}

export function PinInputFunctionTwo() {
  const correctAnswer = "2023";
  const [userAnswer, setUserAnswer] = useState("");
  const [pinValue, setPinValue] = useState(""); // added this
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

  const validateAnswer = (answer: string) => {
    setUserAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  const resetQuiz = () => {
    // modified this
    setUserAnswer("");
    setIsCorrect(null);
    setPinValue("");
  };

  return (
    <SingleExample>
      <VStack spacing={3}>
        <h3>In what year was this site made?</h3>
        <QuizAnswerField
          correctAnswer={correctAnswer}
          validateAnswer={validateAnswer}
          pinValue={pinValue}
          setPinValue={setPinValue}
        />
        <Box h="50px">
          {userAnswer && (
            <Alert color="background" status={isCorrect ? "success" : "error"}>
              <AlertIcon />
              {isCorrect ? "Correct Answer" : "Wrong Answer"}
            </Alert>
          )}
        </Box>
        <Button size="sm" onClick={resetQuiz}>
          Reset
        </Button>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function PinInputFunctionFour() {
  const [remainingTime, setRemainingTime] = useState(23); // Set the initial countdown time
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [remainingTime]);

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleReset = () => {
    setOtp("");
    setRemainingTime(23);
  };

  return (
    <VStack spacing={4}>
      <HStack>
        <PinInput
          value={otp}
          onChange={handleOtpChange}
          type="alphanumeric"
          size="md"
        >
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
        </PinInput>
      </HStack>
      <Text fontSize="15px" fontWeight="bold" color="accent_2">
        {remainingTime === 0
          ? "Oh no! OTP expired!"
          : `Time remaining: ${remainingTime}s`}
      </Text>
      <Button size="sm" onClick={handleReset}>
        Reset
      </Button>
    </VStack>
  );
}

/* ********************************************************************** */

export function PinInputFunctionFive() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (value: string) => {
    const strength = calculateStrength(value);
    setPasswordStrength(strength);
  };

  const calculateStrength = (value: string) => {
    const patternScore = calculatePatternScore(value);
    const mixingScore = calculateMixingScore(value);

    // Calculate the overall strength based on pattern and mixing scores
    const strength = (patternScore + mixingScore) / 2;

    return strength;
  };

  const calculatePatternScore = (value: string) => {
    const hasNumbers = /\d/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);

    let patternScore = 0;

    // Assign pattern scores based on the presence of numbers, uppercase letters, and lowercase letters
    if (hasNumbers) {
      patternScore += 1;
    }
    if (hasUppercase) {
      patternScore += 1;
    }
    if (hasLowercase) {
      patternScore += 1;
    }

    return patternScore * 33.33; // Scale the pattern score to a 0-100 scale
  };

  const calculateMixingScore = (value: string) => {
    const uniqueChars = new Set(value);
    const mixingScore = (uniqueChars.size / value.length) * 100;

    return mixingScore; // Return the mixing score as it is already in a 0-100 scale
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    calculatePasswordStrength(value);
  };

  return (
    <SingleExample>
      <HStack spacing={1}>
        <PinInput
          type="alphanumeric"
          value={password}
          onChange={handlePasswordChange}
          size={{ base: "sm", sm: "md", lg: "xs" }}
        >
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
          <PinInputField sx={pinInputStyles} />
        </PinInput>
      </HStack>
      <Progress mt={2} value={passwordStrength} sx={{ width: "100%" }} />
      <Text mt={2}>Password Strength: {passwordStrength}%</Text>
    </SingleExample>
  );
}

import {
  Progress,
  HStack,
  Button,
  VStack,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { ButtonStyles, MyDivider } from "~/styles/DesignComponents";
import { HighlightExample } from "~/styles/MainDesignComponents";

export function CountdownProgressBar() {
  const ONE_HUNDRED_PERCENT = 100;
  const [totalSeconds, setTotalSeconds] = useState(10);
  const [value, setValue] = useState(ONE_HUNDRED_PERCENT);
  const [currentSecond, setCurrentSecond] = useState(totalSeconds);
  const intervalRef = useRef<number>();

  useEffect(() => {
    setCurrentSecond(totalSeconds);
    resetProgress();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [totalSeconds]);

  useEffect(() => {
    if (value <= 0) {
      clearInterval(intervalRef.current);
    }
    setCurrentSecond(Math.round((value * totalSeconds) / ONE_HUNDRED_PERCENT));
  }, [value]);

  const startProgress = () => {
    intervalRef.current = window.setInterval(() => {
      setValue((oldValue) => oldValue - ONE_HUNDRED_PERCENT / totalSeconds);
    }, 1000);
  };

  const resetProgress = () => {
    clearInterval(intervalRef.current);
    setValue(ONE_HUNDRED_PERCENT);
    setCurrentSecond(totalSeconds);
    startProgress();
  };

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTotalSeconds(Number(event.target.value));
  };

  return (
    <HighlightExample h="185px">
      <VStack spacing={3} w="100%">
        <Box>
          <Text>Countdown from:</Text>
          <Input
            type="number"
            placeholder="Total seconds"
            value={totalSeconds}
            onChange={handleSecondsChange}
            size="sm"
            w="100px"
          />
        </Box>
        <MyDivider mt={0} mb={0} />
        <VStack width="100%" spacing={1}>
          <HStack w="100%">
            <Box w="25%" justifyContent="center">
              <Text textAlign="center">{currentSecond}s</Text>
            </Box>
            <Box w="75%" justifyContent="center" alignItems="center">
              <Progress value={value} colorScheme="pink" width="100%" />
            </Box>
          </HStack>

          <Button sx={ButtonStyles} onClick={resetProgress} size="sm">
            Reset
          </Button>
        </VStack>
      </VStack>
    </HighlightExample>
  );
}

export function DynamicProgressBar() {
  const [value, setValue] = useState(0);
  const intervalRef = useRef<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        let newValue = oldValue + 10;
        if (newValue > 100) {
          clearInterval(interval);
          return 100;
        }
        return newValue;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const resetProgress = () => {
    clearInterval(intervalRef.current);
    setValue(0);
  };

  return (
    <HighlightExample h="90px">
      <VStack w="100%" spacing={4}>
        <Progress w="90%" value={value} colorScheme="cyan" />
        <Button sx={ButtonStyles} size="sm" onClick={resetProgress}>
          Reset
        </Button>
      </VStack>
    </HighlightExample>
  );
}

export function StepsProgressBar() {
  const steps = 6;
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((oldStep) => Math.min(oldStep + 1, steps));
  };

  const prevStep = () => {
    setCurrentStep((oldStep) => Math.max(oldStep - 1, 1));
  };

  const value = (currentStep / steps) * 100;

  return (
    <HighlightExample h="100px">
      <VStack w="100%">
        <HStack w="100%" textAlign="center">
          <Text w="20%">
            {currentStep} / {steps}
          </Text>
          <Progress w="80%" value={value} colorScheme="pink" />
        </HStack>
        <HStack spacing={3}>
          <Button
            sx={ButtonStyles}
            size="sm"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button
            sx={ButtonStyles}
            size="sm"
            onClick={nextStep}
            disabled={currentStep === steps}
          >
            Next
          </Button>
        </HStack>
      </VStack>
    </HighlightExample>
  );
}

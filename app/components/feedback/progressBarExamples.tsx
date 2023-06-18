import { Progress, Button, VStack, Input, Box, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

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
    setCurrentSecond(Math.round(value * totalSeconds / ONE_HUNDRED_PERCENT));
  }, [value]);

  const startProgress = () => {
    intervalRef.current = window.setInterval(() => {
      setValue((oldValue) => oldValue - ONE_HUNDRED_PERCENT / totalSeconds)
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
    <VStack spacing={4}>
      <Input
        type="number"
        placeholder="Total seconds"
        value={totalSeconds}
        onChange={handleSecondsChange}
      />
      <Box width="150px">
        <Progress value={value} colorScheme="pink" width="100%" />
        <Text textAlign="right">{currentSecond}s</Text>
      </Box>
      <Button onClick={resetProgress} size="sm">
        Reset
      </Button>
    </VStack>
  );
}

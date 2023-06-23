import {
  Button,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MyFlex } from "~/styles/MainDesignComponents";
import { RxWidth } from "react-icons/rx";
import { ButtonStyles } from "~/styles/DesignComponents";

export function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <Button
      sx={ButtonStyles}
      w="80px"
      onClick={handleClick}
      isLoading={isLoading}
      loadingText=""
    >
      {isLoading ? <Spinner color="white" w="80px" /> : "Submit"}
    </Button>
  );
}

/* ********************************************************************* */

interface ScoreSpinnerProps {
  score: number;
}

export function ScoreSpinner({ score }: ScoreSpinnerProps) {
  let color = "lime";
  if (score > 70) color = "lime";
  else if (score > 60) color = "cyan";
  else if (score > 40) color = "yellow";
  else if (score > 30) color = "orange";
  else color = "red";

  return <Spinner color={color} size="xl" />;
}

export function ScoreSlider() {
  const [score, setScore] = useState(50);

  return (
    <VStack spacing={3}>
      <ScoreSpinner score={score} />

      <h3>Your score is: {score}</h3>

      <Box w="175px">
        <Slider
          min={0}
          max={100}
          step={1}
          value={score}
          onChange={(value) => setScore(value)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </VStack>
  );
}

/* ********************************************************************* */
interface ColorSchemeSpinnerProps {
  colorScheme: string;
  thickness: number;
}

const ColorSchemeSpinner = ({
  colorScheme,
  thickness,
}: ColorSchemeSpinnerProps) => {
  const color = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.200`);

  return (
    <Box display="flex" justifyContent="center">
      <Spinner
        color={color}
        size="xl"
        thickness={`${thickness}px`}
        p={0}
        m={0}
      />
    </Box>
  );
};

export function SpinnerTabs() {
  const [thickness, setThickness] = useState(4);
  const colorSchemes = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
  ];

  return (
    <Box
      w="100%"
      maxWidth="400px"
      h="350px"
      bg="background"
      color="white"
      p={2}
    >
      <Tabs colorScheme="cyan" orientation="vertical" size="sm" isLazy>
        <TabList overflowY="auto" maxH="350px">
          {colorSchemes.map((colorScheme) => (
            <Tab key={colorScheme}>{colorScheme}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {colorSchemes.map((colorScheme) => (
            <TabPanel key={colorScheme} h="100%" p={0} m={0}>
              <MyFlex w="100%" h="100%">
                <VStack w="100%" h="100%" spacing={5} alignItems="space-around">
                  <MyFlex
                    bg="white"
                    h="110px"
                    justify="center"
                    align="center"
                    p={0}
                    m={0}
                  >
                    <ColorSchemeSpinner
                      colorScheme={colorScheme}
                      thickness={thickness}
                    />
                  </MyFlex>
                  <MyFlex
                    bg="gray.800"
                    h="110px"
                    justify="center"
                    align="center"
                    p={0}
                    m={0}
                  >
                    <ColorSchemeSpinner
                      colorScheme={colorScheme}
                      thickness={thickness}
                    />
                  </MyFlex>
                </VStack>
              </MyFlex>
              <Box paddingRight={3}>
                <Slider
                  aria-label="slider-ex-5"
                  value={thickness}
                  onChange={setThickness}
                  min={1}
                  max={12}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="cyan.400" as={RxWidth} />
                  </SliderThumb>
                </Slider>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

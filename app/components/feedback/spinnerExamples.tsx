import {
  Button,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  SimpleGrid,
  Text,
  useBoolean,
  VStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { HighlightExample, MyFlex } from "~/styles/MainDesignComponents";

export function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <Button w="80px" onClick={handleClick} isLoading={isLoading} loadingText="">
      {isLoading ? <Spinner color="white" w="80px" /> : "Submit"}
    </Button>
  );
}

interface ScoreSpinnerProps {
  score: number;
}

export function ScoreSpinner({ score }: ScoreSpinnerProps) {
  let color = "gray.300";
  if (score > 70) color = "green.500";
  else if (score > 40) color = "orange.500";
  else color = "red.500";

  return <Spinner color={color} size="xl" />;
}

export function SpinnerGrid() {
  const [showSpinners, setShowSpinners] = useBoolean(false);

  const colorSchemes = [
    "whiteAlpha",
    "blackAlpha",
    "linkedin",
    "facebook",
    "messenger",
    "whatsapp",
    "twitter",
    "telegram",
  ];

  return (
    <Box w="%100%" h="450px">
      <VStack w="100%" spacing={4}>
        <Button onClick={setShowSpinners.toggle}>
          {showSpinners ? "Hide Spinners" : "Show Spinners"}
        </Button>
        {showSpinners && (
          <SimpleGrid columns={2} spacing={2} w="100%">
            {colorSchemes.map((colorScheme) => (
              <Box key={colorScheme} textAlign="center">
                <Spinner colorScheme={colorScheme} size="xl" />
                <Text mt={2}>{colorScheme}</Text>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Box>
  );
}

interface ColorSchemeSpinnerProps {
  colorScheme: string;
}

const ColorSchemeSpinner = ({ colorScheme }: ColorSchemeSpinnerProps) => {
  const color = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.200`);

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Spinner color={color} size="xl" thickness="4px" />
    </Box>
  );
};

export function SpinnerTabs() {
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
    <Box w="100%" h="300px" bg="gray.700" color="white" p={2}>
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
                    <ColorSchemeSpinner colorScheme={colorScheme} />
                  </MyFlex>
                  <MyFlex
                    bg="gray.800"
                    h="110px"
                    justify="center"
                    align="center"
                    p={0}
                    m={0}
                  >
                    <ColorSchemeSpinner colorScheme={colorScheme} />
                  </MyFlex>
                </VStack>
              </MyFlex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

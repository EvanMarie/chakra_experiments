import {
  Box,
  Button,
  Checkbox,
  Flex,
  Progress,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Tooltip,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import { SingleExample } from "~/styles/MainDesignComponents";
import "~/styles/global.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState } from "react";
import { ButtonStyles } from "~/styles/DesignComponents";

const stepperSizes = { base: "sm", sm: "md", md: "md", lg: "lg" };
const steps = [
  { title: "First", description: "Welcome" },
  { title: "Second", description: "Overview" },
  { title: "Third", description: "Sign up" },
];

export function StepperFunctionOne() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <SingleExample bg="background">
      <Stepper index={activeStep} size={stepperSizes} w="100%">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription style={{ color: "white" }}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionTwo() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <SingleExample bg="background">
      <Stepper size={stepperSizes} index={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription style={{ color: "white" }}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionThree() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <SingleExample bg="background">
      <Stepper w="100%" index={activeStep} size={stepperSizes}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription style={{ color: "white" }}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionFour() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <SingleExample bg="background">
      <Stepper
        w="100%"
        index={activeStep}
        colorScheme="pink"
        size={stepperSizes}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription style={{ color: "white" }}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionFive() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <SingleExample bg="background">
      <Stepper
        w="100%"
        size={stepperSizes}
        colorScheme="yellow"
        index={activeStep}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={`👍`} incomplete={`❓`} active={`➡️`} />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription style={{ color: "white" }}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionSix() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <SingleExample bg="background">
      <Stepper size={stepperSizes} index={activeStep} w="100%">
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription style={{ color: "white" }}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function StepperFunctionSeven() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <SingleExample>
      <Box position="relative" w="100%">
        <Stepper size={stepperSizes} index={activeStep} gap="0" w="100%">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator bg="white" zIndex={1}>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
            </Step>
          ))}
        </Stepper>
        <Progress
          value={progressPercent}
          position="absolute"
          height="3px"
          width="full"
          top="10px"
          zIndex={0}
        />
      </Box>
    </SingleExample>
  );
}

/* ********************************************************************** */
export function StepperFunctionEight() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0, // starting at the first step
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  return (
    <SingleExample>
      <Stack w="100%">
        <Stepper size={stepperSizes} index={activeStep} gap="0" w="100%">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Text>
          {steps[activeStep].title}: <b>{activeStepText}</b>
        </Text>
      </Stack>
    </SingleExample>
  );
}

/* ********************************************************************** */

const tipStepperSizes = { base: "sm", sm: "md", md: "md", lg: "xs" };

export function StepperTipOne() {
  const steps = [
    {
      title: "Step 1",
      description: "Size",
    },
    {
      title: "Step 2",
      description: "Toppings",
    },
    {
      title: "Step 3",
      description: "Buy",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [skipExtras, setSkipExtras] = useState(false);

  const nextStep = () => {
    if (activeStep === 2 && skipExtras) {
      setActiveStep(4);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Flex h="100%" w="100%" alignItems="flex-start" justifyContent="flex-start">
      <VStack w="100%" spacing={3} alignSelf="center" justifySelf="flex-start">
        <Stepper size={tipStepperSizes} index={activeStep} colorScheme="pink">
          {steps.map((step, index) => (
            <Step key={index}>
              <VStack w="33%">
                <StepIndicator mr="0px">
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <Box flexShrink="0" textAlign="center">
                  <StepTitle>{step.title}</StepTitle>
                </Box>
              </VStack>
            </Step>
          ))}
        </Stepper>
        <Button
          sx={ButtonStyles}
          size={{ base: "sm", md: "md", lg: "xs" }}
          onClick={nextStep}
        >
          Next
        </Button>

        {activeStep === 2 && (
          <Box position="relative" w="100%">
            <Flex h="40px" position="absolute" left="0" top="0">
              <Checkbox onChange={(e) => setSkipExtras(e.target.checked)}>
                <Text fontSize="1rem">Skip Extras</Text>
              </Checkbox>
            </Flex>
          </Box>
        )}
      </VStack>
    </Flex>
  );
}

/* ********************************************************************** */

export function StepperTipTwo() {
  const steps = [
    {
      title: "Step 1",
      description: "Size",
      tooltip: "Choose your preferred pizza size.",
    },
    {
      title: "Step 2",
      description: "Toppings",
      tooltip: "Add your favorite toppings.",
    },
    {
      title: "Step 3",
      description: "Buy",
      tooltip: "Proceed to checkout and buy your pizza.",
    },
  ];
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Stepper
      colorScheme="pink"
      size={tipStepperSizes}
      index={activeStep}
      gap="0"
      w="100%"
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <Tooltip
            label={step.tooltip}
            placement="top"
            bg="accent_2"
            borderRadius="md"
            color="black"
          >
            <Box>
              <Box>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
              </Box>

              <Box>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription style={{ color: "white" }}>
                  {step.description}
                </StepDescription>
              </Box>
            </Box>
          </Tooltip>
        </Step>
      ))}
    </Stepper>
  );
}

/* ********************************************************************** */

interface TipStepperThreeProps {
  initialSteps: { title: string; description: string }[];
}

export function TipStepperThree({ initialSteps }: TipStepperThreeProps) {
  const [steps, setSteps] = useState(initialSteps);
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const addStep = () => {
    const newStep = {
      title: `Step ${steps.length + 1}`,
      description: `New Step`,
    };
    setSteps([...steps, newStep]);
  };

  return (
    <Box>
      <Stepper
        index={activeStep}
        orientation="vertical"
        colorScheme="pink"
        size={tipStepperSizes}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Button
        sx={ButtonStyles}
        size={{ base: "sm", md: "md", lg: "xs" }}
        onClick={addStep}
      >
        Add Step
      </Button>
    </Box>
  );
}

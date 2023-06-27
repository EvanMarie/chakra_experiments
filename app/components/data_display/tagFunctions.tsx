import { SingleExample } from "~/styles/MainDesignComponents";
import React, { useState } from "react";
import {
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
  Button,
  VStack,
  Box,
  Text,
  SimpleGrid,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ButtonStyles } from "~/styles/DesignComponents";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function TagFunctionOne() {
  const initialTags = ["One", "Two", "Three"];
  const [tags, setTags] = useState(initialTags);
  const handleClose = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleReset = () => {
    setTags(initialTags);
  };

  return (
    <SingleExample bg="background">
      <VStack w="100%">
        <Box h="40%">
          <HStack spacing={2}>
            {tags.map((tag, index) => (
              <Tag
                size="md"
                key={index}
                borderRadius="full"
                variant="solid"
                colorScheme="red"
              >
                <TagLabel>Close me!</TagLabel>
                <TagCloseButton onClick={() => handleClose(tag)} />
              </Tag>
            ))}
          </HStack>
        </Box>
        <Box h="60%">
          <Button sx={ButtonStyles} onClick={handleReset} mt={4}>
            Reset Tags
          </Button>
        </Box>
      </VStack>
    </SingleExample>
  );
}

/* ********************************************************************** */

export function ProgressIndicator() {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <HStack spacing={4}>
        {steps.map((step, index) => (
          <Tag
            size={{ base: "md", md: "lg", lg: "sm" }}
            key={index}
            variant={currentStep === index ? "solid" : "outline"}
            color="accent_1"
            textAlign="center"
          >
            {step}
          </Tag>
        ))}
      </HStack>
      <HStack mt={4}>
        <Button
          sx={ButtonStyles}
          size="sm"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          sx={ButtonStyles}
          size="sm"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
      </HStack>
    </>
  );
}

/* ********************************************************************** */

export function Blog() {
  const [activeTag, setActiveTag] = useState("Filter by Tag");

  const tags = ["JavaScript", "React", "Chakra UI", "OpenAI"];

  const blogPosts = [
    { title: "JavaScript Essentials", tag: "JavaScript" },
    { title: "Getting Started with React", tag: "React" },
    { title: "Introduction to Chakra UI", tag: "Chakra UI" },
    { title: "OpenAI and Machine Learning", tag: "OpenAI" },
    { title: "JavaScript Arrays and Objects", tag: "JavaScript" },
    { title: "Mastering React Hooks", tag: "React" },
    { title: "Chakra UI and Styled System", tag: "Chakra UI" },
    { title: "Deep Learning and Neural Networks", tag: "OpenAI" },
    { title: "React Hooks and Functional Components", tag: "React" },
    // More posts...
  ];

  const filteredPosts = blogPosts.filter(
    (post) => activeTag === "All" || post.tag === activeTag
  );

  return (
    <>
      <HStack w="100%" alignItems="flex-start">
        <VStack
          h="100%"
          alignItems="flex-start"
          justifyContent="flex-start"
          paddingY={0}
        >
          {tags.map((tag, index) => (
            <Tag
              size="sm"
              key={index}
              variant={activeTag === tag ? "solid" : "outline"}
              color="accent_2"
              onClick={() => setActiveTag(tag)}
              mr={1}
              mb={2}
            >
              {tag}
            </Tag>
          ))}
        </VStack>

        <Box overflowY="auto" h="235px%">
          {filteredPosts.map((post, index) => (
            <HStack>
              <ArrowForwardIcon />
              <Text
                mb={1}
                key={index}
                fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "11px" }}
                lineHeight="1rem"
              >
                {post.title}
              </Text>
            </HStack>
          ))}
        </Box>
      </HStack>
    </>
  );
}

/* ********************************************************************** */

export function ProductFeatures() {
  const features = [
    { title: "Feature 1", content: "This is the detail of Feature 1." },
    { title: "Feature 2", content: "This is the detail of Feature 2." },
    { title: "Feature 3", content: "This is the detail of Feature 3." },
    { title: "Feature 4", content: "This is the detail of Feature 4." },
    // More features...
  ];

  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <VStack align="start" spacing={4}>
      <Box>
        {features.map((feature, index) => (
          <Tag
            size="md"
            key={index}
            variant={
              activeFeature.title === feature.title ? "solid" : "outline"
            }
            color="accent_1"
            onClick={() => setActiveFeature(feature)}
            mr={2}
            mb={2}
          >
            {feature.title}
          </Tag>
        ))}
      </Box>

      <Box p={4} borderWidth={1} borderRadius="md" w="100%">
        <Heading size="md" mb={2}>
          {activeFeature.title}
        </Heading>
        <Text>{activeFeature.content}</Text>
      </Box>
    </VStack>
  );
}

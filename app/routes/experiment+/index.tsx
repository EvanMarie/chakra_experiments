import { Box, Text } from "@chakra-ui/react";
import { Highlighter } from "~/components/styling/highlighter";

const ExperimentIndex = () => {
  return (
    <Box>
      <Text>This is a test of my new system.</Text>
      <Highlighter>{`Testing`}</Highlighter>
    </Box>
  );
};

export default ExperimentIndex;

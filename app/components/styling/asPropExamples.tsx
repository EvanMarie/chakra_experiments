import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { MyFlex } from "~/styles/MainDesignComponents";

export function AsPropBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MyFlex p={0} mb={0} h="125px" w="200px" justifyContent="flex-start">
      <Box
        as="button"
        p={2}
        color="white"
        backgroundColor="teal.500"
        borderRadius="sm"
        _hover={{ backgroundColor: "teal.600" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Click Me
      </Box>
      {isOpen && (
        <Box
          border="1px solid"
          borderColor="gray.200"
          p="2"
          mt="4"
          rounded="md"
        >
          This is a message in a box!
        </Box>
      )}
    </MyFlex>
  );
}

interface CustomAsPropComponentProps {
  children: React.ReactNode;
}

export function CustomAsPropComponent({
  children,
}: CustomAsPropComponentProps) {
  return (
    <span style={{ color: "darkText", fontWeight: "bold" }}>{children}</span>
  );
}

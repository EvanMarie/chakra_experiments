import { useState } from "react";
import { MyFlex } from "~/styles/MainDesignComponents";
import { Box, List, ListItem, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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

export function AsPropList() {
  const navItems = ["Home", "About", "Contact"];

  return (
    <MyFlex>
      <List display="flex" justifyContent="space-between" width="200px">
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            bg="accent_1"
            paddingY={2}
            paddingX={2}
            fontWeight="bold"
            borderRadius="sm"
            as={RouterLink}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </MyFlex>
  );
}

import { Box, Flex, Link } from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { MyButton } from "~/styles/reusableChakraComponents";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Chakra UI Work" },
    {
      name: "description",
      content: "Mixing Chakra learning and Remix Learning!",
    },
  ];
};

export default function Index() {
  return (
    <Box p={4} maxW="100%" bg="#333333" color="white">
      <Flex justifyContent={"center"}>
        <Box p={1} width="800px" display="flex" flexDirection="column">
          <MyButton label="Styling" href="/chakra_styling" />
        </Box>
      </Flex>
    </Box>
  );
}

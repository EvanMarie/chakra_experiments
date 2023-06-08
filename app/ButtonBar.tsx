import { Box } from "@chakra-ui/react";
import { MyButton } from "~/styles/reusableChakraComponents";

function ButtonBar() {
  return (
    <Box
      w="100%"
      h="75px"
      borderRadius="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <MyButton label="Main" href="/" />
      <MyButton label="Styling Basics" href="/chakra_styling_basic" />
      <MyButton label="Display" href="/chakra_styling_display" />
      <MyButton label="Borders" href="/chakra_styling_borders" />
    </Box>
  );
}

export default ButtonBar;

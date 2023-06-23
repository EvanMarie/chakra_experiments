import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonStyles, colors } from "~/styles/DesignComponents";

function ToggleBox() {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div>
      <Button onClick={toggleBox} sx={ButtonStyles} color="black">
        {showBox ? "Ciao, box!" : "Voilà, a box!"}
      </Button>

      {showBox && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          p={5}
          width="200px"
          height="100px"
          textAlign="center"
          borderRadius="sm"
          boxShadow="lg"
          bg={colors.mypurple}
          color="white"
        >
          I'm an absolutely positioned box
        </Box>
      )}
    </div>
  );
}

export default ToggleBox;

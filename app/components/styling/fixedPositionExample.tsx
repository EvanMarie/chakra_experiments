import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "~/styles/DesignComponents";

function ToggleFixedBox() {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div>
      <Button onClick={toggleBox} bg={colors.mainAccent2} color="black">
        {showBox ? "Ciao, box!" : "Fixed position box, appear!"}
      </Button>

      {showBox && (
        <Box
          position="fixed"
          bottom="0"
          right="0"
          p={5}
          width="200px"
          height="100px"
          textAlign="center"
          borderRadius="sm"
          boxShadow="lg"
          bg={colors.mypurple}
          color="white"
        >
          I'm a fixed position box at the bottom right.
        </Box>
      )}
    </div>
  );
}

export default ToggleFixedBox;

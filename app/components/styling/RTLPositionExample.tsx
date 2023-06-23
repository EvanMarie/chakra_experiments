import { Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonStyles } from "~/styles/DesignComponents";

function ToggleBox() {
  const [showBox, setShowBox] = useState(false);
  const [isRTL, setIsRTL] = useState(false); // start as LTR

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const toggleRTL = () => {
    setIsRTL(!isRTL); // toggle between RTL and LTR
  };

  return (
    <VStack>
      <Button sx={ButtonStyles} onClick={toggleBox}>
        {showBox ? "Hide Box" : "Show Box"}
      </Button>

      <Button sx={ButtonStyles} onClick={toggleRTL} m={1}>
        {isRTL ? "Change to LTR" : "Change to RTL"}
      </Button>

      {showBox && (
        <Box
          position="absolute"
          p={2}
          marginX={2}
          marginY={-10}
          bg="accent_2"
          color="background"
          {...(isRTL ? { right: "0" } : { left: "0 " })}
        >
          I'm a box positioned based on text direction.
        </Box>
      )}
    </VStack>
  );
}

export default ToggleBox;

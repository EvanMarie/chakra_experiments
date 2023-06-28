import { Box, VStack, Skeleton } from "@chakra-ui/react";
import {
  BigBackgroundBox,
  MyFlex,
  MyLabel,
} from "~/styles/MainDesignComponents";
import { useState, useEffect } from "react";

const boxSizes = {
  base: "300px",
  sm: "400px",
  md: "500px",
  lg: "600px",
};

const outerBoxStyles = {
  boxSize: boxSizes,
  p: "10",
  marginTop: "5px",
  borderRadius: "lg",
  backgroundImage: `url(https://generative-placeholders.glitch.me/image?width=800&height=800&style=circles&colors=15)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const innerBoxStyles = {
  display: "flex",
  p: "40px",
  borderRadius: "lg",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxSize: "full",
  color: "mainText",
  textShadow: "0 0 20px black",
  fontWeight: "bold",
  fontSize: "20px",
};

export default function ChakraFeedback() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://generative-placeholders.glitch.me/image?width=800&height=800&style=circles&colors=15";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <BigBackgroundBox>
      <MyLabel link="https://chakra-ui.com/docs/components" lineHeight="1">
        I'm currently being created.
      </MyLabel>
      <MyFlex>
        <Skeleton
          startColor="background"
          borderRadius="lg"
          endColor="accent_1"
          isLoaded={imageLoaded}
        >
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="8px">
              <VStack>
                <h1>I'm on my way!</h1>
                <h2>So check back soon.</h2>
                <h3>Meanwhile, please visit the rest of the site.</h3>
              </VStack>
            </Box>
          </Box>
        </Skeleton>
      </MyFlex>
    </BigBackgroundBox>
  );
}

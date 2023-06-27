import { Box } from "@chakra-ui/react";
import { IHeartComponents } from "~/styles/DesignComponents";
import { Link as RemixLink } from "@remix-run/react";
import { linkStyle } from "~/styles/MainDesignComponents";

interface LogoProps {
  fontSize?: string | number | object;
}

const Logo = ({ fontSize = "16px" }: LogoProps) => {
  return (
    <Box
      sx={linkStyle}
      as={RemixLink}
      to="http://www.iheartcomponents.com"
      target="_blank"
    >
      <IHeartComponents fontSize={fontSize}>I♥️Components</IHeartComponents>
    </Box>
  );
};

export default Logo;

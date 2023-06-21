import { Box } from "@chakra-ui/react";
import { IHeartComponents } from "~/styles/DesignComponents";
import { Link as RemixLink } from "@remix-run/react";

interface LogoProps {
  fontSize?: string | undefined;
}

const Logo = ({ fontSize = "16px" }: LogoProps) => {
  return (
    <Box as={RemixLink} to="http://www.iheartcomponents.com" target="_blank">
      <IHeartComponents fontSize={fontSize}>I♥️Components</IHeartComponents>
    </Box>
  );
};

export default Logo;

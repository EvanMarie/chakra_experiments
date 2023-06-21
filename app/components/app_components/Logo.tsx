import { Link } from "@chakra-ui/react";
import { IHeartComponents } from "~/styles/DesignComponents";

interface LogoProps {
  fontSize?: string;
}

const Logo = ({ fontSize = "16px" }: LogoProps) => {
  return (
    <Link href="http://www.iheartcomponents.com" target="_blank">
      <IHeartComponents fontSize={fontSize}>I♥️Components</IHeartComponents>
    </Link>
  );
};

export default Logo;

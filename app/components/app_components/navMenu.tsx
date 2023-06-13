import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Link
} from "@chakra-ui/react";

import type { NavElement } from "~/components/app_components/navigation";
import { navElements } from "~/components/app_components/navigation";

import { Link as RemixLink } from "@remix-run/react";

export function makeNavMenu({ navElements }: { navElements: NavElement[] }) {
  // use a Chakra menu to render a dropdown menu for mobile.
  //
  return () => {
    return (
      <Menu>
        <MenuButton
          as={AddIcon}
          w={10}
          h={10}
          borderRadius="full"
          _hover={{ bg: "blue.600" }}
        />
        <MenuList>
          {navElements.map((navElement) => {
            return (
              <Box key={navElement.label}>
                <Link as={RemixLink} to={navElement.link}>{navElement.label}</Link>
              </Box>
            );
          })}
        </MenuList>
      </Menu>
    );
  }
}

export default makeNavMenu({ navElements });
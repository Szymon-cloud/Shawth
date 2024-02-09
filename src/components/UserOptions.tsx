import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

import {
  FaGear,
  FaRightToBracket,
  FaRightFromBracket,
  FaMoon,
  FaSun,
} from "react-icons/fa6";

export default function UserOptions() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [logged, setLogged] = useState(false);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"md"} />
      </MenuButton>
      <MenuList>
        {logged ? (
          <MenuItem
            icon={logged ? <FaRightFromBracket /> : <FaRightToBracket />}
            alignItems={"center"}
            gap={2}
            onClick={() => setLogged(!logged)}
          >
            "Wyloguj"
          </MenuItem>
        ) : (
          <MenuItem
            as="a"
            href="login"
            icon={logged ? <FaRightFromBracket /> : <FaRightToBracket />}
            alignItems={"center"}
            gap={2}
            onClick={() => setLogged(!logged)}
          >
            Zaloguj
          </MenuItem>
        )}
        <MenuDivider />
        <MenuItem
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          alignItems={"center"}
          gap={2}
          onClick={toggleColorMode}
        >
          Tryb {colorMode === "light" ? "Ciemny" : "Jasny"}
        </MenuItem>
        <MenuItem icon={<FaGear />} alignItems={"center"} gap={2}>
          Ustawienia
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

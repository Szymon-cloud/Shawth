import { Button, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import logo from "../assets/vite.svg";
import UserOptions from "./UserOptions";

export default function NavBar() {
  return (
    <HStack
      bg={useColorModeValue("gray.50", "gray.900")}
      gap={{ base: "10px", md: "20px" }}
      justifyContent={"space-between"}
      padding={"10px"}
    >
      <Image src={logo} alt="logo" boxSize="50px" />
      <HStack justifyContent={"end"} gap={{ base: "10px", md: "20px" }}>
        <Button colorScheme="blue">Głosój na stylizacje</Button>
        <Button colorScheme="blue">Top 10 stylizacji</Button>
        <UserOptions />
      </HStack>
    </HStack>
  );
}

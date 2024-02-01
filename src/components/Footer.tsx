import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import logo from "../assets/vite.svg";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      id="footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src={logo} />
            </Box>
            <Text fontSize={"sm"}>© 2024 Shawth. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Pinterest"} href={"#"}>
                <FaPinterest />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Informacje</ListHeader>
            <Box as="a" href={"#"}>
              O nas
            </Box>
            <Box as="a" href={"#"}>
              Kontakt
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Pomoc</ListHeader>
            <Box as="a" href={"#"}>
              Regulamin
            </Box>
            <Box as="a" href={"#"}>
              Polityka prywatności
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Zapisz się na newsletter</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

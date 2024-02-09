import { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaUserAlt,
  FaLock,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import logo from "../assets/vite.svg";

interface props {
  onFormSwitch: any;
}

const CFaEnvelope = chakra(FaEnvelope);
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Register({ onFormSwitch }: props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Shawth - Rejestracja";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      alert(`Email: ${email}, hasło: ${password}`);
    }
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={logo} alt="logo" boxSize="50px" />
        <Heading colorScheme="blue">Zarejestruj się</Heading>

        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} p="1rem" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    value={name}
                    type="text"
                    placeholder="Nazwa użytkownika"
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaEnvelope color="gray.300" />}
                  />
                  <Input
                    value={email}
                    type="email"
                    placeholder="Adres e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Hasło"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      colorScheme="gray"
                      h="1.75rem"
                      size="sm"
                      onClick={handleShowClick}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Zapomniałem hasła</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Zaloguj
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Masz już konto?{" "}
        <Button
          variant={"link"}
          color={useColorModeValue("blue.500", "blue.200")}
          onClick={() => onFormSwitch("login")}
        >
          Zaloguj się!
        </Button>
      </Box>
    </Flex>
  );
}

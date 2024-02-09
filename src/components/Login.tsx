import { useEffect, useRef, useState } from "react";

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
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../assets/vite.svg";

interface props {
  onFormSwitch: any;
}

const CFaEnvelope = chakra(FaEnvelope);
const CFaLock = chakra(FaLock);

export default function Login({ onFormSwitch }: props) {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLDivElement | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Shawth - Logowanie";
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <Heading colorScheme="blue">Zaloguj się</Heading>

        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} p="1rem" boxShadow="md">
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
          <Alert ref={errRef} status="warning">
            <AlertIcon />
            <AlertTitle>{errMsg}</AlertTitle>
          </Alert>
        </Box>
      </Stack>
      <Box>
        Nie masz jeszcze konta?{" "}
        <Button
          variant={"link"}
          color={useColorModeValue("blue.500", "blue.200")}
          onClick={() => onFormSwitch("register")}
        >
          Zarejestruj się!
        </Button>
      </Box>
    </Flex>
  );
}

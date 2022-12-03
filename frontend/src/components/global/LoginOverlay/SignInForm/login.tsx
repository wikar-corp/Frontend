import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "../../Layout/Navigation/Logo/logo";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { DisplayedElement } from "./signInForm";
import axios from "axios";
import { useUser } from "providers/User/useUser";

const api = "https://263a-157-158-99-97.eu.ngrok.io";

export const Login = ({ setElement }: { setElement: any }) => {
  const { login } = useUser();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    const result = await login(email, password);
    alert(result);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const bg = useColorModeValue("BACKGROUND_1.LIGHT", "BACKGROUND_1.DARK");

  return (
    <Flex
      flexDirection="column"
      gap="30px"
      px="60px"
      pt="200px"
      alignItems="center"
      position="relative"
      bgColor={bg}
    >
      <ChevronLeftIcon
        position="absolute"
        left="25px"
        top="25px"
        color="white"
        boxSize="35px"
        cursor="pointer"
        _hover={{ opacity: 0.6 }}
        onClick={() => setElement(DisplayedElement.DEFAULT)}
      />
      <Logo />
      <Flex flexDirection="column" gap="10px" w="100%">
        <Text>username:</Text>
        <Input
          value={email}
          onChange={handleEmailChange}
          placeholder="user@youremail.com"
        />
        <Text>Password:</Text>
        <Input
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <Button mt="20px" onClick={() => handleLogin()}>
          Login
        </Button>
      </Flex>
      <Box>
        Don't have account yet? <Box onClick={() => setElement(DisplayedElement.REGISTER)}>Create Account</Box>
      </Box>
    </Flex>
  );
};

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
import { DisplayedElement } from "./signInForm";
import axios from "axios";
import { useUser } from "providers/User/useUser";

const api = "https://263a-157-158-99-97.eu.ngrok.io";

export const Login = ({ setElement }: { setElement: any }) => {
  const { login } = useUser();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async () => {
    const result = await login(email, password);
    //alert(result);
    if (result === undefined)
      setTimeout(() => {
        setErrorMessage("Invalid username or password");
      }, 1500);
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
      <Logo />
      <Flex flexDirection="column" gap="10px" w="100%">
        <Text>Username:</Text>
        <Input
          value={email}
          onChange={handleEmailChange}
          placeholder="username"
        />
        <Text>Password:</Text>
        <Input
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <Button
          mt="20px"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </Button>
        {errorMessage !== "" && <Text color="#FF3F3F">{errorMessage}</Text>}
      </Flex>
      <Flex as="span">
        Don’t have account yet?&nbsp;
        <Text
          color="blue"
          cursor="pointer"
          as="span"
          onClick={() => setElement(DisplayedElement.REGISTER)}
          _hover={{ opacity: 0.6 }}
        >
          Create Account
        </Text>
      </Flex>
    </Flex>
  );
};

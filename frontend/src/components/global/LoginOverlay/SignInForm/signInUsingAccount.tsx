import { Button, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  loginUser,
  useAuthDispatch,
  useAuthState,
} from "../../../../providers/Authenticate";
import { Logo } from "../../Layout/Navigation/Logo/logo";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { DisplayedElement } from "./signInForm";

export const SignInUsingAccount = ({ setElement }: { setElement: any }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loading, errorMessage } = useAuthState();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
  };

  const bg = useColorModeValue("BACKGROUND_1.LIGHT", "BACKGROUND_1.DARK");

  return (
    <Flex
      flexDirection="column"
      gap="10px"
      px="60px"
      pt="200px"
      position="relative"
      alignItems="center"
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
        <Button mt="20px" isLoading={loading} onClick={handleLogin}>
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

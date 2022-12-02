import { Button, Flex, Input, InputLeftAddon, Text } from "@chakra-ui/react";
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

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, { email, password });
      if (!response.user) return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      flexDirection="column"
      gap="10px"
      px="60px"
      pt="200px"
      position="relative"
      alignItems="center"
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
        <Text>Email:</Text>
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
        <Button mt="20px" isLoading={loading} onClick={handleLogin}>
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

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

export const Register = ({ setElement }: { setElement: any }) => {
  const { register } = useUser();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRegister = async () => {
    const result = await register(email, password);
    setElement(DisplayedElement.DEFAULT);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e: any) => {
    setRepeatPassword(e.target.value);
  };

  const checkPasswords = () => {
    return password === repeatPassword;
  };

  const bg = useColorModeValue("BACKGROUND_1.LIGHT", "BACKGROUND_1.DARK");
  const text = useColorModeValue("black", "white");

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
        color={text}
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
          placeholder="username"
        />
        <Text>Password:</Text>
        <Input
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <Text>Repeat password:</Text>
        <Input
          value={repeatPassword}
          type="password"
          onChange={handleRepeatPasswordChange}
        />
        <Button
          mt="20px"
          onClick={() => {
            if (checkPasswords()) {
              if (email === "") setErrorMessage("Username blank");
              else {
                setErrorMessage("");
                handleRegister();
              }
            } else setErrorMessage("Passwords don't match");
          }}
        >
          Create account
        </Button>
        {errorMessage !== "" && <Text color="#FF3F3F">{errorMessage}</Text>}
      </Flex>
    </Flex>
  );
};

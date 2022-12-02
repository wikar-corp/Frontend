import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "../../Layout/Navigation/Logo/logo";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { DisplayedElement } from "./signInForm";

export const Register = ({ setElement }: { setElement: any }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <Flex
      flexDirection="column"
      gap="30px"
      px="60px"
      pt="200px"
      alignItems="center"
      position="relative"
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
        <Button mt="20px">Create account</Button>
      </Flex>
    </Flex>
  );
};

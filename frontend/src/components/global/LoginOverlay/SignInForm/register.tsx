import { Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <Flex flexDirection="column" gap="10px">
      <Input value={email} onChange={handleEmailChange} />
      <Input value={password} type="password" onChange={handlePasswordChange} />
    </Flex>
  );
};

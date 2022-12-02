import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export const WelcomeSection = () => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return (
    <Flex
      bgColor="BRAND"
      w={signedIn ? "100vw" : "calc(100vw - 450px)"}
      transition="0.5s"
      left={signedIn ? "0" : "-450px"}
      onClick={() => {
        setSignedIn(!signedIn);
      }}
    >
      Welcome
    </Flex>
  );
};

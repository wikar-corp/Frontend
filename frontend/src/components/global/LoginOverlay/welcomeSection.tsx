import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export const WelcomeSection = () => {
  //test - domyślnie ma to przetrzymywać informację o tym czy użytkownik jest zalogowany (z providera)
  const [signedIn, setSignedIn] = useState<boolean>(false);
  //

  return (
    <Flex
      bgColor="BRAND"
      w={signedIn ? "100vw" : "calc(100vw - 450px)"}
      transition="0.5s"
      left={signedIn ? "0" : "-450px"}
      //test - obsługa jeśli jest zalogowany
      onClick={() => {
        setSignedIn(!signedIn);
      }}
      //
    >
      Welcome
    </Flex>
  );
};

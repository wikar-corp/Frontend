import { Flex, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";

export const WelcomeSection = () => {
  //test - domyślnie ma to przetrzymywać informację o tym czy użytkownik jest zalogowany (z providera)
  const [signedIn, setSignedIn] = useState<boolean>(false);
  //

  const bg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");

  return (
    <Flex
      bgColor={bg}
      w={signedIn ? "100vw" : "calc(100vw - 450px)"}
      transition="0.5s"
      left={signedIn ? "0" : "-450px"}
      //test - obsługa jeśli jest zalogowany
      onClick={() => {
        setSignedIn(!signedIn);
      }}
      //
      alignItems="center"
      justifyContent="center"
    >
      {signedIn ? (
        <Spinner boxSize="50px" />
      ) : (
        <Flex
          flexDirection="column"
          gap="30px"
          width="100%"
          justifyContent="center"
          overflowWrap="break-word"
          p="50px"
        >
          <Text fontSize="60px" fontWeight="700">
            Welcome, it's our hackaton app.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            officia sapiente, earum quis, harum quidem eum reprehenderit beatae
            commodi assumenda nostrum veritatis non, odio nemo et architecto
            nulla minus asperiores?
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

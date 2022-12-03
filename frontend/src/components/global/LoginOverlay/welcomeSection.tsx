import {
  Flex,
  Heading,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useUser } from "providers/User/useUser";

export const WelcomeSection = () => {
  //test - domyślnie ma to przetrzymywać informację o tym czy użytkownik jest zalogowany (z providera)
  const [signedIn, setSignedIn] = useState<boolean>(false);
  //
  const { jwt } = useUser();

  useEffect(() => {
    if (jwt != "") {
      //alert("XD");
      setTimeout(() => {
        setSignedIn(true);
      }, 1000);
    }
  }, [jwt]);

  const bg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK");

  return (
    <Flex
      bg={"linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);"}
      w={signedIn ? "100vw" : "calc(100vw - 450px)"}
      transition="0.5s"
      left={signedIn ? "0" : "-450px"}
      //test - obsługa jeśli jest zalogowany
      onClick={() => {
        //setSignedIn(!signedIn);
      }}
      //
      alignItems="center"
      justifyContent="center"
    >
      {signedIn ? (
        <Spinner boxSize="50px"  />
      ) : (
        <Flex width="100%" overflowWrap="break-word" p="80px">
<<<<<<< HEAD
          <Flex maxW="700px" flexDirection="column" gap="30px" color="white">
            <Heading fontSize="80px" fontWeight="700">
=======
          <Flex maxW="700px" flexDirection="column" gap="30px">
            <Heading fontSize="60px" fontWeight="700">
>>>>>>> 77a92d061dc3b3ee7ee35220081c172611972a1b
              Welcome, it's our hackaton app.
            </Heading>
            <Text lineHeight="160%" fontSize="24px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              officia sapiente, earum quis, harum quidem eum reprehenderit
              beatae commodi assumenda nostrum veritatis non, odio nemo et
              architecto nulla minus asperiores?
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

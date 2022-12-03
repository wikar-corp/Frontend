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
        <Spinner boxSize="50px" />
      ) : (
        <Flex width="100%" overflowWrap="break-word" p="80px">
          <Flex maxW="650px" flexDirection="column" gap="30px">
            <Heading fontSize="80px" fontWeight="700">
              Welcome to Timenage.
            </Heading>
            <Text lineHeight="160%" fontSize="24px">
              Application that helps to integrate work time as efficiently as&nbsp;possible in your daily life! 
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

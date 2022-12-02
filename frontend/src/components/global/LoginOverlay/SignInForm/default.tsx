import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../Layout/Navigation/Logo/logo";
import { DisplayedElement } from "./signInForm";

export const Default = ({ setElement }: { setElement: any }) => {
  const bg = useColorModeValue("BACKGROUND_1.LIGHT", "BACKGROUND_1.DARK");

  return (
    <Flex
      px="60px"
      flexDirection="column"
      alignItems="center"
      pt="200px"
      gap="60px"
      bgColor={bg}
    >
      <Logo />
      <Flex flexDirection="column" gap="13px" alignItems="center">
        <Text>Welcome to our Application</Text>
        <Text>Start blah blah blah essa</Text>
      </Flex>
      <Flex flexDirection="column" gap="13px" alignItems="center">
        <Button
          w="85%"
          p="15px"
          alignItems="center"
          justifyContent="center"
          bg="#dadada"
          borderRadius="8px"
          color="black"
          cursor="pointer"
          _hover={{ opacity: "0.6" }}
        >
          Sign in with Google
        </Button>
        <Button
          w="85%"
          p="15px"
          alignItems="center"
          justifyContent="center"
          bg="#dadada"
          borderRadius="8px"
          color="black"
          cursor="pointer"
          _hover={{ opacity: "0.6" }}
          onClick={() => setElement(DisplayedElement.SIGNIN)}
        >
          Sign in using account
        </Button>
        <Flex as="span">
          Don’t have account yet?&nbsp;
          <Text
            color="blue"
            cursor="pointer"
            as="span"
            onClick={() => setElement(DisplayedElement.REGISTER)}
            _hover={{ opacity: 0.6 }}
          >
            Create Account
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../Layout/Navigation/Logo/logo";
import { ActionButton } from "./actionButton";
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
        <ActionButton onClick={() => {}}>Sign in with Google</ActionButton>
        <ActionButton onClick={setElement}>Sign in using account</ActionButton>
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

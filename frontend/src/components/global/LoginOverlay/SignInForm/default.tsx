import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Logo } from "../../Layout/Navigation/Logo/logo";
import { ActionButton } from "./actionButton";
import { DisplayedElement } from "./signInForm";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";

const clientId =
  "513432298747-amtvorqmcanpcb1ccnk8gh7v7p8uj3e8.apps.googleusercontent.com";

export const Default = ({ setElement }: { setElement: any }) => {
  const bg = useColorModeValue("BACKGROUND_1.LIGHT", "BACKGROUND_1.DARK");

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res: any) => {
    alert("udalo sie");
  };

  const onFailure = (err: any) => {
    console.log("failed", err);
  };

  const logOut = () => {
    alert("essa");
  };

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
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
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

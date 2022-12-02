import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthState } from "../../../providers/Authenticate";
import { SignInForm } from "./signInForm";
import { WelcomeSection } from "./welcomeSection";

export const LoginOverlay = () => {
  const userDetails = useAuthState();

  //test
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //

  return (
    <Grid
      pos="fixed"
      //test
      onClick={() => {
        setTimeout(() => {
          setIsLoading(!isLoading);
        }, 1000);
      }}
      //
      w="100vw"
      h="100vh"
      transition={"0.5s"}
      left={isLoading ? "0" : "100vw"}
      gridTemplateColumns="1fr 450px"
    >
      <WelcomeSection />
      <SignInForm />
    </Grid>
  );
};

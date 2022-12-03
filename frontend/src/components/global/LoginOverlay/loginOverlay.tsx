import { Grid } from "@chakra-ui/react";
import { useUser } from "providers/User/useUser";
import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useAuthState } from "../../../providers/Authenticate";
import { SignInForm } from "./SignInForm/signInForm";
import { WelcomeSection } from "./welcomeSection";

export const LoginOverlay = () => {
  const { jwt } = useUser();

  //test - domyślnie ma przetrzymywać informację o załadowaniu danych
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //

  useEffect(() => {
    if (jwt != "") {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [jwt]);

  return (
    <Grid
      pos="fixed"
      zIndex="9999"
      //test - zamiast tego obsługa załadowania

      //
      w="100vw"
      h="100vh"
      transition={"0.8s"}
      left={isLoading ? "0vw" : "200vw"}
      gridTemplateColumns="1fr 450px"
    >
      <WelcomeSection />
      <SignInForm />
    </Grid>
  );
};

import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Navigation } from "./Navigation/navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {

  const outletBg = useColorModeValue("BACKGROUND_2.LIGHT", "BACKGROUND_2.DARK")

  return (
    <Grid h="100vh" w="100vw" gridTemplateColumns="auto 1fr">
      <Navigation />
      <Grid bg={outletBg}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

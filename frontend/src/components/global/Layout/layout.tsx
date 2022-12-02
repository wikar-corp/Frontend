import { Grid } from "@chakra-ui/react";
import React from "react";
import { Navigation } from "./Navigation/navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Grid h="100vh" w="100vw" gridTemplateColumns="auto 1fr">
      <Navigation />
      <Outlet />
    </Grid>
  );
};

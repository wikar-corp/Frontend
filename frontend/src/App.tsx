import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/extendedTheme";
import { AppWrapper } from "./components/global/AppWrapper/appWrapper";
import { AuthProvider } from "./providers/Authenticate";

import '@fontsource/lato'

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  </ChakraProvider>
);

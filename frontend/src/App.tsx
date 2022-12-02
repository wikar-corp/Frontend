import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/extendedTheme";
import { AppWrapper } from "./components/global/AppWrapper/appWrapper";
import { AuthProvider } from "./providers/Authenticate";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  </ChakraProvider>
);

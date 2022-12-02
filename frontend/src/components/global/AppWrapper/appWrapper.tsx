import { Box } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/layout";
import { LoginOverlay } from "../LoginOverlay/loginOverlay";

export const AppWrapper = () => {
  return (
    <>
      <LoginOverlay />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="messages"
              element={<Box bgColor="red">messages</Box>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

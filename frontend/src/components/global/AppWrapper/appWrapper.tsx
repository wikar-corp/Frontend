import { Box, Flex } from "@chakra-ui/react";
import {
  RouterProvider,
  Routes,
  Route,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import { Layout } from "../Layout/layout";
import { LoginOverlay } from "../LoginOverlay/loginOverlay";
//import { router } from "./routes";

export const AppWrapper = () => {
  return (
    <>
      <LoginOverlay />
      {/* <RouterProvider router={router} /> */}
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

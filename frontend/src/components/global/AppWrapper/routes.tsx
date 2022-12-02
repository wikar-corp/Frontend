import { Flex } from "@chakra-ui/react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuthState } from "../../../providers/Authenticate";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userDetails = useAuthState();
  if (!Boolean(userDetails.token)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hackaton 2022</div>,
    errorElement: <>404</>,
  },
  //   {
  //     path: "/dashboard",
  //     element: (
  //       <ProtectedRoute>
  //         <Flex></Flex>
  //       </ProtectedRoute>
  //     ),
  //   },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

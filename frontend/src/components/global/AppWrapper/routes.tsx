import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hackaton 2022</div>,
    errorElement: <>404</>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

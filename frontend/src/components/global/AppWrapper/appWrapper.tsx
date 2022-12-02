import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hackaton 2022</div>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export const AppWrapper = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

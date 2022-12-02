import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export const AppWrapper = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

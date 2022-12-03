import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/layout";
import { LoginOverlay } from "../LoginOverlay/loginOverlay";
import { routes } from "./routes";

export const AppWrapper = () => {
  return (
    <>
      <LoginOverlay />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => {
              return <Route path={route.path} element={route.element} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

import { Layout } from "components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { RouteConfigInterface } from "./Routing.interface";
import { routesConfig } from "./Routing.utils";

export function Routing() {
  return (
    <Routes>
      {routesConfig.map((route: RouteConfigInterface) => (
        <Route
          element={
            <Layout layoutVariant={route.layoutVariant}>
              {route.component}
            </Layout>
          }
          key={route.path}
          path={route.path}
        />
      ))}
    </Routes>
  );
}

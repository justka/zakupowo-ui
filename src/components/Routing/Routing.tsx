import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { routesConfig } from "./Routing.utils";
import { RouteConfigInterface } from "./Routing.interface";

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

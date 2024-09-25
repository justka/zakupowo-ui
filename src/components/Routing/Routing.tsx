import { Routes, Route } from "react-router-dom";
import { useRouting } from "./useRouting";
import { Layout } from "components/Layout/Layout";

export function Routing() {
  const { routesConfig } = useRouting();

  return (
    <Routes>
      {routesConfig.map((route) => (
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

import { LAYOUT_VARIANT } from "constants/layout";
import { MENU } from "constants/menu";
import { LoginPage } from "pages/login/loginPage";
import { RegisterPage } from "pages/register/registerPage";
import React from "react";
import { Navigate } from "react-router-dom";

export interface RouteConfig {
  component: React.ReactElement;
  layoutVariant: string;
  path: string;
}

export const routesConfig: RouteConfig[] = [
  {
    component: (
      <Navigate
        replace
        to={MENU.LOGIN}
      />
    ),
    layoutVariant: LAYOUT_VARIANT.BEFORE_LOGIN,
    path: MENU.START,
  },
  {
    component: <LoginPage />,
    layoutVariant: LAYOUT_VARIANT.BEFORE_LOGIN,
    path: MENU.LOGIN,
  },
  {
    component: <RegisterPage />,
    layoutVariant: LAYOUT_VARIANT.BEFORE_LOGIN,
    path: MENU.REGISTER,
  },
  {
    component: <>404</>,
    layoutVariant: LAYOUT_VARIANT.ERROR_404_PAGE,
    path: "*",
  },
];

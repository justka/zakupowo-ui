import { App } from "components/App/App";
import { LAYOUT_VARIANT } from "constants/layout";
import { MENU } from "constants/menu";
import { LoginPage } from "pages/login/loginPage";
import { RegisterPage } from "pages/register/registerPage";
import { RouteConfigInterface } from "./Routing.interface";

export const routesConfig: RouteConfigInterface[] = [
  {
    component: <App />,
    path: MENU.START,
    layoutVariant: LAYOUT_VARIANT.AFTER_LOGIN,
  },
  {
    component: <LoginPage />,
    path: MENU.LOGIN,
    layoutVariant: LAYOUT_VARIANT.BEFORE_LOGIN,
  },
  {
    component: <RegisterPage />,
    path: MENU.REGISTER,
    layoutVariant: LAYOUT_VARIANT.BEFORE_LOGIN,
  },
  {
    component: <>404</>,
    path: "*",
    layoutVariant: LAYOUT_VARIANT.ERROR_404_PAGE,
  },
];

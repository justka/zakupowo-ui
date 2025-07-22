import { App } from "components/App/App";
import { LAYOUT_VARIANT } from "constants/layout";
import { MENU } from "constants/menu";
import { LoginPage } from "pages/login/loginPage";
import { RegisterPage } from "pages/register/registerPage";
import { RouteConfigInterface } from "./Routing.interface";

export const routesConfig: RouteConfigInterface[] = [
  {
    component: <App />,
    layoutVariant: LAYOUT_VARIANT.AFTER_LOGIN,
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

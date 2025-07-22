import { MENU } from "constants/menu";
import { FieldConfigType } from "types/commonTypes";

export const fieldsConfig: FieldConfigType[] = [
  { fieldType: "text", text: "Zaloguj się" },
  { fieldType: "text", text: "Zaloguj się do aplikacji" },
  {
    fieldType: "input",
    id: "login",
    label: "Login",
    name: "login",
    inputType: "text",
  },
  {
    fieldType: "input",
    id: "password",
    label: "Password",
    name: "password",
    inputType: "password",
  },
  {
    fieldType: "anchor",
    target: MENU.FORGET_PASSWORD,
    text: "Nie pamiętasz hasła?",
  },
  { fieldType: "button", text: "Zaloguj się", buttonType: "submit" },
  { fieldType: "text", text: "Nie masz jeszcze konta?" },
  {
    fieldType: "button",
    text: "Utwórz konto",
    target: MENU.REGISTER,
  },
];

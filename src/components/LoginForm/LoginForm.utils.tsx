import { MENU } from "constants/menu";
import { FieldConfigType } from "types/commonTypes";

export const fieldsConfig: FieldConfigType[] = [
  { fieldType: "text", text: "Zaloguj się" },
  { fieldType: "text", text: "Zaloguj się do aplikacji" },
  {
    fieldType: "input",
    id: "login",
    inputType: "text",
    label: "Login",
    name: "login",
  },
  {
    fieldType: "input",
    id: "password",
    inputType: "password",
    label: "Password",
    name: "password",
  },
  {
    fieldType: "anchor",
    target: MENU.FORGET_PASSWORD,
    text: "Nie pamiętasz hasła?",
  },
  { buttonType: "submit", fieldType: "button", text: "Zaloguj się" },
  { fieldType: "text", text: "Nie masz jeszcze konta?" },
  {
    fieldType: "button",
    target: MENU.REGISTER,
    text: "Utwórz konto",
  },
];

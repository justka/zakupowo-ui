import { FIELD_TYPE } from "constants/fieldTypes";
import { MENU } from "constants/menu";
import { FieldConfigType } from "types/commonTypes";

export const fieldsConfig: FieldConfigType[] = [
  {
    fieldType: FIELD_TYPE.TEXT,
    text: "Zaloguj się",
  },
  {
    fieldType: FIELD_TYPE.INPUT,
    id: "login",
    inputType: "text",
    label: "Login",
    name: "login",
  },
  {
    fieldType: FIELD_TYPE.INPUT,
    id: "password",
    inputType: "password",
    label: "Password",
    name: "password",
  },
  {
    fieldType: FIELD_TYPE.ANCHOR,
    target: MENU.FORGET_PASSWORD,
    text: "Nie pamiętasz hasła?",
  },
  { fieldType: FIELD_TYPE.BUTTON, text: "Zaloguj się", type: "submit" },
  { fieldType: FIELD_TYPE.TEXT, text: "Nie masz jeszcze konta?" },
  {
    fieldType: FIELD_TYPE.ANCHOR,
    target: MENU.REGISTER,
    text: "Utwórz konto",
  },
];

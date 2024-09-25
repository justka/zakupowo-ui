import { FIELD_TYPE } from "constants/fieldTypes";
import { MENU } from "constants/menu";

export function useLoginForm() {
  const fieldsConfig:any= [
    { fieldType: FIELD_TYPE.TEXT, text: "Zaloguj się" },
    { fieldType: FIELD_TYPE.TEXT, text: "Zaloguj się do aplikacji" },
    {
      fieldType: FIELD_TYPE.INPUT,
      id: "login",
      label: "Login",
      name: "login",
    },
    {
      fieldType: FIELD_TYPE.INPUT,
      id: "password",
      label: "Password",
      name: "password",
      inputType: "password",
    },
    {
      fieldType: FIELD_TYPE.ANCHOR,
      target: MENU.FORGET_PASSWORD,
      text: "Nie pamiętasz hasła?",
    },
    { fieldType: FIELD_TYPE.BUTTON, text: "Zaloguj się", buttonType: "submit" },
    { fieldType: FIELD_TYPE.TEXT, text: "Nie masz jeszcze konta?" },
    {
      fieldType: FIELD_TYPE.BUTTON,
      text: "Utwórz konto",
      target: MENU.REGISTER,
    },
  ];
  return { fieldsConfig };
}

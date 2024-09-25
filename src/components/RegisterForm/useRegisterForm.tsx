import { FIELD_TYPE } from "constants/fieldTypes";
import { MENU } from "constants/menu";
import { Link } from "react-router-dom";

export function useRegisterForm() {
  const fieldsConfig:any= [
    { fieldType: FIELD_TYPE.TEXT, text: "Utwórz konto" },
    { fieldType: FIELD_TYPE.TEXT, text: "Zarejestruj się w aplikacji" },
    {
      fieldType: FIELD_TYPE.INPUT,
      id: "email",
      label: "E-mail",
      name: "email",
    },
    {
      fieldType: FIELD_TYPE.INPUT,
      id: "password",
      label: "Hasło",
      name: "password",
      inputType: "password",
    },
    {
        fieldType: FIELD_TYPE.INPUT,
        id: "passwordAgain",
        label: "Powtórz hasło",
        name: "passwordAgain",
        inputType: "password",
      },
    {
      fieldType: FIELD_TYPE.CHECKBOX,
      label: <>Akceptuję <Link to={MENU.TERMS_AND_CONDITIONS}>Regulamin</Link> i <Link to={MENU.PRIVATE_POLICY}>Politykę prywatności</Link></>,
      name: "areDocumentsAccepted"
    },
    { fieldType: FIELD_TYPE.BUTTON, text: "Utwórz konto", buttonType: "submit" },
    { fieldType: FIELD_TYPE.TEXT, text: "Masz konto?" },
    {
      fieldType: FIELD_TYPE.BUTTON,
      text: "Zaloguj się",
      target: MENU.LOGIN,
    },
  ];
  return { fieldsConfig };
}

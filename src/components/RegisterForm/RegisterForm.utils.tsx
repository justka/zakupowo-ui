import { FIELD_TYPE } from "constants/fieldTypes";
import { MENU } from "constants/menu";
import { Link } from "react-router-dom";
import { FieldConfigType } from "types/commonTypes";

export const fieldsConfig: FieldConfigType[] = [
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
    inputType: "password",
    label: "Hasło",
    name: "password",
  },
  {
    fieldType: FIELD_TYPE.INPUT,
    id: "passwordAgain",
    inputType: "password",
    label: "Powtórz hasło",
    name: "passwordAgain",
  },
  {
    fieldType: FIELD_TYPE.CHECKBOX,
    label: (
      <>
        Akceptuję <Link to={MENU.TERMS_AND_CONDITIONS}>Regulamin</Link> i{" "}
        <Link to={MENU.PRIVATE_POLICY}>Politykę prywatności</Link>
      </>
    ),
    name: "areDocumentsAccepted",
  },
  { buttonType: "submit", fieldType: FIELD_TYPE.BUTTON, text: "Utwórz konto" },
  { fieldType: FIELD_TYPE.TEXT, text: "Masz konto?" },
  {
    fieldType: FIELD_TYPE.BUTTON,
    target: MENU.LOGIN,
    text: "Zaloguj się",
  },
];

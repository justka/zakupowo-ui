import { Form } from "components/UI/Form/Form";
import { fieldsConfig } from "./RegisterForm.utils";

export function RegisterForm() {
  return <Form fields={fieldsConfig} />;
}

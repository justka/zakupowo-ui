import { Form } from "components/UI/Form/Form";
import { fieldsConfig } from "./LoginForm.utils";

export function LoginForm() {
  return <Form fields={fieldsConfig} />;
}

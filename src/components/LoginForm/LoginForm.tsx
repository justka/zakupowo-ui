import { Form } from "components/UI/Form/Form";
import { useLoginForm } from "./useLoginForm";

export function LoginForm() {
  const { fieldsConfig } = useLoginForm();
    return <Form fields={fieldsConfig} />;
}

import { Form } from "components/UI/Form/Form";
import { useRegisterForm } from "./useRegisterForm";

export function RegisterForm() {
  const { fieldsConfig } = useRegisterForm();
    return <Form fields={fieldsConfig} />;
}

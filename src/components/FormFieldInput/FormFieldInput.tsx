import { Field } from "react-final-form";
import { Input } from "../UI/Input/Input";

export function FormFieldInput({
  fieldConfiguration,
}: {
  fieldConfiguration: any;
}) {
  return (
    <Field name={fieldConfiguration.name}>
      {({ input, meta }) => (
        <div>
          <Input
            id={fieldConfiguration.id}
            onBlur={input.onBlur}
            onChange={input.onChange}
            onFocus={input.onFocus}
            label={fieldConfiguration.label}
            type={fieldConfiguration.inputType}
            value={input.value}
          />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

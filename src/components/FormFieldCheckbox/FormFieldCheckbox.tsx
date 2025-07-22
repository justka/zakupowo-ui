import { Checkbox } from "components/UI/Checkbox/Checkbox";
import { Field } from "react-final-form";

export function FormFieldCheckbox({
  fieldConfiguration,
}: {
  fieldConfiguration: any;
}) {
  return (
    <Field
      name={fieldConfiguration.name}
      type="checkbox"
    >
      {({ input, meta }) => (
        <div>
          <Checkbox
            id={fieldConfiguration.id || ""}
            onBlur={input.onBlur}
            onChange={input.onChange}
            onFocus={input.onFocus}
            label={fieldConfiguration.label}
          />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

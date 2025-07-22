import { Form as ReactFinalForm } from "react-final-form";
import { Button } from "components/UI/Button/Button";
import { Link } from "react-router-dom";
import { FIELD_TYPE } from "constants/fieldTypes";
import { Text } from "components/UI/Text/Text";
import { FormInterface } from "./Form.interface";
import { FormFieldInput } from "../../FormFieldInput/FormFieldInput";
import { FormFieldCheckbox } from "components/FormFieldCheckbox/FormFieldCheckbox";
import { FormFieldUnsupportedType } from "components/FormFieldUnsupportedType/FormFieldUnsupportedType";

export function Form({ fields }: FormInterface) {
  return (
    <ReactFinalForm
      onSubmit={(value) => {
        // TODO: Handle form submission
        console.log(value);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {fields.map((fieldConfiguration) => {
            switch (fieldConfiguration.fieldType) {
              case FIELD_TYPE.INPUT: {
                return (
                  <FormFieldInput
                    key={fieldConfiguration.name}
                    fieldConfiguration={fieldConfiguration}
                  />
                );
              }
              case FIELD_TYPE.TEXT: {
                return (
                  <Text
                    key={fieldConfiguration.text}
                    text={fieldConfiguration.text}
                  />
                );
              }
              case FIELD_TYPE.ANCHOR: {
                return (
                  <Link
                    key={fieldConfiguration.text}
                    to={fieldConfiguration.target}
                  >
                    {fieldConfiguration.text}
                  </Link>
                );
              }
              case FIELD_TYPE.BUTTON: {
                return (
                  <Button
                    key={fieldConfiguration.text}
                    target={fieldConfiguration.target}
                    text={fieldConfiguration.text}
                    type={fieldConfiguration.buttonType}
                  />
                );
              }
              case FIELD_TYPE.CHECKBOX: {
                return (
                  <FormFieldCheckbox
                    key={fieldConfiguration.name}
                    fieldConfiguration={fieldConfiguration}
                  />
                );
              }
              default:
                return <FormFieldUnsupportedType key="UnsupportedType" />;
            }
          })}
        </form>
      )}
    />
  );
}

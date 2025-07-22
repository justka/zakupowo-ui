import { FormFieldCheckbox } from "components/FormFieldCheckbox/FormFieldCheckbox";
import { FormFieldUnsupportedType } from "components/FormFieldUnsupportedType/FormFieldUnsupportedType";
import { Button } from "components/UI/Button/Button";
import { Text } from "components/UI/Text/Text";
import { FIELD_TYPE } from "constants/fieldTypes";
import { Form as ReactFinalForm } from "react-final-form";
import { Link } from "react-router-dom";
import { FormFieldInput } from "../../FormFieldInput/FormFieldInput";
import { FormInterface } from "./Form.interface";

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
                    fieldConfiguration={fieldConfiguration}
                    key={fieldConfiguration.name}
                  />
                );
              }
              case FIELD_TYPE.INPUT: {
                return (
                  <FormFieldInput
                    fieldConfiguration={fieldConfiguration}
                    key={fieldConfiguration.name}
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
              default:
                return <FormFieldUnsupportedType key="UnsupportedType" />;
            }
          })}
        </form>
      )}
    />
  );
}

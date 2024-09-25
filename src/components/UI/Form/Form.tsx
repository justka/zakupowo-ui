import { Field, Form as ReactFinalForm } from "react-final-form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
import { FIELD_TYPE } from "constants/fieldTypes";
import { Text } from "../Text/Text";
import { FormInterface } from "./Form.interface";
import { Checkbox } from "../Checkbox/Checkbox";

export function Form({ fields }: FormInterface) {
  return (
    <>
      <ReactFinalForm
        onSubmit={(value) => {
          console.log(value);
        }}
        //   validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {fields.map((field) => {
              switch (field.fieldType) {
                case FIELD_TYPE.INPUT: {
                  return (
                    <Field name={field.name}>
                      {({ input, meta }) => {
                        return (
                          <div>
                            <Input
                              id={field?.id || ""}
                              onBlur={input.onBlur}
                              onChange={input.onChange}
                              onFocus={input.onFocus}
                              label={field.label}
                              type={field.inputType}
                              value={input.value}
                            />
                            {meta.touched && meta.error && (
                              <span>{meta.error}</span>
                            )}
                          </div>
                        );
                      }}
                    </Field>
                  );
                }
                case FIELD_TYPE.TEXT: {
                  return <Text>{field.text}</Text>;
                }
                case FIELD_TYPE.ANCHOR: {
                  return <Link to={field?.target || ""}>{field.text}</Link>;
                }
                case FIELD_TYPE.BUTTON: {
                  return (
                    <Button
                      target={field.target}
                      text={field.text}
                      type={field.buttonType}
                    />
                  );
                }
                case FIELD_TYPE.CHECKBOX: {
                  return (
                    <Field name={field.name} type="checkbox"> 
                      {({ input, meta }) => {
                        return (
                          <div>
                            <Checkbox
                              id={field?.id || ""}
                              onBlur={input.onBlur}
                              onChange={input.onChange}
                              onFocus={input.onFocus}
                              label={<>{field.label}</>}
                            />
                            {/* <Input
                              id={field?.id || ""}
                              onBlur={input.onBlur}
                              onChange={input.onChange}
                              onFocus={input.onFocus}
                              label={field.label}
                              type={field.inputType}
                              value={input.value}
                            /> */}
                            {meta.touched && meta.error && (
                              <span>{meta.error}</span>
                            )}
                          </div>
                        );
                      }}
                    </Field>
                  );
                }
                default: {
                  return <>Nieobsłużony typ pola</>;
                }
              }
            })}
          </form>
        )}
      />
    </>
  );
}

export interface FormInterface {
  fields: (FormFieldButtonTypeInterface & FormFieldInputInterface&FormFieldAnchorInterface)[];
}

// export type FieldInterface =FormFieldButtonType & FormFieldInputType

export interface FormFieldAnchorInterface{
  fieldType:string;
  target:string;
  text:string;
}

export interface FormFieldInputInterface {
    label: string;
    name: string;
    text: string;
    inputType: "text" | "password";
    id: string;
    fieldType: string;
}
export interface FormFieldButtonTypeInterface{
    buttonType?: "submit" | "button";
    fieldType: string;
    target?: string;
    text: string;
}
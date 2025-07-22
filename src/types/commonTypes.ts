export type FieldConfigType =
  | FieldTypeTextType
  | FieldTypeInputType
  | FieldTypeAnchorType
  | FieldTypeButtonType
  | FieldTypeCheckboxType;

type FieldTypeTextType = { fieldType: "text"; text: string };
type FieldTypeInputType = {
  fieldType: "input";
  id: string;
  label: string;
  name: string;
  inputType?: "text" | "password";
};
type FieldTypeAnchorType = {
  fieldType: "anchor";
  target: string;
  text: string;
};
type FieldTypeButtonType = {
  fieldType: "button";
  text: string;
  buttonType?: "button" | "submit";
  target?: string;
};
type FieldTypeCheckboxType = {
  fieldType: "checkbox";
  label: JSX.Element;
  name: string;
  id?: string;
};

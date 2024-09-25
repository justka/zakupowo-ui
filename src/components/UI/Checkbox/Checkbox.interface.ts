import { ChangeEvent } from "react";

export interface CheckboxInterface {
  id: string;
  label: JSX.Element;
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

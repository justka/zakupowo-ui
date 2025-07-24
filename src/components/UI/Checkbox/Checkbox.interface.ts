import { ChangeEvent, ReactElement } from "react";

export interface CheckboxInterface {
  id: string;
  label: ReactElement;
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

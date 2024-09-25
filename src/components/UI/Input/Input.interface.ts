import { ChangeEvent } from "react";

export interface InputInterface {
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  value?: string;
  type?: "text" | "password";
  label: string;
  id: string;
}

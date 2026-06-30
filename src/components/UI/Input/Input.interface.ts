import { ChangeEvent } from "react";

export interface InputInterface {
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  value?: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}

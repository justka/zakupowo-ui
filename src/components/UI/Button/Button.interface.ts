export interface ButtonInteface {
  onClick?: () => void;
  target?: string;
  text: string;
  type?: "button" | "submit";
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "custom";
  variant?: "text" | "outlined" | "contained";
}

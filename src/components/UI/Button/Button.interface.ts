export interface ButtonInteface {
  onClick?: () => void;
  target?: string;
  text: string;
  type?: "button" | "submit";
}

import { TextInterface } from "./Text.interface";
import { prepareText } from "./Text.utils";

export function Text({ text, variant = "span" }: TextInterface) {
  return prepareText(text, variant);
}

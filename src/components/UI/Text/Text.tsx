import { TextInterface } from "./Text.interface";
import { useText } from "./useText";

export function Text({ children, variant = "span" }: TextInterface) {
  const { preparedText } = useText({ children, variant });

  return <>{preparedText}</>;
}

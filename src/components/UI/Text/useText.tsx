import { UseTextInterface } from "./Text.interface";

export function useText({ children, variant }: UseTextInterface) {
  const prepareText = () => {
    switch (variant) {
      case "h1": {
        return <h1>{children}</h1>;
      }
      case "p": {
        return <p>{children}</p>;
      }
      default: {
        return <span>{children}</span>;
      }
    }
  };

  const preparedText = prepareText();

  return {
    preparedText,
  };
}

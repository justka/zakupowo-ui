import "./Button.scss";
import { DATA_TEST_ID } from "constants/dataTestId";
import { Link } from "react-router-dom";
import { ButtonInteface } from "./Button.interface";

export function Button({
  onClick = () => {},
  target = "",
  text,
  type = "button",
}: ButtonInteface) {
  const button = (
    <button
      className="button__button"
      data-testid={DATA_TEST_ID.BUTTON}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
  if (target) {
    return <Link to={target}>{button}</Link>;
  }
  return button;
}

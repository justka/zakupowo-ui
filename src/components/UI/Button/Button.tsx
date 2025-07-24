import "./Button.scss";
import { DATA_TEST_ID } from "constants/dataTestId";
import { Link } from "react-router-dom";
import { prepareDataTestId } from "utils/test";
import { ButtonInteface } from "./Button.interface";

export function Button({
  onClick = () => {},
  target = "",
  text,
  type = "button",
}: ButtonInteface) {
  const button = (
    <button
      {...prepareDataTestId(DATA_TEST_ID.BUTTON)}
      className="button__button"
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

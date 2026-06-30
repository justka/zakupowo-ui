import "./Button.scss";
import { DATA_TEST_ID } from "constants/dataTestId";
import { Link } from "react-router-dom";
import { prepareDataTestId } from "utils/test";
import { default as MaterialButton } from "@mui/material/Button";
import { ButtonInteface } from "./Button.interface";

export function Button({
  color = "primary",
  onClick = () => {},
  target = "",
  text,
  type = "button",
  variant = "contained",
}: ButtonInteface) {
  const button = (
    <MaterialButton
      {...prepareDataTestId(DATA_TEST_ID.BUTTON)}
      className="button__button"
      color={color}
      onClick={onClick}
      size="medium"
      type={type}
      variant={variant}
    >
      {text}
    </MaterialButton>
  );
  if (target) {
    return <Link to={target}>{button}</Link>;
  }
  return button;
}

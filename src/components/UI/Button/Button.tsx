import { Link } from "react-router-dom";
import { ButtonInteface } from "./Button.interface";
import "./Button.scss";

export function Button({
  onClick = () => {},
  target = "",
  text,
  type = "button",
}: ButtonInteface) {
  const button = (
    <button className="button__button" onClick={onClick} type={type}>
      {text}
    </button>
  );
  if (target) {
    return <Link to={target}>{button}</Link>;
  }
  return button;
}

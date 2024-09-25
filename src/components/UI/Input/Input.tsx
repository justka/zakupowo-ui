import { InputInterface } from "./Input.interface";
import "./Input.scss";

export function Input({
  id,
  onBlur,
  onChange,
  onFocus,
  label,
  type = "text",
  value,
}: InputInterface) {
  return (
    <div className="input__container">
      <input
        id={id}
        className="input__input"
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        value={value}
      />
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

import "./Input.scss";
import { InputInterface } from "./Input.interface";

export function Input({
  id,
  label,
  onBlur,
  onChange,
  onFocus,
  type = "text",
  value,
}: InputInterface) {
  return (
    <div className="input__container">
      <input
        className="input__input"
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        value={value}
      />
      <label
        className="input__label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

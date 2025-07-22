import "./Checkbox.scss";
import { CheckboxInterface } from "./Checkbox.interface";

export function Checkbox({
  id,
  label,
  onBlur,
  onChange,
  onFocus,
}: CheckboxInterface) {
  return (
    <label className="checkbox__label">
      {label}
      <input
        className="checkbox__checkbox"
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type="checkbox"
      />
      <span className="checkbox__checkmark"></span>
    </label>
  );
}

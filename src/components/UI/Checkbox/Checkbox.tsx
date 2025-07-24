import "./Checkbox.scss";
import { DATA_TEST_ID } from "constants/dataTestId";
import { prepareDataTestId } from "utils/test";
import { CheckboxInterface } from "./Checkbox.interface";

export function Checkbox({
  id,
  label,
  onBlur,
  onChange,
  onFocus,
}: CheckboxInterface) {
  return (
    <label
      {...prepareDataTestId(DATA_TEST_ID.LABEL)}
      className="checkbox__label"
    >
      {label}
      <input
        {...prepareDataTestId(DATA_TEST_ID.CHECKBOX)}
        className="checkbox__checkbox"
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type="checkbox"
      />
      <span
        {...prepareDataTestId(DATA_TEST_ID.CHECKMARK)}
        className="checkbox__checkmark"
      ></span>
    </label>
  );
}

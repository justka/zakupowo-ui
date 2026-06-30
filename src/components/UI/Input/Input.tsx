import "./Input.scss";
import { TextField } from "@mui/material";
import { InputInterface } from "./Input.interface";

export function Input({
  disabled,
  error,
  helperText,
  id,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  type = "text",
  value,
}: InputInterface) {
  return (
    <div className="input__container">
      <TextField
        disabled={disabled}
        error={error}
        fullWidth
        helperText={helperText}
        id={id}
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
        size="medium"
        sx={{
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#6f66eb",
            },
            "color": "#a09fac",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#6f66eb",
            },
            "&:hover fieldset": {
              borderColor: "#6f66eb",
            },
            "& fieldset": {
              borderColor: "#a09fac",
            },
          },
        }}
        type={type}
        value={value}
        variant="outlined"
      />
    </div>
  );
}

import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const TextInput = ({ name, control, rules, label, type, errors }) => {
  return (
    <Controller
      key={name}
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          id={name}
          label={label}
          variant="outlined"
          type={type}
          error={Boolean(errors[name]?.message)}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
};

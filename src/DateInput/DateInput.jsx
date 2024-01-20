import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const DateInput = ({ name, control, rules, label, errors }) => {
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
          type="date"
          error={Boolean(errors[name]?.message)}
          helperText={errors[name]?.message}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
};

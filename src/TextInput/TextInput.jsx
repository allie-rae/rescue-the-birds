import { TextField, useMediaQuery } from "@mui/material";
import { Controller } from "react-hook-form";
import { longLabelInputStyling } from "../constants";

/*
  multiline: set as true if a multi-line input is desired
  minRows: min rows desired for multi-line input (value will be ignored if multiLine is falsy), defaults to 4
  longLabel: set as true if the label is long and requires wrap (even if only needs wrap in mobile view)
    *Note: if longLabel is true and multiline is false, the input will expand to 2 lines in mobile view
*/
export const TextInput = ({
  name,
  control,
  rules,
  label,
  type,
  multiline = false,
  minRows = 4,
  longLabel = false,
  errors,
}) => {
  if (longLabel && !multiline) {
    if (useMediaQuery("(max-width:600px)")) {
      multiline = true;
      minRows = 2;
    }
  }
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
          multiline={multiline}
          minRows={minRows}
          sx={longLabel && longLabelInputStyling}
          error={Boolean(errors[name]?.message)}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
};

import React from "react";

// component MUI
import TextField from "@mui/material/TextField";

interface InputProps {
  id: string;
  label: string;
  value: any;
  handleChange: () => void;
}
export const InputLabel = ({ handleChange, id, value, label }: InputProps) => {
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
};

import React from "react";

//components MUI
import InputBase from "@mui/material/InputBase";
import styled from "styled-components";

interface InputProps {
  id: string;
  placeholder: string;
  onHandleChange: () => void;
}
export const Input = ({
  id,
  placeholder,
  onHandleChange,
  value,
}: InputProps) => {
  return (
    <InputBase
      id={id}
      placeholder={placeholder}
      onChange={onHandleChange}
    />
  );
};

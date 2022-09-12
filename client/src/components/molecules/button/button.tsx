import React, { ReactNode } from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

// styles
import styled from "styled-components";

export const BaseButton = styled(ButtonUnstyled)`
  padding: 10px;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  min-width: 1000px;
`;

interface ButtonProps {
  children: ReactNode;
}
export const Button = ({ children }: ButtonProps) => {
  return (
    <div>
      <BaseButton>{children}</BaseButton>
    </div>
  );
};

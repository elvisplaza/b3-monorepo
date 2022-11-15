import React, { ReactNode } from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

import { TextPrimary } from "components/atoms";
// styles
import styled from "styled-components";

export const BaseButton = styled(ButtonUnstyled)`
  padding: 10px;
  border-radius: 5px;
  background-color: #12c5ac;
  color: #000000;
  width: 250px;
  border: 0px;
  cursor: pointer;
`;

interface ButtonProps {
  text: string;
}
export const Button = ({ text }: ButtonProps) => {
  return (
    <div>
      <BaseButton>
        <TextPrimary>{text}</TextPrimary>
      </BaseButton>
    </div>
  );
};

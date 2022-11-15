import { Icon } from "@atoms/icon";
import { Input } from "@atoms/input";
import React from "react";
// components MUI
interface SearchBarProps {
  onHandleSearchChange: () => void;
}

// styles
import styled from "styled-components";

const Search = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;
export const SearchBar = ({ onHandleSearchChange }: SearchBarProps) => {
  return (
    <Search>
      <Icon iconName="search" />
      <Input
        id="search"
        placeholder="Search..."
        onHandleChange={onHandleSearchChange}
      />
    </Search>
  );
};

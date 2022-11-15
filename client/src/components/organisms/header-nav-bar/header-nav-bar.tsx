import React from "react";
import styled from "styled-components";

// components MUI

import Toolbar from "@mui/material/Toolbar";

import { Logo } from "components/atoms/logo";

import { SearchBar } from "@molecules/search-bar";

export const HeaderNavBarLight = styled(Toolbar)`
  height: 4.0625rem;
  background-color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderNavBar = () => {
  return (
    <HeaderNavBarLight>
      <Toolbar
        className="wrapper"
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Logo
          src="/logo/logo.png"
          alt="logo of unreliable travel guide"
        />
        <SearchBar onHandleSearchChange={() => {}} />
      </Toolbar>
    </HeaderNavBarLight>
  );
};

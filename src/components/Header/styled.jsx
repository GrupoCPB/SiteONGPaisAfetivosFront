import styled from "styled-components";

import { AppBar, Link, MenuItem } from "@mui/material";

export const HeaderMenu = styled(AppBar)`
  color: black;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;

  @media(min-width: 900px) {
    height: 100px;;
  }
  }
`;

export const LinkRounting = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

export const MenuItemAbout = styled(MenuItem)`
  &:hover {
    background-color: #ececec;
    border-left: 6px solid black;
  }
`;

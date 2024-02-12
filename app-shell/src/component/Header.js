import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarMobile from "./appbar/appbarMobile";
import AppbarDesktop from "./appbar/appbarDesktop";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? <AppbarMobile matches={matches}/> : <AppbarDesktop matches={matches}/>}
    </>
  );
}

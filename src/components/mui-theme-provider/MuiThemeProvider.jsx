"use client";
import theme from "@/lib/theme";
import { ThemeProvider } from "@mui/material";

const MuiThemeProvider = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;

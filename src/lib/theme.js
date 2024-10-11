
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0070f3", // Primary color 
        },
        secondary: {
            main: "#19857b", // Secondary color 
        },
    }, 
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: "2.5rem",
        },
        h2: {
            fontSize: "2rem",
        },
        h3: {
            fontSize: "1.75rem",
        },
        // Customize more typography styles if needed 
    },
  
});

export default theme; 
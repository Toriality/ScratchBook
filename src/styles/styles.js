import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "inset 0 0 0 2px " + primaryColor,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
          body {
            background: linear-gradient(  127deg,  rgba(255, 248, 185, 0.8),  rgba(0, 255, 0, 0) 70.71%),linear-gradient(336deg, rgba(255, 185, 120, 0.8), rgba(0, 0, 255, 0) 70.71%) !important;
          }
        `,
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  typography: {},
});

export default theme;

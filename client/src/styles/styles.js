import { colors } from "./colors";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          minHeight: "24ch",
          padding: "12px 16px",
          "&:hover": {
            boxShadow: "inset 0 0 0 2px " + colors.primary,
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  typography: {},
});

export default theme;

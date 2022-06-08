import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#42a5f5",
          },
        },
      },
    },
  },
});

export default theme;

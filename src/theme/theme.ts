import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      cornflowerBlue: string;
      jaguar: string;
      santasGray: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      cornflowerBlue?: string;
      jaguar?: string;
      santasGray?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

export const theme = createTheme({
  palette: {
    custom: {
      cornflowerBlue: "#6f66eb",
      jaguar: "#040212",
      santasGray: "#a09fac",
    },
    primary: {
      main: "#6f66eb",
    },
    secondary: {
      main: "#a09fac",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontSize: 16,
          padding: "16px 32px",
          textTransform: "none",
        },
        contained: {
          "&.MuiButton-containedCustom": {
            "backgroundColor": "#6f66eb",
            "color": "#ffffff",
            "&:hover": {
              backgroundColor: "#5a52d4",
            },
          },
        },
        outlined: {
          "&.MuiButton-outlinedCustom": {
            "borderColor": "#6f66eb",
            "color": "#6f66eb",
            "&:hover": {
              backgroundColor: "rgba(111, 102, 235, 0.04)",
            },
          },
        },
      },
    },
  },
});

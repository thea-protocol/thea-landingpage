import { createTheme } from "@mui/material";
import { orange, red, green, blue } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#0b0b0b",
      white: "#ffffff",
    },
    primary: {
      main: "#105857",
      light: "#DBE9E1",
      dark: "#0A3A3A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2A2ACE",
      light: "#af9cee",
      dark: "#0024c7",
      contrastText: "#ffffff",
    },
    error: {
      main: red[500],
      light: red[300],
      dark: red[600],
    },
    warning: {
      main: orange[500],
      light: orange[300],
      dark: orange[600],
    },
    info: {
      main: blue[500],
      light: blue[300],
      dark: blue[600],
    },
    success: {
      main: green[500],
      light: green[50],
      dark: green[600],
      contrastText: "#ffffff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f6f6f6",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      paper: "#ffffff",
      default: "#f2f2f2",
    },
    text: {
      primary: "#0b0b0b",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.38)",
    },
    divider: "rgba(0,0,0,0.12)",
    action: {
      active: "rgba(0,0,0,0.54)",
      hover: "rgba(0,0,0,0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0,0,0,0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0,0,0,0.24)",
      disabledBackground: "rgba(0,0,0,0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0,0,0,0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          borderRadius: "10px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          // You can write here background color
          // '&::before': {
          //   borderBottom: '1px solid rgba(0, 0, 0, 0.32)',
          // },
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 4px 4px 2px rgba(0, 0, 0, 0.06)",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    "rgb(38, 57, 77) 0px 20px 30px -10px",
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
  ],
  typography: {
    // fontFamily: "'Inter', sans-serif",
    fontFamily: "'Roboto', sans-serif",
  },
});

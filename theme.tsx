import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2E2E2E",
    },
  },
  typography: {
    h4: {
      fontFamily: '"Playfair Display", sans-serif',
      fontWeight: 700,
    },
  },
})

export default theme
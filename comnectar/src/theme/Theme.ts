import { createTheme } from "@material-ui/core";

const Theme = createTheme({
  palette: {
    background:{
    },
    primary: {
      main: '#3E733C',
    },
    secondary: {
      main: '#ADBF24',
    },
    text: {
      primary: '#ffffff',
      secondary: '#40352C',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  overrides: {
    MuiButton: {
        root: {

        },
      },
     MuiOutlinedInput:{
      root:{
        '& fieldSet':{
        }
      }
     }
  },
}
)

export default Theme;
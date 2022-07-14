import { createTheme } from "@material-ui/core";
import { color } from "@mui/system";

const Theme = createTheme({
  palette: {
    background: {
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ADBF24',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px',
        fontWeight:"bold",
      },
      text:{
        secondary: {
          color:'#ffffff'
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '8px',
        backgroundColor: 'rgba(131, 131, 131,0.4)',
        // Cor do texto do Form
        color:'#000000'
      }
      ,
    },
    MuiFormLabel: {
      root: {
        // Cor do texto quando sobe
        color: '#000000',
      },
    },
    MuiInputLabel:{
      root:{
        //Cor do Label
        color:'#000000'
      }
    }
  }
}
);

export default Theme;
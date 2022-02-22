import { createTheme } from '@material-ui/core/styles';
import { primarycolor, secondarycolor, especialcolor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primarycolor,
      contrastText: "white",
    },
    secondary:  {
        main: secondarycolor,
    },
    

  },
});

export default theme
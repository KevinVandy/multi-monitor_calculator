import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      secondary: {
        main: '#e6d412',
      },
      primary: {
        main: '#2d1269',
      },
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: '1em'
        }
      }
    }
  }),
);

export default theme;

import { createMuiTheme, withTheme } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';

export const mainTheme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: green,
        text: {
            primary: '#fff',
        },
    },
});
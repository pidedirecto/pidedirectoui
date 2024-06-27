/**
 * @prettier
 */
import { createMuiTheme } from '@material-ui/core/styles';
import { useTheme } from 'src/hooks/useTheme';

export function useConfigureMuiTheme() {
    const theme = useTheme();

    return createMuiTheme({
        palette: {
            primary: {
                main: theme.palette.surface.brandContrast,
            },
            secondary: {
                main: theme.palette.surface.brandSecondary,
            },
        },
        typography: {
            fontFamily: 'var(--font-regular)',
        },
    });
}

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        background: {
            default: 'black'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    color: 'white'
                }
            }
        }
    },
	typography: {
		fontFamily: `satoshi, "Space Mono", monospace, sans-serif`,
	},
})

export default theme
// COMPONENTS
import App from './App.tsx'
import NavigationFrame from "./components/NavigationFrame";
// DEPENDENCIES
import { ThemeProvider, CssBaseline } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
// STYLES
import theme from './styles/theme';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavigationFrame>
				<App />
			</NavigationFrame>
		</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
)

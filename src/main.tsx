// COMPONENTS
import App from './App.tsx'
import NavigationFrame from "./components/NavigationFrame";
// DEPENDENCIES
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<NavigationFrame>
				<App />
			</NavigationFrame>
		</BrowserRouter>
	</StrictMode>,
)

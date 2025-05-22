// COMPONENTS
import App from './App.tsx'
// DEPENDENCIES
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
// LAYOUT
// import Layout from './Layout.tsx';
// STYLES
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			{/* <Layout> */}
				<App />
			{/* </Layout> */}
		</BrowserRouter>
	</StrictMode>,
)

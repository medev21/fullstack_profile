import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import '../css/universal.scss';
import '../css/App.scss';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, 
	document.getElementById("container")
);
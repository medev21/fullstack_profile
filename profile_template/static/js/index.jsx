import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router';
import App from "./App";
import '../css/universal.scss';
import '../css/App.scss';

ReactDOM.render(
		<App />
	, 
	document.getElementById("container")
);
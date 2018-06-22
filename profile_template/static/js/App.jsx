import React, { Component } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/introPage";
import Experience from "./components/experiencePage";
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import { Link, Route, Switch } from 'react-router';
import { HashRouter, NavLink, Route } from 'react-router-dom';

class App extends Component {
	render(){
		return (
			<HashRouter>
				<div className="pageSections">
					<Navbar />
					<div className="navContent">
						<Route path="/" component={Intro}/>
						<Route path="/experience" component={Experience}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
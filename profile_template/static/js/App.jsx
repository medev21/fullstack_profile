import React, { Component } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/introPage";
import Experience from "./components/experiencePage";
import Profile from "./components/profilePage";
import Contact from "./components/contactPage";
//import { HashRouter, NavLink, Route } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import { BrowserHi } from 'react-router';

class App extends Component {
	render(){
		return (
			<Router>
				<div className="pageSections">
					<Navbar />
					<div className="navContent">
						<Route exact path="/" component={Intro}/>
						<Route path="/experience" component={Experience}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
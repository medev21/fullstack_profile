import React, { Component } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/introPage";
import Projects from "./components/projectsPage";
import Resume from "./components/resumePage";
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
						<Route path="/projects" component={Projects}/>
						<Route path="/resume" component={Resume}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
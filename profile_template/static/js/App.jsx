import React, { Component } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/introPage";
import Projects from "./components/projectsPage";
import Profile from "./components/profilePage";
import Contact from "./components/contactPage";
import Kanban from "./components/kanbanPage";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
	render(){
		return (
			<Router>
				<div className="pageSections">
					<Navbar />
					<div className="navContent">
						<Route exact path="/" component={Intro}/>
						<Route path="/projects" component={Projects}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
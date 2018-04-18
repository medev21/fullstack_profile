import React, { Component } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/introPage";
import Experience from "./components/experiencePage";
import { Link, Route, Switch} from 'react-router-dom';

class App extends Component {
	render(){
		return (
			<div className="pageSections">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Intro}/>
					<Route path="/experience" component={Experience}/>
				</Switch>
			</div>


		);
	}
}

export default App;
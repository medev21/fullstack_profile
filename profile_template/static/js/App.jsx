import React, { Component } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/introPage";

class App extends Component {
	render(){
		return (
			<div className="pageSections">
				<Navbar />
				<Intro />
			</div>
			
		);
	}
}

export default App;
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Intro extends Component {
	render(){

		return(
			<div className="defaultWrapper homeWrapper">
				<h2>Frontend developer who enjoys finding solutions to complex problems in an elegant way.</h2>
				<p>Enthusiastic, motivated, and high-performing team player who is passionate about frontend development</p>
				<Link to='/profile'>View profile</Link>
			</div>
		)
	}
}

export default Intro;
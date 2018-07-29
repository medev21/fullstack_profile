import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render(){
		return (

			<div className="navFrame">
				<Link to="/">
					<div className="topNav"><div className="navBar"><h3>Marteen</h3></div></div>
				</Link>

				<Link to="/profile">
					<div className="rightNav"><div className="navBar"><h3>Profile</h3></div></div>
				</Link>

				<Link to="/experience">
					<div className="bottomNav"><div className="navBar"><h3>Experience</h3></div></div>
				</Link>

				<Link to="/contact">
					<div className="leftNav"><div className="navBar"><h3>Contact</h3></div></div>
				</Link>
	      	</div>

		);
	}
}

export default Navbar;
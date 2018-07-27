import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
	render(){
		return (

			<div className="navFrame">
				<NavLink to="/">
					<div className="topNav"><div className="navBar"><h3>Marteen</h3></div></div>
				</NavLink>

				<NavLink to="/">
					<div className="rightNav"><div className="navBar"><h3>Profile</h3></div></div>
				</NavLink>

				<NavLink to="/experience">
					<div className="bottomNav"><div className="navBar"><h3>Experience</h3></div></div>
				</NavLink>

				<NavLink to="/">
					<div className="leftNav"><div className="navBar"><h3>Contact</h3></div></div>
				</NavLink>
	      	</div>

		);
	}
}

export default Navbar;
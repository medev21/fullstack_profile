import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {


	render(){
		return (
			<div className="navbarContainer">
			<div className="navFrame">
				<Link to="/">
					<div className="topNav"><div className="navBar"><h3>Martin Benavides</h3></div></div>
				</Link>

				<Link to="/projects" >
					<div className="rightNav"><div className="navBar"><h3>Projects</h3></div></div>
				</Link>

				<Link to="/contact">
					<div className="bottomNav"><div className="navBar"><h3>Contact</h3></div></div>
				</Link>

				<Link to={{pathname: '/profile'}}>
					<div className="leftNav"><div className="navBar"><h3>Profile</h3></div></div>
				</Link>
	      	</div>

	      	<div className="mobileNavFrame">
	      		<Link to="/">
					<div className="topNav"><div className="navBar"><h3>Martin Benavides</h3></div></div>
				</Link>

				

				<Link to="/contact">
					<div className="bottomNav"><div className="navBar"><h3>Contact</h3></div></div>
				</Link>

				{/*<Link to="/projects" >
					<div className="rightNav"><div className="navBar"><h3>Projects</h3></div></div>
				</Link>*/}

				{/*<Link to={{pathname: '/profile'}}>
					<div className="leftNav"><div className="navBar"><h3>Profile</h3></div></div>
				</Link>*/}
	      	</div>
	      	</div>

		);
	}
}

export default Navbar;
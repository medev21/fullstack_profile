import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

	handleToggleClick(){
		this.props.onClick();
	}


	render(){
		let iconCondition = this.props.iconCondition;

		return (
			<div className="navbarContainer">
				<div className="navFrame">
					<Link to="/">
						<div className="topNav"><div className="navBar"><h3>Martin Benavides</h3></div></div>
					</Link>

					<Link to="/profile" >
						<div className="rightNav"><div className="navBar"><h3>Profile</h3></div></div>
					</Link>

					<Link to="/contact">
						<div className="bottomNav"><div className="navBar"><h3>Contact</h3></div></div>
					</Link>

					<Link to="/projects">
						<div className="leftNav"><div className="navBar"><h3>Projects</h3></div></div>
					</Link>
		      	</div>


		      	<div className={(iconCondition) ? 'toggleNav' : 'toggleNav hide'}>
					<Link to="/profile" onClick={this.props.onClick.bind(this)}>
						<h3>Profile</h3>
					</Link>
					<Link to="/projects" onClick={this.props.onClick.bind(this)}>
						<h3>Projects</h3>
					</Link>
					<Link to="/contact" onClick={this.props.onClick.bind(this)}>
						<h3>Contact</h3>
					</Link>
				</div>

		      	<div className="mobileNavFrame">
		      		<Link to="/">
						<div className="topNav"><div className="navBar"><h3>Martin Benavides</h3></div></div>
					</Link>

					<div className="bottomNav">
						<div className="navBar">
							<div className={(iconCondition) ? 'hamburgerIcon' : 'hamburgerIcon open' } onClick={this.props.onClick.bind(this)}>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
		      	</div>
	      	</div>

		);
	}
}

export default Navbar;
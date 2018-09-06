import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

	handleToggleClick(){
		this.props.onClick();
		
	}


	render(){
		let iconCondition = this.props.iconCondition;

		// if(iconCondition){
		// 	document.getElementById("mobileToggleNav").style.height = "0px";
		// 	console.log(iconCondition)
		// }else{
		// 	console.log(iconCondition)

		// 	// document.getElementById("mobileToggleNav").style.height = "100px";
		// }

		//if true
		// set height to 0
		//if false
		// set height to 100px

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


		      	<div className={(iconCondition) ? 'toggleNav' : 'toggleNav hide'}>
					<Link to="/profile">
						<h3>Profile</h3>
					</Link>
					<Link to="/projects" >
						<h3>Projects</h3>
					</Link>
					<Link to="/contact">
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
					
						

					{/*<Link to="/contact">
						<div className="bottomNav"><div className="navBar"><h3>Contact</h3></div></div>
					</Link>*/}

					{/*<Link to="/projects" >
						<div className="rightNav"><div className="navBar"><h3>Projects</h3></div></div>
					</Link>*/}

					{/*<Link to={{pathname: '/profile'}}>
						<div className="leftNav"><div className="navBar"><h3>Profile</h3></div></div>
					</Link>
		style={{ height: iconCondition ? '0px' : '100px' }}
		style={{ display: iconCondition ? 'none' : 'block' }}

				*/}
		      	</div>
	      	</div>

		);
	}
}

export default Navbar;



// <div className={(iconCondition) ? 'toggleNav' : 'toggleNav hide'}>
// 						<Link to="/profile">
// 							<h3>Profile</h3>
// 						</Link>
// 						<Link to="/projects" >
// 							<h3>Projects</h3>
// 						</Link>
// 						<Link to="/contact">
// 							<h3>Contact</h3>
// 						</Link>
// 					</div>
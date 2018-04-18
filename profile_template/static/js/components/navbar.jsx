import React, { Component } from "react";

class Navbar extends Component {
	render(){
		return (

			<div className="navFrame">
		        
		        <a href="/" className="topNav">
		          <div className="navBar"><h3>Marteen</h3></div>
		        </a>
		        <a href="" className="rightNav">
		          <div className="navBar"><h3>Profile</h3></div>
		        </a>
		        <a href="/experience" className="bottomNav">
		          <div className="navBar"><h3>Experience</h3></div>
		        </a>
		        <a href="" className="leftNav">
		          <div className="navBar"><h3>Contact</h3></div>
		        </a>
	      	</div>

		);
	}
}


export default Navbar;
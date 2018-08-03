import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {


	constructor(props){
		super(props);
		this.state = {
			experience: [
				{
					'company': 'company A',
					'date': 'August 2016 - Present',
					'jobTitle': 'salesman'
				},
				{
					'company': 'company B',
					'date': 'February 2016 - August 2016',
					'jobTitle': 'Developer'
				},
				{
					'company': 'company C',
					'date': 'August 2012 - October 2015',
					'jobTitle': 'clerk'
				}
			],
			education: [
				{
					'school': 'shcool A',
					'date': 'Fall 2015',
					'degree': 'mathematics'
				},
				{
					'school': 'school B',
					'date': 'May 2008',
					'degree': 'business'
				}
			],
			skills: [
				{
					'tools': 'HTML, CSS, Javascript, SQL, Python'
				}
			]
		};
	}

	render(){
		return (

			<div className="navFrame">
				<Link to="/">
					<div className="topNav"><div className="navBar"><h3>Marteen</h3></div></div>
				</Link>

				<Link to="/projects">
					<div className="rightNav"><div className="navBar"><h3>Projects</h3></div></div>
				</Link>

				<Link to="/contact">
					<div className="bottomNav"><div className="navBar"><h3>Contact</h3></div></div>
				</Link>

				<Link to={{pathname: '/profile', state: {experience: this.state.experience, education: this.state.education, skills: this.state.skills}}}>
					<div className="leftNav"><div className="navBar"><h3>Profile</h3></div></div>
				</Link>
	      	</div>

		);
	}
}

export default Navbar;
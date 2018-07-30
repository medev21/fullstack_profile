import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {


	constructor(){
		super();
		this.state = {
			profile: []
		}
	}

	getExperience(){
		this.setState(
			{
				'experience': [
					{
						'company': 'Groundtruth',
						'date': 'August 2016 - Present',
						'jobTitle': 'Software Engineer'
					},
					{
						'company': 'Learning Library TV',
						'date': 'February 2016 - August 2016',
						'jobTitle': 'Junior Developer'
					},
					{
						'company': 'Smelter Service',
						'date': 'August 2012 - October 2015',
						'jobTitle': 'Plant Engineer'
					}
				],
				'education': [
					{
						'school': 'Startup Institute',
						'date': 'Fall 2015 Cohort',
						'degree': 'Web Development Coursework'
					},
					{
						'school': 'Tennessee Tech University',
						'date': 'May 2012',
						'degree': 'Bachelor of Science, Mechanical Engineering'
					}
				],
				'skills': [
					{
						'Tools': 'HTML, CSS, Javascript, SQL, Python, Autocad, SolidWorks'
					}
				]
			}
		);
	}


	componentWillMount(){
		this.getExperience();
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

				<Link to={{pathname: '/profile', profile: this.state.profile}}>
					<div className="leftNav"><div className="navBar"><h3>Profile</h3></div></div>
				</Link>
	      	</div>

		);
	}
}

export default Navbar;
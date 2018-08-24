import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {


	constructor(props){
		super(props);
		this.state = {
			experience: [
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
			education: [
				{
					'school': 'Nashville State Community College',
					'date': ' May 2015',
					'degree': 'Non Degree Computer Science'
				},
				{
					'school': 'Tennessee Tech University',
					'date': 'May 2012',
					'degree': 'Bachelors of Science in Mechanical Engineering'
				}
			],
			skills: [
				{
					'tools': 'CSS, Git, HTML, JavaScript, SQL, Python, Perl, Ruby, Scala, AutoCAD, SolidWorks, AWS(EC2/S3)'
				}
			]
		};
	}

	render(){
		return (

			<div className="navFrame">
				<Link to="/">
					<div className="topNav"><div className="navBar"><h3>Martin Benavides</h3></div></div>
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
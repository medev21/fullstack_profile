import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {


	constructor(props){
		super(props);
		this.state = {
			// profile: [
			// 	{'experience': [
			// 		{
			// 			'company': 'company A',
			// 			'date': 'August 2016 - Present',
			// 			'jobTitle': 'salesman'
			// 		},
			// 		{
			// 			'company': 'company B',
			// 			'date': 'February 2016 - August 2016',
			// 			'jobTitle': 'Developer'
			// 		},
			// 		{
			// 			'company': 'company C',
			// 			'date': 'August 2012 - October 2015',
			// 			'jobTitle': 'clerk'
			// 		}
			// 	]},
			// 	{'education': [
			// 		{
			// 			'school': 'shcool A',
			// 			'date': 'Fall 2015',
			// 			'degree': 'mathematics'
			// 		},
			// 		{
			// 			'school': 'school B',
			// 			'date': 'May 2008',
			// 			'degree': 'business'
			// 		}
			// 	]},
			// 	{'skills': [
			// 		{
			// 			'Tools': 'HTML, CSS, Javascript, SQL, Python'
			// 		}
			// 	]}
			// ],
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
				}
			],
			skills: [
				{
					'Tools': 'HTML, CSS, Javascript, SQL, Python'
				}
			]
		};
	}

	// getProfile(){
	// 	this.setState(
	// 		{
	// 			profile: [
	// 				{'experience': [
	// 					{
	// 						'company': 'company A',
	// 						'date': 'August 2016 - Present',
	// 						'jobTitle': 'salesman'
	// 					},
	// 					{
	// 						'company': 'company B',
	// 						'date': 'February 2016 - August 2016',
	// 						'jobTitle': 'Developer'
	// 					},
	// 					{
	// 						'company': 'company C',
	// 						'date': 'August 2012 - October 2015',
	// 						'jobTitle': 'clerk'
	// 					}
	// 				]},
	// 				{'education': [
	// 					{
	// 						'school': 'shcool A',
	// 						'date': 'Fall 2015',
	// 						'degree': 'mathematics'
	// 					},
	// 					{
	// 						'school': 'school B',
	// 						'date': 'May 2008',
	// 						'degree': 'business'
	// 					}
	// 				]},
	// 				{'skills': [
	// 					{
	// 						'Tools': 'HTML, CSS, Javascript, SQL, Python'
	// 					}
	// 				]}
	// 			]
	// 		}
	// 	);
	// }

	// getExperience(){
	// 	this.setState(
	// 		{'experience': [
	// 			{
	// 				'company': 'Groundtruth',
	// 				'date': 'August 2016 - Present',
	// 				'jobTitle': 'Software Engineer'
	// 			},
	// 			{
	// 				'company': 'Learning Library TV',
	// 				'date': 'February 2016 - August 2016',
	// 				'jobTitle': 'Junior Developer'
	// 			},
	// 			{
	// 				'company': 'Smelter Service',
	// 				'date': 'August 2012 - October 2015',
	// 				'jobTitle': 'Plant Engineer'
	// 			}
	// 		]}
	// 	);
	// }

	// getEducation(){
	// 	this.setState(
	// 		{'education': [
	// 			{
	// 				'school': 'Startup Institute',
	// 				'date': 'Fall 2015 Cohort',
	// 				'degree': 'Web Development Coursework'
	// 			},
	// 			{
	// 				'school': 'Tennessee Tech University',
	// 				'date': 'May 2012',
	// 				'degree': 'Bachelor of Science, Mechanical Engineering'
	// 			}
	// 		]},
	// 	);
	// }

	// getSkills(){
	// 	this.setState(
	// 		{'skills': [
	// 			{
	// 				'Tools': 'HTML, CSS, Javascript, SQL, Python, Autocad, SolidWorks'
	// 			}
	// 		]}
	// 	);
	// }


	componentWillMount(){
		// this.getProfile();
		// this.getExperience();
		// this.getEducation();
		// this.getSkills();
		// console.log(this.state.profile);
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
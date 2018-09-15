import React, { Component } from "react";
import Navbar from "./components/navbar";
import Intro from "./components/introPage";
import Projects from "./components/projectsPage";
import Profile from "./components/profilePage";
import Contact from "./components/contactPage";
import Kanban from "./components/kanbanPage";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ScrollToTopOnMount from "./components/scrollToTop";


class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
		  hideProjectsNavbar: false,
		  mobileIconActive: true,
		  experience: [
				{
					'company': 'GroundTruth',
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
					'degree': 'Non-Degree Computer Science'
				},
				{
					'school': 'Tennessee Tech University',
					'date': 'May 2012',
					'degree': 'Bachelors of Science in Mechanical Engineering'
				}
			],
			skills: [
				{
					'tools': 'HTML, CSS JavaScript, SQL, Python, Perl, Ruby, Scala, AutoCAD, SolidWorks, AWS(EC2/S3, Git, Linux'
				}
			],

		};

		this.handleChangeProjectNav = this.handleChangeProjectNav.bind(this);
	}

	handleToggleClick(e){
		this.setState({ mobileIconActive: !this.state.mobileIconActive })
	}


	handleChangeProjectNav(e){
		document.getElementById("projectsNavbar").style.display = "none";
		// console.log('hello world')
	}

	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render(){
		return (
			<Router>
				<div className="pageSections">
					
					<div className="navContent">
						
						<Route exact path="/" component={Intro}/>
						<Route path="/projects" render={(props) => <Projects projectNav={this.handleChangeProjectNav} {...props}/>} />
						<Route path="/profile" render={() => <Profile profile={{experience: this.state.experience, education: this.state.education, skills: this.state.skills}} />} />
						<Route path="/contact" component={Contact}/>
					</div>
					<Navbar onClick={this.handleToggleClick.bind(this)} iconCondition={this.state.mobileIconActive}/>
				</div>
			</Router>
		);
	}
}

export default App;
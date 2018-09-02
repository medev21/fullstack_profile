import React, { Component } from "react";
import ExperienceItem from "./experienceItem";
import EducationItem from "./educationItem";
import SkillsItem from "./skillsItem";

class Profile extends Component {

	render(){

		const experiences = this.props.profile.experience;
		const educations = this.props.profile.education;
		const skills = this.props.profile.skills;

		return(
			<div className="profileWrapper">

				{/*<h2>Martin Benavides</h2>*/}

				<div className="profileContainer">
					<div className="experienceSection section">
						<div className="profileHeader">
							<h4>experience</h4>
						</div>
						<div className="profileDesc">
							{
								experiences.map((experience, idx) => {
									return(
										<ExperienceItem key={idx} experience={experience} />
									)
								})
							}
						</div>
						
					</div>

					<div className="educationSection section">
						<div className="profileHeader">
							<h4>education</h4>
						</div>
						<div className="profileDesc">
							{
								educations.map((education, idx) => {
									return(
										<EducationItem key={idx} education={education} />
									)
								})
							}
						</div>
					</div>

					<div className="skillsSection section">
						<div className="profileHeader">
							<h4>skills</h4>
						</div>
						<div className="profileDesc">
							{
								skills.map((skills, idx) => {
									return(
										<SkillsItem key={idx} skills={skills} />
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		)

	}
}

export default Profile;
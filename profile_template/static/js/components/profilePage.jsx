import React, { Component } from "react";
import ExperienceItem from "./experienceItem";
import EducationItem from "./educationItem";
import SkillsItem from "./skillsItem";

class Profile extends Component {

	render(){

		const experiences = this.props.location.state.experience;
		const educations = this.props.location.state.education;
		const skills = this.props.location.state.skills;

		return(
			<div className="profileWrapper">
				<div className="introWrapper">
					<h4>experience</h4>
					{
						experiences.map((experience, idx) => {
							return(
								<ExperienceItem key={idx} experience={experience} />
							)
						})
					}
				</div>

				<div className="introWrapper">
					<h4>education</h4>
					{
						educations.map((education, idx) => {
							return(
								<EducationItem key={idx} education={education} />
							)
						})
					}
				</div>

				<div className="introWrapper">
					<h4>skills</h4>
					{
						skills.map((skills, idx) => {
							return(
								<SkillsItem key={idx} skills={skills} />
							)
						})
					}
				</div>
			</div>
		)

	}
}

export default Profile;
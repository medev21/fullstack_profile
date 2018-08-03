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
			<div>
				<div className="introWrapper">{
					experiences.map((experience, idx) => {
						return(
							<ExperienceItem key={idx} experience={experience} />
						)
					})
				}
				</div>

				<div className="introWrapper">{
					educations.map((education, idx) => {
						return(
							<EducationItem key={idx} education={education} />
						)
					})
				}</div>

				<div className="introWrapper">
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
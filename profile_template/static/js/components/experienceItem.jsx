import React, { Component } from "react";

class ExperienceItem extends Component {
	render(){
		return(
			<ul key={this.props.experience.company}>
				<li key={this.props.experience.company}>{this.props.experience.company}</li>
				<li key={this.props.experience.date}>{this.props.experience.date}</li>
				<li key={this.props.experience.jobTitle}>{this.props.experience.jobTitle}</li>
			</ul>
		)
	}
}

export default ExperienceItem;
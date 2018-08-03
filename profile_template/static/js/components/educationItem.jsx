import React, { Component } from "react";

class EducationItem extends Component {
	render(){
		return(
			<ul key={this.props.education.school}>
				<li key={this.props.education.school}>{this.props.education.school}</li>
				<li key={this.props.education.date}>{this.props.education.date}</li>
				<li key={this.props.education.degree}>{this.props.education.degree}</li>
			</ul>
		)
	}
}

export default EducationItem;
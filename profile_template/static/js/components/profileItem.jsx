import React, { Component } from "react";

class ProfileItem extends Component {
	render(){
		console.log(this.props.experience.company, 'ProfileItem')
			console.log(this.props.experience.date, 'ProfileItem')
			console.log(this.props.experience.jobTitle, 'ProfileItem');
		return(
			<ul>
				<li>{this.props.experience.company}</li>
				<li>{this.props.experience.date}</li>
				<li>{this.props.experience.jobTitle}</li>
			</ul>
		)
	}
}

export default ProfileItem;
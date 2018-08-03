import React, { Component } from "react";

class SkillsItem extends Component {
	render(){
		return(
			<ul>
				<li>{this.props.skills.tools}</li>
			</ul>
		)
	}
}

export default SkillsItem;
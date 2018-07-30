import React, { Component } from "react";

class Profile extends Component {

	render(){
		let experience;

		// experience = this.props.experience

		// console.log(experience);
		return(
			<div className="introWrapper">
				<div className="experienceSection">
					<h3>Experience</h3>
					<ul>
						<li>
							<h4>Company A</h4>
							<p>april 2020 - present</p>
							<p>engineer</p>
						</li>
						<li>
							<h4>Company A</h4>
							<p>april 2020 - present</p>
							<p>engineer</p>
						</li>
						<li>
							<h4>Company A</h4>
							<p>april 2020 - present</p>
							<p>engineer</p>
						</li>
					</ul>
				</div>
				<div className="educationSection">
					<h3>Education</h3>
					<ul>
						<li>
							<h4>School A</h4>
							<p>april 2020 - present</p>
							<p>engineer</p>
						</li>
						<li>
							<h4>School A</h4>
							<p>april 2020 - present</p>
							<p>engineer</p>
						</li>
						<li>
							<h4>School A</h4>
							<p>april 2020 - present</p>
							<p>engineer</p>
						</li>
					</ul>
				</div>
				<div className="skillSection">
					<h3>Skills</h3>
					<p>HTML, CSS, JAVASCRIPT</p>
				</div>
			</div>
		)
	}
}

export default Profile;
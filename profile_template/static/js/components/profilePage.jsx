import React, { Component } from "react";
import ProfileItem from "./profileItem"

class Profile extends Component {

	render(){

		let profile = this.props.location.profile.map((experience) => <li>{experience.experience}</li>);
		// let profile = this.props.location.profile;
		// console.log(this.props.location.profile);
		console.log(profile);
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
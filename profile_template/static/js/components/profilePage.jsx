import React, { Component } from "react";
import ProfileItem from "./profileItem"

class Profile extends Component {

	render(){

		const experiences = this.props.location.state.experience;
		let educations = this.props.location.state.education;
		let skills = this.props.location.state.skills;
		// console.log(experiences);
		// console.log(education);
		// console.log(skills);
		return (experiences.map((experience, idx) => {

			

			// <ProfileItem key={idx} experience={experience}/>
				<div className="introWrapper">
					<ul>
						<li key={experience.company}>{experience.company}</li>
						<li key={experience.date}>{experience.date}</li>
						<li key={experience.jobTitle}>{experience.jobTitle}</li>
					</ul>
				</div>

			console.log(experience.company)
			console.log(experience.date)
			console.log(experience.jobTitle)
				
			
		}));




		// const experience = this.props.location.profile.map((profile,idx) => {
		// 	console.log(profile.experience, 'passing');
		// 	return profile[profile].experience.map((experience,idx) => 
		// 			<div>
		// 				<p key={idx}>{experience.company}</p>
		// 			</div>
		// 		);
		// 	});

		// return(
		// profile.map((bio, idx) => {
		// 	console.log(bio);
		// 	console.log(idx);
		// 	bio[idx].map((item, idx) => {
		// 		console.log(item, 'this is the item');
		// 		<p key={idx}>{bio.company}</p>	
		// 	})

		// }));

		// profile.map((bio, idx) => {
		// 	return(
		// 		<h1>bio</h1>
		// 	);
		// });


		// if(this.props.location.profile){
		// 	const experience = this.props.location.profile.map((bio,idx) => {
		// 	console.log(bio.experience, 'passing');

		// 	if(bio.experience){
		// 		return this.props.location.profile[bio].map((company,idx) => 
		// 			<div>
		// 				<p key={idx}>{company}</p>
		// 			</div>
		// 		);
		// 	}});
			
		// }

		// return(
		// 	this.props.location.profile.map((profile, idx) => {
		// 		profile.map((experience, idx) => 
		// 			<p key={idx}>{experience.company}</p>	
		// 		);	
		// 	})
		// )


		// return(
		// 	this.props.location.profile.map((profile, idx) => {
		// 		profile.map((experience, idx) => 
		// 			<p key={idx}>{experience.company}</p>	
		// 		);	
		// 	})
		// )
	}
}

export default Profile;
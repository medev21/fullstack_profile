import React, { Component } from "react";
import { Link } from "react-router-dom";
import video from "../../videos/lake.mp4"
import video2 from "../../videos/lonetree.mp4"

class Intro extends Component {
	render(){

		return(
			<div>
				<video className="introVid" loop autoPlay>
					<source src={video2} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="defaultWrapper homeWrapper">
					{/*<video loop autoPlay>
						<source src={video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>*/}
					<h2>Frontend developer who enjoys finding solutions to complex problems in an elegant way.</h2>
					<p>Enthusiastic, motivated, and high-performing team player who is passionate about frontend development</p>
					<Link to='/profile'>View profile</Link>
				</div>
			</div>
		)
	}
}

export default Intro;
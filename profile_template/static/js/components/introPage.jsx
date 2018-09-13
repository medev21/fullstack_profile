import React, { Component } from "react";
import { Link } from "react-router-dom";
import lonetree from "../../videos/lonetree.mp4"
import ScrollToTopOnMount from "./scrollToTop";

class Intro extends Component {
	render(){

		return(
			<div>
				<ScrollToTopOnMount />
				<video className="introVid" loop autoPlay>
					<source src={lonetree} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="defaultWrapper homeWrapper">
					<h2>Frontend developer who enjoys finding solutions to complex problems in an elegant way.</h2>
					<p>Enthusiastic, motivated, and high-performing team player who is passionate about frontend development</p>
					<Link to='/profile'>View profile</Link>
				</div>
			</div>
		)
	}
}

export default Intro;
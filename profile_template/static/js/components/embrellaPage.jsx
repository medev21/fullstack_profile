import React, { Component} from "react";
import embrella1 from '../../images/embrella1.png';
import embrella2 from '../../images/embrella2.png';
import Images from './imagesComponent';
import ScrollToTopOnMount from "./scrollToTop";

class Embrella extends Component {
	render(){
		let images = [embrella1, embrella2]
		
		return(
			<div className="projectSection">
				<ScrollToTopOnMount />
				<div className="projectDesc">
					<h2>Embrella</h2>
					<p>
						Embrella's mission is to build a community that brings victims and their support groups together to take a stand against violence towards women.
					</p>
					<p>Tools:  HTML, CSS, AngularJS, Flask -- Designs were provided by UX Designer.</p>
					<ul>
						<li><a href="https://embrella-xad-site.herokuapp.com/" target="_blank">Link</a></li>
					</ul>
				</div>
				<Images images={images} />

			</div>
		);
	}
}

export default Embrella;
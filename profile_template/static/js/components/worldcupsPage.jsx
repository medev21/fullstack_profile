import React, {Component} from "react";
import worldcup1 from '../../images/worldcup1.png';
import worldcup2 from '../../images/worldcup2.png';
import worldcup3 from '../../images/worldcup3.png';
import worldcup4 from '../../images/worldcup4.png';
import Images from './imagesComponent';
import ScrollToTopOnMount from "./scrollToTop";

class Worldcups extends Component {

	render(){
		let images = [worldcup1, worldcup2, worldcup3, worldcup4]

		return(
			<div className="projectSection">
				<ScrollToTopOnMount />
				<div className="projectDesc">
					<h2>Worldcups</h2>
					<p>
						This site displays a list of all the worldcups with winner and host nation.
					</p>
					<p>Tools: NodeJS, Bootstrap, and Javascript.</p>
					<ul>
						<li><a href="https://fifa-worldcups.herokuapp.com/" target="_blank">Link</a></li>
					</ul>
				</div>
				<Images images={images} />

			</div>
		)

	}

}

export default Worldcups;
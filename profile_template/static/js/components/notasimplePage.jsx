import React, {Component} from "react";
import notasimple0 from '../../images/notasimple0.png';
import notasimple1 from '../../images/notasimple1.png';
import notasimple2 from '../../images/notasimple2.png';
import notasimple3 from '../../images/notasimple3.png';
import notasimple4 from '../../images/notasimple4.png'
import Images from './imagesComponent';
import ScrollToTopOnMount from "./scrollToTop";

class Commcx extends Component {

	render(){

		let images = [notasimple0, notasimple1, notasimple2, notasimple3, notasimple4]

		return(
			<div className="projectSection">
				<ScrollToTopOnMount />
				<div className="projectDesc">
					<h2>Commcx</h2>
					<p>
						An education platform that delivers online learning opportunities from lectures, courses, certificate programs and more.
					</p>
					<p>Tools: HTML, CSS, JavaScript, JQuery  --Designs were provided by UX designer.</p>
					<ul>
						<li><a href="https://commcx.com/" target="_blank">Link</a></li>
					</ul>
				</div>

				<Images images={images} />

			</div>
		)

	}

}

export default Commcx

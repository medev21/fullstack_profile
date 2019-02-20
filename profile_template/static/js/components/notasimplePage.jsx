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
					<h2>NotaSimple</h2>
					<p>
                        A simple note taking tool - Sticky Notes.
					</p>
					<p>Tools: MongoDB, Express, React, Node.js (MERN), Webpack </p>
					<ul>
						<li><a href="https://notasimplemern.herokuapp.com/" target="_blank">Link</a></li>
					</ul>
				</div>

				<Images images={images} />

			</div>
		)

	}

}

export default Commcx

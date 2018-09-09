import React, {Component} from "react";
import commcx0 from '../../images/commcx0.png';
import commcx1 from '../../images/commcx1.png';
import commcx2 from '../../images/commcx2.png';
import commcx3 from '../../images/commcx3.png';
import Images from './imagesComponent';

class Commcx extends Component {

	render(){

		let images = [commcx0, commcx1, commcx2, commcx3]

		return(
			<div className="projectSection">
				<div className="projectDesc">
					<h2>Commcx</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
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

// <li><a onClick={this.props.history.goBack}>Back</a></li>

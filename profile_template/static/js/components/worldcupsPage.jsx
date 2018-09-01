import React, {Component} from "react";
import worldcup1 from '../../images/WorldcupSite1.png';
import worldcup2 from '../../images/WorldcupSite2.png';
import worldcup3 from '../../images/WorldcupSite3.png';
import worldcup4 from '../../images/WorldcupSite4.png';
import Images from './imagesComponent';

class Worldcups extends Component {

	render(){
		let images = [worldcup1, worldcup2, worldcup3, worldcup4]

		return(
			<div className="projectSection">
				<div className="projectDesc">
					<h2>Worlcups</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>

					<a onClick={this.props.history.goBack}>Back</a>
				</div>
				<Images images={images} />

			</div>
		)

	}

}

export default Worldcups;
import React, {Component} from "react";
import commcx0 from '../../images/commcx0.png';
import commcx1 from '../../images/commcx1.png';
import commcx2 from '../../images/commcx2.png';
import commcx3 from '../../images/commcx3.png';

class Commcx extends Component {

	render(){

		return(
			<div className="projectSection">
				<div className="projectDesc">
					<h2>Commcx</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>

					<a onClick={this.props.history.goBack}>Back</a>
				</div>
				<div className="imageList">
					<img src={commcx0} />
					<img src={commcx1} />
					<img src={commcx2} />
					<img src={commcx3} />
				</div>

			</div>
		)

	}

}

export default Commcx
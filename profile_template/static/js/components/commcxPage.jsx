import React, {Component} from "react";

class Commcx extends Component {

	render(){

		return(
			<div className="introWrapper">
				<h2>Commcx</h2>
				<a onClick={this.props.history.goBack}>Back</a>
			</div>
		)

	}

}

export default Commcx
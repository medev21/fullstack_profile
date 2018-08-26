import React, {Component} from "react";

class Worldcups extends Component {

	render(){

		return(
			<div className="introWrapper">
				<h2>worldcups</h2>
				<a onClick={this.props.history.goBack}>Back</a>
			</div>
		)

	}

}

export default Worldcups;
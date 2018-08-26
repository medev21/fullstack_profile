import React, { Component} from "react";

class Kanban extends Component {
	render(){
		console.log(this.props)
		return(
			<div className="introWrapper">
				<h2>kanban page</h2>
				<a onClick={this.props.history.goBack}>Back</a>
			</div>
		);
	}
}

export default Kanban;
import React, { Component} from "react";
import kanban2 from '../../images/KanbanCard0.png';

class Kanban extends Component {
	render(){
		console.log(this.props)
		return(
			<div className="introWrapper">
				<h2>kanban page</h2>
				<a onClick={this.props.history.goBack}>Back</a>
				<img src={kanban2} />

			</div>
		);
	}
}

export default Kanban;
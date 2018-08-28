import React, { Component} from "react";
import kanban1 from '../../images/KanbanCard1.png';
import kanban2 from '../../images/KanbanCard2.png';
import kanban3 from '../../images/KanbanCard3.png';
import kanban4 from '../../images/KanbanCard4.png';

class Kanban extends Component {
	render(){
		console.log(this.props)
		return(
			<div className="projectSection">
				<div className="projectDesc">
					<h2>KanbanCard</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>

					<a onClick={this.props.history.goBack}>Back</a>
				</div>
				<div className="imageList">
					<img src={kanban1} />
					<img src={kanban2} />
					<img src={kanban3} />
					<img src={kanban4} />
				</div>

			</div>
		);
	}
}

export default Kanban;
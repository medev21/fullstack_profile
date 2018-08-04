import React, { Component } from "react";

class Projects extends Component {
	render(){
		return(
			<div className="introWrapper">
				<h3>Projects</h3>
				<div>
					<a>
						<div><h4>kanban board</h4></div>
						<div><p>a trello clone app</p></div>
					</a>
				</div>

				<div>
					<a>
						<div><h4>worlcups</h4></div>
						<div><p>a list of all the worlcups</p></div>
					</a>
				</div>

				<div>
					<a>
						<div><h4>commcx</h4></div>
						<div><p>online learning platform</p></div>
					</a>
				</div>
			</div>
		)
	}
}

export default Projects;



import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Kanban from "./kanbanPage";
import Worldcups from "./worldcupsPage"
import Commcx from "./commcxPage"

class Projects extends Component {
	render(){
		const { match } = this.props

		// console.log(match.path);
		// console.log(match.url);
		return(
			<div>
				<div className="introWrapper">
					<h3>Projects</h3>
					<div>
						<Link to={`${match.url}/kanban_board`}>
							<div><h4>kanban board</h4></div>
							<div><p>a trello clone app</p></div>
						</Link>
					</div>

					<div>
						<Link to={`${match.url}/worldcups`}>
							<div><h4>worlcups</h4></div>
							<div><p>a list of all the worlcups</p></div>
						</Link>
					</div>

					<div>
						<Link to={`${match.url}/commcx`}>
							<div><h4>commcx</h4></div>
							<div><p>online learning platform</p></div>
						</Link>
					</div>

				</div>

				<Route path={`${match.url}/kanban_board`} component={Kanban}/>
				<Route path={`${match.url}/worldcups`} component={Worldcups}/>
				<Route path={`${match.url}/commcx`} component={Commcx}/>
				<Route exact path={match.url}/>
			</div>
		)
	}
}

export default Projects;



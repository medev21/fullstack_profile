import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Kanban from "./kanbanPage";
import Worldcups from "./worldcupsPage"
import Commcx from "./commcxPage"

class ProjectNavbar extends Component {

	render(){
		const url = this.props.url;

		return(
			<div>
				<div className="introWrapper projectsNavbar">
					<h3>Projects</h3>
					<div>
						<Link to={`${url}/kanban_board`}>
							<div><h4>kanban board</h4></div>
							<div><p>a trello clone app</p></div>
						</Link>
					</div>

					<div>
						<Link to={`${url}/worldcups`}>
							<div><h4>worlcups</h4></div>
							<div><p>a list of all the worlcups</p></div>
						</Link>
					</div>

					<div>
						<Link to={`${url}/commcx`}>
							<div><h4>commcx</h4></div>
							<div><p>online learning platform</p></div>
						</Link>
					</div>

				</div>

				<Route path={`${url}/kanban_board`} component={Kanban}/>
				<Route path={`${url}/worldcups`} component={Worldcups}/>
				<Route path={`${url}/commcx`} component={Commcx}/>
				<Route exact path={url}/>
			</div>
		)
	}
}

export default ProjectNavbar;



import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Kanban from "./kanbanPage";
import Worldcups from "./worldcupsPage"
import Commcx from "./commcxPage"
import commcxImg from "../../images/commcx2.png"
import kanbanImg from "../../images/kanban0.png"
import worldcupImg from "../../images/worldcup0.png"

class ProjectNavbar extends Component {

	render(){
		const url = this.props.url;

		return(
			<div>
				<div className="introWrapper projectsNavbar">
					<h2>Projects</h2>
					<ul>
						<li>
							<div className="projectCard">
								<div className="projectImg">
									<Link to={`${url}/commcx`}>
										<div className="imgBox" style={{backgroundImage: `url(${commcxImg})`}}></div>
										<div><h4>commcx</h4></div>
									</Link>
								</div>
								<div className="projectDesc"><p>online learning platform</p></div>
							</div>
						</li>
						<li>
							<div className="projectCard">
								<div className="projectImg">
									<Link to={`${url}/kanban_board`}>
										<div className="imgBox" style={{backgroundImage: `url(${kanbanImg})`}}></div>
										<div><h4>kanban board</h4></div>
									</Link>
								</div>
								<div className="projectDesc"><p>a trello clone app</p></div>
							</div>
						</li>
						<li>
							<div className="projectCard">
								<div className="projectImg">
									<Link to={`${url}/worldcups`}>
										<div className="imgBox" style={{backgroundImage: `url(${worldcupImg})`}}></div>
										<div><h4>worlcups</h4></div>
									</Link>
								</div>
								<div className="projectDesc"><p>a list of all the worlcups</p></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default ProjectNavbar;


